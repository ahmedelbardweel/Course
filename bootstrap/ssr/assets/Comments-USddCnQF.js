import { unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BAtzIAbQ.js";
import { Head, router } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$2 } from "./index-CGK-4kfq.js";
import { ChevronLeft, MessageSquare, Mail, PlayCircle, Trash2 } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Comments",
  __ssrInlineRender: true,
  props: {
    comments: Array
  },
  setup(__props) {
    const deleteComment = (id) => {
      if (confirm("هل أنت متأكد من حذف هذا التعليق؟")) {
        router.delete(route("teacher.moderation.comments.destroy", id));
      }
    };
    const formatTimestamp = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = (seconds % 60).toString().padStart(2, "0");
      return `${mins}:${secs}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "رقابة التعليقات" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-zinc-50/20 text-[12px]"${_scopeId}><header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}><span${_scopeId}>لوحة التحكم</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-black"${_scopeId}>رقابة التعليقات</span></div></header><main class="flex-1 p-4 lg:p-6 text-right"${_scopeId}><div class="w-full space-y-4 max-w-full mx-auto"${_scopeId}>`);
            if (__props.comments.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 rounded-lg bg-white"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(MessageSquare), { class: "h-10 w-10 text-zinc-100 mb-3" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[12px] font-bold text-zinc-900"${_scopeId}>لا توجد تعليقات حالياً</h3><p class="text-[11px] text-zinc-400"${_scopeId}>ستظهر هنا جميع التعليقات الموقوتة التي يتركها الطلاب على دروسك.</p></div>`);
            } else {
              _push2(`<div class="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm"${_scopeId}><table class="w-full text-right border-collapse text-[12px]"${_scopeId}><thead${_scopeId}><tr class="bg-zinc-50/50 border-b border-zinc-100"${_scopeId}><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400"${_scopeId}>الطالب</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400"${_scopeId}>الدرس / الكورس</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400"${_scopeId}>التعليق</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center"${_scopeId}>التوقيت</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left"${_scopeId}>إجراءات</th></tr></thead><tbody class="divide-y divide-zinc-50"${_scopeId}><!--[-->`);
              ssrRenderList(__props.comments, (comment) => {
                var _a, _b, _c, _d, _e, _f;
                _push2(`<tr class="group hover:bg-zinc-50/30 transition-colors"${_scopeId}><td class="p-2.5"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="h-7 w-7 rounded-full overflow-hidden border border-zinc-100 bg-zinc-50 shrink-0"${_scopeId}><img${ssrRenderAttr("src", `https://ui-avatars.com/api/?name=${(_a = comment.user) == null ? void 0 : _a.name}&background=f4f4f5&color=71717a&bold=true&size=64`)}${_scopeId}></div><div${_scopeId}><div class="font-bold text-zinc-900"${_scopeId}>${ssrInterpolate((_b = comment.user) == null ? void 0 : _b.name)}</div><div class="text-[10px] text-zinc-400 font-medium flex items-center gap-1 mt-0.5"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Mail), { class: "h-2.5 w-2.5 opacity-50" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate((_c = comment.user) == null ? void 0 : _c.email)}</div></div></div></td><td class="p-2.5"${_scopeId}><div class="flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium group-hover:text-zinc-900 transition-colors"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(PlayCircle), { class: "h-3 w-3 opacity-60" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate((_d = comment.lesson) == null ? void 0 : _d.title)}</div><div class="text-[9px] text-zinc-300 font-black uppercase tracking-widest mt-0.5"${_scopeId}>${ssrInterpolate((_f = (_e = comment.lesson) == null ? void 0 : _e.course) == null ? void 0 : _f.title)}</div></td><td class="p-2.5"${_scopeId}><div class="max-w-md line-clamp-2 text-zinc-600 font-medium leading-relaxed italic"${_scopeId}> &quot;${ssrInterpolate(comment.content)}&quot; </div></td><td class="p-2.5 text-center"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$2), {
                  variant: "secondary",
                  class: "h-5 text-[10px] font-mono font-bold bg-zinc-900 text-white border-none px-2 rounded"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(formatTimestamp(comment.timestamp))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(formatTimestamp(comment.timestamp)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td><td class="p-2.5 text-left"${_scopeId}><div class="flex items-center justify-end"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$3), {
                  onClick: ($event) => deleteComment(comment.id),
                  variant: "ghost",
                  size: "icon",
                  class: "h-7 w-7 rounded text-zinc-200 hover:text-red-500 hover:bg-red-50 transition-all"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(Trash2), { class: "h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            }
            _push2(`</div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-zinc-50/20 text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight" }, [
                    createVNode("span", null, "لوحة التحكم"),
                    createVNode(unref(ChevronLeft), { class: "h-3 w-3" }),
                    createVNode("span", { class: "text-zinc-900 font-black" }, "رقابة التعليقات")
                  ])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right" }, [
                  createVNode("div", { class: "w-full space-y-4 max-w-full mx-auto" }, [
                    __props.comments.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 rounded-lg bg-white"
                    }, [
                      createVNode(unref(MessageSquare), { class: "h-10 w-10 text-zinc-100 mb-3" }),
                      createVNode("h3", { class: "text-[12px] font-bold text-zinc-900" }, "لا توجد تعليقات حالياً"),
                      createVNode("p", { class: "text-[11px] text-zinc-400" }, "ستظهر هنا جميع التعليقات الموقوتة التي يتركها الطلاب على دروسك.")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm"
                    }, [
                      createVNode("table", { class: "w-full text-right border-collapse text-[12px]" }, [
                        createVNode("thead", null, [
                          createVNode("tr", { class: "bg-zinc-50/50 border-b border-zinc-100" }, [
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400" }, "الطالب"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400" }, "الدرس / الكورس"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400" }, "التعليق"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "التوقيت"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left" }, "إجراءات")
                          ])
                        ]),
                        createVNode("tbody", { class: "divide-y divide-zinc-50" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.comments, (comment) => {
                            var _a, _b, _c, _d, _e, _f;
                            return openBlock(), createBlock("tr", {
                              key: comment.id,
                              class: "group hover:bg-zinc-50/30 transition-colors"
                            }, [
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "flex items-center gap-3" }, [
                                  createVNode("div", { class: "h-7 w-7 rounded-full overflow-hidden border border-zinc-100 bg-zinc-50 shrink-0" }, [
                                    createVNode("img", {
                                      src: `https://ui-avatars.com/api/?name=${(_a = comment.user) == null ? void 0 : _a.name}&background=f4f4f5&color=71717a&bold=true&size=64`
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "font-bold text-zinc-900" }, toDisplayString((_b = comment.user) == null ? void 0 : _b.name), 1),
                                    createVNode("div", { class: "text-[10px] text-zinc-400 font-medium flex items-center gap-1 mt-0.5" }, [
                                      createVNode(unref(Mail), { class: "h-2.5 w-2.5 opacity-50" }),
                                      createTextVNode(" " + toDisplayString((_c = comment.user) == null ? void 0 : _c.email), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium group-hover:text-zinc-900 transition-colors" }, [
                                  createVNode(unref(PlayCircle), { class: "h-3 w-3 opacity-60" }),
                                  createTextVNode(" " + toDisplayString((_d = comment.lesson) == null ? void 0 : _d.title), 1)
                                ]),
                                createVNode("div", { class: "text-[9px] text-zinc-300 font-black uppercase tracking-widest mt-0.5" }, toDisplayString((_f = (_e = comment.lesson) == null ? void 0 : _e.course) == null ? void 0 : _f.title), 1)
                              ]),
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "max-w-md line-clamp-2 text-zinc-600 font-medium leading-relaxed italic" }, ' "' + toDisplayString(comment.content) + '" ', 1)
                              ]),
                              createVNode("td", { class: "p-2.5 text-center" }, [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "secondary",
                                  class: "h-5 text-[10px] font-mono font-bold bg-zinc-900 text-white border-none px-2 rounded"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatTimestamp(comment.timestamp)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("td", { class: "p-2.5 text-left" }, [
                                createVNode("div", { class: "flex items-center justify-end" }, [
                                  createVNode(unref(_sfc_main$3), {
                                    onClick: ($event) => deleteComment(comment.id),
                                    variant: "ghost",
                                    size: "icon",
                                    class: "h-7 w-7 rounded text-zinc-200 hover:text-red-500 hover:bg-red-50 transition-all"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ]))
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Moderation/Comments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
