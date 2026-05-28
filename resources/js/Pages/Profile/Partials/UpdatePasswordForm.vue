<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { ShieldCheck, Loader2, Check, Lock } from 'lucide-vue-next';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <section class="space-y-6">
        <form @submit.prevent="updatePassword" class="space-y-4">
            <div class="space-y-4">
                <div class="space-y-1.5">
                    <Label for="current_password" class="text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-1.5">
                        <Lock class="h-3 w-3 opacity-40" /> كلمة المرور الحالية
                    </Label>
                    <Input
                        id="current_password"
                        ref="currentPasswordInput"
                        v-model="form.current_password"
                        type="password"
                        class="h-8.5 text-[12px] font-normal border-[var(--border)] bg-[var(--background)] rounded-md focus:ring-1 focus:ring-[var(--primary)]"
                        autocomplete="current-password"
                    />
                    <div v-if="form.errors.current_password" class="text-[10px] text-[var(--destructive)] font-normal">{{ form.errors.current_password }}</div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-1.5">
                        <Label for="password" class="text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-1.5">
                            <ShieldCheck class="h-3 w-3 opacity-40" /> كلمة المرور الجديدة
                        </Label>
                        <Input
                            id="password"
                            ref="passwordInput"
                            v-model="form.password"
                            type="password"
                            class="h-8.5 text-[12px] font-normal border-[var(--border)] bg-[var(--background)] rounded-md focus:ring-1 focus:ring-[var(--primary)]"
                            autocomplete="new-password"
                        />
                        <div v-if="form.errors.password" class="text-[10px] text-[var(--destructive)] font-normal">{{ form.errors.password }}</div>
                    </div>

                    <div class="space-y-1.5">
                        <Label for="password_confirmation" class="text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">تأكيد كلمة المرور</Label>
                        <Input
                            id="password_confirmation"
                            v-model="form.password_confirmation"
                            type="password"
                            class="h-8.5 text-[12px] font-normal border-[var(--border)] bg-[var(--background)] rounded-md focus:ring-1 focus:ring-[var(--primary)]"
                            autocomplete="new-password"
                        />
                        <div v-if="form.errors.password_confirmation" class="text-[10px] text-[var(--destructive)] font-normal">{{ form.errors.password_confirmation }}</div>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-4 pt-2">
                <Button :disabled="form.processing" size="sm" class="h-8 text-[11px] font-normal px-4 rounded-md border border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)] shadow-none hover:none transition-none">
                    <Loader2 v-if="form.processing" class="ml-1.5 h-3 w-3 animate-spin" />
                    <ShieldCheck v-else class="ml-1.5 h-3.5 w-3.5 opacity-60" />
                    تحديث كلمة المرور
                </Button>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <div v-if="form.recentlySuccessful" class="flex items-center gap-1.5 text-emerald-700">
                        <Check class="h-3.5 w-3.5" />
                        <span class="text-[10px] font-normal uppercase tracking-widest">تم التحديث بنجاح</span>
                    </div>
                </Transition>
            </div>
        </form>
    </section>
</template>
