<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
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
    ChevronLeft
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

defineProps({
    stats: Object,
    latest_courses: Array,
    chart_data: Array
});
</script>

<template>
    <Head title="لوحة تحكم المعلم" />

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>لوحة التحكم</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-black">نظرة عامة</span>
                </div>
                <div class="flex items-center gap-2">
                    <Link :href="route('teacher.courses.create')">
                        <Button size="sm" class="h-7 text-[11px] px-4 font-bold">
                            <Plus class="ml-1.5 h-3 w-3" /> إنشاء كورس
                        </Button>
                    </Link>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-6 max-w-full mx-auto">
                    
                    <!-- Top Stats Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg">
                            <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1">
                                <CardTitle class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">إجمالي الإيرادات</CardTitle>
                                <div class="h-8 w-8 rounded-md bg-emerald-50 flex items-center justify-center">
                                    <DollarSign class="h-4 w-4 text-emerald-600" />
                                </div>
                            </CardHeader>
                            <CardContent class="p-4 pt-0">
                                <div class="text-xl font-black text-zinc-900 tracking-tighter">${{ stats.total_revenue }}</div>
                                <div class="flex items-center gap-1 mt-1">
                                    <Badge variant="secondary" class="h-4 text-[9px] font-black bg-emerald-50 text-emerald-600 border-none">+20.1%</Badge>
                                    <span class="text-[10px] text-zinc-400 font-medium">من الشهر الماضي</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg">
                            <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1">
                                <CardTitle class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">الطلاب الجدد</CardTitle>
                                <div class="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center">
                                    <Users class="h-4 w-4 text-blue-600" />
                                </div>
                            </CardHeader>
                            <CardContent class="p-4 pt-0">
                                <div class="text-xl font-black text-zinc-900 tracking-tighter">{{ stats.total_students }}</div>
                                <div class="flex items-center gap-1 mt-1">
                                    <Badge variant="secondary" class="h-4 text-[9px] font-black bg-blue-50 text-blue-600 border-none">+18%</Badge>
                                    <span class="text-[10px] text-zinc-400 font-medium">معدل النمو</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg">
                            <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1">
                                <CardTitle class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">الكورسات</CardTitle>
                                <div class="h-8 w-8 rounded-md bg-purple-50 flex items-center justify-center">
                                    <GraduationCap class="h-4 w-4 text-purple-600" />
                                </div>
                            </CardHeader>
                            <CardContent class="p-4 pt-0">
                                <div class="text-xl font-black text-zinc-900 tracking-tighter">{{ stats.total_courses }}</div>
                                <div class="flex items-center gap-1 mt-1 text-[10px] text-zinc-400 font-medium">
                                    <Activity class="h-3 w-3 opacity-50" />
                                    <span>نشرت كورسين جديدين</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg">
                            <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1">
                                <CardTitle class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">المشاهدات</CardTitle>
                                <div class="h-8 w-8 rounded-md bg-amber-50 flex items-center justify-center">
                                    <PlayCircle class="h-4 w-4 text-amber-600" />
                                </div>
                            </CardHeader>
                            <CardContent class="p-4 pt-0">
                                <div class="text-xl font-black text-zinc-900 tracking-tighter">{{ stats.total_lessons }}</div>
                                <div class="flex items-center gap-1 mt-1 text-[10px] text-zinc-400 font-medium font-bold uppercase tracking-widest">
                                    <TrendingUp class="h-3 w-3" />
                                    نشاط مرتفع
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <!-- Charts & Recent Activity -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        <!-- Chart Section -->
                        <Card class="lg:col-span-2 border-zinc-200 shadow-none bg-white rounded-lg">
                            <CardHeader class="p-4 border-b border-zinc-50">
                                <CardTitle class="text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900">
                                    <Target class="h-4 w-4 text-zinc-400" /> أداء المبيعات الأسبوعي
                                </CardTitle>
                                <CardDescription class="text-[10px]">صافي الربح خلال الـ 7 أيام الماضية.</CardDescription>
                            </CardHeader>
                            <CardContent class="p-6 h-[300px]">
                                <DashboardChart :data="chart_data" />
                            </CardContent>
                        </Card>

                        <!-- Recent Courses -->
                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg">
                            <CardHeader class="p-4 border-b border-zinc-50">
                                <CardTitle class="text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900">
                                    <BookOpen class="h-4 w-4 text-zinc-400" /> آخر الكورسات
                                </CardTitle>
                                <CardDescription class="text-[10px]">نظرة على المحتوى الأخير المنشور.</CardDescription>
                            </CardHeader>
                            <CardContent class="p-0">
                                <div class="divide-y divide-zinc-50">
                                    <div v-for="course in latest_courses" :key="course.id" class="p-3 flex items-center justify-between hover:bg-zinc-50/50 transition-all group">
                                        <div class="flex items-center gap-3">
                                            <div class="h-8 w-11 rounded border border-zinc-100 overflow-hidden shadow-sm">
                                                <img v-if="course.thumbnail" :src="course.thumbnail" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                <div v-else class="h-full w-full bg-zinc-50 flex items-center justify-center text-zinc-200">
                                                    <GraduationCap class="h-4 w-4" />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="text-[11px] font-bold text-zinc-900 line-clamp-1">{{ course.title }}</div>
                                                <div class="text-[9px] text-zinc-400 flex items-center gap-1.5 mt-0.5">
                                                    <Users class="h-2.5 w-2.5 opacity-50" /> {{ course.users_count }} طالب
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-[11px] font-black text-emerald-600">+${{ (course.price * 0.7).toFixed(2) }}</div>
                                    </div>
                                </div>
                                <div class="p-3 border-t border-zinc-50 text-center">
                                    <Link :href="route('teacher.courses.index')">
                                        <Button variant="ghost" size="sm" class="h-6 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900">مشاهدة الكل</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
