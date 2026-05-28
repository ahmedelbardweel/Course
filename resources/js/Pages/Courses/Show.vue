<script setup>
import { Head, Link, router, useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Button } from '@/Components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Textarea } from '@/Components/ui/textarea';
import { Separator } from '@/Components/ui/separator';
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { 
    PlayCircle, CheckCircle2, ChevronLeft, Lock, Play, 
    BookOpen, HelpCircle, Trophy, Sparkles, MessageSquare, 
    Calendar, Loader2, ArrowUpRight, Award, Trash2, Clock, Check,
    Briefcase, BrainCircuit, Send, X
} from 'lucide-vue-next';

const props = defineProps({
    course: Object,
    currentLesson: Object,
    isEnrolled: Boolean,
    completedLessonsIds: Array,
});

// -- Lesson Completion --
const isTogglingComplete = ref(false);
const isLessonCompleted = computed(() => props.currentLesson && props.completedLessonsIds?.includes(props.currentLesson.id));

const toggleComplete = () => {
    if (!props.currentLesson?.id) return;
    isTogglingComplete.value = true;
    router.post(route('lessons.complete', props.currentLesson.id), {}, {
        preserveScroll: true,
        preserveState: true,
        onFinish: () => isTogglingComplete.value = false,
    });
};

// -- Tabs --
const activeTab = ref('overview');

// -- Notes Logic --
const notes = ref([]);
const newNote = ref('');
const isSavingNote = ref(false);
const isFetchingNotes = ref(false);

const fetchNotes = async () => {
    if (!props.currentLesson) return;
    isFetchingNotes.value = true;
    try {
        const res = await axios.get(route('notes.index', props.currentLesson.id));
        notes.value = res.data;
    } finally {
        isFetchingNotes.value = false;
    }
};

const saveNote = async () => {
    if (!newNote.value.trim() || isSavingNote.value) return;
    isSavingNote.value = true;
    try {
        const res = await axios.post(route('notes.store', props.currentLesson.id), {
            content: newNote.value,
            timestamp: 0 
        });
        notes.value.unshift(res.data);
        newNote.value = '';
    } catch (e) {
        alert('حدث خطأ أثناء حفظ الملاحظة.');
    } finally {
        isSavingNote.value = false;
    }
};

const deleteNote = async (id) => {
    if (!confirm('هل أنت متأكد من حذف هذه الملاحظة؟')) return;
    try {
        await axios.delete(route('notes.destroy', id));
        notes.value = notes.value.filter(n => n.id !== id);
    } catch (e) {
        alert('حدث خطأ أثناء الحذف.');
    }
};

// -- AI Summarize --
const isSummarizing = ref(false);
const summaryResult = ref(null);

const summarizeLesson = async () => {
    if (!props.currentLesson?.id) return;
    isSummarizing.value = true;
    summaryResult.value = null;
    try {
        const response = await axios.post(route('ai.summarize'), { lesson_id: props.currentLesson.id });
        summaryResult.value = response.data.summary;
    } catch (error) {
        alert('حدث خطأ أثناء التلخيص.');
    } finally {
        isSummarizing.value = false;
    }
};

// -- Challenges --
const challengeForm = useForm({});
const participateInChallenge = (challengeId) => {
    challengeForm.post(route('challenges.participate', challengeId), {
        preserveScroll: true
    });
};

// -- Interview Logic --
const showInterviewModal = ref(false);
const interviewHistory = ref([]);
const isInterviewing = ref(false);
const interviewInput = ref('');

const startInterview = async () => {
    showInterviewModal.value = true;
    interviewHistory.value = [];
    isInterviewing.value = true;
    try {
        const response = await axios.post(route('ai.interview'), {
            course_id: props.course?.id,
            chat_history: [],
            user_answer: ''
        });
        interviewHistory.value.push({ role: 'bot', content: response.data.reply });
    } catch (error) {
        alert('حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.');
    } finally {
        isInterviewing.value = false;
    }
};

const sendInterviewAnswer = async () => {
    if (!interviewInput.value.trim() || isInterviewing.value) return;
    const userAns = interviewInput.value;
    interviewHistory.value.push({ role: 'user', content: userAns });
    interviewInput.value = '';
    isInterviewing.value = true;
    try {
        const response = await axios.post(route('ai.interview'), {
            course_id: props.course?.id,
            chat_history: interviewHistory.value.slice(0, -1),
            user_answer: userAns
        });
        interviewHistory.value.push({ role: 'bot', content: response.data.reply });
    } catch (error) {
        alert('حدث خطأ. يرجى المحاولة لاحقاً.');
    } finally {
        isInterviewing.value = false;
    }
};

// -- Init --
onMounted(() => {
    if (props.isEnrolled && props.currentLesson) {
        fetchNotes();
    }
});

// Helper for total duration
const totalDuration = computed(() => {
    return (props.course?.lessons?.length || 0) * 15; // Rough estimate if duration isn't in DB
});
</script>

<template>
    <Head :title="course?.title || 'الكورس'" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'الرئيسية', url: route('dashboard') },
        { label: 'الدورات', url: route('courses.index') },
        { label: course?.title || 'الدورة' }
    ]">

        <div v-if="!course" class="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-[var(--muted-foreground)]">
            <Loader2 class="h-6 w-6 animate-spin" />
            <p class="font-normal text-sm">جاري تحميل البيانات...</p>
        </div>

        <!-- ================= ENROLLMENT WALL (Not Enrolled) ================= -->
        <div v-else-if="!isEnrolled" class="w-full max-w-5xl mx-auto p-4 md:p-8 space-y-8 bg-[var(--card)] border border-[var(--border)] rounded-md mt-4 shadow-none">
            <div class="flex flex-col md:flex-row gap-8 items-start">
                <div class="flex-1 space-y-6">
                    <div>
                        <Badge v-if="course.category" variant="secondary" class="mb-4 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)] rounded shadow-none">
                            {{ course.category.name }}
                        </Badge>
                        <h1 class="text-3xl font-normal tracking-tight text-[var(--foreground)]">{{ course.title }}</h1>
                        <p class="text-xs text-[var(--muted-foreground)] mt-4 leading-relaxed">{{ course.description }}</p>
                    </div>
                    
                    <div class="flex flex-wrap items-center gap-4 text-[11px] text-[var(--muted-foreground)] font-normal">
                        <div class="flex items-center gap-1.5">
                            <Clock class="h-4 w-4" />
                            <span>{{ totalDuration }} دقيقة</span>
                        </div>
                        <Separator orientation="vertical" class="h-4" />
                        <div class="flex items-center gap-1.5">
                            <BookOpen class="h-4 w-4" />
                            <span>{{ course.lessons?.length || 0 }} درس</span>
                        </div>
                        <Separator orientation="vertical" class="h-4" />
                        <div class="flex items-center gap-1.5">
                            <Award class="h-4 w-4" />
                            <span>{{ course.level || 'جميع المستويات' }}</span>
                        </div>
                    </div>

                    <div class="pt-4">
                        <Link :href="route('courses.checkout', course.slug)">
                            <Button size="lg" class="w-full md:w-auto font-normal bg-[var(--primary)] text-white rounded-md shadow-none text-xs h-10 border-none">
                                اشترك الآن
                                <ArrowUpRight class="ms-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
                
                <div class="w-full md:w-1/2">
                    <Card class="overflow-hidden border border-[var(--border)] shadow-none aspect-video relative flex items-center justify-center bg-[var(--muted)] rounded-md">
                        <img v-if="course.thumbnail" :src="course.thumbnail" class="absolute inset-0 w-full h-full object-cover" />
                        <div class="relative z-10 h-11 w-11 bg-[var(--card)] border border-[var(--border)] rounded-md flex items-center justify-center shadow-none">
                            <Play class="h-4 w-4 text-[var(--primary)] ms-0.5" />
                        </div>
                    </Card>
                </div>
            </div>

            <div class="space-y-6 pt-8 border-t border-[var(--border)]">
                <div>
                    <h2 class="text-base font-normal tracking-tight mb-1 text-[var(--foreground)]">منهج الدورة</h2>
                    <p class="text-xs text-[var(--muted-foreground)]">تعرف على المحتوى الذي ستدرسه في هذه الدورة.</p>
                </div>
                <div class="grid gap-3">
                    <Card v-for="(lesson, index) in course.lessons" :key="lesson.id" class="p-3 flex items-center justify-between shadow-none border border-[var(--border)] rounded-md bg-[var(--card)]">
                        <div class="flex items-center gap-4">
                            <span class="text-xs font-normal text-[var(--muted-foreground)] w-6">{{ index + 1 }}</span>
                            <div class="flex flex-col">
                                <span class="font-normal text-xs text-[var(--foreground)]">{{ lesson.title }}</span>
                                <span class="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1 mt-1">
                                    <PlayCircle class="h-3.5 w-3.5" /> مسجل
                                </span>
                            </div>
                        </div>
                        <Lock class="h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                    </Card>
                </div>
            </div>
        </div>

        <!-- ================= COURSE WORKSPACE (Enrolled) ================= -->
        <div v-else class="max-w-7xl mx-auto p-4 md:p-6">
            <div class="flex flex-col lg:flex-row gap-6 items-start">
                
                <!-- Main Content Area -->
                <div class="flex-1 min-w-0 space-y-6 w-full order-2 lg:order-1">
                    
                    <!-- Video Player -->
                    <Card class="overflow-hidden shadow-none border border-[var(--border)] bg-black rounded-md">
                        <div class="relative w-full aspect-video">
                            <iframe 
                                v-if="currentLesson"
                                :src="currentLesson.video_url" 
                                class="absolute inset-0 w-full h-full border-0"
                                allowfullscreen
                            ></iframe>
                            <div v-else class="absolute inset-0 flex items-center justify-center text-white/50 flex-col gap-2">
                                <PlayCircle class="h-10 w-10 opacity-50" />
                                <span class="text-xs font-normal">اختر درساً</span>
                            </div>
                        </div>
                    </Card>

                    <!-- Header & Actions -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="space-y-1">
                            <h2 class="text-xl font-normal tracking-tight text-[var(--foreground)]">{{ currentLesson?.title || 'مرحباً بك' }}</h2>
                            <p class="text-xs text-[var(--muted-foreground)]">{{ course.title }}</p>
                        </div>
                        
                        <div class="flex flex-wrap items-center gap-2" v-if="currentLesson">
                            <Button @click="startInterview" variant="outline" size="sm" class="font-normal text-xs border-[var(--border)] rounded-md shadow-none h-8.5">
                                <Briefcase class="me-2 h-3.5 w-3.5" />
                                تدريب المقابلة
                            </Button>
                            <Button @click="summarizeLesson" :disabled="isSummarizing" variant="secondary" size="sm" class="font-normal text-xs bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)] rounded-md shadow-none h-8.5">
                                <Loader2 v-if="isSummarizing" class="me-2 h-3.5 w-3.5 animate-spin" />
                                <Sparkles v-else class="me-2 h-3.5 w-3.5" />
                                التلخيص
                            </Button>
                            <Button @click="toggleComplete" :disabled="isTogglingComplete" :variant="isLessonCompleted ? 'default' : 'outline'" size="sm" :class="['font-normal text-xs rounded-md shadow-none h-8.5', isLessonCompleted ? 'bg-[var(--primary)] text-white border-none' : 'border-[var(--border)]']">
                                <Loader2 v-if="isTogglingComplete" class="me-2 h-3.5 w-3.5 animate-spin" />
                                <CheckCircle2 v-else class="me-2 h-3.5 w-3.5" />
                                {{ isLessonCompleted ? 'مكتمل' : 'إنهاء' }}
                            </Button>
                        </div>
                    </div>

                    <!-- AI Summary Display -->
                    <div v-if="summaryResult" class="p-5 bg-[var(--muted)] border border-[var(--border)] rounded-md">
                        <div class="flex items-center gap-2 mb-3">
                            <Sparkles class="h-4 w-4 text-[var(--primary)]" />
                            <h3 class="font-normal text-xs text-[var(--foreground)]">التلخيص</h3>
                        </div>
                        <div class="prose prose-sm max-w-none text-[var(--muted-foreground)] leading-relaxed text-xs" v-html="summaryResult"></div>
                    </div>

                    <!-- Tabs -->
                    <div class="space-y-4">
                        <div class="border-b border-[var(--border)] flex items-center gap-6">
                            <button 
                                v-for="tab in [
                                    { id: 'overview', label: 'الوصف' },
                                    { id: 'notes', label: 'الملاحظات' },
                                    { id: 'challenges', label: 'التحديات' },
                                    { id: 'quizzes', label: 'الاختبارات' }
                                ]"
                                :key="tab.id"
                                @click="activeTab = tab.id"
                                :class="[
                                    'py-2.5 text-xs font-normal border-b-2 outline-none',
                                    activeTab === tab.id ? 'border-[var(--primary)] text-[var(--foreground)]' : 'border-transparent text-[var(--muted-foreground)]'
                                ]"
                            >
                                {{ tab.label }}
                            </button>
                        </div>

                        <div class="py-2">
                            <!-- Overview Tab -->
                            <div v-if="activeTab === 'overview'" class="text-xs text-[var(--muted-foreground)] leading-relaxed">
                                {{ course.description }}
                            </div>

                            <!-- Notes Tab -->
                            <div v-if="activeTab === 'notes'" class="space-y-6">
                                <div class="grid gap-2">
                                    <Textarea 
                                        v-model="newNote"
                                        placeholder="أضف ملاحظة (Ctrl+Enter)"
                                        class="min-h-[100px] text-xs resize-none border-[var(--border)] focus-visible:ring-[var(--primary)] rounded-md bg-[var(--card)]"
                                        @keyup.ctrl.enter="saveNote"
                                    />
                                    <div class="flex justify-end">
                                        <Button @click="saveNote" :disabled="!newNote.trim() || isSavingNote" size="sm" class="font-normal text-xs bg-[var(--primary)] text-white rounded-md shadow-none border-none">
                                            <Loader2 v-if="isSavingNote" class="me-2 h-3 w-3 animate-spin" />
                                            إضافة
                                        </Button>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <div v-if="isFetchingNotes" class="py-8 flex justify-center"><Loader2 class="h-5 w-5 animate-spin text-[var(--muted-foreground)]" /></div>
                                    <div v-else-if="notes.length === 0" class="py-8 text-center text-xs text-[var(--muted-foreground)] font-normal">لا توجد ملاحظات.</div>
                                    <Card v-for="note in notes" :key="note.id" class="p-4 shadow-none border border-[var(--border)] rounded-md relative group bg-[var(--card)]">
                                        <button @click="deleteNote(note.id)" class="absolute top-4 end-4 text-[var(--muted-foreground)]">
                                            <Trash2 class="h-3.5 w-3.5" />
                                        </button>
                                        <p class="text-xs text-[var(--foreground)] whitespace-pre-wrap pe-8 leading-relaxed">{{ note.content }}</p>
                                        <span class="text-[10px] text-[var(--muted-foreground)] mt-3 block font-normal">{{ new Date(note.created_at).toLocaleDateString('ar-SA') }}</span>
                                    </Card>
                                </div>
                            </div>

                            <!-- Challenges Tab -->
                            <div v-if="activeTab === 'challenges'">
                                <div v-if="course.challenges?.length === 0" class="py-8 text-center text-xs text-[var(--muted-foreground)] font-normal">لا توجد تحديات.</div>
                                <div v-else class="grid sm:grid-cols-2 gap-4">
                                    <Card v-for="challenge in course.challenges" :key="challenge.id" class="p-4 shadow-none border border-[var(--border)] rounded-md flex flex-col bg-[var(--card)]">
                                        <div class="flex items-start justify-between mb-2">
                                            <h4 class="font-normal text-sm text-[var(--foreground)]">{{ challenge.title }}</h4>
                                            <Badge variant="secondary" class="text-[10px] font-normal bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] rounded shadow-none">
                                                {{ challenge.points }} نقطة
                                            </Badge>
                                        </div>
                                        <p class="text-xs text-[var(--muted-foreground)] mb-6 flex-1 leading-relaxed">{{ challenge.description }}</p>
                                        <Button @click="participateInChallenge(challenge.id)" :disabled="!challenge.is_active || challengeForm.processing" variant="outline" size="sm" class="w-full text-xs font-normal border-[var(--border)] rounded-md shadow-none">
                                            المشاركة
                                        </Button>
                                    </Card>
                                </div>
                            </div>

                            <!-- Quizzes Tab -->
                            <div v-if="activeTab === 'quizzes'">
                                <div v-if="course.quizzes?.length === 0" class="py-8 text-center text-xs text-[var(--muted-foreground)] font-normal">لا توجد اختبارات.</div>
                                <div v-else class="grid sm:grid-cols-2 gap-4">
                                    <Card v-for="quiz in course.quizzes" :key="quiz.id" class="p-4 shadow-none border border-[var(--border)] rounded-md flex flex-col bg-[var(--card)]">
                                        <h4 class="font-normal text-sm text-[var(--foreground)] mb-1.5">{{ quiz.title }}</h4>
                                        <p class="text-xs text-[var(--muted-foreground)] mb-6 flex-1 leading-relaxed">{{ quiz.description }}</p>
                                        <div class="flex items-center gap-2 mb-4 text-[10px] text-[var(--muted-foreground)] font-normal">
                                            <span>{{ quiz.questions_count || 0 }} أسئلة</span>
                                            <Separator orientation="vertical" class="h-3" />
                                            <span>نجاح: {{ quiz.passing_score }}%</span>
                                        </div>
                                        <Link :href="route('quizzes.show', {course: course.slug, quiz: quiz.id})">
                                            <Button variant="outline" size="sm" class="w-full text-xs font-normal border-[var(--border)] rounded-md shadow-none">بدء الاختبار</Button>
                                        </Link>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar Area -->
                <div class="w-full lg:w-[320px] shrink-0 space-y-4 order-1 lg:order-2">
                    <Card class="shadow-none border border-[var(--border)] flex flex-col h-auto lg:max-h-[calc(100vh-8rem)] lg:sticky lg:top-24 bg-[var(--card)] rounded-md overflow-hidden">
                        <div class="p-4 border-b border-[var(--border)] bg-[var(--muted)]">
                            <h3 class="font-normal text-xs mb-3 text-[var(--foreground)]">محتوى الكورس</h3>
                            <div class="flex items-center justify-between text-[11px] text-[var(--muted-foreground)] font-normal">
                                <span>المكتمل: {{ completedLessonsIds.length }}/{{ course.lessons?.length || 0 }}</span>
                                <span>{{ Math.round((completedLessonsIds.length / (course.lessons?.length || 1)) * 100) }}%</span>
                            </div>
                            <div class="w-full h-2 bg-[var(--accent)] border border-[var(--border)] rounded-md mt-2 overflow-hidden">
                                <div class="h-full bg-[var(--primary)]" :style="{ width: `${(completedLessonsIds.length / (course.lessons?.length || 1)) * 100}%` }"></div>
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto divide-y divide-[var(--border)] text-xs">
                            <Link 
                                v-for="(lesson, index) in course.lessons" 
                                :key="lesson.id"
                                :href="route('courses.show', { slug: course.slug, lesson: lesson.id })"
                                :class="[
                                    'p-3 flex items-start gap-3',
                                    currentLesson?.id === lesson.id ? 'bg-[var(--muted)] border-s-2 border-[var(--primary)] font-normal' : 'border-s-2 border-transparent'
                                ]"
                            >
                                <div class="flex-1 min-w-0">
                                    <span :class="['text-xs line-clamp-2', currentLesson?.id === lesson.id ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]']">
                                        {{ index + 1 }}. {{ lesson.title }}
                                    </span>
                                </div>
                                <Check v-if="completedLessonsIds?.includes(lesson.id)" class="h-3.5 w-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                                <div v-else-if="currentLesson?.id === lesson.id" class="h-1.5 w-1.5 bg-[var(--primary)] rounded-full shrink-0 mt-1.5 animate-pulse"></div>
                            </Link>
                        </div>
                    </Card>

                    <!-- Minimal AI & Study Cards -->
                    <Card class="shadow-none border border-[var(--border)] p-4 bg-[var(--card)] rounded-md">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="h-8 w-8 rounded-md bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center">
                                <BrainCircuit class="h-4 w-4 text-[var(--primary)]" />
                            </div>
                            <div>
                                <h4 class="font-normal text-xs text-[var(--foreground)]">المساعد الذكي</h4>
                                <p class="text-[10px] text-[var(--muted-foreground)]">اطرح أسئلة حول الدرس</p>
                            </div>
                        </div>
                        <Link :href="route('ai.index', { lesson_id: currentLesson?.id })">
                            <Button variant="secondary" size="sm" class="w-full mt-3 text-[11px] font-normal bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] rounded-md shadow-none">اسأل الذكاء الاصطناعي</Button>
                        </Link>
                    </Card>

                    <Card class="shadow-none border border-[var(--border)] p-4 bg-[var(--card)] rounded-md">
                        <div class="flex items-center justify-between mb-2">
                            <div class="flex items-center gap-3">
                                <div class="h-8 w-8 rounded-md bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center">
                                    <Award class="h-4 w-4 text-[var(--primary)]" />
                                </div>
                                <div>
                                    <h4 class="font-normal text-xs text-[var(--foreground)]">غرف المذاكرة</h4>
                                    <p class="text-[10px] text-[var(--muted-foreground)]">للمذاكرة الجماعية</p>
                                </div>
                            </div>
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                            </span>
                        </div>
                        <Link :href="route('study-room.show', course.slug)">
                            <Button variant="outline" size="sm" class="w-full mt-3 text-[11px] font-normal border-[var(--border)] text-[var(--foreground)] rounded-md shadow-none">الانضمام للغرفة</Button>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>

        <!-- ================= INTERVIEW MODAL ================= -->
        <div v-if="showInterviewModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-[var(--foreground)]/30 backdrop-blur-sm" @click="showInterviewModal = false"></div>
            
            <Card class="w-full max-w-2xl h-[550px] flex flex-col relative shadow-none border border-[var(--border)] bg-[var(--card)] rounded-md overflow-hidden">
                <div class="flex items-center justify-between p-4 border-b border-[var(--border)]">
                    <div class="flex items-center gap-3">
                        <Briefcase class="h-4 w-4 text-[var(--primary)]" />
                        <h3 class="font-normal text-sm text-[var(--foreground)]">تدريب المقابلة الشخصية</h3>
                    </div>
                    <Button variant="ghost" size="icon" @click="showInterviewModal = false" class="h-8 w-8 rounded-md">
                        <X class="h-4 w-4 text-[var(--muted-foreground)]" />
                    </Button>
                </div>
                
                <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--background)]">
                    <div v-for="(msg, idx) in interviewHistory" :key="idx" :class="['flex', msg.role === 'user' ? 'justify-start' : 'justify-end']">
                        <div :class="[
                            'max-w-[85%] rounded-md p-3 text-xs leading-relaxed border shadow-none', 
                            msg.role === 'user' ? 'bg-[var(--primary)] text-white border-[var(--primary)] rounded-tr-none' : 'bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] rounded-tl-none'
                        ]">
                            <p class="whitespace-pre-wrap">{{ msg.content }}</p>
                        </div>
                    </div>
                    <div v-if="isInterviewing" class="flex justify-end">
                        <div class="bg-[var(--muted)] border border-[var(--border)] rounded-md p-3 text-xs flex items-center gap-2 text-[var(--muted-foreground)] font-normal">
                            <Loader2 class="h-3.5 w-3.5 animate-spin" />
                            يكتب...
                        </div>
                    </div>
                </div>
                
                <div class="p-3 border-t border-[var(--border)] bg-[var(--card)]">
                    <form @submit.prevent="sendInterviewAnswer" class="flex items-center gap-2 bg-[var(--muted)] p-1.5 pl-2 rounded-md border border-[var(--border)] focus-within:border-[var(--primary)]">
                        <textarea 
                            v-model="interviewInput" 
                            placeholder="أرسل إجابتك هنا..." 
                            class="flex-1 bg-transparent border-none focus:ring-0 text-xs text-[var(--foreground)] placeholder-[var(--muted-foreground)] py-1 resize-none h-7 overflow-y-auto"
                            :disabled="isInterviewing"
                            @keydown.enter.exact.prevent="sendInterviewAnswer"
                        />
                        <Button type="submit" :disabled="!interviewInput.trim() || isInterviewing" size="icon" class="h-8 w-8 shrink-0 bg-[var(--primary)] text-white rounded-md shadow-none border-none">
                            <Send class="h-3.5 w-3.5 rtl:rotate-180" />
                        </Button>
                    </form>
                </div>
            </Card>
        </div>

    </AuthenticatedLayout>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
