<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { 
    Users, 
    Mail, 
    Calendar, 
    BookOpen, 
    Trash2, 
    Award, 
    ChevronLeft,
    Search,
    Filter
} from 'lucide-vue-next';
import { router } from '@inertiajs/vue3';
import { Card } from '@/Components/ui/card';

defineProps({
    students: Array
});

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

const removeStudent = (courseId, userId) => {
    if (confirm('هل أنت متأكد من إلغاء تسجيل هذا الطالب؟')) {
        router.delete(route('teacher.students.destroy', { course: courseId, user: userId }));
    }
};

const toggleMentor = (userId) => {
    router.post(route('teacher.students.toggle-mentor', userId));
};
</script>

<template>
    <Head title="الطلاب المسجلين" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم', url: route('teacher.dashboard') },
        { label: 'الطلاب المسجلين' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none">
                <div></div>
                <div class="flex items-center gap-2">
                    <Button variant="outline" size="sm" class="h-7 text-[10px] font-normal px-3 uppercase tracking-widest border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)]">
                        <Filter class="ml-1.5 h-3 w-3 text-[var(--primary)]" /> تصفية
                    </Button>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-4 max-w-full mx-auto">
                    
                    <!-- Search/Stats Bar -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
                        <Card class="p-3 shadow-none border-[var(--border)] bg-[var(--card)] flex items-center gap-3 rounded-md">
                            <div class="h-8 w-8 rounded bg-[var(--primary)] text-white flex items-center justify-center">
                                <Users class="h-4 w-4" />
                            </div>
                            <div>
                                <div class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">إجمالي الطلاب</div>
                                <div class="text-sm font-normal text-[var(--foreground)]">{{ students.length }}</div>
                            </div>
                        </Card>
                    </div>

                    <div v-if="students.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none">
                        <Users class="h-10 w-10 text-[var(--muted-foreground)] opacity-40 mb-3" />
                        <h3 class="text-[12px] font-normal text-[var(--foreground)]">لا يوجد طلاب مسجلين</h3>
                        <p class="text-[11px] text-[var(--muted-foreground)]">سيظهر الطلاب هنا بمجرد اشتراكهم في كورساتك.</p>
                    </div>

                    <div v-else class="border border-[var(--border)] rounded-md overflow-hidden bg-[var(--card)] shadow-none">
                        <table class="w-full text-right border-collapse text-[12px]">
                            <thead>
                                <tr class="bg-[var(--muted)] border-b border-[var(--border)]">
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">الطالب</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">الكورس</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">تاريخ التسجيل</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">الحالة</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-left">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-[var(--border)] bg-[var(--card)]">
                                <tr v-for="(student, index) in students" :key="index" class="hover:bg-[var(--muted)]">
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-3">
                                            <div class="h-7 w-7 rounded-full bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[10px] font-normal text-[var(--foreground)] shrink-0">
                                                {{ student.name.charAt(0) }}
                                            </div>
                                            <div>
                                                <div class="flex items-center gap-1.5">
                                                    <span class="font-normal text-[var(--foreground)]">{{ student.name }}</span>
                                                    <Award v-if="student.is_mentor" class="h-3 w-3 text-[var(--primary)]" />
                                                </div>
                                                <div class="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1 font-normal mt-0.5">
                                                    <Mail class="h-2.5 w-2.5 opacity-55" /> {{ student.email }}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)] font-normal">
                                            <BookOpen class="h-3 w-3 opacity-60" />
                                            {{ student.course_title }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center text-[var(--muted-foreground)] font-normal text-[11px]">
                                        <div class="flex items-center justify-center gap-1.5">
                                            <Calendar class="h-3 w-3 opacity-55" />
                                            {{ formatDate(student.enrolled_at) }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center">
                                        <button 
                                            @click="toggleMentor(student.id)"
                                            :class="[
                                                'px-2.5 py-0.5 rounded text-[9px] font-normal uppercase tracking-wider border',
                                                student.is_mentor 
                                                    ? 'bg-[var(--accent)] text-[var(--foreground)] border-[var(--primary)] shadow-none' 
                                                    : 'bg-[var(--card)] text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--muted-foreground)]'
                                            ]"
                                        >
                                            {{ student.is_mentor ? 'مرشد معتمد' : 'تعيين كمرشد' }}
                                        </button>
                                    </td>
                                    <td class="p-2.5 text-left">
                                        <div class="flex items-center justify-end">
                                            <Button 
                                                @click="removeStudent(student.course_id, student.id)" 
                                                variant="ghost" 
                                                size="icon" 
                                                class="h-6.5 w-6.5 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500"
                                            >
                                                <Trash2 class="h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
