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

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <span>لوحة التحكم</span>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-black">تقارير المبيعات</span>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-6 text-right">
                <div class="w-full space-y-6 max-w-full mx-auto">
                    
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg overflow-hidden">
                            <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50">
                                <CardTitle class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">صافي الأرباح (70%)</CardTitle>
                                <div class="h-8 w-8 rounded-md bg-emerald-50 flex items-center justify-center">
                                    <Wallet class="h-4 w-4 text-emerald-600" />
                                </div>
                            </CardHeader>
                            <CardContent class="p-4 pt-4 bg-emerald-50/5">
                                <div class="text-2xl font-black text-zinc-900 tracking-tighter">${{ total_earnings.toFixed(2) }}</div>
                                <div class="flex items-center gap-1 mt-1 text-[10px] text-emerald-600 font-bold uppercase tracking-widest">
                                    <TrendingUp class="h-3 w-3" />
                                    <span>نمو مستقر</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg overflow-hidden">
                            <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50">
                                <CardTitle class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">إجمالي مبيعات المنصة</CardTitle>
                                <div class="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center">
                                    <BarChart3 class="h-4 w-4 text-blue-600" />
                                </div>
                            </CardHeader>
                            <CardContent class="p-4 pt-4">
                                <div class="text-2xl font-black text-zinc-900 tracking-tighter">${{ (total_earnings / 0.7).toFixed(2) }}</div>
                                <div class="text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest">قبل اقتطاع العمولة</div>
                            </CardContent>
                        </Card>

                        <Card class="border-zinc-200 shadow-none bg-white rounded-lg overflow-hidden">
                            <CardHeader class="p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50">
                                <CardTitle class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">متوسط الربح لكل كورس</CardTitle>
                                <div class="h-8 w-8 rounded-md bg-zinc-50 flex items-center justify-center">
                                    <Target class="h-4 w-4 text-zinc-400" />
                                </div>
                            </CardHeader>
                            <CardContent class="p-4 pt-4">
                                <div class="text-2xl font-black text-zinc-900 tracking-tighter">${{ sales.length > 0 ? (total_earnings / sales.length).toFixed(2) : 0 }}</div>
                                <div class="text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest">أداء المحتوى التعليمي</div>
                            </CardContent>
                        </Card>
                    </div>

                    <!-- Detailed Table -->
                    <Card class="border-zinc-200 shadow-none bg-white rounded-lg">
                        <CardHeader class="p-4 border-b border-zinc-50">
                            <CardTitle class="text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900">
                                <PieChart class="h-4 w-4 text-zinc-400" /> تحليل مبيعات الكورسات
                            </CardTitle>
                            <CardDescription class="text-[10px]">تفصيل المبيعات وصافي الربح لكل كورس بشكل مستقل.</CardDescription>
                        </CardHeader>
                        <CardContent class="p-0">
                            <div v-if="sales.length === 0" class="flex flex-col items-center justify-center py-20 text-zinc-400 italic">
                                <BarChart3 class="h-10 w-10 opacity-10 mb-2" />
                                لا توجد بيانات مبيعات حالياً.
                            </div>
                            <div v-else class="overflow-x-auto">
                                <table class="w-full text-right border-collapse text-[12px]">
                                    <thead>
                                        <tr class="bg-zinc-50/50 border-b border-zinc-100">
                                            <th class="p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400">اسم الكورس</th>
                                            <th class="p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">السعر</th>
                                            <th class="p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">الطلاب</th>
                                            <th class="p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center">إجمالي المبيعات</th>
                                            <th class="p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left">صافي ربحك</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-zinc-50">
                                        <tr v-for="(sale, index) in sales" :key="index" class="hover:bg-zinc-50/30 transition-colors group">
                                            <td class="p-3 font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">{{ sale.title }}</td>
                                            <td class="p-3 text-center text-zinc-500 font-medium">${{ sale.price }}</td>
                                            <td class="p-3 text-center">
                                                <div class="flex items-center justify-center gap-1.5 text-zinc-500 font-bold">
                                                    <Users class="h-3 w-3 opacity-50" />
                                                    {{ sale.students }}
                                                </div>
                                            </td>
                                            <td class="p-3 text-center font-black text-zinc-400 tracking-tight">${{ sale.total_revenue }}</td>
                                            <td class="p-3 text-left">
                                                <Badge variant="secondary" class="h-6 text-[11px] font-black bg-emerald-50 text-emerald-600 border-emerald-100/50 px-3 rounded shadow-sm">
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
