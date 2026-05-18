<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Checkbox } from '@/Components/ui/checkbox';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="تسجيل الدخول" />

        <div class="mb-6">
            <h1 class="text-2xl font-bold tracking-tight">مرحباً بعودتك</h1>
            <p class="text-sm text-zinc-500 mt-1">سجل دخولك لمتابعة رحلة التعلم الخاصة بك.</p>
        </div>

        <div v-if="status" class="mb-4 text-sm font-medium text-zinc-900 border-2 border-zinc-900 p-2 text-center">
            {{ status }}
        </div>

        <form @submit.prevent="submit" class="space-y-4">
            <div class="space-y-2">
                <Label for="email">البريد الإلكتروني</Label>
                <Input
                    id="email"
                    type="email"
                    class="h-10 border-zinc-200 focus-visible:ring-black"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    placeholder="name@example.com"
                />
                <p v-if="form.errors.email" class="text-xs font-bold text-red-600">{{ form.errors.email }}</p>
            </div>

            <div class="space-y-2">
                <div class="flex items-center justify-between">
                    <Label for="password">كلمة المرور</Label>
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="text-xs font-bold underline underline-offset-4"
                    >
                        نسيت كلمة المرور؟
                    </Link>
                </div>
                <Input
                    id="password"
                    type="password"
                    class="h-10 border-zinc-200 focus-visible:ring-black"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />
                <p v-if="form.errors.password" class="text-xs font-bold text-red-600">{{ form.errors.password }}</p>
            </div>

            <div class="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="remember" v-model:checked="form.remember" class="border-zinc-200" />
                <Label for="remember" class="text-sm font-medium leading-none cursor-pointer">تذكرني على هذا الجهاز</Label>
            </div>

            <Button
                class="w-full h-11 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
            >
                تسجيل الدخول
            </Button>

            <div class="mt-6 text-center text-sm">
                <span class="text-zinc-500">ليس لديك حساب؟ </span>
                <Link :href="route('register')" class="font-bold underline underline-offset-4">انضم إلينا الآن</Link>
            </div>
        </form>
    </GuestLayout>
</template>
