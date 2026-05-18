import { unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BAtzIAbQ.js";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$3 } from "./index-CGK-4kfq.js";
import { ChevronLeft, Plus, ClipboardList, HelpCircle, BookOpen, Edit, Trash2 } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    quizzes: Array
  },
  setup(__props) {
    const deleteQuiz = (id) => {
      if (confirm("هل أنت متأكد من حذف هذا الاختبار؟")) {
        router.delete(route("teacher.quizzes.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "إدارة الاختبارات" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-zinc-50/20 text-[12px]"${_scopeId}><header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}><span${_scopeId}>لوحة التحكم</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-bold"${_scopeId}>إدارة الاختبارات</span></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.quizzes.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    size: "sm",
                    class: "h-7 text-[11px] px-4 font-bold"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Plus), { class: "ml-1.5 h-3 w-3" }, null, _parent4, _scopeId3));
                        _push4(` إنشاء اختبار `);
                      } else {
                        return [
                          createVNode(unref(Plus), { class: "ml-1.5 h-3 w-3" }),
                          createTextVNode(" إنشاء اختبار ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), {
                      size: "sm",
                      class: "h-7 text-[11px] px-4 font-bold"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Plus), { class: "ml-1.5 h-3 w-3" }),
                        createTextVNode(" إنشاء اختبار ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</header><main class="flex-1 p-4 lg:p-6 text-right"${_scopeId}><div class="w-full space-y-4 max-w-full mx-auto"${_scopeId}>`);
            if (__props.quizzes.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 rounded-lg bg-white"${_scopeId}><div class="h-10 w-10 rounded-full bg-zinc-50 flex items-center justify-center mb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ClipboardList), { class: "h-5 w-5 text-zinc-300" }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-[12px] font-bold text-zinc-900"${_scopeId}>لا يوجد أي اختبار حالياً</h3><p class="text-[11px] text-zinc-400 mb-6"${_scopeId}>ابدأ الآن بإضافة أول اختبار لطلابك.</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("teacher.quizzes.create")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$2), {
                      variant: "outline",
                      size: "sm",
                      class: "h-7 text-[11px] font-bold px-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`إضافة أول اختبار`);
                        } else {
                          return [
                            createTextVNode("إضافة أول اختبار")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$2), {
                        variant: "outline",
                        size: "sm",
                        class: "h-7 text-[11px] font-bold px-6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("إضافة أول اختبار")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm"${_scopeId}><table class="w-full text-right border-collapse text-[12px]"${_scopeId}><thead${_scopeId}><tr class="bg-zinc-50/50 border-b border-zinc-100"${_scopeId}><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400"${_scopeId}>الاختبار</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400"${_scopeId}>الكورس</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center"${_scopeId}>النجاح</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center"${_scopeId}>الحالة</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left"${_scopeId}>إجراءات</th></tr></thead><tbody class="divide-y divide-zinc-50"${_scopeId}><!--[-->`);
              ssrRenderList(__props.quizzes, (quiz) => {
                var _a;
                _push2(`<tr class="group hover:bg-zinc-50/30 transition-colors"${_scopeId}><td class="p-2.5"${_scopeId}><div class="flex items-center gap-2.5"${_scopeId}><div class="h-6 w-6 rounded bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(HelpCircle), { class: "h-3 w-3" }, null, _parent2, _scopeId));
                _push2(`</div><span class="font-bold text-zinc-900"${_scopeId}>${ssrInterpolate(quiz.title)}</span></div></td><td class="p-2.5"${_scopeId}><div class="flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(BookOpen), { class: "h-3 w-3 opacity-60" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate((_a = quiz.course) == null ? void 0 : _a.title)}</div></td><td class="p-2.5 text-center font-bold text-zinc-900"${_scopeId}>${ssrInterpolate(quiz.passing_score)}% </td><td class="p-2.5 text-center"${_scopeId}>`);
                if (quiz.is_published) {
                  _push2(ssrRenderComponent(unref(_sfc_main$3), {
                    variant: "secondary",
                    class: "bg-emerald-50 text-emerald-600 hover:bg-emerald-50 border-emerald-100 text-[9px] font-black uppercase tracking-widest h-4.5 px-2"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`منشور`);
                      } else {
                        return [
                          createTextVNode("منشور")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(unref(_sfc_main$3), {
                    variant: "outline",
                    class: "text-zinc-400 border-zinc-200 text-[9px] font-black uppercase tracking-widest h-4.5 px-2"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`مسودة`);
                      } else {
                        return [
                          createTextVNode("مسودة")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                }
                _push2(`</td><td class="p-2.5 text-left"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("teacher.quizzes.edit", quiz.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$2), {
                        variant: "ghost",
                        size: "icon",
                        class: "h-6.5 w-6.5 rounded hover:bg-zinc-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(Edit), { class: "h-3.5 w-3.5 text-zinc-500" }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(Edit), { class: "h-3.5 w-3.5 text-zinc-500" })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(_sfc_main$2), {
                          variant: "ghost",
                          size: "icon",
                          class: "h-6.5 w-6.5 rounded hover:bg-zinc-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Edit), { class: "h-3.5 w-3.5 text-zinc-500" })
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$2), {
                  onClick: ($event) => deleteQuiz(quiz.id),
                  variant: "ghost",
                  size: "icon",
                  class: "h-6.5 w-6.5 rounded text-zinc-200 hover:text-red-500 hover:bg-red-50"
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
                    createVNode("span", { class: "text-zinc-900 font-bold" }, "إدارة الاختبارات")
                  ]),
                  createVNode(unref(Link), {
                    href: _ctx.route("teacher.quizzes.create")
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), {
                        size: "sm",
                        class: "h-7 text-[11px] px-4 font-bold"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Plus), { class: "ml-1.5 h-3 w-3" }),
                          createTextVNode(" إنشاء اختبار ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right" }, [
                  createVNode("div", { class: "w-full space-y-4 max-w-full mx-auto" }, [
                    __props.quizzes.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 rounded-lg bg-white"
                    }, [
                      createVNode("div", { class: "h-10 w-10 rounded-full bg-zinc-50 flex items-center justify-center mb-3" }, [
                        createVNode(unref(ClipboardList), { class: "h-5 w-5 text-zinc-300" })
                      ]),
                      createVNode("h3", { class: "text-[12px] font-bold text-zinc-900" }, "لا يوجد أي اختبار حالياً"),
                      createVNode("p", { class: "text-[11px] text-zinc-400 mb-6" }, "ابدأ الآن بإضافة أول اختبار لطلابك."),
                      createVNode(unref(Link), {
                        href: _ctx.route("teacher.quizzes.create")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            variant: "outline",
                            size: "sm",
                            class: "h-7 text-[11px] font-bold px-6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("إضافة أول اختبار")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm"
                    }, [
                      createVNode("table", { class: "w-full text-right border-collapse text-[12px]" }, [
                        createVNode("thead", null, [
                          createVNode("tr", { class: "bg-zinc-50/50 border-b border-zinc-100" }, [
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400" }, "الاختبار"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400" }, "الكورس"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "النجاح"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "الحالة"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left" }, "إجراءات")
                          ])
                        ]),
                        createVNode("tbody", { class: "divide-y divide-zinc-50" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.quizzes, (quiz) => {
                            var _a;
                            return openBlock(), createBlock("tr", {
                              key: quiz.id,
                              class: "group hover:bg-zinc-50/30 transition-colors"
                            }, [
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "flex items-center gap-2.5" }, [
                                  createVNode("div", { class: "h-6 w-6 rounded bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all" }, [
                                    createVNode(unref(HelpCircle), { class: "h-3 w-3" })
                                  ]),
                                  createVNode("span", { class: "font-bold text-zinc-900" }, toDisplayString(quiz.title), 1)
                                ])
                              ]),
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium" }, [
                                  createVNode(unref(BookOpen), { class: "h-3 w-3 opacity-60" }),
                                  createTextVNode(" " + toDisplayString((_a = quiz.course) == null ? void 0 : _a.title), 1)
                                ])
                              ]),
                              createVNode("td", { class: "p-2.5 text-center font-bold text-zinc-900" }, toDisplayString(quiz.passing_score) + "% ", 1),
                              createVNode("td", { class: "p-2.5 text-center" }, [
                                quiz.is_published ? (openBlock(), createBlock(unref(_sfc_main$3), {
                                  key: 0,
                                  variant: "secondary",
                                  class: "bg-emerald-50 text-emerald-600 hover:bg-emerald-50 border-emerald-100 text-[9px] font-black uppercase tracking-widest h-4.5 px-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("منشور")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(unref(_sfc_main$3), {
                                  key: 1,
                                  variant: "outline",
                                  class: "text-zinc-400 border-zinc-200 text-[9px] font-black uppercase tracking-widest h-4.5 px-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("مسودة")
                                  ]),
                                  _: 1
                                }))
                              ]),
                              createVNode("td", { class: "p-2.5 text-left" }, [
                                createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("teacher.quizzes.edit", quiz.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$2), {
                                        variant: "ghost",
                                        size: "icon",
                                        class: "h-6.5 w-6.5 rounded hover:bg-zinc-100"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Edit), { class: "h-3.5 w-3.5 text-zinc-500" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["href"]),
                                  createVNode(unref(_sfc_main$2), {
                                    onClick: ($event) => deleteQuiz(quiz.id),
                                    variant: "ghost",
                                    size: "icon",
                                    class: "h-6.5 w-6.5 rounded text-zinc-200 hover:text-red-500 hover:bg-red-50"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Quizzes/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
