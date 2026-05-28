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

        <div class="text-center mb-6 flex flex-col items-center">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded bg-brand-surface-strong border border-brand-hairline mb-3">
                <KeyRound class="h-5 w-5 text-brand-orange" />
            </div>
            <h1 class="text-lg font-semibold tracking-tight text-brand-ink">إعادة تعيين كلمة المرور</h1>
            <p class="mt-1 text-brand-body text-[11px] leading-relaxed">
                أدخل كلمة المرور الجديدة أدناه لتأمين حسابك واستعادة الوصول الكامل.
            </p>
        </div>

        <!-- Global Errors -->
        <div 
            v-if="Object.keys(form.errors).length > 0" 
            class="mb-5 p-3 rounded-md bg-white border border-brand-hairline text-brand-orange text-[11px] leading-relaxed space-y-1"
        >
            <div v-for="(error, key) in form.errors" :key="key" class="flex items-start gap-1.5">
                <span class="text-brand-orange mt-0.5">•</span>
                <span>{{ error }}</span>
            </div>
        </div>

        <form @submit.prevent="submit" class="space-y-4">
            <!-- Email -->
            <div class="space-y-1.5">
                <label for="email" class="text-xs font-semibold text-brand-ink">البريد الإلكتروني</label>
                <div class="relative">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                        <Mail class="h-3.5 w-3.5" />
                    </span>
                    <input
                        id="email"
                        type="email"
                        v-model="form.email"
                        required
                        autocomplete="username"
                        readonly
                        class="w-full bg-brand-canvas-soft border border-brand-hairline rounded-md py-2 pr-9 pl-3 text-xs text-brand-muted outline-none cursor-not-allowed"
                    />
                </div>
            </div>

            <!-- Password -->
            <div class="space-y-1.5">
                <label for="password" class="text-xs font-semibold text-brand-ink">كلمة المرور الجديدة</label>
                <div class="relative">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                        <Lock class="h-3.5 w-3.5" />
                    </span>
                    <input
                        id="password"
                        :type="showPassword ? 'text' : 'password'"
                        v-model="form.password"
                        required
                        autocomplete="new-password"
                        class="w-full bg-white border border-brand-hairline rounded-md py-2 pr-9 pl-10 text-xs text-brand-ink placeholder:text-brand-muted/50 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none"
                        placeholder="••••••••"
                    />
                    <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-muted"
                    >
                        <Eye v-if="!showPassword" class="h-3.5 w-3.5" />
                        <EyeOff v-else class="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>

            <!-- Password Confirmation -->
            <div class="space-y-1.5">
                <label for="password_confirmation" class="text-xs font-semibold text-brand-ink">تأكيد كلمة المرور الجديدة</label>
                <div class="relative">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                        <Lock class="h-3.5 w-3.5" />
                    </span>
                    <input
                        id="password_confirmation"
                        :type="showPasswordConfirm ? 'text' : 'password'"
                        v-model="form.password_confirmation"
                        required
                        autocomplete="new-password"
                        class="w-full bg-white border border-brand-hairline rounded-md py-2 pr-9 pl-10 text-xs text-brand-ink placeholder:text-brand-muted/50 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none"
                        placeholder="••••••••"
                    />
                    <button
                        type="button"
                        @click="showPasswordConfirm = !showPasswordConfirm"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-muted"
                    >
                        <Eye v-if="!showPasswordConfirm" class="h-3.5 w-3.5" />
                        <EyeOff v-else class="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>

            <button
                type="submit"
                :disabled="form.processing"
                class="w-full flex items-center justify-center gap-2 bg-brand-orange border border-brand-orange text-white disabled:opacity-50 rounded-md h-9 px-4 text-xs font-semibold"
            >
                <Loader2 v-if="form.processing" class="h-3.5 w-3.5 animate-spin" />
                <span>إعادة تعيين كلمة المرور</span>
            </button>
        </form>
    </GuestLayout>
</template>
