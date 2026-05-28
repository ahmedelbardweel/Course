<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import CourseCard from '@/Components/CourseCard.vue';
import { Badge } from '@/Components/ui/badge';
import { 
    ChevronLeft, 
    ChevronDown,
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
    MousePointer2,
    Send,
    Terminal,
    BookOpen,
    ArrowDown
} from 'lucide-vue-next';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    courses: Array,
});
</script>

<template>
    <Head title="المستقبل يبدأ هنا - كورس" />

    <div class="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar bg-background text-brand-ink font-sans selection:bg-brand-orange selection:text-white relative">
        
        <!-- Premium Minimalist Navbar - Fixed globally across the entire landing page -->
        <nav class="border-b border-brand-hairline bg-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 px-6 flex items-center justify-between w-full pt-[calc(0.25rem+env(safe-area-inset-top,0px))] pb-2 min-h-[calc(4rem+env(safe-area-inset-top,0px))]">
            <div class="flex items-center gap-8">
                <Link href="/" class="text-[18px] font-bold tracking-tighter text-brand-ink flex items-center gap-2">
                    <div class="h-8 w-8 bg-brand-orange rounded flex items-center justify-center text-white text-[14px] font-semibold">C</div>
                    <span class="font-semibold tracking-tight">كورس</span>
                </Link>
                <div class="hidden md:flex items-center gap-8 text-[12px] font-medium text-brand-body">
                    <a href="#features">عن المنصة</a>
                    <a href="#courses">الكورسات</a>
                    <a href="#ai-experience">المساعد الذكي</a>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <template v-if="canLogin">
                    <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-[12px] font-medium text-brand-body px-4 h-9 flex items-center">
                        لوحة التحكم
                    </Link>
                    <template v-else>
                        <Link :href="route('login')">
                            <Button variant="ghost" class="h-9 text-[12px] font-medium text-brand-ink">تسجيل الدخول</Button>
                        </Link>
                        <Link :href="route('register')">
                            <Button class="h-9 bg-brand-orange text-white border border-brand-orange text-[12px] font-medium px-5 rounded-md">
                                انضم إلينا مجاناً
                            </Button>
                        </Link>
                    </template>
                </template>
            </div>
        </nav>

        <!-- ================= SECTION 1: HERO & NAVBAR (100vh) ================= -->
        <section class="h-screen w-full snap-start snap-always shrink-0 flex flex-col justify-between relative overflow-hidden border-b border-brand-hairline bg-background pt-[calc(4.5rem+env(safe-area-inset-top,0px))]">
            
            <!-- Hero Main Content -->
            <div class="container mx-auto px-6 flex-1 flex flex-col justify-center items-center text-center relative z-10 py-12 max-w-4xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-hairline bg-brand-surface-strong text-[11px] font-semibold text-brand-ink mb-6">
                    <Sparkles class="h-3.5 w-3.5 text-brand-orange" />
                    <span>الجيل القادم من التعليم الإلكتروني الفخم</span>
                </div>
                
                <h1 class="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] leading-[1.1] text-brand-ink mb-6">
                    تعلم ما يجعلك <span class="text-brand-orange">خارج الصندوق</span>
                </h1>
                
                <p class="text-[13px] sm:text-[15px] text-brand-body font-normal leading-relaxed max-w-2xl mx-auto mb-8">
                    منصة تعليمية متكاملة تلتزم ببساطة التصميم وقوة المحتوى، مدعومة بمساعد ذكاء اصطناعي تفاعلي يبني لك مسارات تعلم مخصصة ومصممة بدقة لتناسب أهدافك.
                </p>
                
                <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a href="#courses">
                        <Button size="lg" class="h-11 px-8 text-[13px] font-semibold bg-brand-ink text-brand-canvas border border-brand-ink rounded-md flex items-center gap-2">
                            استعرض الكورسات <ChevronLeft class="h-4 w-4" />
                        </Button>
                    </a>
                    <a href="#ai-experience">
                        <Button size="lg" variant="outline" class="h-11 px-8 text-[13px] font-semibold border-brand-hairline bg-white text-brand-ink rounded-md flex items-center gap-2">
                            تجربة المساعد AI <MessageSquare class="h-4 w-4 opacity-60" />
                        </Button>
                    </a>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="w-full flex justify-center pb-8 z-10">
                <a href="#features" class="flex flex-col items-center gap-1.5 text-brand-muted text-[10px] tracking-widest font-semibold">
                    <span>اسحب للأسفل</span>
                    <ChevronDown class="h-4 w-4" />
                </a>
            </div>
        </section>

        <!-- ================= SECTION 2: CORE PILLARS (100vh) ================= -->
        <section id="features" class="h-screen w-full snap-start snap-always shrink-0 flex flex-col justify-center relative overflow-hidden border-b border-brand-hairline bg-background py-16">
            <div class="container mx-auto px-6 max-w-5xl">
                <!-- Section Header -->
                <div class="text-center max-w-xl mx-auto mb-16 space-y-3">
                    <span class="text-[11px] font-semibold uppercase tracking-widest text-brand-muted">بساطة واحترافية</span>
                    <h2 class="text-3xl font-normal tracking-[-0.02em] text-brand-ink">ركائز التميز في منصة كورس</h2>
                    <div class="h-1 w-12 bg-brand-hairline mx-auto rounded"></div>
                </div>

                <!-- 3 Pillars Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Card 1 -->
                    <div class="bg-white border border-brand-hairline rounded-lg p-8 flex flex-col gap-5">
                        <div class="h-12 w-12 rounded bg-brand-surface-strong text-brand-ink flex items-center justify-center border border-brand-hairline">
                            <Sparkles class="h-5 w-5" />
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-[15px] font-semibold text-brand-ink">ذكاء اصطناعي تفاعلي</h3>
                            <p class="text-[12px] text-brand-body font-normal leading-relaxed">
                                مساعد ذكي مدمج يرافقك في كل خطوة، يبسط لك المفاهيم المعقدة، ويجيب على استفساراتك البرمجية والنظرية فوراً.
                            </p>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="bg-white border border-brand-hairline rounded-lg p-8 flex flex-col gap-5">
                        <div class="h-12 w-12 rounded bg-brand-surface-strong text-brand-ink flex items-center justify-center border border-brand-hairline">
                            <LayoutGrid class="h-5 w-5" />
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-[15px] font-semibold text-brand-ink">مسارات تعلم مخصصة</h3>
                            <p class="text-[12px] text-brand-body font-normal leading-relaxed">
                                خرائط طريق مرنة ومصممة بناءً على أهدافك المهنية ومستواك الحالي، لتضمن لك الوصول للمهارة المطلوبة بأقصر الطرق.
                            </p>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="bg-white border border-brand-hairline rounded-lg p-8 flex flex-col gap-5">
                        <div class="h-12 w-12 rounded bg-brand-surface-strong text-brand-ink flex items-center justify-center border border-brand-hairline">
                            <Trophy class="h-5 w-5" />
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-[15px] font-semibold text-brand-ink">شهادات معتمدة</h3>
                            <p class="text-[12px] text-brand-body font-normal leading-relaxed">
                                وثق مهاراتك بشهادات رقمية متقنة الصنع تعزز سيرتك الذاتية وتفتح أمامك الأبواب في كبرى الشركات والمؤسسات التقنية.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-0 right-0 flex justify-center">
                <a href="#courses" class="flex flex-col items-center gap-1 text-brand-muted text-[10px] tracking-widest font-semibold">
                    <ChevronDown class="h-4 w-4" />
                </a>
            </div>
        </section>

        <!-- ================= SECTION 3: FEATURED COURSES (100vh) ================= -->
        <section id="courses" class="h-screen w-full snap-start snap-always shrink-0 flex flex-col justify-center relative overflow-hidden border-b border-brand-hairline bg-background py-16">
            <div class="container mx-auto px-6 max-w-6xl">
                <!-- Section Header -->
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div class="space-y-2 text-right">
                        <span class="text-[11px] font-semibold uppercase tracking-widest text-brand-muted">اختر مسارك التعليمي</span>
                        <h2 class="text-3xl font-normal tracking-[-0.02em] text-brand-ink">الكورسات الأكثر طلباً</h2>
                    </div>
                    <Link href="#" class="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-ink">
                        عرض جميع الكورسات <ArrowRight class="h-4 w-4" />
                    </Link>
                </div>
                
                <!-- Courses Scrollable Grid -->
                <div class="max-h-[62vh] overflow-y-auto pr-2 no-scrollbar border border-brand-hairline rounded-lg p-4 bg-brand-canvas-soft">
                    <div v-if="courses && courses.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    <div v-else class="text-center py-20 text-brand-muted text-[13px] font-medium border border-dashed border-brand-hairline rounded-lg bg-white">
                        <BookOpen class="h-8 w-8 mx-auto mb-3 opacity-30 text-brand-ink" />
                        لا توجد كورسات متاحة حالياً. يرجى التحقق لاحقاً.
                    </div>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-0 right-0 flex justify-center">
                <a href="#ai-experience" class="flex flex-col items-center gap-1 text-brand-muted text-[10px] tracking-widest font-semibold">
                    <ChevronDown class="h-4 w-4" />
                </a>
            </div>
        </section>

        <!-- ================= SECTION 4: AI LEARNING EXPERIENCE (100vh) ================= -->
        <section id="ai-experience" class="h-screen w-full snap-start snap-always shrink-0 flex flex-col justify-center relative overflow-hidden border-b border-brand-hairline bg-background py-16">
            <div class="container mx-auto px-6 max-w-5xl">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <!-- Left: Description and Pitch -->
                    <div class="lg:col-span-5 space-y-6 text-right">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-hairline bg-brand-surface-strong text-[11px] font-semibold text-brand-ink">
                            <Terminal class="h-3.5 w-3.5 text-brand-orange" />
                            <span>مساعدك الشخصي 24/7</span>
                        </div>
                        <h2 class="text-3xl sm:text-4xl font-normal tracking-[-0.02em] text-brand-ink leading-tight">
                            تعليم تفاعلي مدعوم بالذكاء الاصطناعي
                        </h2>
                        <p class="text-[13px] text-brand-body leading-relaxed font-normal">
                            تخيل معلماً ذكياً متاحاً لمساعدتك في أي لحظة. يفهم مستواك وطريقة تفكيرك، يشرح لك الأكواد المعقدة، ويقترح عليك حلولاً ومشاريع عملية مخصصة لدعم تقدمك الأكاديمي والمهني.
                        </p>
                        <ul class="space-y-2.5 text-[12px] font-medium text-brand-ink">
                            <li class="flex items-center gap-2 justify-end">
                                <span>شرح فوري للأكواد والبرمجيات الصعبة</span>
                                <CheckCircle2 class="h-4 w-4 text-brand-orange shrink-0" />
                            </li>
                            <li class="flex items-center gap-2 justify-end">
                                <span>صياغة تمارين وتحديات مخصصة لمستواك</span>
                                <CheckCircle2 class="h-4 w-4 text-brand-orange shrink-0" />
                            </li>
                            <li class="flex items-center gap-2 justify-end">
                                <span>إجابات ذكية خالية من التشتيت والتعقيد</span>
                                <CheckCircle2 class="h-4 w-4 text-brand-orange shrink-0" />
                            </li>
                        </ul>
                    </div>

                    <!-- Right: High-Fidelity Mock Chat Interface (Strict Cursor Style) -->
                    <div class="lg:col-span-7 flex justify-center">
                        <div class="border border-brand-hairline bg-white rounded-lg overflow-hidden max-w-lg w-full flex flex-col font-mono text-[11px] leading-relaxed">
                            <!-- Terminal Header -->
                            <div class="bg-brand-canvas-soft border-b border-brand-hairline px-4 py-2.5 flex items-center justify-between">
                                <div class="flex items-center gap-1.5">
                                    <span class="w-2.5 h-2.5 rounded-full bg-brand-hairline"></span>
                                    <span class="w-2.5 h-2.5 rounded-full bg-brand-hairline"></span>
                                    <span class="w-2.5 h-2.5 rounded-full bg-brand-hairline"></span>
                                </div>
                                <div class="text-[10px] text-brand-muted font-semibold">ai-assistant-tutor.sh</div>
                                <div class="w-8"></div>
                            </div>
                            
                            <!-- Chat Area -->
                            <div class="p-5 space-y-4 h-64 overflow-y-auto pr-2 no-scrollbar">
                                <!-- Message 1 (AI) -->
                                <div class="flex items-start gap-3">
                                    <div class="h-6 w-6 rounded bg-brand-ink text-brand-canvas flex items-center justify-center font-medium text-[9px] shrink-0">AI</div>
                                    <div class="bg-brand-canvas-soft border border-brand-hairline p-3 rounded-lg text-brand-body max-w-[80%] font-sans text-[11px]">
                                        مرحباً! كيف يمكنني مساعدتك في رحلتك البرمجية والتعليمية اليوم؟
                                    </div>
                                </div>
                                
                                <!-- Message 2 (User) -->
                                <div class="flex items-start gap-3 justify-end">
                                    <div class="bg-brand-surface-strong border border-brand-hairline text-brand-ink p-3 rounded-lg max-w-[80%] font-sans text-[11px] text-right">
                                        أريد كوداً بسيطاً لإنشاء زر بتصميم Cursor باستخدام HTML و Tailwind CSS.
                                    </div>
                                    <div class="h-6 w-6 rounded border border-brand-hairline text-brand-ink bg-white flex items-center justify-center font-medium text-[9px] shrink-0">ME</div>
                                </div>
                                
                                <!-- Message 3 (AI with Code Block) -->
                                <div class="flex items-start gap-3">
                                    <div class="h-6 w-6 rounded bg-brand-ink text-brand-canvas flex items-center justify-center font-medium text-[9px] shrink-0">AI</div>
                                    <div class="bg-brand-canvas-soft border border-brand-hairline p-3 rounded-lg text-brand-body max-w-[85%] space-y-2 font-sans text-[11px]">
                                        <div>بالتأكيد! هذا هو كود الزر الأحادي المتوافق مع هوية Cursor:</div>
                                        <pre class="bg-white border border-brand-hairline text-brand-ink p-2.5 rounded text-[10px] overflow-x-auto text-left font-mono leading-normal">
&lt;button class="bg-brand-orange text-white border border-brand-orange rounded-md px-4 py-2 text-xs font-semibold"&gt;
  البدء مجاناً
&lt;/button&gt;</pre>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Input Area -->
                            <div class="p-3 border-t border-brand-hairline bg-brand-canvas-soft flex items-center gap-2">
                                <input type="text" placeholder="اكتب سؤالك هنا..." class="flex-1 bg-white border border-brand-hairline rounded px-3 py-1.5 text-[11px] focus:outline-none focus:border-brand-orange font-sans" disabled />
                                <Button size="icon" class="h-7 w-7 bg-brand-orange border border-brand-orange text-white rounded shrink-0">
                                    <Send class="h-3.5 w-3.5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-0 right-0 flex justify-center">
                <a href="#cta-footer" class="flex flex-col items-center gap-1 text-brand-muted text-[10px] tracking-widest font-semibold">
                    <ChevronDown class="h-4 w-4" />
                </a>
            </div>
        </section>

        <!-- ================= SECTION 5: CTA & FOOTER (100vh) ================= -->
        <section id="cta-footer" class="h-screen w-full snap-start snap-always shrink-0 flex flex-col justify-between relative overflow-hidden bg-background py-12">
            
            <!-- Trust and Statistics Bar (Top of CTA section) -->
            <div class="container mx-auto px-6 max-w-5xl pt-10 relative z-10">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center border-b border-brand-hairline pb-10">
                    <div class="space-y-1">
                        <div class="text-3xl font-normal text-brand-ink tracking-[-0.02em]">+50k</div>
                        <div class="text-[10px] font-semibold text-brand-muted uppercase tracking-wider">طالب نشط</div>
                    </div>
                    <div class="space-y-1">
                        <div class="text-3xl font-normal text-brand-ink tracking-[-0.02em]">+200</div>
                        <div class="text-[10px] font-semibold text-brand-muted uppercase tracking-wider">خبير تعليمي</div>
                    </div>
                    <div class="space-y-1">
                        <div class="text-3xl font-normal text-brand-ink tracking-[-0.02em]">98%</div>
                        <div class="text-[10px] font-semibold text-brand-muted uppercase tracking-wider">نسبة النجاح</div>
                    </div>
                    <div class="space-y-1">
                        <div class="text-3xl font-normal text-brand-ink tracking-[-0.02em]">24/7</div>
                        <div class="text-[10px] font-semibold text-brand-muted uppercase tracking-wider">دعم ذكي</div>
                    </div>
                </div>
            </div>

            <!-- CTA Center Block -->
            <div class="container mx-auto px-6 text-center space-y-6 relative z-10 max-w-xl">
                <h2 class="text-4xl font-normal tracking-[-0.03em] text-brand-ink leading-tight">
                    جاهز لتبدأ رحلتك؟
                </h2>
                <p class="text-[13px] text-brand-body font-normal leading-relaxed">
                    انضم إلى آلاف المبدعين والطلاب الذين غيروا مسارهم المهني والعملي من خلال منصتنا المبسطة والمدعومة بالذكاء الاصطناعي. ابدأ اليوم مجاناً.
                </p>
                <div class="flex justify-center pt-2">
                    <Link :href="route('register')">
                        <Button size="lg" class="h-12 px-10 text-[13px] font-semibold bg-brand-orange border border-brand-orange text-white rounded-md flex items-center gap-2">
                            ابدأ الآن مجاناً <MousePointer2 class="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>

            <!-- Premium Compact Footer (Bottom of Section 5) -->
            <footer class="border-t border-brand-hairline pt-8 pb-4 bg-background relative z-10 w-full">
                <div class="container mx-auto px-6 max-w-5xl">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div class="text-[15px] font-semibold tracking-tighter uppercase text-brand-ink">كورس</div>
                        <div class="flex items-center gap-6 text-[11px] font-semibold text-brand-body">
                            <Link href="#">الشروط</Link>
                            <Link href="#">الخصوصية</Link>
                            <Link href="#">تواصل معنا</Link>
                        </div>
                        <div class="text-[10px] font-medium text-brand-muted tracking-wider">
                            © 2026 كورس. جميع الحقوق محفوظة.
                        </div>
                    </div>
                </div>
            </footer>
        </section>
        
    </div>
</template>

<style>
html {
    direction: rtl;
    scroll-behavior: smooth;
}
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
