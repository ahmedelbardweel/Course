import { resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CugrFxsQ.js";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$4 } from "./index-CGK-4kfq.js";
import { _ as _sfc_main$3, b as _sfc_main$5, c as _sfc_main$6, a as _sfc_main$7, d as _sfc_main$8 } from "./CardTitle-Cy38L483.js";
import { GraduationCap, Users, PlayCircle, Edit, Trash2 } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    courses: Array
  },
  setup(__props) {
    const getLevelBadge = (level) => {
      switch (level) {
        case "beginner":
          return "مبتدئ";
        case "intermediate":
          return "متوسط";
        case "advanced":
          return "متقدم";
        default:
          return level;
      }
    };
    const deleteCourse = (id) => {
      if (confirm("هل أنت متأكد من حذف هذا الكورس؟ سيتم حذف جميع الدروس والبيانات المرتبطة به.")) {
        router.delete(route("teacher.courses.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ChevronLeft = resolveComponent("ChevronLeft");
      const _component_Plus = resolveComponent("Plus");
      const _component_BookOpen = resolveComponent("BookOpen");
      const _component_HelpCircle = resolveComponent("HelpCircle");
      const _component_Trophy = resolveComponent("Trophy");
      const _component_Check = resolveComponent("Check");
      const _component_X = resolveComponent("X");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "إدارة الكورسات" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-zinc-50/20 text-[12px]"${_scopeId}><header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}><span${_scopeId}>لوحة التحكم</span>`);
            _push2(ssrRenderComponent(_component_ChevronLeft, { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-black"${_scopeId}>إدارة الكورسات</span></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.courses.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    size: "sm",
                    class: "h-7 text-[11px] px-4 font-bold"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Plus, { class: "ml-1.5 h-3 w-3" }, null, _parent4, _scopeId3));
                        _push4(` إضافة كورس جديد `);
                      } else {
                        return [
                          createVNode(_component_Plus, { class: "ml-1.5 h-3 w-3" }),
                          createTextVNode(" إضافة كورس جديد ")
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
                        createVNode(_component_Plus, { class: "ml-1.5 h-3 w-3" }),
                        createTextVNode(" إضافة كورس جديد ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</header><main class="flex-1 p-4 lg:p-6 text-right"${_scopeId}><div class="w-full space-y-6 max-w-full mx-auto"${_scopeId}>`);
            if (__props.courses.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-24 border border-dashed border-zinc-200 rounded-lg bg-white"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BookOpen, { class: "h-12 w-12 text-zinc-100 mb-4" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[13px] font-bold text-zinc-900"${_scopeId}>لم تضف أي كورس بعد</h3><p class="text-[11px] text-zinc-400 mb-6"${_scopeId}>ابدأ الآن بمشاركة خبراتك وإنشاء أول محتوى تعليمي.</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("teacher.courses.create")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$2), {
                      variant: "outline",
                      size: "sm",
                      class: "h-8 text-[11px] font-black px-8 border-zinc-200"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`إنشاء كورس الآن`);
                        } else {
                          return [
                            createTextVNode("إنشاء كورس الآن")
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
                        class: "h-8 text-[11px] font-black px-8 border-zinc-200"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("إنشاء كورس الآن")
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
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.courses, (course) => {
                _push2(ssrRenderComponent(unref(_sfc_main$3), {
                  key: course.id,
                  class: "group border-zinc-200 shadow-none rounded-lg overflow-hidden flex flex-col bg-white hover:border-zinc-400 transition-all duration-200"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="aspect-video relative bg-zinc-100 overflow-hidden border-b border-zinc-100"${_scopeId2}>`);
                      if (course.thumbnail) {
                        _push3(`<img${ssrRenderAttr("src", course.thumbnail)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="w-full h-full flex items-center justify-center text-zinc-300"${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(GraduationCap), { class: "h-10 w-10 opacity-30" }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      }
                      _push3(`<div class="absolute top-2 left-2 flex flex-wrap gap-1"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$4), {
                        variant: course.is_published ? "default" : "outline",
                        class: "h-4 text-[8px] font-black uppercase tracking-widest px-1.5 shadow-sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(course.is_published ? "منشور" : "مسودة")}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(course.is_published ? "منشور" : "مسودة"), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (course.allow_study_rooms) {
                        _push3(ssrRenderComponent(unref(_sfc_main$4), {
                          variant: "secondary",
                          class: "h-4 text-[7px] font-black uppercase px-1 bg-white/90 border-zinc-200 text-indigo-600"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` غرفة مذاكرة `);
                            } else {
                              return [
                                createTextVNode(" غرفة مذاكرة ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="absolute bottom-2 right-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$4), {
                        variant: "secondary",
                        class: "h-4 text-[8px] font-bold px-1.5 bg-white/90 backdrop-blur-sm border-none text-zinc-900"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(getLevelBadge(course.level))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(getLevelBadge(course.level)), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-3 space-y-1.5 pb-2" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a, _b;
                          if (_push4) {
                            _push4(`<div class="flex items-center justify-between"${_scopeId3}><span class="text-[9px] font-black text-zinc-400 uppercase tracking-widest"${_scopeId3}>${ssrInterpolate(((_a = course.category) == null ? void 0 : _a.name) || "عام")}</span><div class="flex items-center gap-2"${_scopeId3}><div class="flex items-center gap-1 text-zinc-400"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Users), { class: "h-3 w-3 opacity-50" }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-[9px] font-bold"${_scopeId3}>${ssrInterpolate(course.users_count || 0)}</span></div></div></div>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(course.title)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(course.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, toDisplayString(((_b = course.category) == null ? void 0 : _b.name) || "عام"), 1),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("div", { class: "flex items-center gap-1 text-zinc-400" }, [
                                    createVNode(unref(Users), { class: "h-3 w-3 opacity-50" }),
                                    createVNode("span", { class: "text-[9px] font-bold" }, toDisplayString(course.users_count || 0), 1)
                                  ])
                                ])
                              ]),
                              createVNode(unref(_sfc_main$6), { class: "text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(course.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "px-3 pb-3 pt-0 flex-1 space-y-3" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<p class="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed"${_scopeId3}>${ssrInterpolate(course.description)}</p><div class="grid grid-cols-3 gap-1 pt-1 border-t border-zinc-50"${_scopeId3}><div class="flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(PlayCircle), { class: "h-3 w-3 text-zinc-400 mb-1" }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-[10px] font-black"${_scopeId3}>${ssrInterpolate(course.lessons_count || 0)}</span><span class="text-[7px] font-bold text-zinc-400 uppercase tracking-tighter"${_scopeId3}>درس</span></div><div class="flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_HelpCircle, { class: "h-3 w-3 text-zinc-400 mb-1" }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-[10px] font-black"${_scopeId3}>${ssrInterpolate(course.quizzes_count || 0)}</span><span class="text-[7px] font-bold text-zinc-400 uppercase tracking-tighter"${_scopeId3}>اختبار</span></div><div class="flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Trophy, { class: "h-3 w-3 text-zinc-400 mb-1" }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-[10px] font-black"${_scopeId3}>${ssrInterpolate(course.challenges_count || 0)}</span><span class="text-[7px] font-bold text-zinc-400 uppercase tracking-tighter"${_scopeId3}>تحدي</span></div></div>`);
                          } else {
                            return [
                              createVNode("p", { class: "text-[10px] text-zinc-400 line-clamp-2 leading-relaxed" }, toDisplayString(course.description), 1),
                              createVNode("div", { class: "grid grid-cols-3 gap-1 pt-1 border-t border-zinc-50" }, [
                                createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50" }, [
                                  createVNode(unref(PlayCircle), { class: "h-3 w-3 text-zinc-400 mb-1" }),
                                  createVNode("span", { class: "text-[10px] font-black" }, toDisplayString(course.lessons_count || 0), 1),
                                  createVNode("span", { class: "text-[7px] font-bold text-zinc-400 uppercase tracking-tighter" }, "درس")
                                ]),
                                createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50" }, [
                                  createVNode(_component_HelpCircle, { class: "h-3 w-3 text-zinc-400 mb-1" }),
                                  createVNode("span", { class: "text-[10px] font-black" }, toDisplayString(course.quizzes_count || 0), 1),
                                  createVNode("span", { class: "text-[7px] font-bold text-zinc-400 uppercase tracking-tighter" }, "اختبار")
                                ]),
                                createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50" }, [
                                  createVNode(_component_Trophy, { class: "h-3 w-3 text-zinc-400 mb-1" }),
                                  createVNode("span", { class: "text-[10px] font-black" }, toDisplayString(course.challenges_count || 0), 1),
                                  createVNode("span", { class: "text-[7px] font-bold text-zinc-400 uppercase tracking-tighter" }, "تحدي")
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "p-2 border-t border-zinc-50 bg-zinc-50/30 flex flex-col gap-2" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center gap-3 px-1"${_scopeId3}><div class="flex items-center gap-1"${_scopeId3}><div class="${ssrRenderClass(["h-3 w-3 rounded-full flex items-center justify-center", course.is_published ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"])}"${_scopeId3}>`);
                            if (course.is_published) {
                              _push4(ssrRenderComponent(_component_Check, { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(ssrRenderComponent(_component_X, { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            }
                            _push4(`</div><span class="${ssrRenderClass(["text-[9px] font-bold", course.is_published ? "text-zinc-900" : "text-zinc-400"])}"${_scopeId3}>منشور</span></div><div class="flex items-center gap-1"${_scopeId3}><div class="${ssrRenderClass(["h-3 w-3 rounded-full flex items-center justify-center", course.allow_study_rooms ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"])}"${_scopeId3}>`);
                            if (course.allow_study_rooms) {
                              _push4(ssrRenderComponent(_component_Check, { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(ssrRenderComponent(_component_X, { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            }
                            _push4(`</div><span class="${ssrRenderClass(["text-[9px] font-bold", course.allow_study_rooms ? "text-zinc-900" : "text-zinc-400"])}"${_scopeId3}>غرف المذاكرة</span></div><div class="flex items-center gap-1"${_scopeId3}><div class="${ssrRenderClass(["h-3 w-3 rounded-full flex items-center justify-center", course.allow_timed_comments ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"])}"${_scopeId3}>`);
                            if (course.allow_timed_comments) {
                              _push4(ssrRenderComponent(_component_Check, { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(ssrRenderComponent(_component_X, { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            }
                            _push4(`</div><span class="${ssrRenderClass(["text-[9px] font-bold", course.allow_timed_comments ? "text-zinc-900" : "text-zinc-400"])}"${_scopeId3}>تعليقات موقوتة</span></div></div><div class="flex items-center justify-between border-t border-zinc-100/50 pt-2"${_scopeId3}><div class="font-black text-xs text-zinc-900 px-1"${_scopeId3}>${ssrInterpolate(course.price > 0 ? "$" + course.price : "مجاني")}</div><div class="flex items-center gap-1"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Link), {
                              href: _ctx.route("teacher.courses.edit", course.id)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                    variant: "ghost",
                                    size: "icon",
                                    class: "h-7 w-7 rounded-md hover:bg-white hover:text-emerald-600 transition-all"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(Edit), { class: "h-3.5 w-3.5" }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(_sfc_main$2), {
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 rounded-md hover:bg-white hover:text-emerald-600 transition-all"
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
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(_sfc_main$2), {
                              onClick: ($event) => deleteCourse(course.id),
                              variant: "ghost",
                              size: "icon",
                              class: "h-7 w-7 rounded-md text-zinc-200 hover:text-red-500 hover:bg-white transition-all"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(Trash2), { class: "h-3.5 w-3.5" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "flex items-center gap-3 px-1" }, [
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  createVNode("div", {
                                    class: ["h-3 w-3 rounded-full flex items-center justify-center", course.is_published ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"]
                                  }, [
                                    course.is_published ? (openBlock(), createBlock(_component_Check, {
                                      key: 0,
                                      class: "h-2 w-2"
                                    })) : (openBlock(), createBlock(_component_X, {
                                      key: 1,
                                      class: "h-2 w-2"
                                    }))
                                  ], 2),
                                  createVNode("span", {
                                    class: ["text-[9px] font-bold", course.is_published ? "text-zinc-900" : "text-zinc-400"]
                                  }, "منشور", 2)
                                ]),
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  createVNode("div", {
                                    class: ["h-3 w-3 rounded-full flex items-center justify-center", course.allow_study_rooms ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"]
                                  }, [
                                    course.allow_study_rooms ? (openBlock(), createBlock(_component_Check, {
                                      key: 0,
                                      class: "h-2 w-2"
                                    })) : (openBlock(), createBlock(_component_X, {
                                      key: 1,
                                      class: "h-2 w-2"
                                    }))
                                  ], 2),
                                  createVNode("span", {
                                    class: ["text-[9px] font-bold", course.allow_study_rooms ? "text-zinc-900" : "text-zinc-400"]
                                  }, "غرف المذاكرة", 2)
                                ]),
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  createVNode("div", {
                                    class: ["h-3 w-3 rounded-full flex items-center justify-center", course.allow_timed_comments ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"]
                                  }, [
                                    course.allow_timed_comments ? (openBlock(), createBlock(_component_Check, {
                                      key: 0,
                                      class: "h-2 w-2"
                                    })) : (openBlock(), createBlock(_component_X, {
                                      key: 1,
                                      class: "h-2 w-2"
                                    }))
                                  ], 2),
                                  createVNode("span", {
                                    class: ["text-[9px] font-bold", course.allow_timed_comments ? "text-zinc-900" : "text-zinc-400"]
                                  }, "تعليقات موقوتة", 2)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center justify-between border-t border-zinc-100/50 pt-2" }, [
                                createVNode("div", { class: "font-black text-xs text-zinc-900 px-1" }, toDisplayString(course.price > 0 ? "$" + course.price : "مجاني"), 1),
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("teacher.courses.edit", course.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$2), {
                                        variant: "ghost",
                                        size: "icon",
                                        class: "h-7 w-7 rounded-md hover:bg-white hover:text-emerald-600 transition-all"
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
                                    onClick: ($event) => deleteCourse(course.id),
                                    variant: "ghost",
                                    size: "icon",
                                    class: "h-7 w-7 rounded-md text-zinc-200 hover:text-red-500 hover:bg-white transition-all"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("div", { class: "aspect-video relative bg-zinc-100 overflow-hidden border-b border-zinc-100" }, [
                          course.thumbnail ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: course.thumbnail,
                            class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-full h-full flex items-center justify-center text-zinc-300"
                          }, [
                            createVNode(unref(GraduationCap), { class: "h-10 w-10 opacity-30" })
                          ])),
                          createVNode("div", { class: "absolute top-2 left-2 flex flex-wrap gap-1" }, [
                            createVNode(unref(_sfc_main$4), {
                              variant: course.is_published ? "default" : "outline",
                              class: "h-4 text-[8px] font-black uppercase tracking-widest px-1.5 shadow-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(course.is_published ? "منشور" : "مسودة"), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant"]),
                            course.allow_study_rooms ? (openBlock(), createBlock(unref(_sfc_main$4), {
                              key: 0,
                              variant: "secondary",
                              class: "h-4 text-[7px] font-black uppercase px-1 bg-white/90 border-zinc-200 text-indigo-600"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" غرفة مذاكرة ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "absolute bottom-2 right-2" }, [
                            createVNode(unref(_sfc_main$4), {
                              variant: "secondary",
                              class: "h-4 text-[8px] font-bold px-1.5 bg-white/90 backdrop-blur-sm border-none text-zinc-900"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(getLevelBadge(course.level)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        createVNode(unref(_sfc_main$5), { class: "p-3 space-y-1.5 pb-2" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, toDisplayString(((_a = course.category) == null ? void 0 : _a.name) || "عام"), 1),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("div", { class: "flex items-center gap-1 text-zinc-400" }, [
                                    createVNode(unref(Users), { class: "h-3 w-3 opacity-50" }),
                                    createVNode("span", { class: "text-[9px] font-bold" }, toDisplayString(course.users_count || 0), 1)
                                  ])
                                ])
                              ]),
                              createVNode(unref(_sfc_main$6), { class: "text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(course.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$7), { class: "px-3 pb-3 pt-0 flex-1 space-y-3" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-[10px] text-zinc-400 line-clamp-2 leading-relaxed" }, toDisplayString(course.description), 1),
                            createVNode("div", { class: "grid grid-cols-3 gap-1 pt-1 border-t border-zinc-50" }, [
                              createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50" }, [
                                createVNode(unref(PlayCircle), { class: "h-3 w-3 text-zinc-400 mb-1" }),
                                createVNode("span", { class: "text-[10px] font-black" }, toDisplayString(course.lessons_count || 0), 1),
                                createVNode("span", { class: "text-[7px] font-bold text-zinc-400 uppercase tracking-tighter" }, "درس")
                              ]),
                              createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50" }, [
                                createVNode(_component_HelpCircle, { class: "h-3 w-3 text-zinc-400 mb-1" }),
                                createVNode("span", { class: "text-[10px] font-black" }, toDisplayString(course.quizzes_count || 0), 1),
                                createVNode("span", { class: "text-[7px] font-bold text-zinc-400 uppercase tracking-tighter" }, "اختبار")
                              ]),
                              createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50" }, [
                                createVNode(_component_Trophy, { class: "h-3 w-3 text-zinc-400 mb-1" }),
                                createVNode("span", { class: "text-[10px] font-black" }, toDisplayString(course.challenges_count || 0), 1),
                                createVNode("span", { class: "text-[7px] font-bold text-zinc-400 uppercase tracking-tighter" }, "تحدي")
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$8), { class: "p-2 border-t border-zinc-50 bg-zinc-50/30 flex flex-col gap-2" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-3 px-1" }, [
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode("div", {
                                  class: ["h-3 w-3 rounded-full flex items-center justify-center", course.is_published ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"]
                                }, [
                                  course.is_published ? (openBlock(), createBlock(_component_Check, {
                                    key: 0,
                                    class: "h-2 w-2"
                                  })) : (openBlock(), createBlock(_component_X, {
                                    key: 1,
                                    class: "h-2 w-2"
                                  }))
                                ], 2),
                                createVNode("span", {
                                  class: ["text-[9px] font-bold", course.is_published ? "text-zinc-900" : "text-zinc-400"]
                                }, "منشور", 2)
                              ]),
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode("div", {
                                  class: ["h-3 w-3 rounded-full flex items-center justify-center", course.allow_study_rooms ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"]
                                }, [
                                  course.allow_study_rooms ? (openBlock(), createBlock(_component_Check, {
                                    key: 0,
                                    class: "h-2 w-2"
                                  })) : (openBlock(), createBlock(_component_X, {
                                    key: 1,
                                    class: "h-2 w-2"
                                  }))
                                ], 2),
                                createVNode("span", {
                                  class: ["text-[9px] font-bold", course.allow_study_rooms ? "text-zinc-900" : "text-zinc-400"]
                                }, "غرف المذاكرة", 2)
                              ]),
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode("div", {
                                  class: ["h-3 w-3 rounded-full flex items-center justify-center", course.allow_timed_comments ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"]
                                }, [
                                  course.allow_timed_comments ? (openBlock(), createBlock(_component_Check, {
                                    key: 0,
                                    class: "h-2 w-2"
                                  })) : (openBlock(), createBlock(_component_X, {
                                    key: 1,
                                    class: "h-2 w-2"
                                  }))
                                ], 2),
                                createVNode("span", {
                                  class: ["text-[9px] font-bold", course.allow_timed_comments ? "text-zinc-900" : "text-zinc-400"]
                                }, "تعليقات موقوتة", 2)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-between border-t border-zinc-100/50 pt-2" }, [
                              createVNode("div", { class: "font-black text-xs text-zinc-900 px-1" }, toDisplayString(course.price > 0 ? "$" + course.price : "مجاني"), 1),
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("teacher.courses.edit", course.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$2), {
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 rounded-md hover:bg-white hover:text-emerald-600 transition-all"
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
                                  onClick: ($event) => deleteCourse(course.id),
                                  variant: "ghost",
                                  size: "icon",
                                  class: "h-7 w-7 rounded-md text-zinc-200 hover:text-red-500 hover:bg-white transition-all"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-zinc-50/20 text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight" }, [
                    createVNode("span", null, "لوحة التحكم"),
                    createVNode(_component_ChevronLeft, { class: "h-3 w-3" }),
                    createVNode("span", { class: "text-zinc-900 font-black" }, "إدارة الكورسات")
                  ]),
                  createVNode(unref(Link), {
                    href: _ctx.route("teacher.courses.create")
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), {
                        size: "sm",
                        class: "h-7 text-[11px] px-4 font-bold"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Plus, { class: "ml-1.5 h-3 w-3" }),
                          createTextVNode(" إضافة كورس جديد ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right" }, [
                  createVNode("div", { class: "w-full space-y-6 max-w-full mx-auto" }, [
                    __props.courses.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-24 border border-dashed border-zinc-200 rounded-lg bg-white"
                    }, [
                      createVNode(_component_BookOpen, { class: "h-12 w-12 text-zinc-100 mb-4" }),
                      createVNode("h3", { class: "text-[13px] font-bold text-zinc-900" }, "لم تضف أي كورس بعد"),
                      createVNode("p", { class: "text-[11px] text-zinc-400 mb-6" }, "ابدأ الآن بمشاركة خبراتك وإنشاء أول محتوى تعليمي."),
                      createVNode(unref(Link), {
                        href: _ctx.route("teacher.courses.create")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            variant: "outline",
                            size: "sm",
                            class: "h-8 text-[11px] font-black px-8 border-zinc-200"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("إنشاء كورس الآن")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                        return openBlock(), createBlock(unref(_sfc_main$3), {
                          key: course.id,
                          class: "group border-zinc-200 shadow-none rounded-lg overflow-hidden flex flex-col bg-white hover:border-zinc-400 transition-all duration-200"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "aspect-video relative bg-zinc-100 overflow-hidden border-b border-zinc-100" }, [
                              course.thumbnail ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: course.thumbnail,
                                class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "w-full h-full flex items-center justify-center text-zinc-300"
                              }, [
                                createVNode(unref(GraduationCap), { class: "h-10 w-10 opacity-30" })
                              ])),
                              createVNode("div", { class: "absolute top-2 left-2 flex flex-wrap gap-1" }, [
                                createVNode(unref(_sfc_main$4), {
                                  variant: course.is_published ? "default" : "outline",
                                  class: "h-4 text-[8px] font-black uppercase tracking-widest px-1.5 shadow-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(course.is_published ? "منشور" : "مسودة"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["variant"]),
                                course.allow_study_rooms ? (openBlock(), createBlock(unref(_sfc_main$4), {
                                  key: 0,
                                  variant: "secondary",
                                  class: "h-4 text-[7px] font-black uppercase px-1 bg-white/90 border-zinc-200 text-indigo-600"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" غرفة مذاكرة ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "absolute bottom-2 right-2" }, [
                                createVNode(unref(_sfc_main$4), {
                                  variant: "secondary",
                                  class: "h-4 text-[8px] font-bold px-1.5 bg-white/90 backdrop-blur-sm border-none text-zinc-900"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getLevelBadge(course.level)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            createVNode(unref(_sfc_main$5), { class: "p-3 space-y-1.5 pb-2" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("span", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, toDisplayString(((_a = course.category) == null ? void 0 : _a.name) || "عام"), 1),
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode("div", { class: "flex items-center gap-1 text-zinc-400" }, [
                                        createVNode(unref(Users), { class: "h-3 w-3 opacity-50" }),
                                        createVNode("span", { class: "text-[9px] font-bold" }, toDisplayString(course.users_count || 0), 1)
                                      ])
                                    ])
                                  ]),
                                  createVNode(unref(_sfc_main$6), { class: "text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(course.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$7), { class: "px-3 pb-3 pt-0 flex-1 space-y-3" }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-[10px] text-zinc-400 line-clamp-2 leading-relaxed" }, toDisplayString(course.description), 1),
                                createVNode("div", { class: "grid grid-cols-3 gap-1 pt-1 border-t border-zinc-50" }, [
                                  createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50" }, [
                                    createVNode(unref(PlayCircle), { class: "h-3 w-3 text-zinc-400 mb-1" }),
                                    createVNode("span", { class: "text-[10px] font-black" }, toDisplayString(course.lessons_count || 0), 1),
                                    createVNode("span", { class: "text-[7px] font-bold text-zinc-400 uppercase tracking-tighter" }, "درس")
                                  ]),
                                  createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50" }, [
                                    createVNode(_component_HelpCircle, { class: "h-3 w-3 text-zinc-400 mb-1" }),
                                    createVNode("span", { class: "text-[10px] font-black" }, toDisplayString(course.quizzes_count || 0), 1),
                                    createVNode("span", { class: "text-[7px] font-bold text-zinc-400 uppercase tracking-tighter" }, "اختبار")
                                  ]),
                                  createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-zinc-50/50" }, [
                                    createVNode(_component_Trophy, { class: "h-3 w-3 text-zinc-400 mb-1" }),
                                    createVNode("span", { class: "text-[10px] font-black" }, toDisplayString(course.challenges_count || 0), 1),
                                    createVNode("span", { class: "text-[7px] font-bold text-zinc-400 uppercase tracking-tighter" }, "تحدي")
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$8), { class: "p-2 border-t border-zinc-50 bg-zinc-50/30 flex flex-col gap-2" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-3 px-1" }, [
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    createVNode("div", {
                                      class: ["h-3 w-3 rounded-full flex items-center justify-center", course.is_published ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"]
                                    }, [
                                      course.is_published ? (openBlock(), createBlock(_component_Check, {
                                        key: 0,
                                        class: "h-2 w-2"
                                      })) : (openBlock(), createBlock(_component_X, {
                                        key: 1,
                                        class: "h-2 w-2"
                                      }))
                                    ], 2),
                                    createVNode("span", {
                                      class: ["text-[9px] font-bold", course.is_published ? "text-zinc-900" : "text-zinc-400"]
                                    }, "منشور", 2)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    createVNode("div", {
                                      class: ["h-3 w-3 rounded-full flex items-center justify-center", course.allow_study_rooms ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"]
                                    }, [
                                      course.allow_study_rooms ? (openBlock(), createBlock(_component_Check, {
                                        key: 0,
                                        class: "h-2 w-2"
                                      })) : (openBlock(), createBlock(_component_X, {
                                        key: 1,
                                        class: "h-2 w-2"
                                      }))
                                    ], 2),
                                    createVNode("span", {
                                      class: ["text-[9px] font-bold", course.allow_study_rooms ? "text-zinc-900" : "text-zinc-400"]
                                    }, "غرف المذاكرة", 2)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    createVNode("div", {
                                      class: ["h-3 w-3 rounded-full flex items-center justify-center", course.allow_timed_comments ? "bg-emerald-500 text-white" : "bg-zinc-200 text-zinc-400"]
                                    }, [
                                      course.allow_timed_comments ? (openBlock(), createBlock(_component_Check, {
                                        key: 0,
                                        class: "h-2 w-2"
                                      })) : (openBlock(), createBlock(_component_X, {
                                        key: 1,
                                        class: "h-2 w-2"
                                      }))
                                    ], 2),
                                    createVNode("span", {
                                      class: ["text-[9px] font-bold", course.allow_timed_comments ? "text-zinc-900" : "text-zinc-400"]
                                    }, "تعليقات موقوتة", 2)
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center justify-between border-t border-zinc-100/50 pt-2" }, [
                                  createVNode("div", { class: "font-black text-xs text-zinc-900 px-1" }, toDisplayString(course.price > 0 ? "$" + course.price : "مجاني"), 1),
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("teacher.courses.edit", course.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$2), {
                                          variant: "ghost",
                                          size: "icon",
                                          class: "h-7 w-7 rounded-md hover:bg-white hover:text-emerald-600 transition-all"
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
                                      onClick: ($event) => deleteCourse(course.id),
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 rounded-md text-zinc-200 hover:text-red-500 hover:bg-white transition-all"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Courses/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
