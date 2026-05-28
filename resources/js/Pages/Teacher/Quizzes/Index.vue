<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { 
    Plus, 
    Trash2, 
    Edit, 
    HelpCircle, 
    BookOpen, 
    ClipboardList,
    ChevronLeft
} from 'lucide-vue-next';

const props = defineProps({
    quizzes: Array
});

const deleteQuiz = (id) => {
    if (confirm('هل أنت متأكد من حذف هذا الاختبار؟')) {
        router.delete(route('teacher.quizzes.destroy', id));
    }
};
</script>

<template>
    <Head title="إدارة الاختبارات" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم', url: route('teacher.dashboard') },
        { label: 'الاختبارات' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none">
                <div></div>
                <Link :href="route('teacher.quizzes.create')">
                    <Button size="sm" class="h-7 text-[11px] px-4 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded shadow-none">
                        <Plus class="ml-1.5 h-3 w-3" /> إنشاء اختبار
                    </Button>
                </Link>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-4 max-w-full mx-auto">
                    
                    <div v-if="quizzes.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none">
                        <div class="h-10 w-10 rounded-full bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center mb-3">
                            <ClipboardList class="h-5 w-5 text-[var(--muted-foreground)]" />
                        </div>
                        <h3 class="text-[12px] font-normal text-[var(--foreground)]">لا يوجد أي اختبار حالياً</h3>
                        <p class="text-[11px] text-[var(--muted-foreground)] mb-6">ابدأ الآن بإضافة أول اختبار لطلابك.</p>
                        <Link :href="route('teacher.quizzes.create')">
                            <Button variant="outline" size="sm" class="h-7 text-[11px] font-normal border-[var(--border)] bg-[var(--card)] px-6 text-[var(--foreground)]">إضافة أول اختبار</Button>
                        </Link>
                    </div>

                    <div v-else class="border border-[var(--border)] rounded-md overflow-hidden bg-[var(--card)] shadow-none">
                        <table class="w-full text-right border-collapse text-[12px]">
                            <thead>
                                <tr class="bg-[var(--muted)] border-b border-[var(--border)]">
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">الاختبار</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">الكورس</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">النجاح</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">الحالة</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-left">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-[var(--border)] bg-[var(--card)]">
                                <tr v-for="quiz in quizzes" :key="quiz.id" class="hover:bg-[var(--muted)]">
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-2.5">
                                            <div class="h-6 w-6 rounded bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)]">
                                                <HelpCircle class="h-3 w-3 text-[var(--primary)]" />
                                            </div>
                                            <span class="font-normal text-[var(--foreground)]">{{ quiz.title }}</span>
                                        </div>
                                    </td>
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)] font-normal">
                                            <BookOpen class="h-3 w-3 opacity-60" />
                                            {{ quiz.course?.title }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center font-normal text-[var(--foreground)]">
                                        {{ quiz.passing_score }}%
                                    </td>
                                    <td class="p-2.5 text-center">
                                        <Badge :variant="quiz.is_published ? 'secondary' : 'outline'" class="h-4.5 text-[9px] font-normal uppercase px-2 rounded bg-[var(--accent)] text-[var(--foreground)] border-[var(--border)]">
                                            {{ quiz.is_published ? 'منشور' : 'مسودة' }}
                                        </Badge>
                                    </td>
                                    <td class="p-2.5 text-left">
                                        <div class="flex items-center justify-end gap-1">
                                            <Link :href="route('teacher.quizzes.edit', quiz.id)">
                                                <Button variant="ghost" size="icon" class="h-6.5 w-6.5 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]">
                                                    <Edit class="h-3.5 w-3.5" />
                                                </Button>
                                            </Link>
                                            <Button @click="deleteQuiz(quiz.id)" variant="ghost" size="icon" class="h-6.5 w-6.5 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500">
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
