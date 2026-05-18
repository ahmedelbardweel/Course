<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { Room, RoomEvent, VideoPresets, createLocalTracks } from 'livekit-client';

const props = defineProps({
    lkUrl: String,
    lkToken: String,
    stageMode: String, // 'screen' or 'camera'
    isLeader: Boolean
});

const videoContainer = ref(null);
const connectionStatus = ref('Connecting to WebRTC...');
let room = null;
let currentTracks = [];

const connectToLiveKit = async () => {
    room = new Room({
        adaptiveStream: true,
        dynacast: true,
        videoCaptureDefaults: {
            resolution: VideoPresets.h720.resolution,
        },
    });

    room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
        console.log('Track subscribed:', track.kind);
        if (track.kind === 'video' || track.kind === 'audio') {
            const element = track.attach();
            if (track.kind === 'video') {
                element.style.width = '100%';
                element.style.height = '100%';
                element.style.objectFit = 'contain';
                videoContainer.value.appendChild(element);
            } else {
                // Audio track, attach but usually invisible
                document.body.appendChild(element);
            }
        }
    });

    room.on(RoomEvent.TrackUnsubscribed, (track) => {
        track.detach().forEach(el => el.remove());
    });

    room.on(RoomEvent.Disconnected, () => {
        connectionStatus.value = 'Disconnected from WebRTC.';
    });

    try {
        await room.connect(props.lkUrl, props.lkToken);
        connectionStatus.value = 'Connected to WebRTC.';
        
        if (props.isLeader) {
            publishTracksBasedOnMode();
        }
    } catch (error) {
        console.error('Failed to connect to LiveKit:', error);
        connectionStatus.value = 'Connection failed.';
    }
};

const unpublishAll = async () => {
    if (!room) return;
    for (const track of currentTracks) {
        await room.localParticipant.unpublishTrack(track);
        track.stop();
    }
    currentTracks = [];
    if (videoContainer.value) {
        videoContainer.value.innerHTML = ''; // Clear local preview
    }
};

const publishTracksBasedOnMode = async () => {
    if (!room || !props.isLeader) return;
    
    await unpublishAll();

    try {
        if (props.stageMode === 'screen') {
            // Share Screen
            const tracks = await createLocalTracks({
                audio: true, // System audio if permitted
                video: false,
                screen: true,
            });
            
            for (const track of tracks) {
                await room.localParticipant.publishTrack(track);
                currentTracks.push(track);
                
                if (track.kind === 'video') {
                    const element = track.attach();
                    element.style.width = '100%';
                    element.style.height = '100%';
                    element.style.objectFit = 'contain';
                    videoContainer.value.appendChild(element);
                }
            }
        } else if (props.stageMode === 'camera') {
            // Share Camera & Mic
            const tracks = await createLocalTracks({
                audio: true,
                video: true,
            });
            
            for (const track of tracks) {
                await room.localParticipant.publishTrack(track);
                currentTracks.push(track);
                
                if (track.kind === 'video') {
                    const element = track.attach();
                    element.style.width = '100%';
                    element.style.height = '100%';
                    element.style.objectFit = 'cover';
                    videoContainer.value.appendChild(element);
                }
            }
        }
    } catch (e) {
        console.error('Error publishing tracks:', e);
        connectionStatus.value = 'Error accessing media devices.';
    }
};

watch(() => props.stageMode, () => {
    if (props.isLeader) {
        publishTracksBasedOnMode();
    }
});

onMounted(() => {
    connectToLiveKit();
});

onUnmounted(() => {
    if (room) {
        unpublishAll();
        room.disconnect();
    }
});
</script>

<template>
    <div class="w-full aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-lg relative flex items-center justify-center">
        <!-- Status Overlay if empty -->
        <div v-if="!videoContainer || videoContainer.children.length === 0" class="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 z-10 pointer-events-none">
            <svg v-if="stageMode === 'screen'" xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4 opacity-50 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4 opacity-50 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p class="text-sm font-medium">{{ connectionStatus }}</p>
        </div>

        <!-- Video Container for LiveKit Tracks -->
        <div ref="videoContainer" class="w-full h-full relative z-20"></div>
        
        <!-- Badge -->
        <div class="absolute top-4 right-4 bg-red-600/90 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 z-30 shadow-lg backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            بث مباشر: {{ stageMode === 'screen' ? 'شاشة العرض' : 'الكاميرا' }}
        </div>
    </div>
</template>
