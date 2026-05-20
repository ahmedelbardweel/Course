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
            <h1 class="text-2xl font-bold tracking-tight text-zinc-950">تأكيد الهوية</h1>
            <p class="text-[13px] text-zinc-500 mt-1.5 leading-relaxed">
                هذه منطقة آمنة من التطبيق. يرجى تأكيد كلمة المرور الخاصة بك للمتابعة.
            </p>
        </div>

        <form @submit.prevent="submit" class="space-y-5">
            <!-- Password Field -->
            <div class="space-y-2">
                <Label for="password" class="text-zinc-700 font-semibold text-[11px] uppercase tracking-wider">كلمة المرور</Label>
                <div class="relative group">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors">
                        <Lock class="h-4 w-4" />
                    </span>
                    <Input
                        id="password"
                        :type="showPassword ? 'text' : 'password'"
                        class="h-11 pr-10 pl-10 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-xl"
                        v-model="form.password"
                        required
                        placeholder="••••••••"
                        autocomplete="current-password"
                        autofocus
                    />
                    <button
                        type="button"
                        @click="showPassword = !showPassword"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 hover:text-zinc-950 transition-colors"
                    >
                        <Eye v-if="showPassword" class="h-4 w-4" />
                        <EyeOff v-else class="h-4 w-4" />
                    </button>
                </div>
                <div v-if="form.errors.password" class="text-[11px] font-bold text-red-600 bg-red-50 border border-red-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5 mt-1.5">
                    <AlertCircle class="h-3.5 w-3.5 shrink-0" />
                    {{ form.errors.password }}
                </div>
            </div>

            <!-- Submit Button -->
            <Button
                class="w-full h-11 bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.98] font-bold rounded-xl transition-all shadow-md shadow-zinc-950/10 flex items-center justify-center gap-2"
                :class="{ 'opacity-80 cursor-not-allowed': form.processing }"
                :disabled="form.processing"
            >
                <Loader2 v-if="form.processing" class="h-4 w-4 animate-spin" />
                <span>تأكيد كلمة المرور</span>
            </Button>
        </form>
    </GuestLayout>
</template>
