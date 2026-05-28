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

    <AuthenticatedLayout :breadcrumbs="[{ label: 'الرئيسية' }]">
        <div class="space-y-6">
            <!-- Welcome Card -->
            <div class="bg-[var(--foreground)] text-white p-6 relative overflow-hidden rounded-md border border-[var(--border)]">
                <div class="relative z-10">
                    <h1 class="text-xl font-normal tracking-tight">أهلاً بك، {{ $page.props.auth.user.name }} 👋</h1>
                    <p class="mt-2 text-white/60 text-xs max-w-xl leading-relaxed">
                        {{ learningGoal ? `هدفك: ${learningGoal}. نحن هنا لمساعدتك!` : 'ابدأ رحلتك التعليمية واستكشف آفاقاً جديدة.' }}
                    </p>
                    <div class="mt-5 flex flex-wrap gap-2">
                        <Button size="sm" class="bg-white text-[var(--foreground)] font-normal gap-1.5 text-xs h-8 rounded-md border-none">
                            استكمال التعلم
                            <PlayCircle class="h-3.5 w-3.5" />
                        </Button>
                        <Button @click="showRoadmapModal = true" size="sm" class="bg-white/10 text-white border border-white/20 font-normal gap-1.5 text-xs h-8 rounded-md">
                            <Map class="h-3.5 w-3.5" />
                            خارطة طريق ذكية
                        </Button>
                    </div>
                </div>
                <TrendingUp class="absolute bottom-[-20%] right-[-5%] h-40 w-40 opacity-5 rotate-12" />
            </div>

            <!-- Stats Grid -->
            <div class="grid gap-3 grid-cols-2 lg:grid-cols-4">
                <Card class="border border-[var(--border)] shadow-none rounded-md bg-[var(--card)]">
                    <CardHeader class="flex flex-row items-center justify-between p-3 pb-1">
                        <CardTitle class="text-[10px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]">الكورسات</CardTitle>
                        <BookOpen class="h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                    </CardHeader>
                    <CardContent class="p-3 pt-0">
                        <div class="text-2xl font-normal text-[var(--foreground)]">{{ stats?.enrolled_courses ?? 0 }}</div>
                        <p class="text-[9px] text-[var(--muted-foreground)] mt-0.5">كورس مشترك</p>
                    </CardContent>
                </Card>
                <Card class="border border-[var(--border)] shadow-none rounded-md bg-[var(--card)]">
                    <CardHeader class="flex flex-row items-center justify-between p-3 pb-1">
                        <CardTitle class="text-[10px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]">الدروس</CardTitle>
                        <CheckCircle2 class="h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                    </CardHeader>
                    <CardContent class="p-3 pt-0">
                        <div class="text-2xl font-normal text-[var(--foreground)]">{{ stats?.completed_lessons ?? 0 }}</div>
                        <p class="text-[9px] text-[var(--muted-foreground)] mt-0.5">درس مكتمل</p>
                    </CardContent>
                </Card>
                <Card class="border border-[var(--border)] shadow-none rounded-md bg-[var(--card)]">
                    <CardHeader class="flex flex-row items-center justify-between p-3 pb-1">
                        <CardTitle class="text-[10px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]">ساعات التعلم</CardTitle>
                        <TrendingUp class="h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                    </CardHeader>
                    <CardContent class="p-3 pt-0">
                        <div class="text-2xl font-normal text-[var(--foreground)]">{{ stats?.learning_hours ?? '0.0' }}</div>
                        <p class="text-[9px] text-[var(--muted-foreground)] mt-0.5">هذا الأسبوع</p>
                    </CardContent>
                </Card>
                <Card class="border border-[var(--border)] shadow-none rounded-md bg-[var(--muted)]">
                    <CardHeader class="flex flex-row items-center justify-between p-3 pb-1">
                        <CardTitle class="text-[10px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]">النقاط</CardTitle>
                        <Trophy class="h-3.5 w-3.5 text-[var(--primary)]" />
                    </CardHeader>
                    <CardContent class="p-3 pt-0">
                        <div class="text-2xl font-normal text-[var(--foreground)]">{{ stats?.points ?? 150 }}</div>
                        <p class="text-[9px] text-[var(--muted-foreground)] mt-0.5">مستوى: مبتدئ</p>
                    </CardContent>
                </Card>
            </div>

            <!-- AI Roadmap Display -->
            <div v-if="roadmapResult" class="bg-[var(--card)] border border-[var(--border)] rounded-md p-5 relative overflow-hidden shadow-none">
                <div class="absolute top-0 left-0 w-full h-[2px] bg-[var(--primary)]"></div>
                <div class="flex items-center gap-3 mb-6">
                    <div class="h-9 w-9 bg-[var(--muted)] text-[var(--foreground)] rounded-md flex items-center justify-center border border-[var(--border)]">
                        <Map class="h-5 w-5" />
                    </div>
                    <div>
                        <h2 class="text-base font-normal text-[var(--foreground)]">خارطة طريقك المخصصة</h2>
                        <p class="text-[var(--muted-foreground)] text-xs mt-0.5">بناءً على هدفك ومستواك</p>
                    </div>
                </div>

                <div class="relative border-r-2 border-[var(--border)] pr-5 space-y-5">
                    <div v-for="(phase, index) in roadmapResult" :key="index" class="relative">
                        <div class="absolute -right-[29px] top-1 w-4 h-4 bg-[var(--card)] border-4 border-[var(--primary)] rounded-full"></div>
                        <div class="bg-[var(--muted)] rounded-md p-4 border border-[var(--border)]">
                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--accent)] text-[var(--foreground)] text-[10px] font-normal mb-3">
                                <Calendar class="h-3 w-3" />
                                {{ phase.week }}
                            </span>
                            <h3 class="text-sm font-normal mb-1.5 text-[var(--foreground)]">{{ phase.title }}</h3>
                            <p class="text-[var(--muted-foreground)] text-xs leading-relaxed mb-3">{{ phase.description }}</p>
                            <div v-if="phase.recommended_courses?.length" class="flex flex-wrap gap-1.5">
                                <span v-for="(course, cIdx) in phase.recommended_courses" :key="cIdx" class="px-2 py-1 bg-[var(--card)] border border-[var(--border)] rounded text-[10px] font-normal">
                                    {{ course }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recommendations -->
            <div class="space-y-3">
                <div class="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <div>
                        <h2 class="text-sm font-normal tracking-tight text-[var(--foreground)]">مقترح لك</h2>
                        <p class="text-[10px] text-[var(--muted-foreground)] mt-0.5">كورسات تناسب هدفك التعليمي</p>
                    </div>
                    <Link :href="route('courses.index')" class="text-[10px] font-normal flex items-center gap-0.5 text-[var(--muted-foreground)]">
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
        <div v-if="showRoadmapModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--foreground)]/60 backdrop-blur-sm">
            <div class="bg-[var(--card)] border border-[var(--border)] rounded-md w-full max-w-sm overflow-hidden shadow-none">
                <div class="p-4 border-b border-[var(--border)] flex justify-between items-center">
                    <h2 class="text-sm font-normal text-[var(--foreground)]">تفاصيل خارطة الطريق</h2>
                    <button @click="showRoadmapModal = false" class="text-[var(--muted-foreground)] text-xs font-normal">إلغاء</button>
                </div>
                
                <div class="p-4 space-y-4">
                    <div class="space-y-1.5">
                        <label class="text-xs font-normal flex items-center gap-1.5 text-[var(--foreground)]">
                            <Target class="h-3.5 w-3.5 text-[var(--primary)]" />
                            ما هو هدفك التعليمي؟
                        </label>
                        <input v-model="roadmapForm.goal" type="text" placeholder="مثال: أريد أن أصبح مطور ويب" class="w-full bg-[var(--muted)] border border-[var(--border)] rounded-md p-2.5 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none text-[var(--foreground)]">
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-xs font-normal text-[var(--foreground)]">مستواك الحالي</label>
                        <div class="grid grid-cols-3 gap-1.5">
                            <button @click="roadmapForm.level = 'beginner'" :class="['p-1.5 rounded-md text-[10px] font-normal border', roadmapForm.level === 'beginner' ? 'border-[var(--primary)] bg-[var(--primary)] text-white' : 'border-[var(--border)] text-[var(--muted-foreground)]']">مبتدئ</button>
                            <button @click="roadmapForm.level = 'intermediate'" :class="['p-1.5 rounded-md text-[10px] font-normal border', roadmapForm.level === 'intermediate' ? 'border-[var(--primary)] bg-[var(--primary)] text-white' : 'border-[var(--border)] text-[var(--muted-foreground)]']">متوسط</button>
                            <button @click="roadmapForm.level = 'advanced'" :class="['p-1.5 rounded-md text-[10px] font-normal border', roadmapForm.level === 'advanced' ? 'border-[var(--primary)] bg-[var(--primary)] text-white' : 'border-[var(--border)] text-[var(--muted-foreground)]']">متقدم</button>
                        </div>
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-xs font-normal flex items-center gap-1.5 text-[var(--foreground)]">
                            <Calendar class="h-3.5 w-3.5 text-[var(--primary)]" />
                            الوقت المتاح
                        </label>
                        <input v-model="roadmapForm.time" type="text" placeholder="مثال: ساعتين يومياً" class="w-full bg-[var(--muted)] border border-[var(--border)] rounded-md p-2.5 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none text-[var(--foreground)]">
                    </div>
                </div>

                <div class="p-4 border-t border-[var(--border)] bg-[var(--muted)]">
                    <Button @click="generateRoadmap" :disabled="isGeneratingRoadmap || !roadmapForm.goal" class="w-full bg-[var(--primary)] text-white h-9 text-xs rounded-md font-normal border-none">
                        <Loader2 v-if="isGeneratingRoadmap" class="h-3.5 w-3.5 animate-spin ml-1.5" />
                        <Map v-else class="h-3.5 w-3.5 ml-1.5" />
                        {{ isGeneratingRoadmap ? 'جاري رسم الخطة...' : 'ارسم الخطة الآن' }}
                    </Button>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
