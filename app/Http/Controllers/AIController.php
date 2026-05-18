<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Http;

class AIController extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->user();
        $goal = $user->preferences()->where('key', 'learning_goal')->first()?->value;
        $lessonId = $request->input('lesson_id');
        $lessonTitle = null;

        if ($lessonId) {
            $lessonTitle = \App\Models\Lesson::find($lessonId)?->title;
        }

        return Inertia::render('AI/Chat', [
            'learningGoal' => $goal,
            'lessonId' => $lessonId,
            'lessonTitle' => $lessonTitle,
        ]);
    }

    public function ask(Request $request)
    {
        $request->validate([
            'message' => 'required|string|max:1000',
            'lesson_id' => 'nullable|integer|exists:lessons,id',
        ]);

        $user = auth()->user();
        $message = $request->message;
        $lessonId = $request->input('lesson_id');
        $goal = $user->preferences()->where('key', 'learning_goal')->first()?->value;

        $apiKey = env('GEMINI_API_KEY');

        if (!$apiKey || $apiKey === 'your_gemini_key_here') {
            return response()->json([
                'answer' => "يرجى تهيئة مفتاح Gemini API في ملف .env لتفعيل المساعد الذكي. يمكنك الحصول عليه مجاناً من Google AI Studio.",
            ]);
        }

        $model = 'gemini-2.5-flash'; 
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$apiKey}";

        $systemPrompt = "أنت مساعد تعليمي ذكي في منصة 'كورس'. 
        اسم الطالب: {$user->name}. 
        هدف الطالب التعليمي: {$goal}. 
        يجب أن تكون إجاباتك محفزة، تعليمية، وباللغة العربية الفصحى البسيطة. 
        استخدم معلومات الطالب لتخصيص الإجابة.";

        if ($lessonId) {
            $lesson = \App\Models\Lesson::find($lessonId);
            if ($lesson) {
                $systemPrompt .= "\n\nأنت الآن مخصص للإجابة من خلال هذا المحتوى الخاص بدرس '{$lesson->title}':\n[محتوى الدرس يبدأ هنا]\n{$lesson->content}\n[محتوى الدرس ينتهي هنا]\nملاحظة مهمة جداً: يجب عليك الإجابة حصرياً بناءً على النص السابق المرفق بين القوسين المعقوفين. إذا سألك الطالب عن شيء غير موجود أو غير مرتبط بهذا النص إطلاقاً، يجب عليك أن تعتذر بلباقة وتخبره أنك مخصص للإجابة عن محتوى هذا الدرس فقط.";
            }
        }

        try {
            $response = Http::withoutVerifying()->post($url, [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $systemPrompt . "\n\nسؤال الطالب: " . $message]
                        ]
                    ]
                ]
            ]);

            if ($response->successful()) {
                $data = $response->json();
                $answer = $data['candidates'][0]['content']['parts'][0]['text'] ?? "عذراً، لم أستطع فهم الإجابة.";

                // تسجيل التفاعل في قاعدة البيانات لمتابعة تطور الطالب
                \App\Models\Interaction::create([
                    'user_id' => $user->id,
                    'interactionable_id' => $user->id,
                    'interactionable_type' => \App\Models\User::class,
                    'type' => 'ai_chat',
                    'metadata' => [
                        'question' => $message,
                        'answer' => $answer,
                        'model' => 'gemini-2.5-flash'
                    ]
                ]);

                return response()->json(['answer' => $answer]);
            }

            if ($response->status() === 429) {
                return response()->json([
                    'answer' => "عذراً، لقد استنفدت الحد الأقصى للطلبات المجانية للذكاء الاصطناعي. يرجى المحاولة لاحقاً.",
                ], 429);
            }

            if ($response->status() === 403) {
                return response()->json([
                    'answer' => "عذراً، تم حظر الوصول لواجهة برمجة التطبيقات (API) من قبل جوجل لحسابك الحالي. يرجى مراجعة حسابك في Google AI Studio.",
                ], 403);
            }

            return response()->json([
                'answer' => "حدث خطأ في الاتصال بالذكاء الاصطناعي. يرجى المحاولة لاحقاً.",
            ], 500);

        } catch (\Exception $e) {
            \Log::error("Gemini Error: " . $e->getMessage());
            return response()->json([
                'answer' => "عذراً، حدث خطأ تقني: " . $e->getMessage(),
            ], 500);
        }
    }

    public function summarize(Request $request)
    {
        $request->validate([
            'lesson_id' => 'required|integer|exists:lessons,id',
        ]);

        $lesson = \App\Models\Lesson::find($request->lesson_id);

        if (!$lesson || empty(trim($lesson->content))) {
            return response()->json([
                'summary' => "عذراً، لا يوجد محتوى نصي متاح لهذا الدرس لكي أقوم بتلخيصه."
            ], 400);
        }

        $apiKey = env('GEMINI_API_KEY');
        $model = 'gemini-2.5-flash'; 
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$apiKey}";

        $systemPrompt = "أنت مساعد ذكي متخصص في تلخيص المحتوى التعليمي. 
        المطلوب منك هو قراءة النص التالي الخاص بدرس '{$lesson->title}' وتقديم ملخص شامل ومنسق بطريقة جذابة ومقروءة.
        يجب أن يحتوي الملخص على:
        1. الفكرة العامة للدرس (في سطرين).
        2. النقاط الرئيسية (في شكل قائمة مرتبة).
        3. أهم المصطلحات (إن وجدت).
        
        استخدم لغة عربية فصحى بسيطة وواضحة، واستخدم تنسيق Markdown بشكل أنيق.
        
        إليك النص:
        {$lesson->content}";

        try {
            $response = Http::withoutVerifying()->post($url, [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $systemPrompt]
                        ]
                    ]
                ]
            ]);

            if ($response->successful()) {
                $data = $response->json();
                $summaryMarkdown = $data['candidates'][0]['content']['parts'][0]['text'] ?? "لم أتمكن من توليد الملخص.";
                $summaryHtml = \Illuminate\Support\Str::markdown($summaryMarkdown);

                // تسجيل تفاعل التلخيص
                \App\Models\Interaction::create([
                    'user_id' => auth()->id(),
                    'interactionable_id' => $lesson->id,
                    'interactionable_type' => \App\Models\Lesson::class,
                    'type' => 'ai_summary',
                    'metadata' => [
                        'lesson_title' => $lesson->title,
                        'model' => $model
                    ]
                ]);

                return response()->json(['summary' => $summaryHtml]);
            }

            if ($response->status() === 429) {
                return response()->json([
                    'summary' => "عذراً، لقد استنفدت الحد الأقصى للطلبات المجانية للذكاء الاصطناعي. يرجى المحاولة لاحقاً."
                ], 429);
            }

            if ($response->status() === 403) {
                return response()->json([
                    'summary' => "عذراً، تم حظر الوصول لواجهة برمجة التطبيقات (API) من قبل جوجل لحسابك الحالي."
                ], 403);
            }

            return response()->json([
                'summary' => "حدث خطأ في الاتصال بالذكاء الاصطناعي. يرجى المحاولة لاحقاً."
            ], 500);

        } catch (\Exception $e) {
            \Log::error("Gemini Summarize Error: " . $e->getMessage());
            return response()->json([
                'summary' => "عذراً، حدث خطأ تقني أثناء التلخيص."
            ], 500);
        }
    }

    public function generateQuiz(Request $request)
    {
        $request->validate([
            'lesson_id' => 'required|integer|exists:lessons,id',
        ]);

        $lesson = \App\Models\Lesson::find($request->lesson_id);

        if (!$lesson || empty(trim($lesson->content))) {
            return response()->json([
                'error' => "لا يوجد محتوى نصي لإنشاء اختبار من هذا الدرس."
            ], 400);
        }

        $apiKey = env('GEMINI_API_KEY');
        $model = 'gemini-2.5-flash'; 
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$apiKey}";

        $systemPrompt = "أنت خبير تعليمي. قم بإنشاء اختبار قصير (Quiz) من 3 أسئلة خيارات متعددة بناءً على النص التالي الخاص بدرس '{$lesson->title}'.
        يجب أن يكون المخرج حصرياً بصيغة JSON array فقط بدون أي نصوص إضافية أو علامات Markdown مثل ```json، وكل سؤال يجب أن يكون بصيغة Object يحتوي على:
        - 'question': نص السؤال باللغة العربية.
        - 'options': مصفوفة (Array) تحتوي على 4 خيارات باللغة العربية.
        - 'correct_answer': الإجابة الصحيحة (يجب أن تكون مطابقة تماماً لأحد الخيارات).
        - 'explanation': شرح قصير يوضح لماذا هذه الإجابة هي الصحيحة.
        
        إليك النص:
        {$lesson->content}";

        try {
            $response = Http::withoutVerifying()->post($url, [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $systemPrompt]
                        ]
                    ]
                ]
            ]);

            if ($response->successful()) {
                $data = $response->json();
                $quizJsonStr = $data['candidates'][0]['content']['parts'][0]['text'] ?? "[]";
                
                // تنظيف الرد تحسباً لأي نصوص زائدة
                $quizJsonStr = trim($quizJsonStr);
                $quizJsonStr = preg_replace('/```json/i', '', $quizJsonStr);
                $quizJsonStr = preg_replace('/```/i', '', $quizJsonStr);
                
                $quiz = json_decode($quizJsonStr, true);

                if (!$quiz || !is_array($quiz)) {
                    return response()->json(['error' => 'فشل الذكاء الاصطناعي في تنسيق الاختبار. يرجى المحاولة مرة أخرى.'], 500);
                }

                // تسجيل تفاعل الاختبار
                \App\Models\Interaction::create([
                    'user_id' => auth()->id(),
                    'interactionable_id' => $lesson->id,
                    'interactionable_type' => \App\Models\Lesson::class,
                    'type' => 'ai_quiz_generated',
                    'metadata' => [
                        'lesson_title' => $lesson->title,
                        'questions_count' => count($quiz)
                    ]
                ]);

                return response()->json(['quiz' => $quiz]);
            }

            if ($response->status() === 429) {
                return response()->json([
                    'error' => "عذراً، لقد استنفدت الحد الأقصى للطلبات المجانية للذكاء الاصطناعي. يرجى المحاولة لاحقاً."
                ], 429);
            }

            if ($response->status() === 403) {
                return response()->json([
                    'error' => "عذراً، تم حظر الوصول لواجهة برمجة التطبيقات (API) لحسابك الحالي."
                ], 403);
            }

            return response()->json([
                'error' => "حدث خطأ في الاتصال بالذكاء الاصطناعي. يرجى المحاولة لاحقاً."
            ], 500);

        } catch (\Exception $e) {
            \Log::error("Gemini Quiz Error: " . $e->getMessage());
            return response()->json([
                'error' => "عذراً، حدث خطأ تقني أثناء إنشاء الاختبار."
            ], 500);
        }
    }

    public function generateRoadmap(Request $request)
    {
        $request->validate([
            'goal' => 'required|string|max:255',
            'level' => 'required|string|in:beginner,intermediate,advanced',
            'time' => 'required|string|max:100',
        ]);

        $courses = \App\Models\Course::select('title', 'description', 'level')->get()->map(function($c) {
            return "- {$c->title} ({$c->level}): {$c->description}";
        })->join("\n");

        $prompt = "أنت مستشار تعليمي خبير في منصة تقنية.
الطالب لديه الهدف التالي: {$request->goal}
مستواه الحالي: {$request->level}
الوقت المتاح للتعلم: {$request->time}

هذه هي الكورسات المتاحة حالياً على منصتنا (لا تقترح كورسات من خارج هذه القائمة):
{$courses}

بناءً على البيانات السابقة، قم برسم خارطة طريق دراسية (Roadmap) منظمة ومقسمة زمنياً للطالب.
يجب أن تعيد النتيجة بصيغة مصفوفة JSON حصراً، بدون أي نصوص إضافية، بحيث يحتوي كل عنصر على:
- week: (مثال: الأسبوع الأول أو الشهر الأول)
- title: (عنوان المرحلة)
- description: (شرح مبسط لما يجب التركيز عليه)
- recommended_courses: (مصفوفة بأسماء الكورسات المقترحة من القائمة أعلاه)

المخرجات (JSON فقط):";

        $response = Http::withoutVerifying()->withHeaders([
            'Content-Type' => 'application/json',
        ])->post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" . env('GEMINI_API_KEY'), [
            'contents' => [
                [
                    'parts' => [
                        ['text' => $prompt]
                    ]
                ]
            ],
            'generationConfig' => [
                'temperature' => 0.7,
            ]
        ]);

        if ($response->successful()) {
            $text = $response->json('candidates.0.content.parts.0.text');
            // Clean markdown if present
            $text = preg_replace('/```json|```/', '', $text);
            $roadmap = json_decode(trim($text), true);
            
            if (!$roadmap) {
                return response()->json(['error' => 'عذراً، لم نتمكن من تنسيق الخطة بشكل صحيح. حاول مجدداً.'], 500);
            }

            return response()->json(['roadmap' => $roadmap]);
        }

        if ($response->status() === 429) {
            return response()->json(['error' => 'عذراً، لقد استنفدت الحد الأقصى للطلبات المجانية للذكاء الاصطناعي. يرجى المحاولة لاحقاً.'], 429);
        }

        if ($response->status() === 403) {
            return response()->json(['error' => 'عذراً، تم حظر الوصول لواجهة برمجة التطبيقات (API) لحسابك الحالي.'], 403);
        }

        return response()->json(['error' => 'حدث خطأ أثناء التواصل مع خوادم الذكاء الاصطناعي.'], 500);
    }

    public function simulateInterview(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'chat_history' => 'required|array',
            'user_answer' => 'nullable|string',
        ]);

        $course = \App\Models\Course::with('lessons')->find($request->course_id);
        
        // Limit content to first 10 lessons to avoid token overflow
        $courseContent = $course->lessons->take(10)->map(function($l) {
            return $l->title;
        })->join("، ");

        $systemInstruction = "أنت مدير توظيف تقني تجري مقابلة عمل للمستخدم لاختبار مهاراته بعد إنهائه لكورس: {$course->title}.
قواعد المقابلة الصارمة:
1. اطرح سؤالاً واحداً فقط في كل مرة.
2. إذا قدم الطالب إجابة، قم بتقييمها باختصار (مثال: إجابة ممتازة، أو ينقصها كذا)، ثم اطرح السؤال التالي مباشرة.
3. استمد أسئلتك من هذا المحتوى حصراً:
{$courseContent}
4. حافظ على شخصية مدير التوظيف الاحترافي.";

        $messages = [];
        // Hack for Gemini API to simulate system instruction since v1beta generateContent might not strictly support systemInstruction in all library versions as a separate field, we inject it as context.
        $messages[] = ['role' => 'user', 'parts' => [['text' => $systemInstruction]]];
        $messages[] = ['role' => 'model', 'parts' => [['text' => 'مفهوم، أنا مستعد لإجراء المقابلة وتطبيق القواعد.']]];

        foreach ($request->chat_history as $msg) {
            $messages[] = [
                'role' => $msg['role'] === 'bot' ? 'model' : 'user',
                'parts' => [['text' => $msg['content']]]
            ];
        }

        if ($request->user_answer) {
            $messages[] = [
                'role' => 'user',
                'parts' => [['text' => $request->user_answer]]
            ];
        } else if (empty($request->chat_history)) {
             $messages[] = [
                'role' => 'user',
                'parts' => [['text' => 'مرحباً، أنا جاهز للمقابلة. تفضل بطرح السؤال الأول.']]
            ];
        }

        $response = Http::withoutVerifying()->withHeaders([
            'Content-Type' => 'application/json',
        ])->post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" . env('GEMINI_API_KEY'), [
            'contents' => $messages,
            'generationConfig' => [
                'temperature' => 0.7,
            ]
        ]);

        if ($response->successful()) {
            $reply = $response->json('candidates.0.content.parts.0.text');
            return response()->json(['reply' => $reply]);
        }

        if ($response->status() === 429) {
            return response()->json([
                'error' => 'عذراً، لقد استنفدت الحد الأقصى للطلبات المجانية للذكاء الاصطناعي. يرجى المحاولة لاحقاً.',
            ], 429);
        }

        if ($response->status() === 403) {
            return response()->json([
                'error' => 'عذراً، تم حظر الوصول لواجهة برمجة التطبيقات (API) لحسابك الحالي.',
            ], 403);
        }

        return response()->json([
            'error' => 'حدث خطأ في الاتصال بخوادم المقابلة. يرجى المحاولة لاحقاً.',
        ], 500);
    }
}
