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

class JavaCoursesSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Create or Find Khaled the Teacher
        $teacher = User::firstOrCreate(
            ['email' => 'khaled@gmail.com'],
            [
                'name' => 'أ. خالد أحمد',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
                'role' => 'teacher',
            ]
        );

        // 2. Create or Find Java Category
        $category = Category::firstOrCreate(
            ['slug' => 'java-programming'],
            ['name' => 'برمجة جافا']
        );

        // 3. Define Courses Data
        $coursesData = [
            [
                'title' => 'جافا 1: أساسيات لغة جافا',
                'slug' => 'java-1-basics',
                'description' => 'تعلم أساسيات لغة البرمجة الشهيرة Java من الصفر. يغطي هذا الكورس المتغيرات، الدوال، الشروط، التكرار والمصفوفات مع تطبيقات عملية مكثفة.',
                'thumbnail' => 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
                'level' => 'beginner',
                'price' => 0,
                'lessons' => [
                    [
                        'title' => 'مقدمة إلى لغة جافا وبيئة التطوير JDK',
                        'content' => 'مرحباً بك في عالم الجافا! في هذا الدرس سنتعرف على تاريخ لغة جافا، مميزاتها، وكيفية تثبيت JDK (Java Development Kit) وإعداد بيئة التطوير (IDE) مثل IntelliJ IDEA أو NetBeans لكتابة أول برنامج Java وعرض جملة "Hello World".'
                    ],
                    [
                        'title' => 'المتغيرات وأنواع البيانات الأساسية',
                        'content' => 'سنتعلم في هذا الدرس كيفية حجز مساحات في الذاكرة لتخزين البيانات. سنشرح أنواع البيانات الأساسية (Primitive Data Types) مثل int, double, boolean, char، وكيفية الإعلان عن المتغيرات وتحديد قيمها.'
                    ],
                    [
                        'title' => 'العمليات الحسابية والمنطقية',
                        'content' => 'شرح كامل لجميع العمليات الرياضية مثل (+, -, *, /, %) والعمليات المنطقية مثل (&&, ||, !) وعمليات المقارنة (==, !=, <, >) التي تستخدم لبناء المنطق الرياضي في البرامج.'
                    ],
                    [
                        'title' => 'جمل الشروط والتحكم (If, Switch)',
                        'content' => 'سنتعرف على كيفية اتخاذ القرارات برمجياً. سنقوم بشرح جملة الشرط if, else if, else بالتفصيل، بالإضافة إلى جملة الاختيار switch للحالات المتعددة.'
                    ],
                    [
                        'title' => 'الحلقات التكرارية (For, While, Do-While)',
                        'content' => 'تكرار الكود هو أساس البرمجة. في هذا الدرس سنشرح الأنواع الثلاثة للحلقات التكرارية في جافا: for loop للتكرار المحدد، و while و do-while loop للتكرار المعتمد على شروط منطقية.'
                    ],
                    [
                        'title' => 'المصفوفات ذات البعد الواحد (Arrays)',
                        'content' => 'شرح لكيفية تخزين مجموعة من البيانات من نفس النوع في متغير واحد يسمى مصفوفة. سنتعلم كيفية تعريف المصفوفة، تحديد حجمها، وقراءة وتعديل عناصرها باستخدام الحلقات التكرارية.'
                    ],
                    [
                        'title' => 'الدوال وطرق كتابتها واستدعائها (Methods)',
                        'content' => 'تقسيم الكود إلى أجزاء صغيرة يسهل قراءتها وإعادة استخدامها. سنتعلم كيفية تعريف الدوال (Methods)، تمرير المعاملات (Parameters)، وإرجاع القيم (Return Values).'
                    ]
                ],
                'quiz' => [
                    'title' => 'الاختبار النهائي لأساسيات جافا 1',
                    'questions' => [
                        [
                            'text' => 'ما هي الوظيفة الأساسية للـ JVM (Java Virtual Machine)؟',
                            'options' => [
                                ['text' => 'ترجمة كود الجافا إلى كود تفهمه الآلة وتشغيل البايت كود (Bytecode) على أي نظام تشغيل', 'correct' => true],
                                ['text' => 'تصميم واجهات المستخدم الرسومية', 'correct' => false],
                                ['text' => 'كتابة الأكواد تلقائياً', 'correct' => false],
                                ['text' => 'حفظ الكود على السحابة', 'correct' => false]
                            ]
                        ],
                        [
                            'text' => 'أي من أنواع البيانات التالية يستخدم لتخزين قيمة منطقية (صح/خطأ)؟',
                            'options' => [
                                ['text' => 'boolean', 'correct' => true],
                                ['text' => 'int', 'correct' => false],
                                ['text' => 'String', 'correct' => false],
                                ['text' => 'double', 'correct' => false]
                            ]
                        ],
                        [
                            'text' => 'كيف نقوم بتعريف مصفوفة أرقام صحيحة بحجم 5 عناصر في جافا؟',
                            'options' => [
                                ['text' => 'int[] arr = new int[5];', 'correct' => true],
                                ['text' => 'int arr = new array(5);', 'correct' => false],
                                ['text' => 'int[5] arr = new int[];', 'correct' => false],
                                ['text' => 'array arr = new int[5];', 'correct' => false]
                            ]
                        ]
                    ]
                ]
            ],
            [
                'title' => 'جافا 2: البرمجة كائنية التوجه (OOP)',
                'slug' => 'java-2-oop',
                'description' => 'انطلق إلى مستوى المحترفين عبر تعلم أساسيات البرمجة كائنية التوجه (OOP) في جافا. الكبسلة، الوراثة، تعدد الأشكال، الكلاسات التجريدية والواجهات.',
                'thumbnail' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
                'level' => 'intermediate',
                'price' => 49,
                'lessons' => [
                    [
                        'title' => 'مقدمة إلى الكلاسات والكائنات (Classes & Objects)',
                        'content' => 'الدخول في عالم الكائنات. سنتعلم كيفية تصميم الكلاسات (Classes) كقوالب أساسية، وكيفية اشتقاق كائنات (Objects) منها واستخدام الخصائص (Fields) والوظائف (Methods) الخاصة بها.'
                    ],
                    [
                        'title' => 'مفهوم الكبسلة وحماية البيانات (Encapsulation)',
                        'content' => 'كيفية إخفاء التفاصيل الداخلية للكلاس وحماية البيانات من التعديل الخارجي المباشر باستخدام معدلات الوصول (Access Modifiers) مثل private و public و protected، واستخدام دوال Getter و Setter.'
                    ],
                    [
                        'title' => 'الوراثة وتوسيع الكلاسات (Inheritance)',
                        'content' => 'إعادة استخدام الأكواد بكفاءة. سنتعلم كيف يمكن لكلاس فرعي (Subclass) أن يرث خصائص ووظائف كلاس رئيسي (Superclass) باستخدام الكلمة المفتاحية extends.'
                    ],
                    [
                        'title' => 'تعدد الأشكال والمستويات (Polymorphism)',
                        'content' => 'مفهوم تعدد الأشكال وقوة مرونة الكود. سنشرح كيفية إعادة كتابة الدوال (Method Overriding) والتحميل الزائد للدوال (Method Overloading) وكيفية التعامل مع كائنات من أنواع مختلفة بشكل موحد.'
                    ],
                    [
                        'title' => 'الكلاسات المجردة والواجهات (Abstract Classes & Interfaces)',
                        'content' => 'بناء العقود البرمجية والهياكل التنظيمية للمشروع. سنتعلم الفروق الجوهرية بين الكلاس التجريدي (Abstract Class) والواجهة (Interface) وكيفية استخدامهما لبناء مشاريع ضخمة ومنظمة.'
                    ],
                    [
                        'title' => 'معالجة الأخطاء والاستثناءات (Exception Handling)',
                        'content' => 'حماية البرنامج من الانهيار المفاجئ. سنشرح كيفية استخدام try-catch-finally للتعامل مع الأخطاء وتوقعها، والفرق بين Checked و Unchecked Exceptions وكيفية إنشاء استثناء خاص بنا.'
                    ]
                ],
                'quiz' => [
                    'title' => 'اختبار نهائي لـ جافا 2: OOP',
                    'questions' => [
                        [
                            'text' => 'أي كلمة مفتاحية تستخدم لتطبيق مفهوم الوراثة (Inheritance) بين الكلاسات في جافا؟',
                            'options' => [
                                ['text' => 'extends', 'correct' => true],
                                ['text' => 'implements', 'correct' => false],
                                ['text' => 'inherits', 'correct' => false],
                                ['text' => 'super', 'correct' => false]
                            ]
                        ],
                        [
                            'text' => 'ما فائدة استخدام الـ Encapsulation؟',
                            'options' => [
                                ['text' => 'حماية خصائص الكلاس ومنع الوصول المباشر لها إلا عبر دوال مخصصة', 'correct' => true],
                                ['text' => 'تسريع عملية تشغيل البرنامج فقط', 'correct' => false],
                                ['text' => 'تكرار كتابة الكود لعدة مرات', 'correct' => false],
                                ['text' => 'تعريف الدوال بدون جسم برمي', 'correct' => false]
                            ]
                        ]
                    ]
                ]
            ],
            [
                'title' => 'جافا 3: جافا المتقدمة وهياكل البيانات',
                'slug' => 'java-3-advanced',
                'description' => 'احترف المواضيع المتقدمة في جافا. يتناول هذا الكورس إطار عمل المجموعات (Collections Framework)، معالجة الملفات (I/O)، الخيوط المتعددة المتزامنة (Multithreading)، وربط قواعد البيانات (JDBC).',
                'thumbnail' => 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80',
                'level' => 'advanced',
                'price' => 99,
                'lessons' => [
                    [
                        'title' => 'مجموعات البيانات وإطار عمل Collections Framework',
                        'content' => 'دراسة عميقة لهياكل البيانات الجاهزة في جافا. سنتعلم استخدام القوائم المتقدمة مثل ArrayList و LinkedList، المجموعات الفريدة Set، والخرائط الثنائية Map (HashMap) والفرق الفني بين كل منها.'
                    ],
                    [
                        'title' => 'التعامل مع الملفات ونظم الإدخال والإخراج (Java I/O)',
                        'content' => 'سنتعلم في هذا الدرس كيفية قراءة البيانات من ملفات النص وكتابتها وحفظها على القرص الصلب باستخدام BufferedReader, BufferedWriter وكلاسات الملفات File.'
                    ],
                    [
                        'title' => 'البرمجة المتزامنة والخيوط المتعددة (Multithreading)',
                        'content' => 'تشغيل عدة مهام برمجية في نفس الوقت لزيادة كفاءة وسرعة التطبيق. سنشرح كيفية إنشاء الخيوط باستخدام Thread class و Runnable interface وتجنب مشكلات التزامن (Synchronization).'
                    ],
                    [
                        'title' => 'اتصال جافا بقواعد البيانات (JDBC)',
                        'content' => 'كيفية ربط تطبيق جافا بقواعد بيانات MySQL أو PostgreSQL لتخزين وجلب وتعديل وحذف البيانات ديناميكياً باستخدام استعلامات SQL.'
                    ],
                    [
                        'title' => 'التعابير البرمجية Lambda وتدفقات البيانات Streams',
                        'content' => 'مفاهيم البرمجة الوظيفية الحديثة في جافا (Java 8+). سنتعلم كيف نكتب أكواداً قصيرة وفعالة لفلترة وتعديل مجموعات البيانات الكبيرة بسهولة.'
                    ]
                ],
                'quiz' => [
                    'title' => 'اختبار نهائي لـ جافا 3 المتقدمة',
                    'questions' => [
                        [
                            'text' => 'أي من الكلاسات التالية لا يسمح بتكرار العناصر داخله؟',
                            'options' => [
                                ['text' => 'HashSet', 'correct' => true],
                                ['text' => 'ArrayList', 'correct' => false],
                                ['text' => 'LinkedList', 'correct' => false],
                                ['text' => 'Vector', 'correct' => false]
                            ]
                        ],
                        [
                            'text' => 'ما هي الطريقة الصحيحة لبدء تشغيل خيط برمجي (Thread) جديد؟',
                            'options' => [
                                ['text' => 'استدعاء الدالة start()', 'correct' => true],
                                ['text' => 'استدعاء الدالة run() مباشرة', 'correct' => false],
                                ['text' => 'استدعاء الدالة execute()', 'correct' => false],
                                ['text' => 'استدعاء الدالة init()', 'correct' => false]
                            ]
                        ]
                    ]
                ]
            ]
        ];

        // 4. Insert Courses, Lessons, Quizzes, Questions, Options, Challenges
        foreach ($coursesData as $courseInfo) {
            $lessons = $courseInfo['lessons'];
            $quizInfo = $courseInfo['quiz'];
            unset($courseInfo['lessons'], $courseInfo['quiz']);

            $courseInfo['category_id'] = $category->id;
            $courseInfo['teacher_id'] = $teacher->id;
            $courseInfo['is_published'] = true;
            $courseInfo['allow_study_rooms'] = true;
            $courseInfo['allow_timed_comments'] = true;

            // Save Course
            $course = Course::create($courseInfo);

            // Save Lessons
            foreach ($lessons as $idx => $lessonInfo) {
                Lesson::create([
                    'course_id' => $course->id,
                    'title' => 'الدرس ' . ($idx + 1) . ': ' . $lessonInfo['title'],
                    'slug' => Str::slug($lessonInfo['title'] . '-' . $course->slug . '-' . ($idx + 1)),
                    'content' => $lessonInfo['content'],
                    'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
                    'duration' => rand(15, 60),
                    'position' => $idx + 1,
                    'is_preview' => $idx < 1, // First lesson is preview
                ]);
            }

            // Save Quiz
            $quiz = Quiz::create([
                'course_id' => $course->id,
                'title' => $quizInfo['title'],
                'passing_score' => 70,
            ]);

            // Save Questions & Options
            foreach ($quizInfo['questions'] as $qIdx => $qInfo) {
                $question = Question::create([
                    'quiz_id' => $quiz->id,
                    'question_text' => $qInfo['text'],
                ]);

                foreach ($qInfo['options'] as $oInfo) {
                    Option::create([
                        'question_id' => $question->id,
                        'option_text' => $oInfo['text'],
                        'is_correct' => $oInfo['correct'],
                    ]);
                }
            }

            // Save Challenge
            Challenge::create([
                'teacher_id' => $teacher->id,
                'course_id' => $course->id,
                'title' => 'المشروع التطبيقي لـ ' . $course->title,
                'description' => 'قم ببناء مشروع برمي كامل يطبق المفاهيم الأساسية التي تعلمتها في ' . $course->title . ' لتربح نقاطاً وتثبت فهمك.',
                'points' => 500,
                'start_date' => now(),
                'end_date' => now()->addDays(14),
                'is_active' => true,
            ]);
        }
    }
}
