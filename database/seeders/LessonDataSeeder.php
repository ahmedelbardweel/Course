<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Lesson;

class LessonDataSeeder extends Seeder
{
    public function run(): void
    {
        $resourceTemplates = [
            [
                ['title' => 'التوثيق الرسمي', 'url' => 'https://developer.mozilla.org', 'type' => 'docs'],
                ['title' => 'مقال تكميلي على Medium', 'url' => 'https://medium.com', 'type' => 'article'],
                ['title' => 'مستودع GitHub للمشروع', 'url' => 'https://github.com', 'type' => 'github'],
            ],
            [
                ['title' => 'W3Schools Reference', 'url' => 'https://w3schools.com', 'type' => 'docs'],
                ['title' => 'فيديو شرح تكميلي', 'url' => 'https://youtube.com', 'type' => 'video'],
                ['title' => 'كود المشروع جاهز للتنزيل', 'url' => 'https://github.com', 'type' => 'github'],
            ],
            [
                ['title' => 'Stack Overflow - أسئلة شائعة', 'url' => 'https://stackoverflow.com', 'type' => 'article'],
                ['title' => 'الكود المصدري للدرس', 'url' => 'https://github.com', 'type' => 'github'],
                ['title' => 'أدوات مساعدة مجانية', 'url' => 'https://devtools.example.com', 'type' => 'tool'],
            ],
        ];

        $faqTemplates = [
            [
                ['q' => 'هل أحتاج خبرة سابقة لهذا الدرس؟', 'a' => 'لا، هذا الدرس مصمم ليكون واضحاً للمبتدئين وفي نفس الوقت مفيداً للمحترفين.'],
                ['q' => 'كم يستغرق تطبيق ما تعلمته في هذا الدرس؟', 'a' => 'بالتدريب اليومي لمدة 30 دقيقة، ستتقن المفهوم خلال أسبوع.'],
                ['q' => 'هل يوجد مشروع تطبيقي مع هذا الدرس؟', 'a' => 'نعم، في نهاية هذا الدرس ستجد تمريناً عملياً يرسّخ المفاهيم.'],
            ],
            [
                ['q' => 'ما الفرق بين هذا الدرس والدرس السابق؟', 'a' => 'كل درس يبني على ما قبله، هذا الدرس يعمّق الفهم ويضيف مفاهيم متقدمة.'],
                ['q' => 'أين يمكنني التدرب على هذا الموضوع؟', 'a' => 'يمكنك استخدام المصادر المرفقة في تبويب "المصادر" للتدرب الإضافي.'],
                ['q' => 'هل هذه التقنية مطلوبة في سوق العمل؟', 'a' => 'نعم، هذه التقنية من أكثر المطلوبات في سوق العمل حالياً.'],
            ],
            [
                ['q' => 'ماذا أفعل إذا واجهت خطأً أثناء التطبيق؟', 'a' => 'اقرأ رسالة الخطأ بعناية ثم ابحث عنها في Google أو Stack Overflow - معظم الأخطاء موثقة.'],
                ['q' => 'هل يمكنني تخطي هذا الدرس؟', 'a' => 'لا يُنصح بذلك لأن الدروس مترابطة، لكن إن كنت تعرف المحتوى مسبقاً يمكنك المتابعة.'],
                ['q' => 'هل يتوفر ملخص نصي للدرس؟', 'a' => 'نعم، استخدم زر "لخص لي الدرس" في الأعلى للحصول على ملخص ذكي فوري.'],
            ],
        ];

        $lessons = Lesson::all();
        foreach ($lessons as $lesson) {
            $rIdx = $lesson->id % 3;
            $lesson->update([
                'resources' => $resourceTemplates[$rIdx],
                'faqs'      => $faqTemplates[$rIdx],
            ]);
        }
    }
}
