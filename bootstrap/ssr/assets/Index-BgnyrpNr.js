import { unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CS-7yRBl.js";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$3 } from "./index-CGK-4kfq.js";
import { Plus, ClipboardList, HelpCircle, BookOpen, Edit, Trash2 } from "lucide-vue-next";
import "axios";
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
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "لوحة التحكم", url: _ctx.route("teacher.dashboard") },
          { label: "الاختبارات" }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]"${_scopeId}><header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none"${_scopeId}><div${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.quizzes.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    size: "sm",
                    class: "h-7 text-[11px] px-4 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded shadow-none"
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
                      class: "h-7 text-[11px] px-4 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded shadow-none"
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
              _push2(`<div class="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"${_scopeId}><div class="h-10 w-10 rounded-full bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center mb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ClipboardList), { class: "h-5 w-5 text-[var(--muted-foreground)]" }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-[12px] font-normal text-[var(--foreground)]"${_scopeId}>لا يوجد أي اختبار حالياً</h3><p class="text-[11px] text-[var(--muted-foreground)] mb-6"${_scopeId}>ابدأ الآن بإضافة أول اختبار لطلابك.</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("teacher.quizzes.create")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$2), {
                      variant: "outline",
                      size: "sm",
                      class: "h-7 text-[11px] font-normal border-[var(--border)] bg-[var(--card)] px-6 text-[var(--foreground)]"
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
                        class: "h-7 text-[11px] font-normal border-[var(--border)] bg-[var(--card)] px-6 text-[var(--foreground)]"
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
              _push2(`<div class="border border-[var(--border)] rounded-md overflow-hidden bg-[var(--card)] shadow-none"${_scopeId}><table class="w-full text-right border-collapse text-[12px]"${_scopeId}><thead${_scopeId}><tr class="bg-[var(--muted)] border-b border-[var(--border)]"${_scopeId}><th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]"${_scopeId}>الاختبار</th><th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]"${_scopeId}>الكورس</th><th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center"${_scopeId}>النجاح</th><th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center"${_scopeId}>الحالة</th><th class="p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-left"${_scopeId}>إجراءات</th></tr></thead><tbody class="divide-y divide-[var(--border)] bg-[var(--card)]"${_scopeId}><!--[-->`);
              ssrRenderList(__props.quizzes, (quiz) => {
                var _a;
                _push2(`<tr class="hover:bg-[var(--muted)]"${_scopeId}><td class="p-2.5"${_scopeId}><div class="flex items-center gap-2.5"${_scopeId}><div class="h-6 w-6 rounded bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)]"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(HelpCircle), { class: "h-3 w-3 text-[var(--primary)]" }, null, _parent2, _scopeId));
                _push2(`</div><span class="font-normal text-[var(--foreground)]"${_scopeId}>${ssrInterpolate(quiz.title)}</span></div></td><td class="p-2.5"${_scopeId}><div class="flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)] font-normal"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(BookOpen), { class: "h-3 w-3 opacity-60" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate((_a = quiz.course) == null ? void 0 : _a.title)}</div></td><td class="p-2.5 text-center font-normal text-[var(--foreground)]"${_scopeId}>${ssrInterpolate(quiz.passing_score)}% </td><td class="p-2.5 text-center"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$3), {
                  variant: quiz.is_published ? "secondary" : "outline",
                  class: "h-4.5 text-[9px] font-normal uppercase px-2 rounded bg-[var(--accent)] text-[var(--foreground)] border-[var(--border)]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(quiz.is_published ? "منشور" : "مسودة")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(quiz.is_published ? "منشور" : "مسودة"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td><td class="p-2.5 text-left"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("teacher.quizzes.edit", quiz.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$2), {
                        variant: "ghost",
                        size: "icon",
                        class: "h-6.5 w-6.5 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(Edit), { class: "h-3.5 w-3.5" }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
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
                          class: "h-6.5 w-6.5 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
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
                  class: "h-6.5 w-6.5 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500"
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
                createVNode("header", { class: "h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none" }, [
                  createVNode("div"),
                  createVNode(unref(Link), {
                    href: _ctx.route("teacher.quizzes.create")
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), {
                        size: "sm",
                        class: "h-7 text-[11px] px-4 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded shadow-none"
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
                      class: "flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"
                    }, [
                      createVNode("div", { class: "h-10 w-10 rounded-full bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center mb-3" }, [
                        createVNode(unref(ClipboardList), { class: "h-5 w-5 text-[var(--muted-foreground)]" })
                      ]),
                      createVNode("h3", { class: "text-[12px] font-normal text-[var(--foreground)]" }, "لا يوجد أي اختبار حالياً"),
                      createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] mb-6" }, "ابدأ الآن بإضافة أول اختبار لطلابك."),
                      createVNode(unref(Link), {
                        href: _ctx.route("teacher.quizzes.create")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            variant: "outline",
                            size: "sm",
                            class: "h-7 text-[11px] font-normal border-[var(--border)] bg-[var(--card)] px-6 text-[var(--foreground)]"
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
                      class: "border border-[var(--border)] rounded-md overflow-hidden bg-[var(--card)] shadow-none"
                    }, [
                      createVNode("table", { class: "w-full text-right border-collapse text-[12px]" }, [
                        createVNode("thead", null, [
                          createVNode("tr", { class: "bg-[var(--muted)] border-b border-[var(--border)]" }, [
                            createVNode("th", { class: "p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]" }, "الاختبار"),
                            createVNode("th", { class: "p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]" }, "الكورس"),
                            createVNode("th", { class: "p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center" }, "النجاح"),
                            createVNode("th", { class: "p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center" }, "الحالة"),
                            createVNode("th", { class: "p-2.5 font-normal text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-left" }, "إجراءات")
                          ])
                        ]),
                        createVNode("tbody", { class: "divide-y divide-[var(--border)] bg-[var(--card)]" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.quizzes, (quiz) => {
                            var _a;
                            return openBlock(), createBlock("tr", {
                              key: quiz.id,
                              class: "hover:bg-[var(--muted)]"
                            }, [
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "flex items-center gap-2.5" }, [
                                  createVNode("div", { class: "h-6 w-6 rounded bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)]" }, [
                                    createVNode(unref(HelpCircle), { class: "h-3 w-3 text-[var(--primary)]" })
                                  ]),
                                  createVNode("span", { class: "font-normal text-[var(--foreground)]" }, toDisplayString(quiz.title), 1)
                                ])
                              ]),
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "flex items-center gap-1.5 text-[11px] text-[var(--muted-foreground)] font-normal" }, [
                                  createVNode(unref(BookOpen), { class: "h-3 w-3 opacity-60" }),
                                  createTextVNode(" " + toDisplayString((_a = quiz.course) == null ? void 0 : _a.title), 1)
                                ])
                              ]),
                              createVNode("td", { class: "p-2.5 text-center font-normal text-[var(--foreground)]" }, toDisplayString(quiz.passing_score) + "% ", 1),
                              createVNode("td", { class: "p-2.5 text-center" }, [
                                createVNode(unref(_sfc_main$3), {
                                  variant: quiz.is_published ? "secondary" : "outline",
                                  class: "h-4.5 text-[9px] font-normal uppercase px-2 rounded bg-[var(--accent)] text-[var(--foreground)] border-[var(--border)]"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(quiz.is_published ? "منشور" : "مسودة"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["variant"])
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
                                        class: "h-6.5 w-6.5 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
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
                                    class: "h-6.5 w-6.5 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500"
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
