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

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <Link :href="route('teacher.courses.index')" class="hover:text-zinc-900 transition-colors">الكورسات</Link>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-bold tracking-tight">{{ course ? 'تعديل الكورس' : 'إنشاء جديد' }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <Link :href="route('teacher.courses.index')">
                        <Button variant="ghost" size="sm" class="h-7 text-[11px] px-3 font-medium">إلغاء</Button>
                    </Link>
                    <Button size="sm" @click="submit" :disabled="form.processing" class="h-7 text-[11px] px-6 font-bold shadow-sm">
                        <Save class="ml-1.5 h-3 w-3" /> {{ course ? 'حفظ' : 'نشر' }}
                    </Button>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full mx-auto">
                    
                    <!-- Sidebar: General Settings -->
                    <aside class="w-full lg:w-80 space-y-4 shrink-0">
                        <Card class="border-zinc-200 shadow-none rounded-md bg-white">
                            <CardHeader class="p-3 border-b border-zinc-50">
                                <CardTitle class="text-[12px] font-black flex items-center gap-2 uppercase tracking-tight">
                                    <Settings class="h-3.5 w-3.5 text-zinc-400" /> الإعدادات العامة
                                </CardTitle>
                            </CardHeader>
                            <CardContent class="p-3 space-y-4">
                                <div class="space-y-1">
                                    <Label class="text-[11px] font-bold text-zinc-500">التصنيف *</Label>
                                    <select v-model="form.category_id" :class="['w-full h-8.5 rounded-md border border-zinc-200 bg-white px-2.5 text-[12px] font-medium focus:ring-1 focus:ring-zinc-900 outline-none transition-all leading-none', form.errors.category_id ? 'border-destructive' : '']">
                                        <option value="" disabled>اختر التصنيف...</option>
                                        <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
                                    </select>
                                    <p v-if="form.errors.category_id" class="text-[10px] text-destructive italic">{{ form.errors.category_id }}</p>
                                </div>

                                <div class="space-y-1.5">
                                    <Label class="text-[11px] font-bold text-zinc-500">المستوى</Label>
                                    <div class="grid grid-cols-1 gap-1">
                                        <button 
                                            type="button" 
                                            v-for="lvl in ['beginner', 'intermediate', 'advanced']" 
                                            :key="lvl"
                                            @click="form.level = lvl"
                                            :class="[form.level === lvl ? 'bg-zinc-900 text-white border-zinc-900' : 'border-zinc-100 bg-zinc-50/30 text-zinc-400 hover:border-zinc-200']"
                                            class="px-3 py-1.5 rounded-md text-[11px] font-bold transition-all text-right border"
                                        >
                                            {{ lvl === 'beginner' ? 'مبتدئ' : (lvl === 'intermediate' ? 'متوسط' : 'متقدم') }}
                                        </button>
                                    </div>
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-bold text-zinc-500">السعر ($)</Label>
                                    <div class="relative">
                                        <DollarSign class="absolute left-2.5 top-2 h-3.5 w-3.5 text-zinc-300" />
                                        <Input type="number" v-model="form.price" class="h-8.5 text-[12px] font-bold text-center border-zinc-200" />
                                    </div>
                                </div>

                                <Separator class="my-1 opacity-50" />

                                <div class="space-y-2">
                                    <Label class="text-[11px] font-black text-zinc-300 uppercase tracking-widest">الصورة المصغرة</Label>
                                    <Input v-model="form.thumbnail" placeholder="رابط الصورة..." class="h-8.5 text-[11px] px-2.5" />
                                    <div v-if="form.thumbnail" class="aspect-video rounded-md overflow-hidden border border-zinc-100 mt-2 bg-zinc-50 flex items-center justify-center">
                                        <img :src="form.thumbnail" class="w-full h-full object-cover" />
                                    </div>
                                </div>

                                <Separator class="my-1 opacity-50" />

                                <div class="space-y-2 pt-1">
                                    <div class="flex items-center gap-2">
                                        <input type="checkbox" v-model="form.is_published" id="published" class="h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900">
                                        <Label for="published" class="text-[11px] font-bold cursor-pointer">نشر الكورس للطلاب</Label>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <input type="checkbox" v-model="form.allow_study_rooms" id="study" class="h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900">
                                        <Label for="study" class="text-[11px] font-bold cursor-pointer">تفعيل غرف الدراسة</Label>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <input type="checkbox" v-model="form.allow_timed_comments" id="comments" class="h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900">
                                        <Label for="comments" class="text-[11px] font-bold cursor-pointer">التعليقات الموقوتة</Label>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>

                    <!-- Main Content: Course Details & Lessons -->
                    <div class="flex-1 w-full space-y-4">
                        <Card class="border-zinc-200 shadow-none rounded-md bg-white overflow-hidden">
                            <CardHeader class="p-3 border-b border-zinc-50 bg-zinc-50/10">
                                <CardTitle class="text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-400">
                                    <Info class="h-3.5 w-3.5" /> تفاصيل الكورس
                                </CardTitle>
                            </CardHeader>
                            <CardContent class="p-4 space-y-4">
                                <div class="space-y-1.5">
                                    <Label class="text-[12px] font-bold text-zinc-900">عنوان الكورس *</Label>
                                    <Input v-model="form.title" placeholder="مثلاً: تطوير الويب الكامل باستخدام Laravel" class="h-9 text-[13px] font-bold px-3 border-zinc-200 focus-visible:ring-zinc-900 shadow-sm" />
                                    <p v-if="form.errors.title" class="text-[10px] text-destructive">{{ form.errors.title }}</p>
                                </div>

                                <div class="space-y-1.5">
                                    <Label class="text-[12px] font-bold text-zinc-900">وصف الكورس</Label>
                                    <textarea v-model="form.description" rows="6" class="w-full min-h-[150px] rounded-md border border-zinc-200 p-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-zinc-900 leading-relaxed shadow-inner bg-zinc-50/10" placeholder="اكتب وصفاً جذاباً وشاملاً للكورس..."></textarea>
                                    <p v-if="form.errors.description" class="text-[10px] text-destructive">{{ form.errors.description }}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <!-- Methodology / Lessons Section -->
                        <Card v-if="course" class="border-zinc-200 shadow-none rounded-md bg-white overflow-hidden">
                            <CardHeader class="p-3 border-b border-zinc-50 bg-zinc-50/10 flex flex-row items-center justify-between space-y-0">
                                <CardTitle class="text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-400">
                                    <Layers class="h-3.5 w-3.5" /> منهج الكورس ({{ course.lessons?.length || 0 }} درس)
                                </CardTitle>
                                <Link :href="route('teacher.lessons.create', course.id)">
                                    <Button variant="outline" size="sm" class="h-7 text-[10px] font-black border-zinc-200 px-3 uppercase tracking-widest hover:bg-zinc-900 hover:text-white">
                                        <PlusCircle class="ml-1.5 h-3.5 w-3.5" /> إضافة درس
                                    </Button>
                                </Link>
                            </CardHeader>
                            <CardContent class="p-0">
                                <div v-if="course.lessons?.length === 0" class="p-12 text-center text-zinc-400 italic text-[12px]">
                                    لا توجد دروس مضافة لهذا الكورس حتى الآن.
                                </div>
                                <div v-else class="divide-y divide-zinc-50">
                                    <div v-for="(lesson, index) in course.lessons" :key="lesson.id" class="flex items-center justify-between p-3 hover:bg-zinc-50/50 transition-all group">
                                        <div class="flex items-center gap-3">
                                            <Badge variant="outline" class="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] font-black border-zinc-200 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all">{{ index + 1 }}</Badge>
                                            <div>
                                                <div class="text-[12px] font-bold text-zinc-700 group-hover:text-zinc-900 transition-colors">{{ lesson.title }}</div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" class="h-7 w-7 rounded-md text-zinc-300 hover:text-emerald-600">
                                                <Edit class="h-3.5 w-3.5" />
                                            </Button>
                                            <Button @click="deleteLesson(lesson.id)" variant="ghost" size="icon" class="h-7 w-7 rounded-md text-zinc-300 hover:text-red-500">
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
