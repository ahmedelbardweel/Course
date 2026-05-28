<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { 
    Plus, 
    Trophy, 
    Calendar, 
    Users, 
    Edit, 
    Trash2,
    ChevronLeft,
    Gamepad2,
    BookOpen
} from 'lucide-vue-next';

defineProps({
    challenges: Array
});

const deleteChallenge = (id) => {
    if (confirm('هل أنت متأكد من حذف هذا التحدي؟')) {
        router.delete(route('teacher.challenges.destroy', id));
    }
};
</script>

<template>
    <Head title="إدارة التحديات" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم', url: route('teacher.dashboard') },
        { label: 'التحديات' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none">
                <div></div>
                <Link :href="route('teacher.challenges.create')">
                    <Button size="sm" class="h-7 text-[11px] px-4 font-normal tracking-tight bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded shadow-none">
                        <Plus class="ml-1.5 h-3 w-3" /> إنشاء تحدي جديد
                    </Button>
                </Link>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-4 max-w-full mx-auto">
                    
                    <div v-if="challenges.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none">
                        <Gamepad2 class="h-10 w-10 text-[var(--muted-foreground)] opacity-40 mb-3" />
                        <h3 class="text-[12px] font-normal text-[var(--foreground)]">لا توجد تحديات حالياً</h3>
                        <p class="text-[11px] text-[var(--muted-foreground)]">ابدأ الآن بإضافة أول تحدي تفاعلي لطلابك.</p>
                        <Link :href="route('teacher.challenges.create')" class="mt-6">
                            <Button variant="outline" size="sm" class="h-7 text-[11px] font-normal border-[var(--border)] bg-[var(--card)] px-6 text-[var(--foreground)]">إضافة أول تحدي</Button>
                        </Link>
                    </div>

                    <div v-else class="border border-[var(--border)] rounded-md overflow-hidden bg-[var(--card)] shadow-none">
                        <table class="w-full text-right border-collapse text-[12px]">
                            <thead>
                                <tr class="bg-[var(--muted)] border-b border-[var(--border)]">
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">التحدي</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">الكورس</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">النقاط</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">المشاركين</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">تاريخ الانتهاء</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">الحالة</th>
                                    <th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-left">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-[var(--border)] bg-[var(--card)]">
                                <tr v-for="challenge in challenges" :key="challenge.id" class="hover:bg-[var(--muted)]">
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-2.5">
                                            <div class="h-6 w-6 rounded bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)]">
                                                <Trophy class="h-3 w-3 text-[var(--primary)]" />
                                            </div>
                                            <span class="font-normal text-[var(--foreground)]">{{ challenge.title }}</span>
                                        </div>
                                    </td>
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)] font-normal">
                                            <BookOpen class="h-3 w-3 opacity-60" />
                                            {{ challenge.course?.title }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center font-normal text-xs text-[var(--primary)]">
                                        {{ challenge.points }} <span class="text-[9px] uppercase text-[var(--muted-foreground)]">نقطة</span>
                                    </td>
                                    <td class="p-2.5 text-center">
                                        <div class="flex items-center justify-center gap-1.5 text-[var(--foreground)] font-normal">
                                            <Users class="h-3 w-3 opacity-55" />
                                            {{ challenge.users_count }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center text-[11px] font-normal text-[var(--muted-foreground)]">
                                        <div class="flex items-center justify-center gap-1.5">
                                            <Calendar class="h-3 w-3 opacity-55" />
                                            {{ new Date(challenge.end_date).toLocaleDateString('ar-SA') }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center">
                                        <Badge :variant="challenge.is_active ? 'secondary' : 'outline'" class="h-4.5 text-[9px] font-normal uppercase px-2 rounded bg-[var(--accent)] text-[var(--foreground)] border-[var(--border)]">
                                            {{ challenge.is_active ? 'نشط' : 'متوقف' }}
                                        </Badge>
                                    </td>
                                    <td class="p-2.5 text-left">
                                        <div class="flex items-center justify-end gap-1">
                                            <Link :href="route('teacher.challenges.edit', challenge.id)">
                                                <Button variant="ghost" size="icon" class="h-6.5 w-6.5 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]">
                                                    <Edit class="h-3.5 w-3.5" />
                                                </Button>
                                            </Link>
                                            <Button @click="deleteChallenge(challenge.id)" variant="ghost" size="icon" class="h-6.5 w-6.5 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500">
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
