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

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم', url: route('teacher.dashboard') },
        { label: 'الاختبارات', url: route('teacher.quizzes.index') },
        { label: quiz ? 'تعديل الاختبار' : 'إنشاء جديد' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none">
                <div></div>
                <div class="flex items-center gap-2">
                    <Link :href="route('teacher.quizzes.index')">
                        <Button variant="ghost" size="sm" class="h-7 text-[11px] px-3 font-normal text-[var(--muted-foreground)] hover:text-[var(--foreground)] bg-transparent">إلغاء</Button>
                    </Link>
                    <Button size="sm" @click="submit" :disabled="form.processing" class="h-7 text-[11px] px-5 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 shadow-none">
                        <Save class="ml-1.5 h-3 w-3" /> {{ quiz ? 'حفظ' : 'نشر' }}
                    </Button>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full mx-auto">
                    
                    <!-- Sidebar: Compact General Settings -->
                    <aside class="w-full lg:w-80 space-y-4 shrink-0">
                        <Card class="border-[var(--border)] shadow-none rounded-md bg-[var(--card)]">
                            <CardHeader class="p-3 border-b border-[var(--border)] bg-[var(--card)]">
                                <CardTitle class="text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--foreground)]">
                                    <Settings class="h-3.5 w-3.5 text-[var(--muted-foreground)]" /> الإعدادات
                                </CardTitle>
                            </CardHeader>
                            <CardContent class="p-3 space-y-3.5 bg-[var(--card)]">
                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">عنوان الاختبار *</Label>
                                    <Input v-model="form.title" placeholder="..." class="h-8 text-[12px] px-2.5 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]" :class="{'border-destructive': form.errors.title}" />
                                    <p v-if="form.errors.title" class="text-[10px] text-destructive">{{ form.errors.title }}</p>
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">الكورس *</Label>
                                    <select v-model="form.course_id" :class="['w-full h-8.5 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-2.5 text-[12px] font-normal focus:ring-1 focus:ring-[var(--primary)] outline-none leading-none', form.errors.course_id ? 'border-destructive' : '']">
                                        <option value="" disabled>اختر كورس...</option>
                                        <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.title }}</option>
                                    </select>
                                </div>

                                <div class="grid grid-cols-2 gap-2.5">
                                    <div class="space-y-1">
                                        <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">النجاح %</Label>
                                        <Input type="number" v-model="form.passing_score" class="h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]" />
                                    </div>
                                    <div class="space-y-1">
                                        <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">المدة (د)</Label>
                                        <Input type="number" v-model="form.duration" class="h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]" placeholder="-" />
                                    </div>
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">المحاولات</Label>
                                    <Input type="number" v-model="form.attempts_limit" class="h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]" />
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">وقت البدء</Label>
                                    <Input type="datetime-local" v-model="form.start_time" class="h-8 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]" />
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">تعليمات</Label>
                                    <textarea v-model="form.instructions" rows="2" class="w-full min-h-[50px] rounded-md border border-[var(--border)] p-2 text-[12px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] bg-[var(--card)] text-[var(--foreground)]" placeholder="..."></textarea>
                                </div>

                                <div class="flex items-center gap-2 pt-1">
                                    <input type="checkbox" v-model="form.is_published" id="is_published" class="h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]">
                                    <Label for="is_published" class="text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none">نشر الاختبار للطلاب</Label>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>

                    <!-- Main Section: Compact Questions -->
                    <div class="flex-1 w-full space-y-4">
                        <div class="flex items-center justify-between border-b border-[var(--border)] pb-2.5 px-1">
                            <h3 class="text-[12px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]">الأسئلة والخيارات ({{ form.questions.length }})</h3>
                            <Button type="button" variant="outline" size="sm" @click="addQuestion" class="h-7 text-[11px] font-normal px-3 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)]">
                                <Plus class="ml-1 h-3 w-3 text-[var(--primary)]" /> إضافة سؤال
                            </Button>
                        </div>

                        <div v-for="(question, qIdx) in form.questions" :key="qIdx" class="space-y-2.5">
                            <Card class="border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]">
                                <CardHeader class="p-2.5 bg-[var(--muted)] flex flex-row items-center justify-between border-b border-[var(--border)] space-y-0">
                                    <div class="flex items-center gap-2.5 flex-1">
                                        <Badge variant="outline" class="h-5 min-w-[20px] rounded bg-[var(--card)] font-normal text-[10px] p-0 flex items-center justify-center border border-[var(--border)] text-[var(--foreground)]">{{ qIdx + 1 }}</Badge>
                                        <Input v-model="question.question_text" placeholder="نص السؤال..." class="border-none shadow-none focus-visible:ring-0 text-[12px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)]" />
                                    </div>
                                    <Button type="button" variant="ghost" size="icon" @click="removeQuestion(qIdx)" class="h-6 w-6 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent">
                                        <Trash2 class="h-3.5 w-3.5" />
                                    </Button>
                                </CardHeader>
                                <CardContent class="p-3 space-y-3 bg-[var(--card)]">
                                    <div class="flex items-center gap-2 pb-1">
                                        <span class="text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">درجة السؤال:</span>
                                        <Input type="number" v-model="question.points" class="w-14 h-6 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-1 focus:ring-0 shadow-none" />
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2.5">
                                        <div v-for="(option, oIdx) in question.options" :key="oIdx" class="group/opt">
                                            <div 
                                                :class="[
                                                    'flex items-center gap-2 p-2 border rounded-md relative shadow-none',
                                                    option.is_correct 
                                                        ? 'border-[var(--primary)] bg-[var(--accent)] text-[var(--foreground)]' 
                                                        : 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--muted-foreground)]'
                                                ]"
                                            >
                                                <button 
                                                    type="button" 
                                                    @click="setCorrect(qIdx, oIdx)" 
                                                    :class="[
                                                        'h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0',
                                                        option.is_correct ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'bg-[var(--card)] border-[var(--border)]'
                                                    ]"
                                                >
                                                    <Check v-if="option.is_correct" class="h-2.5 w-2.5 text-white" />
                                                </button>
                                                <Input v-model="option.option_text" placeholder="..." class="border-none shadow-none focus-visible:ring-0 text-[12px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)]" />
                                                <button v-if="question.options.length > 2" type="button" @click="removeOption(qIdx, oIdx)" class="absolute top-2 left-2 text-[var(--muted-foreground)] hover:text-red-500">
                                                    <X class="h-3 w-3" />
                                                </button>
                                            </div>
                                        </div>
                                        <button 
                                            v-if="question.options.length < 6" 
                                            type="button" 
                                            @click="addOption(qIdx)" 
                                            class="flex items-center justify-center gap-1.5 p-2 border border-dashed border-[var(--border)] rounded-md text-[11px] font-normal text-[var(--muted-foreground)] hover:border-[var(--muted-foreground)] bg-[var(--card)] hover:text-[var(--foreground)]"
                                        >
                                            <Plus class="h-3 w-3 text-[var(--primary)]" /> خيار جديد
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
