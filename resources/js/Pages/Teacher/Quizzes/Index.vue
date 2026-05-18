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

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>لوحة التحكم</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-bold">إدارة الاختبارات</span>
                </div>
                <Link :href="route('teacher.quizzes.create')">
                    <Button size="sm" class="h-7 text-[11px] px-4 font-bold">
                        <Plus class="ml-1.5 h-3 w-3" /> إنشاء اختبار
                    </Button>
                </Link>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-4 max-w-full mx-auto">
                    
                    <div v-if="quizzes.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 rounded-lg bg-white">
                        <div class="h-10 w-10 rounded-full bg-zinc-50 flex items-center justify-center mb-3">
                            <ClipboardList class="h-5 w-5 text-zinc-300" />
                        </div>
                        <h3 class="text-[12px] font-bold text-zinc-900">لا يوجد أي اختبار حالياً</h3>
                        <p class="text-[11px] text-zinc-400 mb-6">ابدأ الآن بإضافة أول اختبار لطلابك.</p>
                        <Link :href="route('teacher.quizzes.create')">
                            <Button variant="outline" size="sm" class="h-7 text-[11px] font-bold px-6">إضافة أول اختبار</Button>
                        </Link>
                    </div>

                    <div v-else class="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm">
                        <table class="w-full text-right border-collapse text-[12px]">
                            <thead>
                                <tr class="bg-zinc-50/50 border-b border-zinc-100">
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400">الاختبار</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400">الكورس</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">النجاح</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">الحالة</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-50">
                                <tr v-for="quiz in quizzes" :key="quiz.id" class="group hover:bg-zinc-50/30 transition-colors">
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-2.5">
                                            <div class="h-6 w-6 rounded bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                                <HelpCircle class="h-3 w-3" />
                                            </div>
                                            <span class="font-bold text-zinc-900">{{ quiz.title }}</span>
                                        </div>
                                    </td>
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium">
                                            <BookOpen class="h-3 w-3 opacity-60" />
                                            {{ quiz.course?.title }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center font-bold text-zinc-900">
                                        {{ quiz.passing_score }}%
                                    </td>
                                    <td class="p-2.5 text-center">
                                        <Badge v-if="quiz.is_published" variant="secondary" class="bg-emerald-50 text-emerald-600 hover:bg-emerald-50 border-emerald-100 text-[9px] font-black uppercase tracking-widest h-4.5 px-2">منشور</Badge>
                                        <Badge v-else variant="outline" class="text-zinc-400 border-zinc-200 text-[9px] font-black uppercase tracking-widest h-4.5 px-2">مسودة</Badge>
                                    </td>
                                    <td class="p-2.5 text-left">
                                        <div class="flex items-center justify-end gap-1">
                                            <Link :href="route('teacher.quizzes.edit', quiz.id)">
                                                <Button variant="ghost" size="icon" class="h-6.5 w-6.5 rounded hover:bg-zinc-100">
                                                    <Edit class="h-3.5 w-3.5 text-zinc-500" />
                                                </Button>
                                            </Link>
                                            <Button @click="deleteQuiz(quiz.id)" variant="ghost" size="icon" class="h-6.5 w-6.5 rounded text-zinc-200 hover:text-red-500 hover:bg-red-50">
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
