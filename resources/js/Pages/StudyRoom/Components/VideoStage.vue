<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue';
import { Canvas, PencilBrush, util } from 'fabric';
import axios from 'axios';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const props = defineProps({
    room: Object,
    user: Object,
});

const isLeader = computed(() => props.room.leader_id === props.user.id);

// References
const videoPlayerContainer = ref(null);
const canvasElement = ref(null);
const containerElement = ref(null);
let canvas = null;
let player = null;

// State
const isDrawingMode = ref(false);
const brushColor = ref('#ef4444'); // Default red
const brushSize = ref(4);
const isSyncing = ref(false);

const initCanvas = () => {
    if (!canvasElement.value || !containerElement.value) return;

    const width = containerElement.value.clientWidth;
    const height = containerElement.value.clientHeight;

    canvas = new Canvas(canvasElement.value, {
        isDrawingMode: false,
        width: width,
        height: height,
        selection: false,
    });

    canvas.freeDrawingBrush = new PencilBrush(canvas);
    canvas.freeDrawingBrush.color = brushColor.value;
    canvas.freeDrawingBrush.width = brushSize.value;

    window.addEventListener('resize', handleResize);

    if (isLeader.value) {
        canvas.on('path:created', (e) => {
            if (isSyncing.value) return; 
            const pathData = e.path.toObject();
            broadcastDrawingEvent('draw', pathData);
        });
    }

    listenForDrawingEvents();
};

const handleResize = () => {
    if (containerElement.value && canvas) {
        const width = containerElement.value.clientWidth;
        const height = containerElement.value.clientHeight;
        canvas.setDimensions({ width, height });
    }
};

const toggleDrawingMode = () => {
    if (!isLeader.value || !canvas) return;
    isDrawingMode.value = !isDrawingMode.value;
    canvas.isDrawingMode = isDrawingMode.value;
    
    if (isDrawingMode.value) {
        canvasElement.value.parentElement.style.pointerEvents = 'auto';
    } else {
        canvasElement.value.parentElement.style.pointerEvents = 'none';
    }
};

const clearCanvas = () => {
    if (!canvas) return;
    canvas.clear();
    if (isLeader.value) {
        broadcastDrawingEvent('clear', null);
    }
};

const broadcastDrawingEvent = async (action, data) => {
    try {
        // If drawing, calculate relative percentages to fix scaling issues across different screen sizes
        if (action === 'draw' && data && canvasElement.value) {
            const width = canvasElement.value.width || containerElement.value.clientWidth;
            const height = canvasElement.value.height || containerElement.value.clientHeight;
            data.rx = width; // Reference width
            data.ry = height; // Reference height
        }
        
        await axios.post(`/study-rooms/${props.room.id}/draw`, {
            action: action,
            data: data
        });
    } catch (error) {
        console.error('Failed to broadcast drawing:', error);
    }
};

const listenForDrawingEvents = () => {
    if (!window.Echo) return;

    window.Echo.join(`study-room.${props.room.id}`)
        .listen('.drawing', (e) => {
            if (e.action === 'clear') {
                if (canvas) canvas.clear();
            } else if (e.action === 'draw' && e.data && canvas) {
                isSyncing.value = true;
                util.enlivenObjects([e.data]).then((objects) => {
                    objects.forEach((obj) => {
                        // Scale object based on reference dimensions vs current dimensions
                        if (e.data.rx && e.data.ry && containerElement.value) {
                            const currentWidth = containerElement.value.clientWidth;
                            const currentHeight = containerElement.value.clientHeight;
                            const scaleX = currentWidth / e.data.rx;
                            const scaleY = currentHeight / e.data.ry;
                            
                            obj.set({
                                scaleX: obj.scaleX * scaleX,
                                scaleY: obj.scaleY * scaleY,
                                left: obj.left * scaleX,
                                top: obj.top * scaleY
                            });
                            obj.setCoords();
                        }
                        canvas.add(obj);
                    });
                    canvas.renderAll();
                    isSyncing.value = false;
                }).catch((err) => {
                    console.error('Error enlivening drawing path:', err);
                    isSyncing.value = false;
                });
            }
        });
};

// --- Plyr & Video Sync ---

const isPlaying = ref(!!props.room.is_playing);
let isSyncRequestPending = false;
let pendingSyncState = null;

const safePlay = (playerInstance) => {
    if (!playerInstance) return;
    const playPromise = playerInstance.play();
    if (playPromise !== undefined && typeof playPromise.catch === 'function') {
        playPromise.catch(err => {
            console.log('Play attempt failed, muting and trying again.', err);
            playerInstance.muted = true;
            const secondPromise = playerInstance.play();
            if (secondPromise !== undefined && typeof secondPromise.catch === 'function') {
                secondPromise.catch(err2 => {
                    console.warn('Muted play attempt also failed.', err2);
                });
            }
        });
    }
};

const initPlayer = () => {
    if (!videoPlayerContainer.value) return;
    
    const url = props.room.video_url || '';
    let provider = 'html5';
    let videoId = url;
    
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        provider = 'youtube';
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/);
        videoId = match && match[1] ? match[1] : url;
    }

    player = new Plyr(videoPlayerContainer.value, {
        controls: isLeader.value ? ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'] : [],
        clickToPlay: isLeader.value,
        keyboard: { focused: isLeader.value, global: isLeader.value },
        quality: { default: 1080, forced: true },
        youtube: { 
            noCookie: false, 
            rel: 0, 
            showinfo: 0, 
            iv_load_policy: 3, 
            modestbranding: 1, 
            autoplay: 0,
            vq: 'hd1080',
            playsinline: 1
        }
    });

    player.source = {
        type: 'video',
        sources: [
            {
                src: videoId,
                provider: provider,
            },
        ],
    };

    player.on('ready', () => {
        // Force YouTube HD quality (1080p) on initialization
        if (player.provider === 'youtube' && player.embed) {
            try {
                if (typeof player.embed.setPlaybackQuality === 'function') {
                    player.embed.setPlaybackQuality('hd1080');
                }
            } catch (e) {
                console.warn('Could not force YouTube HD quality:', e);
            }
        }

        if (!isLeader.value) {
            // Student joins / syncs on ready
            if (props.room.current_time) {
                player.currentTime = props.room.current_time;
            }
            if (props.room.volume !== undefined && props.room.volume !== null) {
                player.volume = props.room.volume;
            }
            if (props.room.is_playing) {
                safePlay(player);
            }
        } else {
            // Leader ready state
            isPlaying.value = player.playing;
            if (props.room.volume !== undefined && props.room.volume !== null) {
                player.volume = props.room.volume;
            }
            // Automatically broadcast initial paused state on load to reset DB is_playing
            broadcastVideoSync();
        }
    });

    if (isLeader.value) {
        player.on('play', () => {
            isPlaying.value = true;
            startPlaybackSyncTimer();
            broadcastVideoSync();
        });
        player.on('pause', () => {
            isPlaying.value = false;
            stopPlaybackSyncTimer();
            broadcastVideoSync();
        });
        player.on('seeked', () => {
            broadcastVideoSync();
        });
        player.on('volumechange', () => {
            broadcastVideoSync();
        });
    } else {
        // Student player safety guard: crush any autoplay bugs or unsolicited plays!
        player.on('play', () => {
            if (!isPlaying.value) {
                player.pause();
            }
        });
    }
};

let playbackSyncTimer = null;

const startPlaybackSyncTimer = () => {
    if (playbackSyncTimer) clearInterval(playbackSyncTimer);
    playbackSyncTimer = setInterval(() => {
        if (player && player.playing && isLeader.value) {
            broadcastVideoSync();
        }
    }, 5000); // Save and broadcast leader's current time every 5 seconds
};

const stopPlaybackSyncTimer = () => {
    if (playbackSyncTimer) {
        clearInterval(playbackSyncTimer);
        playbackSyncTimer = null;
    }
};

const togglePlay = () => {
    if (!player) return;
    if (player.playing) {
        player.pause();
    } else {
        safePlay(player);
    }
};

const stopVideo = () => {
    if (!player) return;
    player.pause();
    player.currentTime = 0;
    broadcastVideoSync();
};

const seekVideo = (amount) => {
    if (!player) return;
    player.currentTime = Math.max(0, Math.min(player.duration || 0, player.currentTime + amount));
    broadcastVideoSync();
};

const broadcastVideoSync = () => {
    if (!isLeader.value || !player) return;

    const state = {
        video_url: props.room.video_url,
        is_playing: isPlaying.value, // Enforce absolute ground-truth playback state
        current_time: player.currentTime,
        volume: player.volume, // Enforce absolute ground-truth volume state
        stage_mode: props.room.stage_mode || 'video'
    };

    if (isSyncRequestPending) {
        pendingSyncState = state;
        return;
    }

    isSyncRequestPending = true;
    performSyncRequest(state);
};

const performSyncRequest = async (state) => {
    try {
        await axios.post(`/study-rooms/${props.room.id}/sync`, state);
    } catch (error) {
        console.error('Failed to sync video:', error);
    } finally {
        if (pendingSyncState) {
            const nextState = pendingSyncState;
            pendingSyncState = null;
            performSyncRequest(nextState);
        } else {
            isSyncRequestPending = false;
        }
    }
};

const listenForVideoSync = () => {
    if (!window.Echo || isLeader.value) return;

    window.Echo.join(`study-room.${props.room.id}`)
        .listen('.sync', (e) => {
            if (player && e.stageMode === 'video') {
                try {
                    // Sync volume in real-time
                    if (e.volume !== undefined && e.volume !== null && Math.abs(player.volume - e.volume) > 0.01) {
                        player.volume = e.volume;
                    }

                    // Update student playback tracking state
                    isPlaying.value = e.isPlaying;

                    if (e.isPlaying) {
                        if (!player.playing) {
                            // Leader is playing, student was paused: align time instantly and play
                            player.currentTime = e.currentTime;
                            safePlay(player);
                        } else {
                            // Both playing: only sync time if drift is significant (keeps playback smooth and prevents buffering stutter)
                            const timeDiff = Math.abs(player.currentTime - e.currentTime);
                            if (timeDiff > 12) {
                                player.currentTime = e.currentTime;
                            }
                        }
                    } else {
                        // Leader is paused: ALWAYS enforce pause on student player
                        if (player.playing) {
                            player.pause();
                        }
                        
                        // If both are paused, align time safely using a setTimeout to crush any YouTube API autoplay triggers!
                        const timeDiff = Math.abs(player.currentTime - e.currentTime);
                        if (timeDiff > 3) {
                            player.currentTime = e.currentTime;
                            setTimeout(() => {
                                if (player && player.playing) {
                                    player.pause();
                                }
                            }, 100);
                        }
                    }
                } catch (err) {
                    console.warn('Sync ignored: Player not fully ready.', err);
                }
            }
        });
};

onMounted(() => {
    nextTick(() => {
        initPlayer();
        initCanvas();
        listenForVideoSync();
    });
});

onUnmounted(() => {
    stopPlaybackSyncTimer();
    window.removeEventListener('resize', handleResize);
    if (canvas) canvas.dispose();
    if (player) player.destroy();
});

watch(brushColor, (newColor) => {
    if (canvas && canvas.freeDrawingBrush) canvas.freeDrawingBrush.color = newColor;
});

watch(brushSize, (newSize) => {
    if (canvas && canvas.freeDrawingBrush) canvas.freeDrawingBrush.width = parseInt(newSize);
});

watch(() => props.room.video_url, (newUrl) => {
    clearCanvas();
    if (player) {
        player.destroy(); // Destroy old instance to avoid YouTube iframe glitches
        nextTick(() => {
            initPlayer();
        });
    }
});

</script>

<template>
    <div class="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-lg group flex items-center justify-center" ref="containerElement">
        <!-- Plyr Video Container -->
        <div class="w-full h-full relative z-10" :class="{'pointer-events-none': !isLeader}">
            <video ref="videoPlayerContainer" playsinline crossorigin></video>
        </div>

        <!-- Fabric Canvas Overlay -->
        <div class="absolute inset-0 z-20" :style="{ pointerEvents: isDrawingMode ? 'auto' : 'none' }">
            <canvas ref="canvasElement"></canvas>
        </div>

        <!-- Leader Drawing Controls -->
        <div v-if="isLeader" class="absolute top-4 left-4 z-30 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg flex items-center gap-3 transition-opacity opacity-0 group-hover:opacity-100">
            <button 
                @click="toggleDrawingMode"
                :class="['p-2 rounded-lg transition-colors', isDrawingMode ? 'bg-indigo-600 text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200']"
                title="تفعيل الرسم"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </button>

            <div v-if="isDrawingMode" class="flex items-center gap-2 border-r border-zinc-200 pr-3 mr-1">
                <input type="color" v-model="brushColor" class="w-8 h-8 rounded cursor-pointer border-0 p-0" />
                
                <input type="range" v-model="brushSize" min="1" max="20" class="w-24 accent-indigo-600" />
                
                <button @click="clearCanvas" class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="مسح الكل">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Student Overlay Status -->
        <div v-if="!isLeader" class="absolute top-4 right-4 z-30 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            يتم العرض بواسطة القائد
        </div>

        <!-- Leader Player Custom Controls -->
        <div v-if="isLeader" class="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-indigo-950/85 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-4 transition-all opacity-0 group-hover:opacity-100 border border-indigo-500/25 text-white select-none">
            <!-- Pulsing Sync Indicator -->
            <div class="flex items-center gap-2 border-l border-indigo-800/80 pl-3">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span class="text-[10px] font-medium text-emerald-400 tracking-wider">بث مباشر للطلاب</span>
            </div>

            <!-- Rewind Button -->
            <button 
                @click="seekVideo(-10)" 
                class="p-2 rounded-xl bg-indigo-900/50 hover:bg-indigo-800 text-indigo-200 hover:text-white transition-all hover:scale-105 active:scale-95" 
                title="إرجاع 10 ثواني"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                </svg>
            </button>

            <!-- Play/Pause Button -->
            <button 
                @click="togglePlay" 
                class="p-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center" 
                :title="isPlaying ? 'إيقاف مؤقت' : 'تشغيل'"
            >
                <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                </svg>
            </button>

            <!-- Stop Button -->
            <button 
                @click="stopVideo" 
                class="p-2 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all hover:scale-105 active:scale-95" 
                title="إيقاف كامل"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clip-rule="evenodd" />
                </svg>
            </button>

            <!-- Fast Forward Button -->
            <button 
                @click="seekVideo(10)" 
                class="p-2 rounded-xl bg-indigo-900/50 hover:bg-indigo-800 text-indigo-200 hover:text-white transition-all hover:scale-105 active:scale-95" 
                title="تقديم 10 ثواني"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.934 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.334-4z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.334-4z" />
                </svg>
            </button>
        </div>
    </div>
</template>
