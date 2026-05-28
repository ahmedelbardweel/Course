<script setup>
import { ref } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Checkbox } from '@/Components/ui/checkbox';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-vue-next';

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

const showPassword = ref(false);

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="تسجيل الدخول - كورس" />

        <div class="mb-8 text-center sm:text-right">
            <h1 class="text-2xl font-semibold tracking-tight text-brand-ink">مرحباً بعودتك</h1>
            <p class="text-[13px] text-brand-body mt-1.5 leading-relaxed">سجل دخولك لمتابعة مسار تعلمك المخصص وتفاعل مع مساعد الذكاء الاصطناعي.</p>
        </div>

        <div v-if="status" class="mb-5 text-[12px] font-semibold text-brand-orange bg-white border border-brand-hairline p-3 rounded-md text-center flex items-center justify-center gap-2">
            {{ status }}
        </div>

        <form @submit.prevent="submit" class="space-y-5">
            <!-- Email Field -->
            <div class="space-y-2">
                <Label for="email" class="text-brand-ink font-semibold text-[11px] uppercase tracking-wider">البريد الإلكتروني</Label>
                <div class="relative group">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                        <Mail class="h-4 w-4" />
                    </span>
                    <Input
                        id="email"
                        type="email"
                        class="h-11 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md"
                        v-model="form.email"
                        required
                        autofocus
                        autocomplete="username"
                        placeholder="name@example.com"
                    />
                </div>
                <div v-if="form.errors.email" class="text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5">
                    <AlertCircle class="h-3.5 w-3.5 shrink-0" />
                    {{ form.errors.email }}
                </div>
            </div>

            <!-- Password Field -->
            <div class="space-y-2">
                <div class="flex items-center justify-between">
                    <Label for="password" class="text-brand-ink font-semibold text-[11px] uppercase tracking-wider">كلمة المرور</Label>
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="text-[11px] font-semibold text-brand-muted hover:underline underline-offset-4"
                    >
                        نسيت كلمة المرور؟
                    </Link>
                </div>
                <div class="relative group">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                        <Lock class="h-4 w-4" />
                    </span>
                    <Input
                        id="password"
                        :type="showPassword ? 'text' : 'password'"
                        class="h-11 pr-10 pl-10 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md"
                        v-model="form.password"
                        required
                        placeholder="••••••••"
                        autocomplete="current-password"
                    />
                    <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-muted"
                    >
                        <Eye v-if="showPassword" class="h-4 w-4" />
                        <EyeOff v-else class="h-4 w-4" />
                    </button>
                </div>
                <div v-if="form.errors.password" class="text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5">
                    <AlertCircle class="h-3.5 w-3.5 shrink-0" />
                    {{ form.errors.password }}
                </div>
            </div>

            <!-- Remember Me -->
            <div class="flex items-center space-x-2 space-x-reverse py-1">
                <Checkbox id="remember" v-model:checked="form.remember" class="border border-brand-hairline rounded text-brand-orange focus:ring-brand-orange bg-white" />
                <Label for="remember" class="text-[12px] font-medium text-brand-body cursor-pointer select-none">تذكرني على هذا الجهاز</Label>
            </div>

            <!-- Submit Button -->
            <Button
                class="w-full h-11 bg-brand-orange border border-brand-orange text-white font-semibold rounded-md flex items-center justify-center gap-2 mt-2"
                :class="{ 'opacity-80 cursor-not-allowed': form.processing }"
                :disabled="form.processing"
            >
                <Loader2 v-if="form.processing" class="h-4 w-4 animate-spin" />
                <span>تسجيل الدخول</span>
            </Button>

            <!-- Bottom Link -->
            <div class="mt-6 text-center text-[12px]">
                <span class="text-brand-body">ليس لديك حساب؟ </span>
                <Link :href="route('register')" class="font-semibold text-brand-ink hover:underline underline-offset-4">انضم إلينا الآن</Link>
            </div>
        </form>
    </GuestLayout>
</template>
