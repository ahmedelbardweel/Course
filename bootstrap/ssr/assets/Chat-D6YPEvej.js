import { ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, withModifiers, nextTick, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-DnWC7g1W.js";
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
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "h-full bg-[var(--background)]",
        breadcrumbs: [
          { label: "الرئيسية", url: _ctx.route("dashboard") },
          { label: "المساعد الذكي" }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-md overflow-hidden shadow-none h-[calc(100vh-76px)] lg:h-[calc(100vh-92px)] text-right"${_scopeId}><div class="px-4 py-3 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between shrink-0"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="h-8 w-8 bg-[var(--primary)] text-white rounded flex items-center justify-center border border-[var(--border)]"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Sparkles), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h2 class="font-normal text-sm tracking-tight text-[var(--foreground)]"${_scopeId}>المدرب الشخصي الذكي</h2><div class="flex items-center gap-1.5"${_scopeId}><span class="h-1.5 w-1.5 bg-[var(--primary)] rounded-full animate-pulse"${_scopeId}></span><span class="text-[10px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest"${_scopeId}>متصل وحاضر للمساعدة</span></div></div></div></div><div class="flex-1 overflow-y-auto p-4 space-y-3 bg-[var(--card)]"${_scopeId}><!--[-->`);
            ssrRenderList(messages.value, (msg, index) => {
              _push2(`<div class="${ssrRenderClass(["flex w-full", msg.role === "user" ? "justify-start" : "justify-end"])}"${_scopeId}><div class="${ssrRenderClass([
                "max-w-[85%] p-3 rounded-md text-xs leading-relaxed border shadow-none",
                msg.role === "user" ? "bg-[var(--primary)] text-white border-[var(--primary)] rounded-tr-none" : "bg-[var(--muted)] text-[var(--foreground)] border-[var(--border)] rounded-tl-none"
              ])}"${_scopeId}><div class="flex items-center gap-1.5 mb-1.5 opacity-40"${_scopeId}>`);
              if (msg.role === "user") {
                _push2(ssrRenderComponent(unref(User), { class: "h-2.5 w-2.5 text-white" }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(unref(Sparkles), { class: "h-2.5 w-2.5 text-[var(--foreground)]" }, null, _parent2, _scopeId));
              }
              _push2(`<span class="text-[9px] font-normal uppercase tracking-widest text-[var(--foreground)]"${_scopeId}>${ssrInterpolate(msg.role === "user" ? "أنت" : "المساعد الذكي")}</span></div> ${ssrInterpolate(msg.content)}</div></div>`);
            });
            _push2(`<!--]-->`);
            if (isLoading.value) {
              _push2(`<div class="flex justify-end"${_scopeId}><div class="bg-[var(--muted)] border border-[var(--border)] p-4 rounded-md rounded-tl-none flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin text-[var(--muted-foreground)]" }, null, _parent2, _scopeId));
              _push2(`<span class="text-xs font-normal text-[var(--muted-foreground)]"${_scopeId}>جاري التفكير...</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="p-3 bg-[var(--card)] border-t border-[var(--border)] shrink-0"${_scopeId}><form class="relative flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              modelValue: newMessage.value,
              "onUpdate:modelValue": ($event) => newMessage.value = $event,
              placeholder: "اسألني أي شيء...",
              class: "h-9 pr-3 pl-10 text-xs border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)] shadow-none"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              type: "submit",
              disabled: isLoading.value || !newMessage.value.trim(),
              size: "icon",
              class: "absolute left-1 h-7 w-7 bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded shadow-none border-none"
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
            _push2(`</form><p class="text-[9px] text-[var(--muted-foreground)] text-center mt-1.5 uppercase tracking-widest"${_scopeId}> مدعوم بالذكاء الاصطناعي لخدمتك </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-md overflow-hidden shadow-none h-[calc(100vh-76px)] lg:h-[calc(100vh-92px)] text-right" }, [
                createVNode("div", { class: "px-4 py-3 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between shrink-0" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("div", { class: "h-8 w-8 bg-[var(--primary)] text-white rounded flex items-center justify-center border border-[var(--border)]" }, [
                      createVNode(unref(Sparkles), { class: "h-4 w-4" })
                    ]),
                    createVNode("div", null, [
                      createVNode("h2", { class: "font-normal text-sm tracking-tight text-[var(--foreground)]" }, "المدرب الشخصي الذكي"),
                      createVNode("div", { class: "flex items-center gap-1.5" }, [
                        createVNode("span", { class: "h-1.5 w-1.5 bg-[var(--primary)] rounded-full animate-pulse" }),
                        createVNode("span", { class: "text-[10px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest" }, "متصل وحاضر للمساعدة")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", {
                  ref_key: "scrollContainer",
                  ref: scrollContainer,
                  class: "flex-1 overflow-y-auto p-4 space-y-3 bg-[var(--card)]"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (msg, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: ["flex w-full", msg.role === "user" ? "justify-start" : "justify-end"]
                    }, [
                      createVNode("div", {
                        class: [
                          "max-w-[85%] p-3 rounded-md text-xs leading-relaxed border shadow-none",
                          msg.role === "user" ? "bg-[var(--primary)] text-white border-[var(--primary)] rounded-tr-none" : "bg-[var(--muted)] text-[var(--foreground)] border-[var(--border)] rounded-tl-none"
                        ]
                      }, [
                        createVNode("div", { class: "flex items-center gap-1.5 mb-1.5 opacity-40" }, [
                          msg.role === "user" ? (openBlock(), createBlock(unref(User), {
                            key: 0,
                            class: "h-2.5 w-2.5 text-white"
                          })) : (openBlock(), createBlock(unref(Sparkles), {
                            key: 1,
                            class: "h-2.5 w-2.5 text-[var(--foreground)]"
                          })),
                          createVNode("span", { class: "text-[9px] font-normal uppercase tracking-widest text-[var(--foreground)]" }, toDisplayString(msg.role === "user" ? "أنت" : "المساعد الذكي"), 1)
                        ]),
                        createTextVNode(" " + toDisplayString(msg.content), 1)
                      ], 2)
                    ], 2);
                  }), 128)),
                  isLoading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex justify-end"
                  }, [
                    createVNode("div", { class: "bg-[var(--muted)] border border-[var(--border)] p-4 rounded-md rounded-tl-none flex items-center gap-3" }, [
                      createVNode(unref(Loader2), { class: "h-4 w-4 animate-spin text-[var(--muted-foreground)]" }),
                      createVNode("span", { class: "text-xs font-normal text-[var(--muted-foreground)]" }, "جاري التفكير...")
                    ])
                  ])) : createCommentVNode("", true)
                ], 512),
                createVNode("div", { class: "p-3 bg-[var(--card)] border-t border-[var(--border)] shrink-0" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(sendMessage, ["prevent"]),
                    class: "relative flex items-center"
                  }, [
                    createVNode(unref(_sfc_main$2), {
                      modelValue: newMessage.value,
                      "onUpdate:modelValue": ($event) => newMessage.value = $event,
                      placeholder: "اسألني أي شيء...",
                      class: "h-9 pr-3 pl-10 text-xs border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)] shadow-none"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$3), {
                      type: "submit",
                      disabled: isLoading.value || !newMessage.value.trim(),
                      size: "icon",
                      class: "absolute left-1 h-7 w-7 bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded shadow-none border-none"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Send), { class: "h-3 w-3" })
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ], 32),
                  createVNode("p", { class: "text-[9px] text-[var(--muted-foreground)] text-center mt-1.5 uppercase tracking-widest" }, " مدعوم بالذكاء الاصطناعي لخدمتك ")
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
