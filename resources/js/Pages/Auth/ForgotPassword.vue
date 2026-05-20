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
            class="mb-5 text-[12px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-center flex items-center justify-center gap-2"
        >
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

            <!-- Submit Button -->
            <Button
                class="w-full h-11 bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.98] font-bold rounded-xl transition-all shadow-md shadow-zinc-950/10 flex items-center justify-center gap-2"
                :class="{ 'opacity-80 cursor-not-allowed': form.processing }"
                :disabled="form.processing"
            >
                <Loader2 v-if="form.processing" class="h-4 w-4 animate-spin" />
                <span>إرسال رابط الاستعادة</span>
            </Button>

            <!-- Bottom Link -->
            <div class="mt-6 text-center">
                <Link :href="route('login')" class="inline-flex items-center gap-1.5 text-[12px] font-extrabold text-zinc-950 hover:underline underline-offset-4">
                    <span>العودة لتسجيل الدخول</span>
                    <ArrowRight class="h-3.5 w-3.5" />
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>
