<script setup>
import { ref } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { User, Mail, Sparkles, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-vue-next';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    learning_goal: '', // New field for data collection
});

const showPassword = ref(false);
const showPasswordConfirm = ref(false);

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="إنشاء حساب جديد - كورس" />

        <div class="mb-8 text-center sm:text-right">
            <h1 class="text-2xl font-semibold tracking-tight text-brand-ink">ابدأ رحلتك اليوم</h1>
            <p class="text-[13px] text-brand-body mt-1.5 leading-relaxed">انضم إلى مجتمع "كورس" الرائد وابدأ في بناء مستقبلك التعليمي والمهني.</p>
        </div>

        <form @submit.prevent="submit" class="space-y-5">
            <!-- Full Name Field -->
            <div class="space-y-2">
                <Label for="name" class="text-brand-ink font-semibold text-[11px] uppercase tracking-wider">الاسم الكامل</Label>
                <div class="relative group">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                        <User class="h-4 w-4" />
                    </span>
                    <Input
                        id="name"
                        type="text"
                        class="h-11 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md"
                        v-model="form.name"
                        required
                        autofocus
                        autocomplete="name"
                        placeholder="أحمد محمد"
                    />
                </div>
                <div v-if="form.errors.name" class="text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5">
                    <AlertCircle class="h-3.5 w-3.5 shrink-0" />
                    {{ form.errors.name }}
                </div>
            </div>

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
                        autocomplete="username"
                        placeholder="name@example.com"
                    />
                </div>
                <div v-if="form.errors.email" class="text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5">
                    <AlertCircle class="h-3.5 w-3.5 shrink-0" />
                    {{ form.errors.email }}
                </div>
            </div>

            <!-- Learning Goal Field -->
            <div class="space-y-2">
                <Label for="learning_goal" class="text-brand-ink font-semibold text-[11px] uppercase tracking-wider">ما هو هدفك التعليمي؟ (اختياري)</Label>
                <div class="relative group">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                        <Sparkles class="h-4 w-4" />
                    </span>
                    <Input
                        id="learning_goal"
                        type="text"
                        class="h-11 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md"
                        v-model="form.learning_goal"
                        placeholder="مثلاً: تعلم تطوير واجهات الويب"
                    />
                </div>
                <p class="text-[10px] text-brand-muted pr-1.5 leading-relaxed">نستخدم هذه البيانات لبناء مسارات تعلم تفاعلية ومخصصة لك.</p>
            </div>

            <!-- Password Fields Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Password -->
                <div class="space-y-2">
                    <Label for="password" class="text-brand-ink font-semibold text-[11px] uppercase tracking-wider">كلمة المرور</Label>
                    <div class="relative group">
                        <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                            <Lock class="h-4 w-4" />
                        </span>
                        <Input
                            id="password"
                            :type="showPassword ? 'text' : 'password'"
                            class="h-11 pr-10 pl-10 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md text-left"
                            v-model="form.password"
                            required
                            placeholder="••••••••"
                            autocomplete="new-password"
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
                </div>

                <!-- Password Confirmation -->
                <div class="space-y-2">
                    <Label for="password_confirmation" class="text-brand-ink font-semibold text-[11px] uppercase tracking-wider">تأكيد الكلمة</Label>
                    <div class="relative group">
                        <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                            <Lock class="h-4 w-4" />
                        </span>
                        <Input
                            id="password_confirmation"
                            :type="showPasswordConfirm ? 'text' : 'password'"
                            class="h-11 pr-10 pl-10 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md text-left"
                            v-model="form.password_confirmation"
                            required
                            placeholder="••••••••"
                            autocomplete="new-password"
                        />
                        <button
                            type="button"
                            @click="showPasswordConfirm = !showPasswordConfirm"
                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-muted"
                        >
                            <Eye v-if="showPasswordConfirm" class="h-4 w-4" />
                            <EyeOff v-else class="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div v-if="form.errors.password" class="col-span-1 sm:col-span-2 text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1">
                    <AlertCircle class="h-3.5 w-3.5 shrink-0" />
                    {{ form.errors.password }}
                </div>
            </div>

            <!-- Submit Button -->
            <Button
                class="w-full h-11 bg-brand-orange border border-brand-orange text-white font-semibold rounded-md flex items-center justify-center gap-2 mt-2"
                :class="{ 'opacity-80 cursor-not-allowed': form.processing }"
                :disabled="form.processing"
            >
                <Loader2 v-if="form.processing" class="h-4 w-4 animate-spin" />
                <span>إنشاء الحساب</span>
            </Button>

            <!-- Bottom Link -->
            <div class="mt-6 text-center text-[12px]">
                <span class="text-brand-body">لديك حساب بالفعل؟ </span>
                <Link :href="route('login')" class="font-semibold text-brand-ink hover:underline underline-offset-4">سجل دخولك</Link>
            </div>
        </form>
    </GuestLayout>
</template>
