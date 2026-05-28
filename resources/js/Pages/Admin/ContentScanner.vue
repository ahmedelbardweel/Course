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
    if (severity === 'high') return 'text-[#c22000] bg-[#fff0ed] border-[#ffd0c8]';
    if (severity === 'medium') return 'text-[#a36800] bg-[#fffaf0] border-[#ffe8cc]';
    return 'text-[#0a5c8c] bg-[#f0f8ff] border-[#cce6ff]';
};

const getSeverityText = (severity) => {
    if (severity === 'high') return 'حرج جداً';
    if (severity === 'medium') return 'متوسط';
    return 'تحسين';
};
</script>

<template>
    <Head title="كاشف المحتوى القديم | الإدارة" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'الرئيسية', url: route('dashboard') },
        { label: 'كاشف المحتوى الذكي' }
    ]">
        <template #header-actions>
            <Badge variant="outline" class="h-5 text-[9px] font-normal uppercase tracking-widest border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] rounded">نظام التدقيق AI</Badge>
        </template>

        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full max-w-full mx-auto space-y-6">
                    
                    <!-- Hero Section -->
                    <div class="relative overflow-hidden rounded-md bg-[var(--foreground)] p-6 text-[var(--card)] shadow-none group">
                        <div class="relative z-10 space-y-2">
                            <h1 class="text-2xl font-normal tracking-tight leading-none uppercase text-[var(--card)]">أداة فحص المحتوى القديم</h1>
                            <p class="text-[11px] text-[var(--muted-foreground)] opacity-90 font-normal max-w-2xl leading-relaxed">
                                استخدم تقنيات الذكاء الاصطناعي لفحص دوراتك التعليمية واكتشاف التقنيات التي عفا عليها الزمن أو الممارسات البرمجية القديمة للحفاظ على جودة وحداثة منصتك العالمية.
                            </p>
                        </div>
                        <FileSearch class="absolute -bottom-8 -right-8 h-48 w-48 text-[var(--card)] opacity-5 rotate-12" />
                    </div>

                    <div class="grid lg:grid-cols-12 gap-6 items-start">
                        
                        <!-- Courses Sidebar -->
                        <div class="lg:col-span-4 space-y-4">
                            <div class="flex items-center gap-2 mb-2 border-b border-[var(--border)] pb-3">
                                <BookOpen class="h-4 w-4 text-[var(--muted-foreground)]" />
                                <h2 class="text-[12px] font-normal uppercase tracking-widest text-[var(--foreground)]">الكورسات المسجلة</h2>
                            </div>
                            
                            <div class="grid gap-3">
                                <Card v-for="course in courses" :key="course.id" 
                                    :class="[
                                        'border-[var(--border)] shadow-none bg-[var(--card)] rounded-md cursor-pointer',
                                        selectedCourse?.id === course.id ? 'border-[var(--primary)] ring-1 ring-[var(--primary)]' : 'hover:border-[var(--muted-foreground)]'
                                    ]"
                                    @click="scanCourse(course.id)"
                                >
                                    <CardContent class="p-4 flex items-center justify-between bg-[var(--card)] rounded-md">
                                        <div class="space-y-1">
                                            <h3 class="font-normal text-[12px] text-[var(--foreground)] line-clamp-1">{{ course.title }}</h3>
                                            <div class="flex items-center gap-2 text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">
                                                <span>{{ course.lessons_count }} درس</span>
                                                <div class="h-1 w-1 bg-[var(--border)] rounded-full"></div>
                                                <span>{{ course.category?.name }}</span>
                                            </div>
                                        </div>
                                        <div :class="[
                                            'h-8 w-8 rounded flex items-center justify-center border',
                                            isScanning && selectedCourse?.id === course.id 
                                                ? 'bg-[var(--primary)] text-white border-[var(--primary)] animate-pulse' 
                                                : 'bg-[var(--muted)] text-[var(--muted-foreground)] border-[var(--border)]'
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
                            <div class="flex items-center justify-between mb-2 border-b border-[var(--border)] pb-3">
                                <div class="flex items-center gap-2">
                                    <ShieldAlert class="h-4 w-4 text-[var(--muted-foreground)]" />
                                    <h2 class="text-[12px] font-normal uppercase tracking-widest text-[var(--foreground)]">تقرير التدقيق التقني</h2>
                                </div>
                                <div v-if="scanReport" class="flex items-center gap-2">
                                    <Badge variant="secondary" class="h-5 text-[9px] font-normal uppercase tracking-widest bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] rounded px-2">{{ scanReport.length }} ملاحظات مكتشفة</Badge>
                                </div>
                            </div>
                            
                            <!-- Initial State -->
                            <div v-if="!selectedCourse && !isScanning" class="flex flex-col items-center justify-center p-16 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] text-center min-h-[400px] shadow-none">
                                <SearchX class="h-16 w-16 text-[var(--muted-foreground)] opacity-40 mb-4" />
                                <h3 class="text-[13px] font-normal text-[var(--foreground)] uppercase">بدء الفحص الذكي</h3>
                                <p class="text-[11px] text-[var(--muted-foreground)] font-normal max-w-xs mt-2 leading-relaxed">يرجى تحديد كورس من القائمة الجانبية لبدء عملية تحليل المحتوى واكتشاف التقنيات المتقادمة.</p>
                            </div>

                            <!-- Scanning State -->
                            <div v-else-if="isScanning" class="flex flex-col items-center justify-center p-16 border border-[var(--border)] rounded-md bg-[var(--card)] text-center min-h-[400px] shadow-none">
                                <div class="relative mb-6">
                                    <div class="h-16 w-16 rounded-full border-4 border-[var(--muted)] border-t-[var(--primary)] animate-spin"></div>
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <Zap class="h-6 w-6 text-[var(--primary)]" />
                                    </div>
                                </div>
                                <h3 class="text-[14px] font-normal text-[var(--foreground)] uppercase tracking-tight">جاري مسح وتحليل المحتوى...</h3>
                                <p class="text-[11px] text-[var(--muted-foreground)] font-normal mt-2 max-w-sm leading-relaxed">يقوم المحرك الذكي الآن بمراجعة نصوص الدروس ومقارنتها بقواعد البيانات الحديثة لاكتشاف أي فجوات تقنية.</p>
                            </div>

                            <!-- Error State -->
                            <div v-else-if="scanError" class="p-6 bg-red-50 border border-red-100 rounded-md text-center">
                                <div class="inline-flex h-10 w-10 rounded-full bg-red-100 text-red-600 items-center justify-center mb-3"><AlertTriangle class="h-5 w-5" /></div>
                                <h3 class="text-[13px] font-normal text-red-900">{{ scanError }}</h3>
                            </div>

                            <!-- Report Results -->
                            <div v-else-if="scanReport" class="space-y-4">
                                <div v-if="scanReport.length === 0" class="p-16 bg-[#fffbf0] border border-[var(--border)] rounded-md text-center shadow-none">
                                    <div class="inline-flex h-20 w-20 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--primary)] items-center justify-center mb-6 shadow-none"><CheckCircle2 class="h-10 w-10" /></div>
                                    <h3 class="text-[16px] font-normal text-[var(--foreground)] uppercase">محتوى حديث وبجودة عالية!</h3>
                                    <p class="text-[11px] text-[var(--muted-foreground)] font-normal max-w-md mx-auto mt-2 leading-relaxed">لم يتم اكتشاف أي تقنيات متقادمة أو ممارسات برمجية قديمة في هذا الكورس. استمر في الحفاظ على هذا المعيار.</p>
                                </div>

                                <div v-else class="grid gap-4">
                                    <Card v-for="(item, idx) in scanReport" :key="idx" class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden hover:border-[var(--muted-foreground)]">
                                        <CardContent class="p-5 space-y-4 bg-[var(--card)]">
                                            <div class="flex items-center justify-between border-b border-[var(--border)] pb-4">
                                                <Badge variant="outline" :class="['h-5 text-[9px] font-normal uppercase tracking-widest px-3 border rounded', getSeverityColor(item.severity)]">
                                                    {{ getSeverityText(item.severity) }}
                                                </Badge>
                                                <div class="text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-1.5">
                                                    <BookOpen class="h-3 w-3 opacity-55 text-[var(--primary)]" /> {{ item.lesson }}
                                                </div>
                                            </div>
                                            
                                            <div class="space-y-1.5">
                                                <h4 class="text-[14px] font-normal text-[var(--foreground)] leading-tight uppercase tracking-tight">{{ item.issue }}</h4>
                                                <p class="text-[11px] text-[var(--muted-foreground)] font-normal leading-relaxed italic">تم الاكتشاف بواسطة محرك الفحص الذكي</p>
                                            </div>

                                            <div class="p-4 bg-[var(--muted)] rounded-md border border-[var(--border)] flex items-start gap-3">
                                                <div class="h-6 w-6 rounded bg-[var(--card)] border border-[var(--border)] flex items-center justify-center shrink-0 shadow-none text-[var(--primary)]"><Zap class="h-3 w-3" /></div>
                                                <div class="space-y-1">
                                                    <span class="text-[10px] font-normal text-[var(--foreground)] uppercase tracking-widest">توصية التحديث:</span>
                                                    <p class="text-[12px] text-[var(--foreground)] font-normal leading-relaxed">{{ item.suggestion }}</p>
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
