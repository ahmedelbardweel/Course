import { unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BAtzIAbQ.js";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3, b as _sfc_main$5, c as _sfc_main$6, a as _sfc_main$7 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$2 } from "./index-CGK-4kfq.js";
import { _ as _sfc_main$4 } from "./index-BhZ8Ukd6.js";
import { ChevronLeft, CheckCircle2, Layers, Trophy, SearchX, PlayCircle, ArrowRight } from "lucide-vue-next";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "reka-ui";
const _sfc_main = {
  __name: "MyLearning",
  __ssrInlineRender: true,
  props: {
    enrolledCourses: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "دوراتي ومسار التعلم" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-zinc-50/20 text-[12px]"${_scopeId}><header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}><span${_scopeId}>الرئيسية</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-black"${_scopeId}>مساري التعليمي</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              variant: "outline",
              class: "h-5 text-[9px] font-black uppercase tracking-widest border-zinc-200 bg-zinc-50"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.enrolledCourses.length)} كورس نشط`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.enrolledCourses.length) + " كورس نشط", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></header><main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto"${_scopeId}><div class="w-full space-y-6 max-w-full mx-auto"${_scopeId}>`);
            if (__props.enrolledCourses.length > 0) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none bg-white rounded-lg p-3 flex items-center gap-3" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-8 w-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(CheckCircle2), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}><div class="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none"${_scopeId2}>الكورسات المكتملة</div><div class="text-[12px] font-black mt-0.5"${_scopeId2}>${ssrInterpolate(__props.enrolledCourses.filter((c) => c.progress === 100).length)} دورات</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-8 w-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center" }, [
                        createVNode(unref(CheckCircle2), { class: "h-4 w-4" })
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none" }, "الكورسات المكتملة"),
                        createVNode("div", { class: "text-[12px] font-black mt-0.5" }, toDisplayString(__props.enrolledCourses.filter((c) => c.progress === 100).length) + " دورات", 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none bg-white rounded-lg p-3 flex items-center gap-3" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-8 w-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Layers), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}><div class="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none"${_scopeId2}>قيد الدراسة</div><div class="text-[12px] font-black mt-0.5"${_scopeId2}>${ssrInterpolate(__props.enrolledCourses.filter((c) => c.progress < 100).length)} دورات</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-8 w-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center" }, [
                        createVNode(unref(Layers), { class: "h-4 w-4" })
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none" }, "قيد الدراسة"),
                        createVNode("div", { class: "text-[12px] font-black mt-0.5" }, toDisplayString(__props.enrolledCourses.filter((c) => c.progress < 100).length) + " دورات", 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none bg-white rounded-lg p-3 flex items-center gap-3" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-8 w-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Trophy), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}><div class="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none"${_scopeId2}>إجمالي الإنجاز</div><div class="text-[12px] font-black mt-0.5"${_scopeId2}>${ssrInterpolate(Math.round(__props.enrolledCourses.reduce((acc, c) => acc + c.progress, 0) / (__props.enrolledCourses.length || 1)))}%</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-8 w-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center" }, [
                        createVNode(unref(Trophy), { class: "h-4 w-4" })
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none" }, "إجمالي الإنجاز"),
                        createVNode("div", { class: "text-[12px] font-black mt-0.5" }, toDisplayString(Math.round(__props.enrolledCourses.reduce((acc, c) => acc + c.progress, 0) / (__props.enrolledCourses.length || 1))) + "%", 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.enrolledCourses.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-32 border border-dashed border-zinc-200 rounded-xl bg-white shadow-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(SearchX), { class: "h-12 w-12 text-zinc-100 mb-4" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[13px] font-black text-zinc-900"${_scopeId}>لم تبدأ رحلتك التعليمية بعد</h3><p class="text-[11px] text-zinc-400 mb-6 text-center max-w-xs leading-relaxed"${_scopeId}>استكشف الكورسات المتاحة وابدأ أول خطوة في رحلتك التعليمية اليوم بضغطة زر واحدة.</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("courses.index")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "h-9 text-[11px] font-black px-8 rounded-full shadow-lg shadow-zinc-900/10" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`تصفح الكورسات الآن`);
                        } else {
                          return [
                            createTextVNode("تصفح الكورسات الآن")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$4), { class: "h-9 text-[11px] font-black px-8 rounded-full shadow-lg shadow-zinc-900/10" }, {
                        default: withCtx(() => [
                          createTextVNode("تصفح الكورسات الآن")
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
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.enrolledCourses, (course) => {
                _push2(ssrRenderComponent(unref(_sfc_main$3), {
                  key: course.id,
                  class: "border-zinc-200 shadow-none rounded-lg overflow-hidden flex flex-col bg-white group hover:border-zinc-400 transition-all duration-300"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="aspect-video relative overflow-hidden bg-zinc-100 border-b border-zinc-50"${_scopeId2}>`);
                      if (course.thumbnail) {
                        _push3(`<img${ssrRenderAttr("src", course.thumbnail)} class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="h-full w-full flex items-center justify-center text-zinc-300"${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(PlayCircle), { class: "h-10 w-10 opacity-20" }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      }
                      _push3(`<div class="absolute top-2 left-2 flex gap-1.5"${_scopeId2}>`);
                      if (course.progress === 100) {
                        _push3(ssrRenderComponent(unref(_sfc_main$2), { class: "h-4 text-[8px] font-black uppercase tracking-widest px-2 bg-emerald-600 text-white border-none shadow-sm" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` مكتمل `);
                              _push4(ssrRenderComponent(unref(CheckCircle2), { class: "mr-1 h-2.5 w-2.5" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createTextVNode(" مكتمل "),
                                createVNode(unref(CheckCircle2), { class: "mr-1 h-2.5 w-2.5" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(unref(_sfc_main$2), { class: "h-4 text-[8px] font-black uppercase tracking-widest px-2 bg-white/90 backdrop-blur-sm border-none text-zinc-900 shadow-sm" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` قيد التعلم `);
                            } else {
                              return [
                                createTextVNode(" قيد التعلم ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      }
                      _push3(`</div><div class="absolute inset-0 bg-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId2}></div></div>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-3 space-y-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a, _b;
                          if (_push4) {
                            _push4(`<div class="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400"${_scopeId3}>${ssrInterpolate(((_a = course.category) == null ? void 0 : _a.name) || "عام")}</div>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors leading-tight" }, {
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
                              createVNode("div", { class: "text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400" }, toDisplayString(((_b = course.category) == null ? void 0 : _b.name) || "عام"), 1),
                              createVNode(unref(_sfc_main$6), { class: "text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors leading-tight" }, {
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
                      _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "p-3 pt-0 space-y-3" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="space-y-1.5"${_scopeId3}><div class="flex justify-between text-[10px] font-black uppercase tracking-widest"${_scopeId3}><span class="text-zinc-400"${_scopeId3}>التقدم: ${ssrInterpolate(course.progress)}%</span><span class="text-zinc-900"${_scopeId3}>${ssrInterpolate(course.completed_lessons_count)}/${ssrInterpolate(course.lessons_count)}</span></div><div class="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden"${_scopeId3}><div class="h-full bg-zinc-900 transition-all duration-1000 ease-out" style="${ssrRenderStyle(`width: ${course.progress}%`)}"${_scopeId3}></div></div></div>`);
                            _push4(ssrRenderComponent(unref(Link), {
                              href: _ctx.route("courses.show", course.slug),
                              class: "block w-full pt-1"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(_sfc_main$4), {
                                    variant: "outline",
                                    size: "sm",
                                    class: "w-full h-8 text-[11px] font-black border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white transition-all rounded-md"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(course.progress === 100 ? "مراجعة المادة" : "متابعة التعلم")} `);
                                        _push6(ssrRenderComponent(unref(ArrowRight), { class: "mr-2 h-3 w-3 opacity-50" }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(course.progress === 100 ? "مراجعة المادة" : "متابعة التعلم") + " ", 1),
                                          createVNode(unref(ArrowRight), { class: "mr-2 h-3 w-3 opacity-50" })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(_sfc_main$4), {
                                      variant: "outline",
                                      size: "sm",
                                      class: "w-full h-8 text-[11px] font-black border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white transition-all rounded-md"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(course.progress === 100 ? "مراجعة المادة" : "متابعة التعلم") + " ", 1),
                                        createVNode(unref(ArrowRight), { class: "mr-2 h-3 w-3 opacity-50" })
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode("div", { class: "flex justify-between text-[10px] font-black uppercase tracking-widest" }, [
                                  createVNode("span", { class: "text-zinc-400" }, "التقدم: " + toDisplayString(course.progress) + "%", 1),
                                  createVNode("span", { class: "text-zinc-900" }, toDisplayString(course.completed_lessons_count) + "/" + toDisplayString(course.lessons_count), 1)
                                ]),
                                createVNode("div", { class: "w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden" }, [
                                  createVNode("div", {
                                    class: "h-full bg-zinc-900 transition-all duration-1000 ease-out",
                                    style: `width: ${course.progress}%`
                                  }, null, 4)
                                ])
                              ]),
                              createVNode(unref(Link), {
                                href: _ctx.route("courses.show", course.slug),
                                class: "block w-full pt-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$4), {
                                    variant: "outline",
                                    size: "sm",
                                    class: "w-full h-8 text-[11px] font-black border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white transition-all rounded-md"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(course.progress === 100 ? "مراجعة المادة" : "متابعة التعلم") + " ", 1),
                                      createVNode(unref(ArrowRight), { class: "mr-2 h-3 w-3 opacity-50" })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("div", { class: "aspect-video relative overflow-hidden bg-zinc-100 border-b border-zinc-50" }, [
                          course.thumbnail ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: course.thumbnail,
                            class: "w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                          }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "h-full w-full flex items-center justify-center text-zinc-300"
                          }, [
                            createVNode(unref(PlayCircle), { class: "h-10 w-10 opacity-20" })
                          ])),
                          createVNode("div", { class: "absolute top-2 left-2 flex gap-1.5" }, [
                            course.progress === 100 ? (openBlock(), createBlock(unref(_sfc_main$2), {
                              key: 0,
                              class: "h-4 text-[8px] font-black uppercase tracking-widest px-2 bg-emerald-600 text-white border-none shadow-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" مكتمل "),
                                createVNode(unref(CheckCircle2), { class: "mr-1 h-2.5 w-2.5" })
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(unref(_sfc_main$2), {
                              key: 1,
                              class: "h-4 text-[8px] font-black uppercase tracking-widest px-2 bg-white/90 backdrop-blur-sm border-none text-zinc-900 shadow-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" قيد التعلم ")
                              ]),
                              _: 1
                            }))
                          ]),
                          createVNode("div", { class: "absolute inset-0 bg-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity" })
                        ]),
                        createVNode(unref(_sfc_main$5), { class: "p-3 space-y-1" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("div", { class: "text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400" }, toDisplayString(((_a = course.category) == null ? void 0 : _a.name) || "عام"), 1),
                              createVNode(unref(_sfc_main$6), { class: "text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors leading-tight" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(course.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$7), { class: "p-3 pt-0 space-y-3" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode("div", { class: "flex justify-between text-[10px] font-black uppercase tracking-widest" }, [
                                createVNode("span", { class: "text-zinc-400" }, "التقدم: " + toDisplayString(course.progress) + "%", 1),
                                createVNode("span", { class: "text-zinc-900" }, toDisplayString(course.completed_lessons_count) + "/" + toDisplayString(course.lessons_count), 1)
                              ]),
                              createVNode("div", { class: "w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden" }, [
                                createVNode("div", {
                                  class: "h-full bg-zinc-900 transition-all duration-1000 ease-out",
                                  style: `width: ${course.progress}%`
                                }, null, 4)
                              ])
                            ]),
                            createVNode(unref(Link), {
                              href: _ctx.route("courses.show", course.slug),
                              class: "block w-full pt-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$4), {
                                  variant: "outline",
                                  size: "sm",
                                  class: "w-full h-8 text-[11px] font-black border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white transition-all rounded-md"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(course.progress === 100 ? "مراجعة المادة" : "متابعة التعلم") + " ", 1),
                                    createVNode(unref(ArrowRight), { class: "mr-2 h-3 w-3 opacity-50" })
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["href"])
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
                    createVNode("span", null, "الرئيسية"),
                    createVNode(unref(ChevronLeft), { class: "h-3 w-3" }),
                    createVNode("span", { class: "text-zinc-900 font-black" }, "مساري التعليمي")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(unref(_sfc_main$2), {
                      variant: "outline",
                      class: "h-5 text-[9px] font-black uppercase tracking-widest border-zinc-200 bg-zinc-50"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.enrolledCourses.length) + " كورس نشط", 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right overflow-y-auto" }, [
                  createVNode("div", { class: "w-full space-y-6 max-w-full mx-auto" }, [
                    __props.enrolledCourses.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-1 sm:grid-cols-3 gap-4"
                    }, [
                      createVNode(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none bg-white rounded-lg p-3 flex items-center gap-3" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-8 w-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center" }, [
                            createVNode(unref(CheckCircle2), { class: "h-4 w-4" })
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none" }, "الكورسات المكتملة"),
                            createVNode("div", { class: "text-[12px] font-black mt-0.5" }, toDisplayString(__props.enrolledCourses.filter((c) => c.progress === 100).length) + " دورات", 1)
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none bg-white rounded-lg p-3 flex items-center gap-3" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-8 w-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center" }, [
                            createVNode(unref(Layers), { class: "h-4 w-4" })
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none" }, "قيد الدراسة"),
                            createVNode("div", { class: "text-[12px] font-black mt-0.5" }, toDisplayString(__props.enrolledCourses.filter((c) => c.progress < 100).length) + " دورات", 1)
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none bg-white rounded-lg p-3 flex items-center gap-3" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-8 w-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center" }, [
                            createVNode(unref(Trophy), { class: "h-4 w-4" })
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none" }, "إجمالي الإنجاز"),
                            createVNode("div", { class: "text-[12px] font-black mt-0.5" }, toDisplayString(Math.round(__props.enrolledCourses.reduce((acc, c) => acc + c.progress, 0) / (__props.enrolledCourses.length || 1))) + "%", 1)
                          ])
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    __props.enrolledCourses.length === 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-col items-center justify-center py-32 border border-dashed border-zinc-200 rounded-xl bg-white shadow-sm"
                    }, [
                      createVNode(unref(SearchX), { class: "h-12 w-12 text-zinc-100 mb-4" }),
                      createVNode("h3", { class: "text-[13px] font-black text-zinc-900" }, "لم تبدأ رحلتك التعليمية بعد"),
                      createVNode("p", { class: "text-[11px] text-zinc-400 mb-6 text-center max-w-xs leading-relaxed" }, "استكشف الكورسات المتاحة وابدأ أول خطوة في رحلتك التعليمية اليوم بضغطة زر واحدة."),
                      createVNode(unref(Link), {
                        href: _ctx.route("courses.index")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "h-9 text-[11px] font-black px-8 rounded-full shadow-lg shadow-zinc-900/10" }, {
                            default: withCtx(() => [
                              createTextVNode("تصفح الكورسات الآن")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.enrolledCourses, (course) => {
                        return openBlock(), createBlock(unref(_sfc_main$3), {
                          key: course.id,
                          class: "border-zinc-200 shadow-none rounded-lg overflow-hidden flex flex-col bg-white group hover:border-zinc-400 transition-all duration-300"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "aspect-video relative overflow-hidden bg-zinc-100 border-b border-zinc-50" }, [
                              course.thumbnail ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: course.thumbnail,
                                class: "w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                              }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "h-full w-full flex items-center justify-center text-zinc-300"
                              }, [
                                createVNode(unref(PlayCircle), { class: "h-10 w-10 opacity-20" })
                              ])),
                              createVNode("div", { class: "absolute top-2 left-2 flex gap-1.5" }, [
                                course.progress === 100 ? (openBlock(), createBlock(unref(_sfc_main$2), {
                                  key: 0,
                                  class: "h-4 text-[8px] font-black uppercase tracking-widest px-2 bg-emerald-600 text-white border-none shadow-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" مكتمل "),
                                    createVNode(unref(CheckCircle2), { class: "mr-1 h-2.5 w-2.5" })
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(unref(_sfc_main$2), {
                                  key: 1,
                                  class: "h-4 text-[8px] font-black uppercase tracking-widest px-2 bg-white/90 backdrop-blur-sm border-none text-zinc-900 shadow-sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" قيد التعلم ")
                                  ]),
                                  _: 1
                                }))
                              ]),
                              createVNode("div", { class: "absolute inset-0 bg-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity" })
                            ]),
                            createVNode(unref(_sfc_main$5), { class: "p-3 space-y-1" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("div", { class: "text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400" }, toDisplayString(((_a = course.category) == null ? void 0 : _a.name) || "عام"), 1),
                                  createVNode(unref(_sfc_main$6), { class: "text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors leading-tight" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(course.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$7), { class: "p-3 pt-0 space-y-3" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-1.5" }, [
                                  createVNode("div", { class: "flex justify-between text-[10px] font-black uppercase tracking-widest" }, [
                                    createVNode("span", { class: "text-zinc-400" }, "التقدم: " + toDisplayString(course.progress) + "%", 1),
                                    createVNode("span", { class: "text-zinc-900" }, toDisplayString(course.completed_lessons_count) + "/" + toDisplayString(course.lessons_count), 1)
                                  ]),
                                  createVNode("div", { class: "w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden" }, [
                                    createVNode("div", {
                                      class: "h-full bg-zinc-900 transition-all duration-1000 ease-out",
                                      style: `width: ${course.progress}%`
                                    }, null, 4)
                                  ])
                                ]),
                                createVNode(unref(Link), {
                                  href: _ctx.route("courses.show", course.slug),
                                  class: "block w-full pt-1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$4), {
                                      variant: "outline",
                                      size: "sm",
                                      class: "w-full h-8 text-[11px] font-black border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white transition-all rounded-md"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(course.progress === 100 ? "مراجعة المادة" : "متابعة التعلم") + " ", 1),
                                        createVNode(unref(ArrowRight), { class: "mr-2 h-3 w-3 opacity-50" })
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Courses/MyLearning.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
