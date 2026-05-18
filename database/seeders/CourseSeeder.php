<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Category;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\User;
use App\Models\Quiz;
use App\Models\Question;
use App\Models\Option;
use App\Models\Challenge;
use App\Models\TimedComment;
use App\Models\LessonNote;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        // Get Users
        $teachers = User::where('role', 'teacher')->get();
        $students = User::where('role', 'student')->get();

        $data = [
            [
                'category' => ['name' => 'تطوير الويب', 'slug' => 'web-development'],
                'courses' => [
                    [
                        'title' => 'HTML و CSS من الصفر إلى الاحتراف',
                        'slug' => 'html-css-complete',
                        'description' => 'تعلم أساسيات بناء صفحات الويب من الصفر باستخدام HTML5 و CSS3 الحديثة.',
                        'thumbnail' => 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&q=80',
                        'level' => 'beginner', 'price' => 0,
                        'lessons' => ['مقدمة إلى HTML', 'هيكل الصفحة', 'العناصر والوسوم', 'النماذج والمدخلات', 'مقدمة CSS', 'الألوان والخطوط'],
                    ],
                    [
                        'title' => 'Laravel 11 من الصفر',
                        'slug' => 'laravel-11-complete',
                        'description' => 'أبنِ تطبيقات ويب قوية ومتكاملة باستخدام Laravel 11.',
                        'thumbnail' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
                        'level' => 'intermediate', 'price' => 99,
                        'lessons' => ['مقدمة Laravel', 'التثبيت والإعداد', 'Routing', 'Controllers', 'Blade Templates', 'Eloquent ORM'],
                    ],
                ],
            ],
            [
                'category' => ['name' => 'الذكاء الاصطناعي', 'slug' => 'artificial-intelligence'],
                'courses' => [
                    [
                        'title' => 'Python للذكاء الاصطناعي',
                        'slug' => 'python-for-ai',
                        'description' => 'تعلم Python من الصفر مع التركيز على تطبيقات الذكاء الاصطناعي وعلم البيانات.',
                        'thumbnail' => 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
                        'level' => 'beginner', 'price' => 59,
                        'lessons' => ['مقدمة Python', 'المتغيرات والأنواع', 'القوائم والمصفوفات', 'الدوال', 'الكلاسات'],
                    ],
                ],
            ],
        ];

        foreach ($data as $item) {
            $category = Category::create($item['category']);

            foreach ($item['courses'] as $courseData) {
                $lessons = $courseData['lessons'];
                unset($courseData['lessons']);

                $courseData['category_id'] = $category->id;
                $courseData['teacher_id'] = $teachers->random()->id;
                $courseData['is_published'] = true;
                $courseData['allow_study_rooms'] = true;
                $courseData['allow_timed_comments'] = true;
                
                $course = Course::create($courseData);

                // Create Lessons
                $createdLessons = [];
                foreach ($lessons as $idx => $lessonTitle) {
                    $createdLessons[] = Lesson::create([
                        'course_id' => $course->id,
                        'title'     => 'الدرس ' . ($idx + 1) . ': ' . $lessonTitle,
                        'slug'      => Str::slug($lessonTitle . '-' . $course->slug . '-' . ($idx + 1)),
                        'content'   => 'في هذا الدرس ستتعلم بالتفصيل موضوع: ' . $lessonTitle,
                        'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                        'duration'  => rand(8, 45),
                        'position'  => $idx + 1,
                        'is_preview' => $idx < 1, // First lesson free
                    ]);
                }

                // Create Quiz
                $quiz = Quiz::create([
                    'course_id' => $course->id,
                    'title' => 'اختبار نهائي لـ ' . $course->title,
                    'passing_score' => 70,
                ]);

                for ($i = 1; $i <= 3; $i++) {
                    $question = Question::create([
                        'quiz_id' => $quiz->id,
                        'question_text' => 'سؤال رقم ' . $i . ' حول ' . $course->title,
                    ]);
                    
                    for ($j = 1; $j <= 4; $j++) {
                        Option::create([
                            'question_id' => $question->id,
                            'option_text' => 'الخيار رقم ' . $j,
                            'is_correct' => $j === 1,
                        ]);
                    }
                }

                // Create Challenge
                Challenge::create([
                    'teacher_id' => $course->teacher_id,
                    'course_id' => $course->id,
                    'title' => 'تحدي الأسبوع: ' . $course->title,
                    'description' => 'قم بحل المشروع الصغير الخاص بـ ' . $course->title . ' لتربح نقاطاً إضافية.',
                    'points' => 500,
                    'start_date' => now(),
                    'end_date' => now()->addDays(7),
                    'is_active' => true,
                ]);

                // Enroll Students and create interactions
                foreach ($students as $student) {
                    $student->courses()->attach($course->id, ['enrolled_at' => now()]);
                    
                    // Mark some lessons as completed
                    foreach (array_slice($createdLessons, 0, 2) as $l) {
                        $student->completedLessons()->attach($l->id, ['course_id' => $course->id, 'completed_at' => now()]);
                    }

                    // Add a Timed Comment
                    TimedComment::create([
                        'user_id' => $student->id,
                        'lesson_id' => $createdLessons[0]->id,
                        'content' => 'نقطة رائعة جداً في الثانية العاشرة!',
                        'timestamp' => 10,
                    ]);

                    // Add a Lesson Note
                    LessonNote::create([
                        'user_id' => $student->id,
                        'lesson_id' => $createdLessons[0]->id,
                        'content' => 'ملاحظة مهمة: يجب مراجعة هذا الجزء قبل الاختبار.',
                    ]);
                }
            }
        }
    }
}
