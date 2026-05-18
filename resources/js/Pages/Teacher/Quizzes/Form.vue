<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { 
    Plus, 
    Trash2, 
    Check, 
    Settings, 
    ArrowRight,
    X,
    HelpCircle,
    Save,
    AlertCircle,
    Info,
    Layout,
    ChevronLeft
} from 'lucide-vue-next';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Separator } from '@/Components/ui/separator';

const props = defineProps({
    quiz: Object,
    courses: Array
});

const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const z = date.getTimezoneOffset() * 60 * 1000;
    const localDate = new Date(date - z);
    return localDate.toISOString().slice(0, 16);
};

const form = useForm({
    course_id: props.quiz?.course_id || '',
    title: props.quiz?.title || '',
    description: props.quiz?.description || '',
    passing_score: props.quiz?.passing_score || 80,
    duration: props.quiz?.duration || '',
    attempts_limit: props.quiz?.attempts_limit || 1,
    start_time: formatDate(props.quiz?.start_time),
    end_time: formatDate(props.quiz?.end_time),
    instructions: props.quiz?.instructions || '',
    is_published: props.quiz ? Boolean(props.quiz.is_published) : true,
    questions: props.quiz?.questions.map(q => ({
        question_text: q.question_text,
        points: q.points,
        options: q.options.map(o => ({
            option_text: o.option_text,
            is_correct: Boolean(o.is_correct)
        }))
    })) || [
        {
            question_text: '',
            points: 1,
            options: [
                { option_text: '', is_correct: true },
                { option_text: '', is_correct: false }
            ]
        }
    ]
});

const addQuestion = () => {
    form.questions.push({
        question_text: '',
        points: 1,
        options: [
            { option_text: '', is_correct: true },
            { option_text: '', is_correct: false }
        ]
    });
};

const removeQuestion = (index) => {
    if (form.questions.length > 1) {
        form.questions.splice(index, 1);
    }
};

const addOption = (qIndex) => {
    form.questions[qIndex].options.push({ option_text: '', is_correct: false });
};

const removeOption = (qIndex, oIndex) => {
    if (form.questions[qIndex].options.length > 2) {
        form.questions[qIndex].options.splice(oIndex, 1);
    }
};

const setCorrect = (qIndex, oIndex) => {
    form.questions[qIndex].options.forEach((opt, idx) => {
        opt.is_correct = idx === oIndex;
    });
};

const submit = () => {
    if (props.quiz) {
        form.patch(route('teacher.quizzes.update', props.quiz.id), {
            preserveScroll: true
        });
    } else {
        form.post(route('teacher.quizzes.store'));
    }
};
</script>

<template>
    <Head :title="quiz ? 'تعديل الاختبار' : 'إنشاء اختبار'" />

    <AuthenticatedLayout>
        <!-- Zoomed out feel by reducing base font and tightening layout -->
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-3">
                    <div class="flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium">
                        <Link :href="route('teacher.quizzes.index')" class="hover:text-zinc-900 transition-colors">الاختبارات</Link>
                        <ChevronLeft class="h-3 w-3" />
                        <span class="text-zinc-900 font-bold tracking-tight">{{ quiz ? 'تعديل الاختبار' : 'إنشاء جديد' }}</span>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <Link :href="route('teacher.quizzes.index')">
                        <Button variant="ghost" size="sm" class="h-7 text-[11px] px-3 font-medium">إلغاء</Button>
                    </Link>
                    <Button size="sm" @click="submit" :disabled="form.processing" class="h-7 text-[11px] px-5 font-bold shadow-sm">
                        <Save class="ml-1.5 h-3 w-3" /> {{ quiz ? 'حفظ' : 'نشر' }}
                    </Button>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full mx-auto">
                    
                    <!-- Sidebar: Compact General Settings -->
                    <aside class="w-full lg:w-80 space-y-4 shrink-0">
                        <Card class="border-zinc-200 shadow-none rounded-md bg-white">
                            <CardHeader class="p-3 border-b border-zinc-50">
                                <CardTitle class="text-[12px] font-black flex items-center gap-2 uppercase tracking-tight">
                                    <Settings class="h-3.5 w-3.5 text-zinc-400" /> الإعدادات
                                </CardTitle>
                            </CardHeader>
                            <CardContent class="p-3 space-y-3.5">
                                <div class="space-y-1">
                                    <Label class="text-[11px] font-bold text-zinc-500">عنوان الاختبار *</Label>
                                    <Input v-model="form.title" placeholder="..." class="h-8 text-[12px] px-2.5 border-zinc-200 focus-visible:ring-zinc-900" :class="{'border-destructive': form.errors.title}" />
                                    <p v-if="form.errors.title" class="text-[10px] text-destructive">{{ form.errors.title }}</p>
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-bold text-zinc-500">الكورس *</Label>
                                    <select v-model="form.course_id" :class="['w-full h-8.5 rounded-md border border-zinc-200 bg-white px-2.5 text-[12px] font-medium focus:ring-1 focus:ring-zinc-900 outline-none transition-all leading-none', form.errors.course_id ? 'border-destructive' : '']">
                                        <option value="" disabled>اختر كورس...</option>
                                        <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.title }}</option>
                                    </select>
                                </div>

                                <div class="grid grid-cols-2 gap-2.5">
                                    <div class="space-y-1">
                                        <Label class="text-[11px] font-bold text-zinc-500">النجاح %</Label>
                                        <Input type="number" v-model="form.passing_score" class="h-8 text-[12px] text-center" />
                                    </div>
                                    <div class="space-y-1">
                                        <Label class="text-[11px] font-bold text-zinc-500">المدة (د)</Label>
                                        <Input type="number" v-model="form.duration" class="h-8 text-[12px] text-center" placeholder="-" />
                                    </div>
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-bold text-zinc-500">المحاولات</Label>
                                    <Input type="number" v-model="form.attempts_limit" class="h-8 text-[12px] text-center" />
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-bold text-zinc-500">وقت البدء</Label>
                                    <Input type="datetime-local" v-model="form.start_time" class="h-8 text-[11px] px-2" />
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-bold text-zinc-500">تعليمات</Label>
                                    <textarea v-model="form.instructions" rows="2" class="w-full min-h-[50px] rounded-md border border-zinc-200 p-2 text-[12px] font-medium outline-none focus:ring-1 focus:ring-zinc-900" placeholder="..."></textarea>
                                </div>

                                <div class="flex items-center gap-2 pt-1">
                                    <input type="checkbox" v-model="form.is_published" id="is_published" class="h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900">
                                    <Label for="is_published" class="text-[11px] font-bold cursor-pointer">نشر الاختبار للطلاب</Label>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>

                    <!-- Main Section: Compact Questions -->
                    <div class="flex-1 w-full space-y-4">
                        <div class="flex items-center justify-between border-b border-zinc-100 pb-2.5 px-1">
                            <h3 class="text-[12px] font-black uppercase tracking-widest text-zinc-400">الأسئلة والخيارات ({{ form.questions.length }})</h3>
                            <Button type="button" variant="outline" size="sm" @click="addQuestion" class="h-7 text-[11px] font-bold px-3 border-zinc-200 hover:bg-zinc-900 hover:text-white transition-all">
                                <Plus class="ml-1 h-3 w-3" /> إضافة سؤال
                            </Button>
                        </div>

                        <div v-for="(question, qIdx) in form.questions" :key="qIdx" class="space-y-2.5">
                            <Card class="border-zinc-200 shadow-none rounded-md overflow-hidden bg-white">
                                <CardHeader class="p-2.5 bg-zinc-50/50 flex flex-row items-center justify-between border-b border-zinc-100 space-y-0">
                                    <div class="flex items-center gap-2.5 flex-1">
                                        <Badge variant="outline" class="h-5 min-w-[20px] rounded bg-white font-black text-[10px] p-0 flex items-center justify-center">{{ qIdx + 1 }}</Badge>
                                        <Input v-model="question.question_text" placeholder="نص السؤال..." class="border-none shadow-none focus-visible:ring-0 text-[12px] font-bold bg-transparent p-0 h-auto" />
                                    </div>
                                    <Button type="button" variant="ghost" size="icon" @click="removeQuestion(qIdx)" class="h-6 w-6 text-zinc-300 hover:text-red-500">
                                        <Trash2 class="h-3.5 w-3.5" />
                                    </Button>
                                </CardHeader>
                                <CardContent class="p-3 space-y-3">
                                    <div class="flex items-center gap-2 pb-1">
                                        <span class="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">درجة السؤال:</span>
                                        <Input type="number" v-model="question.points" class="w-14 h-6 text-[12px] font-bold text-center border-zinc-100 px-1 focus:ring-0 shadow-none" />
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2.5">
                                        <div v-for="(option, oIdx) in question.options" :key="oIdx" class="group/opt">
                                            <div 
                                                :class="[
                                                    'flex items-center gap-2 p-2 border rounded-md transition-all duration-150 relative shadow-sm',
                                                    option.is_correct 
                                                        ? 'border-zinc-900 bg-zinc-900 text-white' 
                                                        : 'bg-white border-zinc-100 hover:border-zinc-200'
                                                ]"
                                            >
                                                <button 
                                                    type="button" 
                                                    @click="setCorrect(qIdx, oIdx)" 
                                                    :class="[
                                                        'h-3.5 w-3.5 rounded-full border transition-all flex items-center justify-center shrink-0',
                                                        option.is_correct ? 'bg-white border-white text-zinc-900' : 'bg-white border-zinc-200'
                                                    ]"
                                                >
                                                    <Check v-if="option.is_correct" class="h-2.5 w-2.5" />
                                                </button>
                                                <Input v-model="option.option_text" placeholder="..." class="border-none shadow-none focus-visible:ring-0 text-[12px] font-medium bg-transparent p-0 h-auto" />
                                                <button v-if="question.options.length > 2" type="button" @click="removeOption(qIdx, oIdx)" :class="['opacity-0 group-hover/opt:opacity-100 transition-opacity absolute top-2 left-2', option.is_correct ? 'text-zinc-400 hover:text-white' : 'text-zinc-200 hover:text-red-500']">
                                                    <X class="h-3 w-3" />
                                                </button>
                                            </div>
                                        </div>
                                        <button 
                                            v-if="question.options.length < 6" 
                                            type="button" 
                                            @click="addOption(qIdx)" 
                                            class="flex items-center justify-center gap-1.5 p-2 border border-dashed border-zinc-200 rounded-md text-[11px] font-bold text-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 transition-all"
                                        >
                                            <Plus class="h-3 w-3" /> خيار جديد
                                        </button>
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
