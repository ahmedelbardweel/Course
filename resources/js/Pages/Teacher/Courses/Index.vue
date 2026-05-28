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
    Trash2,
    ChevronLeft,
    Plus,
    BookOpen,
    HelpCircle,
    Trophy,
    Check,
    X
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

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم', url: route('teacher.dashboard') },
        { label: 'إدارة الكورسات' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none">
                <div></div>
                <Link :href="route('teacher.courses.create')">
                    <Button size="sm" class="h-7 text-[11px] px-4 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95">
                        <Plus class="ml-1.5 h-3 w-3" /> إضافة كورس جديد
                    </Button>
                </Link>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-6 max-w-full mx-auto">
                    
                    <div v-if="courses.length === 0" class="flex flex-col items-center justify-center py-24 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none">
                        <BookOpen class="h-12 w-12 text-[var(--muted-foreground)] opacity-40 mb-4" />
                        <h3 class="text-[13px] font-normal text-[var(--foreground)]">لم تضف أي كورس بعد</h3>
                        <p class="text-[11px] text-[var(--muted-foreground)] mb-6">ابدأ الآن بمشاركة خبراتك وإنشاء أول محتوى تعليمي.</p>
                        <Link :href="route('teacher.courses.create')">
                            <Button variant="outline" size="sm" class="h-8 text-[11px] font-normal px-8 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)]">إنشاء كورس الآن</Button>
                        </Link>
                    </div>

                    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                        <Card v-for="course in courses" :key="course.id" class="group border-[var(--border)] shadow-none rounded-md overflow-hidden flex flex-col bg-[var(--card)] hover:border-[var(--muted-foreground)]">
                            
                            <!-- Thumbnail Area -->
                            <div class="aspect-video relative bg-[var(--muted)] overflow-hidden border-b border-[var(--border)]">
                                <img v-if="course.thumbnail" :src="course.thumbnail" class="w-full h-full object-cover" />
                                <div v-else class="w-full h-full flex items-center justify-center text-[var(--muted-foreground)]">
                                    <GraduationCap class="h-10 w-10 opacity-30" />
                                </div>
                                <div class="absolute top-2 left-2 flex flex-wrap gap-1">
                                    <Badge :variant="course.is_published ? 'default' : 'outline'" class="h-4 text-[8px] font-normal uppercase tracking-widest px-1.5 shadow-none rounded bg-[var(--card)] text-[var(--foreground)] border-[var(--border)]">
                                        {{ course.is_published ? 'منشور' : 'مسودة' }}
                                    </Badge>
                                    <Badge v-if="course.allow_study_rooms" variant="secondary" class="h-4 text-[7px] font-normal uppercase px-1.5 bg-[var(--accent)] border border-[var(--border)] text-[var(--foreground)] rounded">
                                        غرفة مذاكرة
                                    </Badge>
                                </div>
                                <div class="absolute bottom-2 right-2">
                                    <Badge variant="secondary" class="h-4 text-[8px] font-normal px-1.5 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded">
                                        {{ getLevelBadge(course.level) }}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader class="p-3 space-y-1.5 pb-2 bg-[var(--card)]">
                                <div class="flex items-center justify-between">
                                    <span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">{{ course.category?.name || 'عام' }}</span>
                                    <div class="flex items-center gap-2">
                                        <div class="flex items-center gap-1 text-[var(--muted-foreground)]">
                                            <Users class="h-3 w-3 opacity-55" />
                                            <span class="text-[9px] font-normal">{{ course.users_count || 0 }}</span>
                                        </div>
                                    </div>
                                </div>
                                <CardTitle class="text-[12px] font-normal text-[var(--foreground)] line-clamp-1">{{ course.title }}</CardTitle>
                            </CardHeader>

                            <CardContent class="px-3 pb-3 pt-0 flex-1 space-y-3 bg-[var(--card)]">
                                <p class="text-[10px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed">
                                    {{ course.description }}
                                </p>
                                
                                <!-- Detailed Stats -->
                                <div class="grid grid-cols-3 gap-1 pt-1 border-t border-[var(--border)]">
                                    <div class="flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]">
                                        <PlayCircle class="h-3 w-3 text-[var(--muted-foreground)] mb-1" />
                                        <span class="text-[10px] font-normal text-[var(--foreground)]">{{ course.lessons_count || 0 }}</span>
                                        <span class="text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter">درس</span>
                                    </div>
                                    <div class="flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]">
                                        <HelpCircle class="h-3 w-3 text-[var(--muted-foreground)] mb-1" />
                                        <span class="text-[10px] font-normal text-[var(--foreground)]">{{ course.quizzes_count || 0 }}</span>
                                        <span class="text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter">اختبار</span>
                                    </div>
                                    <div class="flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]">
                                        <Trophy class="h-3 w-3 text-[var(--muted-foreground)] mb-1" />
                                        <span class="text-[10px] font-normal text-[var(--foreground)]">{{ course.challenges_count || 0 }}</span>
                                        <span class="text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter">تحدي</span>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter class="p-2 border-t border-[var(--border)] bg-[var(--muted)] flex flex-col gap-2">
                                <!-- Feature Status Indicators -->
                                <div class="flex items-center gap-3 px-1 w-full justify-between">
                                    <div class="flex items-center gap-1">
                                        <div :class="['h-3.5 w-3.5 rounded-full flex items-center justify-center border', course.is_published ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]']">
                                            <Check v-if="course.is_published" class="h-2 w-2" />
                                            <X v-else class="h-2 w-2" />
                                        </div>
                                        <span :class="['text-[8.5px] font-normal', course.is_published ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]']">منشور</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <div :class="['h-3.5 w-3.5 rounded-full flex items-center justify-center border', course.allow_study_rooms ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]']">
                                            <Check v-if="course.allow_study_rooms" class="h-2 w-2" />
                                            <X v-else class="h-2 w-2" />
                                        </div>
                                        <span :class="['text-[8.5px] font-normal', course.allow_study_rooms ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]']">غرف مذاكرة</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <div :class="['h-3.5 w-3.5 rounded-full flex items-center justify-center border', course.allow_timed_comments ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]']">
                                            <Check v-if="course.allow_timed_comments" class="h-2 w-2" />
                                            <X v-else class="h-2 w-2" />
                                        </div>
                                        <span :class="['text-[8.5px] font-normal', course.allow_timed_comments ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]']">موقتة</span>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between border-t border-[var(--border)] pt-2 w-full">
                                    <div class="font-normal text-xs text-[var(--foreground)] px-1">
                                        {{ course.price > 0 ? '$' + course.price : 'مجاني' }}
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <Link :href="route('teacher.courses.edit', course.id)">
                                            <Button variant="ghost" size="icon" class="h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]">
                                                <Edit class="h-3.5 w-3.5" />
                                            </Button>
                                        </Link>
                                        <Button @click="deleteCourse(course.id)" variant="ghost" size="icon" class="h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500">
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
