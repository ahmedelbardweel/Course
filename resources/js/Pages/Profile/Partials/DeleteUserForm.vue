<script setup>
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import Modal from '@/Components/Modal.vue';
import { AlertTriangle, UserX, Loader2, X } from 'lucide-vue-next';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
    nextTick(() => passwordInput.value.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;
    form.clearErrors();
    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="space-y-1 text-right">
                <h3 class="text-[13px] font-black text-red-600 uppercase tracking-tight">حذف الحساب نهائياً</h3>
                <p class="text-[11px] text-zinc-400 font-medium leading-relaxed max-w-lg">
                    بمجرد حذف حسابك، سيتم حذف جميع الموارد والبيانات المرتبطة به بشكل دائم. يرجى التأكد من تحميل أي بيانات ترغب في الاحتفاظ بها قبل المتابعة.
                </p>
            </div>
            <Button variant="destructive" @click="confirmUserDeletion" class="h-8 text-[11px] font-black px-6 rounded-full shadow-lg shadow-red-900/10 shrink-0">
                <UserX class="ml-1.5 h-3.5 w-3.5 opacity-60" /> حذف الحساب
            </Button>
        </div>

        <Modal :show="confirmingUserDeletion" @close="closeModal">
            <div class="p-6 bg-white rounded-2xl overflow-hidden relative">
                <div class="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                
                <div class="flex items-center gap-3 mb-6 border-b border-zinc-50 pb-4">
                    <div class="h-10 w-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shadow-inner"><AlertTriangle class="h-5 w-5" /></div>
                    <div>
                        <h2 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight">هل أنت متأكد من حذف الحساب؟</h2>
                        <p class="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">لا يمكن التراجع عن هذا الإجراء</p>
                    </div>
                </div>

                <p class="text-[12px] text-zinc-500 font-medium leading-relaxed mb-6">
                    بمجرد حذف الحساب، سيتم مسح كافة بياناتك وتفاعلاتك من المنصة بشكل نهائي. يرجى إدخال كلمة المرور الخاصة بك لتأكيد طلب الحذف.
                </p>

                <div class="space-y-2 mb-8">
                    <Label for="password" class="text-[11px] font-black text-zinc-400 uppercase tracking-widest">كلمة المرور للتأكيد</Label>
                    <Input
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="h-10 text-[12px] font-medium border-zinc-100 bg-zinc-50/50 rounded-xl focus:ring-1 focus:ring-red-500"
                        placeholder="••••••••"
                        @keyup.enter="deleteUser"
                    />
                    <div v-if="form.errors.password" class="text-[10px] text-red-500 font-bold">{{ form.errors.password }}</div>
                </div>

                <div class="flex items-center justify-end gap-2">
                    <Button variant="ghost" @click="closeModal" class="h-9 text-[11px] font-black px-6 rounded-xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-all">
                        <X class="ml-1.5 h-3.5 w-3.5" /> إلغاء
                    </Button>
                    <Button
                        variant="destructive"
                        :disabled="form.processing"
                        @click="deleteUser"
                        class="h-9 text-[11px] font-black px-8 rounded-xl shadow-lg shadow-red-900/20 transition-all hover:scale-[1.02]"
                    >
                        <Loader2 v-if="form.processing" class="ml-1.5 h-3.5 w-3.5 animate-spin" />
                        <UserX v-else class="ml-1.5 h-3.5 w-3.5 opacity-60" /> حذف نهائي
                    </Button>
                </div>
            </div>
        </Modal>
    </section>
</template>
