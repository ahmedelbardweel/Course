<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle, 
    CardDescription 
} from '@/Components/ui/card';
import { 
    TrendingUp, 
    DollarSign, 
    Users, 
    PieChart, 
    ArrowUpRight,
    ChevronLeft,
    Wallet,
    Target,
    BarChart3
} from 'lucide-vue-next';
import { Badge } from '@/Components/ui/badge';

defineProps({
    sales: Array,
    total_earnings: Number
});
</script>

<template>
    <Head title="تقارير المبيعات" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'لوحة التحكم', url: route('teacher.dashboard') },
        { label: 'تقارير المبيعات' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-6 max-w-full mx-auto">
                    
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden">
                            <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-[var(--border)]">
                                <CardTitle class="text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">صافي الأرباح (70%)</CardTitle>
                                <div class="h-8 w-8 rounded-md bg-[var(--accent)] border border-[var(--border)] flex items-center justify-center">
                                    <Wallet class="h-4 w-4 text-[var(--primary)]" />
                                </div>
                            </CardHeader>
                            <CardContent class="p-4 pt-4 bg-[var(--card)]">
                                <div class="text-2xl font-normal text-[var(--foreground)] tracking-tighter font-sans">${{ total_earnings.toFixed(2) }}</div>
                                <div class="flex items-center gap-1 mt-1 text-[10px] text-[var(--primary)] font-normal uppercase tracking-widest">
                                    <TrendingUp class="h-3 w-3" />
                                    <span>نمو مستقر</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden">
                            <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-[var(--border)]">
                                <CardTitle class="text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">إجمالي مبيعات المنصة</CardTitle>
                                <div class="h-8 w-8 rounded-md bg-[var(--accent)] border border-[var(--border)] flex items-center justify-center">
                                    <BarChart3 class="h-4 w-4 text-[var(--primary)]" />
                                </div>
                            </CardHeader>
                            <CardContent class="p-4 pt-4 bg-[var(--card)]">
                                <div class="text-2xl font-normal text-[var(--foreground)] tracking-tighter font-sans">${{ (total_earnings / 0.7).toFixed(2) }}</div>
                                <div class="text-[10px] text-[var(--muted-foreground)] font-normal mt-1 uppercase tracking-widest">قبل اقتطاع العمولة</div>
                            </CardContent>
                        </Card>

                        <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden">
                            <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-[var(--border)]">
                                <CardTitle class="text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">متوسط الربح لكل كورس</CardTitle>
                                <div class="h-8 w-8 rounded-md bg-[var(--accent)] border border-[var(--border)] flex items-center justify-center">
                                    <Target class="h-4 w-4 text-[var(--primary)]" />
                                </div>
                            </CardHeader>
                            <CardContent class="p-4 pt-4 bg-[var(--card)]">
                                <div class="text-2xl font-normal text-[var(--foreground)] tracking-tighter font-sans">${{ sales.length > 0 ? (total_earnings / sales.length).toFixed(2) : 0 }}</div>
                                <div class="text-[10px] text-[var(--muted-foreground)] font-normal mt-1 uppercase tracking-widest">أداء المحتوى التعليمي</div>
                            </CardContent>
                        </Card>
                    </div>

                    <!-- Detailed Table -->
                    <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md">
                        <CardHeader class="p-4 border-b border-[var(--border)]">
                            <CardTitle class="text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--foreground)]">
                                <PieChart class="h-4 w-4 text-[var(--muted-foreground)]" /> تحليل مبيعات الكورسات
                            </CardTitle>
                            <CardDescription class="text-[10px] text-[var(--muted-foreground)]">تفصيل المبيعات وصافي الربح لكل كورس بشكل مستقل.</CardDescription>
                        </CardHeader>
                        <CardContent class="p-0 bg-[var(--card)]">
                            <div v-if="sales.length === 0" class="flex flex-col items-center justify-center py-20 text-[var(--muted-foreground)] italic">
                                <BarChart3 class="h-10 w-10 opacity-40 mb-2 text-[var(--muted-foreground)]" />
                                لا توجد بيانات مبيعات حالياً.
                            </div>
                            <div v-else class="overflow-x-auto">
                                <table class="w-full text-right border-collapse text-[12px]">
                                    <thead>
                                        <tr class="bg-[var(--muted)] border-b border-[var(--border)]">
                                            <th class="p-3 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">اسم الكورس</th>
                                            <th class="p-3 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">السعر</th>
                                            <th class="p-3 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">الطلاب</th>
                                            <th class="p-3 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center">إجمالي المبيعات</th>
                                            <th class="p-3 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-left">صافي ربحك</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-[var(--border)] bg-[var(--card)]">
                                        <tr v-for="(sale, index) in sales" :key="index" class="hover:bg-[var(--muted)]">
                                            <td class="p-3 font-normal text-[var(--foreground)]">{{ sale.title }}</td>
                                            <td class="p-3 text-center text-[var(--muted-foreground)] font-normal">${{ sale.price }}</td>
                                            <td class="p-3 text-center">
                                                <div class="flex items-center justify-center gap-1.5 text-[var(--foreground)] font-normal">
                                                    <Users class="h-3 w-3 opacity-55" />
                                                    {{ sale.students }}
                                                </div>
                                            </td>
                                            <td class="p-3 text-center font-normal text-[var(--muted-foreground)] tracking-tight">${{ sale.total_revenue }}</td>
                                            <td class="p-3 text-left">
                                                <Badge variant="secondary" class="h-6 text-[11px] font-normal bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] px-3 rounded shadow-none">
                                                    ${{ sale.teacher_share.toFixed(2) }}
                                                </Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
