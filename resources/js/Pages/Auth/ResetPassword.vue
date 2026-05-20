<script setup>
import { ref } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { Mail, Lock, Eye, EyeOff, Loader2, KeyRound } from 'lucide-vue-next';

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const showPassword = ref(false);
const showPasswordConfirm = ref(false);

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="إعادة تعيين كلمة المرور" />

        <div class="text-center mb-6">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 border border-zinc-200 mb-3">
                <KeyRound class="h-5 w-5 text-zinc-900" />
            </div>
            <h1 class="text-lg font-black tracking-tight text-zinc-900">إعادة تعيين كلمة المرور</h1>
            <p class="mt-1 text-zinc-500 text-[11px] leading-relaxed">
                أدخل كلمة المرور الجديدة أدناه لتأمين حسابك واستعادة الوصول الكامل.
            </p>
        </div>

        <!-- Global Errors -->
        <div 
            v-if="Object.keys(form.errors).length > 0" 
            class="mb-5 p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 text-[11px] leading-relaxed space-y-1"
        >
            <div v-for="(error, key) in form.errors" :key="key" class="flex items-start gap-1.5">
                <span class="text-zinc-900 mt-0.5">•</span>
                <span>{{ error }}</span>
            </div>
        </div>

        <form @submit.prevent="submit" class="space-y-4">
            <!-- Email (Hidden/Disabled or visible but stylized) -->
            <div class="space-y-1.5">
                <label for="email" class="text-xs font-bold text-zinc-700">البريد الإلكتروني</label>
                <div class="relative">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
                        <Mail class="h-3.5 w-3.5" />
                    </span>
                    <input
                        id="email"
                        type="email"
                        v-model="form.email"
                        required
                        autocomplete="username"
                        readonly
                        class="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2 pr-9 pl-3 text-xs text-zinc-500 outline-none cursor-not-allowed"
                    />
                </div>
            </div>

            <!-- Password -->
            <div class="space-y-1.5">
                <label for="password" class="text-xs font-bold text-zinc-700">كلمة المرور الجديدة</label>
                <div class="relative">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
                        <Lock class="h-3.5 w-3.5" />
                    </span>
                    <input
                        id="password"
                        :type="showPassword ? 'text' : 'password'"
                        v-model="form.password"
                        required
                        autocomplete="new-password"
                        class="w-full bg-white border border-zinc-200 rounded-lg py-2 pr-9 pl-10 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all"
                        placeholder="••••••••"
                    />
                    <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                        <Eye v-if="!showPassword" class="h-3.5 w-3.5" />
                        <EyeOff v-else class="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>

            <!-- Password Confirmation -->
            <div class="space-y-1.5">
                <label for="password_confirmation" class="text-xs font-bold text-zinc-700">تأكيد كلمة المرور الجديدة</label>
                <div class="relative">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
                        <Lock class="h-3.5 w-3.5" />
                    </span>
                    <input
                        id="password_confirmation"
                        :type="showPasswordConfirm ? 'text' : 'password'"
                        v-model="form.password_confirmation"
                        required
                        autocomplete="new-password"
                        class="w-full bg-white border border-zinc-200 rounded-lg py-2 pr-9 pl-10 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all"
                        placeholder="••••••••"
                    />
                    <button
                        type="button"
                        @click="showPasswordConfirm = !showPasswordConfirm"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                        <Eye v-if="!showPasswordConfirm" class="h-3.5 w-3.5" />
                        <EyeOff v-else class="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>

            <button
                type="submit"
                :disabled="form.processing"
                class="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-50 disabled:pointer-events-none rounded-lg h-9 px-4 text-xs font-bold transition-all"
            >
                <Loader2 v-if="form.processing" class="h-3.5 w-3.5 animate-spin" />
                <span>إعادة تعيين كلمة المرور</span>
            </button>
        </form>
    </GuestLayout>
</template>
