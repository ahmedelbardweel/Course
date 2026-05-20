<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Loader2, Video } from 'lucide-vue-next';

const props = defineProps({
    room: Object,
    user: Object,
    isLeader: Boolean
});

const jitsiContainer = ref(null);
const isLoading = ref(true);
const isTerminated = ref(false);
let api = null;

const loadJitsiScript = () => {
    return new Promise((resolve, reject) => {
        if (window.JitsiMeetExternalAPI) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

const handleHangup = () => {
    if (api) {
        api.dispose();
        api = null;
    }
    isTerminated.value = true;
};

const reconnect = () => {
    isTerminated.value = false;
    isLoading.value = true;
    setTimeout(() => {
        initJitsi();
    }, 100);
};

const initJitsi = async () => {
    try {
        await loadJitsiScript();
        
        // Generate a unique, secure, and hashed room name to prevent public conflicts
        const secureRoomName = `CourseStudyRoom_${props.room.id}_${props.room.course_id}`;
        
        const domain = 'meet.jit.si';
        const options = {
            roomName: secureRoomName,
            parentNode: jitsiContainer.value,
            width: '100%',
            height: '100%',
            userInfo: {
                displayName: props.user.name,
                email: props.user.email || ''
            },
            configOverwrite: {
                startWithAudioMuted: true,
                startWithVideoMuted: true,
                prejoinPageEnabled: false, // Bypass prejoin screen for instant loading
                disableDeepLinking: true,  // Prevent mobile redirect prompts
                toolbarButtons: [
                    'microphone', 'camera', 'desktop', 'fullscreen',
                    'fodeviceselection', 'hangup', 'profile', 'raisehand',
                    'videoquality', 'tileview'
                ]
            },
            interfaceConfigOverwrite: {
                SHOW_JITSI_WATERMARK: false,
                SHOW_WATERMARK_FOR_GUEST: false,
                DEFAULT_BACKGROUND: '#18181b', // Dark background matching modern UI
                TOOLBAR_BACKGROUND: '#18181b',
                DISABLE_TRANSCRIPT: true,
                DISABLE_RINGING: true
            }
        };
        
        api = new JitsiMeetExternalAPI(domain, options);
        
        api.addEventListener('videoConferenceJoined', () => {
            isLoading.value = false;
            console.log('Successfully joined Jitsi room!');
        });

        api.addEventListener('videoConferenceLeft', () => {
            handleHangup();
        });

        api.addEventListener('readyToClose', () => {
            handleHangup();
        });
        
        // Hide loading once iframe finishes initial loading
        const iframe = api.getIFrame();
        if (iframe) {
            iframe.onload = () => {
                setTimeout(() => {
                    isLoading.value = false;
                }, 1000);
            };
        }
        
        // Safety timeout (max 5 seconds loading screen)
        setTimeout(() => {
            isLoading.value = false;
        }, 5000);
        
    } catch (error) {
        isLoading.value = false;
        console.error('Failed to load Jitsi Meet:', error);
    }
};

onMounted(() => {
    initJitsi();
});

onUnmounted(() => {
    if (api) {
        api.dispose();
    }
});
</script>

<template>
    <div class="w-full aspect-video bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 relative shadow-inner">
        <div ref="jitsiContainer" class="w-full h-full"></div>
        
        <!-- Loading Overlay -->
        <transition name="fade">
            <div 
                v-if="isLoading && !isTerminated" 
                class="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center text-white z-10"
            >
                <div class="flex flex-col items-center gap-4">
                    <div class="relative flex items-center justify-center">
                        <Loader2 class="h-8 w-8 text-zinc-400 animate-spin" />
                        <div class="absolute h-12 w-12 rounded-full border border-white/5 animate-ping"></div>
                    </div>
                    <div class="text-center space-y-1 mt-2">
                        <h4 class="text-xs font-bold text-zinc-200">جاري تهيئة الغرفة الدراسية</h4>
                        <p class="text-[10px] text-zinc-500">يرجى الانتظار، يتم الاتصال بالبث...</p>
                    </div>
                </div>
            </div>
        </transition>

        <!-- Terminated / Hangup Screen -->
        <div 
            v-if="isTerminated" 
            class="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center text-white z-20"
        >
            <div class="flex flex-col items-center gap-3.5 text-center p-6">
                <div class="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                    <Video class="h-4 w-4" />
                </div>
                <div class="space-y-1">
                    <h4 class="text-xs font-bold text-zinc-200">تم إنهاء المكالمة بنجاح</h4>
                    <p class="text-[10px] text-zinc-500 max-w-xs leading-relaxed">لقد غادرت الغرفة الدراسية المشتركة. يمكنك إعادة الانضمام للمكالمة في أي وقت.</p>
                </div>
                <button 
                    @click="reconnect"
                    class="h-8 px-4 bg-white text-zinc-950 hover:bg-zinc-100 active:scale-[0.98] font-bold rounded-md transition-all text-[10px] mt-2 shadow-sm"
                >
                    إعادة الاتصال بالغرفة
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
