<script setup>
import { ref, computed } from 'vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { 
    Plus, 
    Search, 
    Trash2, 
    UserPlus, 
    Mail, 
    Lock, 
    User, 
    BookOpen, 
    Calendar,
    X,
    Loader2,
    AlertCircle,
    CheckCircle2
} from 'lucide-vue-next';

const props = defineProps({
    teachers: {
        type: Array,
        default: () => []
    }
});

// Search functionality
const searchQuery = ref('');
const filteredTeachers = computed(() => {
    if (!searchQuery.value) return props.teachers;
    const query = searchQuery.value.toLowerCase();
    return props.teachers.filter(teacher => 
        teacher.name.toLowerCase().includes(query) || 
        teacher.email.toLowerCase().includes(query)
    );
});

// Add Teacher Modal State
const showAddModal = ref(false);

const form = useForm({
    name: '',
    email: '',
    password: '',
});

const openModal = () => {
    form.clearErrors();
    form.reset();
    showAddModal.value = true;
};

const closeModal = () => {
    showAddModal.value = false;
};

const submit = () => {
    form.post(route('admin.teachers.store'), {
        onSuccess: () => {
            closeModal();
            form.reset();
        }
    });
};

const deleteForm = useForm({});
const deleteTeacher = (teacher) => {
    if (confirm(`هل أنت متأكد من رغبتك في حذف المعلم "${teacher.name}"؟`)) {
        deleteForm.delete(route('admin.teachers.destroy', teacher.id));
    }
};

// Date Formatter Helper
const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
};
</script>

<template>
    <AuthenticatedLayout>
        <Head title="إدارة المعلمين - كورس" />

        <template #header>
            إدارة المعلمين
        </template>

        <div class="space-y-6 max-w-7xl mx-auto pb-12">
            <!-- Header Section -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-100 pb-5">
                <div>
                    <h1 class="text-xl font-extrabold text-zinc-950 tracking-tight">قائمة المعلمين</h1>
                    <p class="text-xs text-zinc-500 mt-1 leading-relaxed">أضف معلمين جدد، أو تصفح واحذف المعلمين الحاليين في المنصة.</p>
                </div>
                <Button 
                    @click="openModal"
                    class="h-9 px-4 bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.98] font-bold rounded-md transition-all shadow-sm flex items-center justify-center gap-2 self-start sm:self-auto text-xs"
                >
                    <Plus class="h-3.5 w-3.5" />
                    <span>إضافة معلم جديد</span>
                </Button>
            </div>

            <!-- Flash Messages -->
            <div v-if="$page.props.flash.success" class="bg-zinc-50 border border-zinc-200 text-zinc-900 p-4 rounded-md flex items-start gap-3 animate-in fade-in duration-300">
                <CheckCircle2 class="h-5 w-5 text-zinc-950 shrink-0 mt-0.5" />
                <div>
                    <h5 class="text-xs font-bold">تمت العملية بنجاح</h5>
                    <p class="text-[11px] text-zinc-500 mt-0.5">{{ $page.props.flash.success }}</p>
                </div>
            </div>

            <div v-if="$page.props.flash.error" class="bg-red-50 border border-red-200 text-red-900 p-4 rounded-md flex items-start gap-3 animate-in fade-in duration-300">
                <AlertCircle class="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                    <h5 class="text-xs font-bold text-red-950">تنبيه بالنظام</h5>
                    <p class="text-[11px] text-red-700 mt-0.5">{{ $page.props.flash.error }}</p>
                </div>
            </div>

            <!-- Search and Controls -->
            <div class="relative w-full max-w-sm">
                <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
                    <Search class="h-4 w-4" />
                </span>
                <Input
                    type="text"
                    v-model="searchQuery"
                    placeholder="ابحث عن معلم بالاسم أو البريد الإلكتروني..."
                    class="h-9 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs placeholder:text-zinc-400"
                />
            </div>

            <!-- Teachers List Card -->
            <div class="bg-white border border-zinc-200 rounded-md shadow-sm overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-bold uppercase tracking-wider">
                            <tr>
                                <th class="py-3 px-4 font-bold">الاسم والمعلم</th>
                                <th class="py-3 px-4 font-bold">البريد الإلكتروني</th>
                                <th class="py-3 px-4 font-bold">الكورسات المسؤولة</th>
                                <th class="py-3 px-4 font-bold">تاريخ الانضمام</th>
                                <th class="py-3 px-4 font-bold text-left">العمليات</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-100">
                            <tr 
                                v-for="teacher in filteredTeachers" 
                                :key="teacher.id"
                                class="hover:bg-zinc-50/50 transition-colors"
                            >
                                <td class="py-3.5 px-4">
                                    <div class="flex items-center gap-3">
                                        <div class="h-8 w-8 bg-zinc-100 text-zinc-900 rounded-md flex items-center justify-center font-black text-xs border border-zinc-200">
                                            {{ teacher.name.charAt(0) }}
                                        </div>
                                        <div class="font-bold text-zinc-900 text-xs">
                                            {{ teacher.name }}
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3.5 px-4 text-zinc-500 font-mono text-[11px]">
                                    {{ teacher.email }}
                                </td>
                                <td class="py-3.5 px-4 text-zinc-900 font-semibold">
                                    <div class="flex items-center gap-1.5">
                                        <BookOpen class="h-3.5 w-3.5 text-zinc-400" />
                                        <span>{{ teacher.taught_courses_count || 0 }} كورس</span>
                                    </div>
                                </td>
                                <td class="py-3.5 px-4 text-zinc-500 text-[11px]">
                                    <div class="flex items-center gap-1.5">
                                        <Calendar class="h-3.5 w-3.5 text-zinc-400" />
                                        <span>{{ formatDate(teacher.created_at) }}</span>
                                    </div>
                                </td>
                                <td class="py-3.5 px-4 text-left">
                                    <button 
                                        @click="deleteTeacher(teacher)"
                                        class="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded transition-all inline-flex items-center justify-center"
                                        title="حذف المعلم"
                                    >
                                        <Trash2 class="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                            <tr v-if="filteredTeachers.length === 0">
                                <td colspan="5" class="py-12 text-center text-zinc-400 text-xs">
                                    لا يوجد معلمون يطابقون خيارات البحث.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Add Teacher Modal -->
        <div 
            v-if="showAddModal" 
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm animate-in fade-in duration-300"
            @click.self="closeModal"
        >
            <div 
                class="w-full max-w-md bg-white border border-zinc-200 rounded-md shadow-lg p-6 relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 ease-out"
            >
                <!-- Modal Close -->
                <button 
                    @click="closeModal"
                    class="absolute top-4 left-4 p-1.5 text-zinc-400 hover:text-zinc-950 hover:bg-zinc-50 rounded transition-all"
                >
                    <X class="h-4 w-4" />
                </button>

                <!-- Modal Header -->
                <div class="mb-6">
                    <h3 class="text-sm font-extrabold text-zinc-950 flex items-center gap-2">
                        <UserPlus class="h-4 w-4 text-zinc-900" />
                        <span>إضافة معلم جديد للمنصة</span>
                    </h3>
                    <p class="text-[11px] text-zinc-500 mt-1">أدخل بيانات المعلم لإنشاء حساب مستقل بصلاحيات كاملة.</p>
                </div>

                <!-- Form -->
                <form @submit.prevent="submit" class="space-y-4">
                    <!-- Name -->
                    <div class="space-y-1.5">
                        <Label for="name" class="text-zinc-700 font-bold text-[10px] uppercase tracking-wider">اسم المعلم</Label>
                        <div class="relative group">
                            <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors">
                                <User class="h-4 w-4" />
                            </span>
                            <Input
                                id="name"
                                type="text"
                                class="h-10 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs"
                                v-model="form.name"
                                required
                                placeholder="مثال: أحمد البشير"
                            />
                        </div>
                        <div v-if="form.errors.name" class="text-[10px] font-bold text-red-600 flex items-center gap-1 mt-1">
                            <AlertCircle class="h-3 w-3 shrink-0" />
                            {{ form.errors.name }}
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="space-y-1.5">
                        <Label for="email" class="text-zinc-700 font-bold text-[10px] uppercase tracking-wider">البريد الإلكتروني</Label>
                        <div class="relative group">
                            <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors">
                                <Mail class="h-4 w-4" />
                            </span>
                            <Input
                                id="email"
                                type="email"
                                class="h-10 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs"
                                v-model="form.email"
                                required
                                placeholder="name@example.com"
                            />
                        </div>
                        <div v-if="form.errors.email" class="text-[10px] font-bold text-red-600 flex items-center gap-1 mt-1">
                            <AlertCircle class="h-3 w-3 shrink-0" />
                            {{ form.errors.email }}
                        </div>
                    </div>

                    <!-- Password -->
                    <div class="space-y-1.5">
                        <Label for="password" class="text-zinc-700 font-bold text-[10px] uppercase tracking-wider">كلمة المرور المؤقتة</Label>
                        <div class="relative group">
                            <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors">
                                <Lock class="h-4 w-4" />
                            </span>
                            <Input
                                id="password"
                                type="password"
                                class="h-10 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs"
                                v-model="form.password"
                                required
                                placeholder="••••••••"
                            />
                        </div>
                        <div v-if="form.errors.password" class="text-[10px] font-bold text-red-600 flex items-center gap-1 mt-1">
                            <AlertCircle class="h-3 w-3 shrink-0" />
                            {{ form.errors.password }}
                        </div>
                    </div>

                    <!-- Submit -->
                    <Button
                        type="submit"
                        class="w-full h-10 bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.98] font-bold rounded-md transition-all shadow-sm flex items-center justify-center gap-2 mt-4 text-xs"
                        :disabled="form.processing"
                    >
                        <Loader2 v-if="form.processing" class="h-3.5 w-3.5 animate-spin" />
                        <span>إنشاء حساب المعلم</span>
                    </Button>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
/* Scoped custom styling if needed */
</style>
