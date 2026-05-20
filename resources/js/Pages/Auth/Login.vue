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
            <h1 class="text-2xl font-bold tracking-tight text-zinc-950">مرحباً بعودتك</h1>
            <p class="text-[13px] text-zinc-500 mt-1.5 leading-relaxed">سجل دخولك لمتابعة مسار تعلمك المخصص وتفاعل مع مساعد الذكاء الاصطناعي.</p>
        </div>

        <div v-if="status" class="mb-5 text-[12px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-center flex items-center justify-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            {{ status }}
        </div>

        <form @submit.prevent="submit" class="space-y-5">
            <!-- Email Field -->
            <div class="space-y-2">
                <Label for="email" class="text-zinc-700 font-semibold text-[11px] uppercase tracking-wider">البريد الإلكتروني</Label>
                <div class="relative group">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors">
                        <Mail class="h-4 w-4" />
                    </span>
                    <Input
                        id="email"
                        type="email"
                        class="h-11 pr-10 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-xl"
                        v-model="form.email"
                        required
                        autofocus
                        autocomplete="username"
                        placeholder="name@example.com"
                    />
                </div>
                <div v-if="form.errors.email" class="text-[11px] font-bold text-red-600 bg-red-50 border border-red-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5 mt-1.5">
                    <AlertCircle class="h-3.5 w-3.5 shrink-0" />
                    {{ form.errors.email }}
                </div>
            </div>

            <!-- Password Field -->
            <div class="space-y-2">
                <div class="flex items-center justify-between">
                    <Label for="password" class="text-zinc-700 font-semibold text-[11px] uppercase tracking-wider">كلمة المرور</Label>
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="text-[11px] font-bold text-zinc-500 hover:text-zinc-950 transition-colors underline underline-offset-4"
                    >
                        نسيت كلمة المرور؟
                    </Link>
                </div>
                <div class="relative group">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors">
                        <Lock class="h-4 w-4" />
                    </span>
                    <Input
                        id="password"
                        :type="showPassword ? 'text' : 'password'"
                        class="h-11 pr-10 pl-10 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-xl"
                        v-model="form.password"
                        required
                        placeholder="••••••••"
                        autocomplete="current-password"
                    />
                    <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 hover:text-zinc-950 transition-colors"
                    >
                        <Eye v-if="showPassword" class="h-4 w-4" />
                        <EyeOff v-else class="h-4 w-4" />
                    </button>
                </div>
                <div v-if="form.errors.password" class="text-[11px] font-bold text-red-600 bg-red-50 border border-red-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5 mt-1.5">
                    <AlertCircle class="h-3.5 w-3.5 shrink-0" />
                    {{ form.errors.password }}
                </div>
            </div>

            <!-- Remember Me -->
            <div class="flex items-center space-x-2 space-x-reverse py-1">
                <Checkbox id="remember" v-model:checked="form.remember" class="border-zinc-300 rounded focus:ring-black data-[state=checked]:bg-zinc-950 data-[state=checked]:border-zinc-950" />
                <Label for="remember" class="text-[12px] font-medium text-zinc-600 cursor-pointer select-none">تذكرني على هذا الجهاز</Label>
            </div>

            <!-- Submit Button -->
            <Button
                class="w-full h-11 bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.98] font-bold rounded-xl transition-all shadow-md shadow-zinc-950/10 flex items-center justify-center gap-2 mt-2"
                :class="{ 'opacity-80 cursor-not-allowed': form.processing }"
                :disabled="form.processing"
            >
                <Loader2 v-if="form.processing" class="h-4 w-4 animate-spin" />
                <span>تسجيل الدخول</span>
            </Button>

            <!-- Bottom Link -->
            <div class="mt-6 text-center text-[12px]">
                <span class="text-zinc-500">ليس لديك حساب؟ </span>
                <Link :href="route('register')" class="font-extrabold text-zinc-950 hover:underline underline-offset-4">انضم إلينا الآن</Link>
            </div>
        </form>
    </GuestLayout>
</template>
