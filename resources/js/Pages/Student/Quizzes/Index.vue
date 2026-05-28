<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { 
    ClipboardList, 
    Clock, 
    Award, 
    AlertCircle, 
    Calendar, 
    SearchX, 
    CheckCircle2, 
    XCircle, 
    Hourglass, 
    Search,
    BookOpen,
    ArrowLeft
} from 'lucide-vue-next';
import { ref, watch } from 'vue';

const props = defineProps({
    quizzes: Array,
    enrolledCourses: Array,
    filters: Object,
});

const currentStatus = ref(props.filters?.status || 'all');
const currentCourse = ref(props.filters?.course_id || '');
const dateFrom = ref(props.filters?.date_from || '');
const dateTo = ref(props.filters?.date_to || '');

const applyFilters = () => {
    router.get(route('student.quizzes.index'), {
        status: currentStatus.value,
        course_id: currentCourse.value,
        date_from: dateFrom.value,
        date_to: dateTo.value
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

const clearFilters = () => {
    currentStatus.value = 'all';
    currentCourse.value = '';
    dateFrom.value = '';
    dateTo.value = '';
    applyFilters();
};

watch([currentCourse, dateFrom, dateTo], () => {
    applyFilters();
});

const getStatusBadge = (status) => {
    switch (status) {
        case 'passed':
            return { label: 'ناجح', class: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' };
        case 'failed':
            return { label: 'راسب', class: 'bg-rose-500/10 text-rose-500 border-rose-500/20' };
        case 'expired':
            return { label: 'منتهي الصلاحية', class: 'bg-amber-500/10 text-amber-500 border-amber-500/20' };
        case 'upcoming':
            return { label: 'قريباً', class: 'bg-blue-500/10 text-blue-500 border-blue-500/20' };
        case 'not_started':
            return { label: 'جاهز للتقديم', class: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20' };
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
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
</script>

<template>
    <Head title="كل الاختبارات" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'الرئيسية', url: route('dashboard') },
        { label: 'كل الاختبارات' }
    ]">
        <template #header-actions>
            <Badge variant="outline" class="h-5 text-[9px] font-normal uppercase tracking-widest border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]">
                {{ quizzes.length }} اختبار متاح
            </Badge>
        </template>

        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]" dir="rtl">
            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full space-y-6 max-w-full mx-auto">
                    
                    <!-- Top Section with Title and Stats -->
                    <div class="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                        <div class="flex items-center gap-2">
                            <div class="h-8 w-8 rounded-md bg-brand-orange text-white flex items-center justify-center">
                                <ClipboardList class="h-4 w-4" />
                            </div>
                            <div>
                                <h1 class="text-base font-normal text-[var(--foreground)] tracking-tight">الاختبارات الأكاديمية</h1>
                                <p class="text-[10px] text-[var(--muted-foreground)] font-normal mt-1">تتبع اختبارات الكورسات، النتائج ومستواك الدراسي</p>
                            </div>
                        </div>
                    </div>

                    <!-- Filter Control Panel -->
                    <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md">
                        <CardContent class="p-4 space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
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

                                <!-- Date From -->
                                <div class="space-y-1.5">
                                    <label class="text-[10px] font-medium text-[var(--muted-foreground)]">تاريخ البدء من</label>
                                    <input 
                                        type="date"
                                        v-model="dateFrom"
                                        class="w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                                    />
                                </div>

                                <!-- Date To -->
                                <div class="space-y-1.5">
                                    <label class="text-[10px] font-medium text-[var(--muted-foreground)]">تاريخ البدء إلى</label>
                                    <input 
                                        type="date"
                                        v-model="dateTo"
                                        class="w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                                    />
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
                                        @click="selectStatus('not_started')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'not_started' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        غير مقدمة (جديد)
                                    </button>
                                    <button 
                                        @click="selectStatus('passed')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'passed' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        ناجح
                                    </button>
                                    <button 
                                        @click="selectStatus('failed')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'failed' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        راسب
                                    </button>
                                    <button 
                                        @click="selectStatus('expired')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'expired' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        فاتتني / منتهية
                                    </button>
                                    <button 
                                        @click="selectStatus('upcoming')"
                                        :class="['h-7 px-3 text-[10px] rounded-md font-medium transition-all', currentStatus === 'upcoming' ? 'bg-[var(--primary)] text-white' : 'hover:bg-[var(--muted)] text-[var(--muted-foreground)]']"
                                    >
                                        قريباً
                                    </button>
                                </div>

                                <!-- Clear Filters Button -->
                                <Button 
                                    v-if="currentCourse || dateFrom || dateTo || currentStatus !== 'all'"
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
                    <div v-if="quizzes.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none">
                        <SearchX class="h-10 w-10 text-[var(--accent)] mb-3" />
                        <h3 class="text-[12px] font-normal text-[var(--foreground)]">لا توجد اختبارات تطابق الفلاتر المحددة</h3>
                        <p class="text-[10px] text-[var(--muted-foreground)] mb-4 text-center max-w-xs leading-relaxed">
                            جرّب تغيير خيارات التصفية أو الفلترة لعرض نتائج أخرى.
                        </p>
                    </div>

                    <!-- Quizzes Grid -->
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card v-for="quiz in quizzes" :key="quiz.id" class="border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)] flex flex-col hover:border-[var(--primary)]/30 transition-all duration-300">
                            <!-- Course Header -->
                            <CardHeader class="p-4 pb-2 space-y-1">
                                <div class="flex justify-between items-start gap-2">
                                    <Badge variant="outline" class="h-5 text-[8px] font-normal border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]">
                                        {{ quiz.course.title }}
                                    </Badge>
                                    
                                    <Badge :class="['h-5 text-[8px] font-normal border shadow-none px-2', getStatusBadge(quiz.status).class]">
                                        {{ getStatusBadge(quiz.status).label }}
                                    </Badge>
                                </div>
                                <CardTitle class="text-[13px] font-medium text-[var(--foreground)] line-clamp-1 leading-normal pt-1.5">
                                    {{ quiz.title }}
                                </CardTitle>
                            </CardHeader>

                            <!-- Content Info -->
                            <CardContent class="p-4 pt-0 flex-1 flex flex-col justify-between space-y-4">
                                <p class="text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed">
                                    {{ quiz.description || 'لا يوجد وصف متاح لهذا الاختبار.' }}
                                </p>

                                <div class="grid grid-cols-2 gap-2.5 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted-foreground)]">
                                    <div class="flex items-center gap-1.5">
                                        <Clock class="h-3.5 w-3.5 opacity-60 text-brand-orange" />
                                        <span>المدة: {{ quiz.duration }} دقيقة</span>
                                    </div>
                                    <div class="flex items-center gap-1.5">
                                        <Award class="h-3.5 w-3.5 opacity-60 text-brand-orange" />
                                        <span>درجة النجاح: %{{ quiz.passing_score }}</span>
                                    </div>
                                    <div class="flex items-center gap-1.5 col-span-2">
                                        <Calendar class="h-3.5 w-3.5 opacity-60 text-brand-orange" />
                                        <span v-if="quiz.end_time">ينتهي: {{ formatDate(quiz.end_time) }}</span>
                                        <span v-else>متاح دائماً</span>
                                    </div>
                                </div>

                                <!-- Attempt Results if any -->
                                <div v-if="quiz.attempts_count > 0" class="p-2.5 bg-[var(--muted)] rounded-md border border-[var(--border)] text-[10px] space-y-1">
                                    <div class="flex justify-between items-center">
                                        <span class="text-[var(--muted-foreground)]">المحاولات المقدمة:</span>
                                        <span class="font-medium text-[var(--foreground)]">{{ quiz.attempts_count }} / {{ quiz.attempts_limit || 'مفتوح' }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-[var(--muted-foreground)]">أفضل نتيجة لك:</span>
                                        <span :class="['font-semibold', quiz.best_score >= quiz.passing_score ? 'text-emerald-600' : 'text-rose-600']">
                                            {{ quiz.best_score }}%
                                            <span v-if="quiz.best_score >= quiz.passing_score">(ناجح)</span>
                                            <span v-else>(راسب)</span>
                                        </span>
                                    </div>
                                </div>

                                <!-- Action Button -->
                                <div class="pt-2">
                                    <!-- Can Take Quiz -->
                                    <Link 
                                        v-if="quiz.status === 'not_started' || (quiz.status === 'failed' && (!quiz.attempts_limit || quiz.attempts_count < quiz.attempts_limit))"
                                        :href="route('quizzes.show', [quiz.course.slug, quiz.id])" 
                                        class="block w-full"
                                    >
                                        <Button class="w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md">
                                            بدء الاختبار الآن <ArrowLeft class="mr-2 h-3.5 w-3.5" />
                                        </Button>
                                    </Link>

                                    <!-- Upcoming -->
                                    <Button 
                                        v-else-if="quiz.status === 'upcoming'"
                                        disabled
                                        class="w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed"
                                    >
                                        غير متاح بعد (يبدأ {{ formatDate(quiz.start_time) }})
                                    </Button>

                                    <!-- Expired / Limit Reached -->
                                    <Button 
                                        v-else
                                        disabled
                                        class="w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed"
                                    >
                                        <span v-if="quiz.status === 'expired'">منتهي الصلاحية</span>
                                        <span v-else-if="quiz.attempts_limit && quiz.attempts_count >= quiz.attempts_limit">مستنفذ المحاولات المتاحة</span>
                                        <span v-else-if="quiz.status === 'passed'">تم اجتياز الاختبار بنجاح 🎉</span>
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
