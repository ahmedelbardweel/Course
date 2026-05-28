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

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'الرئيسية', url: route('dashboard') },
        { label: 'الدورات', url: route('courses.index') },
        { label: course.title, url: route('courses.show', course.slug) },
        { label: 'إتمام الدفع' }
    ]">
        <div class="flex flex-col h-full bg-[var(--background)] text-[12px]">

            <main class="flex-1 p-4 lg:p-8 text-right overflow-y-auto">
                <div class="w-full max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        <!-- Left: Order Summary (Floating on Mobile) -->
                        <div class="lg:col-span-5 order-2 lg:order-1">
                            <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden sticky top-4">
                                <div class="aspect-video relative overflow-hidden border-b border-[var(--border)]">
                                    <img v-if="course.thumbnail" :src="course.thumbnail" class="w-full h-full object-cover" />
                                    <div class="absolute inset-0 bg-[var(--foreground)]/40 flex items-end p-4">
                                        <div class="space-y-1">
                                            <Badge variant="secondary" class="h-4 text-[8px] font-normal uppercase tracking-widest bg-[var(--card)] text-[var(--foreground)] border-none rounded">{{ course.category?.name }}</Badge>
                                            <h3 class="text-[14px] font-normal text-white leading-tight line-clamp-1">{{ course.title }}</h3>
                                        </div>
                                    </div>
                                </div>
                                
                                <CardHeader class="p-4 border-b border-[var(--border)] bg-[var(--card)]">
                                    <CardTitle class="text-[10px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]">تفاصيل الفاتورة</CardTitle>
                                </CardHeader>

                                <CardContent class="p-4 space-y-4 bg-[var(--card)]">
                                    <div class="space-y-2.5">
                                        <div class="flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]">
                                            <span>سعر الكورس الأصلي</span>
                                            <span class="font-normal text-[var(--foreground)]">${{ course.price }}</span>
                                        </div>
                                        <div class="flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]">
                                            <span>رسوم المعالجة</span>
                                            <span class="text-[var(--foreground)] font-normal">مجاني</span>
                                        </div>
                                        <div class="flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]">
                                            <span>الخصومات المطبقة</span>
                                            <span class="text-[var(--muted-foreground)] font-normal">$0.00</span>
                                        </div>
                                    </div>
                                    
                                    <Separator class="bg-[var(--border)]" />
                                    
                                    <div class="flex justify-between items-center py-2">
                                        <span class="text-[13px] font-normal text-[var(--foreground)] uppercase">الإجمالي النهائي</span>
                                        <div class="text-right">
                                            <div class="text-2xl font-normal text-[var(--foreground)] tracking-tighter">${{ course.price }}</div>
                                            <div class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest mt-1">مدى الحياة</div>
                                        </div>
                                    </div>
                                </CardContent>
                                
                                <CardFooter class="bg-[var(--muted)] p-4 flex flex-col gap-3 border-t border-[var(--border)]">
                                    <h4 class="text-[9px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] w-full mb-1">مزايا الاشتراك:</h4>
                                    <div class="w-full space-y-2">
                                        <div class="flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]">
                                            <CheckCircle2 class="h-3 w-3 text-[var(--primary)]" /> وصول كامل لجميع الدروس ({{ course.lessons_count }} درس)
                                        </div>
                                        <div class="flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]">
                                            <CheckCircle2 class="h-3 w-3 text-[var(--primary)]" /> شهادة إتمام رقمية معتمدة
                                        </div>
                                        <div class="flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]">
                                            <CheckCircle2 class="h-3 w-3 text-[var(--primary)]" /> استخدام غير محدود للمساعد الذكي AI
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>

                        <!-- Right: Payment Methods & Info -->
                        <div class="lg:col-span-7 order-1 lg:order-2 space-y-6">
                            <div class="space-y-1 pb-2">
                                <h1 class="text-2xl font-normal text-[var(--foreground)] tracking-tight leading-none uppercase">إتمام عملية الدفع</h1>
                                <p class="text-[11px] text-[var(--muted-foreground)] font-normal leading-relaxed max-w-lg">اختر وسيلة الدفع المناسبة وأكمل العملية بأمان للبدء فوراً في رحلتك التعليمية.</p>
                            </div>

                            <Card class="border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden">
                                <CardHeader class="p-4 border-b border-[var(--border)] flex flex-row items-center justify-between">
                                    <CardTitle class="text-[11px] font-normal uppercase tracking-widest flex items-center gap-2 text-[var(--foreground)]">
                                        <div class="h-7 w-7 rounded bg-[var(--primary)] text-white flex items-center justify-center">
                                            <CreditCard class="h-3.5 w-3.5" />
                                        </div>
                                        بطاقة الائتمان / الخصم
                                    </CardTitle>
                                    <div class="flex items-center gap-2 grayscale opacity-40">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" class="h-2.5" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" class="h-3.5" />
                                    </div>
                                </CardHeader>
                                <CardContent class="p-6 space-y-6 bg-[var(--card)]">
                                    <div class="space-y-4">
                                        <div class="space-y-1.5">
                                            <Label class="text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">الاسم على البطاقة</Label>
                                            <Input placeholder="John Doe" class="h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]" />
                                        </div>
                                        <div class="space-y-1.5">
                                            <Label class="text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">رقم البطاقة</Label>
                                            <div class="relative">
                                                <Input placeholder="0000 0000 0000 0000" class="h-9 text-[12px] font-mono font-normal pl-12 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)] tracking-widest" />
                                                <Lock class="absolute left-3 top-2.5 h-4 w-4 text-[var(--muted-foreground)]" />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div class="space-y-1.5">
                                                <Label class="text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">تاريخ الانتهاء</Label>
                                                <Input placeholder="MM/YY" class="h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]" />
                                            </div>
                                            <div class="space-y-1.5">
                                                <Label class="text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest">رمز الأمان (CVV)</Label>
                                                <Input placeholder="123" class="h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter class="bg-[var(--muted)] p-4 flex items-center gap-3 border-t border-[var(--border)]">
                                    <div class="h-7 w-7 rounded bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] flex items-center justify-center shrink-0">
                                        <ShieldCheck class="h-3.5 w-3.5 text-[var(--primary)]" />
                                    </div>
                                    <p class="text-[10px] font-normal text-[var(--muted-foreground)] italic">نحن نستخدم تشفيراً عالمياً 256-bit لضمان أمن بياناتك المالية.</p>
                                </CardFooter>
                            </Card>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
                                <Link :href="route('courses.show', course.slug)">
                                    <Button variant="ghost" class="h-8 text-[11px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-md px-6 bg-transparent border border-[var(--border)] hover:bg-[var(--muted)]">
                                        <ChevronLeft class="h-3.5 w-3.5 ml-1.5" /> العودة للتفاصيل
                                    </Button>
                                </Link>
                                <Button 
                                    @click="handlePayment" 
                                    :disabled="isProcessing"
                                    class="h-10 text-[12px] font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded-md px-8 shadow-none border-none group"
                                >
                                    <Loader2 v-if="isProcessing" class="ml-2 h-4 w-4 animate-spin" />
                                    <span v-else class="flex items-center gap-2">
                                        دفع ${{ course.price }} والاشتراك الآن
                                        <Wallet class="h-3.5 w-3.5 opacity-50" />
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
