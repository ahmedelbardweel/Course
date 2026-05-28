<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from '@/Components/ui/card';
import { Separator } from '@/Components/ui/separator';
import { 
    ChevronLeft, 
    Save, 
    PlusCircle, 
    Trash2,
    Edit,
    BookOpen,
    Layout,
    Settings,
    PlayCircle,
    Info,
    Layers,
    DollarSign,
    Image as ImageIcon
} from 'lucide-vue-next';
import { router } from '@inertiajs/vue3';
import { Badge } from '@/Components/ui/badge';

const props = defineProps({
    course: Object,
    categories: Array
});

const form = useForm({
    title: props.course?.title || '',
    category_id: props.course?.category_id || '',
    description: props.course?.description || '',
    price: props.course?.price || 0,
    level: props.course?.level || 'beginner',
    thumbnail: props.course?.thumbnail || '',
    is_published: props.course?.is_published || false,
    allow_study_rooms: props.course?.allow_study_rooms ?? true,
    allow_timed_comments: props.course?.allow_timed_comments ?? true,
});

const submit = () => {
    if (props.course) {
        form.patch(route('teacher.courses.update', props.course.id));
    } else {
        form.post(route('teacher.courses.store'));
    }
};

const deleteLesson = (id) => {
    if (confirm('هل أنت متأكد من حذف هذا الدرس؟')) {
        router.delete(route('teacher.lessons.destroy', id));
    }
};
</script>

<template>
    <Head :title="course ? 'تعديل الكورس' : 'إنشاء كورس جديد'" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم', url: route('teacher.dashboard') },
        { label: 'الكورسات', url: route('teacher.courses.index') },
        { label: course ? 'تعديل الكورس' : 'إنشاء جديد' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none">
                <div></div>
                <div class="flex items-center gap-2">
                    <Link :href="route('teacher.courses.index')">
                        <Button variant="ghost" size="sm" class="h-7 text-[11px] px-3 font-normal text-[var(--muted-foreground)] hover:text-[var(--foreground)] bg-transparent">إلغاء</Button>
                    </Link>
                    <Button size="sm" @click="submit" :disabled="form.processing" class="h-7 text-[11px] px-6 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 shadow-none">
                        <Save class="ml-1.5 h-3 w-3" /> {{ course ? 'حفظ' : 'نشر' }}
                    </Button>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full mx-auto">
                    
                    <!-- Sidebar: General Settings -->
                    <aside class="w-full lg:w-80 space-y-4 shrink-0">
                        <Card class="border-[var(--border)] shadow-none rounded-md bg-[var(--card)]">
                            <CardHeader class="p-3 border-b border-[var(--border)] bg-[var(--card)]">
                                <CardTitle class="text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--foreground)]">
                                    <Settings class="h-3.5 w-3.5 text-[var(--muted-foreground)]" /> الإعدادات العامة
                                </CardTitle>
                            </CardHeader>
                            <CardContent class="p-3 space-y-4 bg-[var(--card)]">
                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">التصنيف *</Label>
                                    <select v-model="form.category_id" :class="['w-full h-8.5 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-2.5 text-[12px] font-normal focus:ring-1 focus:ring-[var(--primary)] outline-none leading-none', form.errors.category_id ? 'border-destructive' : '']">
                                        <option value="" disabled>اختر التصنيف...</option>
                                        <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
                                    </select>
                                    <p v-if="form.errors.category_id" class="text-[10px] text-destructive italic">{{ form.errors.category_id }}</p>
                                </div>

                                <div class="space-y-1.5">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">المستوى</Label>
                                    <div class="grid grid-cols-1 gap-1">
                                        <button 
                                            type="button" 
                                            v-for="lvl in ['beginner', 'intermediate', 'advanced']" 
                                            :key="lvl"
                                            @click="form.level = lvl"
                                            :class="[form.level === lvl ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:border-[var(--muted-foreground)]']"
                                            class="px-3 py-1.5 rounded-md text-[11px] font-normal text-right border"
                                        >
                                            {{ lvl === 'beginner' ? 'مبتدئ' : (lvl === 'intermediate' ? 'متوسط' : 'متقدم') }}
                                        </button>
                                    </div>
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">السعر ($)</Label>
                                    <div class="relative">
                                        <DollarSign class="absolute left-2.5 top-2 h-3.5 w-3.5 text-[var(--muted-foreground)]" />
                                        <Input type="number" v-model="form.price" class="h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]" />
                                    </div>
                                </div>

                                <Separator class="my-1 border-[var(--border)]" />

                                <div class="space-y-2">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">الصورة المصغرة</Label>
                                    <Input v-model="form.thumbnail" placeholder="رابط الصورة..." class="h-8.5 text-[11px] px-2.5 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]" />
                                    <div v-if="form.thumbnail" class="aspect-video rounded-md overflow-hidden border border-[var(--border)] mt-2 bg-[var(--muted)] flex items-center justify-center">
                                        <img :src="form.thumbnail" class="w-full h-full object-cover" />
                                    </div>
                                </div>

                                <Separator class="my-1 border-[var(--border)]" />

                                <div class="space-y-2 pt-1">
                                    <div class="flex items-center gap-2">
                                        <input type="checkbox" v-model="form.is_published" id="published" class="h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]">
                                        <Label for="published" class="text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none">نشر الكورس للطلاب</Label>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <input type="checkbox" v-model="form.allow_study_rooms" id="study" class="h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]">
                                        <Label for="study" class="text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none">تفعيل غرف الدراسة</Label>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <input type="checkbox" v-model="form.allow_timed_comments" id="comments" class="h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]">
                                        <Label for="comments" class="text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none">التعليقات الموقوتة</Label>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>

                    <!-- Main Content: Course Details & Lessons -->
                    <div class="flex-1 w-full space-y-4">
                        <Card class="border-[var(--border)] shadow-none rounded-md bg-[var(--card)] overflow-hidden">
                            <CardHeader class="p-3 border-b border-[var(--border)] bg-[var(--card)]">
                                <CardTitle class="text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--muted-foreground)]">
                                    <Info class="h-3.5 w-3.5" /> تفاصيل الكورس
                                </CardTitle>
                            </CardHeader>
                            <CardContent class="p-4 space-y-4 bg-[var(--card)]">
                                <div class="space-y-1.5">
                                    <Label class="text-[12px] font-normal text-[var(--foreground)]">عنوان الكورس *</Label>
                                    <Input v-model="form.title" placeholder="مثلاً: تطوير الويب الكامل باستخدام Laravel" class="h-9 text-[13px] font-normal px-3 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none" />
                                    <p v-if="form.errors.title" class="text-[10px] text-destructive">{{ form.errors.title }}</p>
                                </div>

                                <div class="space-y-1.5">
                                    <Label class="text-[12px] font-normal text-[var(--foreground)]">وصف الكورس</Label>
                                    <textarea v-model="form.description" rows="6" class="w-full min-h-[150px] rounded-md border border-[var(--border)] p-3 text-[13px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] leading-relaxed shadow-none bg-[var(--card)] text-[var(--foreground)]" placeholder="اكتب وصفاً جذاباً وشاملاً للكورس..."></textarea>
                                    <p v-if="form.errors.description" class="text-[10px] text-destructive">{{ form.errors.description }}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <!-- Methodology / Lessons Section -->
                        <Card v-if="course" class="border-[var(--border)] shadow-none rounded-md bg-[var(--card)] overflow-hidden">
                            <CardHeader class="p-3 border-b border-[var(--border)] bg-[var(--card)] flex flex-row items-center justify-between space-y-0">
                                <CardTitle class="text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--muted-foreground)]">
                                    <Layers class="h-3.5 w-3.5" /> منهج الكورس ({{ course.lessons?.length || 0 }} درس)
                                </CardTitle>
                                <Link :href="route('teacher.lessons.create', course.id)">
                                    <Button variant="outline" size="sm" class="h-7 text-[10px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-3 uppercase tracking-widest hover:bg-[var(--muted)]">
                                        <PlusCircle class="ml-1.5 h-3.5 w-3.5 text-[var(--primary)]" /> إضافة درس
                                    </Button>
                                </Link>
                            </CardHeader>
                            <CardContent class="p-0 bg-[var(--card)]">
                                <div v-if="course.lessons?.length === 0" class="p-12 text-center text-[var(--muted-foreground)] italic text-[12px]">
                                    لا توجد دروس مضافة لهذا الكورس حتى الآن.
                                </div>
                                <div v-else class="divide-y divide-[var(--border)]">
                                    <div v-for="(lesson, index) in course.lessons" :key="lesson.id" class="flex items-center justify-between p-3 hover:bg-[var(--muted)] group">
                                        <div class="flex items-center gap-3">
                                            <Badge variant="outline" class="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] font-normal border-[var(--border)] text-[var(--muted-foreground)] bg-[var(--muted)]">{{ index + 1 }}</Badge>
                                            <div>
                                                <div class="text-[12px] font-normal text-[var(--foreground)]">{{ lesson.title }}</div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100">
                                            <Button variant="ghost" size="icon" class="h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]">
                                                <Edit class="h-3.5 w-3.5" />
                                            </Button>
                                            <Button @click="deleteLesson(lesson.id)" variant="ghost" size="icon" class="h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500">
                                                <Trash2 class="h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
