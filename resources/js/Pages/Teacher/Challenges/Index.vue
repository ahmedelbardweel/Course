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

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>لوحة التحكم</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-bold">التحديات الأسبوعية</span>
                </div>
                <Link :href="route('teacher.challenges.create')">
                    <Button size="sm" class="h-7 text-[11px] px-4 font-bold tracking-tight">
                        <Plus class="ml-1.5 h-3 w-3" /> إنشاء تحدي جديد
                    </Button>
                </Link>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-4 max-w-full mx-auto">
                    
                    <div v-if="challenges.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 rounded-lg bg-white">
                        <Gamepad2 class="h-10 w-10 text-zinc-200 mb-3" />
                        <h3 class="text-[12px] font-bold text-zinc-900">لا توجد تحديات حالياً</h3>
                        <p class="text-[11px] text-zinc-400">ابدأ الآن بإضافة أول تحدي تفاعلي لطلابك.</p>
                        <Link :href="route('teacher.challenges.create')" class="mt-6">
                            <Button variant="outline" size="sm" class="h-7 text-[11px] font-bold px-6">إضافة أول تحدي</Button>
                        </Link>
                    </div>

                    <div v-else class="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm">
                        <table class="w-full text-right border-collapse text-[12px]">
                            <thead>
                                <tr class="bg-zinc-50/50 border-b border-zinc-100">
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400">التحدي</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400">الكورس</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">النقاط</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">المشاركين</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">تاريخ الانتهاء</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">الحالة</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-50">
                                <tr v-for="challenge in challenges" :key="challenge.id" class="group hover:bg-zinc-50/30 transition-colors">
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-2.5">
                                            <div class="h-6 w-6 rounded bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                                <Trophy class="h-3 w-3" />
                                            </div>
                                            <span class="font-bold text-zinc-900">{{ challenge.title }}</span>
                                        </div>
                                    </td>
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium">
                                            <BookOpen class="h-3 w-3 opacity-60" />
                                            {{ challenge.course?.title }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center font-black text-xs text-emerald-600">
                                        {{ challenge.points }} <span class="text-[9px] uppercase">نقطة</span>
                                    </td>
                                    <td class="p-2.5 text-center">
                                        <div class="flex items-center justify-center gap-1.5 text-zinc-500 font-bold">
                                            <Users class="h-3 w-3 opacity-50" />
                                            {{ challenge.users_count }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center text-[11px] font-medium text-zinc-400">
                                        <div class="flex items-center justify-center gap-1.5">
                                            <Calendar class="h-3 w-3 opacity-50" />
                                            {{ new Date(challenge.end_date).toLocaleDateString('ar-SA') }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center">
                                        <Badge :variant="challenge.is_active ? 'secondary' : 'outline'" class="h-4.5 text-[9px] font-black uppercase px-2 rounded">
                                            {{ challenge.is_active ? 'نشط' : 'متوقف' }}
                                        </Badge>
                                    </td>
                                    <td class="p-2.5 text-left">
                                        <div class="flex items-center justify-end gap-1">
                                            <Link :href="route('teacher.challenges.edit', challenge.id)">
                                                <Button variant="ghost" size="icon" class="h-6.5 w-6.5 rounded hover:bg-zinc-100">
                                                    <Edit class="h-3.5 w-3.5 text-zinc-500" />
                                                </Button>
                                            </Link>
                                            <Button @click="deleteChallenge(challenge.id)" variant="ghost" size="icon" class="h-6.5 w-6.5 rounded text-zinc-200 hover:text-red-500 hover:bg-red-50 transition-all">
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
