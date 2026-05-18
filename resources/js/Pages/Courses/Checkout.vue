<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle,
    CardFooter
} from '@/Components/ui/card';
import { Separator } from '@/Components/ui/separator';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Badge } from '@/Components/ui/badge';
import { 
    CreditCard, 
    ShieldCheck, 
    Lock, 
    ChevronLeft,
    CheckCircle2,
    Loader2,
    PlayCircle,
    Star,
    Info,
    Wallet
} from 'lucide-vue-next';
import { ref } from 'vue';

const props = defineProps({
    course: Object
});

const isProcessing = ref(false);
const form = useForm({});

const handlePayment = () => {
    isProcessing.value = true;
    setTimeout(() => {
        form.post(route('courses.enroll', props.course.slug));
    }, 1500);
};
</script>

<template>
    <Head title="إتمام الشراء" />

    <AuthenticatedLayout>
        <div class="flex flex-col h-full bg-zinc-50/20 text-[12px]">
            
            <!-- Compact Header -->
            <header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight">
                    <Link :href="route('courses.index')" class="hover:text-zinc-900 transition-colors">الدورات</Link>
                    <ChevronLeft class="h-3 w-3" />
                    <Link :href="route('courses.show', course.slug)" class="hover:text-zinc-900 transition-colors">{{ course.title }}</Link>
                    <ChevronLeft class="h-3 w-3" />
                    <span class="text-zinc-900 font-black">إتمام الدفع</span>
                </div>
            </header>

            <main class="flex-1 p-4 lg:p-8 text-right overflow-y-auto">
                <div class="w-full max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        <!-- Left: Order Summary (Floating on Mobile) -->
                        <div class="lg:col-span-5 order-2 lg:order-1">
                            <Card class="border-zinc-200 shadow-none bg-white rounded-xl overflow-hidden sticky top-4">
                                <div class="aspect-video relative overflow-hidden border-b border-zinc-50">
                                    <img v-if="course.thumbnail" :src="course.thumbnail" class="w-full h-full object-cover" />
                                    <div class="absolute inset-0 bg-zinc-900/40 flex items-end p-4">
                                        <div class="space-y-1">
                                            <Badge variant="secondary" class="h-4 text-[8px] font-black uppercase tracking-widest bg-white/90 text-zinc-900 border-none">{{ course.category?.name }}</Badge>
                                            <h3 class="text-[14px] font-black text-white leading-tight line-clamp-1">{{ course.title }}</h3>
                                        </div>
                                    </div>
                                </div>
                                
                                <CardHeader class="p-4 border-b border-zinc-50">
                                    <CardTitle class="text-[10px] font-black uppercase tracking-widest text-zinc-400">تفاصيل الفاتورة</CardTitle>
                                </CardHeader>

                                <CardContent class="p-4 space-y-4">
                                    <div class="space-y-2.5">
                                        <div class="flex justify-between items-center text-[11px] font-medium text-zinc-500">
                                            <span>سعر الكورس الأصلي</span>
                                            <span class="font-black text-zinc-900">${{ course.price }}</span>
                                        </div>
                                        <div class="flex justify-between items-center text-[11px] font-medium text-zinc-500">
                                            <span>رسوم المعالجة</span>
                                            <span class="text-emerald-600 font-black">مجاني</span>
                                        </div>
                                        <div class="flex justify-between items-center text-[11px] font-medium text-zinc-500">
                                            <span>الخصومات المطبقة</span>
                                            <span class="text-zinc-300 font-black">$0.00</span>
                                        </div>
                                    </div>
                                    
                                    <Separator class="bg-zinc-50" />
                                    
                                    <div class="flex justify-between items-center py-2">
                                        <span class="text-[13px] font-black text-zinc-900 uppercase">الإجمالي النهائي</span>
                                        <div class="text-right">
                                            <div class="text-2xl font-black text-zinc-900 tracking-tighter">${{ course.price }}</div>
                                            <div class="text-[9px] font-black text-zinc-300 uppercase tracking-widest mt-1">مدى الحياة</div>
                                        </div>
                                    </div>
                                </CardContent>
                                
                                <CardFooter class="bg-zinc-50/30 p-4 flex flex-col gap-3">
                                    <h4 class="text-[9px] font-black uppercase tracking-widest text-zinc-400 w-full mb-1">مزايا الاشتراك:</h4>
                                    <div class="w-full space-y-2">
                                        <div class="flex items-center gap-2 text-[10px] font-bold text-zinc-600">
                                            <CheckCircle2 class="h-3 w-3 text-emerald-500" /> وصول كامل لجميع الدروس ({{ course.lessons_count }} درس)
                                        </div>
                                        <div class="flex items-center gap-2 text-[10px] font-bold text-zinc-600">
                                            <CheckCircle2 class="h-3 w-3 text-emerald-500" /> شهادة إتمام رقمية معتمدة
                                        </div>
                                        <div class="flex items-center gap-2 text-[10px] font-bold text-zinc-600">
                                            <CheckCircle2 class="h-3 w-3 text-emerald-500" /> استخدام غير محدود للمساعد الذكي AI
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>

                        <!-- Right: Payment Methods & Info -->
                        <div class="lg:col-span-7 order-1 lg:order-2 space-y-6">
                            <div class="space-y-1 pb-2">
                                <h1 class="text-2xl font-black text-zinc-900 tracking-tight leading-none uppercase">إتمام عملية الدفع</h1>
                                <p class="text-[11px] text-zinc-400 font-medium leading-relaxed max-w-lg">اختر وسيلة الدفع المناسبة وأكمل العملية بأمان للبدء فوراً في رحلتك التعليمية.</p>
                            </div>

                            <Card class="border-zinc-200 shadow-none bg-white rounded-xl overflow-hidden">
                                <CardHeader class="p-4 border-b border-zinc-50 flex flex-row items-center justify-between">
                                    <CardTitle class="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                                        <div class="h-7 w-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center shadow-md">
                                            <CreditCard class="h-3.5 w-3.5" />
                                        </div>
                                        بطاقة الائتمان / الخصم
                                    </CardTitle>
                                    <div class="flex items-center gap-2 grayscale opacity-40">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" class="h-2.5" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" class="h-3.5" />
                                    </div>
                                </CardHeader>
                                <CardContent class="p-6 space-y-6">
                                    <div class="space-y-4">
                                        <div class="space-y-1.5">
                                            <Label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">الاسم على البطاقة</Label>
                                            <Input placeholder="John Doe" class="h-9 text-[12px] font-medium border-zinc-100 bg-zinc-50/20" />
                                        </div>
                                        <div class="space-y-1.5">
                                            <Label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">رقم البطاقة</Label>
                                            <div class="relative">
                                                <Input placeholder="0000 0000 0000 0000" class="h-9 text-[12px] font-mono font-bold pl-12 border-zinc-100 bg-zinc-50/20 tracking-widest" />
                                                <Lock class="absolute left-3 top-2.5 h-4 w-4 text-zinc-200" />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div class="space-y-1.5">
                                                <Label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">تاريخ الانتهاء</Label>
                                                <Input placeholder="MM/YY" class="h-9 text-[12px] font-medium border-zinc-100 bg-zinc-50/20" />
                                            </div>
                                            <div class="space-y-1.5">
                                                <Label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest">رمز الأمان (CVV)</Label>
                                                <Input placeholder="123" class="h-9 text-[12px] font-medium border-zinc-100 bg-zinc-50/20" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter class="bg-zinc-50/50 p-4 flex items-center gap-3 border-t border-zinc-50">
                                    <div class="h-7 w-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-inner">
                                        <ShieldCheck class="h-3.5 w-3.5" />
                                    </div>
                                    <p class="text-[10px] font-medium text-zinc-500 italic">نحن نستخدم تشفيراً عالمياً 256-bit لضمان أمن بياناتك المالية.</p>
                                </CardFooter>
                            </Card>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
                                <Link :href="route('courses.show', course.slug)">
                                    <Button variant="ghost" class="h-8 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 rounded-full px-6 transition-all">
                                        <ChevronLeft class="h-3.5 w-3.5 ml-1.5" /> العودة للتفاصيل
                                    </Button>
                                </Link>
                                <Button 
                                    @click="handlePayment" 
                                    :disabled="isProcessing"
                                    class="h-12 text-[14px] font-black uppercase tracking-[0.1em] bg-zinc-900 text-white hover:bg-zinc-800 rounded-xl px-12 shadow-xl shadow-zinc-900/20 transition-all hover:scale-[1.02] active:scale-95 group"
                                >
                                    <Loader2 v-if="isProcessing" class="ml-2 h-4 w-4 animate-spin" />
                                    <span v-else class="flex items-center gap-2">
                                        دفع ${{ course.price }} والاشتراك الآن
                                        <Wallet class="h-4 w-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </AuthenticatedLayout>
</template>
