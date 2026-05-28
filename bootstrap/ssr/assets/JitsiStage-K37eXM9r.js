import { ref, onMounted, onUnmounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
    const isWebRTCAvailable = ref(true);
    const hostname = ref("");
    const siteOrigin = ref("");
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
      hostname.value = window.location.hostname;
      siteOrigin.value = window.location.origin;
      const hasMediaDevices = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
      isWebRTCAvailable.value = hasMediaDevices;
      if (hasMediaDevices) {
        initJitsi();
      } else {
        isLoading.value = false;
      }
    });
    onUnmounted(() => {
      if (api) {
        api.dispose();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full aspect-video bg-black rounded-md overflow-hidden border border-[var(--border)] relative shadow-none" }, _attrs))}><div class="w-full h-full" style="${ssrRenderStyle(isWebRTCAvailable.value ? null : { display: "none" })}"></div>`);
      if (isWebRTCAvailable.value && !isLoading.value && !isTerminated.value) {
        _push(`<div class="absolute top-4 right-4 z-10"><button class="flex items-center gap-1.5 h-8 px-3 rounded bg-red-600 hover:bg-red-700 text-white font-normal text-[10px] shadow-none">`);
        _push(ssrRenderComponent(unref(PhoneOff), { class: "h-3.5 w-3.5" }, null, _parent));
        _push(`<span>غادرة الغرفة</span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isWebRTCAvailable.value) {
        _push(`<div class="absolute inset-0 bg-[#0c0c0e] flex flex-col items-center justify-center text-white z-30 overflow-y-auto p-4 sm:p-6"><div class="flex flex-col items-center gap-4 text-center max-w-lg w-full"><div class="h-12 w-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div><div class="space-y-1.5"><h4 class="text-xs sm:text-sm font-normal text-zinc-100">تنبيه: يتطلب البث المباشر اتصالاً آمناً (WebRTC)</h4><p class="text-[10px] sm:text-[11px] text-zinc-400 leading-relaxed text-center px-2"> يحظر متصفحك ميزات الكاميرا والميكروفون والبث لأنك تتصفح عبر بروتوكول <span class="bg-red-950/50 text-red-400 px-1 py-0.5 rounded font-mono">HTTP</span> غير الآمن من خلال عنوان IP خارجي (<span class="bg-zinc-800 text-zinc-200 px-1 py-0.5 rounded font-mono">${ssrInterpolate(hostname.value)}</span>). </p></div><div class="w-full text-right bg-zinc-900/60 border border-zinc-800/80 p-4 rounded-md text-[10px] text-zinc-300 space-y-3 mt-1"><p class="font-normal text-zinc-200 border-b border-zinc-800 pb-2">لتجاوز هذا الحظر وتفعيل البث، اتبع إحدى الطريقتين:</p><div class="space-y-3"><div class="leading-relaxed"><span class="text-[var(--primary)] font-normal">الطريقة الأولى (موصى بها):</span> تصفح الموقع عن طريق بروتوكول آمن باستخدام <span class="bg-zinc-950 text-emerald-400 px-1 py-0.5 rounded font-mono">https://</span> بدلاً من <span class="bg-zinc-950 text-red-400 px-1 py-0.5 rounded font-mono">http://</span>. </div><div class="border-t border-zinc-800/60 pt-2.5 space-y-2"><span class="text-[var(--primary)] font-normal">الطريقة الثانية (للاختبار والتطوير المحلي):</span><p class="text-[9.5px] text-zinc-400 leading-relaxed">إذا كنت تستخدم متصفح Chrome أو Edge، يمكنك السماح بالبث لهذا العنوان باتباع التالي:</p><ol class="list-decimal list-inside space-y-1.5 text-zinc-400 mr-1"><li>افتح هذا الرابط في علامة تبويب جديدة بالمتصفح: <div class="flex items-center gap-1.5 mt-1"><input readonly value="chrome://flags/#unsafely-treat-insecure-origin-as-secure" class="bg-zinc-950 border border-zinc-800 text-zinc-300 rounded px-2 py-1 w-full font-mono text-[9px] select-all cursor-text focus:outline-none"></div></li><li>ابحث عن الخيار المسمى <span class="text-zinc-200 font-normal">&quot;Insecure origins treated as secure&quot;</span> وقم بتفعيله إلى <span class="text-emerald-400 font-normal">Enabled</span>.</li><li>أضف عنوان هذا الموقع في المربع المخصص أسفله تماماً: <div class="flex items-center gap-1.5 mt-1"><input readonly${ssrRenderAttr("value", siteOrigin.value)} class="bg-zinc-950 border border-zinc-800 text-zinc-300 rounded px-2 py-1 w-full font-mono text-[9px] select-all cursor-text focus:outline-none"></div></li><li>اضغط على زر <span class="text-zinc-200 font-normal">Relaunch</span> (إعادة تشغيل المتصفح) في الأسفل لحفظ التغييرات.</li></ol></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isWebRTCAvailable.value && isLoading.value && !isTerminated.value) {
        _push(`<div class="absolute inset-0 bg-black flex flex-col items-center justify-center text-white z-10"><div class="flex flex-col items-center gap-4"><div class="relative flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Loader2), { class: "h-8 w-8 text-zinc-400 animate-spin" }, null, _parent));
        _push(`<div class="absolute h-12 w-12 rounded-full border border-white/5 animate-ping"></div></div><div class="text-center space-y-1 mt-2 text-right"><h4 class="text-xs font-normal text-zinc-200">جاري تهيئة الغرفة الدراسية</h4><p class="text-[10px] text-zinc-550">يرجى الانتظار، يتم الاتصال بالبث...</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isWebRTCAvailable.value && isTerminated.value) {
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
