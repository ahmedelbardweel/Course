<script setup>
import { computed } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { Mail, LogOut, Loader2, CheckCircle2, AlertCircle } from 'lucide-vue-next';

const props = defineProps({
    status: {
        type: String,
    },
});

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(
    () => props.status === 'verification-link-sent',
);
</script>

<template>
    <GuestLayout>
        <Head title="تأكيد البريد الإلكتروني" />

        <div class="text-center mb-6">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 border border-zinc-200 mb-3">
                <Mail class="h-5 w-5 text-zinc-900" />
            </div>
            <h1 class="text-lg font-black tracking-tight text-zinc-900">تأكيد البريد الإلكتروني</h1>
            <p class="mt-1 text-zinc-500 text-[11px] leading-relaxed">
                شكراً لتسجيلك! قبل البدء، يرجى تأكيد حسابك بالضغط على الرابط الذي أرسلناه للتو إلى بريدك الإلكتروني.
            </p>
        </div>

        <div
            v-if="verificationLinkSent"
            class="mb-6 p-3 rounded-lg bg-zinc-50 border border-zinc-200 flex items-start gap-2.5 text-zinc-900 text-[11px] leading-relaxed animate-in fade-in duration-300"
        >
            <CheckCircle2 class="h-4 w-4 text-zinc-900 shrink-0 mt-0.5" />
            <span>تم إرسال رابط تأكيد جديد إلى البريد الإلكتروني الذي قدمته أثناء التسجيل.</span>
        </div>

        <div
            v-if="$page.props.errors.error"
            class="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-[11px] leading-relaxed animate-in fade-in duration-300"
        >
            <AlertCircle class="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
            <span>{{ $page.props.errors.error }}</span>
        </div>

        <form @submit.prevent="submit" class="space-y-4">
            <button
                type="submit"
                :disabled="form.processing"
                class="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-50 disabled:pointer-events-none rounded-lg h-9 px-4 text-xs font-bold transition-all"
            >
                <Loader2 v-if="form.processing" class="h-3.5 w-3.5 animate-spin" />
                <span>إعادة إرسال رابط التأكيد</span>
            </button>

            <div class="flex items-center justify-center pt-2">
                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-900 text-xs font-bold transition-colors"
                >
                    <LogOut class="h-3.5 w-3.5" />
                    <span>تسجيل الخروج</span>
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>
