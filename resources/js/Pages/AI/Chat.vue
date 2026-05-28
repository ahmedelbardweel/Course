<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref, nextTick } from 'vue';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-vue-next';
import axios from 'axios';

const props = defineProps({
    learningGoal: String,
    lessonId: Number,
    lessonTitle: String,
});

const initialMessage = props.lessonTitle 
    ? `أهلاً بك! أنا مساعدك الذكي. لقد تم تخصيصي الآن للإجابة فقط من خلال محتوى درس "${props.lessonTitle}". اسألني أي سؤال يخص هذا الدرس وسأساعدك فوراً.`
    : `أهلاً بك! أنا مساعدك الذكي في منصة كورس. بما أن هدفك هو '${props.learningGoal}'، سأكون رفيقك في هذه الرحلة. كيف يمكنني مساعدتك اليوم؟`;

const messages = ref([
    { 
        role: 'bot', 
        content: initialMessage 
    }
]);

const newMessage = ref('');
const isLoading = ref(false);
const scrollContainer = ref(null);

const scrollToBottom = async () => {
    await nextTick();
    if (scrollContainer.value) {
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
    }
};

const sendMessage = async () => {
    if (!newMessage.value.trim() || isLoading.value) return;

    const userText = newMessage.value;
    messages.value.push({ role: 'user', content: userText });
    newMessage.value = '';
    isLoading.value = true;
    scrollToBottom();

    try {
        const response = await axios.post(route('ai.ask'), { 
            message: userText,
            lesson_id: props.lessonId 
        });
        messages.value.push({ role: 'bot', content: response.data.answer });
    } catch (error) {
        const errorMsg = error.response?.data?.answer || 'عذراً، حدث خطأ غير متوقع.';
        messages.value.push({ role: 'bot', content: errorMsg });
    } finally {
        isLoading.value = false;
        scrollToBottom();
    }
};
</script>

<template>
    <Head title="المساعد الذكي" />

    <AuthenticatedLayout class="h-full bg-[var(--background)]" :breadcrumbs="[
        { label: 'الرئيسية', url: route('dashboard') },
        { label: 'المساعد الذكي' }
    ]">

        <div class="max-w-4xl mx-auto flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-md overflow-hidden shadow-none h-[calc(100vh-76px)] lg:h-[calc(100vh-92px)] text-right">
            <!-- Chat Header -->
            <div class="px-4 py-3 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between shrink-0">
                <div class="flex items-center gap-3">
                    <div class="h-8 w-8 bg-[var(--primary)] text-white rounded flex items-center justify-center border border-[var(--border)]">
                        <Sparkles class="h-4 w-4" />
                    </div>
                    <div>
                        <h2 class="font-normal text-sm tracking-tight text-[var(--foreground)]">المدرب الشخصي الذكي</h2>
                        <div class="flex items-center gap-1.5">
                            <span class="h-1.5 w-1.5 bg-[var(--primary)] rounded-full animate-pulse"></span>
                            <span class="text-[10px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest">متصل وحاضر للمساعدة</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Messages Area -->
            <div ref="scrollContainer" class="flex-1 overflow-y-auto p-4 space-y-3 bg-[var(--card)]">
                <div 
                    v-for="(msg, index) in messages" 
                    :key="index"
                    :class="['flex w-full', msg.role === 'user' ? 'justify-start' : 'justify-end']"
                >
                    <div 
                        :class="[
                            'max-w-[85%] p-3 rounded-md text-xs leading-relaxed border shadow-none',
                            msg.role === 'user' 
                                ? 'bg-[var(--primary)] text-white border-[var(--primary)] rounded-tr-none' 
                                : 'bg-[var(--muted)] text-[var(--foreground)] border-[var(--border)] rounded-tl-none'
                        ]"
                    >
                        <div class="flex items-center gap-1.5 mb-1.5 opacity-40">
                            <User v-if="msg.role === 'user'" class="h-2.5 w-2.5 text-white" />
                            <Sparkles v-else class="h-2.5 w-2.5 text-[var(--foreground)]" />
                            <span class="text-[9px] font-normal uppercase tracking-widest text-[var(--foreground)]">{{ msg.role === 'user' ? 'أنت' : 'المساعد الذكي' }}</span>
                        </div>
                        {{ msg.content }}
                    </div>
                </div>

                <!-- Loading State -->
                <div v-if="isLoading" class="flex justify-end">
                    <div class="bg-[var(--muted)] border border-[var(--border)] p-4 rounded-md rounded-tl-none flex items-center gap-3">
                        <Loader2 class="h-4 w-4 animate-spin text-[var(--muted-foreground)]" />
                        <span class="text-xs font-normal text-[var(--muted-foreground)]">جاري التفكير...</span>
                    </div>
                </div>
            </div>

            <!-- Input Area -->
            <div class="p-3 bg-[var(--card)] border-t border-[var(--border)] shrink-0">
                <form @submit.prevent="sendMessage" class="relative flex items-center">
                    <Input 
                        v-model="newMessage"
                        placeholder="اسألني أي شيء..."
                        class="h-9 pr-3 pl-10 text-xs border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)] shadow-none"
                    />
                    <Button 
                        type="submit"
                        :disabled="isLoading || !newMessage.trim()"
                        size="icon"
                        class="absolute left-1 h-7 w-7 bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded shadow-none border-none"
                    >
                        <Send class="h-3 w-3" />
                    </Button>
                </form>
                <p class="text-[9px] text-[var(--muted-foreground)] text-center mt-1.5 uppercase tracking-widest">
                    مدعوم بالذكاء الاصطناعي لخدمتك
                </p>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
