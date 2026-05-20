<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import CourseCard from '@/Components/CourseCard.vue';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { 
    Search, 
    Compass, 
    ChevronLeft,
    Filter,
    LayoutGrid,
    SearchX
} from 'lucide-vue-next';
import { ref, watch } from 'vue';

const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

const props = defineProps({
    courses: Array,
    categories: Array,
    filters: Object,
});

const search = ref(props.filters?.search || '');
const currentCategory = ref(props.filters?.category || '');

const applyFilters = () => {
    router.get(route('courses.index'), {
        search: search.value,
        category: currentCategory.value
    }, {
        preserveState: true,
        preserveScroll: true,
        replace: true
    });
};

watch(search, debounce(() => {
    applyFilters();
}, 300));

const selectCategory = (slug) => {
    currentCategory.value = currentCategory.value === slug ? '' : slug;
    applyFilters();
};
</script>

<template>
    <Head title="تصفح الكورسات" />

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-white text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-none">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>الرئيسية</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-black">استكشف التعليم</span>
                </div>
                <div class="flex items-center gap-2">
                    <div class="relative w-64 md:w-80">
                        <Search class="absolute right-2.5 top-2 h-3.5 w-3.5 text-zinc-400" />
                        <Input 
                            v-model="search"
                            placeholder="ابحث عن كورس..." 
                            class="h-7.5 pr-8 text-[11px] border-zinc-200 bg-white shadow-none focus-visible:ring-zinc-950 rounded-md"
                        />
                    </div>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto">
                <div class="w-full space-y-6 max-w-full mx-auto">
                    
                    <!-- Search/Categories Bar -->
                    <div class="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b border-zinc-100 pb-4">
                        <div class="flex items-center gap-2">
                            <div class="h-8 w-8 rounded-md bg-zinc-950 text-white flex items-center justify-center">
                                <LayoutGrid class="h-4 w-4" />
                            </div>
                            <div>
                                <h2 class="text-[13px] font-black text-zinc-900 tracking-tight leading-none">جميع التصنيفات</h2>
                                <p class="text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest">اختر ما يناسب شغفك</p>
                            </div>
                        </div>

                        <!-- Categories Buttons -->
                        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-hide max-w-full">
                            <Button 
                                @click="selectCategory('')"
                                :variant="currentCategory === '' ? 'default' : 'ghost'"
                                size="sm"
                                class="h-7 text-[10px] px-4 font-black uppercase tracking-widest rounded-md"
                            >
                                الكل
                            </Button>
                            <Button 
                                v-for="category in categories" 
                                :key="category.id"
                                @click="selectCategory(category.slug)"
                                :variant="currentCategory === category.slug ? 'default' : 'ghost'"
                                size="sm"
                                class="h-7 text-[10px] px-4 font-black uppercase tracking-widest rounded-md transition-colors"
                            >
                                {{ category.name }}
                            </Button>
                        </div>
                    </div>

                    <!-- Courses Grid -->
                    <div v-if="courses.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                        <CourseCard 
                            v-for="course in courses" 
                            :key="course.id"
                            :id="course.id"
                            :slug="course.slug"
                            :title="course.title"
                            :description="course.description"
                            :price="course.price === 0 ? 'مجاني' : '$' + course.price"
                            :category="course.category.name"
                            :thumbnail="course.thumbnail"
                            :is-enrolled="course.is_enrolled"
                        />
                    </div>
                    
                    <!-- Empty State -->
                    <div v-else class="flex flex-col items-center justify-center py-32 border border-dashed border-zinc-200 rounded-xl bg-white shadow-sm">
                        <SearchX class="h-12 w-12 text-zinc-100 mb-4" />
                        <h3 class="text-[13px] font-black text-zinc-900">لا توجد نتائج مطابقة</h3>
                        <p class="text-[11px] text-zinc-400 mb-6">حاول استخدام كلمات مفتاحية أخرى أو تغيير التصنيف.</p>
                        <Button @click="search = ''; selectCategory('')" variant="outline" size="sm" class="h-8 text-[11px] font-black px-8 border-zinc-200">إعادة تعيين البحث</Button>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
