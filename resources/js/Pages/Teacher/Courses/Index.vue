<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle 
} from '@/Components/ui/card';
import { 
    PlusCircle, 
    Edit, 
    Users, 
    PlayCircle,
    MoreHorizontal,
    ExternalLink,
    GraduationCap,
    LayoutGrid,
    List,
    Trash2
} from 'lucide-vue-next';
import { router } from '@inertiajs/vue3';

defineProps({
    courses: Array
});

const getLevelBadge = (level) => {
    switch (level) {
        case 'beginner': return 'مبتدئ';
        case 'intermediate': return 'متوسط';
        case 'advanced': return 'متقدم';
        default: return level;
    }
};

const deleteCourse = (id) => {
    if (confirm('هل أنت متأكد من حذف هذا الكورس؟ سيتم حذف جميع الدروس والبيانات المرتبطة به.')) {
        router.delete(route('teacher.courses.destroy', id));
    }
};
</script>

<template>
    <Head title="إدارة الكورسات" />

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>لوحة التحكم</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-black">إدارة الكورسات</span>
                </div>
                <Link :href="route('teacher.courses.create')">
                    <Button size="sm" class="h-7 text-[11px] px-4 font-bold">
                        <Plus class="ml-1.5 h-3 w-3" /> إضافة كورس جديد
                    </Button>
                </Link>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-6 max-w-full mx-auto">
                    
                    <div v-if="courses.length === 0" class="flex flex-col items-center justify-center py-24 border border-dashed border-zinc-200 rounded-lg bg-white">
                        <BookOpen class="h-12 w-12 text-zinc-100 mb-4" />
                        <h3 class="text-[13px] font-bold text-zinc-900">لم تضف أي كورس بعد</h3>
                        <p class="text-[11px] text-zinc-400 mb-6">ابدأ الآن بمشاركة خبراتك وإنشاء أول محتوى تعليمي.</p>
                        <Link :href="route('teacher.courses.create')">
                            <Button variant="outline" size="sm" class="h-8 text-[11px] font-black px-8 border-zinc-200">إنشاء كورس الآن</Button>
                        </Link>
                    </div>

                    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                        <Card v-for="course in courses" :key="course.id" class="group border-zinc-200 shadow-none rounded-lg overflow-hidden flex flex-col bg-white hover:border-zinc-400 transition-all duration-200">
                            
                            <!-- Thumbnail Area -->
                            <div class="aspect-video relative bg-zinc-100 overflow-hidden border-b border-zinc-100">
                                <img v-if="course.thumbnail" :src="course.thumbnail" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div v-else class="w-full h-full flex items-center justify-center text-zinc-300">
                                    <GraduationCap class="h-10 w-10 opacity-30" />
                                </div>
                                <div class="absolute top-2 left-2 flex flex-wrap gap-1">
                                    <Badge :variant="course.is_published ? 'default' : 'outline'" class="h-4 text-[8px] font-black uppercase tracking-widest px-1.5 shadow-sm">
                                        {{ course.is_published ? 'منشور' : 'مسودة' }}
                                    </Badge>
                                    <Badge v-if="course.allow_study_rooms" variant="secondary" class="h-4 text-[7px] font-black uppercase px-1 bg-white/90 border-zinc-200 text-indigo-600">
                                        غرفة مذاكرة
                                    </Badge>
                                </div>
                                <div class="absolute bottom-2 right-2">
                                    <Badge variant="secondary" class="h-4 text-[8px] font-bold px-1.5 bg-white/90 backdrop-blur-sm border-none text-zinc-900">
                                        {{ getLevelBadge(course.level) }}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader class="p-3 space-y-1.5 pb-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{{ course.category?.name || 'عام' }}</span>
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center gap-1 text-zinc-400">
                                            <Users class="h-3 w-3 opacity-50" />
                                            <span class="text-[9px] font-bold">{{ course.users_count || 0 }}</span>
                                        </div>
                                    </div>
                                </div>
                                <CardTitle class="text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">{{ course.title }}</CardTitle>
                            </CardHeader>

                            <CardContent class="px-3 pb-3 pt-0 flex-1 space-y-3">
                                <p class="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed">
                                    {{ course.description }}
                                </p>
                                
                                <!-- Detailed Stats -->
                                <div class="grid grid-cols-3 gap-1 pt-1 border-t border-zinc-50">
                                    <div class="flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50">
                                        <PlayCircle class="h-3 w-3 text-zinc-400 mb-1" />
                                        <span class="text-[10px] font-black">{{ course.lessons_count || 0 }}</span>
                                        <span class="text-[7px] font-bold text-zinc-400 uppercase tracking-tighter">درس</span>
                                    </div>
                                    <div class="flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50">
                                        <HelpCircle class="h-3 w-3 text-zinc-400 mb-1" />
                                        <span class="text-[10px] font-black">{{ course.quizzes_count || 0 }}</span>
                                        <span class="text-[7px] font-bold text-zinc-400 uppercase tracking-tighter">اختبار</span>
                                    </div>
                                    <div class="flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50">
                                        <Trophy class="h-3 w-3 text-zinc-400 mb-1" />
                                        <span class="text-[10px] font-black">{{ course.challenges_count || 0 }}</span>
                                        <span class="text-[7px] font-bold text-zinc-400 uppercase tracking-tighter">تحدي</span>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter class="p-2 border-t border-zinc-50 bg-zinc-50/30 flex flex-col gap-2">
                                <!-- Feature Status Indicators -->
                                <div class="flex items-center gap-3 px-1">
                                    <div class="flex items-center gap-1">
                                        <div :class="['h-3 w-3 rounded-full flex items-center justify-center', course.is_published ? 'bg-emerald-500 text-white' : 'bg-zinc-200 text-zinc-400']">
                                            <Check v-if="course.is_published" class="h-2 w-2" />
                                            <X v-else class="h-2 w-2" />
                                        </div>
                                        <span :class="['text-[9px] font-bold', course.is_published ? 'text-zinc-900' : 'text-zinc-400']">منشور</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <div :class="['h-3 w-3 rounded-full flex items-center justify-center', course.allow_study_rooms ? 'bg-emerald-500 text-white' : 'bg-zinc-200 text-zinc-400']">
                                            <Check v-if="course.allow_study_rooms" class="h-2 w-2" />
                                            <X v-else class="h-2 w-2" />
                                        </div>
                                        <span :class="['text-[9px] font-bold', course.allow_study_rooms ? 'text-zinc-900' : 'text-zinc-400']">غرف المذاكرة</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <div :class="['h-3 w-3 rounded-full flex items-center justify-center', course.allow_timed_comments ? 'bg-emerald-500 text-white' : 'bg-zinc-200 text-zinc-400']">
                                            <Check v-if="course.allow_timed_comments" class="h-2 w-2" />
                                            <X v-else class="h-2 w-2" />
                                        </div>
                                        <span :class="['text-[9px] font-bold', course.allow_timed_comments ? 'text-zinc-900' : 'text-zinc-400']">تعليقات موقوتة</span>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between border-t border-zinc-100/50 pt-2">
                                    <div class="font-black text-xs text-zinc-900 px-1">
                                        {{ course.price > 0 ? '$' + course.price : 'مجاني' }}
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <Link :href="route('teacher.courses.edit', course.id)">
                                            <Button variant="ghost" size="icon" class="h-7 w-7 rounded-md hover:bg-white hover:text-emerald-600 transition-all">
                                                <Edit class="h-3.5 w-3.5" />
                                            </Button>
                                        </Link>
                                        <Button @click="deleteCourse(course.id)" variant="ghost" size="icon" class="h-7 w-7 rounded-md text-zinc-200 hover:text-red-500 hover:bg-white transition-all">
                                            <Trash2 class="h-3.5 w-3.5" />
                                        </Button>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
