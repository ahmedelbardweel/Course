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

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>الرئيسية</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-black">مساري التعليمي</span>
                </div>
                <div class="flex items-center gap-2">
                    <Badge variant="outline" class="h-5 text-[9px] font-black uppercase tracking-widest border-zinc-200 bg-zinc-50">{{ enrolledCourses.length }} كورس نشط</Badge>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full space-y-6 max-w-full mx-auto">
                    
                    <!-- Stats Overview (Optional, but looks premium) -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4" v-if="enrolledCourses.length > 0">
                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg p-3 flex items-center gap-3">
                            <div class="h-8 w-8 rounded bg-zinc-100 text-zinc-900 flex items-center justify-center border border-zinc-200"><CheckCircle2 class="h-4 w-4" /></div>
                            <div>
                                <div class="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none">الكورسات المكتملة</div>
                                <div class="text-[12px] font-black mt-0.5">{{ enrolledCourses.filter(c => c.progress === 100).length }} دورات</div>
                            </div>
                        </Card>
                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg p-3 flex items-center gap-3">
                            <div class="h-8 w-8 rounded bg-zinc-100 text-zinc-900 flex items-center justify-center border border-zinc-200"><Layers class="h-4 w-4" /></div>
                            <div>
                                <div class="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none">قيد الدراسة</div>
                                <div class="text-[12px] font-black mt-0.5">{{ enrolledCourses.filter(c => c.progress < 100).length }} دورات</div>
                            </div>
                        </Card>
                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg p-3 flex items-center gap-3">
                            <div class="h-8 w-8 rounded bg-zinc-100 text-zinc-900 flex items-center justify-center border border-zinc-200"><Trophy class="h-4 w-4" /></div>
                            <div>
                                <div class="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none">إجمالي الإنجاز</div>
                                <div class="text-[12px] font-black mt-0.5">{{ Math.round(enrolledCourses.reduce((acc, c) => acc + c.progress, 0) / (enrolledCourses.length || 1)) }}%</div>
                            </div>
                        </Card>
                    </div>

                    <!-- Empty State -->
                    <div v-if="enrolledCourses.length === 0" class="flex flex-col items-center justify-center py-32 border border-dashed border-zinc-200 rounded-xl bg-white shadow-sm">
                        <SearchX class="h-12 w-12 text-zinc-100 mb-4" />
                        <h3 class="text-[13px] font-black text-zinc-900">لم تبدأ رحلتك التعليمية بعد</h3>
                        <p class="text-[11px] text-zinc-400 mb-6 text-center max-w-xs leading-relaxed">استكشف الكورسات المتاحة وابدأ أول خطوة في رحلتك التعليمية اليوم بضغطة زر واحدة.</p>
                        <Link :href="route('courses.index')">
                            <Button class="h-9 text-[11px] font-black px-8 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition-all border-none">تصفح الكورسات الآن</Button>
                        </Link>
                    </div>

                    <!-- Courses Grid -->
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                        <Card v-for="course in enrolledCourses" :key="course.id" class="border-zinc-200 shadow-none rounded-lg overflow-hidden flex flex-col bg-white group hover:border-zinc-400 transition-all duration-300">
                            <div class="aspect-video relative overflow-hidden bg-zinc-100 border-b border-zinc-50">
                                <img v-if="course.thumbnail" :src="course.thumbnail" class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                                <div v-else class="h-full w-full flex items-center justify-center text-zinc-300">
                                    <PlayCircle class="h-10 w-10 opacity-20" />
                                </div>
                                <div class="absolute top-2 left-2 flex gap-1.5">
                                    <Badge v-if="course.progress === 100" class="h-4 text-[8px] font-black uppercase tracking-widest px-2 bg-zinc-900 text-white border-none shadow-sm">
                                        مكتمل <CheckCircle2 class="mr-1 h-2.5 w-2.5" />
                                    </Badge>
                                    <Badge v-else class="h-4 text-[8px] font-black uppercase tracking-widest px-2 bg-white border border-zinc-200 text-zinc-900 shadow-sm">
                                        قيد التعلم
                                    </Badge>
                                </div>
                                <div class="absolute inset-0 bg-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            
                            <CardHeader class="p-3 space-y-1">
                                <div class="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">{{ course.category?.name || 'عام' }}</div>
                                <CardTitle class="text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:underline transition-colors leading-tight">{{ course.title }}</CardTitle>
                            </CardHeader>

                            <CardContent class="p-3 pt-0 space-y-3">
                                <div class="space-y-1.5">
                                    <div class="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                        <span class="text-zinc-400">التقدم: {{ course.progress }}%</span>
                                        <span class="text-zinc-900">{{ course.completed_lessons_count }}/{{ course.lessons_count }}</span>
                                    </div>
                                    <div class="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                                        <div 
                                            class="h-full bg-zinc-900 transition-all duration-1000 ease-out" 
                                            :style="`width: ${course.progress}%`"
                                        ></div>
                                    </div>
                                </div>
                                <Link :href="route('courses.show', course.slug)" class="block w-full pt-1">
                                    <Button variant="outline" size="sm" class="w-full h-8 text-[11px] font-black border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white transition-all rounded-md">
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
