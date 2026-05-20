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

    <AuthenticatedLayout>
        
        <template #header v-if="course">
            <div class="flex items-center gap-2 text-sm text-muted-foreground">
                <Link :href="route('courses.index')" class="hover:text-foreground transition-colors">الدورات</Link>
                <ChevronLeft class="h-4 w-4 rtl:rotate-180" />
                <span class="text-foreground font-semibold truncate max-w-[200px] sm:max-w-md">{{ course.title }}</span>
            </div>
        </template>

        <div v-if="!course" class="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <Loader2 class="h-6 w-6 animate-spin" />
            <p class="font-medium text-sm">جاري تحميل البيانات...</p>
        </div>

        <!-- ================= ENROLLMENT WALL (Not Enrolled) ================= -->
        <div v-else-if="!isEnrolled" class="w-full max-w-5xl mx-auto p-4 md:p-8 space-y-8 bg-white border border-zinc-200 rounded-lg mt-4 shadow-sm animate-in fade-in duration-500">
            <div class="flex flex-col md:flex-row gap-8 items-start">
                <div class="flex-1 space-y-6">
                    <div>
                        <Badge v-if="course.category" variant="secondary" class="mb-4 bg-zinc-100 text-zinc-900 border border-zinc-200 rounded shadow-none">
                            {{ course.category.name }}
                        </Badge>
                        <h1 class="text-3xl font-extrabold tracking-tight text-zinc-950">{{ course.title }}</h1>
                        <p class="text-xs text-zinc-500 mt-4 leading-relaxed">{{ course.description }}</p>
                    </div>
                    
                    <div class="flex flex-wrap items-center gap-4 text-[11px] text-zinc-400 font-bold">
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
                            <Button size="lg" class="w-full md:w-auto font-bold bg-zinc-950 hover:bg-zinc-900 text-white rounded-md transition-colors shadow-sm text-xs h-10">
                                اشترك الآن
                                <ArrowUpRight class="ms-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
                
                <div class="w-full md:w-1/2">
                    <Card class="overflow-hidden border border-zinc-200 shadow-none aspect-video relative flex items-center justify-center bg-zinc-50 rounded-lg">
                        <img v-if="course.thumbnail" :src="course.thumbnail" class="absolute inset-0 w-full h-full object-cover" />
                        <div class="relative z-10 h-11 w-11 bg-white border border-zinc-200 rounded-md flex items-center justify-center shadow-sm">
                            <Play class="h-4 w-4 text-zinc-950 ms-0.5" />
                        </div>
                    </Card>
                </div>
            </div>

            <div class="space-y-6 pt-8 border-t border-zinc-200">
                <div>
                    <h2 class="text-base font-bold tracking-tight mb-1 text-zinc-950">منهج الدورة</h2>
                    <p class="text-xs text-zinc-400">تعرف على المحتوى الذي ستدرسه في هذه الدورة.</p>
                </div>
                <div class="grid gap-3">
                    <Card v-for="(lesson, index) in course.lessons" :key="lesson.id" class="p-3 flex items-center justify-between shadow-none border border-zinc-200 rounded-md hover:border-zinc-400 transition-colors bg-white">
                        <div class="flex items-center gap-4">
                            <span class="text-xs font-semibold text-zinc-400 w-6">{{ index + 1 }}</span>
                            <div class="flex flex-col">
                                <span class="font-bold text-xs text-zinc-950">{{ lesson.title }}</span>
                                <span class="text-[10px] text-zinc-400 flex items-center gap-1 mt-1">
                                    <PlayCircle class="h-3.5 w-3.5" /> مسجل
                                </span>
                            </div>
                        </div>
                        <Lock class="h-3.5 w-3.5 text-zinc-400" />
                    </Card>
                </div>
            </div>
        </div>

        <!-- ================= COURSE WORKSPACE (Enrolled) ================= -->
        <div v-else class="max-w-7xl mx-auto p-4 md:p-6 animate-in fade-in duration-500">
            <div class="flex flex-col lg:flex-row gap-6 items-start">
                
                <!-- Main Content Area -->
                <div class="flex-1 min-w-0 space-y-6 w-full order-2 lg:order-1">
                    
                    <!-- Video Player -->
                    <Card class="overflow-hidden shadow-none border border-zinc-200 bg-black rounded-lg">
                        <div class="relative w-full aspect-video">
                            <iframe 
                                v-if="currentLesson"
                                :src="currentLesson.video_url" 
                                class="absolute inset-0 w-full h-full border-0"
                                allowfullscreen
                            ></iframe>
                            <div v-else class="absolute inset-0 flex items-center justify-center text-white/50 flex-col gap-2">
                                <PlayCircle class="h-10 w-10 opacity-50" />
                                <span class="text-xs font-medium">اختر درساً</span>
                            </div>
                        </div>
                    </Card>

                    <!-- Header & Actions -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="space-y-1">
                            <h2 class="text-xl font-bold tracking-tight text-zinc-950">{{ currentLesson?.title || 'مرحباً بك' }}</h2>
                            <p class="text-xs text-zinc-400">{{ course.title }}</p>
                        </div>
                        
                        <div class="flex flex-wrap items-center gap-2" v-if="currentLesson">
                            <Button @click="startInterview" variant="outline" size="sm" class="font-bold text-xs border-zinc-200 hover:bg-zinc-50 rounded-md shadow-none h-8.5">
                                <Briefcase class="me-2 h-3.5 w-3.5" />
                                تدريب المقابلة
                            </Button>
                            <Button @click="summarizeLesson" :disabled="isSummarizing" variant="secondary" size="sm" class="font-bold text-xs bg-zinc-100 hover:bg-zinc-200 text-zinc-950 border border-zinc-200 rounded-md shadow-none h-8.5">
                                <Loader2 v-if="isSummarizing" class="me-2 h-3.5 w-3.5 animate-spin" />
                                <Sparkles v-else class="me-2 h-3.5 w-3.5" />
                                التلخيص
                            </Button>
                            <Button @click="toggleComplete" :disabled="isTogglingComplete" :variant="isLessonCompleted ? 'default' : 'outline'" size="sm" class="font-bold text-xs rounded-md shadow-none h-8.5">
                                <Loader2 v-if="isTogglingComplete" class="me-2 h-3.5 w-3.5 animate-spin" />
                                <CheckCircle2 v-else class="me-2 h-3.5 w-3.5" />
                                {{ isLessonCompleted ? 'مكتمل' : 'إنهاء' }}
                            </Button>
                        </div>
                    </div>

                    <!-- AI Summary Display -->
                    <div v-if="summaryResult" class="p-5 bg-zinc-50 border border-zinc-200 rounded-md animate-in fade-in">
                        <div class="flex items-center gap-2 mb-3">
                            <Sparkles class="h-4 w-4 text-zinc-950" />
                            <h3 class="font-bold text-xs text-zinc-950">التلخيص</h3>
                        </div>
                        <div class="prose prose-sm max-w-none text-zinc-700 leading-relaxed text-xs" v-html="summaryResult"></div>
                    </div>

                    <!-- Tabs -->
                    <div class="space-y-4">
                        <div class="border-b border-zinc-200 flex items-center gap-6">
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
                                    'py-2.5 text-xs font-bold transition-colors border-b-2 outline-none',
                                    activeTab === tab.id ? 'border-zinc-950 text-zinc-950 font-black' : 'border-transparent text-zinc-400 hover:text-zinc-950'
                                ]"
                            >
                                {{ tab.label }}
                            </button>
                        </div>

                        <div class="py-2">
                            <!-- Overview Tab -->
                            <div v-if="activeTab === 'overview'" class="animate-in fade-in text-xs text-zinc-500 leading-relaxed">
                                {{ course.description }}
                            </div>

                            <!-- Notes Tab -->
                            <div v-if="activeTab === 'notes'" class="animate-in fade-in space-y-6">
                                <div class="grid gap-2">
                                    <Textarea 
                                        v-model="newNote"
                                        placeholder="أضف ملاحظة (Ctrl+Enter)"
                                        class="min-h-[100px] text-xs resize-none border-zinc-200 focus-visible:ring-zinc-950 rounded-md bg-white"
                                        @keyup.ctrl.enter="saveNote"
                                    />
                                    <div class="flex justify-end">
                                        <Button @click="saveNote" :disabled="!newNote.trim() || isSavingNote" size="sm" class="font-bold text-xs bg-zinc-950 hover:bg-zinc-900 text-white rounded-md shadow-none transition-colors">
                                            <Loader2 v-if="isSavingNote" class="me-2 h-3 w-3 animate-spin" />
                                            إضافة
                                        </Button>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <div v-if="isFetchingNotes" class="py-8 flex justify-center"><Loader2 class="h-5 w-5 animate-spin text-zinc-400" /></div>
                                    <div v-else-if="notes.length === 0" class="py-8 text-center text-xs text-zinc-400 font-bold">لا توجد ملاحظات.</div>
                                    <Card v-for="note in notes" :key="note.id" class="p-4 shadow-none border border-zinc-200 rounded-md relative group bg-white">
                                        <button @click="deleteNote(note.id)" class="absolute top-4 end-4 text-zinc-400 hover:text-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Trash2 class="h-3.5 w-3.5" />
                                        </button>
                                        <p class="text-xs text-zinc-800 whitespace-pre-wrap pe-8 leading-relaxed">{{ note.content }}</p>
                                        <span class="text-[10px] text-zinc-400 mt-3 block font-bold">{{ new Date(note.created_at).toLocaleDateString('ar-SA') }}</span>
                                    </Card>
                                </div>
                            </div>

                            <!-- Challenges Tab -->
                            <div v-if="activeTab === 'challenges'" class="animate-in fade-in">
                                <div v-if="course.challenges?.length === 0" class="py-8 text-center text-xs text-zinc-400 font-bold">لا توجد تحديات.</div>
                                <div v-else class="grid sm:grid-cols-2 gap-4">
                                    <Card v-for="challenge in course.challenges" :key="challenge.id" class="p-4 shadow-none border border-zinc-200 rounded-md flex flex-col bg-white">
                                        <div class="flex items-start justify-between mb-2">
                                            <h4 class="font-bold text-sm text-zinc-950">{{ challenge.title }}</h4>
                                            <Badge variant="secondary" class="text-[10px] font-bold bg-zinc-100 border border-zinc-200 text-zinc-800 rounded shadow-none">
                                                {{ challenge.points }} نقطة
                                            </Badge>
                                        </div>
                                        <p class="text-xs text-zinc-500 mb-6 flex-1 leading-relaxed">{{ challenge.description }}</p>
                                        <Button @click="participateInChallenge(challenge.id)" :disabled="!challenge.is_active || challengeForm.processing" variant="outline" size="sm" class="w-full text-xs font-bold border-zinc-200 hover:bg-zinc-50 rounded-md shadow-none transition-colors">
                                            المشاركة
                                        </Button>
                                    </Card>
                                </div>
                            </div>

                            <!-- Quizzes Tab -->
                            <div v-if="activeTab === 'quizzes'" class="animate-in fade-in">
                                <div v-if="course.quizzes?.length === 0" class="py-8 text-center text-xs text-zinc-400 font-bold">لا توجد اختبارات.</div>
                                <div v-else class="grid sm:grid-cols-2 gap-4">
                                    <Card v-for="quiz in course.quizzes" :key="quiz.id" class="p-4 shadow-none border border-zinc-200 rounded-md flex flex-col bg-white">
                                        <h4 class="font-bold text-sm text-zinc-950 mb-1.5">{{ quiz.title }}</h4>
                                        <p class="text-xs text-zinc-500 mb-6 flex-1 leading-relaxed">{{ quiz.description }}</p>
                                        <div class="flex items-center gap-2 mb-4 text-[10px] text-zinc-400 font-bold">
                                            <span>{{ quiz.questions_count || 0 }} أسئلة</span>
                                            <Separator orientation="vertical" class="h-3" />
                                            <span>نجاح: {{ quiz.passing_score }}%</span>
                                        </div>
                                        <Link :href="route('quizzes.show', {course: course.slug, quiz: quiz.id})">
                                            <Button variant="outline" size="sm" class="w-full text-xs font-bold border-zinc-200 hover:bg-zinc-50 rounded-md shadow-none transition-colors">بدء الاختبار</Button>
                                        </Link>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar Area -->
                <div class="w-full lg:w-[320px] shrink-0 space-y-4 order-1 lg:order-2">
                    <Card class="shadow-none border border-zinc-200 flex flex-col h-auto lg:max-h-[calc(100vh-8rem)] lg:sticky lg:top-24 bg-white rounded-md overflow-hidden">
                        <div class="p-4 border-b border-zinc-200 bg-zinc-50/50">
                            <h3 class="font-bold text-xs mb-3 text-zinc-950">محتوى الكورس</h3>
                            <div class="flex items-center justify-between text-[11px] text-zinc-500 font-bold">
                                <span>المكتمل: {{ completedLessonsIds.length }}/{{ course.lessons?.length || 0 }}</span>
                                <span>{{ Math.round((completedLessonsIds.length / (course.lessons?.length || 1)) * 100) }}%</span>
                            </div>
                            <div class="w-full h-2 bg-zinc-100 border border-zinc-200 rounded-md mt-2 overflow-hidden">
                                <div class="h-full bg-zinc-950 transition-all duration-500" :style="{ width: `${(completedLessonsIds.length / (course.lessons?.length || 1)) * 100}%` }"></div>
                            </div>
                        </div>
                        <div class="flex-1 overflow-y-auto divide-y divide-zinc-100 text-xs">
                            <Link 
                                v-for="(lesson, index) in course.lessons" 
                                :key="lesson.id"
                                :href="route('courses.show', { slug: course.slug, lesson: lesson.id })"
                                :class="[
                                    'p-3 flex items-start gap-3 transition-colors hover:bg-zinc-50/80',
                                    currentLesson?.id === lesson.id ? 'bg-zinc-50 border-s-2 border-zinc-950 font-bold' : 'border-s-2 border-transparent'
                                ]"
                            >
                                <div class="flex-1 min-w-0">
                                    <span :class="['text-xs line-clamp-2', currentLesson?.id === lesson.id ? 'text-zinc-950 font-bold' : 'text-zinc-500']">
                                        {{ index + 1 }}. {{ lesson.title }}
                                    </span>
                                </div>
                                <Check v-if="completedLessonsIds?.includes(lesson.id)" class="h-3.5 w-3.5 text-zinc-950 shrink-0 mt-0.5" />
                                <div v-else-if="currentLesson?.id === lesson.id" class="h-1.5 w-1.5 bg-zinc-950 rounded-full shrink-0 mt-1.5 animate-pulse"></div>
                            </Link>
                        </div>
                    </Card>

                    <!-- Minimal AI & Study Cards -->
                    <Card class="shadow-none border border-zinc-200 p-4 bg-white rounded-md">
                        <div class="flex items-center gap-3 mb-2">
                            <div class="h-8 w-8 rounded-md bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                                <BrainCircuit class="h-4 w-4 text-zinc-950" />
                            </div>
                            <div>
                                <h4 class="font-bold text-xs text-zinc-950">المساعد الذكي</h4>
                                <p class="text-[10px] text-zinc-400">اطرح أسئلة حول الدرس</p>
                            </div>
                        </div>
                        <Link :href="route('ai.index', { lesson_id: currentLesson?.id })">
                            <Button variant="secondary" size="sm" class="w-full mt-3 text-[11px] font-bold bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 text-zinc-900 rounded-md shadow-none transition-colors">اسأل الذكاء الاصطناعي</Button>
                        </Link>
                    </Card>

                    <Card class="shadow-none border border-zinc-200 p-4 bg-white rounded-md">
                        <div class="flex items-center justify-between mb-2">
                            <div class="flex items-center gap-3">
                                <div class="h-8 w-8 rounded-md bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                                    <Award class="h-4 w-4 text-zinc-950" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-xs text-zinc-950">غرف المذاكرة</h4>
                                    <p class="text-[10px] text-zinc-400">للمذاكرة الجماعية</p>
                                </div>
                            </div>
                            <!-- Pulse Dot in Monochrome -->
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-950 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-zinc-950"></span>
                            </span>
                        </div>
                        <Link :href="route('study-room.show', course.slug)">
                            <Button variant="outline" size="sm" class="w-full mt-3 text-[11px] font-bold border-zinc-200 hover:bg-zinc-50 text-zinc-900 rounded-md shadow-none transition-colors">الانضمام للغرفة</Button>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>

        <!-- ================= INTERVIEW MODAL ================= -->
        <div v-if="showInterviewModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-zinc-900/30 backdrop-blur-sm" @click="showInterviewModal = false"></div>
            
            <Card class="w-full max-w-2xl h-[550px] flex flex-col relative shadow-xl border border-zinc-200 bg-white rounded-md overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                <div class="flex items-center justify-between p-4 border-b border-zinc-200">
                    <div class="flex items-center gap-3">
                        <Briefcase class="h-4 w-4 text-zinc-950" />
                        <h3 class="font-bold text-sm text-zinc-950">تدريب المقابلة الشخصية</h3>
                    </div>
                    <Button variant="ghost" size="icon" @click="showInterviewModal = false" class="h-8 w-8 hover:bg-zinc-50 rounded-md">
                        <X class="h-4 w-4 text-zinc-400 hover:text-zinc-950" />
                    </Button>
                </div>
                
                <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50/20">
                    <div v-for="(msg, idx) in interviewHistory" :key="idx" :class="['flex', msg.role === 'user' ? 'justify-start' : 'justify-end']">
                        <div :class="[
                            'max-w-[85%] rounded-md p-3 text-xs leading-relaxed border shadow-none', 
                            msg.role === 'user' ? 'bg-zinc-950 text-white border-zinc-950 rounded-tr-none' : 'bg-zinc-50 text-zinc-900 border-zinc-200 rounded-tl-none'
                        ]">
                            <p class="whitespace-pre-wrap">{{ msg.content }}</p>
                        </div>
                    </div>
                    <div v-if="isInterviewing" class="flex justify-end">
                        <div class="bg-zinc-50 border border-zinc-200 rounded-md p-3 text-xs flex items-center gap-2 text-zinc-400 font-bold">
                            <Loader2 class="h-3.5 w-3.5 animate-spin" />
                            يكتب...
                        </div>
                    </div>
                </div>
                
                <div class="p-3 border-t border-zinc-200 bg-white">
                    <form @submit.prevent="sendInterviewAnswer" class="flex items-center gap-2 bg-zinc-50 p-1.5 pl-2 rounded-md border border-zinc-200 focus-within:border-zinc-950 transition-all">
                        <textarea 
                            v-model="interviewInput" 
                            placeholder="أرسل إجابتك هنا..." 
                            class="flex-1 bg-transparent border-none focus:ring-0 text-xs text-zinc-800 placeholder-zinc-400 py-1 resize-none h-7 overflow-y-auto"
                            :disabled="isInterviewing"
                            @keydown.enter.exact.prevent="sendInterviewAnswer"
                        />
                        <Button type="submit" :disabled="!interviewInput.trim() || isInterviewing" size="icon" class="h-8 w-8 shrink-0 bg-zinc-950 hover:bg-zinc-900 text-white rounded-md shadow-none">
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
