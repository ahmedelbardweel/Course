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

        <div class="text-center mb-6 flex flex-col items-center">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded bg-brand-surface-strong border border-brand-hairline mb-3">
                <Mail class="h-5 w-5 text-brand-orange" />
            </div>
            <h1 class="text-lg font-semibold tracking-tight text-brand-ink">تأكيد البريد الإلكتروني</h1>
            <p class="mt-1 text-brand-body text-[11px] leading-relaxed">
                شكراً لتسجيلك! قبل البدء، يرجى تأكيد حسابك بالضغط على الرابط الذي أرسلناه للتو إلى بريدك الإلكتروني.
            </p>
        </div>

        <div
            v-if="verificationLinkSent"
            class="mb-6 p-3 rounded-md bg-white border border-brand-hairline flex items-start gap-2.5 text-brand-ink text-[11px] leading-relaxed animate-in fade-in duration-300"
        >
            <CheckCircle2 class="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
            <span>تم إرسال رابط تأكيد جديد إلى البريد الإلكتروني الذي قدمته أثناء التسجيل.</span>
        </div>

        <div
            v-if="$page.props.errors.error"
            class="mb-6 p-3 rounded-md bg-white border border-brand-hairline flex items-start gap-2.5 text-brand-orange text-[11px] leading-relaxed animate-in fade-in duration-300"
        >
            <AlertCircle class="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
            <span>{{ $page.props.errors.error }}</span>
        </div>

        <form @submit.prevent="submit" class="space-y-4">
            <button
                type="submit"
                :disabled="form.processing"
                class="w-full flex items-center justify-center gap-2 bg-brand-orange border border-brand-orange text-white disabled:opacity-50 rounded-md h-9 px-4 text-xs font-semibold"
            >
                <Loader2 v-if="form.processing" class="h-3.5 w-3.5 animate-spin" />
                <span>إعادة إرسال رابط التأكيد</span>
            </button>

            <div class="flex items-center justify-center pt-2">
                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="inline-flex items-center gap-1.5 text-brand-muted text-xs font-semibold"
                >
                    <LogOut class="h-3.5 w-3.5" />
                    <span>تسجيل الخروج</span>
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>
