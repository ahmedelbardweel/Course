import { resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-LaL6PFIH.js";
import { Head, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import "./index-CGK-4kfq.js";
import { ChevronLeft, Filter, Users, Award, Mail, BookOpen, Calendar, Trash2 } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    students: Array
  },
  setup(__props) {
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const removeStudent = (courseId, userId) => {
      if (confirm("هل أنت متأكد من إلغاء تسجيل هذا الطالب؟")) {
        router.delete(route("teacher.students.destroy", { course: courseId, user: userId }));
      }
    };
    const toggleMentor = (userId) => {
      router.post(route("teacher.students.toggle-mentor", userId));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "الطلاب المسجلين" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-zinc-50/20 text-[12px]"${_scopeId}><header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}><span${_scopeId}>لوحة التحكم</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-black"${_scopeId}>الطلاب المسجلين</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              variant: "outline",
              size: "sm",
              class: "h-7 text-[10px] font-black px-3 uppercase tracking-widest border-zinc-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Filter), { class: "ml-1.5 h-3 w-3" }, null, _parent3, _scopeId2));
                  _push3(` تصفية `);
                } else {
                  return [
                    createVNode(unref(Filter), { class: "ml-1.5 h-3 w-3" }),
                    createTextVNode(" تصفية ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></header><main class="flex-1 p-4 lg:p-6 text-right"${_scopeId}><div class="w-full space-y-4 max-w-full mx-auto"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Card, { class: "p-3 shadow-none border-zinc-200 bg-white flex items-center gap-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-8 w-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Users), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><div class="text-[9px] font-black text-zinc-400 uppercase tracking-widest"${_scopeId2}>إجمالي الطلاب</div><div class="text-sm font-black"${_scopeId2}>${ssrInterpolate(__props.students.length)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "h-8 w-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center" }, [
                      createVNode(unref(Users), { class: "h-4 w-4" })
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, "إجمالي الطلاب"),
                      createVNode("div", { class: "text-sm font-black" }, toDisplayString(__props.students.length), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.students.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 rounded-lg bg-white"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Users), { class: "h-10 w-10 text-zinc-200 mb-3" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[12px] font-bold text-zinc-900"${_scopeId}>لا يوجد طلاب مسجلين</h3><p class="text-[11px] text-zinc-400"${_scopeId}>سيظهر الطلاب هنا بمجرد اشتراكهم في كورساتك.</p></div>`);
            } else {
              _push2(`<div class="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm"${_scopeId}><table class="w-full text-right border-collapse text-[12px]"${_scopeId}><thead${_scopeId}><tr class="bg-zinc-50/50 border-b border-zinc-100"${_scopeId}><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400"${_scopeId}>الطالب</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400"${_scopeId}>الكورس</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center"${_scopeId}>تاريخ التسجيل</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center"${_scopeId}>الحالة</th><th class="p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left"${_scopeId}>إجراءات</th></tr></thead><tbody class="divide-y divide-zinc-50"${_scopeId}><!--[-->`);
              ssrRenderList(__props.students, (student, index) => {
                _push2(`<tr class="group hover:bg-zinc-50/30 transition-colors"${_scopeId}><td class="p-2.5"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="h-7 w-7 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-black text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-all"${_scopeId}>${ssrInterpolate(student.name.charAt(0))}</div><div${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}><span class="font-bold text-zinc-900"${_scopeId}>${ssrInterpolate(student.name)}</span>`);
                if (student.is_mentor) {
                  _push2(ssrRenderComponent(unref(Award), { class: "h-3 w-3 text-amber-500 fill-amber-500" }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="text-[10px] text-zinc-400 flex items-center gap-1 font-medium mt-0.5"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Mail), { class: "h-2.5 w-2.5 opacity-50" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(student.email)}</div></div></div></td><td class="p-2.5"${_scopeId}><div class="flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(BookOpen), { class: "h-3 w-3 opacity-60" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(student.course_title)}</div></td><td class="p-2.5 text-center text-zinc-500 font-medium text-[11px]"${_scopeId}><div class="flex items-center justify-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Calendar), { class: "h-3 w-3 opacity-50" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(formatDate(student.enrolled_at))}</div></td><td class="p-2.5 text-center"${_scopeId}><button class="${ssrRenderClass([
                  "px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border transition-all",
                  student.is_mentor ? "bg-amber-50 text-amber-600 border-amber-200 shadow-sm" : "bg-zinc-50 text-zinc-400 border-zinc-100 hover:border-zinc-300"
                ])}"${_scopeId}>${ssrInterpolate(student.is_mentor ? "مرشد معتمد" : "تعيين كمرشد")}</button></td><td class="p-2.5 text-left"${_scopeId}><div class="flex items-center justify-end"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$2), {
                  onClick: ($event) => removeStudent(student.course_id, student.id),
                  variant: "ghost",
                  size: "icon",
                  class: "h-6.5 w-6.5 rounded-md text-zinc-300 hover:text-red-500 hover:bg-red-50"
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
                    createVNode("span", { class: "text-zinc-900 font-black" }, "الطلاب المسجلين")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(unref(_sfc_main$2), {
                      variant: "outline",
                      size: "sm",
                      class: "h-7 text-[10px] font-black px-3 uppercase tracking-widest border-zinc-200"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Filter), { class: "ml-1.5 h-3 w-3" }),
                        createTextVNode(" تصفية ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right" }, [
                  createVNode("div", { class: "w-full space-y-4 max-w-full mx-auto" }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-3 mb-6" }, [
                      createVNode(_component_Card, { class: "p-3 shadow-none border-zinc-200 bg-white flex items-center gap-3" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-8 w-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center" }, [
                            createVNode(unref(Users), { class: "h-4 w-4" })
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, "إجمالي الطلاب"),
                            createVNode("div", { class: "text-sm font-black" }, toDisplayString(__props.students.length), 1)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    __props.students.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 rounded-lg bg-white"
                    }, [
                      createVNode(unref(Users), { class: "h-10 w-10 text-zinc-200 mb-3" }),
                      createVNode("h3", { class: "text-[12px] font-bold text-zinc-900" }, "لا يوجد طلاب مسجلين"),
                      createVNode("p", { class: "text-[11px] text-zinc-400" }, "سيظهر الطلاب هنا بمجرد اشتراكهم في كورساتك.")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm"
                    }, [
                      createVNode("table", { class: "w-full text-right border-collapse text-[12px]" }, [
                        createVNode("thead", null, [
                          createVNode("tr", { class: "bg-zinc-50/50 border-b border-zinc-100" }, [
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400" }, "الطالب"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400" }, "الكورس"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "تاريخ التسجيل"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "الحالة"),
                            createVNode("th", { class: "p-2.5 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left" }, "إجراءات")
                          ])
                        ]),
                        createVNode("tbody", { class: "divide-y divide-zinc-50" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.students, (student, index) => {
                            return openBlock(), createBlock("tr", {
                              key: index,
                              class: "group hover:bg-zinc-50/30 transition-colors"
                            }, [
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "flex items-center gap-3" }, [
                                  createVNode("div", { class: "h-7 w-7 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-black text-zinc-500 group-hover:bg-zinc-900 group-hover:text-white transition-all" }, toDisplayString(student.name.charAt(0)), 1),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "flex items-center gap-1.5" }, [
                                      createVNode("span", { class: "font-bold text-zinc-900" }, toDisplayString(student.name), 1),
                                      student.is_mentor ? (openBlock(), createBlock(unref(Award), {
                                        key: 0,
                                        class: "h-3 w-3 text-amber-500 fill-amber-500"
                                      })) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "text-[10px] text-zinc-400 flex items-center gap-1 font-medium mt-0.5" }, [
                                      createVNode(unref(Mail), { class: "h-2.5 w-2.5 opacity-50" }),
                                      createTextVNode(" " + toDisplayString(student.email), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("td", { class: "p-2.5" }, [
                                createVNode("div", { class: "flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium" }, [
                                  createVNode(unref(BookOpen), { class: "h-3 w-3 opacity-60" }),
                                  createTextVNode(" " + toDisplayString(student.course_title), 1)
                                ])
                              ]),
                              createVNode("td", { class: "p-2.5 text-center text-zinc-500 font-medium text-[11px]" }, [
                                createVNode("div", { class: "flex items-center justify-center gap-1.5" }, [
                                  createVNode(unref(Calendar), { class: "h-3 w-3 opacity-50" }),
                                  createTextVNode(" " + toDisplayString(formatDate(student.enrolled_at)), 1)
                                ])
                              ]),
                              createVNode("td", { class: "p-2.5 text-center" }, [
                                createVNode("button", {
                                  onClick: ($event) => toggleMentor(student.id),
                                  class: [
                                    "px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border transition-all",
                                    student.is_mentor ? "bg-amber-50 text-amber-600 border-amber-200 shadow-sm" : "bg-zinc-50 text-zinc-400 border-zinc-100 hover:border-zinc-300"
                                  ]
                                }, toDisplayString(student.is_mentor ? "مرشد معتمد" : "تعيين كمرشد"), 11, ["onClick"])
                              ]),
                              createVNode("td", { class: "p-2.5 text-left" }, [
                                createVNode("div", { class: "flex items-center justify-end" }, [
                                  createVNode(unref(_sfc_main$2), {
                                    onClick: ($event) => removeStudent(student.course_id, student.id),
                                    variant: "ghost",
                                    size: "icon",
                                    class: "h-6.5 w-6.5 rounded-md text-zinc-300 hover:text-red-500 hover:bg-red-50"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Students/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
