<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { useForm } from '@inertiajs/vue3';
import axios from 'axios';

const props = defineProps({
    room: Object,
    initialMessages: Array,
    user: Object
});

const messages = ref([...props.initialMessages]);
const chatContainer = ref(null);
const newMessage = ref('');
const isSending = ref(false);

const scrollToBottom = () => {
    nextTick(() => {
        if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
    });
};

const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
};

const sendMessage = async () => {
    if (!newMessage.value.trim() || isSending.value) return;
    
    isSending.value = true;
    const content = newMessage.value;
    newMessage.value = ''; // clear immediately for UX
    
    try {
        const response = await axios.post(`/study-rooms/${props.room.id}/messages`, {
            content: content,
            type: 'text'
        });
        
        // Add locally immediately to avoid waiting for the echo event
        if (!messages.value.find(m => m.id === response.data.id)) {
            messages.value.push(response.data);
            scrollToBottom();
        }
    } catch (error) {
        console.error('Error sending message:', error);
        newMessage.value = content; // restore if failed
    } finally {
        isSending.value = false;
    }
};

const listenForMessages = () => {
    if (!window.Echo) return;
    
    window.Echo.join(`study-room.${props.room.id}`)
        .listen('.message', (e) => {
            console.log('New message received:', e.message);
            // Don't add if we already pushed it locally
            if (!messages.value.find(m => m.id === e.message.id)) {
                messages.value.push(e.message);
                scrollToBottom();
            }
        });
};

onMounted(() => {
    scrollToBottom();
    listenForMessages();
});

// If initialMessages change (e.g. from parent reload), update and scroll
watch(() => props.initialMessages, (newVal) => {
    messages.value = [...newVal];
    scrollToBottom();
});

</script>

<template>
    <div class="flex flex-col h-full bg-[var(--card)] border border-[var(--border)] rounded-md shadow-none overflow-hidden min-h-0">
        <!-- Header -->
        <div class="px-4 py-2.5 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between flex-shrink-0">
            <h3 class="font-normal text-xs text-[var(--foreground)] flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-[var(--muted-foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                المحادثة المباشرة
            </h3>
            <span class="text-[9px] bg-[var(--foreground)] text-[var(--card)] px-1.5 py-0.5 rounded font-normal uppercase tracking-widest animate-pulse">مباشر</span>
        </div>

        <!-- Messages Area -->
        <div ref="chatContainer" class="flex-1 p-3 overflow-y-auto bg-[var(--card)] space-y-3 min-h-0">
            <div v-if="messages.length === 0" class="h-full flex flex-col items-center justify-center text-[var(--muted-foreground)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p class="text-xs font-normal">لا توجد رسائل بعد. كن أول من يشارك!</p>
            </div>
            
            <div v-for="msg in messages" :key="msg.id" :class="['flex w-full', msg.user_id === user.id ? 'justify-end' : 'justify-start']">
                <div :class="['max-w-[80%] flex flex-col', msg.user_id === user.id ? 'items-end' : 'items-start']">
                    <!-- User info above message -->
                    <span v-if="msg.user_id !== user.id" class="text-[10px] text-[var(--muted-foreground)] mb-1 ml-1 font-normal">{{ msg.user?.name || 'مستخدم' }}</span>
                    
                    <!-- Message Bubble -->
                    <div :class="[
                        'px-3 py-1.5 rounded-md text-xs relative shadow-none',
                        msg.user_id === user.id 
                            ? 'bg-[var(--foreground)] text-[var(--card)] rounded-tr-none border border-[var(--foreground)]' 
                            : 'bg-[var(--muted)] text-[var(--foreground)] rounded-tl-none border border-[var(--border)]'
                    ]">
                        {{ msg.content }}
                    </div>
                    
                    <!-- Time -->
                    <span class="text-[9px] text-[var(--muted-foreground)] mt-0.5 mx-1 font-normal">{{ formatTime(msg.created_at || new Date()) }}</span>
                </div>
            </div>
        </div>

        <!-- Input Area -->
        <div class="p-2 border-t border-[var(--border)] bg-[var(--card)] flex-shrink-0">
            <form @submit.prevent="sendMessage" class="flex gap-2 items-center bg-[var(--muted)] p-0.5 pl-2.5 rounded-md border border-[var(--border)]">
                <input 
                    v-model="newMessage"
                    type="text" 
                    placeholder="اكتب رسالة..." 
                    class="flex-1 bg-transparent border-none focus:ring-0 text-xs text-[var(--foreground)] placeholder-[var(--muted-foreground)] py-1.5"
                    :disabled="isSending"
                />
                <button 
                    type="submit" 
                    :disabled="!newMessage.trim() || isSending"
                    class="h-8 w-8 flex items-center justify-center bg-[var(--foreground)] disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)] text-[var(--card)] rounded shadow-none flex-shrink-0"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </button>
            </form>
        </div>
    </div>
</template>
