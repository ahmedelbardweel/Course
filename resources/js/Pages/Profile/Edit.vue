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

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'الرئيسية', url: route('dashboard') },
        { label: 'الإعدادات' },
        { label: 'الملف الشخصي' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full max-w-4xl mx-auto space-y-6">
                    
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                        <!-- Sidebar Info -->
                        <div class="md:col-span-1 space-y-4 sticky top-6">
                            <div class="flex flex-col items-center p-6 bg-[var(--card)] border border-[var(--border)] rounded-md shadow-none">
                                <div class="h-20 w-20 rounded-full bg-[var(--foreground)] flex items-center justify-center text-[var(--background)] mb-4 shadow-none">
                                    <User class="h-10 w-10" />
                                </div>
                                <h3 class="text-[13px] font-normal text-[var(--foreground)] leading-none">{{ $page.props.auth.user.name }}</h3>
                                <p class="text-[10px] text-[var(--muted-foreground)] font-normal mt-1">{{ $page.props.auth.user.email }}</p>
                                <div class="mt-4 pt-4 border-t border-[var(--border)] w-full flex justify-center">
                                    <Badge class="h-5 text-[9px] font-normal uppercase tracking-widest bg-[var(--accent)] text-[var(--muted-foreground)] border-none">{{ $page.props.auth.user.role || 'طالب' }}</Badge>
                                </div>
                            </div>
                        </div>

                        <!-- Forms Area -->
                        <div class="md:col-span-3 space-y-6">
                            <!-- Update Info -->
                            <section class="bg-[var(--card)] p-6 border border-[var(--border)] rounded-md shadow-none space-y-6">
                                <div class="flex items-center gap-2 border-r border-[var(--border)] pr-3 mb-6">
                                    <h2 class="text-[14px] font-normal text-[var(--foreground)] uppercase tracking-tight">المعلومات الأساسية</h2>
                                </div>
                                <UpdateProfileInformationForm
                                    :must-verify-email="mustVerifyEmail"
                                    :status="status"
                                />
                            </section>

                            <!-- Update Password -->
                            <section class="bg-[var(--card)] p-6 border border-[var(--border)] rounded-md shadow-none space-y-6">
                                <div class="flex items-center gap-2 border-r border-[var(--border)] pr-3 mb-6">
                                    <h2 class="text-[14px] font-normal text-[var(--foreground)] uppercase tracking-tight">كلمة المرور</h2>
                                </div>
                                <UpdatePasswordForm />
                            </section>

                            <!-- Delete Account -->
                            <section class="bg-[var(--card)] p-6 border border-[var(--destructive)] rounded-md space-y-6">
                                <div class="flex items-center gap-2 border-r border-[var(--destructive)] pr-3 mb-6">
                                    <h2 class="text-[14px] font-normal text-[var(--destructive)] uppercase tracking-tight">منطقة الخطر</h2>
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
