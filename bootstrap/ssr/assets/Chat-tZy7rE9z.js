import { ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, withModifiers, nextTick, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CtY-O8y9.js";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$2 } from "./Input-Bd7d8AJ3.js";
import { Sparkles, User, Loader2, Send } from "lucide-vue-next";
import axios from "axios";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
const _sfc_main = {
  __name: "Chat",
  __ssrInlineRender: true,
  props: {
    learningGoal: String,
    lessonId: Number,
    lessonTitle: String
  },
  setup(__props) {
    const props = __props;
    const initialMessage = props.lessonTitle ? `أهلاً بك! أنا مساعدك الذكي. لقد تم تخصيصي الآن للإجابة فقط من خلال محتوى درس "${props.lessonTitle}". اسألني أي سؤال يخص هذا الدرس وسأساعدك فوراً.` : `أهلاً بك! أنا مساعدك الذكي في منصة كورس. بما أن هدفك هو '${props.learningGoal}'، سأكون رفيقك في هذه الرحلة. كيف يمكنني مساعدتك اليوم؟`;
    const messages = ref([
      {
        role: "bot",
        content: initialMessage
      }
    ]);
    const newMessage = ref("");
    const isLoading = ref(false);
    const scrollContainer = ref(null);
    const scrollToBottom = async () => {
      await nextTick();
      if (scrollContainer.value) {
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
      }
    };
    const sendMessage = async () => {
      var _a, _b;
      if (!newMessage.value.trim() || isLoading.value) return;
      const userText = newMessage.value;
      messages.value.push({ role: "user", content: userText });
      newMessage.value = "";
      isLoading.value = true;
      scrollToBottom();
      try {
        const response = await axios.post(route("ai.ask"), {
          message: userText,
          lesson_id: props.lessonId
        });
        messages.value.push({ role: "bot", content: response.data.answer });
      } catch (error) {
        const errorMsg = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.answer) || "عذراً، حدث خطأ غير متوقع.";
        messages.value.push({ role: "bot", content: errorMsg });
      } finally {
        isLoading.value = false;
        scrollToBottom();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "المساعد الذكي" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { class: "h-full" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` المساعد الذكي `);
          } else {
            return [
              createTextVNode(" المساعد الذكي ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm h-[calc(100vh-76px)] lg:h-[calc(100vh-92px)]"${_scopeId}><div class="px-4 py-3 border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 flex items-center justify-between shrink-0"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="h-8 w-8 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Sparkles), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h2 class="font-black text-sm tracking-tight"${_scopeId}>المدرب الشخصي الذكي</h2><div class="flex items-center gap-1.5"${_scopeId}><span class="h-1.5 w-1.5 bg-zinc-950 dark:bg-white rounded-full animate-pulse"${_scopeId}></span><span class="text-[10px] text-zinc-400 font-bold uppercase tracking-widest"${_scopeId}>متصل وحاضر للمساعدة</span></div></div></div></div><div class="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth"${_scopeId}><!--[-->`);
            ssrRenderList(messages.value, (msg, index) => {
              _push2(`<div class="${ssrRenderClass(["flex w-full", msg.role === "user" ? "justify-start" : "justify-end"])}"${_scopeId}><div class="${ssrRenderClass([
                "max-w-[85%] p-3 rounded-lg text-xs leading-relaxed shadow-sm transition-all",
                msg.role === "user" ? "bg-zinc-950 text-white rounded-tr-none border border-zinc-950 dark:bg-white dark:text-black dark:border-white" : "bg-zinc-50 text-zinc-900 rounded-tl-none border border-zinc-200 dark:bg-zinc-900 dark:text-white dark:border-zinc-800"
              ])}"${_scopeId}><div class="flex items-center gap-1.5 mb-1.5 opacity-40"${_scopeId}>`);
              if (msg.role === "user") {
                _push2(ssrRenderComponent(unref(User), { class: "h-2.5 w-2.5" }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(unref(Sparkles), { class: "h-2.5 w-2.5" }, null, _parent2, _scopeId));
              }
              _push2(`<span class="text-[9px] font-bold uppercase tracking-widest"${_scopeId}>${ssrInterpolate(msg.role === "user" ? "أنت" : "المساعد الذكي")}</span></div> ${ssrInterpolate(msg.content)}</div></div>`);
            });
            _push2(`<!--]-->`);
            if (isLoading.value) {
              _push2(`<div class="flex justify-end"${_scopeId}><div class="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl rounded-tl-none flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin text-zinc-500" }, null, _parent2, _scopeId));
              _push2(`<span class="text-xs font-bold text-zinc-500"${_scopeId}>جاري التفكير...</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="p-3 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 shrink-0"${_scopeId}><form class="relative flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              modelValue: newMessage.value,
              "onUpdate:modelValue": ($event) => newMessage.value = $event,
              placeholder: "اسألني أي شيء...",
              class: "h-9 pr-3 pl-10 text-xs border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-lg focus-visible:ring-black dark:focus-visible:ring-white transition-all"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              type: "submit",
              disabled: isLoading.value || !newMessage.value.trim(),
              size: "icon",
              class: "absolute left-1 h-7 w-7 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black rounded-md shadow-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Send), { class: "h-3 w-3" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Send), { class: "h-3 w-3" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form><p class="text-[9px] text-zinc-400 text-center mt-1.5 uppercase tracking-widest"${_scopeId}> مدعوم بالذكاء الاصطناعي لخدمتك </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm h-[calc(100vh-76px)] lg:h-[calc(100vh-92px)]" }, [
                createVNode("div", { class: "px-4 py-3 border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 flex items-center justify-between shrink-0" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("div", { class: "h-8 w-8 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black" }, [
                      createVNode(unref(Sparkles), { class: "h-4 w-4" })
                    ]),
                    createVNode("div", null, [
                      createVNode("h2", { class: "font-black text-sm tracking-tight" }, "المدرب الشخصي الذكي"),
                      createVNode("div", { class: "flex items-center gap-1.5" }, [
                        createVNode("span", { class: "h-1.5 w-1.5 bg-zinc-950 dark:bg-white rounded-full animate-pulse" }),
                        createVNode("span", { class: "text-[10px] text-zinc-400 font-bold uppercase tracking-widest" }, "متصل وحاضر للمساعدة")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", {
                  ref_key: "scrollContainer",
                  ref: scrollContainer,
                  class: "flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (msg, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: ["flex w-full", msg.role === "user" ? "justify-start" : "justify-end"]
                    }, [
                      createVNode("div", {
                        class: [
                          "max-w-[85%] p-3 rounded-lg text-xs leading-relaxed shadow-sm transition-all",
                          msg.role === "user" ? "bg-zinc-950 text-white rounded-tr-none border border-zinc-950 dark:bg-white dark:text-black dark:border-white" : "bg-zinc-50 text-zinc-900 rounded-tl-none border border-zinc-200 dark:bg-zinc-900 dark:text-white dark:border-zinc-800"
                        ]
                      }, [
                        createVNode("div", { class: "flex items-center gap-1.5 mb-1.5 opacity-40" }, [
                          msg.role === "user" ? (openBlock(), createBlock(unref(User), {
                            key: 0,
                            class: "h-2.5 w-2.5"
                          })) : (openBlock(), createBlock(unref(Sparkles), {
                            key: 1,
                            class: "h-2.5 w-2.5"
                          })),
                          createVNode("span", { class: "text-[9px] font-bold uppercase tracking-widest" }, toDisplayString(msg.role === "user" ? "أنت" : "المساعد الذكي"), 1)
                        ]),
                        createTextVNode(" " + toDisplayString(msg.content), 1)
                      ], 2)
                    ], 2);
                  }), 128)),
                  isLoading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex justify-end"
                  }, [
                    createVNode("div", { class: "bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl rounded-tl-none flex items-center gap-3" }, [
                      createVNode(unref(Loader2), { class: "h-4 w-4 animate-spin text-zinc-500" }),
                      createVNode("span", { class: "text-xs font-bold text-zinc-500" }, "جاري التفكير...")
                    ])
                  ])) : createCommentVNode("", true)
                ], 512),
                createVNode("div", { class: "p-3 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 shrink-0" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(sendMessage, ["prevent"]),
                    class: "relative flex items-center"
                  }, [
                    createVNode(unref(_sfc_main$2), {
                      modelValue: newMessage.value,
                      "onUpdate:modelValue": ($event) => newMessage.value = $event,
                      placeholder: "اسألني أي شيء...",
                      class: "h-9 pr-3 pl-10 text-xs border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-lg focus-visible:ring-black dark:focus-visible:ring-white transition-all"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$3), {
                      type: "submit",
                      disabled: isLoading.value || !newMessage.value.trim(),
                      size: "icon",
                      class: "absolute left-1 h-7 w-7 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black rounded-md shadow-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Send), { class: "h-3 w-3" })
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ], 32),
                  createVNode("p", { class: "text-[9px] text-zinc-400 text-center mt-1.5 uppercase tracking-widest" }, " مدعوم بالذكاء الاصطناعي لخدمتك ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AI/Chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
