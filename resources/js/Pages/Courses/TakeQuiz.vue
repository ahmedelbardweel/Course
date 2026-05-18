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

    <AuthenticatedLayout>
        <!-- Zoomed out feel for student view -->
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Header Bar -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <Link :href="route('courses.show', course.slug)" class="hover:text-zinc-900 transition-colors">{{ course.title }}</Link>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-bold">{{ quiz.title }}</span>
                </div>
                <div v-if="quizState === 'taking' && timeLeft !== null" class="flex items-center gap-1.5 px-3 py-1 bg-zinc-50 border rounded-md font-mono font-bold text-xs">
                    <Clock class="h-3 w-3" />
                    {{ formatTime(timeLeft) }}
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right max-w-full">
                
                <!-- 1. Intro Screen -->
                <div v-if="quizState === 'intro'" class="max-w-4xl mx-auto space-y-6">
                    <div class="space-y-1 border-b border-zinc-100 pb-4">
                        <h2 class="text-xl font-black tracking-tight text-zinc-900">{{ quiz.title }}</h2>
                        <p class="text-[11px] text-zinc-400 font-medium">{{ quiz.description }}</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div class="md:col-span-3 space-y-4">
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                <Card class="p-3 shadow-none border-zinc-200 text-center space-y-1">
                                    <span class="text-[9px] font-black text-zinc-300 uppercase tracking-widest block">المدة</span>
                                    <span class="text-xs font-black">{{ quiz.duration ? `${quiz.duration} د` : 'مفتوح' }}</span>
                                </Card>
                                <Card class="p-3 shadow-none border-zinc-200 text-center space-y-1">
                                    <span class="text-[9px] font-black text-zinc-300 uppercase tracking-widest block">الأسئلة</span>
                                    <span class="text-xs font-black">{{ quiz.questions?.length || 0 }}</span>
                                </Card>
                                <Card class="p-3 shadow-none border-zinc-200 text-center space-y-1">
                                    <span class="text-[9px] font-black text-zinc-300 uppercase tracking-widest block">النجاح</span>
                                    <span class="text-xs font-black text-emerald-600">{{ quiz.passing_score }}%</span>
                                </Card>
                                <Card class="p-3 shadow-none border-zinc-200 text-center space-y-1">
                                    <span class="text-[9px] font-black text-zinc-300 uppercase tracking-widest block">المحاولات</span>
                                    <span class="text-xs font-black">{{ attemptsCount }} / {{ quiz.attempts_limit }}</span>
                                </Card>
                            </div>

                            <Card v-if="quiz.instructions" class="border-zinc-200 shadow-none rounded-lg overflow-hidden bg-white">
                                <CardHeader class="p-3 bg-zinc-50/50 border-b border-zinc-100">
                                    <CardTitle class="text-[11px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                                        <AlertCircle class="h-3 w-3" /> تعليمات الاختبار
                                    </CardTitle>
                                </CardHeader>
                                <CardContent class="p-4 text-[12px] leading-relaxed text-zinc-600 whitespace-pre-line">
                                    {{ quiz.instructions }}
                                </CardContent>
                            </Card>

                            <div class="pt-2">
                                <div v-if="!isStarted" class="p-3 rounded-lg bg-amber-50 border border-amber-100 text-amber-700 font-bold flex items-center gap-2">
                                    <Clock class="h-3.5 w-3.5" /> سيبدأ في: {{ new Date(quiz.start_time).toLocaleString('ar-SA') }}
                                </div>
                                <div v-else-if="isEnded" class="p-3 rounded-lg bg-red-50 border border-red-100 text-red-700 font-bold flex items-center gap-2">
                                    <AlertTriangle class="h-3.5 w-3.5" /> انتهى وقت التقديم.
                                </div>
                                <div v-else-if="!canAttempt" class="p-3 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-500 font-bold flex items-center gap-2 text-center justify-center">
                                    <Lock class="h-3.5 w-3.5" /> استنفدت المحاولات المسموحة.
                                </div>
                                <Button v-else @click="startQuiz" class="w-full h-10 rounded-lg text-xs font-black shadow-sm tracking-widest uppercase">
                                    ابدأ الاختبار الآن
                                </Button>
                            </div>
                        </div>

                        <aside class="space-y-3">
                            <h3 class="text-[9px] font-black text-zinc-400 uppercase tracking-[0.2em] px-1">المحاولات السابقة</h3>
                            <div v-if="previousAttempts.length === 0" class="text-[10px] text-zinc-300 text-center py-6 border border-dashed rounded-lg">
                                لا توجد محاولات
                            </div>
                            <div v-else class="space-y-2">
                                <Card v-for="attempt in previousAttempts" :key="attempt.id" class="p-2.5 shadow-none border-zinc-100 bg-white flex items-center justify-between">
                                    <div>
                                        <div class="text-[9px] font-bold text-zinc-400">{{ new Date(attempt.created_at).toLocaleDateString('ar-SA') }}</div>
                                        <div class="text-[12px] font-black tracking-tighter">{{ attempt.score }}%</div>
                                    </div>
                                    <Badge :variant="attempt.status === 'passed' ? 'default' : 'destructive'" class="h-4.5 text-[8px] font-black uppercase rounded shadow-none">{{ attempt.status === 'passed' ? 'ناجح' : 'راسب' }}</Badge>
                                </Card>
                            </div>
                        </aside>
                    </div>
                </div>

                <!-- 2. Taking Screen -->
                <div v-else-if="quizState === 'taking'" class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full">
                    
                    <!-- Questions Nav -->
                    <aside class="w-full lg:w-64 shrink-0 lg:sticky lg:top-[60px]">
                        <Card class="p-3 shadow-none border border-zinc-200 rounded-lg bg-white">
                            <h3 class="text-[9px] font-black text-zinc-300 uppercase tracking-widest mb-3">خريطة الأسئلة</h3>
                            <div class="grid grid-cols-5 gap-1.5">
                                <button 
                                    v-for="(q, idx) in quiz.questions" 
                                    :key="idx"
                                    @click="currentQuestionIndex = idx"
                                    :class="[
                                        'h-7 rounded flex items-center justify-center text-[10px] font-black border transition-all',
                                        currentQuestionIndex === idx ? 'border-zinc-900 ring-1 ring-zinc-900 ring-offset-1' : 'border-zinc-100',
                                        form.answers[idx]?.option_id !== null ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm' : 'bg-zinc-50/50 text-zinc-300'
                                    ]"
                                >
                                    {{ idx + 1 }}
                                </button>
                            </div>
                            <div class="mt-4 pt-4 border-t border-zinc-100">
                                <Button 
                                    @click="submitQuiz" 
                                    :disabled="!allAnswered || form.processing" 
                                    class="w-full h-8 text-[10px] font-black uppercase tracking-widest bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                                >
                                    تقديم الإجابات
                                </Button>
                            </div>
                        </Card>
                    </aside>

                    <!-- Current Question -->
                    <div class="flex-1 w-full space-y-4">
                        <Card class="border-zinc-200 shadow-none rounded-lg overflow-hidden bg-white">
                            <CardHeader class="p-4 border-b border-zinc-50">
                                <Badge variant="secondary" class="h-4.5 font-black text-[9px] uppercase tracking-widest mb-3">السؤال {{ currentQuestionIndex + 1 }} من {{ quiz.questions?.length }}</Badge>
                                <CardTitle class="text-sm md:text-base leading-relaxed font-bold text-zinc-900">{{ currentQuestion?.question_text }}</CardTitle>
                            </CardHeader>
                            <CardContent class="p-4 pt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                                <button
                                    v-for="option in currentQuestion?.options"
                                    :key="option.id"
                                    @click="selectOption(option.id)"
                                    :class="[
                                        'w-full text-right p-3 rounded-md border transition-all duration-150 flex items-center justify-between group shadow-sm',
                                        form.answers[currentQuestionIndex]?.option_id === option.id 
                                            ? 'border-zinc-900 bg-zinc-900 text-white z-10' 
                                            : 'border-zinc-100 hover:border-zinc-300 bg-zinc-50/20'
                                    ]"
                                >
                                    <span class="font-bold text-[12px]">{{ option.option_text }}</span>
                                    <div :class="['h-4 w-4 rounded-full border transition-all flex items-center justify-center shrink-0', form.answers[currentQuestionIndex]?.option_id === option.id ? 'bg-white text-zinc-900 border-white' : 'border-zinc-200 bg-white']">
                                        <Check v-if="form.answers[currentQuestionIndex]?.option_id === option.id" class="h-2.5 w-2.5" />
                                    </div>
                                </button>
                            </CardContent>
                            <CardFooter class="p-3 border-t border-zinc-100 bg-zinc-50/30 flex items-center justify-between">
                                <Button variant="ghost" size="sm" @click="prevQuestion" :disabled="currentQuestionIndex === 0" class="h-7 px-4 text-[11px] font-bold">السابق</Button>
                                <Button v-if="!isLastQuestion" @click="nextQuestion" variant="secondary" size="sm" class="h-7 px-6 text-[11px] font-black uppercase tracking-widest">التالي</Button>
                                <Button v-else @click="submitQuiz" :disabled="!allAnswered || form.processing" class="h-7 px-8 text-[11px] font-black uppercase tracking-widest bg-emerald-600 hover:bg-emerald-700 text-white">إنهاء</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

                <!-- 3. Result Screen -->
                <div v-else-if="quizState === 'submitted'" class="max-w-lg mx-auto py-8">
                    <Card class="border-zinc-200 shadow-xl text-center p-10 bg-white rounded-2xl relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-1" :class="$page.props.flash?.passed ? 'bg-emerald-500' : 'bg-red-500'"></div>
                        
                        <div :class="['h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-6 shadow-inner', $page.props.flash?.passed ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-500']">
                            <Trophy v-if="$page.props.flash?.passed" class="h-8 w-8" />
                            <Frown v-else class="h-8 w-8" />
                        </div>
                        
                        <h2 class="text-xl font-black mb-1 text-zinc-900">
                            {{ $page.props.flash?.passed ? 'مبارك! لقد نجحت' : 'لم تجتز الاختبار' }}
                        </h2>
                        <p class="text-[11px] text-zinc-400 font-bold uppercase tracking-[0.2em] mb-8">
                            الدرجة النهائية: {{ $page.props.flash?.score }}%
                        </p>

                        <div class="grid grid-cols-2 gap-3 max-w-xs mx-auto mb-8">
                            <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                                <span class="text-[9px] font-black text-zinc-300 uppercase tracking-widest block mb-1">درجتك</span>
                                <span class="text-xl font-black">{{ $page.props.flash?.score }}%</span>
                            </div>
                            <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                                <span class="text-[9px] font-black text-zinc-300 uppercase tracking-widest block mb-1">الحالة</span>
                                <span :class="['text-base font-black uppercase', $page.props.flash?.passed ? 'text-emerald-500' : 'text-red-500']">{{ $page.props.flash?.passed ? 'ناجح' : 'راسب' }}</span>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link :href="route('courses.show', course.slug)" class="w-full sm:w-auto">
                                <Button size="sm" class="w-full h-9 px-8 rounded-lg font-black text-[11px] uppercase tracking-widest shadow-lg shadow-zinc-900/10">العودة للكورس</Button>
                            </Link>
                            <Link v-if="!$page.props.flash?.passed && canAttempt" :href="route('quizzes.show', {course: course.slug, quiz: quiz.id})" class="w-full sm:w-auto">
                                <Button variant="outline" size="sm" class="w-full h-9 px-8 rounded-lg font-black text-[11px] uppercase tracking-widest border-zinc-200">محاولة أخرى</Button>
                            </Link>
                        </div>
                    </Card>
                </div>

            </main>
        </div>
    </AuthenticatedLayout>
</template>
