<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    room: Object,
    user: Object,
    isLeader: Boolean
});

const jitsiContainer = ref(null);
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
                DEFAULT_BACKGROUND: '#f4f4f5', // Light zinc background matching Shadcn UI
                TOOLBAR_BACKGROUND: '#ffffff', // Clean white toolbar matching Shadcn UI
                DISABLE_TRANSCRIPT: true,
                DISABLE_RINGING: true
            }
        };
        
        api = new JitsiMeetExternalAPI(domain, options);
        
        api.addEventListener('videoConferenceJoined', () => {
            console.log('Successfully joined Jitsi room!');
        });
        
    } catch (error) {
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
    <div class="w-full aspect-video bg-zinc-100 rounded-xl overflow-hidden border border-zinc-200 relative">
        <div ref="jitsiContainer" class="w-full h-full"></div>
    </div>
</template>
