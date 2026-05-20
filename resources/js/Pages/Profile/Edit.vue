<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';
import { ChevronLeft, User, Shield, UserX } from 'lucide-vue-next';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>
    <Head title="الملف الشخصي" />

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>الإعدادات</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-black">الملف الشخصي</span>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full max-w-4xl mx-auto space-y-6">
                    
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                        <!-- Sidebar Info -->
                        <div class="md:col-span-1 space-y-4 sticky top-6">
                            <div class="flex flex-col items-center p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                                <div class="h-20 w-20 rounded-full bg-zinc-900 flex items-center justify-center text-white mb-4 shadow-xl">
                                    <User class="h-10 w-10" />
                                </div>
                                <h3 class="text-[13px] font-black text-zinc-900 leading-none">{{ $page.props.auth.user.name }}</h3>
                                <p class="text-[10px] text-zinc-400 font-medium mt-1">{{ $page.props.auth.user.email }}</p>
                                <div class="mt-4 pt-4 border-t border-zinc-50 w-full flex justify-center">
                                    <Badge class="h-5 text-[9px] font-black uppercase tracking-widest bg-zinc-100 text-zinc-500 border-none">{{ $page.props.auth.user.role || 'طالب' }}</Badge>
                                </div>
                            </div>
                        </div>

                        <!-- Forms Area -->
                        <div class="md:col-span-3 space-y-6">
                            <!-- Update Info -->
                            <section class="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm space-y-6">
                                <div class="flex items-center gap-2 border-r-4 border-zinc-900 pr-3 mb-6">
                                    <h2 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight">المعلومات الأساسية</h2>
                                </div>
                                <UpdateProfileInformationForm
                                    :must-verify-email="mustVerifyEmail"
                                    :status="status"
                                />
                            </section>

                            <!-- Update Password -->
                            <section class="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm space-y-6">
                                <div class="flex items-center gap-2 border-r-4 border-amber-500 pr-3 mb-6">
                                    <h2 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight">كلمة المرور</h2>
                                </div>
                                <UpdatePasswordForm />
                            </section>

                            <!-- Delete Account -->
                            <section class="bg-zinc-50/50 p-6 border border-red-100 rounded-xl space-y-6">
                                <div class="flex items-center gap-2 border-r-4 border-red-500 pr-3 mb-6">
                                    <h2 class="text-[14px] font-black text-red-600 uppercase tracking-tight">منطقة الخطر</h2>
                                </div>
                                <DeleteUserForm />
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
