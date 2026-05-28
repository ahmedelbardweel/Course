<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { 
    HelpCircle, 
    ChevronLeft, 
    CheckCircle2, 
    XCircle, 
    AlertCircle, 
    RefreshCw, 
    Clock, 
    Lock, 
    ArrowRight,
    Check,
    Trophy,
    Frown,
    AlertTriangle
} from 'lucide-vue-next';
import { ref, computed, onUnmounted } from 'vue';

const props = defineProps({
    course: Object,
    quiz: Object,
    previousAttempts: Array,
});

const quizState = ref('intro'); // 'intro', 'taking', 'submitted'
const currentQuestionIndex = ref(0);
const timeLeft = ref(null);
const timerInterval = ref(null);

const form = useForm({
    answers: (props.quiz?.questions || []).map(q => ({
        question_id: q.id,
        option_id: null
    }))
});

// Computed properties for logic
const currentQuestion = computed(() => props.quiz.questions[currentQuestionIndex.value]);
const isLastQuestion = computed(() => currentQuestionIndex.value === (props.quiz.questions?.length || 0) - 1);
const allAnswered = computed(() => form.answers.every(a => a.option_id !== null));

const attemptsCount = computed(() => props.previousAttempts.length);
const canAttempt = computed(() => attemptsCount.value < props.quiz.attempts_limit);

const isStarted = computed(() => {
    if (!props.quiz.start_time) return true;
    return new Date() >= new Date(props.quiz.start_time);
});

const isEnded = computed(() => {
    if (!props.quiz.end_time) return false;
    return new Date() > new Date(props.quiz.end_time);
});

// Timer Logic
const startTimer = () => {
    if (props.quiz.duration) {
        timeLeft.value = props.quiz.duration * 60;
        timerInterval.value = setInterval(() => {
            if (timeLeft.value > 0) {
                timeLeft.value--;
            } else {
                clearInterval(timerInterval.value);
                submitQuiz(); 
            }
        }, 1000);
    }
};

const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const startQuiz = () => {
    quizState.value = 'taking';
    startTimer();
};

const selectOption = (optionId) => {
    form.answers[currentQuestionIndex.value].option_id = optionId;
};

const nextQuestion = () => {
    if (!isLastQuestion.value) {
        currentQuestionIndex.value++;
    }
};

const prevQuestion = () => {
    if (currentQuestionIndex.value > 0) {
        currentQuestionIndex.value--;
    }
};

const submitQuiz = () => {
    if (timerInterval.value) clearInterval(timerInterval.value);
    form.post(route('quizzes.submit', props.quiz.id), {
        onSuccess: () => {
            quizState.value = 'submitted';
        }
    });
};

onUnmounted(() => {
    if (timerInterval.value) clearInterval(timerInterval.value);
});
</script>

<template>
    <Head :title="quiz.title" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'الرئيسية', url: route('dashboard') },
        { label: 'الدورات', url: route('courses.index') },
        { label: course.title, url: route('courses.show', course.slug) },
        { label: quiz.title }
    ]">
        <template #header-actions>
            <div v-if="quizState === 'taking' && timeLeft !== null" class="flex items-center gap-1.5 px-3 py-1 bg-[var(--muted)] border border-[var(--border)] rounded-md font-mono font-normal text-xs text-[var(--foreground)]">
                <Clock class="h-3 w-3 text-[var(--muted-foreground)]" />
                {{ formatTime(timeLeft) }}
            </div>
        </template>

        <!-- Zoomed out feel for student view -->
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">

            <main class="flex-1 p-4 lg:p-6 text-right max-w-full">
                
                <!-- 1. Intro Screen -->
                <div v-if="quizState === 'intro'" class="max-w-4xl mx-auto space-y-6">
                    <div class="space-y-1 border-b border-[var(--border)] pb-4">
                        <h2 class="text-xl font-normal tracking-tight text-[var(--foreground)]">{{ quiz.title }}</h2>
                        <p class="text-[11px] text-[var(--muted-foreground)] font-normal">{{ quiz.description }}</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div class="md:col-span-3 space-y-4">
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                <Card class="p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md">
                                    <span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block">المدة</span>
                                    <span class="text-xs font-normal text-[var(--foreground)]">{{ quiz.duration ? `${quiz.duration} د` : 'مفتوح' }}</span>
                                </Card>
                                <Card class="p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md">
                                    <span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block">الأسئلة</span>
                                    <span class="text-xs font-normal text-[var(--foreground)]">{{ quiz.questions?.length || 0 }}</span>
                                </Card>
                                <Card class="p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md">
                                    <span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block">النجاح</span>
                                    <span class="text-xs font-normal text-[var(--foreground)]">{{ quiz.passing_score }}%</span>
                                </Card>
                                <Card class="p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md">
                                    <span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block">المحاولات</span>
                                    <span class="text-xs font-normal text-[var(--foreground)]">{{ attemptsCount }} / {{ quiz.attempts_limit }}</span>
                                </Card>
                            </div>

                            <Card v-if="quiz.instructions" class="border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]">
                                <CardHeader class="p-3 bg-[var(--muted)] border-b border-[var(--border)]">
                                    <CardTitle class="text-[11px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] flex items-center gap-1.5">
                                        <AlertCircle class="h-3 w-3" /> تعليمات الاختبار
                                    </CardTitle>
                                </CardHeader>
                                <CardContent class="p-4 text-[12px] leading-relaxed text-[var(--foreground)] whitespace-pre-line">
                                    {{ quiz.instructions }}
                                </CardContent>
                            </Card>

                            <div class="pt-2">
                                <div v-if="!isStarted" class="p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] font-normal flex items-center gap-2">
                                    <Clock class="h-3.5 w-3.5 text-[var(--muted-foreground)]" /> سيبدأ في: {{ new Date(quiz.start_time).toLocaleString('ar-SA') }}
                                </div>
                                <div v-else-if="isEnded" class="p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] font-normal flex items-center gap-2">
                                    <AlertTriangle class="h-3.5 w-3.5 text-[var(--primary)]" /> انتهى وقت التقديم.
                                </div>
                                <div v-else-if="!canAttempt" class="p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] font-normal flex items-center gap-2 text-center justify-center">
                                    <Lock class="h-3.5 w-3.5" /> استنفدت المحاولات المسموحة.
                                </div>
                                <Button v-else @click="startQuiz" class="w-full h-10 rounded-md text-xs font-normal shadow-none tracking-widest uppercase bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95">
                                    ابدأ الاختبار الآن
                                </Button>
                            </div>
                        </div>

                        <aside class="space-y-3">
                            <h3 class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] px-1">المحاولات السابقة</h3>
                            <div v-if="previousAttempts.length === 0" class="text-[10px] text-[var(--muted-foreground)] text-center py-6 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)]">
                                لا توجد محاولات
                            </div>
                            <div v-else class="space-y-2">
                                <Card v-for="attempt in previousAttempts" :key="attempt.id" class="p-2.5 shadow-none border-[var(--border)] bg-[var(--card)] flex items-center justify-between rounded-md">
                                    <div>
                                        <div class="text-[9px] font-normal text-[var(--muted-foreground)]">{{ new Date(attempt.created_at).toLocaleDateString('ar-SA') }}</div>
                                        <div class="text-[12px] font-normal text-[var(--foreground)] tracking-tighter">{{ attempt.score }}%</div>
                                    </div>
                                    <div :class="[attempt.status === 'passed' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)] border-[var(--border)] border', 'px-2 py-0.5 text-[8px] font-normal uppercase rounded shadow-none']">{{ attempt.status === 'passed' ? 'ناجح' : 'راسب' }}</div>
                                </Card>
                            </div>
                        </aside>
                    </div>
                </div>

                <!-- 2. Taking Screen -->
                <div v-else-if="quizState === 'taking'" class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full">
                    
                    <!-- Questions Nav -->
                    <aside class="w-full lg:w-64 shrink-0 lg:sticky lg:top-[60px]">
                        <Card class="p-3 shadow-none border border-[var(--border)] rounded-md bg-[var(--card)]">
                            <h3 class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest mb-3">خريطة الأسئلة</h3>
                            <div class="grid grid-cols-5 gap-1.5">
                                <button 
                                    v-for="(q, idx) in quiz.questions" 
                                    :key="idx"
                                    @click="currentQuestionIndex = idx"
                                    :class="[
                                        'h-7 rounded flex items-center justify-center text-[10px] font-normal border',
                                        currentQuestionIndex === idx ? 'border-[var(--primary)] ring-1 ring-[var(--primary)]' : 'border-[var(--border)]',
                                        form.answers[idx]?.option_id !== null ? 'bg-[var(--foreground)] text-[var(--card)] border-[var(--foreground)]' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                                    ]"
                                >
                                    {{ idx + 1 }}
                                </button>
                            </div>
                            <div class="mt-4 pt-4 border-t border-[var(--border)]">
                                <Button 
                                    @click="submitQuiz" 
                                    :disabled="!allAnswered || form.processing" 
                                    class="w-full h-8 text-[10px] font-normal uppercase tracking-widest bg-[var(--primary)] text-white shadow-none"
                                >
                                    تقديم الإجابات
                                </Button>
                            </div>
                        </Card>
                    </aside>

                    <!-- Current Question -->
                    <div class="flex-1 w-full space-y-4">
                        <Card class="border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]">
                            <CardHeader class="p-4 border-b border-[var(--border)] bg-[var(--card)]">
                                <Badge variant="secondary" class="h-4.5 font-normal text-[9px] uppercase tracking-widest mb-3 bg-[var(--accent)] text-[var(--foreground)] rounded border border-[var(--border)]">السؤال {{ currentQuestionIndex + 1 }} من {{ quiz.questions?.length }}</Badge>
                                <CardTitle class="text-sm md:text-base leading-relaxed font-normal text-[var(--foreground)]">{{ currentQuestion?.question_text }}</CardTitle>
                            </CardHeader>
                            <CardContent class="p-4 pt-4 grid grid-cols-1 md:grid-cols-2 gap-2 bg-[var(--card)]">
                                <button
                                    v-for="option in currentQuestion?.options"
                                    :key="option.id"
                                    @click="selectOption(option.id)"
                                    :class="[
                                        'w-full text-right p-3 rounded-md border flex items-center justify-between shadow-none',
                                        form.answers[currentQuestionIndex]?.option_id === option.id 
                                            ? 'border-[var(--primary)] bg-[var(--accent)] text-[var(--foreground)] z-10' 
                                            : 'border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]'
                                    ]"
                                >
                                    <span class="font-normal text-[12px]">{{ option.option_text }}</span>
                                    <div :class="['h-4 w-4 rounded-full border flex items-center justify-center shrink-0', form.answers[currentQuestionIndex]?.option_id === option.id ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'border-[var(--border)] bg-[var(--card)]']">
                                        <Check v-if="form.answers[currentQuestionIndex]?.option_id === option.id" class="h-2.5 w-2.5 text-white" />
                                    </div>
                                </button>
                            </CardContent>
                            <CardFooter class="p-3 border-t border-[var(--border)] bg-[var(--muted)] flex items-center justify-between">
                                <Button variant="ghost" size="sm" @click="prevQuestion" :disabled="currentQuestionIndex === 0" class="h-7 px-4 text-[11px] font-normal border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]">السابق</Button>
                                <Button v-if="!isLastQuestion" @click="nextQuestion" variant="secondary" size="sm" class="h-7 px-6 text-[11px] font-normal uppercase tracking-widest border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]">التالي</Button>
                                <Button v-else @click="submitQuiz" :disabled="!allAnswered || form.processing" class="h-7 px-8 text-[11px] font-normal uppercase tracking-widest bg-[var(--primary)] text-white">إنهاء</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                <!-- 3. Result Screen -->
                <div v-else-if="quizState === 'submitted'" class="max-w-lg mx-auto py-8">
                    <Card class="border-[var(--border)] shadow-none text-center p-10 bg-[var(--card)] rounded-md relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-[2px]" :class="$page.props.flash?.passed ? 'bg-[var(--primary)]' : 'bg-[var(--border)]'"></div>
                        
                        <div class="h-16 w-16 mx-auto rounded-md flex items-center justify-center mb-6 border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)]">
                            <Trophy v-if="$page.props.flash?.passed" class="h-8 w-8 text-[var(--primary)]" />
                            <Frown v-else class="h-8 w-8 text-[var(--muted-foreground)]" />
                        </div>
                        
                        <h2 class="text-xl font-normal mb-1 text-[var(--foreground)]">
                            {{ $page.props.flash?.passed ? 'مبارك! لقد نجحت' : 'لم تجتز الاختبار' }}
                        </h2>
                        <p class="text-[11px] text-[var(--muted-foreground)] font-normal uppercase tracking-[0.2em] mb-8">
                            الدرجة النهائية: {{ $page.props.flash?.score }}%
                        </p>

                        <div class="grid grid-cols-2 gap-3 max-w-xs mx-auto mb-8">
                            <div class="p-4 rounded-md bg-[var(--muted)] border border-[var(--border)]">
                                <span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block mb-1">درجتك</span>
                                <span class="text-xl font-normal text-[var(--foreground)]">{{ $page.props.flash?.score }}%</span>
                            </div>
                            <div class="p-4 rounded-md bg-[var(--muted)] border border-[var(--border)]">
                                <span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block mb-1">الحالة</span>
                                <span class="text-base font-normal uppercase text-[var(--foreground)]">{{ $page.props.flash?.passed ? 'ناجح' : 'راسب' }}</span>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link :href="route('courses.show', course.slug)" class="w-full sm:w-auto">
                                <Button size="sm" class="w-full h-9 px-8 rounded-md font-normal text-[11px] uppercase tracking-widest shadow-none bg-[var(--foreground)] text-[var(--card)] hover:bg-[var(--foreground)] opacity-95">العودة للكورس</Button>
                            </Link>
                            <Link v-if="!$page.props.flash?.passed && canAttempt" :href="route('quizzes.show', {course: course.slug, quiz: quiz.id})" class="w-full sm:w-auto">
                                <Button variant="outline" size="sm" class="w-full h-9 px-8 rounded-md font-normal text-[11px] uppercase tracking-widest border-[var(--border)] hover:bg-[var(--muted)] bg-[var(--card)] text-[var(--foreground)]">محاولة أخرى</Button>
                            </Link>
                        </div>
                    </Card>
                </div>

            </main>
        </div>
    </AuthenticatedLayout>
</template>
