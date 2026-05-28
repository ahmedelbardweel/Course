<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { 
    Trophy, 
    Calendar, 
    SearchX, 
    CheckCircle2, 
    Hourglass, 
    Award,
    Sparkles,
    UserPlus,
    Check,
    AlertCircle,
    ArrowLeft
} from 'lucide-vue-next';
import { ref, watch } from 'vue';

const props = defineProps({
    challenges: Array,
    enrolledCourses: Array,
    filters: Object,
});

const currentStatus = ref(props.filters?.status || 'all');
const currentCourse = ref(props.filters?.course_id || '');
const activeOnly = ref(props.filters?.active_only === 'true' || props.filters?.active_only === true);

const applyFilters = () => {
    router.get(route('student.challenges.index'), {
        status: currentStatus.value,
        course_id: currentCourse.value,
        active_only: activeOnly.value ? 'true' : ''
    }, {
        preserveState: true,
        preserveScroll: true,
        replace: true
    });
};

const selectStatus = (status) => {
    currentStatus.value = status;
    applyFilters();
};

const toggleActiveOnly = () => {
    activeOnly.value = !activeOnly.value;
    applyFilters();
};

const clearFilters = () => {
    currentStatus.value = 'all';
    currentCourse.value = '';
    activeOnly.value = false;
    applyFilters();
};

watch(currentCourse, () => {
    applyFilters();
});

const joinChallenge = (challengeId) => {
    router.post(route('challenges.participate', challengeId), {}, {
        preserveScroll: true,
        onSuccess: () => {
            // Handle success if needed (handled automatically by Inertia flash messages)
        }
    });
};

const getStatusBadge = (status) => {
    switch (status) {
        case 'completed':
            return { label: 'مكتمل بنجاح', class: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' };
        case 'joined':
            return { label: 'قيد التنفيذ (مشترك)', class: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20' };
        case 'expired':
            return { label: 'انتهى الوقت (مشترك)', class: 'bg-amber-500/10 text-amber-500 border-amber-500/20' };
        case 'missed':
            return { label: 'فاتني التحدي', class: 'bg-rose-500/10 text-rose-500 border-rose-500/20' };
        case 'not_joined':
            return { label: 'متاح للاشتراك', class: 'bg-blue-500/10 text-blue-500 border-blue-500/20' };
        default:
            return { label: 'غير معروف', class: 'bg-gray-500/10 text-gray-500 border-gray-500/20' };
    }
};

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};
</script>

<template>
    <Head title="تحدياتي" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'الرئيسية', url: route('dashboard') },
        { label: 'التحديات البرمجية' }
    ]">
        <template #header-actions>
            <Badge variant="outline" class="h-5 text-[9px] font-normal uppercase tracking-widest border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]">
                {{ challenges.length }} تحدي متاح
            </Badge>
        </template>

        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]" dir="rtl">
            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full space-y-6 max-w-full mx-auto">
                    
                    <!-- Top Banner / Title -->
                    <div class="bg-[var(--foreground)] text-white p-6 relative overflow-hidden rounded-md border border-[var(--border)]">
                        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 class="text-xl font-normal tracking-tight flex items-center gap-2">
                                    التحديات والمسابقات البرمجية 🏆
                                </h1>
                                <p class="mt-2 text-white/60 text-xs max-w-xl leading-relaxed">
                                    اشترك في التحديات الأسبوعية، اختبر مهاراتك البرمجية، واجمع النقاط لرفع تصنيفك بين زملائك في الكورس!
                                </p>
                            </div>
                            <!-- Point Summary Badge -->
                            <div class="bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/15 flex items-center gap-3">
                                <Sparkles class="h-5 w-5 text-amber-400" />
                                <div>
                                    <div class="text-[9px] text-white/50 leading-none">إجمالي النقاط المكتسبة</div>
                                    <div class="text-lg font-semibold mt-0.5">{{ challenges.filter(c => c.is_completed).reduce((sum, c) => sum + c.points, 0) }} نقطة</div>
                                </div>
                            </div>
                        </div>
                        <Trophy class="absolute bottom-[-20%] left-[-5%] h-40 w-40 opacity-5 -rotate-12" />
                    </div>

                    <!-- Filter Control Panel -->
                    <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md">
                        <CardContent class="p-4 space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <!-- Course Filter -->
                                <div class="space-y-1.5">
                                    <label class="text-[10px] font-medium text-[var(--muted-foreground)]">تصفية حسب الكورس</label>
                                    <select 
                                        v-model="currentCourse"
                                        class="w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                                    >
                                        <option value="">جميع الكورسات المشترك بها</option>
                                        <option v-for="course in enrolledCourses" :key="course.id" :value="course.id">
                                            {{ course.title }}
                                        </option>
                                    </select>
                                </div>

                                <!-- Toggle Active Only -->
                                <div class="flex items-center gap-2.5 pt-6 md:pt-8">
                                    <button 
                                        type="button" 
                                        @click="toggleActiveOnly"
                                        :class="['relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none', activeOnly ? 'bg-[var(--primary)]' : 'bg-gray-200 dark:bg-gray-750']"
                                    >
                                        <span :class="['pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out', activeOnly ? '-translate-x-4' : 'translate-x-0']"></span>
                                    </button>
                                    <span class="text-[11px] font-medium text-[var(--foreground)]">عرض التحديات النشطة والمتاحة حالياً فقط</span>
                                </div>
                            </div>

                            <!-- Buttons and Tabs Row -->
                            <div class="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center pt-2 border-t border-[var(--border)]">
                                <!-- Status Tabs -->
                                <div class="flex flex-wrap gap-1">
                                    <button 
                                        @click="selectStatus('all')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'all' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        الكل
                                    </button>
                                    <button 
                                        @click="selectStatus('not_joined')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'not_joined' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        متاحة للاشتراك
                                    </button>
                                    <button 
                                        @click="selectStatus('joined')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'joined' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        مشترك بها (قيد العمل)
                                    </button>
                                    <button 
                                        @click="selectStatus('completed')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'completed' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        مكتملة
                                    </button>
                                    <button 
                                        @click="selectStatus('expired')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'expired' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        منتهية (مشتركة)
                                    </button>
                                    <button 
                                        @click="selectStatus('missed')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'missed' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        فاتتني
                                    </button>
                                </div>

                                <!-- Clear Filters Button -->
                                <Button 
                                    v-if="currentCourse || activeOnly || currentStatus !== 'all'"
                                    @click="clearFilters"
                                    variant="ghost" 
                                    size="sm"
                                    class="h-7 text-[10px] font-normal text-rose-500 hover:text-rose-600 hover:bg-rose-500/5 rounded-md px-2"
                                >
                                    إعادة تعيين الفلاتر
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Empty State -->
                    <div v-if="challenges.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none">
                        <SearchX class="h-10 w-10 text-[var(--accent)] mb-3" />
                        <h3 class="text-[12px] font-normal text-[var(--foreground)]">لا توجد تحديات تطابق الفلاتر المحددة</h3>
                        <p class="text-[10px] text-[var(--muted-foreground)] mb-4 text-center max-w-xs leading-relaxed">
                            جرّب تغيير خيارات التصفية أو الفلترة لعرض نتائج أخرى.
                        </p>
                    </div>

                    <!-- Challenges Grid -->
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card v-for="challenge in challenges" :key="challenge.id" class="border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)] flex flex-col hover:border-[var(--primary)]/30 transition-all duration-300">
                            <!-- Header -->
                            <CardHeader class="p-4 pb-2 space-y-1">
                                <div class="flex justify-between items-start gap-2">
                                    <Badge variant="outline" class="h-5 text-[8px] font-normal border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]">
                                        {{ challenge.course.title }}
                                    </Badge>
                                    
                                    <Badge :class="['h-5 text-[8px] font-normal border shadow-none px-2', getStatusBadge(challenge.status).class]">
                                        {{ getStatusBadge(challenge.status).label }}
                                    </Badge>
                                </div>
                                <CardTitle class="text-[13px] font-medium text-[var(--foreground)] line-clamp-1 leading-normal pt-1.5">
                                    {{ challenge.title }}
                                </CardTitle>
                            </CardHeader>

                            <!-- Content -->
                            <CardContent class="p-4 pt-0 flex-1 flex flex-col justify-between space-y-4">
                                <p class="text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed">
                                    {{ challenge.description || 'لا يوجد وصف متاح لهذا التحدي.' }}
                                </p>

                                <div class="grid grid-cols-2 gap-2.5 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted-foreground)]">
                                    <!-- Points -->
                                    <div class="flex items-center gap-1.5">
                                        <Award class="h-3.5 w-3.5 opacity-60 text-brand-orange" />
                                        <span class="font-semibold text-brand-orange">+{{ challenge.points }} نقطة</span>
                                    </div>
                                    <!-- Date Limit -->
                                    <div class="flex items-center gap-1.5 col-span-1">
                                        <Calendar class="h-3.5 w-3.5 opacity-60 text-brand-orange" />
                                        <span>ينتهي: {{ formatDate(challenge.end_date) }}</span>
                                    </div>
                                </div>

                                <!-- Action Buttons -->
                                <div class="pt-2">
                                    <!-- Join/Participate Button -->
                                    <Button 
                                        v-if="challenge.status === 'not_joined'"
                                        @click="joinChallenge(challenge.id)"
                                        class="w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md flex items-center justify-center gap-1.5"
                                    >
                                        <UserPlus class="h-3.5 w-3.5" />
                                        الاشتراك بالتحدي
                                    </Button>

                                    <!-- Completed -->
                                    <div 
                                        v-else-if="challenge.status === 'completed'"
                                        class="w-full h-8 text-[11px] font-normal bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-md flex items-center justify-center gap-1.5 cursor-default font-semibold"
                                    >
                                        <Check class="h-4 w-4" />
                                        تحدي مكتمل بنجاح
                                    </div>

                                    <!-- Active/Joined - Instruction/Link to Course Study Room/Lessons -->
                                    <div v-else-if="challenge.status === 'joined'" class="space-y-2">
                                        <div 
                                            class="w-full h-8 text-[11px] font-normal bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 rounded-md flex items-center justify-center gap-1.5 cursor-default font-semibold"
                                        >
                                            <Hourglass class="h-3.5 w-3.5" />
                                            جاري العمل على التحدي
                                        </div>
                                        <Link :href="route('courses.show', challenge.course.slug)" class="block w-full">
                                            <Button variant="outline" size="sm" class="w-full h-7 text-[10px] font-normal border-[var(--border)] rounded-md shadow-none flex items-center justify-center gap-1">
                                                الانتقال للكورس لمعرفة الشروط <ArrowLeft class="h-3 w-3" />
                                            </Button>
                                        </Link>
                                    </div>

                                    <!-- Expired / Missed -->
                                    <Button 
                                        v-else
                                        disabled
                                        class="w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed flex items-center justify-center gap-1.5"
                                    >
                                        <AlertCircle class="h-3.5 w-3.5" />
                                        <span v-if="challenge.status === 'expired'">منتهي الصلاحية</span>
                                        <span v-else-if="challenge.status === 'missed'">فائت / غير مشترك</span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
