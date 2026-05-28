<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from '@/Components/ui/card';
import { Separator } from '@/Components/ui/separator';
import { 
    Save, 
    Plus,
    Trash2,
    Video,
    FileText,
    HelpCircle,
    Link as LinkIcon,
    ChevronLeft,
    Settings,
    Layout,
    Info,
    X
} from 'lucide-vue-next';
import { Badge } from '@/Components/ui/badge';

const props = defineProps({
    course: Object,
    lesson: Object
});

const form = useForm({
    lessons: [
        {
            title: props.lesson?.title || '',
            video_url: props.lesson?.video_url || '',
            video_file: null,
            content: props.lesson?.content || '',
            duration: props.lesson?.duration || 0,
            is_preview: props.lesson?.is_preview || false,
            resources: props.lesson?.resources || [],
            faqs: props.lesson?.faqs || []
        }
    ]
});

const addLesson = () => {
    form.lessons.push({
        title: '',
        video_url: '',
        video_file: null,
        content: '',
        duration: 0,
        is_preview: false,
        resources: [],
        faqs: []
    });
};

const removeLesson = (index) => {
    if (form.lessons.length > 1) {
        form.lessons.splice(index, 1);
    }
};

const addResource = (lessonIndex) => {
    form.lessons[lessonIndex].resources.push({ title: '', url: '', type: 'docs' });
};

const removeResource = (lessonIndex, resIndex) => {
    form.lessons[lessonIndex].resources.splice(resIndex, 1);
};

const addFaq = (lessonIndex) => {
    form.lessons[lessonIndex].faqs.push({ q: '', a: '' });
};

const removeFaq = (lessonIndex, faqIndex) => {
    form.lessons[lessonIndex].faqs.splice(faqIndex, 1);
};

const handleVideoUpload = (e, lessonIndex) => {
    const file = e.target.files[0];
    if (file) {
        form.lessons[lessonIndex].video_file = file;
    }
};

const submit = () => {
    if (props.lesson) {
        form.post(route('teacher.lessons.update', props.lesson.id), {
            forceFormData: true,
            _method: 'PATCH'
        });
    } else {
        form.post(route('teacher.lessons.store', props.course.id), {
            forceFormData: true
        });
    }
};
</script>

<template>
    <Head :title="lesson ? 'تعديل الدرس' : 'إضافة درس جديد'" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم', url: route('teacher.dashboard') },
        { label: 'الكورسات', url: route('teacher.courses.index') },
        { label: lesson ? 'تعديل الدرس' : 'إضافة درس' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none">
                <div></div>
                <div class="flex items-center gap-2">
                    <Link :href="route('teacher.courses.edit', course.id)">
                        <Button variant="ghost" size="sm" class="h-7 text-[11px] px-3 font-normal text-[var(--muted-foreground)] hover:text-[var(--foreground)] bg-transparent">إلغاء</Button>
                    </Link>
                    <Button size="sm" @click="submit" :disabled="form.processing" class="h-7 text-[11px] px-6 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 shadow-none relative overflow-hidden">
                        <span :class="{'opacity-0': form.processing}" class="flex items-center">
                            <Save class="ml-1.5 h-3 w-3" /> {{ lesson ? 'حفظ التعديل' : 'حفظ الدروس' }}
                        </span>
                        <div v-if="form.processing" class="absolute inset-0 flex items-center justify-center bg-[var(--primary)] text-white">
                            <span class="text-[10px]">{{ form.progress ? form.progress.percentage + '%' : 'جاري الحفظ...' }}</span>
                            <div class="absolute bottom-0 left-0 h-1 bg-white" :style="{ width: (form.progress ? form.progress.percentage : 100) + '%' }"></div>
                        </div>
                    </Button>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full mx-auto">
                    
                    <!-- Sidebar: Actions -->
                    <aside class="w-full lg:w-80 space-y-4 shrink-0">
                        <Card class="border-[var(--border)] shadow-none rounded-md bg-[var(--card)]">
                            <CardHeader class="p-3 border-b border-[var(--border)] bg-[var(--card)]">
                                <CardTitle class="text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--foreground)]">
                                    <Settings class="h-3.5 w-3.5 text-[var(--muted-foreground)]" /> الإجراءات
                                </CardTitle>
                            </CardHeader>
                            <CardContent class="p-3 space-y-3 bg-[var(--card)]">
                                <div class="p-2.5 rounded bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] font-normal text-[10px] leading-relaxed">
                                    يمكنك إضافة عدة دروس في طلب واحد. سيتم تخزينها بالترتيب الموضح أدناه.
                                </div>
                                <Button type="button" variant="outline" @click="addLesson" class="w-full h-8 text-[11px] font-normal border-dashed border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--muted-foreground)] rounded">
                                    <Plus class="ml-1.5 h-3.5 w-3.5 text-[var(--primary)]" /> إضافة درس آخر للقائمة
                                </Button>
                            </CardContent>
                        </Card>
                    </aside>

                    <!-- Main Section: Lessons List -->
                    <div class="flex-1 w-full space-y-6">
                        <div v-for="(lessonItem, lIdx) in form.lessons" :key="lIdx" class="relative group/lesson">
                            <Card class="border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]">
                                <CardHeader class="p-3 bg-[var(--muted)] flex flex-row items-center justify-between border-b border-[var(--border)] space-y-0">
                                    <div class="flex items-center gap-2.5 flex-1">
                                        <Badge variant="outline" class="h-5 min-w-[20px] rounded bg-[var(--primary)] text-white font-normal text-[10px] p-0 flex items-center justify-center border-none shadow-none">{{ lIdx + 1 }}</Badge>
                                        <Input v-model="lessonItem.title" placeholder="عنوان الدرس..." class="border-none shadow-none focus-visible:ring-0 text-[13px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]" />
                                    </div>
                                    <Button v-if="form.lessons.length > 1" type="button" variant="ghost" size="icon" @click="removeLesson(lIdx)" class="h-7 w-7 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent">
                                        <Trash2 class="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                
                                <CardContent class="p-4 space-y-6 bg-[var(--card)]">
                                    <!-- Video and Duration -->
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div class="space-y-1.5">
                                            <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">ملف الفيديو</Label>
                                            <div class="relative">
                                                <Input type="file" accept="video/mp4,video/webm,video/ogg" @change="(e) => handleVideoUpload(e, lIdx)" class="h-8.5 text-[12px] border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] file:bg-[var(--muted)] file:text-[var(--foreground)] file:border file:border-[var(--border)] file:rounded file:px-3 file:py-1 file:mr-2 file:text-[10px] file:font-normal cursor-pointer" />
                                                <p v-if="lessonItem.video_url" class="text-[10px] text-[var(--primary)] mt-1 font-normal flex items-center gap-1">
                                                    <Video class="h-3 w-3" /> يوجد فيديو مرفوع مسبقاً
                                                </p>
                                            </div>
                                        </div>
                                        <div class="space-y-1.5">
                                            <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">مدة الدرس (بالدقائق)</Label>
                                            <Input type="number" v-model="lessonItem.duration" class="h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]" />
                                        </div>
                                    </div>

                                    <div class="space-y-1.5">
                                        <div class="flex items-center justify-between">
                                            <Label class="text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-1.5">
                                                <FileText class="h-3 w-3" /> محتوى الدرس وملاحظات للطالب
                                            </Label>
                                            <div class="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">
                                                <input type="checkbox" :id="'preview-' + lIdx" v-model="lessonItem.is_preview" class="h-3 w-3 rounded text-[var(--primary)] border-[var(--border)] bg-[var(--card)] focus:ring-[var(--primary)]">
                                                <Label :for="'preview-' + lIdx" class="text-[10px] font-normal text-[var(--muted-foreground)] cursor-pointer select-none">معاينة مجانية</Label>
                                            </div>
                                        </div>
                                        <textarea v-model="lessonItem.content" rows="6" class="w-full min-h-[120px] rounded-md border border-[var(--border)] p-3 text-[12px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] shadow-none bg-[var(--card)] text-[var(--foreground)]" placeholder="اشرح محتوى الدرس أو أضف روابط خارجية..."></textarea>
                                    </div>

                                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                        <!-- Resources -->
                                        <div class="space-y-3">
                                            <div class="flex items-center justify-between border-b border-[var(--border)] pb-1">
                                                <Label class="text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center gap-1.5">
                                                    <LinkIcon class="h-3 w-3 text-[var(--primary)]" /> المصادر
                                                </Label>
                                                <Button type="button" variant="ghost" size="sm" @click="addResource(lIdx)" class="h-6 text-[9px] font-normal text-[var(--primary)] hover:bg-[var(--muted)]">
                                                    + إضافة
                                                </Button>
                                            </div>
                                            <div class="space-y-1.5">
                                                <div v-for="(res, rIdx) in lessonItem.resources" :key="rIdx" class="flex items-center gap-2 p-1.5 bg-[var(--muted)] border border-[var(--border)] rounded-md">
                                                    <Input v-model="res.title" placeholder="الاسم" class="h-7 text-[11px] flex-1 bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none" />
                                                    <Input v-model="res.url" placeholder="الرابط" class="h-7 text-[11px] flex-1 bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none" />
                                                    <Button @click="removeResource(lIdx, rIdx)" variant="ghost" size="icon" class="h-7 w-7 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent">
                                                        <X class="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <div v-if="lessonItem.resources.length === 0" class="text-center py-4 border border-dashed border-[var(--border)] rounded-md text-[10px] text-[var(--muted-foreground)] italic">
                                                    لا توجد ملفات مرفقة.
                                                </div>
                                            </div>
                                        </div>

                                        <!-- FAQs -->
                                        <div class="space-y-3">
                                            <div class="flex items-center justify-between border-b border-[var(--border)] pb-1">
                                                <Label class="text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center gap-1.5">
                                                    <HelpCircle class="h-3 w-3 text-[var(--primary)]" /> الأسئلة الشائعة
                                                </Label>
                                                <Button type="button" variant="ghost" size="sm" @click="addFaq(lIdx)" class="h-6 text-[9px] font-normal text-[var(--primary)] hover:bg-[var(--muted)]">
                                                    + إضافة
                                                </Button>
                                            </div>
                                            <div class="space-y-2">
                                                <div v-for="(faq, fIdx) in lessonItem.faqs" :key="fIdx" class="p-2 bg-[var(--muted)] rounded-md border border-[var(--border)] space-y-2 relative text-right">
                                                    <Input v-model="faq.q" placeholder="السؤال" class="h-7 text-[11px] font-normal bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none" />
                                                    <textarea v-model="faq.a" rows="2" class="w-full p-2 rounded bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] text-[11px] min-h-[40px] outline-none shadow-none" placeholder="الإجابة..."></textarea>
                                                    <Button @click="removeFaq(lIdx, fIdx)" variant="ghost" size="icon" class="absolute top-1 left-1 h-6 w-6 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent">
                                                        <Trash2 class="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <div v-if="lessonItem.faqs.length === 0" class="text-center py-4 border border-dashed border-[var(--border)] rounded-md text-[10px] text-[var(--muted-foreground)] italic">
                                                    لم تضف أي أسئلة لهذا الدرس.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
