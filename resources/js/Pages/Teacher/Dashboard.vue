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
</script>

<template>
    <Head title="لوحة تحكم المعلم الفاخرة" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                <span>لوحة التحكم</span>
                <ChevronLeft class="h-3 w-3" />
                <span class="text-zinc-950 font-black">المعلم</span>
            </div>
        </template>

        <div class="w-full space-y-8 max-w-7xl mx-auto text-right pb-12">
            
            <!-- SECTION 1: Welcome & Quick Action Hero Section -->
            <section class="relative bg-white border border-zinc-200/80 rounded-2xl p-6 lg:p-8 overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <!-- Dot overlay inside this section for that Welcome.vue feeling -->
                <div class="absolute inset-0 bg-[radial-gradient(#f4f4f5_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none"></div>
                
                <div class="space-y-2 relative z-10">
                    <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-zinc-200 bg-zinc-50 text-[10px] font-bold text-zinc-500 shadow-sm mb-1">
                        <Sparkles class="h-3 w-3 text-zinc-950" />
                        <span>لوحة التحكم المحدثة للمعلم</span>
                    </div>
                    <h1 class="text-2xl font-black text-zinc-950 tracking-tight">أهلاً بك مجدداً، {{ $page.props.auth.user.name }}!</h1>
                    <p class="text-[11px] text-zinc-400 max-w-xl font-medium leading-relaxed">
                        تابع تقدم طلابك، وعمّق أثر محتواك التعليمي، وصمم مسارات التعلم الأكثر طلباً مستعيناً بأحدث أدوات إدارة الكورسات الذكية والتقارير المالية المتقنة.
                    </p>
                </div>
                
                <div class="relative z-10 flex gap-2 shrink-0">
                    <Link :href="route('teacher.courses.create')">
                        <Button size="lg" class="h-10 px-6 bg-zinc-950 text-white hover:bg-zinc-900 rounded-md font-bold text-xs flex items-center gap-2 transition-all active:scale-[0.98] shadow-sm">
                            <Plus class="h-3.5 w-3.5" /> إنشاء كورس جديد
                        </Button>
                    </Link>
                </div>
            </section>

            <!-- SECTION 2: Teacher's Courses (ALL COURSES AT THE TOP) -->
            <section class="space-y-4">
                <div class="flex items-center justify-between border-b border-zinc-200 pb-3">
                    <div>
                        <h2 class="text-[14px] font-black text-zinc-900 flex items-center gap-2">
                            <Folder class="h-4.5 w-4.5 text-zinc-400" /> إدارة كورساتك ومناهج الدروس
                        </h2>
                        <p class="text-[10px] text-zinc-400 mt-0.5">استعراض جميع الكورسات التي أنشأتها وتفاصيل دروسها مباشرة.</p>
                    </div>
                    <Badge variant="secondary" class="h-5 text-[9px] font-bold bg-zinc-100 text-zinc-900 border-none px-2">
                        {{ courses.length }} كورس إجمالي
                    </Badge>
                </div>

                <!-- Empty State -->
                <div v-if="courses.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 bg-white/50 backdrop-blur-sm rounded-xl">
                    <GraduationCap class="h-12 w-12 text-zinc-200 mb-3" />
                    <h3 class="text-[12px] font-bold text-zinc-800">لم تقم بإنشاء أي كورس بعد</h3>
                    <p class="text-[10px] text-zinc-400 mb-5">ابدأ الآن بإضافة أول كورس تعليمي لتبدأ رحلتك.</p>
                    <Link :href="route('teacher.courses.create')">
                        <Button variant="outline" size="sm" class="h-8 text-[11px] font-black border-zinc-200 px-6">إنشاء أول كورس</Button>
                    </Link>
                </div>

                <!-- Grid of Courses -->
                <div v-else class="grid grid-cols-1 gap-5">
                    <Card v-for="course in courses" :key="course.id" class="border-zinc-200/80 shadow-none bg-white hover:border-zinc-400 transition-all duration-300 rounded-xl overflow-hidden group flex flex-col">
                        <div class="flex flex-col lg:flex-row">
                            
                            <!-- Thumbnail Area -->
                            <div class="lg:w-72 aspect-video lg:aspect-auto lg:h-44 relative bg-zinc-50 border-b lg:border-b-0 lg:border-l border-zinc-100 overflow-hidden shrink-0">
                                <img v-if="course.thumbnail" :src="course.thumbnail" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-750 ease-out" />
                                <div v-else class="w-full h-full flex items-center justify-center text-zinc-200">
                                    <GraduationCap class="h-12 w-12 opacity-35" />
                                </div>
                                <div class="absolute top-3 left-3 flex flex-wrap gap-1">
                                    <Badge :variant="course.is_published ? 'default' : 'outline'" class="h-4.5 text-[8px] font-black uppercase tracking-widest px-2 shadow-sm rounded">
                                        {{ course.is_published ? 'منشور' : 'مسودة' }}
                                    </Badge>
                                </div>
                                <div class="absolute bottom-3 right-3">
                                    <Badge variant="secondary" class="h-4.5 text-[8px] font-bold px-2 bg-white/90 backdrop-blur-sm border-none text-zinc-900 rounded">
                                        {{ getLevelBadge(course.level) }}
                                    </Badge>
                                </div>
                            </div>

                            <!-- Course Info Area -->
                            <div class="flex-1 p-5 flex flex-col justify-between space-y-4">
                                <div class="space-y-1.5">
                                    <div class="flex items-center justify-between">
                                        <span class="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{{ course.category?.name || 'عام' }}</span>
                                        <div class="text-[11px] font-extrabold text-zinc-900">
                                            {{ course.price > 0 ? '$' + course.price : 'مجاني' }}
                                        </div>
                                    </div>
                                    <h3 class="text-[14px] font-bold text-zinc-900 line-clamp-1 group-hover:text-zinc-950 transition-colors">
                                        {{ course.title }}
                                    </h3>
                                    <p class="text-[10.5px] text-zinc-400 line-clamp-2 leading-relaxed">
                                        {{ course.description }}
                                    </p>
                                </div>

                                <!-- Features & Stats Badges -->
                                <div class="flex flex-wrap items-center gap-3 pt-2 border-t border-zinc-50">
                                    <div class="flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100">
                                        <Users class="h-3.5 w-3.5 text-zinc-400" />
                                        <span>{{ course.users_count || 0 }} طالب</span>
                                    </div>
                                    <div class="flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100">
                                        <PlayCircle class="h-3.5 w-3.5 text-zinc-400" />
                                        <span>{{ course.lessons_count || 0 }} درس</span>
                                    </div>
                                    <div class="flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100">
                                        <HelpCircle class="h-3.5 w-3.5 text-zinc-400" />
                                        <span>{{ course.quizzes_count || 0 }} اختبار</span>
                                    </div>
                                    
                                    <div class="mr-auto flex items-center gap-1.5">
                                        <Link :href="route('teacher.courses.edit', course.id)">
                                            <Button variant="outline" size="sm" class="h-7 text-[10px] px-3 font-bold border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-all active:scale-[0.97]">
                                                <Edit class="h-3 w-3 ml-1" /> تعديل
                                            </Button>
                                        </Link>
                                        
                                        <!-- Lessons Accordion Toggle Trigger -->
                                        <Button @click="toggleLessons(course.id)" variant="ghost" size="sm" class="h-7 text-[10px] px-3 font-black text-zinc-600 hover:text-zinc-900 rounded-md bg-zinc-50/50 hover:bg-zinc-100/60 transition-all flex items-center gap-1">
                                            <span>{{ expandedCourses[course.id] ? 'إخفاء الدروس' : 'استعراض الدروس' }}</span>
                                            <ChevronUp v-if="expandedCourses[course.id]" class="h-3 w-3" />
                                            <ChevronDown v-else class="h-3 w-3" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Collapse Area: Beautiful Lesson Names List (Requested by User) -->
                        <div 
                            v-if="expandedCourses[course.id]"
                            class="px-5 pb-5 pt-3 border-t border-zinc-100 bg-zinc-50/30 animate-in fade-in slide-in-from-top-2 duration-300"
                        >
                            <div class="flex items-center gap-2 mb-3.5">
                                <Award class="h-4 w-4 text-zinc-400" />
                                <span class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">منهج الدروس بالتفصيل:</span>
                            </div>

                            <div v-if="course.lessons && course.lessons.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                <div 
                                    v-for="(lesson, idx) in course.lessons" 
                                    :key="lesson.id" 
                                    class="p-2.5 rounded-lg bg-white border border-zinc-200/60 hover:border-zinc-900/40 hover:shadow-xs transition-all duration-200 flex items-center justify-between group/lesson"
                                >
                                    <div class="flex items-center gap-2.5 min-w-0">
                                        <div class="h-5 w-5 bg-zinc-950 text-white text-[9px] font-black rounded-md flex items-center justify-center shrink-0 shadow-sm select-none">
                                            {{ idx + 1 }}
                                        </div>
                                        <div class="min-w-0">
                                            <div class="text-[10.5px] font-bold text-zinc-800 line-clamp-1 group-hover/lesson:text-zinc-950 transition-colors">
                                                {{ lesson.title }}
                                            </div>
                                            <div class="text-[8px] text-zinc-400 font-medium flex items-center gap-1 mt-0.5">
                                                <Calendar class="h-2 w-2" /> {{ new Date(lesson.created_at || Date.now()).toLocaleDateString('ar-EG') }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shrink-0 flex items-center gap-1.5">
                                        <Badge variant="outline" class="h-4 text-[7px] font-bold bg-zinc-50 border-zinc-100/80 text-zinc-400">
                                            موضع {{ lesson.position }}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Empty Lessons state -->
                            <div v-else class="flex flex-col items-center justify-center py-6 text-center">
                                <PlayCircle class="h-7 w-7 text-zinc-200 mb-1.5" />
                                <div class="text-[10px] font-bold text-zinc-400">لا توجد دروس في هذا الكورس حتى الآن</div>
                                <Link :href="route('teacher.lessons.create', course.id)" class="mt-2 text-[9px] font-black text-zinc-950 hover:underline">
                                    + أضف أول درس الآن
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <!-- SECTION 3: Performance Metrics & Statistics -->
            <section class="space-y-4 pt-4 border-t border-zinc-200/60">
                <div class="border-b border-zinc-200 pb-3">
                    <h2 class="text-[14px] font-black text-zinc-900 flex items-center gap-2">
                        <TrendingUp class="h-4.5 w-4.5 text-zinc-400" /> لوحة الإحصائيات والأداء العام
                    </h2>
                    <p class="text-[10px] text-zinc-400 mt-0.5">تقارير إجمالية حول الأداء المالي، المشاهدات والطلاب المسجلين.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    <!-- Total Revenue Card -->
                    <Card class="border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300">
                        <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1.5">
                            <CardTitle class="text-[9px] font-black text-zinc-400 uppercase tracking-widest">إجمالي الإيرادات</CardTitle>
                            <div class="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                                <DollarSign class="h-4.5 w-4.5" />
                            </div>
                        </CardHeader>
                        <CardContent class="p-4 pt-0">
                            <div class="text-2xl font-black text-zinc-900 tracking-tighter">${{ stats.total_revenue }}</div>
                            <div class="flex items-center gap-1 mt-1">
                                <Badge variant="secondary" class="h-4 text-[8px] font-black bg-emerald-50 text-emerald-600 border-none px-1 rounded">+20.1%</Badge>
                                <span class="text-[9px] text-zinc-400 font-bold">منذ الشهر الماضي</span>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- New Students Card -->
                    <Card class="border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300">
                        <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1.5">
                            <CardTitle class="text-[9px] font-black text-zinc-400 uppercase tracking-widest">الطلاب الجدد</CardTitle>
                            <div class="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                                <Users class="h-4.5 w-4.5" />
                            </div>
                        </CardHeader>
                        <CardContent class="p-4 pt-0">
                            <div class="text-2xl font-black text-zinc-900 tracking-tighter">{{ stats.total_students }}</div>
                            <div class="flex items-center gap-1 mt-1">
                                <Badge variant="secondary" class="h-4 text-[8px] font-black bg-blue-50 text-blue-600 border-none px-1 rounded">+18%</Badge>
                                <span class="text-[9px] text-zinc-400 font-bold">معدل الانضمام</span>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Total Courses Card -->
                    <Card class="border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300">
                        <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1.5">
                            <CardTitle class="text-[9px] font-black text-zinc-400 uppercase tracking-widest">الكورسات الإجمالية</CardTitle>
                            <div class="h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                                <GraduationCap class="h-4.5 w-4.5" />
                            </div>
                        </CardHeader>
                        <CardContent class="p-4 pt-0">
                            <div class="text-2xl font-black text-zinc-900 tracking-tighter">{{ stats.total_courses }}</div>
                            <div class="flex items-center gap-1.5 mt-1 text-[9px] text-zinc-400 font-bold">
                                <Activity class="h-3 w-3 text-purple-400" />
                                <span>تحديثات مستمرة ومنشورة</span>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Total Lessons views Card -->
                    <Card class="border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300">
                        <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1.5">
                            <CardTitle class="text-[9px] font-black text-zinc-400 uppercase tracking-widest">المشاهدات والدروس</CardTitle>
                            <div class="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                                <PlayCircle class="h-4.5 w-4.5" />
                            </div>
                        </CardHeader>
                        <CardContent class="p-4 pt-0">
                            <div class="text-2xl font-black text-zinc-900 tracking-tighter">{{ stats.total_lessons }}</div>
                            <div class="flex items-center gap-1 mt-1 text-[9px] text-zinc-400 font-black uppercase tracking-widest">
                                <TrendingUp class="h-3 w-3 text-amber-500 ml-1.5" />
                                <span>نشاط تفاعلي متصاعد</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <!-- SECTION 4: Interactive Sales Charts & Activities -->
            <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <!-- Chart Container -->
                <Card class="lg:col-span-2 border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300 overflow-hidden flex flex-col">
                    <CardHeader class="p-5 border-b border-zinc-100 flex flex-row items-center justify-between">
                        <div>
                            <CardTitle class="text-[12px] font-black flex items-center gap-2 text-zinc-900 uppercase tracking-tight">
                                <Target class="h-4 w-4 text-zinc-400" /> تحليل المبيعات والأرباح الأسبوعية
                            </CardTitle>
                            <CardDescription class="text-[9.5px] mt-0.5 text-zinc-400">حجم الأرباح الصافية خلال الـ 7 أيام المنصرمة.</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent class="p-5 flex-1 min-h-[300px] flex items-end">
                        <DashboardChart :data="chart_data" class="w-full h-full" />
                    </CardContent>
                </Card>

                <!-- Latest Courses List Sidebar -->
                <Card class="border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300 overflow-hidden flex flex-col">
                    <CardHeader class="p-5 border-b border-zinc-100">
                        <CardTitle class="text-[12px] font-black flex items-center gap-2 text-zinc-900 uppercase tracking-tight">
                            <BookOpen class="h-4 w-4 text-zinc-400" /> النشاط الأخير للكورسات
                        </CardTitle>
                        <CardDescription class="text-[9.5px] mt-0.5 text-zinc-400">آخر التحديثات والإيرادات المحققة مؤخراً.</CardDescription>
                    </CardHeader>
                    
                    <CardContent class="p-0 flex-1 overflow-y-auto divide-y divide-zinc-50">
                        <div v-for="course in latest_courses" :key="course.id" class="p-3.5 flex items-center justify-between hover:bg-zinc-50/50 transition-all group">
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="h-9 w-12 rounded border border-zinc-100 overflow-hidden shrink-0 shadow-xs bg-zinc-50 flex items-center justify-center">
                                    <img v-if="course.thumbnail" :src="course.thumbnail" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <GraduationCap v-else class="h-5 w-5 text-zinc-300" />
                                </div>
                                <div class="min-w-0">
                                    <div class="text-[10.5px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                                        {{ course.title }}
                                    </div>
                                    <div class="text-[8.5px] text-zinc-400 font-bold flex items-center gap-1.5 mt-0.5">
                                        <Users class="h-3 w-3 opacity-55" /> {{ course.users_count }} طالب
                                    </div>
                                </div>
                            </div>
                            <div class="text-[10.5px] font-black text-emerald-600 shrink-0 font-sans">
                                +${{ (course.price * 0.7).toFixed(2) }}
                            </div>
                        </div>

                        <!-- Empty state recent courses -->
                        <div v-if="latest_courses.length === 0" class="flex flex-col items-center justify-center py-12 text-center text-zinc-400 text-[10px]">
                            لا توجد بيانات متاحة حالياً
                        </div>
                    </CardContent>
                    
                    <div class="p-3.5 bg-zinc-50/40 border-t border-zinc-50 text-center shrink-0">
                        <Link :href="route('teacher.courses.index')">
                            <Button variant="ghost" size="sm" class="h-7 w-full text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 hover:bg-white transition-all">
                                استعراض كافة الكورسات <ArrowUpRight class="h-3 w-3 mr-1" />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </section>
        </div>
    </AuthenticatedLayout>
</template>
