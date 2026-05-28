import { ref, onMounted, onUnmounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { PhoneOff, Loader2, Video } from "lucide-vue-next";
const _sfc_main = {
  __name: "JitsiStage",
  __ssrInlineRender: true,
  props: {
    room: Object,
    user: Object,
    isLeader: Boolean
  },
  setup(__props) {
    const props = __props;
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
        const script = document.createElement("script");
        script.src = "https://meet.jit.si/external_api.js";
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
    const initJitsi = async () => {
      try {
        await loadJitsiScript();
        const secureRoomName = `CourseStudyRoom_${props.room.id}_${props.room.course_id}`;
        const domain = "meet.jit.si";
        const options = {
          roomName: secureRoomName,
          parentNode: jitsiContainer.value,
          width: "100%",
          height: "100%",
          userInfo: {
            displayName: props.user.name,
            email: props.user.email || ""
          },
          configOverwrite: {
            startWithAudioMuted: true,
            startWithVideoMuted: true,
            prejoinPageEnabled: false,
            // Bypass prejoin screen for instant loading
            disableDeepLinking: true,
            // Prevent mobile redirect prompts
            toolbarButtons: [
              "microphone",
              "camera",
              "desktop",
              "fullscreen",
              "fodeviceselection",
              "profile",
              "raisehand",
              "videoquality",
              "tileview"
            ]
          },
          interfaceConfigOverwrite: {
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUEST: false,
            DEFAULT_BACKGROUND: "#000000",
            TOOLBAR_BACKGROUND: "#000000",
            DISABLE_TRANSCRIPT: true,
            DISABLE_RINGING: true
          }
        };
        api = new JitsiMeetExternalAPI(domain, options);
        api.addEventListener("videoConferenceJoined", () => {
          isLoading.value = false;
          console.log("Successfully joined Jitsi room!");
        });
        api.addEventListener("videoConferenceLeft", () => {
          handleHangup();
        });
        api.addEventListener("readyToClose", () => {
          handleHangup();
        });
        const iframe = api.getIFrame();
        if (iframe) {
          iframe.onload = () => {
            setTimeout(() => {
              isLoading.value = false;
            }, 1e3);
          };
        }
        setTimeout(() => {
          isLoading.value = false;
        }, 5e3);
      } catch (error) {
        isLoading.value = false;
        console.error("Failed to load Jitsi Meet:", error);
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full aspect-video bg-black rounded-md overflow-hidden border border-[var(--border)] relative shadow-none" }, _attrs))}><div class="w-full h-full"></div>`);
      if (!isLoading.value && !isTerminated.value) {
        _push(`<div class="absolute top-4 right-4 z-10"><button class="flex items-center gap-1.5 h-8 px-3 rounded bg-red-600 hover:bg-red-700 text-white font-normal text-[10px] shadow-none">`);
        _push(ssrRenderComponent(unref(PhoneOff), { class: "h-3.5 w-3.5" }, null, _parent));
        _push(`<span>غادرة الغرفة</span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value && !isTerminated.value) {
        _push(`<div class="absolute inset-0 bg-black flex flex-col items-center justify-center text-white z-10"><div class="flex flex-col items-center gap-4"><div class="relative flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Loader2), { class: "h-8 w-8 text-zinc-400 animate-spin" }, null, _parent));
        _push(`<div class="absolute h-12 w-12 rounded-full border border-white/5 animate-ping"></div></div><div class="text-center space-y-1 mt-2 text-right"><h4 class="text-xs font-normal text-zinc-200">جاري تهيئة الغرفة الدراسية</h4><p class="text-[10px] text-zinc-550">يرجى الانتظار، يتم الاتصال بالبث...</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isTerminated.value) {
        _push(`<div class="absolute inset-0 bg-black flex flex-col items-center justify-center text-white z-20"><div class="flex flex-col items-center gap-3.5 text-center p-6"><div class="h-10 w-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">`);
        _push(ssrRenderComponent(unref(Video), { class: "h-4 w-4" }, null, _parent));
        _push(`</div><div class="space-y-1"><h4 class="text-xs font-normal text-zinc-200">تم إنهاء المكالمة بنجاح</h4><p class="text-[10px] text-zinc-550 max-w-xs leading-relaxed">لقد غادرت الغرفة الدراسية المشتركة. يمكنك إعادة الانضمام للمكالمة في أي وقت.</p></div><button class="h-8 px-4 bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 font-normal rounded shadow-none text-[10px] mt-2"> إعادة الاتصال بالغرفة </button></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/StudyRoom/Components/JitsiStage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
