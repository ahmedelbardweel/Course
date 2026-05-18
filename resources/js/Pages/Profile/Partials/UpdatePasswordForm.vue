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
                    <Label for="current_password" class="text-[11px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Lock class="h-3 w-3 opacity-40" /> كلمة المرور الحالية
                    </Label>
                    <Input
                        id="current_password"
                        ref="currentPasswordInput"
                        v-model="form.current_password"
                        type="password"
                        class="h-8.5 text-[12px] font-medium border-zinc-100 bg-zinc-50/20"
                        autocomplete="current-password"
                    />
                    <div v-if="form.errors.current_password" class="text-[10px] text-red-500 font-bold">{{ form.errors.current_password }}</div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-1.5">
                        <Label for="password" class="text-[11px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                            <ShieldCheck class="h-3 w-3 opacity-40" /> كلمة المرور الجديدة
                        </Label>
                        <Input
                            id="password"
                            ref="passwordInput"
                            v-model="form.password"
                            type="password"
                            class="h-8.5 text-[12px] font-medium border-zinc-100 bg-zinc-50/20"
                            autocomplete="new-password"
                        />
                        <div v-if="form.errors.password" class="text-[10px] text-red-500 font-bold">{{ form.errors.password }}</div>
                    </div>

                    <div class="space-y-1.5">
                        <Label for="password_confirmation" class="text-[11px] font-black text-zinc-400 uppercase tracking-widest">تأكيد كلمة المرور</Label>
                        <Input
                            id="password_confirmation"
                            v-model="form.password_confirmation"
                            type="password"
                            class="h-8.5 text-[12px] font-medium border-zinc-100 bg-zinc-50/20"
                            autocomplete="new-password"
                        />
                        <div v-if="form.errors.password_confirmation" class="text-[10px] text-red-500 font-bold">{{ form.errors.password_confirmation }}</div>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-4 pt-2">
                <Button :disabled="form.processing" size="sm" class="h-8 text-[11px] font-black px-8 rounded-full shadow-lg shadow-zinc-900/20 transition-all bg-amber-600 hover:bg-amber-700 border-none">
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
                    <div v-if="form.recentlySuccessful" class="flex items-center gap-1.5 text-emerald-600">
                        <div class="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center">
                            <Check class="h-3 w-3" />
                        </div>
                        <span class="text-[10px] font-black uppercase tracking-widest">تم التحديث بنجاح</span>
                    </div>
                </Transition>
            </div>
        </form>
    </section>
</template>
