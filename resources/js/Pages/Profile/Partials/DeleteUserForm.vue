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
                <h3 class="text-[13px] font-normal text-[var(--destructive)] uppercase tracking-tight">حذف الحساب نهائياً</h3>
                <p class="text-[11px] text-[var(--muted-foreground)] font-normal leading-relaxed max-w-lg">
                    بمجرد حذف حسابك، سيتم حذف جميع الموارد والبيانات المرتبطة به بشكل دائم. يرجى التأكد من تحميل أي بيانات ترغب في الاحتفاظ بها قبل المتابعة.
                </p>
            </div>
            <Button variant="destructive" @click="confirmUserDeletion" class="h-8 text-[11px] font-normal px-4 rounded-md border border-[var(--destructive)] bg-[var(--destructive)] text-[var(--destructive-foreground)] shadow-none shrink-0">
                <UserX class="ml-1.5 h-3.5 w-3.5 opacity-60" /> حذف الحساب
            </Button>
        </div>

        <Modal :show="confirmingUserDeletion" @close="closeModal">
            <div class="p-6 bg-[var(--card)] rounded-md border border-[var(--border)] overflow-hidden relative shadow-none">
                <div class="absolute top-0 left-0 w-full h-1 bg-[var(--destructive)]"></div>
                
                <div class="flex items-center gap-3 mb-6 border-b border-[var(--border)] pb-4">
                    <div class="h-10 w-10 rounded-md bg-[var(--background)] text-[var(--destructive)] flex items-center justify-center border border-[var(--border)]"><AlertTriangle class="h-5 w-5" /></div>
                    <div>
                        <h2 class="text-[14px] font-normal text-[var(--foreground)] uppercase tracking-tight">هل أنت متأكد من حذف الحساب؟</h2>
                        <p class="text-[10px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest mt-0.5">لا يمكن التراجع عن هذا الإجراء</p>
                    </div>
                </div>

                <p class="text-[12px] text-[var(--muted-foreground)] font-normal leading-relaxed mb-6">
                     بمجرد حذف الحساب، سيتم مسح كافة بياناتك وتفاعلاتك من المنصة بشكل نهائي. يرجى إدخال كلمة المرور الخاصة بك لتأكيد طلب الحذف.
                </p>

                <div class="space-y-2 mb-8">
                    <Label for="password" class="text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">كلمة المرور للتأكيد</Label>
                    <Input
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="h-10 text-[12px] font-normal border-[var(--border)] bg-[var(--background)] rounded-md focus:ring-1 focus:ring-[var(--destructive)]"
                        placeholder="••••••••"
                        @keyup.enter="deleteUser"
                    />
                    <div v-if="form.errors.password" class="text-[10px] text-[var(--destructive)] font-normal">{{ form.errors.password }}</div>
                </div>

                <div class="flex items-center justify-end gap-2">
                    <Button variant="ghost" @click="closeModal" class="h-9 text-[11px] font-normal px-4 rounded-md border border-[var(--border)] bg-transparent text-[var(--muted-foreground)] hover:none transition-none shadow-none">
                        <X class="ml-1.5 h-3.5 w-3.5" /> إلغاء
                    </Button>
                    <Button
                        variant="destructive"
                        :disabled="form.processing"
                        @click="deleteUser"
                        class="h-9 text-[11px] font-normal px-6 rounded-md border border-[var(--destructive)] bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:none transition-none shadow-none"
                    >
                        <Loader2 v-if="form.processing" class="ml-1.5 h-3.5 w-3.5 animate-spin" />
                        <UserX v-else class="ml-1.5 h-3.5 w-3.5 opacity-60" /> حذف نهائي
                    </Button>
                </div>
            </div>
        </Modal>
    </section>
</template>
