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
            // The role update will be broadcasted back to everyone including us via StudyRoomSync
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

    <AuthenticatedLayout>
        <div class="h-[calc(100vh-80px)] xl:h-[calc(100vh-64px)] overflow-hidden flex flex-col p-2 sm:p-4 max-w-[1600px] mx-auto min-h-0">
            <!-- Header -->
            <div class="bg-white border border-zinc-200 px-4 py-2.5 rounded-t-xl flex items-center justify-between shadow-sm text-zinc-900 relative flex-shrink-0">
                <div>
                    <h1 class="text-sm sm:text-base font-bold flex items-center gap-1.5 text-zinc-900">
                        <span class="w-2 h-2 bg-zinc-950 rounded-full animate-pulse"></span>
                        {{ room.course.title }}
                    </h1>
                    <p class="text-zinc-500 text-[10px] sm:text-xs mt-0.5 flex items-center gap-1.5">
                        القائد الحالي: {{ room.leader?.name || 'غير محدد' }}
                        <span v-if="!isLeaderPresent && !isLeader" class="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-[9px] border border-zinc-200">
                            غير متواجد
                        </span>
                    </p>
                </div>
                
                <!-- Claim Leadership Button -->
                <div v-if="!isLeaderPresent && !isLeader" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button @click="claimLeadership" class="bg-zinc-950 hover:bg-zinc-900 text-white px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold shadow transition-all flex items-center gap-1">
                        المطالبة بالقيادة
                    </button>
                </div>
                
                <!-- Header Status Badge -->
                <div>
                    <span v-if="isLeader" class="bg-zinc-950 text-white px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold flex items-center gap-1.5 shadow-sm">
                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        أنت تبث شاشتك
                    </span>
                    <span v-else class="bg-zinc-50 text-zinc-700 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold border border-zinc-200 flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-zinc-900 animate-pulse"></span>
                        يتم العرض بواسطة القائد
                    </span>
                </div>
            </div>

            <!-- Main Workspace Container -->
            <div class="flex-1 grid grid-cols-1 xl:grid-cols-4 gap-3 sm:gap-4 mt-3 overflow-hidden min-h-0">
                <!-- Main Stage (Jitsi) -->
                <div class="xl:col-span-3 flex flex-col h-[280px] sm:h-[450px] xl:h-full min-h-0 flex-shrink-0 xl:flex-shrink">
                    <div class="bg-black/5 rounded-2xl border border-zinc-200 p-1 shadow-inner h-full flex items-center justify-center relative min-h-0">
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
                    <div class="xl:hidden flex border border-zinc-200 bg-white mb-2 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                        <button 
                            @click="activeTab = 'chat'" 
                            :class="['flex-1 py-2 text-xs font-bold transition-all text-center', activeTab === 'chat' ? 'bg-zinc-50 border-b-2 border-zinc-900 text-zinc-900' : 'text-zinc-500 bg-white hover:bg-zinc-50']"
                        >
                            المحادثة المباشرة
                        </button>
                        <button 
                            @click="activeTab = 'participants'" 
                            :class="['flex-1 py-2 text-xs font-bold transition-all text-center', activeTab === 'participants' ? 'bg-zinc-50 border-b-2 border-zinc-900 text-zinc-900' : 'text-zinc-500 bg-white hover:bg-zinc-50']"
                        >
                            الطلاب المتواجدون ({{ participants.length }})
                        </button>
                    </div>

                    <!-- Participants List (Compact) -->
                    <div 
                        class="bg-white border border-zinc-200 rounded-2xl shadow-sm p-3 overflow-y-auto flex-shrink-0 mb-3"
                        :class="[activeTab === 'participants' ? 'block flex-1 xl:flex-none' : 'hidden xl:block', isLeader ? 'h-32' : 'h-28']"
                    >
                        <h3 class="text-xs font-bold text-zinc-500 mb-2 flex items-center justify-between">
                            الطلاب المتواجدون
                            <span class="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded-full text-[10px]">{{ participants.length }}</span>
                        </h3>
                        <div class="space-y-1.5">
                            <div v-for="p in participants" :key="p.id" class="flex items-center gap-1.5 p-1 rounded-lg hover:bg-zinc-50 group">
                                <div class="relative flex-shrink-0">
                                    <img :src="`https://ui-avatars.com/api/?name=${p.name}&background=f4f4f5&color=18181b&bold=true`" class="h-6 w-6 rounded-md" />
                                    <span v-if="p.id === room.leader_id" class="absolute -bottom-0.5 -right-0.5 bg-amber-500 text-white rounded-full p-0.5 border border-white" title="القائد">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-1.5 w-1.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                                <span class="text-xs font-semibold text-zinc-700 truncate flex-1">{{ p.name }}</span>
                                <span v-if="p.id === user.id" class="text-[9px] text-zinc-400 flex-shrink-0">(أنت)</span>
                                
                                <!-- Transfer Leadership Button -->
                                <button 
                                    v-if="isLeader && p.id !== user.id" 
                                    @click="transferLeadership(p.id)"
                                    class="text-[9px] bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
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
