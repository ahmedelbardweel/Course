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

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>لوحة التحكم</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-black">رقابة التعليقات</span>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-4 max-w-full mx-auto">
                    
                    <div v-if="comments.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 rounded-lg bg-white">
                        <MessageSquare class="h-10 w-10 text-zinc-100 mb-3" />
                        <h3 class="text-[12px] font-bold text-zinc-900">لا توجد تعليقات حالياً</h3>
                        <p class="text-[11px] text-zinc-400">ستظهر هنا جميع التعليقات الموقوتة التي يتركها الطلاب على دروسك.</p>
                    </div>

                    <div v-else class="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm">
                        <table class="w-full text-right border-collapse text-[12px]">
                            <thead>
                                <tr class="bg-zinc-50/50 border-b border-zinc-100">
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400">الطالب</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400">الدرس / الكورس</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400">التعليق</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">التوقيت</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-50">
                                <tr v-for="comment in comments" :key="comment.id" class="group hover:bg-zinc-50/30 transition-colors">
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-3">
                                            <div class="h-7 w-7 rounded-full overflow-hidden border border-zinc-100 bg-zinc-50 shrink-0">
                                                <img :src="`https://ui-avatars.com/api/?name=${comment.user?.name}&background=f4f4f5&color=71717a&bold=true&size=64`" />
                                            </div>
                                            <div>
                                                <div class="font-bold text-zinc-900">{{ comment.user?.name }}</div>
                                                <div class="text-[10px] text-zinc-400 font-medium flex items-center gap-1 mt-0.5">
                                                    <Mail class="h-2.5 w-2.5 opacity-50" /> {{ comment.user?.email }}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium group-hover:text-zinc-900 transition-colors">
                                            <PlayCircle class="h-3 w-3 opacity-60" />
                                            {{ comment.lesson?.title }}
                                        </div>
                                        <div class="text-[9px] text-zinc-300 font-black uppercase tracking-widest mt-0.5">{{ comment.lesson?.course?.title }}</div>
                                    </td>
                                    <td class="p-2.5">
                                        <div class="max-w-md line-clamp-2 text-zinc-600 font-medium leading-relaxed italic">
                                            "{{ comment.content }}"
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center">
                                        <Badge variant="secondary" class="h-5 text-[10px] font-mono font-bold bg-zinc-900 text-white border-none px-2 rounded">
                                            {{ formatTimestamp(comment.timestamp) }}
                                        </Badge>
                                    </td>
                                    <td class="p-2.5 text-left">
                                        <div class="flex items-center justify-end">
                                            <Button @click="deleteComment(comment.id)" variant="ghost" size="icon" class="h-7 w-7 rounded text-zinc-200 hover:text-red-500 hover:bg-red-50 transition-all">
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
