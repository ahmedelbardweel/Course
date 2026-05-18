<script setup>
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Save, Loader2, Check } from 'lucide-vue-next';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
});
</script>

<template>
    <section class="space-y-6">
        <form
            @submit.prevent="form.patch(route('profile.update'))"
            class="space-y-4"
        >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <Label for="name" class="text-[11px] font-black text-zinc-400 uppercase tracking-widest">الاسم الكامل</Label>
                    <Input
                        id="name"
                        type="text"
                        class="h-8.5 text-[12px] font-medium border-zinc-100 bg-zinc-50/20"
                        v-model="form.name"
                        required
                        autofocus
                        autocomplete="name"
                    />
                    <div v-if="form.errors.name" class="text-[10px] text-red-500 font-bold">{{ form.errors.name }}</div>
                </div>

                <div class="space-y-1.5">
                    <Label for="email" class="text-[11px] font-black text-zinc-400 uppercase tracking-widest">البريد الإلكتروني</Label>
                    <Input
                        id="email"
                        type="email"
                        class="h-8.5 text-[12px] font-medium border-zinc-100 bg-zinc-50/20"
                        v-model="form.email"
                        required
                        autocomplete="username"
                    />
                    <div v-if="form.errors.email" class="text-[10px] text-red-500 font-bold">{{ form.errors.email }}</div>
                </div>
            </div>

            <div v-if="mustVerifyEmail && user.email_verified_at === null">
                <div class="p-3 rounded-lg border border-amber-100 bg-amber-50/50 flex items-center justify-between">
                    <p class="text-[11px] text-amber-700 font-medium">
                        بريدك الإلكتروني غير مفعل حالياً.
                    </p>
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="text-[10px] font-black uppercase tracking-widest text-amber-900 underline hover:no-underline"
                    >
                        إعادة إرسال رابط التفعيل
                    </Link>
                </div>

                <div
                    v-show="status === 'verification-link-sent'"
                    class="mt-2 text-[10px] font-black text-emerald-600 uppercase tracking-tight"
                >
                    تم إرسال رابط تفعيل جديد إلى بريدك الإلكتروني.
                </div>
            </div>

            <div class="flex items-center gap-4 pt-2">
                <Button :disabled="form.processing" size="sm" class="h-8 text-[11px] font-black px-8 rounded-full shadow-lg shadow-zinc-900/20 transition-all">
                    <Loader2 v-if="form.processing" class="ml-1.5 h-3 w-3 animate-spin" />
                    <Save v-else class="ml-1.5 h-3 w-3 opacity-60" />
                    حفظ التغييرات
                </Button>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <div v-if="form.recentlySuccessful" class="flex items-center gap-1.5 text-emerald-600">
                        <div class="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center">
                            <Check class="h-3 w-3" />
                        </div>
                        <span class="text-[10px] font-black uppercase tracking-widest">تم الحفظ بنجاح</span>
                    </div>
                </Transition>
            </div>
        </form>
    </section>
</template>
