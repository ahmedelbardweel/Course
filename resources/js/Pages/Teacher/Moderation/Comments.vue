<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { 
    MessageSquare, 
    Trash2, 
    User, 
    PlayCircle,
    BookOpen,
    ChevronLeft,
    Clock,
    MoreVertical,
    Mail
} from 'lucide-vue-next';

defineProps({
    comments: Array
});

const deleteComment = (id) => {
    if (confirm('هل أنت متأكد من حذف هذا التعليق؟')) {
        router.delete(route('teacher.moderation.comments.destroy', id));
    }
};

const formatTimestamp = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
};
</script>

<template>
    <Head title="رقابة التعليقات" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم', url: route('teacher.dashboard') },
        { label: 'رقابة التعليقات' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-4 max-w-full mx-auto">
                    
                    <div v-if="comments.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none">
                        <MessageSquare class="h-10 w-10 text-[var(--muted-foreground)] opacity-40 mb-3" />
                        <h3 class="text-[12px] font-normal text-[var(--foreground)]">لا توجد تعليقات حالياً</h3>
                        <p class="text-[11px] text-[var(--muted-foreground)]">ستظهر هنا جميع التعليقات الموقوتة التي يتركها الطلاب على دروسك.</p>
                    </div>

                    <div v-else class="border border-[var(--border)] rounded-md overflow-hidden bg-[var(--card)] shadow-none">
                        <table class="w-full text-right border-collapse text-[12px]">
                            <thead>
                                <tr class="bg-[var(--muted)] border-b border-[var(--border)]">
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">الطالب</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">الدرس / الكورس</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">التعليق</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">التوقيت</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-left">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-[var(--border)] bg-[var(--card)]">
                                <tr v-for="comment in comments" :key="comment.id" class="hover:bg-[var(--muted)]">
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-3">
                                            <div class="h-7 w-7 rounded-full overflow-hidden border border-[var(--border)] bg-[var(--muted)] shrink-0">
                                                <img :src="`https://ui-avatars.com/api/?name=${comment.user?.name}&background=fafaf7&color=26251e&bold=false&size=64`" />
                                            </div>
                                            <div>
                                                <div class="font-normal text-[var(--foreground)]">{{ comment.user?.name }}</div>
                                                <div class="text-[10px] text-[var(--muted-foreground)] font-normal flex items-center gap-1 mt-0.5">
                                                    <Mail class="h-2.5 w-2.5 opacity-55" /> {{ comment.user?.email }}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-1.5 text-[11px] text-[var(--foreground)] font-normal">
                                            <PlayCircle class="h-3 w-3 text-[var(--primary)]" />
                                            {{ comment.lesson?.title }}
                                        </div>
                                        <div class="text-[9px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest mt-0.5">{{ comment.lesson?.course?.title }}</div>
                                    </td>
                                    <td class="p-2.5">
                                        <div class="max-w-md line-clamp-2 text-[var(--foreground)] font-normal leading-relaxed italic">
                                            "{{ comment.content }}"
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center">
                                        <Badge variant="secondary" class="h-5 text-[10px] font-mono font-normal bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] px-2 rounded shadow-none">
                                            {{ formatTimestamp(comment.timestamp) }}
                                        </Badge>
                                    </td>
                                    <td class="p-2.5 text-left">
                                        <div class="flex items-center justify-end">
                                            <Button @click="deleteComment(comment.id)" variant="ghost" size="icon" class="h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500">
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
