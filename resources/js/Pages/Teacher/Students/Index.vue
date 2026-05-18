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

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>لوحة التحكم</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-black">الطلاب المسجلين</span>
                </div>
                <div class="flex items-center gap-2">
                    <Button variant="outline" size="sm" class="h-7 text-[10px] font-black px-3 uppercase tracking-widest border-zinc-200">
                        <Filter class="ml-1.5 h-3 w-3" /> تصفية
                    </Button>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-4 max-w-full mx-auto">
                    
                    <!-- Search/Stats Bar -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
                        <Card class="p-3 shadow-none border-zinc-200 bg-white flex items-center gap-3">
                            <div class="h-8 w-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
                                <Users class="h-4 w-4" />
                            </div>
                            <div>
                                <div class="text-[9px] font-black text-zinc-400 uppercase tracking-widest">إجمالي الطلاب</div>
                                <div class="text-sm font-black">{{ students.length }}</div>
                            </div>
                        </Card>
                    </div>

                    <div v-if="students.length === 0" class="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 rounded-lg bg-white">
                        <Users class="h-10 w-10 text-zinc-200 mb-3" />
                        <h3 class="text-[12px] font-bold text-zinc-900">لا يوجد طلاب مسجلين</h3>
                        <p class="text-[11px] text-zinc-400">سيظهر الطلاب هنا بمجرد اشتراكهم في كورساتك.</p>
                    </div>

                    <div v-else class="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm">
                        <table class="w-full text-right border-collapse text-[12px]">
                            <thead>
                                <tr class="bg-zinc-50/50 border-b border-zinc-100">
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400">الطالب</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400">الكورس</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">تاريخ التسجيل</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">الحالة</th>
                                    <th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-50">
                                <tr v-for="(student, index) in students" :key="index" class="group hover:bg-zinc-50/30 transition-colors">
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-3">
                                            <div class="h-7 w-7 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-black text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                                {{ student.name.charAt(0) }}
                                            </div>
                                            <div>
                                                <div class="flex items-center gap-1.5">
                                                    <span class="font-bold text-zinc-900">{{ student.name }}</span>
                                                    <Award v-if="student.is_mentor" class="h-3 w-3 text-amber-500 fill-amber-500" />
                                                </div>
                                                <div class="text-[10px] text-zinc-400 flex items-center gap-1 font-medium mt-0.5">
                                                    <Mail class="h-2.5 w-2.5 opacity-50" /> {{ student.email }}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="p-2.5">
                                        <div class="flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium">
                                            <BookOpen class="h-3 w-3 opacity-60" />
                                            {{ student.course_title }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center text-zinc-500 font-medium text-[11px]">
                                        <div class="flex items-center justify-center gap-1.5">
                                            <Calendar class="h-3 w-3 opacity-50" />
                                            {{ formatDate(student.enrolled_at) }}
                                        </div>
                                    </td>
                                    <td class="p-2.5 text-center">
                                        <button 
                                            @click="toggleMentor(student.id)"
                                            :class="[
                                                'px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border transition-all',
                                                student.is_mentor 
                                                    ? 'bg-amber-50 text-amber-600 border-amber-200 shadow-sm' 
                                                    : 'bg-zinc-50 text-zinc-400 border-zinc-100 hover:border-zinc-300'
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
                                                class="h-6.5 w-6.5 rounded-md text-zinc-300 hover:text-red-500 hover:bg-red-50"
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
