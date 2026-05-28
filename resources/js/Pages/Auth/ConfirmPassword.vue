<script setup>
import { ref } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, useForm } from '@inertiajs/vue3';
import { Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-vue-next';

const form = useForm({
    password: '',
});

const showPassword = ref(false);

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="تأكيد كلمة المرور - كورس" />

        <div class="mb-6 text-center sm:text-right">
            <h1 class="text-2xl font-semibold tracking-tight text-brand-ink">تأكيد الهوية</h1>
            <p class="text-[13px] text-brand-body mt-1.5 leading-relaxed">
                هذه منطقة آمنة من التطبيق. يرجى تأكيد كلمة المرور الخاصة بك للمتابعة.
            </p>
        </div>

        <form @submit.prevent="submit" class="space-y-5">
            <!-- Password Field -->
            <div class="space-y-2">
                <Label for="password" class="text-brand-ink font-semibold text-[11px] uppercase tracking-wider">كلمة المرور</Label>
                <div class="relative group">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted">
                        <Lock class="h-4 w-4" />
                    </span>
                    <Input
                        id="password"
                        :type="showPassword ? 'text' : 'password'"
                        class="h-11 pr-10 pl-10 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md"
                        v-model="form.password"
                        required
                        placeholder="••••••••"
                        autocomplete="current-password"
                        autofocus
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
                <div v-if="form.errors.password" class="text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5">
                    <AlertCircle class="h-3.5 w-3.5 shrink-0" />
                    {{ form.errors.password }}
                </div>
            </div>

            <!-- Submit Button -->
            <Button
                class="w-full h-11 bg-brand-orange border border-brand-orange text-white font-semibold rounded-md flex items-center justify-center gap-2"
                :class="{ 'opacity-80 cursor-not-allowed': form.processing }"
                :disabled="form.processing"
            >
                <Loader2 v-if="form.processing" class="h-4 w-4 animate-spin" />
                <span>تأكيد كلمة المرور</span>
            </Button>
        </form>
    </GuestLayout>
</template>
