import { computed, ref, onMounted, nextTick, onUnmounted, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { Canvas, PencilBrush, util } from "fabric";
import axios from "axios";
import Plyr from "plyr";
const _sfc_main = {
  __name: "VideoStage",
  __ssrInlineRender: true,
  props: {
    room: Object,
    user: Object
  },
  setup(__props) {
    const props = __props;
    const isLeader = computed(() => props.room.leader_id === props.user.id);
    const videoPlayerContainer = ref(null);
    const canvasElement = ref(null);
    const containerElement = ref(null);
    let canvas = null;
    let player = null;
    const isDrawingMode = ref(false);
    const brushColor = ref("#f54e00");
    const brushSize = ref(4);
    const isSyncing = ref(false);
    const initCanvas = () => {
      if (!canvasElement.value || !containerElement.value) return;
      const width = containerElement.value.clientWidth;
      const height = containerElement.value.clientHeight;
      canvas = new Canvas(canvasElement.value, {
        isDrawingMode: false,
        width,
        height,
        selection: false
      });
      canvas.freeDrawingBrush = new PencilBrush(canvas);
      canvas.freeDrawingBrush.color = brushColor.value;
      canvas.freeDrawingBrush.width = brushSize.value;
      window.addEventListener("resize", handleResize);
      if (isLeader.value) {
        canvas.on("path:created", (e) => {
          if (isSyncing.value) return;
          const pathData = e.path.toObject();
          broadcastDrawingEvent("draw", pathData);
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
    const clearCanvas = () => {
      if (!canvas) return;
      canvas.clear();
      if (isLeader.value) {
        broadcastDrawingEvent("clear", null);
      }
    };
    const broadcastDrawingEvent = async (action, data) => {
      try {
        if (action === "draw" && data && canvasElement.value) {
          const width = canvasElement.value.width || containerElement.value.clientWidth;
          const height = canvasElement.value.height || containerElement.value.clientHeight;
          data.rx = width;
          data.ry = height;
        }
        await axios.post(`/study-rooms/${props.room.id}/draw`, {
          action,
          data
        });
      } catch (error) {
        console.error("Failed to broadcast drawing:", error);
      }
    };
    const listenForDrawingEvents = () => {
      if (!window.Echo) return;
      window.Echo.join(`study-room.${props.room.id}`).listen(".drawing", (e) => {
        if (e.action === "clear") {
          if (canvas) canvas.clear();
        } else if (e.action === "draw" && e.data && canvas) {
          isSyncing.value = true;
          util.enlivenObjects([e.data]).then((objects) => {
            objects.forEach((obj) => {
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
            console.error("Error enlivening drawing path:", err);
            isSyncing.value = false;
          });
        }
      });
    };
    const isPlaying = ref(!!props.room.is_playing);
    let isSyncRequestPending = false;
    let pendingSyncState = null;
    const safePlay = (playerInstance) => {
      if (!playerInstance) return;
      const playPromise = playerInstance.play();
      if (playPromise !== void 0 && typeof playPromise.catch === "function") {
        playPromise.catch((err) => {
          console.log("Play attempt failed, muting and trying again.", err);
          playerInstance.muted = true;
          const secondPromise = playerInstance.play();
          if (secondPromise !== void 0 && typeof secondPromise.catch === "function") {
            secondPromise.catch((err2) => {
              console.warn("Muted play attempt also failed.", err2);
            });
          }
        });
      }
    };
    const initPlayer = () => {
      if (!videoPlayerContainer.value) return;
      const url = props.room.video_url || "";
      let provider = "html5";
      let videoId = url;
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
        provider = "youtube";
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/);
        videoId = match && match[1] ? match[1] : url;
      }
      player = new Plyr(videoPlayerContainer.value, {
        controls: isLeader.value ? ["play-large", "play", "progress", "current-time", "mute", "volume", "fullscreen"] : [],
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
          vq: "hd1080",
          playsinline: 1
        }
      });
      player.source = {
        type: "video",
        sources: [
          {
            src: videoId,
            provider
          }
        ]
      };
      player.on("ready", () => {
        if (player.provider === "youtube" && player.embed) {
          try {
            if (typeof player.embed.setPlaybackQuality === "function") {
              player.embed.setPlaybackQuality("hd1080");
            }
          } catch (e) {
            console.warn("Could not force YouTube HD quality:", e);
          }
        }
        if (!isLeader.value) {
          if (props.room.current_time) {
            player.currentTime = props.room.current_time;
          }
          if (props.room.volume !== void 0 && props.room.volume !== null) {
            player.volume = props.room.volume;
          }
          if (props.room.is_playing) {
            safePlay(player);
          }
        } else {
          isPlaying.value = player.playing;
          if (props.room.volume !== void 0 && props.room.volume !== null) {
            player.volume = props.room.volume;
          }
          broadcastVideoSync();
        }
      });
      if (isLeader.value) {
        player.on("play", () => {
          isPlaying.value = true;
          startPlaybackSyncTimer();
          broadcastVideoSync();
        });
        player.on("pause", () => {
          isPlaying.value = false;
          stopPlaybackSyncTimer();
          broadcastVideoSync();
        });
        player.on("seeked", () => {
          broadcastVideoSync();
        });
        player.on("volumechange", () => {
          broadcastVideoSync();
        });
      } else {
        player.on("play", () => {
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
      }, 5e3);
    };
    const stopPlaybackSyncTimer = () => {
      if (playbackSyncTimer) {
        clearInterval(playbackSyncTimer);
        playbackSyncTimer = null;
      }
    };
    const broadcastVideoSync = () => {
      if (!isLeader.value || !player) return;
      const state = {
        video_url: props.room.video_url,
        is_playing: isPlaying.value,
        current_time: player.currentTime,
        volume: player.volume,
        stage_mode: props.room.stage_mode || "video"
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
        console.error("Failed to sync video:", error);
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
      window.Echo.join(`study-room.${props.room.id}`).listen(".sync", (e) => {
        if (player && e.stageMode === "video") {
          try {
            if (e.volume !== void 0 && e.volume !== null && Math.abs(player.volume - e.volume) > 0.01) {
              player.volume = e.volume;
            }
            isPlaying.value = e.isPlaying;
            if (e.isPlaying) {
              if (!player.playing) {
                player.currentTime = e.currentTime;
                safePlay(player);
              } else {
                const timeDiff = Math.abs(player.currentTime - e.currentTime);
                if (timeDiff > 12) {
                  player.currentTime = e.currentTime;
                }
              }
            } else {
              if (player.playing) {
                player.pause();
              }
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
            console.warn("Sync ignored: Player not fully ready.", err);
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
      window.removeEventListener("resize", handleResize);
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
        player.destroy();
        nextTick(() => {
          initPlayer();
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative w-full h-full bg-black rounded-md overflow-hidden shadow-none group flex items-center justify-center",
        ref_key: "containerElement",
        ref: containerElement
      }, _attrs))}><div class="${ssrRenderClass([{ "pointer-events-none": !isLeader.value }, "w-full h-full relative z-10"])}"><video playsinline crossorigin></video></div><div class="absolute inset-0 z-20" style="${ssrRenderStyle({ pointerEvents: isDrawingMode.value ? "auto" : "none" })}"><canvas></canvas></div>`);
      if (isLeader.value) {
        _push(`<div class="absolute top-4 left-4 z-30 bg-[var(--card)] border border-[var(--border)] p-2 rounded-md shadow-none flex items-center gap-3"><button class="${ssrRenderClass(["p-2 rounded transition-none", isDrawingMode.value ? "bg-[var(--primary)] text-white" : "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--accent)]"])}" title="تفعيل الرسم"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></button>`);
        if (isDrawingMode.value) {
          _push(`<div class="flex items-center gap-2 border-r border-[var(--border)] pr-3 mr-1"><input type="color"${ssrRenderAttr("value", brushColor.value)} class="w-8 h-8 rounded cursor-pointer border-0 p-0"><input type="range"${ssrRenderAttr("value", brushSize.value)} min="1" max="20" class="w-24 accent-[var(--primary)]"><button class="p-2 text-red-500 hover:bg-red-50 rounded" title="مسح الكل"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isLeader.value) {
        _push(`<div class="absolute top-4 right-4 z-30 bg-black/60 text-white px-3 py-1.5 rounded text-xs font-normal flex items-center gap-2 border border-zinc-800"><span class="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span> يتم العرض بواسطة القائد </div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLeader.value) {
        _push(`<div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-[var(--card)] border border-[var(--border)] px-4 py-2 rounded-md shadow-none flex items-center gap-4 text-[var(--foreground)] select-none"><div class="flex items-center gap-2 border-l border-[var(--border)] pl-3 text-right"><span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span></span><span class="text-[10px] font-normal text-[var(--primary)] tracking-wider">بث مباشر للطلاب</span></div><button class="p-2 rounded border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--accent)]" title="إرجاع 10 ثواني"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path></svg></button><button class="p-3 rounded-full bg-[var(--primary)] text-white hover:opacity-95 flex items-center justify-center shadow-none"${ssrRenderAttr("title", isPlaying.value ? "إيقاف مؤقت" : "تشغيل")}>`);
        if (isPlaying.value) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd"></path></svg>`);
        } else {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd"></path></svg>`);
        }
        _push(`</button><button class="p-2 rounded border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] hover:text-red-500 hover:bg-[var(--accent)]" title="إيقاف كامل"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clip-rule="evenodd"></path></svg></button><button class="p-2 rounded border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--accent)]" title="تقديم 10 ثواني"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.934 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.334-4z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.334-4z"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/StudyRoom/Components/VideoStage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
