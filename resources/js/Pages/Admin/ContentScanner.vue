<script setup>
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/Components/ui/card';
import { 
    Search, 
    AlertTriangle, 
    CheckCircle2, 
    Loader2,
    BookOpen,
    ArrowRight,
    ChevronLeft,
    ShieldAlert,
    Zap,
    LayoutGrid,
    SearchX,
    FileSearch
} from 'lucide-vue-next';
import axios from 'axios';

const props = defineProps({
    courses: Array
});

const selectedCourse = ref(null);
const isScanning = ref(false);
const scanReport = ref(null);
const scanError = ref(null);

const scanCourse = async (courseId) => {
    isScanning.value = true;
    scanReport.value = null;
    scanError.value = null;
    selectedCourse.value = props.courses.find(c => c.id === courseId);
    
    try {
        const response = await axios.post(route('admin.scanner.scan'), {
            course_id: courseId
        });
        scanReport.value = response.data.report;
    } catch (error) {
        scanError.value = error.response?.data?.error || 'حدث خطأ أثناء الفحص الميداني';
    } finally {
        isScanning.value = false;
    }
};

const getSeverityColor = (severity) => {
    if (severity === 'high') return 'text-red-600 bg-red-50 border-red-100';
    if (severity === 'medium') return 'text-amber-600 bg-amber-50 border-amber-100';
    return 'text-blue-600 bg-blue-50 border-blue-100';
};

const getSeverityText = (severity) => {
    if (severity === 'high') return 'حرج جداً';
    if (severity === 'medium') return 'متوسط';
    return 'تحسين';
};
</script>

<template>
    <Head title="كاشف المحتوى القديم | الإدارة" />

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>الإدارة</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-black">كاشف المحتوى الذكي</span>
                </div>
                <div class="flex items-center gap-2">
                    <Badge variant="outline" class="h-5 text-[9px] font-black uppercase tracking-widest border-zinc-200 bg-zinc-50">نظام التدقيق AI</Badge>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full max-w-full mx-auto space-y-6">
                    
                    <!-- Hero Section -->
                    <div class="relative overflow-hidden rounded-xl bg-zinc-900 p-6 text-white shadow-xl shadow-zinc-200/50 group">
                        <div class="relative z-10 space-y-2">
                            <h1 class="text-2xl font-black tracking-tight leading-none uppercase">أداة فحص المحتوى القديم</h1>
                            <p class="text-[11px] text-zinc-400 font-medium max-w-2xl leading-relaxed">
                                استخدم تقنيات الذكاء الاصطناعي لفحص دوراتك التعليمية واكتشاف التقنيات التي عفا عليها الزمن أو الممارسات البرمجية القديمة للحفاظ على جودة وحداثة منصتك العالمية.
                            </p>
                        </div>
                        <FileSearch class="absolute -bottom-8 -right-8 h-48 w-48 text-white opacity-[0.03] rotate-12 group-hover:scale-110 transition-transform duration-1000" />
                    </div>

                    <div class="grid lg:grid-cols-12 gap-6 items-start">
                        
                        <!-- Courses Sidebar -->
                        <div class="lg:col-span-4 space-y-4">
                            <div class="flex items-center gap-2 mb-2 border-b border-zinc-100 pb-3">
                                <BookOpen class="h-4 w-4 text-zinc-400" />
                                <h2 class="text-[12px] font-black uppercase tracking-widest text-zinc-900">الكورسات المسجلة</h2>
                            </div>
                            
                            <div class="grid gap-3">
                                <Card v-for="course in courses" :key="course.id" 
                                    :class="[
                                        'border-zinc-100 shadow-none bg-white rounded-lg transition-all group cursor-pointer',
                                        selectedCourse?.id === course.id ? 'border-zinc-900 ring-1 ring-zinc-900' : 'hover:border-zinc-300'
                                    ]"
                                    @click="scanCourse(course.id)"
                                >
                                    <CardContent class="p-4 flex items-center justify-between">
                                        <div class="space-y-1">
                                            <h3 class="font-black text-[12px] text-zinc-900 line-clamp-1 group-hover:text-zinc-600 transition-colors">{{ course.title }}</h3>
                                            <div class="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                                <span>{{ course.lessons_count }} درس</span>
                                                <div class="h-1 w-1 bg-zinc-200 rounded-full"></div>
                                                <span>{{ course.category?.name }}</span>
                                            </div>
                                        </div>
                                        <div :class="[
                                            'h-8 w-8 rounded-lg flex items-center justify-center transition-all',
                                            isScanning && selectedCourse?.id === course.id ? 'bg-zinc-900 text-white animate-pulse' : 'bg-zinc-50 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white'
                                        ]">
                                            <Loader2 v-if="isScanning && selectedCourse?.id === course.id" class="h-4 w-4 animate-spin" />
                                            <Search v-else class="h-4 w-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <!-- Report Area -->
                        <div class="lg:col-span-8 space-y-4">
                            <div class="flex items-center justify-between mb-2 border-b border-zinc-100 pb-3">
                                <div class="flex items-center gap-2">
                                    <ShieldAlert class="h-4 w-4 text-zinc-400" />
                                    <h2 class="text-[12px] font-black uppercase tracking-widest text-zinc-900">تقرير التدقيق التقني</h2>
                                </div>
                                <div v-if="scanReport" class="flex items-center gap-2">
                                    <Badge variant="secondary" class="h-5 text-[9px] font-black uppercase tracking-widest bg-zinc-100 border-none">{{ scanReport.length }} ملاحظات مكتشفة</Badge>
                                </div>
                            </div>
                            
                            <!-- Initial State -->
                            <div v-if="!selectedCourse && !isScanning" class="flex flex-col items-center justify-center p-16 border border-dashed border-zinc-200 rounded-xl bg-white text-center min-h-[400px]">
                                <SearchX class="h-16 w-16 text-zinc-100 mb-4" />
                                <h3 class="text-[13px] font-black text-zinc-900 uppercase">بدء الفحص الذكي</h3>
                                <p class="text-[11px] text-zinc-400 font-medium max-w-xs mt-2 leading-relaxed">يرجى تحديد كورس من القائمة الجانبية لبدء عملية تحليل المحتوى واكتشاف التقنيات المتقادمة.</p>
                            </div>

                            <!-- Scanning State -->
                            <div v-else-if="isScanning" class="flex flex-col items-center justify-center p-16 border border-zinc-200 rounded-xl bg-white text-center min-h-[400px]">
                                <div class="relative mb-6">
                                    <div class="h-16 w-16 rounded-full border-4 border-zinc-50 border-t-zinc-900 animate-spin"></div>
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <Zap class="h-6 w-6 text-zinc-900" />
                                    </div>
                                </div>
                                <h3 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight">جاري مسح وتحليل المحتوى...</h3>
                                <p class="text-[11px] text-zinc-400 font-medium mt-2 max-w-sm leading-relaxed">يقوم المحرك الذكي الآن بمراجعة نصوص الدروس ومقارنتها بقواعد البيانات الحديثة لاكتشاف أي فجوات تقنية.</p>
                            </div>

                            <!-- Error State -->
                            <div v-else-if="scanError" class="p-6 bg-red-50 border border-red-100 rounded-xl text-center">
                                <div class="inline-flex h-10 w-10 rounded-full bg-red-100 text-red-600 items-center justify-center mb-3"><AlertTriangle class="h-5 w-5" /></div>
                                <h3 class="text-[13px] font-black text-red-900">{{ scanError }}</h3>
                            </div>

                            <!-- Report Results -->
                            <div v-else-if="scanReport" class="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div v-if="scanReport.length === 0" class="p-16 bg-emerald-50/50 border border-emerald-100 rounded-xl text-center">
                                    <div class="inline-flex h-20 w-20 rounded-full bg-white text-emerald-600 items-center justify-center mb-6 shadow-sm"><CheckCircle2 class="h-10 w-10" /></div>
                                    <h3 class="text-[16px] font-black text-emerald-900 uppercase">محتوى حديث وبجودة عالية!</h3>
                                    <p class="text-[11px] text-emerald-600/70 font-medium max-w-md mx-auto mt-2 leading-relaxed">لم يتم اكتشاف أي تقنيات متقادمة أو ممارسات برمجية قديمة في هذا الكورس. استمر في الحفاظ على هذا المعيار.</p>
                                </div>

                                <div v-else class="grid gap-4">
                                    <Card v-for="(item, idx) in scanReport" :key="idx" class="border-zinc-200 shadow-none bg-white rounded-xl overflow-hidden group hover:border-zinc-900 transition-all">
                                        <CardContent class="p-5 space-y-4">
                                            <div class="flex items-center justify-between border-b border-zinc-50 pb-4">
                                                <Badge variant="outline" :class="['h-5 text-[9px] font-black uppercase tracking-widest px-3 border', getSeverityColor(item.severity)]">
                                                    {{ getSeverityText(item.severity) }}
                                                </Badge>
                                                <div class="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                                                    <BookOpen class="h-3 w-3 opacity-40" /> {{ item.lesson }}
                                                </div>
                                            </div>
                                            
                                            <div class="space-y-1.5">
                                                <h4 class="text-[14px] font-black text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors uppercase tracking-tight">{{ item.issue }}</h4>
                                                <p class="text-[11px] text-zinc-400 font-medium leading-relaxed italic">تم الاكتشاف بواسطة محرك الفحص الذكي</p>
                                            </div>

                                            <div class="p-4 bg-zinc-50 rounded-lg border border-zinc-100 flex items-start gap-3">
                                                <div class="h-6 w-6 rounded bg-white flex items-center justify-center shrink-0 shadow-sm"><Zap class="h-3 w-3 text-zinc-900" /></div>
                                                <div class="space-y-1">
                                                    <span class="text-[10px] font-black text-zinc-900 uppercase tracking-widest">توصية التحديث:</span>
                                                    <p class="text-[12px] text-zinc-600 font-medium leading-relaxed">{{ item.suggestion }}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
