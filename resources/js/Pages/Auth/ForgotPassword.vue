<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Mail, Loader2, AlertCircle, ArrowRight } from 'lucide-vue-next';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <GuestLayout>
        <Head title="استعادة كلمة المرور - كورس" />

        <div class="mb-6 text-center sm:text-right">
            <h1 class="text-2xl font-bold tracking-tight text-zinc-950">استعادة كلمة المرور</h1>
            <p class="text-[13px] text-zinc-500 mt-1.5 leading-relaxed">
                هل نسيت كلمة المرور؟ لا تقلق. أدخل بريدك الإلكتروني وسنرسل لك رابط استعادتها فوراً.
            </p>
        </div>

        <div
            v-if="status"
            class="mb-5 text-[12px] font-semibold text-zinc-900 bg-zinc-50 border border-zinc-200 p-3 rounded-md text-center flex items-center justify-center gap-2"
        >
            <span class="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>
            {{ status }}
        </div>

        <form @submit.prevent="submit" class="space-y-5">
            <!-- Email Field -->
            <div class="space-y-1.5">
                <Label for="email" class="text-zinc-700 font-bold text-[10px] uppercase tracking-wider">البريد الإلكتروني</Label>
                <div class="relative group">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors">
                        <Mail class="h-4 w-4" />
                    </span>
                    <Input
                        id="email"
                        type="email"
                        class="h-10 pr-10 pl-4 border-zinc-200 bg-white hover:bg-zinc-50/50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md"
                        v-model="form.email"
                        required
                        autofocus
                        autocomplete="username"
                        placeholder="name@example.com"
                    />
                </div>
                <div v-if="form.errors.email" class="text-[11px] font-medium text-red-600 flex items-center gap-1.5 mt-1.5">
                    <AlertCircle class="h-3.5 w-3.5 shrink-0" />
                    {{ form.errors.email }}
                </div>
            </div>

            <!-- Submit Button -->
            <Button
                class="w-full h-10 bg-zinc-950 text-white hover:bg-zinc-900 font-bold rounded-md transition-colors flex items-center justify-center gap-2 border-none shadow-none"
                :class="{ 'opacity-80 cursor-not-allowed': form.processing }"
                :disabled="form.processing"
            >
                <Loader2 v-if="form.processing" class="h-4 w-4 animate-spin" />
                <span>إرسال رابط الاستعادة</span>
            </Button>

            <!-- Bottom Link -->
            <div class="mt-5 text-center">
                <Link :href="route('login')" class="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-zinc-950 hover:underline underline-offset-4">
                    <span>العودة لتسجيل الدخول</span>
                    <ArrowRight class="h-3.5 w-3.5" />
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>
