<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import { 
    Users, 
    BookOpen, 
    GraduationCap, 
    TrendingUp, 
    ArrowUpRight,
    PlayCircle,
    Plus,
    MoreHorizontal,
    LayoutDashboard,
    DollarSign,
    Target,
    Activity,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    ChevronUp,
    Edit,
    Check,
    X,
    Folder,
    HelpCircle,
    Award,
    Sparkles,
    Calendar,
    MessageSquare
} from 'lucide-vue-next';
import { Button } from '@/Components/ui/button';
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import DashboardChart from '@/Components/DashboardChart.vue';

const props = defineProps({
    stats: Object,
    latest_courses: Array,
    chart_data: Array,
    courses: Array
});

// Reactivity for expanded lessons inside course cards
const expandedCourses = ref({});

const toggleLessons = (courseId) => {
    expandedCourses.value[courseId] = !expandedCourses.value[courseId];
};

const getLevelBadge = (level) => {
    switch (level) {
        case 'beginner': return 'مبتدئ';
        case 'intermediate': return 'متوسط';
        case 'advanced': return 'متقدم';
        default: return level;
    }
};

// Carousel Ref & RTL Smooth Scroll logic
const carouselRef = ref(null);

const scrollLeft = () => {
    if (carouselRef.value) {
        carouselRef.value.scrollBy({ left: -320 });
    }
};

const scrollRight = () => {
    if (carouselRef.value) {
        carouselRef.value.scrollBy({ left: 320 });
    }
};
</script>

<template>
    <Head title="لوحة تحكم المعلم الفاخرة" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم' }
    ]">

        <!-- Full-Width Edge-to-Edge Section Layout -->
        <div class="w-full text-right pb-12 space-y-0 bg-[var(--background)]">
            
            <!-- SECTION 1: Welcome & Quick Action Hero Section (Full-Width, B&W Theme with Grid overlay) -->
            <section class="relative bg-[var(--card)] border-b border-[var(--border)] p-6 lg:p-8 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <!-- dot grid styling to match Welcome.vue -->
                <div class="absolute inset-0 bg-[radial-gradient(var(--border)_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>
                
                <div class="space-y-2 relative z-10">
                    <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--muted)] text-[10px] font-normal text-[var(--muted-foreground)] mb-1">
                        <Sparkles class="h-3 w-3 text-[var(--primary)]" />
                        <span>لوحة التحكم المحدثة للمعلم</span>
                    </div>
                    <h1 class="text-2xl font-normal text-[var(--foreground)] tracking-tight">أهلاً بك مجدداً، {{ $page.props.auth.user.name }}!</h1>
                    <p class="text-[11px] text-[var(--muted-foreground)] max-w-xl font-normal leading-relaxed">
                        تابع تقدم طلابك، وعمّق أثر محتواك التعليمي، وصمم مسارات التعلم الأكثر طلباً مستعيناً بأحدث أدوات إدارة الكورسات الذكية والتقارير المالية المتقنة.
                    </p>
                </div>
                
                <div class="relative z-10 flex gap-2 shrink-0">
                    <Link :href="route('teacher.courses.create')">
                        <Button size="lg" class="h-10 px-6 bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded-md font-normal text-xs flex items-center gap-2 shadow-none">
                            <Plus class="h-3.5 w-3.5" /> إنشاء كورس جديد
                        </Button>
                    </Link>
                </div>
            </section>

            <!-- SECTION 2: Carousel of Teacher's Courses (Edge-to-Edge grid layout with Navigation Arrows) -->
            <section class="relative bg-[var(--background)] border-b border-[var(--border)] p-6 lg:p-8 overflow-hidden space-y-6">
                <!-- Dot grid overlay for refined texture -->
                <div class="absolute inset-0 bg-[radial-gradient(var(--border)_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
                
                <div class="relative z-10 flex items-center justify-between">
                    <div>
                        <h2 class="text-[14px] font-normal text-[var(--foreground)] flex items-center gap-2">
                            <Folder class="h-4.5 w-4.5 text-[var(--muted-foreground)]" /> إدارة كورساتك ومناهج الدروس
                        </h2>
                        <p class="text-[10px] text-[var(--muted-foreground)] mt-0.5">استعراض جميع الكورسات التي أنشأتها وتفاصيل دروسها مباشرة.</p>
                    </div>
                    
                    <div class="flex items-center gap-3">
                        <!-- Left & Right Arrow Navigation -->
                        <div v-if="courses.length > 0" class="flex items-center gap-1.5" dir="ltr">
                            <Button @click="scrollLeft" variant="outline" size="icon" class="h-8 w-8 rounded-full border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]">
                                <ChevronLeft class="h-4 w-4 text-[var(--muted-foreground)]" />
                            </Button>
                            <Button @click="scrollRight" variant="outline" size="icon" class="h-8 w-8 rounded-full border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]">
                                <ChevronRight class="h-4 w-4 text-[var(--muted-foreground)]" />
                            </Button>
                        </div>
                        <Badge variant="secondary" class="h-5 text-[9px] font-normal bg-[var(--accent)] text-[var(--foreground)] border-none px-2 shadow-none rounded">
                            {{ courses.length }} كورس إجمالي
                        </Badge>
                    </div>
                </div>

                <!-- Empty State -->
                <div v-if="courses.length === 0" class="relative z-10 flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] bg-[var(--card)] rounded-md shadow-none">
                    <GraduationCap class="h-12 w-12 text-[var(--muted-foreground)] opacity-40 mb-3" />
                    <h3 class="text-[12px] font-normal text-[var(--foreground)]">لم تقم بإنشاء أي كورس بعد</h3>
                    <p class="text-[10px] text-[var(--muted-foreground)] mb-5">ابدأ الآن بإضافة أول كورس تعليمي لتبدأ رحلتك.</p>
                    <Link :href="route('teacher.courses.create')">
                        <Button variant="outline" size="sm" class="h-8 text-[11px] font-normal border-[var(--border)] bg-[var(--card)] px-6 text-[var(--foreground)]">إنشاء أول كورس</Button>
                    </Link>
                </div>

                <!-- Horizontal Carousel Container -->
                <div v-else ref="carouselRef" class="relative z-10 flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none">
                    <Card v-for="course in courses" :key="course.id" class="w-72 sm:w-80 shrink-0 border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden group flex flex-col snap-start">
                        
                        <!-- Thumbnail (Top) -->
                        <div class="aspect-video relative bg-[var(--muted)] border-b border-[var(--border)] overflow-hidden shrink-0">
                            <img v-if="course.thumbnail" :src="course.thumbnail" class="w-full h-full object-cover" />
                            <div v-else class="w-full h-full flex items-center justify-center text-[var(--muted-foreground)]">
                                <GraduationCap class="h-12 w-12 opacity-35" />
                            </div>
                            <div class="absolute top-3 left-3 flex flex-wrap gap-1">
                                <Badge :variant="course.is_published ? 'default' : 'outline'" class="h-4.5 text-[8px] font-normal uppercase tracking-widest px-2 shadow-none rounded bg-[var(--card)] text-[var(--foreground)] border-[var(--border)]">
                                    {{ course.is_published ? 'منشور' : 'مسودة' }}
                                </Badge>
                            </div>
                            <div class="absolute bottom-3 right-3">
                                <Badge variant="secondary" class="h-4.5 text-[8px] font-normal px-2 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded">
                                    {{ getLevelBadge(course.level) }}
                                </Badge>
                            </div>
                        </div>

                        <!-- Info (Middle) -->
                        <div class="p-4 flex-1 flex flex-col justify-between space-y-4 bg-[var(--card)]">
                            <div class="space-y-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">{{ course.category?.name || 'عام' }}</span>
                                    <div class="text-[11px] font-normal text-[var(--foreground)] font-sans">
                                        {{ course.price > 0 ? '$' + course.price : 'مجاني' }}
                                    </div>
                                </div>
                                <h3 class="text-[13px] font-normal text-[var(--foreground)] line-clamp-1">
                                    {{ course.title }}
                                </h3>
                                <p class="text-[10px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed h-8">
                                    {{ course.description }}
                                </p>
                            </div>

                            <!-- Metrics Grid -->
                            <div class="grid grid-cols-3 gap-1.5 pt-3 border-t border-[var(--border)] text-center">
                                <div class="flex flex-col items-center justify-center bg-[var(--muted)] p-1.5 rounded border border-[var(--border)]">
                                    <Users class="h-3 w-3 text-[var(--muted-foreground)] mb-0.5" />
                                    <span class="text-[9.5px] text-[var(--foreground)] font-normal leading-tight font-sans">{{ course.users_count || 0 }}</span>
                                    <span class="text-[7.5px] text-[var(--muted-foreground)] leading-none font-normal">طلاب</span>
                                </div>
                                <div class="flex flex-col items-center justify-center bg-[var(--muted)] p-1.5 rounded border border-[var(--border)]">
                                    <PlayCircle class="h-3 w-3 text-[var(--muted-foreground)] mb-0.5" />
                                    <span class="text-[9.5px] text-[var(--foreground)] font-normal leading-tight font-sans">{{ course.lessons_count || 0 }}</span>
                                    <span class="text-[7.5px] text-[var(--muted-foreground)] leading-none font-normal">دروس</span>
                                </div>
                                <div class="flex flex-col items-center justify-center bg-[var(--muted)] p-1.5 rounded border border-[var(--border)]">
                                    <HelpCircle class="h-3 w-3 text-[var(--muted-foreground)] mb-0.5" />
                                    <span class="text-[9.5px] text-[var(--foreground)] font-normal leading-tight font-sans">{{ course.quizzes_count || 0 }}</span>
                                    <span class="text-[7.5px] text-[var(--muted-foreground)] leading-none font-normal">اختبارات</span>
                                </div>
                            </div>
                        </div>

                        <!-- Card Footer actions -->
                        <div class="px-4 pb-4 pt-1 flex items-center justify-between gap-2 border-t border-[var(--border)] bg-[var(--card)]">
                            <Link :href="route('teacher.courses.edit', course.id)">
                                <Button variant="outline" size="sm" class="h-7 text-[10px] px-3 font-normal border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] rounded">
                                    <Edit class="h-3 w-3 ml-1" /> تعديل
                                </Button>
                            </Link>
                            
                            <!-- Dropdown trigger to render lessons -->
                            <Button @click="toggleLessons(course.id)" variant="ghost" size="sm" class="h-7 text-[10px] px-3 font-normal text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded bg-[var(--muted)] hover:bg-[var(--accent)] flex items-center gap-1">
                                <span>{{ expandedCourses[course.id] ? 'إخفاء الدروس' : 'استعراض الدروس' }}</span>
                                <ChevronUp v-if="expandedCourses[course.id]" class="h-3 w-3" />
                                <ChevronDown v-else class="h-3 w-3" />
                            </Button>
                        </div>

                        <!-- Beautiful lesson listings inside vertical card bounds -->
                        <div 
                            v-if="expandedCourses[course.id]"
                            class="px-4 pb-4 pt-2.5 border-t border-[var(--border)] bg-[var(--muted)]"
                        >
                            <div class="flex items-center gap-1.5 mb-2">
                                <Award class="h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                                <span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">منهج الدروس:</span>
                            </div>

                            <div v-if="course.lessons && course.lessons.length > 0" class="space-y-1.5 max-h-48 overflow-y-auto pr-1 no-scrollbar">
                                <div 
                                    v-for="(lesson, idx) in course.lessons" 
                                    :key="lesson.id" 
                                    class="p-2 rounded bg-[var(--card)] border border-[var(--border)] flex items-center justify-between group/lesson"
                                >
                                    <div class="flex items-center gap-2 min-w-0">
                                        <div class="h-4.5 w-4.5 bg-[var(--primary)] text-white text-[8px] font-normal rounded flex items-center justify-center shrink-0 select-none">
                                            {{ idx + 1 }}
                                        </div>
                                        <div class="min-w-0">
                                            <div class="text-[9.5px] font-normal text-[var(--foreground)] line-clamp-1">
                                                {{ lesson.title }}
                                            </div>
                                        </div>
                                    </div>
                                    <Badge variant="outline" class="h-4 text-[7px] font-normal bg-[var(--muted)] border-[var(--border)] text-[var(--muted-foreground)] shrink-0">
                                        موضع {{ lesson.position }}
                                    </Badge>
                                </div>
                            </div>
                            
                            <!-- Empty Lessons state -->
                            <div v-else class="flex flex-col items-center justify-center py-4 text-center">
                                <PlayCircle class="h-6 w-6 text-[var(--muted-foreground)] opacity-40 mb-1" />
                                <div class="text-[9.5px] font-normal text-[var(--muted-foreground)]">لا توجد دروس في الكورس بعد</div>
                                <Link :href="route('teacher.lessons.create', course.id)" class="mt-1 text-[8.5px] font-normal text-[var(--primary)] hover:underline">
                                    + أضف أول درس
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <!-- SECTION 3: Performance Metrics & Statistics (Full-Width, Soft White with dot grid overlay) -->
            <section class="relative bg-[var(--card)] border-b border-[var(--border)] p-6 lg:p-8 overflow-hidden space-y-6">
                <!-- Dot overlay texture -->
                <div class="absolute inset-0 bg-[radial-gradient(var(--border)_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>
                
                <div class="relative z-10 flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <div>
                        <h2 class="text-[14px] font-normal text-[var(--foreground)] flex items-center gap-2">
                            <TrendingUp class="h-4.5 w-4.5 text-[var(--muted-foreground)]" /> لوحة الإحصائيات والأداء العام
                        </h2>
                        <p class="text-[10px] text-[var(--muted-foreground)] mt-0.5">تقارير إجمالية حول الأداء المالي، المشاهدات والطلاب المسجلين.</p>
                    </div>
                </div>

                <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Total Revenue Card -->
                    <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden">
                        <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1.5 bg-[var(--card)]">
                            <CardTitle class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">إجمالي الإيرادات</CardTitle>
                            <div class="h-8 w-8 rounded bg-[var(--accent)] border border-[var(--border)] text-[var(--foreground)] flex items-center justify-center font-normal">
                                <DollarSign class="h-4.5 w-4.5 text-[var(--primary)]" />
                            </div>
                        </CardHeader>
                        <CardContent class="p-4 pt-0 bg-[var(--card)]">
                            <div class="text-2xl font-normal text-[var(--foreground)] tracking-tighter font-sans">${{ stats.total_revenue }}</div>
                            <div class="flex items-center gap-1 mt-1">
                                <Badge variant="secondary" class="h-4 text-[8px] font-normal bg-[var(--accent)] text-[var(--foreground)] border-none px-1 rounded shadow-none">+20.1%</Badge>
                                <span class="text-[9px] text-[var(--muted-foreground)] font-normal">منذ الشهر الماضي</span>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- New Students Card -->
                    <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden">
                        <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1.5 bg-[var(--card)]">
                            <CardTitle class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">الطلاب الجدد</CardTitle>
                            <div class="h-8 w-8 rounded bg-[var(--accent)] border border-[var(--border)] text-[var(--foreground)] flex items-center justify-center font-normal">
                                <Users class="h-4.5 w-4.5 text-[var(--primary)]" />
                            </div>
                        </CardHeader>
                        <CardContent class="p-4 pt-0 bg-[var(--card)]">
                            <div class="text-2xl font-normal text-[var(--foreground)] tracking-tighter font-sans">{{ stats.total_students }}</div>
                            <div class="flex items-center gap-1 mt-1">
                                <Badge variant="secondary" class="h-4 text-[8px] font-normal bg-[var(--accent)] text-[var(--foreground)] border-none px-1 rounded shadow-none">+18%</Badge>
                                <span class="text-[9px] text-[var(--muted-foreground)] font-normal">معدل الانضمام</span>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Total Courses Card -->
                    <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden">
                        <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1.5 bg-[var(--card)]">
                            <CardTitle class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">الكورسات الإجمالية</CardTitle>
                            <div class="h-8 w-8 rounded bg-[var(--accent)] border border-[var(--border)] text-[var(--foreground)] flex items-center justify-center font-normal">
                                <GraduationCap class="h-4.5 w-4.5 text-[var(--primary)]" />
                            </div>
                        </CardHeader>
                        <CardContent class="p-4 pt-0 bg-[var(--card)]">
                            <div class="text-2xl font-normal text-[var(--foreground)] tracking-tighter font-sans">{{ stats.total_courses }}</div>
                            <div class="flex items-center gap-1.5 mt-1 text-[9px] text-[var(--muted-foreground)] font-normal">
                                <Activity class="h-3 w-3 text-[var(--primary)]" />
                                <span>تحديثات مستمرة ومنشورة</span>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Total Lessons views Card -->
                    <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden">
                        <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1.5 bg-[var(--card)]">
                            <CardTitle class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">المشاهدات والدروس</CardTitle>
                            <div class="h-8 w-8 rounded bg-[var(--accent)] border border-[var(--border)] text-[var(--foreground)] flex items-center justify-center font-normal">
                                <PlayCircle class="h-4.5 w-4.5 text-[var(--primary)]" />
                            </div>
                        </CardHeader>
                        <CardContent class="p-4 pt-0 bg-[var(--card)]">
                            <div class="text-2xl font-normal text-[var(--foreground)] tracking-tighter font-sans">{{ stats.total_lessons }}</div>
                            <div class="flex items-center gap-1 mt-1 text-[9px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest">
                                <TrendingUp class="h-3 w-3 text-[var(--primary)] ml-1.5" />
                                <span>نشاط تفاعلي متصاعد</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <!-- SECTION 4: Interactive Sales Charts & Activities (Full-Width, Light grid section layout) -->
            <section class="relative bg-[var(--background)] p-6 lg:p-8 overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- subtle background grids -->
                <div class="absolute inset-0 bg-[radial-gradient(var(--border)_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

                <!-- Chart Container -->
                <Card class="lg:col-span-2 border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden flex flex-col relative z-10">
                    <CardHeader class="p-5 border-b border-[var(--border)]">
                        <div>
                            <CardTitle class="text-[12px] font-normal flex items-center gap-2 text-[var(--foreground)] uppercase tracking-tight">
                                <Target class="h-4 w-4 text-[var(--muted-foreground)]" /> تحليل المبيعات والأرباح الأسبوعية
                            </CardTitle>
                            <CardDescription class="text-[9.5px] mt-0.5 text-[var(--muted-foreground)]">حجم الأرباح الصافية خلال الـ 7 أيام المنصرمة.</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent class="p-5 flex-1 min-h-[300px] flex items-end bg-[var(--card)]">
                        <DashboardChart :data="chart_data" class="w-full h-full" />
                    </CardContent>
                </Card>

                <!-- Latest Courses List Sidebar -->
                <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden flex flex-col relative z-10">
                    <CardHeader class="p-5 border-b border-[var(--border)]">
                        <CardTitle class="text-[12px] font-normal flex items-center gap-2 text-[var(--foreground)] uppercase tracking-tight">
                            <BookOpen class="h-4 w-4 text-[var(--muted-foreground)]" /> النشاط الأخير للكورسات
                        </CardTitle>
                        <CardDescription class="text-[9.5px] mt-0.5 text-[var(--muted-foreground)]">آخر التحديثات والإيرادات المحققة مؤخراً.</CardDescription>
                    </CardHeader>
                    
                    <CardContent class="p-0 flex-1 overflow-y-auto divide-y divide-[var(--border)] bg-[var(--card)]">
                        <div v-for="course in latest_courses" :key="course.id" class="p-3.5 flex items-center justify-between hover:bg-[var(--muted)] group">
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="h-9 w-12 rounded border border-[var(--border)] overflow-hidden shrink-0 bg-[var(--muted)] flex items-center justify-center">
                                    <img v-if="course.thumbnail" :src="course.thumbnail" class="h-full w-full object-cover" />
                                    <GraduationCap v-else class="h-5 w-5 text-[var(--muted-foreground)]" />
                                </div>
                                <div class="min-w-0">
                                    <div class="text-[10.5px] font-normal text-[var(--foreground)] line-clamp-1">
                                        {{ course.title }}
                                    </div>
                                    <div class="text-[8.5px] text-[var(--muted-foreground)] font-normal flex items-center gap-1.5 mt-0.5">
                                        <Users class="h-3 w-3 opacity-55" /> {{ course.users_count }} طالب
                                    </div>
                                </div>
                            </div>
                            <div class="text-[10.5px] font-normal text-[var(--primary)] shrink-0 font-sans">
                                +${{ (course.price * 0.7).toFixed(2) }}
                            </div>
                        </div>

                        <!-- Empty state recent courses -->
                        <div v-if="latest_courses.length === 0" class="flex flex-col items-center justify-center py-12 text-center text-[var(--muted-foreground)] text-[10px]">
                            لا توجد بيانات متاحة حالياً
                        </div>
                    </CardContent>
                    
                    <div class="p-3.5 bg-[var(--muted)] border-t border-[var(--border)] text-center shrink-0">
                        <Link :href="route('teacher.courses.index')">
                            <Button variant="ghost" size="sm" class="h-7 w-full text-[9px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)]">
                                استعراض كافة الكورسات <ArrowUpRight class="h-3 w-3 mr-1" />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </section>
        </div>
    </AuthenticatedLayout>
</template>
