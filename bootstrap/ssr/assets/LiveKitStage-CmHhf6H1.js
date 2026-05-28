import { ref, watch, onMounted, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { Room, VideoPresets, RoomEvent, createLocalTracks } from "livekit-client";
const _sfc_main = {
  __name: "LiveKitStage",
  __ssrInlineRender: true,
  props: {
    lkUrl: String,
    lkToken: String,
    stageMode: String,
    // 'screen' or 'camera'
    isLeader: Boolean
  },
  setup(__props) {
    const props = __props;
    const videoContainer = ref(null);
    const connectionStatus = ref("Connecting to WebRTC...");
    let room = null;
    let currentTracks = [];
    const connectToLiveKit = async () => {
      room = new Room({
        adaptiveStream: true,
        dynacast: true,
        videoCaptureDefaults: {
          resolution: VideoPresets.h720.resolution
        }
      });
      room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
        console.log("Track subscribed:", track.kind);
        if (track.kind === "video" || track.kind === "audio") {
          const element = track.attach();
          if (track.kind === "video") {
            element.style.width = "100%";
            element.style.height = "100%";
            element.style.objectFit = "contain";
            videoContainer.value.appendChild(element);
          } else {
            document.body.appendChild(element);
          }
        }
      });
      room.on(RoomEvent.TrackUnsubscribed, (track) => {
        track.detach().forEach((el) => el.remove());
      });
      room.on(RoomEvent.Disconnected, () => {
        connectionStatus.value = "Disconnected from WebRTC.";
      });
      try {
        await room.connect(props.lkUrl, props.lkToken);
        connectionStatus.value = "Connected to WebRTC.";
        if (props.isLeader) {
          publishTracksBasedOnMode();
        }
      } catch (error) {
        console.error("Failed to connect to LiveKit:", error);
        connectionStatus.value = "Connection failed.";
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
        videoContainer.value.innerHTML = "";
      }
    };
    const publishTracksBasedOnMode = async () => {
      if (!room || !props.isLeader) return;
      await unpublishAll();
      try {
        if (props.stageMode === "screen") {
          const tracks = await createLocalTracks({
            audio: true,
            // System audio if permitted
            video: false,
            screen: true
          });
          for (const track of tracks) {
            await room.localParticipant.publishTrack(track);
            currentTracks.push(track);
            if (track.kind === "video") {
              const element = track.attach();
              element.style.width = "100%";
              element.style.height = "100%";
              element.style.objectFit = "contain";
              videoContainer.value.appendChild(element);
            }
          }
        } else if (props.stageMode === "camera") {
          const tracks = await createLocalTracks({
            audio: true,
            video: true
          });
          for (const track of tracks) {
            await room.localParticipant.publishTrack(track);
            currentTracks.push(track);
            if (track.kind === "video") {
              const element = track.attach();
              element.style.width = "100%";
              element.style.height = "100%";
              element.style.objectFit = "cover";
              videoContainer.value.appendChild(element);
            }
          }
        }
      } catch (e) {
        console.error("Error publishing tracks:", e);
        connectionStatus.value = "Error accessing media devices.";
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full aspect-video bg-black rounded-md overflow-hidden border border-[var(--border)] relative flex items-center justify-center shadow-none" }, _attrs))}>`);
      if (!videoContainer.value || videoContainer.value.children.length === 0) {
        _push(`<div class="absolute inset-0 flex flex-col items-center justify-center text-[var(--muted-foreground)] z-10 pointer-events-none">`);
        if (__props.stageMode === "screen") {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-3 opacity-40 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`);
        } else {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-3 opacity-40 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>`);
        }
        _push(`<p class="text-xs font-normal">${ssrInterpolate(connectionStatus.value)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full h-full relative z-20"></div><div class="absolute top-3 right-3 bg-[var(--primary)] text-white px-2.5 py-1 rounded text-[10px] font-normal flex items-center gap-1.5 z-30 uppercase tracking-widest shadow-none border-none"><span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> بث مباشر: ${ssrInterpolate(__props.stageMode === "screen" ? "شاشة العرض" : "الكاميرا")}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/StudyRoom/Components/LiveKitStage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
