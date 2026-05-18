<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    learning_goal: '', // New field for data collection
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="إنشاء حساب جديد" />

        <div class="mb-6">
            <h1 class="text-2xl font-bold tracking-tight">ابدأ رحلتك اليوم</h1>
            <p class="text-sm text-zinc-500 mt-1">انضم إلى مجتمع "كورس" وابدأ في بناء مستقبلك.</p>
        </div>

        <form @submit.prevent="submit" class="space-y-4">
            <div class="space-y-2">
                <Label for="name">الاسم الكامل</Label>
                <Input
                    id="name"
                    type="text"
                    class="h-10 border-zinc-200 focus-visible:ring-black"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                    placeholder="أحمد محمد"
                />
                <p v-if="form.errors.name" class="text-xs font-bold text-red-600">{{ form.errors.name }}</p>
            </div>

            <div class="space-y-2">
                <Label for="email">البريد الإلكتروني</Label>
                <Input
                    id="email"
                    type="email"
                    class="h-10 border-zinc-200 focus-visible:ring-black"
                    v-model="form.email"
                    required
                    autocomplete="username"
                    placeholder="name@example.com"
                />
                <p v-if="form.errors.email" class="text-xs font-bold text-red-600">{{ form.errors.email }}</p>
            </div>

            <div class="space-y-2">
                <Label for="learning_goal">ما هو هدفك التعليمي؟ (اختياري)</Label>
                <Input
                    id="learning_goal"
                    type="text"
                    class="h-10 border-zinc-200 focus-visible:ring-black"
                    v-model="form.learning_goal"
                    placeholder="مثلاً: تعلم تطوير تطبيقات الموبايل"
                />
                <p class="text-[10px] text-zinc-400">نستخدم هذه البيانات لتخصيص المحتوى المناسب لك.</p>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                    <Label for="password">كلمة المرور</Label>
                    <Input
                        id="password"
                        type="password"
                        class="h-10 border-zinc-200 focus-visible:ring-black"
                        v-model="form.password"
                        required
                        autocomplete="new-password"
                    />
                </div>
                <div class="space-y-2">
                    <Label for="password_confirmation">تأكيد الكلمة</Label>
                    <Input
                        id="password_confirmation"
                        type="password"
                        class="h-10 border-zinc-200 focus-visible:ring-black"
                        v-model="form.password_confirmation"
                        required
                        autocomplete="new-password"
                    />
                </div>
                <p v-if="form.errors.password" class="col-span-2 text-xs font-bold text-red-600">{{ form.errors.password }}</p>
            </div>

            <Button
                class="w-full h-11 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
            >
                إنشاء الحساب
            </Button>

            <div class="mt-6 text-center text-sm">
                <span class="text-zinc-500">لديك حساب بالفعل؟ </span>
                <Link :href="route('login')" class="font-bold underline underline-offset-4">سجل دخولك</Link>
            </div>
        </form>
    </GuestLayout>
</template>
