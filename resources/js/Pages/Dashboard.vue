<script setup>
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Card, CardHeader, CardTitle, CardContent } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { 
    PlayCircle, 
    CheckCircle2, 
    Trophy, 
    TrendingUp,
    ArrowRight,
    Map,
    Loader2,
    Calendar,
    Star,
    Target,
    BookOpen
} from 'lucide-vue-next';
import CourseCard from '@/Components/CourseCard.vue';
import axios from 'axios';

const props = defineProps({
    courses: Array,
    stats: Object,
    learningGoal: String,
});

const showRoadmapModal = ref(false);
const isGeneratingRoadmap = ref(false);
const roadmapResult = ref(null);
const roadmapForm = ref({
    goal: props.learningGoal || '',
    level: 'beginner',
    time: 'ساعتين يومياً'
});

const generateRoadmap = async () => {
    isGeneratingRoadmap.value = true;
    try {
        const response = await axios.post(route('ai.roadmap'), roadmapForm.value);
        roadmapResult.value = response.data.roadmap;
        showRoadmapModal.value = false;
    } catch (error) {
        alert(error.response?.data?.error || 'حدث خطأ أثناء الإنشاء');
    } finally {
        isGeneratingRoadmap.value = false;
    }
};
</script>

<template>
    <Head title="لوحة التحكم" />

    <AuthenticatedLayout>
        <template #header>
            لوحة التحكم
        </template>

        <div class="space-y-4">
            <!-- Welcome Card -->
            <div class="bg-zinc-950 text-white dark:bg-white dark:text-black p-5 relative overflow-hidden rounded-xl border border-zinc-800 dark:border-zinc-200">
                <div class="relative z-10">
                    <h1 class="text-xl font-black tracking-tight">أهلاً بك، {{ $page.props.auth.user.name }} 👋</h1>
                    <p class="mt-1.5 text-zinc-400 dark:text-zinc-600 text-xs max-w-xl">
                        {{ learningGoal ? `هدفك: ${learningGoal}. نحن هنا لمساعدتك!` : 'ابدأ رحلتك التعليمية واستكشف آفاقاً جديدة.' }}
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <Button size="sm" class="bg-white text-black hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800 font-bold gap-1.5 text-xs h-8">
                            استكمال التعلم
                            <PlayCircle class="h-3.5 w-3.5" />
                        </Button>
                        <Button @click="showRoadmapModal = true" size="sm" class="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700 dark:border-zinc-700 font-bold gap-1.5 text-xs h-8">
                            <Map class="h-3.5 w-3.5" />
                            خارطة طريق ذكية
                        </Button>
                    </div>
                </div>
                <TrendingUp class="absolute bottom-[-20%] right-[-5%] h-40 w-40 opacity-10 rotate-12" />
            </div>

            <!-- Stats Grid -->
            <div class="grid gap-3 grid-cols-2 lg:grid-cols-4">
                <Card class="border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg">
                    <CardHeader class="flex flex-row items-center justify-between p-3 pb-1">
                        <CardTitle class="text-[10px] font-black uppercase tracking-widest text-zinc-500">الكورسات</CardTitle>
                        <BookOpen class="h-3.5 w-3.5 text-zinc-400" />
                    </CardHeader>
                    <CardContent class="p-3 pt-0">
                        <div class="text-2xl font-bold">{{ stats?.enrolled_courses ?? 0 }}</div>
                        <p class="text-[9px] text-zinc-400 mt-0.5">كورس مشترك</p>
                    </CardContent>
                </Card>
                <Card class="border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg">
                    <CardHeader class="flex flex-row items-center justify-between p-3 pb-1">
                        <CardTitle class="text-[10px] font-black uppercase tracking-widest text-zinc-500">الدروس</CardTitle>
                        <CheckCircle2 class="h-3.5 w-3.5 text-zinc-400" />
                    </CardHeader>
                    <CardContent class="p-3 pt-0">
                        <div class="text-2xl font-bold">{{ stats?.completed_lessons ?? 0 }}</div>
                        <p class="text-[9px] text-zinc-400 mt-0.5">درس مكتمل</p>
                    </CardContent>
                </Card>
                <Card class="border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg">
                    <CardHeader class="flex flex-row items-center justify-between p-3 pb-1">
                        <CardTitle class="text-[10px] font-black uppercase tracking-widest text-zinc-500">ساعات التعلم</CardTitle>
                        <TrendingUp class="h-3.5 w-3.5 text-zinc-400" />
                    </CardHeader>
                    <CardContent class="p-3 pt-0">
                        <div class="text-2xl font-bold">{{ stats?.learning_hours ?? '0.0' }}</div>
                        <p class="text-[9px] text-zinc-400 mt-0.5">هذا الأسبوع</p>
                    </CardContent>
                </Card>
                <Card class="border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg bg-zinc-50 dark:bg-zinc-900">
                    <CardHeader class="flex flex-row items-center justify-between p-3 pb-1">
                        <CardTitle class="text-[10px] font-black uppercase tracking-widest text-zinc-500">النقاط</CardTitle>
                        <Trophy class="h-3.5 w-3.5 text-yellow-500" />
                    </CardHeader>
                    <CardContent class="p-3 pt-0">
                        <div class="text-2xl font-bold">{{ stats?.points ?? 150 }}</div>
                        <p class="text-[9px] text-zinc-400 mt-0.5">مستوى: مبتدئ</p>
                    </CardContent>
                </Card>
            </div>

            <!-- AI Roadmap Display -->
            <div v-if="roadmapResult" class="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 relative overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div class="absolute top-0 left-0 w-full h-[3px] bg-zinc-900 dark:bg-zinc-100"></div>
                <div class="flex items-center gap-3 mb-6">
                    <div class="h-9 w-9 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 rounded-lg flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                        <Map class="h-5 w-5" />
                    </div>
                    <div>
                        <h2 class="text-base font-black text-zinc-900 dark:text-white">خارطة طريقك المخصصة</h2>
                        <p class="text-zinc-500 text-xs font-medium mt-0.5">بناءً على هدفك ومستواك</p>
                    </div>
                </div>

                <div class="relative border-r-2 border-zinc-200 dark:border-zinc-800 pr-5 space-y-5">
                    <div v-for="(phase, index) in roadmapResult" :key="index" class="relative">
                        <div class="absolute -right-[29px] top-1 w-4 h-4 bg-white dark:bg-zinc-950 border-4 border-zinc-900 dark:border-zinc-100 rounded-full"></div>
                        <div class="bg-zinc-50/50 dark:bg-zinc-900/50 rounded-lg p-4 border border-zinc-100 dark:border-zinc-800">
                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-[10px] font-black mb-3">
                                <Calendar class="h-3 w-3" />
                                {{ phase.week }}
                            </span>
                            <h3 class="text-sm font-bold mb-1.5 text-zinc-900 dark:text-white">{{ phase.title }}</h3>
                            <p class="text-zinc-500 text-xs leading-relaxed mb-3">{{ phase.description }}</p>
                            <div v-if="phase.recommended_courses?.length" class="flex flex-wrap gap-1.5">
                                <span v-for="(course, cIdx) in phase.recommended_courses" :key="cIdx" class="px-2 py-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-[10px] font-bold">
                                    {{ course }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recommendations -->
            <div class="space-y-3">
                <div class="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <div>
                        <h2 class="text-sm font-bold tracking-tight">مقترح لك</h2>
                        <p class="text-[10px] text-zinc-400 mt-0.5">كورسات تناسب هدفك التعليمي</p>
                    </div>
                    <Link :href="route('courses.index')" class="text-[10px] font-bold flex items-center gap-0.5 text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
                        تصفح الكل
                        <ArrowRight class="h-3 w-3" />
                    </Link>
                </div>
                
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <CourseCard 
                        v-for="course in courses" 
                        :key="course.id"
                        :id="course.id"
                        :slug="course.slug"
                        :title="course.title"
                        :description="course.description"
                        :price="course.price + '$'"
                        :category="course.category.name"
                        :thumbnail="course.thumbnail"
                    />
                </div>
            </div>
        </div>

        <!-- Roadmap Input Modal -->
        <div v-if="showRoadmapModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
            <div class="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                <div class="p-4 border-b border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
                    <h2 class="text-sm font-black">تفاصيل خارطة الطريق</h2>
                    <button @click="showRoadmapModal = false" class="text-zinc-400 hover:text-black dark:hover:text-white text-xs font-bold">إلغاء</button>
                </div>
                
                <div class="p-4 space-y-4">
                    <div class="space-y-1.5">
                        <label class="text-xs font-bold flex items-center gap-1.5">
                            <Target class="h-3.5 w-3.5 text-zinc-900 dark:text-zinc-100" />
                            ما هو هدفك التعليمي؟
                        </label>
                        <input v-model="roadmapForm.goal" type="text" placeholder="مثال: أريد أن أصبح مطور ويب" class="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-zinc-950 dark:focus:ring-zinc-100 focus:border-zinc-950 dark:focus:border-zinc-100 outline-none">
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-xs font-bold">مستواك الحالي</label>
                        <div class="grid grid-cols-3 gap-1.5">
                            <button @click="roadmapForm.level = 'beginner'" :class="['p-1.5 rounded-lg text-[10px] font-bold border-2 transition-all', roadmapForm.level === 'beginner' ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950' : 'border-zinc-200 dark:border-zinc-800 text-zinc-500']">مبتدئ</button>
                            <button @click="roadmapForm.level = 'intermediate'" :class="['p-1.5 rounded-lg text-[10px] font-bold border-2 transition-all', roadmapForm.level === 'intermediate' ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950' : 'border-zinc-200 dark:border-zinc-800 text-zinc-500']">متوسط</button>
                            <button @click="roadmapForm.level = 'advanced'" :class="['p-1.5 rounded-lg text-[10px] font-bold border-2 transition-all', roadmapForm.level === 'advanced' ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950' : 'border-zinc-200 dark:border-zinc-800 text-zinc-500']">متقدم</button>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-xs font-bold flex items-center gap-1.5">
                            <Calendar class="h-3.5 w-3.5 text-zinc-900 dark:text-zinc-100" />
                            الوقت المتاح
                        </label>
                        <input v-model="roadmapForm.time" type="text" placeholder="مثال: ساعتين يومياً" class="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-zinc-950 dark:focus:ring-zinc-100 focus:border-zinc-950 dark:focus:border-zinc-100 outline-none">
                    </div>
                </div>

                <div class="p-4 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900">
                    <Button @click="generateRoadmap" :disabled="isGeneratingRoadmap || !roadmapForm.goal" class="w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 h-9 text-xs rounded-lg font-bold">
                        <Loader2 v-if="isGeneratingRoadmap" class="h-3.5 w-3.5 animate-spin ml-1.5" />
                        <Map v-else class="h-3.5 w-3.5 ml-1.5" />
                        {{ isGeneratingRoadmap ? 'جاري رسم الخطة...' : 'ارسم الخطة الآن' }}
                    </Button>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
