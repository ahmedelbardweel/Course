<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { 
    PlayCircle, 
    CheckCircle2, 
    Trophy, 
    BookOpen, 
    Clock,
    ChevronLeft,
    Layers,
    ArrowRight,
    SearchX
} from 'lucide-vue-next';

defineProps({
    enrolledCourses: Array
});
</script>

<template>
    <Head title="دوراتي ومسار التعلم" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'الرئيسية', url: route('dashboard') },
        { label: 'دوراتي' }
    ]">
        <template #header-actions>
            <Badge variant="outline" class="h-5 text-[9px] font-normal uppercase tracking-widest border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]">{{ enrolledCourses.length }} كورس نشط</Badge>
        </template>

        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">
            
            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full space-y-6 max-w-full mx-auto">
                    
                    <!-- Stats Overview -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4" v-if="enrolledCourses.length > 0">
                        <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md p-3 flex items-center gap-3">
                            <div class="h-8 w-8 rounded-md bg-[var(--muted)] text-[var(--foreground)] flex items-center justify-center border border-[var(--border)]"><CheckCircle2 class="h-4 w-4" /></div>
                            <div>
                                <div class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest leading-none">الكورسات المكتملة</div>
                                <div class="text-[12px] font-normal mt-0.5 text-[var(--foreground)]">{{ enrolledCourses.filter(c => c.progress === 100).length }} دورات</div>
                            </div>
                        </Card>
                        <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md p-3 flex items-center gap-3">
                            <div class="h-8 w-8 rounded-md bg-[var(--muted)] text-[var(--foreground)] flex items-center justify-center border border-[var(--border)]"><Layers class="h-4 w-4" /></div>
                            <div>
                                <div class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest leading-none">قيد الدراسة</div>
                                <div class="text-[12px] font-normal mt-0.5 text-[var(--foreground)]">{{ enrolledCourses.filter(c => c.progress < 100).length }} دورات</div>
                            </div>
                        </Card>
                        <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md p-3 flex items-center gap-3">
                            <div class="h-8 w-8 rounded-md bg-[var(--muted)] text-[var(--foreground)] flex items-center justify-center border border-[var(--border)]"><Trophy class="h-4 w-4" /></div>
                            <div>
                                <div class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest leading-none">إجمالي الإنجاز</div>
                                <div class="text-[12px] font-normal mt-0.5 text-[var(--foreground)]">{{ Math.round(enrolledCourses.reduce((acc, c) => acc + c.progress, 0) / (enrolledCourses.length || 1)) }}%</div>
                            </div>
                        </Card>
                    </div>

                    <!-- Empty State -->
                    <div v-if="enrolledCourses.length === 0" class="flex flex-col items-center justify-center py-32 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none">
                        <SearchX class="h-12 w-12 text-[var(--accent)] mb-4" />
                        <h3 class="text-[13px] font-normal text-[var(--foreground)]">لم تبدأ رحلتك التعليمية بعد</h3>
                        <p class="text-[11px] text-[var(--muted-foreground)] mb-6 text-center max-w-xs leading-relaxed">استكشف الكورسات المتاحة وابدأ أول خطوة في رحلتك التعليمية اليوم بضغطة زر واحدة.</p>
                        <Link :href="route('courses.index')">
                            <Button class="h-9 text-[11px] font-normal px-8 rounded-md bg-[var(--primary)] text-white border-none shadow-none">تصفح الكورسات الآن</Button>
                        </Link>
                    </div>

                    <!-- Courses Grid -->
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                        <Card v-for="course in enrolledCourses" :key="course.id" class="border-[var(--border)] shadow-none rounded-md overflow-hidden flex flex-col bg-[var(--card)]">
                            <div class="aspect-video relative overflow-hidden bg-[var(--muted)] border-b border-[var(--border)]">
                                <img v-if="course.thumbnail" :src="course.thumbnail" class="w-full h-full object-cover" />
                                <div v-else class="h-full w-full flex items-center justify-center text-[var(--muted-foreground)]">
                                    <PlayCircle class="h-10 w-10 opacity-20" />
                                </div>
                                <div class="absolute top-2 left-2 flex gap-1.5">
                                    <Badge v-if="course.progress === 100" class="h-4 text-[8px] font-normal uppercase tracking-widest px-2 bg-[var(--primary)] text-white border-none shadow-none">
                                        مكتمل <CheckCircle2 class="mr-1 h-2.5 w-2.5" />
                                    </Badge>
                                    <Badge v-else class="h-4 text-[8px] font-normal uppercase tracking-widest px-2 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] shadow-none">
                                        قيد التعلم
                                    </Badge>
                                </div>
                            </div>
                            
                            <CardHeader class="p-3 space-y-1">
                                <div class="text-[9px] font-normal uppercase tracking-[0.2em] text-[var(--muted-foreground)]">{{ course.category?.name || 'عام' }}</div>
                                <CardTitle class="text-[12px] font-normal text-[var(--foreground)] line-clamp-1 leading-tight">{{ course.title }}</CardTitle>
                            </CardHeader>

                            <CardContent class="p-3 pt-0 space-y-3">
                                <div class="space-y-1.5">
                                    <div class="flex justify-between text-[10px] font-normal uppercase tracking-widest">
                                        <span class="text-[var(--muted-foreground)]">التقدم: {{ course.progress }}%</span>
                                        <span class="text-[var(--foreground)]">{{ course.completed_lessons_count }}/{{ course.lessons_count }}</span>
                                    </div>
                                    <div class="w-full h-1.5 bg-[var(--accent)] rounded-full overflow-hidden">
                                        <div 
                                            class="h-full bg-[var(--primary)]" 
                                            :style="`width: ${course.progress}%`"
                                        ></div>
                                    </div>
                                </div>
                                <Link :href="route('courses.show', course.slug)" class="block w-full pt-1">
                                    <Button variant="outline" size="sm" class="w-full h-8 text-[11px] font-normal border-[var(--border)] rounded-md shadow-none">
                                        {{ course.progress === 100 ? 'مراجعة المادة' : 'متابعة التعلم' }} <ArrowRight class="mr-2 h-3 w-3 opacity-50" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
