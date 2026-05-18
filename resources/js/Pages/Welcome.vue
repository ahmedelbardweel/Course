<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import CourseCard from '@/Components/CourseCard.vue';
import { Badge } from '@/Components/ui/badge';
import { 
    ChevronLeft, 
    ArrowRight, 
    Sparkles, 
    PlayCircle, 
    Users, 
    Trophy, 
    Globe, 
    CheckCircle2,
    LayoutGrid,
    MessageSquare,
    Zap,
    MousePointer2
} from 'lucide-vue-next';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    courses: Array,
});
</script>

<template>
    <Head title="المستقبل يبدأ هنا" />

    <div class="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white text-[12px]">
        
        <!-- Premium Navigation -->
        <nav class="h-11 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 flex items-center justify-between">
            <div class="flex items-center gap-8">
                <Link href="/" class="text-[18px] font-black tracking-tighter text-zinc-900 flex items-center gap-1">
                    <div class="h-6 w-6 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-[12px]">C</div>
                    <span>كورس</span>
                </Link>
                <div class="hidden lg:flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-zinc-400">
                    <Link href="#" class="hover:text-zinc-900 transition-colors">الكورسات</Link>
                    <Link href="#" class="hover:text-zinc-900 transition-colors">المسارات الذكية</Link>
                    <Link href="#" class="hover:text-zinc-900 transition-colors">عن المنصة</Link>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <template v-if="canLogin">
                    <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 px-4 h-8 flex items-center transition-colors">لوحة التحكم</Link>
                    <template v-else>
                        <Link :href="route('login')">
                            <Button variant="ghost" class="h-8 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900">تسجيل الدخول</Button>
                        </Link>
                        <Link :href="route('register')">
                            <Button class="h-8 bg-zinc-900 text-white hover:bg-zinc-800 text-[11px] font-black uppercase tracking-widest px-6 rounded-full shadow-lg shadow-zinc-900/20">
                                انضم إلينا مجاناً
                            </Button>
                        </Link>
                    </template>
                </template>
            </div>
        </nav>

        <main>
            <!-- Hero Section: Compact & Wide -->
            <section class="relative py-16 lg:py-24 overflow-hidden bg-white">
                <div class="container mx-auto px-4 relative z-10">
                    <div class="max-w-4xl mx-auto text-center space-y-8">
                        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-black uppercase tracking-widest text-zinc-400 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
                            <Sparkles class="h-3 w-3 text-emerald-500" /> الجيل القادم من التعليم الإلكتروني
                        </div>
                        <h1 class="text-4xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-zinc-900 animate-in fade-in slide-in-from-top-6 duration-700">
                            تعلم ما يجعلك <span class="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-400 to-zinc-900">خارج الصندوق</span>
                        </h1>
                        <p class="text-[13px] lg:text-[15px] text-zinc-500 font-medium leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-top-8 duration-1000">
                            منصة تعليمية متكاملة مدعومة بالذكاء الاصطناعي، توفر لك تجربة تعليمية فريدة، تفاعلية، ولحظية لتبني مستقبلك المهني بأسلوب عصري.
                        </p>
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 animate-in fade-in slide-in-from-top-10 duration-1000">
                            <Button size="lg" class="h-11 px-10 text-[12px] font-black uppercase tracking-widest bg-zinc-900 text-white hover:bg-zinc-800 rounded-full shadow-2xl shadow-zinc-900/30">
                                استعرض الكورسات <ChevronLeft class="mr-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline" class="h-11 px-10 text-[12px] font-black uppercase tracking-widest border-zinc-200 rounded-full hover:bg-zinc-50">
                                تحدث مع المساعد AI <MessageSquare class="mr-2 h-4 w-4 opacity-40" />
                            </Button>
                        </div>
                    </div>
                </div>
                
                <!-- Decorative Elements -->
                <div class="absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 blur-[120px] opacity-[0.05] bg-zinc-900 rounded-full"></div>
                <div class="absolute bottom-0 right-1/4 -z-10 h-[300px] w-[300px] blur-[100px] opacity-[0.05] bg-zinc-400 rounded-full"></div>
                <div class="absolute top-20 right-20 text-zinc-50 opacity-[0.4] -rotate-12 pointer-events-none select-none">
                    <Zap class="h-64 w-64" />
                </div>
            </section>

            <!-- Features Grid -->
            <section class="py-16 border-y border-zinc-50 bg-zinc-50/20">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="space-y-4 text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group">
                            <div class="h-12 w-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                                <Sparkles class="h-6 w-6" />
                            </div>
                            <h3 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight">ذكاء اصطناعي تفاعلي</h3>
                            <p class="text-[11px] text-zinc-400 font-medium leading-relaxed">مساعد ذكي يرافقك في كل خطوة، يشرح لك المفاهيم المعقدة ويختبر مهاراتك بشكل لحظي.</p>
                        </div>
                        <div class="space-y-4 text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group">
                            <div class="h-12 w-12 rounded-xl bg-white border border-zinc-100 text-zinc-900 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                                <LayoutGrid class="h-6 w-6" />
                            </div>
                            <h3 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight">مسارات تعلم مخصصة</h3>
                            <p class="text-[11px] text-zinc-400 font-medium leading-relaxed">خرائط طريق ذكية يتم رسمها بناءً على أهدافك المهنية ومستواك الحالي لضمان الوصول للقمة.</p>
                        </div>
                        <div class="space-y-4 text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group">
                            <div class="h-12 w-12 rounded-xl bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                                <Trophy class="h-6 w-6" />
                            </div>
                            <h3 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight">شهادات معتمدة</h3>
                            <p class="text-[11px] text-zinc-400 font-medium leading-relaxed">وثق مهاراتك بشهادات رقمية معتمدة تدعم ملفك الشخصي وتفتح لك أبواب كبرى الشركات.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Courses: Wide & High Density -->
            <section class="py-24 bg-white">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div class="space-y-2">
                            <div class="flex items-center gap-2">
                                <div class="h-6 w-1.5 bg-zinc-900 rounded-full"></div>
                                <h2 class="text-xl font-black text-zinc-900 uppercase tracking-tight">الكورسات الأكثر طلباً</h2>
                            </div>
                            <p class="text-[11px] text-zinc-400 font-medium uppercase tracking-[0.2em]">اختر من بين مئات الكورسات المصممة بواسطة خبراء الصناعة</p>
                        </div>
                        <Link href="#" class="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
                            عرض جميع الكورسات <ArrowRight class="h-3 w-3 opacity-50" />
                        </Link>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                        <CourseCard 
                            v-for="course in courses" 
                            :key="course.id"
                            :id="course.id"
                            :slug="course.slug"
                            :title="course.title"
                            :description="course.description"
                            :price="'$' + course.price"
                            :category="course.category?.name"
                            :thumbnail="course.thumbnail"
                        />
                    </div>
                </div>
            </section>

            <!-- Trust / Stats Bar -->
            <section class="py-12 border-t border-zinc-50 bg-zinc-50/10">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
                        <div class="space-y-1">
                            <div class="text-2xl font-black text-zinc-900 tracking-tighter uppercase">+50k</div>
                            <div class="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">طالب نشط</div>
                        </div>
                        <div class="space-y-1">
                            <div class="text-2xl font-black text-zinc-900 tracking-tighter uppercase">+200</div>
                            <div class="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">خبير تعليمي</div>
                        </div>
                        <div class="space-y-1">
                            <div class="text-2xl font-black text-zinc-900 tracking-tighter uppercase">98%</div>
                            <div class="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">نسبة النجاح</div>
                        </div>
                        <div class="space-y-1">
                            <div class="text-2xl font-black text-zinc-900 tracking-tighter uppercase">24/7</div>
                            <div class="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">دعم ذكي</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-24 bg-white relative overflow-hidden">
                <div class="container mx-auto px-4 relative z-10 text-center space-y-8">
                    <h2 class="text-3xl lg:text-5xl font-black tracking-tighter text-zinc-900 uppercase leading-none">جاهز لتبدأ رحلتك؟</h2>
                    <p class="text-[13px] text-zinc-500 font-medium max-w-lg mx-auto leading-relaxed uppercase tracking-tight">انضم إلى آلاف الطلاب الذين غيروا حياتهم المهنية من خلال منصتنا. ابدأ اليوم مجاناً.</p>
                    <div class="flex justify-center">
                        <Link :href="route('register')">
                            <Button size="lg" class="h-12 px-12 text-[12px] font-black uppercase tracking-widest bg-zinc-900 text-white hover:bg-zinc-800 rounded-full shadow-2xl shadow-zinc-900/30 group">
                                ابدأ الآن مجاناً <MousePointer2 class="mr-2 h-4 w-4 group-hover:scale-125 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>

        <!-- Compact Footer -->
        <footer class="border-t py-8 bg-white">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div class="text-[14px] font-black tracking-tighter uppercase">كورس</div>
                    <div class="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        <Link href="#" class="hover:text-zinc-900 transition-colors">الشروط</Link>
                        <Link href="#" class="hover:text-zinc-900 transition-colors">الخصوصية</Link>
                        <Link href="#" class="hover:text-zinc-900 transition-colors">تواصل معنا</Link>
                    </div>
                    <div class="text-[9px] font-black text-zinc-300 uppercase tracking-widest">© 2024 كورس. جميع الحقوق محفوظة.</div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>
html {
    direction: rtl;
}
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
