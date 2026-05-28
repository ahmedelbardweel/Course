import { unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-Cd85X56I.js";
import { Head, router } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$2 } from "./index-CGK-4kfq.js";
import { MessageSquare, Mail, PlayCircle, Trash2 } from "lucide-vue-next";
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
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "لوحة التحكم", url: _ctx.route("teacher.dashboard") },
          { label: "رقابة التعليقات" }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]"${_scopeId}><main class="flex-1 p-4 lg:p-6 text-right"${_scopeId}><div class="w-full space-y-4 max-w-full mx-auto"${_scopeId}>`);
            if (__props.comments.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(MessageSquare), { class: "h-10 w-10 text-[var(--muted-foreground)] opacity-40 mb-3" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[12px] font-normal text-[var(--foreground)]"${_scopeId}>لا توجد تعليقات حالياً</h3><p class="text-[11px] text-[var(--muted-foreground)]"${_scopeId}>ستظهر هنا جميع التعليقات الموقوتة التي يتركها الطلاب على دروسك.</p></div>`);
            } else {
              _push2(`<div class="border border-[var(--border)] rounded-md overflow-hidden bg-[var(--card)] shadow-none"${_scopeId}><table class="w-full text-right border-collapse text-[12px]"${_scopeId}><thead${_scopeId}><tr class="bg-[var(--muted)] border-b border-[var(--border)]"${_scopeId}><th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]"${_scopeId}>الطالب</th><th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]"${_scopeId}>الدرس / الكورس</th><th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]"${_scopeId}>التعليق</th><th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center"${_scopeId}>التوقيت</th><th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-left"${_scopeId}>إجراءات</th></tr></thead><tbody class="divide-y divide-[var(--border)] bg-[var(--card)]"${_scopeId}><!--[-->`);
              ssrRenderList(__props.comments, (comment) => {
                var _a, _b, _c, _d, _e, _f;
                _push2(`<tr class="hover:bg-[var(--muted)]"${_scopeId}><td class="p-2.5"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="h-7 w-7 rounded-full overflow-hidden border border-[var(--border)] bg-[var(--muted)] shrink-0"${_scopeId}><img${ssrRenderAttr("src", `https://ui-avatars.com/api/?name=${(_a = comment.user) == null ? void 0 : _a.name}&background=fafaf7&color=26251e&bold=false&size=64`)}${_scopeId}></div><div${_scopeId}><div class="font-normal text-[var(--foreground)]"${_scopeId}>${ssrInterpolate((_b = comment.user) == null ? void 0 : _b.name)}</div><div class="text-[10px] text-[var(--muted-foreground)] font-normal flex items-center gap-1 mt-0.5"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Mail), { class: "h-2.5 w-2.5 opacity-55" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate((_c = comment.user) == null ? void 0 : _c.email)}</div></div></div></td><td class="p-2.5"${_scopeId}><div class="flex items-center gap-1.5 text-[11px] text-[var(--foreground)] font-normal"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(PlayCircle), { class: "h-3 w-3 text-[var(--primary)]" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate((_d = comment.lesson) == null ? void 0 : _d.title)}</div><div class="text-[9px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest mt-0.5"${_scopeId}>${ssrInterpolate((_f = (_e = comment.lesson) == null ? void 0 : _e.course) == null ? void 0 : _f.title)}</div></td><td class="p-2.5"${_scopeId}><div class="max-w-md line-clamp-2 text-[var(--foreground)] font-normal leading-relaxed italic"${_scopeId}> &quot;${ssrInterpolate(comment.content)}&quot; </div></td><td class="p-2.5 text-center"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$2), {
                  variant: "secondary",
                  class: "h-5 text-[10px] font-mono font-normal bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] px-2 rounded shadow-none"
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
                  class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500"
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
              createVNode("div", { class: "flex flex-col h-full bg-[var(--background)] text-[12px]" }, [
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right" }, [
                  createVNode("div", { class: "w-full space-y-4 max-w-full mx-auto" }, [
                    __props.comments.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"
                    }, [
                      createVNode(unref(MessageSquare), { class: "h-10 w-10 text-[var(--muted-foreground)] opacity-40 mb-3" }),
                      createVNode("h3", { class: "text-[12px] font-normal text-[var(--foreground)]" }, "لا توجد تعليقات حالياً"),
                      createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)]" }, "ستظهر هنا جميع التعليقات الموقوتة التي يتركها الطلاب على دروسك.")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "border border-[var(--border)] rounded-md overflow-hidden bg-[var(--card)] shadow-none"
                    }, [
                      createVNode("table", { class: "w-full text-right border-collapse text-[12px]" }, [
                        createVNode("thead", null, [
                          createVNode("tr", { class: "bg-[var(--muted)] border-b border-[var(--border)]" }, [
                            createVNode("th", { class: "p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]" }, "الطالب"),
                            createVNode("th", { class: "p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]" }, "الدرس / الكورس"),
                            createVNode("th", { class: "p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]" }, "التعليق"),
                            createVNode("th", { class: "p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center" }, "التوقيت"),
                            createVNode("th", { class: "p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-left" }, "إجراءات")
                          ])
                        ]),
                        createVNode("tbody", { class: "divide-y divide-[var(--border)] bg-[var(--card)]" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.comments, (comment) => {
                            var _a, _b, _c, _d, _e, _f;
                            return openBlock(), createBlock("tr", {
                              key: comment.id,
                              class: "hover:bg-[var(--muted)]"
                            }, [
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "flex items-center gap-3" }, [
                                  createVNode("div", { class: "h-7 w-7 rounded-full overflow-hidden border border-[var(--border)] bg-[var(--muted)] shrink-0" }, [
                                    createVNode("img", {
                                      src: `https://ui-avatars.com/api/?name=${(_a = comment.user) == null ? void 0 : _a.name}&background=fafaf7&color=26251e&bold=false&size=64`
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "font-normal text-[var(--foreground)]" }, toDisplayString((_b = comment.user) == null ? void 0 : _b.name), 1),
                                    createVNode("div", { class: "text-[10px] text-[var(--muted-foreground)] font-normal flex items-center gap-1 mt-0.5" }, [
                                      createVNode(unref(Mail), { class: "h-2.5 w-2.5 opacity-55" }),
                                      createTextVNode(" " + toDisplayString((_c = comment.user) == null ? void 0 : _c.email), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "flex items-center gap-1.5 text-[11px] text-[var(--foreground)] font-normal" }, [
                                  createVNode(unref(PlayCircle), { class: "h-3 w-3 text-[var(--primary)]" }),
                                  createTextVNode(" " + toDisplayString((_d = comment.lesson) == null ? void 0 : _d.title), 1)
                                ]),
                                createVNode("div", { class: "text-[9px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest mt-0.5" }, toDisplayString((_f = (_e = comment.lesson) == null ? void 0 : _e.course) == null ? void 0 : _f.title), 1)
                              ]),
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "max-w-md line-clamp-2 text-[var(--foreground)] font-normal leading-relaxed italic" }, ' "' + toDisplayString(comment.content) + '" ', 1)
                              ]),
                              createVNode("td", { class: "p-2.5 text-center" }, [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "secondary",
                                  class: "h-5 text-[10px] font-mono font-normal bg-[var(--accent)] text-[var(--foreground)] border border-[var(--border)] px-2 rounded shadow-none"
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
                                    class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500"
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
