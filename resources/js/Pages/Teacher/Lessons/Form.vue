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

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <Link :href="route('teacher.courses.edit', course.id)" class="hover:text-zinc-900 transition-colors">منهج الكورس</Link>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-bold tracking-tight">{{ lesson ? 'تعديل الدرس' : 'إضافة دروس جديدة' }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <Link :href="route('teacher.courses.edit', course.id)">
                        <Button variant="ghost" size="sm" class="h-7 text-[11px] px-3 font-medium">إلغاء</Button>
                    </Link>
                    <Button size="sm" @click="submit" :disabled="form.processing" class="h-7 text-[11px] px-6 font-bold shadow-sm relative overflow-hidden">
                        <span :class="{'opacity-0': form.processing}" class="flex items-center">
                            <Save class="ml-1.5 h-3 w-3" /> {{ lesson ? 'حفظ التعديل' : 'حفظ الدروس' }}
                        </span>
                        <div v-if="form.processing" class="absolute inset-0 flex items-center justify-center bg-zinc-900">
                            <span class="text-[10px]">{{ form.progress ? form.progress.percentage + '%' : 'جاري الحفظ...' }}</span>
                            <div class="absolute bottom-0 left-0 h-1 bg-emerald-500 transition-all duration-300" :style="{ width: (form.progress ? form.progress.percentage : 100) + '%' }"></div>
                        </div>
                    </Button>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full mx-auto">
                    
                    <!-- Sidebar: Actions -->
                    <aside class="w-full lg:w-80 space-y-4 shrink-0">
                        <Card class="border-zinc-200 shadow-none rounded-md bg-white">
                            <CardHeader class="p-3 border-b border-zinc-50">
                                <CardTitle class="text-[12px] font-black flex items-center gap-2 uppercase tracking-tight">
                                    <Settings class="h-3.5 w-3.5 text-zinc-400" /> الإجراءات
                                </CardTitle>
                            </CardHeader>
                            <CardContent class="p-3 space-y-3">
                                <div class="p-2.5 rounded-lg border border-zinc-100 bg-zinc-50/50 text-zinc-400 font-bold text-[10px] leading-relaxed">
                                    يمكنك إضافة عدة دروس في طلب واحد. سيتم تخزينها بالترتيب الموضح أدناه.
                                </div>
                                <Button type="button" variant="outline" @click="addLesson" class="w-full h-8 text-[11px] font-black border-dashed border-zinc-300 hover:border-zinc-900 transition-all">
                                    <Plus class="ml-1.5 h-3.5 w-3.5" /> إضافة درس آخر للقائمة
                                </Button>
                            </CardContent>
                        </Card>
                    </aside>

                    <!-- Main Section: Lessons List -->
                    <div class="flex-1 w-full space-y-6">
                        <div v-for="(lessonItem, lIdx) in form.lessons" :key="lIdx" class="relative group/lesson">
                            <Card class="border-zinc-200 shadow-none rounded-md overflow-hidden bg-white">
                                <CardHeader class="p-3 bg-zinc-50/30 flex flex-row items-center justify-between border-b border-zinc-100 space-y-0">
                                    <div class="flex items-center gap-2.5 flex-1">
                                        <Badge variant="outline" class="h-5 min-w-[20px] rounded bg-zinc-900 text-white font-black text-[10px] p-0 flex items-center justify-center border-none shadow-sm">{{ lIdx + 1 }}</Badge>
                                        <Input v-model="lessonItem.title" placeholder="عنوان الدرس..." class="border-none shadow-none focus-visible:ring-0 text-[13px] font-bold bg-transparent p-0 h-auto placeholder:text-zinc-300" />
                                    </div>
                                    <Button v-if="form.lessons.length > 1" type="button" variant="ghost" size="icon" @click="removeLesson(lIdx)" class="h-7 w-7 text-zinc-300 hover:text-red-500">
                                        <Trash2 class="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                
                                <CardContent class="p-4 space-y-6">
                                    <!-- Video and Duration -->
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div class="space-y-1.5">
                                            <Label class="text-[11px] font-bold text-zinc-400">ملف الفيديو</Label>
                                            <div class="relative">
                                                <Input type="file" accept="video/mp4,video/webm,video/ogg" @change="(e) => handleVideoUpload(e, lIdx)" class="h-8.5 text-[12px] border-zinc-100 bg-zinc-50/20 file:bg-zinc-900 file:text-white file:border-0 file:rounded file:px-3 file:py-1 file:mr-2 file:text-[10px] file:font-bold cursor-pointer" />
                                                <p v-if="lessonItem.video_url" class="text-[10px] text-emerald-600 mt-1 font-bold flex items-center gap-1">
                                                    <Video class="h-3 w-3" /> يوجد فيديو مرفوع مسبقاً
                                                </p>
                                            </div>
                                        </div>
                                        <div class="space-y-1.5">
                                            <Label class="text-[11px] font-bold text-zinc-400">مدة الدرس (بالدقائق)</Label>
                                            <Input type="number" v-model="lessonItem.duration" class="h-8.5 text-[12px] font-bold text-center border-zinc-100" />
                                        </div>
                                    </div>

                                    <div class="space-y-1.5">
                                        <div class="flex items-center justify-between">
                                            <Label class="text-[11px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                                                <FileText class="h-3 w-3" /> محتوى الدرس وملاحظات للطالب
                                            </Label>
                                            <div class="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-50 border border-zinc-100">
                                                <input type="checkbox" :id="'preview-' + lIdx" v-model="lessonItem.is_preview" class="h-3 w-3 rounded text-zinc-900 border-zinc-300">
                                                <Label :for="'preview-' + lIdx" class="text-[10px] font-bold text-zinc-400 cursor-pointer">معاينة مجانية</Label>
                                            </div>
                                        </div>
                                        <textarea v-model="lessonItem.content" rows="6" class="w-full min-h-[120px] rounded-md border border-zinc-100 p-3 text-[12px] font-medium outline-none focus:ring-1 focus:ring-zinc-900 shadow-inner bg-zinc-50/10" placeholder="اشرح محتوى الدرس أو أضف روابط خارجية..."></textarea>
                                    </div>

                                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                        <!-- Resources -->
                                        <div class="space-y-3">
                                            <div class="flex items-center justify-between border-b border-zinc-50 pb-1">
                                                <Label class="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                                    <LinkIcon class="h-3 w-3" /> المصادر
                                                </Label>
                                                <Button type="button" variant="ghost" size="sm" @click="addResource(lIdx)" class="h-6 text-[9px] font-black text-emerald-600 hover:bg-emerald-50">
                                                    + إضافة
                                                </Button>
                                            </div>
                                            <div class="space-y-1.5">
                                                <div v-for="(res, rIdx) in lessonItem.resources" :key="rIdx" class="flex items-center gap-2 p-1.5 bg-zinc-50/50 rounded-md group/res">
                                                    <Input v-model="res.title" placeholder="الاسم" class="h-7 text-[11px] flex-1 bg-white border-zinc-100 shadow-none" />
                                                    <Input v-model="res.url" placeholder="الرابط" class="h-7 text-[11px] flex-1 bg-white border-zinc-100 shadow-none" />
                                                    <Button @click="removeResource(lIdx, rIdx)" variant="ghost" size="icon" class="h-7 w-7 text-zinc-200 hover:text-red-500">
                                                        <X class="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <div v-if="lessonItem.resources.length === 0" class="text-center py-4 border border-dashed border-zinc-100 rounded-md text-[10px] text-zinc-300 italic">
                                                    لا توجد ملفات مرفقة.
                                                </div>
                                            </div>
                                        </div>

                                        <!-- FAQs -->
                                        <div class="space-y-3">
                                            <div class="flex items-center justify-between border-b border-zinc-50 pb-1">
                                                <Label class="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                                                    <HelpCircle class="h-3 w-3" /> الأسئلة الشائعة
                                                </Label>
                                                <Button type="button" variant="ghost" size="sm" @click="addFaq(lIdx)" class="h-6 text-[9px] font-black text-emerald-600 hover:bg-emerald-50">
                                                    + إضافة
                                                </Button>
                                            </div>
                                            <div class="space-y-2">
                                                <div v-for="(faq, fIdx) in lessonItem.faqs" :key="fIdx" class="p-2 bg-zinc-50/50 rounded-md border border-zinc-100 space-y-2 relative group/faq text-right">
                                                    <Input v-model="faq.q" placeholder="السؤال" class="h-7 text-[11px] font-bold bg-white border-none shadow-sm" />
                                                    <textarea v-model="faq.a" rows="2" class="w-full p-2 rounded bg-white border border-zinc-50 text-[11px] min-h-[40px] outline-none shadow-sm" placeholder="الإجابة..."></textarea>
                                                    <Button @click="removeFaq(lIdx, fIdx)" variant="ghost" size="icon" class="absolute top-1 left-1 h-6 w-6 text-zinc-200 hover:text-red-500 opacity-0 group-hover/faq:opacity-100 transition-opacity">
                                                        <Trash2 class="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <div v-if="lessonItem.faqs.length === 0" class="text-center py-4 border border-dashed border-zinc-100 rounded-md text-[10px] text-zinc-300 italic">
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
