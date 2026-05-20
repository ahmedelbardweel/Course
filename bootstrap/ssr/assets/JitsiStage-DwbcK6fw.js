import { ref, onMounted, onUnmounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Loader2 } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
              "hangup",
              "profile",
              "raisehand",
              "videoquality",
              "tileview"
            ]
          },
          interfaceConfigOverwrite: {
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUEST: false,
            DEFAULT_BACKGROUND: "#18181b",
            // Dark background matching modern UI
            TOOLBAR_BACKGROUND: "#18181b",
            DISABLE_TRANSCRIPT: true,
            DISABLE_RINGING: true
          }
        };
        api = new JitsiMeetExternalAPI(domain, options);
        api.addEventListener("videoConferenceJoined", () => {
          isLoading.value = false;
          console.log("Successfully joined Jitsi room!");
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full aspect-video bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 relative shadow-inner" }, _attrs))} data-v-8815b010><div class="w-full h-full" data-v-8815b010></div>`);
      if (isLoading.value) {
        _push(`<div class="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center text-white z-10" data-v-8815b010><div class="flex flex-col items-center gap-4" data-v-8815b010><div class="relative flex items-center justify-center" data-v-8815b010>`);
        _push(ssrRenderComponent(unref(Loader2), { class: "h-8 w-8 text-zinc-400 animate-spin" }, null, _parent));
        _push(`<div class="absolute h-12 w-12 rounded-full border border-white/5 animate-ping" data-v-8815b010></div></div><div class="text-center space-y-1 mt-2" data-v-8815b010><h4 class="text-xs font-bold text-zinc-200" data-v-8815b010>جاري تهيئة الغرفة الدراسية</h4><p class="text-[10px] text-zinc-500" data-v-8815b010>يرجى الانتظار، يتم الاتصال بالبث...</p></div></div></div>`);
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
const JitsiStage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8815b010"]]);
export {
  JitsiStage as default
};
