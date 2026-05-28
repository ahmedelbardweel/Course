<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { 
    ArrowRight, 
    Save, 
    Loader2, 
    Trophy, 
    Calendar, 
    Settings,
    ChevronLeft,
    Info
} from 'lucide-vue-next';
import { Separator } from '@/Components/ui/separator';

const props = defineProps({
    challenge: Object,
    courses: Array
});

const form = useForm({
    course_id: props.challenge?.course_id || '',
    title: props.challenge?.title || '',
    description: props.challenge?.description || '',
    points: props.challenge?.points || 100,
    start_date: props.challenge?.start_date ? new Date(props.challenge.start_date).toISOString().slice(0, 16) : '',
    end_date: props.challenge?.end_date ? new Date(props.challenge.end_date).toISOString().slice(0, 16) : '',
    is_active: props.challenge?.is_active ?? true
});

const submit = () => {
    if (props.challenge) {
        form.patch(route('teacher.challenges.update', props.challenge.id));
    } else {
        form.post(route('teacher.challenges.store'));
    }
};
</script>

<template>
    <Head :title="challenge ? 'تعديل التحدي' : 'إنشاء تحدي جديد'" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم', url: route('teacher.dashboard') },
        { label: 'التحديات', url: route('teacher.challenges.index') },
        { label: challenge ? 'تعديل التحدي' : 'إنشاء جديد' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none">
                <div></div>
                <div class="flex items-center gap-2">
                    <Link :href="route('teacher.challenges.index')">
                        <Button variant="ghost" size="sm" class="h-7 text-[11px] px-3 font-normal text-[var(--muted-foreground)] hover:text-[var(--foreground)] bg-transparent">إلغاء</Button>
                    </Link>
                    <Button size="sm" @click="submit" :disabled="form.processing" class="h-7 text-[11px] px-6 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 shadow-none">
                        <Save class="ml-1.5 h-3 w-3" /> {{ challenge ? 'حفظ التعديلات' : 'نشر التحدي' }}
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
                            <CardContent class="p-3 space-y-3.5 bg-[var(--card)]">
                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">الكورس المستهدف *</Label>
                                    <select v-model="form.course_id" :class="['w-full h-8.5 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-2.5 text-[12px] font-normal focus:ring-1 focus:ring-[var(--primary)] outline-none leading-none', form.errors.course_id ? 'border-destructive' : '']">
                                        <option value="" disabled>اختر الكورس...</option>
                                        <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.title }}</option>
                                    </select>
                                    <p v-if="form.errors.course_id" class="text-[10px] text-destructive italic">{{ form.errors.course_id }}</p>
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">النقاط الممنوحة</Label>
                                    <Input type="number" v-model="form.points" class="h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]" />
                                    <p v-if="form.errors.points" class="text-[10px] text-destructive">{{ form.errors.points }}</p>
                                </div>

                                <Separator class="my-1 border-[var(--border)]" />

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">تاريخ البدء</Label>
                                    <Input type="datetime-local" v-model="form.start_date" class="h-8.5 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]" />
                                </div>

                                <div class="space-y-1">
                                    <Label class="text-[11px] font-normal text-[var(--muted-foreground)]">تاريخ الانتهاء</Label>
                                    <Input type="datetime-local" v-model="form.end_date" class="h-8.5 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]" />
                                </div>

                                <div class="flex items-center gap-2 pt-1 border-t border-[var(--border)] mt-2">
                                    <input type="checkbox" v-model="form.is_active" id="is_active" class="h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]">
                                    <Label for="is_active" class="text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none">تفعيل التحدي الآن</Label>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>

                    <!-- Main Content: Description -->
                    <div class="flex-1 w-full space-y-4">
                        <Card class="border-[var(--border)] shadow-none rounded-md bg-[var(--card)]">
                            <CardHeader class="p-3 border-b border-[var(--border)] bg-[var(--card)]">
                                <CardTitle class="text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--muted-foreground)]">
                                    <Info class="h-3.5 w-3.5" /> تفاصيل التحدي
                                </CardTitle>
                            </CardHeader>
                            <CardContent class="p-4 space-y-5 bg-[var(--card)]">
                                <div class="space-y-1.5">
                                    <Label class="text-[12px] font-normal text-[var(--foreground)]">عنوان التحدي *</Label>
                                    <Input v-model="form.title" placeholder="مثلاً: حل مشكلة برمجية باستخدام Vue.js" class="h-9 text-[13px] font-normal px-3 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]" />
                                    <p v-if="form.errors.title" class="text-[10px] text-destructive">{{ form.errors.title }}</p>
                                </div>

                                <div class="space-y-1.5">
                                    <Label class="text-[12px] font-normal text-[var(--foreground)]">وصف التحدي والتعليمات</Label>
                                    <textarea v-model="form.description" rows="10" class="w-full min-h-[200px] rounded-md border border-[var(--border)] p-3 text-[13px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] leading-relaxed shadow-none bg-[var(--card)] text-[var(--foreground)]" placeholder="اشرح للطلاب ماذا يجب عليهم فعله وكيفية تسليم الحل..."></textarea>
                                    <p v-if="form.errors.description" class="text-[10px] text-destructive">{{ form.errors.description }}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
