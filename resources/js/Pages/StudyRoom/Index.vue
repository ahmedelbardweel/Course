<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import RoomChat from './Components/RoomChat.vue';
import JitsiStage from './Components/JitsiStage.vue';
import axios from 'axios';

const props = defineProps({
    room: Object,
    initialMessages: Array,
    initialTimedComments: Array,
    user: Object
});

const participants = ref([]);
const connectionStatus = ref('جاري الاتصال...');
const activeTab = ref('chat');
const isLeader = computed(() => props.room.leader_id === props.user.id);
const isLeaderPresent = computed(() => participants.value.some(p => p.id === props.room.leader_id));

const initRealtime = () => {
    if (!window.Echo) {
        connectionStatus.value = 'Echo غير موجود';
        return;
    }

    // Monitor connection state
    window.Echo.connector.pusher.connection.bind('state_change', (states) => {
        console.log('Connection state changed:', states);
        if (states.current === 'connected') connectionStatus.value = 'متصل';
        else if (states.current === 'connecting') connectionStatus.value = 'جاري الاتصال...';
        else connectionStatus.value = `حالة الاتصال: ${states.current}`;
    });

    window.Echo.connector.pusher.connection.bind('error', (err) => {
        console.error('Echo connection error:', err);
        connectionStatus.value = `خطأ في الاتصال: ${err.error?.message || 'غير معروف'}`;
    });

    window.Echo.connector.pusher.connection.bind('failed', () => {
        connectionStatus.value = 'فشل الاتصال النهائي بالخادم';
    });

    window.Echo.join(`study-room.${props.room.id}`)
        .here((users) => {
            participants.value = users;
            connectionStatus.value = 'متصل بنجاح';
        })
        .joining((user) => {
            participants.value.push(user);
        })
        .leaving((user) => {
            participants.value = participants.value.filter(u => u.id !== user.id);
        })
        .listen('.sync', (e) => {
            // Listen for video URL changes initiated by leader
            if (!isLeader.value && e.videoUrl && e.videoUrl !== props.room.video_url) {
                props.room.video_url = e.videoUrl;
            }
            
            // Listen for leader changes (e.g. transfer of leadership)
            if (e.leader && e.leader.id !== props.room.leader_id) {
                props.room.leader_id = e.leader.id;
                props.room.leader = e.leader;
                if (e.leader.id === props.user.id) {
                    console.log('I am now the leader!');
                }
            }
        });
};

const transferLeadership = async (targetUserId) => {
    if (!isLeader.value) return;
    
    if (confirm('هل أنت متأكد من نقل قيادة الغرفة إلى هذا الطالب؟')) {
        try {
            await axios.post(`/study-rooms/${props.room.id}/take-leadership`, {
                user_id: targetUserId
            });
        } catch (error) {
            console.error('Failed to transfer leadership:', error);
            alert('حدث خطأ أثناء نقل القيادة');
        }
    }
};

const claimLeadership = async () => {
    try {
        await axios.post(`/study-rooms/${props.room.id}/take-leadership`, {
            user_id: props.user.id
        });
    } catch (error) {
        console.error('Failed to claim leadership:', error);
        alert('حدث خطأ أثناء المطالبة بالقيادة');
    }
};

onMounted(() => {
    initRealtime();
});

onUnmounted(() => {
    if (window.Echo) {
        window.Echo.leave(`study-room.${props.room.id}`);
    }
});
</script>

<template>
    <Head title="غرفة المذاكرة التفاعلية" />

    <AuthenticatedLayout :breadcrumbs="[
        { label: 'الرئيسية', url: route('dashboard') },
        { label: room.course.title, url: route('courses.show', room.course.slug) },
        { label: 'غرفة المذاكرة' }
    ]">
        <div class="h-[calc(100vh-80px)] xl:h-[calc(100vh-64px)] overflow-hidden flex flex-col p-2 sm:p-4 max-w-[1600px] mx-auto min-h-0 bg-[var(--background)]">
            <!-- Header -->
            <div class="bg-[var(--card)] border border-[var(--border)] px-4 py-2.5 rounded-t-md flex items-center justify-between shadow-none text-[var(--foreground)] relative flex-shrink-0">
                <div class="text-right">
                    <h1 class="text-sm sm:text-base font-normal flex items-center gap-1.5 text-[var(--foreground)] justify-end">
                        <span class="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></span>
                        {{ room.course.title }}
                    </h1>
                    <p class="text-[var(--muted-foreground)] text-[10px] sm:text-xs mt-0.5 flex items-center gap-1.5 justify-end">
                        <span v-if="!isLeaderPresent && !isLeader" class="bg-[var(--muted)] text-[var(--muted-foreground)] px-1.5 py-0.5 rounded text-[9px] border border-[var(--border)]">
                            غير متواجد
                        </span>
                        القائد الحالي: {{ room.leader?.name || 'غير محدد' }}
                    </p>
                </div>
                
                <!-- Claim Leadership Button -->
                <div v-if="!isLeaderPresent && !isLeader" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button @click="claimLeadership" class="bg-[var(--foreground)] text-[var(--card)] hover:bg-[var(--foreground)] opacity-95 px-3 py-1 rounded-md text-[10px] sm:text-xs font-normal shadow-none flex items-center gap-1">
                        المطالبة بالقيادة
                    </button>
                </div>
                
                <!-- Header Status Badge -->
                <div>
                    <span v-if="isLeader" class="bg-[var(--primary)] text-white px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-normal flex items-center gap-1.5 shadow-none">
                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        أنت تبث شاشتك
                    </span>
                    <span v-else class="bg-[var(--muted)] text-[var(--foreground)] px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-normal border border-[var(--border)] flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
                        يتم العرض بواسطة القائد
                    </span>
                </div>
            </div>

            <!-- Main Workspace Container -->
            <div class="flex-1 grid grid-cols-1 xl:grid-cols-4 gap-3 sm:gap-4 mt-3 overflow-hidden min-h-0">
                <!-- Main Stage (Jitsi) -->
                <div class="xl:col-span-3 flex flex-col h-[280px] sm:h-[450px] xl:h-full min-h-0 flex-shrink-0 xl:flex-shrink">
                    <div class="bg-[var(--muted)] rounded-md border border-[var(--border)] p-1 shadow-none h-full flex items-center justify-center relative min-h-0">
                        <JitsiStage 
                            :room="room" 
                            :user="user" 
                            :is-leader="isLeader" 
                            class="w-full h-full"
                        />
                    </div>
                </div>

                <!-- Sidebar (Chat & Participants) -->
                <div class="xl:col-span-1 flex flex-col h-full overflow-hidden min-h-0">
                    <!-- Mobile Tab Switching Menu -->
                    <div class="xl:hidden flex border border-[var(--border)] bg-[var(--card)] mb-2 rounded-md overflow-hidden shadow-none flex-shrink-0">
                        <button 
                            @click="activeTab = 'chat'" 
                            :class="['flex-1 py-2 text-xs font-normal text-center', activeTab === 'chat' ? 'bg-[var(--muted)] border-b border-[var(--primary)] text-[var(--foreground)]' : 'text-[var(--muted-foreground)] bg-[var(--card)]']"
                        >
                            المحادثة المباشرة
                        </button>
                        <button 
                            @click="activeTab = 'participants'" 
                            :class="['flex-1 py-2 text-xs font-normal text-center', activeTab === 'participants' ? 'bg-[var(--muted)] border-b border-[var(--primary)] text-[var(--foreground)]' : 'text-[var(--muted-foreground)] bg-[var(--card)]']"
                        >
                            الطلاب المتواجدون ({{ participants.length }})
                        </button>
                    </div>

                    <!-- Participants List (Compact) -->
                    <div 
                        class="bg-[var(--card)] border border-[var(--border)] rounded-md shadow-none p-3 overflow-y-auto flex-shrink-0 mb-3 text-right"
                        :class="[activeTab === 'participants' ? 'block flex-1 xl:flex-none' : 'hidden xl:block', isLeader ? 'h-32' : 'h-28']"
                    >
                        <h3 class="text-xs font-normal text-[var(--muted-foreground)] mb-2 flex items-center justify-between">
                            <span class="bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)] px-1.5 py-0.5 rounded">{{ participants.length }}</span>
                            الطلاب المتواجدون
                        </h3>
                        <div class="space-y-1.5">
                            <div v-for="p in participants" :key="p.id" class="flex items-center gap-1.5 p-1 rounded hover:bg-[var(--muted)] group">
                                <div class="relative flex-shrink-0">
                                    <img :src="`https://ui-avatars.com/api/?name=${p.name}&background=fafaf7&color=26251e&bold=false`" class="h-6 w-6 rounded" />
                                    <span v-if="p.id === room.leader_id" class="absolute -bottom-0.5 -right-0.5 bg-[var(--primary)] text-white rounded-full p-0.5 border border-white" title="القائد">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-1.5 w-1.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                                <span class="text-xs font-normal text-[var(--foreground)] truncate flex-1 text-right">{{ p.name }}</span>
                                <span v-if="p.id === user.id" class="text-[9px] text-[var(--muted-foreground)] flex-shrink-0">(أنت)</span>
                                
                                <!-- Transfer Leadership Button -->
                                <button 
                                    v-if="isLeader && p.id !== user.id" 
                                    @click="transferLeadership(p.id)"
                                    class="text-[9px] bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100"
                                    title="نقل القيادة"
                                >
                                    تعيين قائد
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Chat Component -->
                    <div 
                        class="flex-1 min-h-0"
                        :class="[activeTab === 'chat' ? 'block' : 'hidden xl:block']"
                    >
                        <RoomChat 
                            :room="room" 
                            :initial-messages="initialMessages" 
                            :user="user" 
                            class="h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
