import { computed, mergeProps, useSSRContext, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AuthenticatedLayout-BAtzIAbQ.js";
import { Head, Link } from "@inertiajs/vue3";
import { ChevronLeft, Plus, DollarSign, Users, GraduationCap, Activity, PlayCircle, TrendingUp, Target, BookOpen } from "lucide-vue-next";
import { _ as _sfc_main$3 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, a as _sfc_main$7, e as _sfc_main$9 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$8 } from "./index-CGK-4kfq.js";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const _sfc_main$1 = {
  __name: "DashboardChart",
  __ssrInlineRender: true,
  props: {
    data: Array
  },
  setup(__props) {
    const props = __props;
    const maxVal = computed(() => {
      const values = props.data.map((d) => d.value);
      return Math.max(...values, 10);
    });
    const getBarHeight = (value) => {
      return value / maxVal.value * 100;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex items-end justify-between gap-2 px-4 pt-8 pb-4" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data, (item, index) => {
        _push(`<div class="flex-1 flex flex-col items-center group relative h-full justify-end"><div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-zinc-50 text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20"> $${ssrInterpolate(item.value.toFixed(2))}</div><div class="w-full bg-zinc-100 dark:bg-zinc-800 rounded-t-sm group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-all duration-500 ease-out relative overflow-hidden" style="${ssrRenderStyle({ height: getBarHeight(item.value) + "%" })}"><div class="absolute inset-0 bg-gradient-to-t from-zinc-200/50 dark:from-zinc-700/50 to-transparent"></div></div><span class="mt-2 text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">${ssrInterpolate(item.label)}</span></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DashboardChart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    stats: Object,
    latest_courses: Array,
    chart_data: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "لوحة تحكم المعلم" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-zinc-50/20 text-[12px]"${_scopeId}><header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}><span${_scopeId}>لوحة التحكم</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-black"${_scopeId}>نظرة عامة</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.courses.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), {
                    size: "sm",
                    class: "h-7 text-[11px] px-4 font-bold"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Plus), { class: "ml-1.5 h-3 w-3" }, null, _parent4, _scopeId3));
                        _push4(` إنشاء كورس `);
                      } else {
                        return [
                          createVNode(unref(Plus), { class: "ml-1.5 h-3 w-3" }),
                          createTextVNode(" إنشاء كورس ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), {
                      size: "sm",
                      class: "h-7 text-[11px] px-4 font-bold"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Plus), { class: "ml-1.5 h-3 w-3" }),
                        createTextVNode(" إنشاء كورس ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></header><main class="flex-1 p-4 lg:p-6 text-right"${_scopeId}><div class="w-full space-y-6 max-w-full mx-auto"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`إجمالي الإيرادات`);
                            } else {
                              return [
                                createTextVNode("إجمالي الإيرادات")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="h-8 w-8 rounded-md bg-emerald-50 flex items-center justify-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(DollarSign), { class: "h-4 w-4 text-emerald-600" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("إجمالي الإيرادات")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-md bg-emerald-50 flex items-center justify-center" }, [
                            createVNode(unref(DollarSign), { class: "h-4 w-4 text-emerald-600" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>$${ssrInterpolate(__props.stats.total_revenue)}</div><div class="flex items-center gap-1 mt-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          variant: "secondary",
                          class: "h-4 text-[9px] font-black bg-emerald-50 text-emerald-600 border-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`+20.1%`);
                            } else {
                              return [
                                createTextVNode("+20.1%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="text-[10px] text-zinc-400 font-medium"${_scopeId3}>من الشهر الماضي</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.stats.total_revenue), 1),
                          createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                            createVNode(unref(_sfc_main$8), {
                              variant: "secondary",
                              class: "h-4 text-[9px] font-black bg-emerald-50 text-emerald-600 border-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("+20.1%")
                              ]),
                              _: 1
                            }),
                            createVNode("span", { class: "text-[10px] text-zinc-400 font-medium" }, "من الشهر الماضي")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("إجمالي الإيرادات")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-md bg-emerald-50 flex items-center justify-center" }, [
                          createVNode(unref(DollarSign), { class: "h-4 w-4 text-emerald-600" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.stats.total_revenue), 1),
                        createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                          createVNode(unref(_sfc_main$8), {
                            variant: "secondary",
                            class: "h-4 text-[9px] font-black bg-emerald-50 text-emerald-600 border-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("+20.1%")
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "text-[10px] text-zinc-400 font-medium" }, "من الشهر الماضي")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`الطلاب الجدد`);
                            } else {
                              return [
                                createTextVNode("الطلاب الجدد")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Users), { class: "h-4 w-4 text-blue-600" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("الطلاب الجدد")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center" }, [
                            createVNode(unref(Users), { class: "h-4 w-4 text-blue-600" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>${ssrInterpolate(__props.stats.total_students)}</div><div class="flex items-center gap-1 mt-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          variant: "secondary",
                          class: "h-4 text-[9px] font-black bg-blue-50 text-blue-600 border-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`+18%`);
                            } else {
                              return [
                                createTextVNode("+18%")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<span class="text-[10px] text-zinc-400 font-medium"${_scopeId3}>معدل النمو</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_students), 1),
                          createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                            createVNode(unref(_sfc_main$8), {
                              variant: "secondary",
                              class: "h-4 text-[9px] font-black bg-blue-50 text-blue-600 border-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("+18%")
                              ]),
                              _: 1
                            }),
                            createVNode("span", { class: "text-[10px] text-zinc-400 font-medium" }, "معدل النمو")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("الطلاب الجدد")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center" }, [
                          createVNode(unref(Users), { class: "h-4 w-4 text-blue-600" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_students), 1),
                        createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                          createVNode(unref(_sfc_main$8), {
                            variant: "secondary",
                            class: "h-4 text-[9px] font-black bg-blue-50 text-blue-600 border-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("+18%")
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "text-[10px] text-zinc-400 font-medium" }, "معدل النمو")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`الكورسات`);
                            } else {
                              return [
                                createTextVNode("الكورسات")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="h-8 w-8 rounded-md bg-purple-50 flex items-center justify-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(GraduationCap), { class: "h-4 w-4 text-purple-600" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("الكورسات")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-md bg-purple-50 flex items-center justify-center" }, [
                            createVNode(unref(GraduationCap), { class: "h-4 w-4 text-purple-600" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>${ssrInterpolate(__props.stats.total_courses)}</div><div class="flex items-center gap-1 mt-1 text-[10px] text-zinc-400 font-medium"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Activity), { class: "h-3 w-3 opacity-50" }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>نشرت كورسين جديدين</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_courses), 1),
                          createVNode("div", { class: "flex items-center gap-1 mt-1 text-[10px] text-zinc-400 font-medium" }, [
                            createVNode(unref(Activity), { class: "h-3 w-3 opacity-50" }),
                            createVNode("span", null, "نشرت كورسين جديدين")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("الكورسات")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-md bg-purple-50 flex items-center justify-center" }, [
                          createVNode(unref(GraduationCap), { class: "h-4 w-4 text-purple-600" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_courses), 1),
                        createVNode("div", { class: "flex items-center gap-1 mt-1 text-[10px] text-zinc-400 font-medium" }, [
                          createVNode(unref(Activity), { class: "h-3 w-3 opacity-50" }),
                          createVNode("span", null, "نشرت كورسين جديدين")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`المشاهدات`);
                            } else {
                              return [
                                createTextVNode("المشاهدات")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="h-8 w-8 rounded-md bg-amber-50 flex items-center justify-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(PlayCircle), { class: "h-4 w-4 text-amber-600" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("المشاهدات")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-md bg-amber-50 flex items-center justify-center" }, [
                            createVNode(unref(PlayCircle), { class: "h-4 w-4 text-amber-600" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>${ssrInterpolate(__props.stats.total_lessons)}</div><div class="flex items-center gap-1 mt-1 text-[10px] text-zinc-400 font-medium font-bold uppercase tracking-widest"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(TrendingUp), { class: "h-3 w-3" }, null, _parent4, _scopeId3));
                        _push4(` نشاط مرتفع </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_lessons), 1),
                          createVNode("div", { class: "flex items-center gap-1 mt-1 text-[10px] text-zinc-400 font-medium font-bold uppercase tracking-widest" }, [
                            createVNode(unref(TrendingUp), { class: "h-3 w-3" }),
                            createTextVNode(" نشاط مرتفع ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("المشاهدات")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-md bg-amber-50 flex items-center justify-center" }, [
                          createVNode(unref(PlayCircle), { class: "h-4 w-4 text-amber-600" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_lessons), 1),
                        createVNode("div", { class: "flex items-center gap-1 mt-1 text-[10px] text-zinc-400 font-medium font-bold uppercase tracking-widest" }, [
                          createVNode(unref(TrendingUp), { class: "h-3 w-3" }),
                          createTextVNode(" نشاط مرتفع ")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "lg:col-span-2 border-zinc-200 shadow-none bg-white rounded-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 border-b border-zinc-50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Target), { class: "h-4 w-4 text-zinc-400" }, null, _parent5, _scopeId4));
                              _push5(` أداء المبيعات الأسبوعي `);
                            } else {
                              return [
                                createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" }),
                                createTextVNode(" أداء المبيعات الأسبوعي ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[10px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`صافي الربح خلال الـ 7 أيام الماضية.`);
                            } else {
                              return [
                                createTextVNode("صافي الربح خلال الـ 7 أيام الماضية.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                            default: withCtx(() => [
                              createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" }),
                              createTextVNode(" أداء المبيعات الأسبوعي ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), { class: "text-[10px]" }, {
                            default: withCtx(() => [
                              createTextVNode("صافي الربح خلال الـ 7 أيام الماضية.")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "p-6 h-[300px]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, { data: __props.chart_data }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, { data: __props.chart_data }, null, 8, ["data"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "p-4 border-b border-zinc-50" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                          default: withCtx(() => [
                            createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" }),
                            createTextVNode(" أداء المبيعات الأسبوعي ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), { class: "text-[10px]" }, {
                          default: withCtx(() => [
                            createTextVNode("صافي الربح خلال الـ 7 أيام الماضية.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), { class: "p-6 h-[300px]" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, { data: __props.chart_data }, null, 8, ["data"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 border-b border-zinc-50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }, null, _parent5, _scopeId4));
                              _push5(` آخر الكورسات `);
                            } else {
                              return [
                                createVNode(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }),
                                createTextVNode(" آخر الكورسات ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[10px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`نظرة على المحتوى الأخير المنشور.`);
                            } else {
                              return [
                                createTextVNode("نظرة على المحتوى الأخير المنشور.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$6), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                            default: withCtx(() => [
                              createVNode(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }),
                              createTextVNode(" آخر الكورسات ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), { class: "text-[10px]" }, {
                            default: withCtx(() => [
                              createTextVNode("نظرة على المحتوى الأخير المنشور.")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "p-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="divide-y divide-zinc-50"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.latest_courses, (course) => {
                          _push4(`<div class="p-3 flex items-center justify-between hover:bg-zinc-50/50 transition-all group"${_scopeId3}><div class="flex items-center gap-3"${_scopeId3}><div class="h-8 w-11 rounded border border-zinc-100 overflow-hidden shadow-sm"${_scopeId3}>`);
                          if (course.thumbnail) {
                            _push4(`<img${ssrRenderAttr("src", course.thumbnail)} class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"${_scopeId3}>`);
                          } else {
                            _push4(`<div class="h-full w-full bg-zinc-50 flex items-center justify-center text-zinc-200"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(GraduationCap), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          }
                          _push4(`</div><div${_scopeId3}><div class="text-[11px] font-bold text-zinc-900 line-clamp-1"${_scopeId3}>${ssrInterpolate(course.title)}</div><div class="text-[9px] text-zinc-400 flex items-center gap-1.5 mt-0.5"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Users), { class: "h-2.5 w-2.5 opacity-50" }, null, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(course.users_count)} طالب </div></div></div><div class="text-[11px] font-black text-emerald-600"${_scopeId3}>+$${ssrInterpolate((course.price * 0.7).toFixed(2))}</div></div>`);
                        });
                        _push4(`<!--]--></div><div class="p-3 border-t border-zinc-50 text-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Link), {
                          href: _ctx.route("teacher.courses.index")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$3), {
                                variant: "ghost",
                                size: "sm",
                                class: "h-6 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`مشاهدة الكل`);
                                  } else {
                                    return [
                                      createTextVNode("مشاهدة الكل")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$3), {
                                  variant: "ghost",
                                  size: "sm",
                                  class: "h-6 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("مشاهدة الكل")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "divide-y divide-zinc-50" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.latest_courses, (course) => {
                              return openBlock(), createBlock("div", {
                                key: course.id,
                                class: "p-3 flex items-center justify-between hover:bg-zinc-50/50 transition-all group"
                              }, [
                                createVNode("div", { class: "flex items-center gap-3" }, [
                                  createVNode("div", { class: "h-8 w-11 rounded border border-zinc-100 overflow-hidden shadow-sm" }, [
                                    course.thumbnail ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: course.thumbnail,
                                      class: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "h-full w-full bg-zinc-50 flex items-center justify-center text-zinc-200"
                                    }, [
                                      createVNode(unref(GraduationCap), { class: "h-4 w-4" })
                                    ]))
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "text-[11px] font-bold text-zinc-900 line-clamp-1" }, toDisplayString(course.title), 1),
                                    createVNode("div", { class: "text-[9px] text-zinc-400 flex items-center gap-1.5 mt-0.5" }, [
                                      createVNode(unref(Users), { class: "h-2.5 w-2.5 opacity-50" }),
                                      createTextVNode(" " + toDisplayString(course.users_count) + " طالب ", 1)
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "text-[11px] font-black text-emerald-600" }, "+$" + toDisplayString((course.price * 0.7).toFixed(2)), 1)
                              ]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "p-3 border-t border-zinc-50 text-center" }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("teacher.courses.index")
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$3), {
                                  variant: "ghost",
                                  size: "sm",
                                  class: "h-6 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("مشاهدة الكل")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "p-4 border-b border-zinc-50" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                          default: withCtx(() => [
                            createVNode(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }),
                            createTextVNode(" آخر الكورسات ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), { class: "text-[10px]" }, {
                          default: withCtx(() => [
                            createTextVNode("نظرة على المحتوى الأخير المنشور.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$7), { class: "p-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "divide-y divide-zinc-50" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.latest_courses, (course) => {
                            return openBlock(), createBlock("div", {
                              key: course.id,
                              class: "p-3 flex items-center justify-between hover:bg-zinc-50/50 transition-all group"
                            }, [
                              createVNode("div", { class: "flex items-center gap-3" }, [
                                createVNode("div", { class: "h-8 w-11 rounded border border-zinc-100 overflow-hidden shadow-sm" }, [
                                  course.thumbnail ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: course.thumbnail,
                                    class: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "h-full w-full bg-zinc-50 flex items-center justify-center text-zinc-200"
                                  }, [
                                    createVNode(unref(GraduationCap), { class: "h-4 w-4" })
                                  ]))
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-[11px] font-bold text-zinc-900 line-clamp-1" }, toDisplayString(course.title), 1),
                                  createVNode("div", { class: "text-[9px] text-zinc-400 flex items-center gap-1.5 mt-0.5" }, [
                                    createVNode(unref(Users), { class: "h-2.5 w-2.5 opacity-50" }),
                                    createTextVNode(" " + toDisplayString(course.users_count) + " طالب ", 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "text-[11px] font-black text-emerald-600" }, "+$" + toDisplayString((course.price * 0.7).toFixed(2)), 1)
                            ]);
                          }), 128))
                        ]),
                        createVNode("div", { class: "p-3 border-t border-zinc-50 text-center" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("teacher.courses.index")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$3), {
                                variant: "ghost",
                                size: "sm",
                                class: "h-6 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("مشاهدة الكل")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-zinc-50/20 text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight" }, [
                    createVNode("span", null, "لوحة التحكم"),
                    createVNode(unref(ChevronLeft), { class: "h-3 w-3" }),
                    createVNode("span", { class: "text-zinc-900 font-black" }, "نظرة عامة")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("teacher.courses.create")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), {
                          size: "sm",
                          class: "h-7 text-[11px] px-4 font-bold"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Plus), { class: "ml-1.5 h-3 w-3" }),
                            createTextVNode(" إنشاء كورس ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right" }, [
                  createVNode("div", { class: "w-full space-y-6 max-w-full mx-auto" }, [
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, [
                      createVNode(unref(_sfc_main$4), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("إجمالي الإيرادات")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "h-8 w-8 rounded-md bg-emerald-50 flex items-center justify-center" }, [
                                createVNode(unref(DollarSign), { class: "h-4 w-4 text-emerald-600" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.stats.total_revenue), 1),
                              createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                                createVNode(unref(_sfc_main$8), {
                                  variant: "secondary",
                                  class: "h-4 text-[9px] font-black bg-emerald-50 text-emerald-600 border-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("+20.1%")
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", { class: "text-[10px] text-zinc-400 font-medium" }, "من الشهر الماضي")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$4), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("الطلاب الجدد")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center" }, [
                                createVNode(unref(Users), { class: "h-4 w-4 text-blue-600" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_students), 1),
                              createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                                createVNode(unref(_sfc_main$8), {
                                  variant: "secondary",
                                  class: "h-4 text-[9px] font-black bg-blue-50 text-blue-600 border-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("+18%")
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", { class: "text-[10px] text-zinc-400 font-medium" }, "معدل النمو")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$4), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("الكورسات")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "h-8 w-8 rounded-md bg-purple-50 flex items-center justify-center" }, [
                                createVNode(unref(GraduationCap), { class: "h-4 w-4 text-purple-600" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_courses), 1),
                              createVNode("div", { class: "flex items-center gap-1 mt-1 text-[10px] text-zinc-400 font-medium" }, [
                                createVNode(unref(Activity), { class: "h-3 w-3 opacity-50" }),
                                createVNode("span", null, "نشرت كورسين جديدين")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$4), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("المشاهدات")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "h-8 w-8 rounded-md bg-amber-50 flex items-center justify-center" }, [
                                createVNode(unref(PlayCircle), { class: "h-4 w-4 text-amber-600" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), { class: "p-4 pt-0" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_lessons), 1),
                              createVNode("div", { class: "flex items-center gap-1 mt-1 text-[10px] text-zinc-400 font-medium font-bold uppercase tracking-widest" }, [
                                createVNode(unref(TrendingUp), { class: "h-3 w-3" }),
                                createTextVNode(" نشاط مرتفع ")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [
                      createVNode(unref(_sfc_main$4), { class: "lg:col-span-2 border-zinc-200 shadow-none bg-white rounded-lg" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "p-4 border-b border-zinc-50" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" }),
                                  createTextVNode(" أداء المبيعات الأسبوعي ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), { class: "text-[10px]" }, {
                                default: withCtx(() => [
                                  createTextVNode("صافي الربح خلال الـ 7 أيام الماضية.")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), { class: "p-6 h-[300px]" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1, { data: __props.chart_data }, null, 8, ["data"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$4), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "p-4 border-b border-zinc-50" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                                default: withCtx(() => [
                                  createVNode(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }),
                                  createTextVNode(" آخر الكورسات ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9), { class: "text-[10px]" }, {
                                default: withCtx(() => [
                                  createTextVNode("نظرة على المحتوى الأخير المنشور.")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$7), { class: "p-0" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "divide-y divide-zinc-50" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.latest_courses, (course) => {
                                  return openBlock(), createBlock("div", {
                                    key: course.id,
                                    class: "p-3 flex items-center justify-between hover:bg-zinc-50/50 transition-all group"
                                  }, [
                                    createVNode("div", { class: "flex items-center gap-3" }, [
                                      createVNode("div", { class: "h-8 w-11 rounded border border-zinc-100 overflow-hidden shadow-sm" }, [
                                        course.thumbnail ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: course.thumbnail,
                                          class: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "h-full w-full bg-zinc-50 flex items-center justify-center text-zinc-200"
                                        }, [
                                          createVNode(unref(GraduationCap), { class: "h-4 w-4" })
                                        ]))
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("div", { class: "text-[11px] font-bold text-zinc-900 line-clamp-1" }, toDisplayString(course.title), 1),
                                        createVNode("div", { class: "text-[9px] text-zinc-400 flex items-center gap-1.5 mt-0.5" }, [
                                          createVNode(unref(Users), { class: "h-2.5 w-2.5 opacity-50" }),
                                          createTextVNode(" " + toDisplayString(course.users_count) + " طالب ", 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "text-[11px] font-black text-emerald-600" }, "+$" + toDisplayString((course.price * 0.7).toFixed(2)), 1)
                                  ]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "p-3 border-t border-zinc-50 text-center" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("teacher.courses.index")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$3), {
                                      variant: "ghost",
                                      size: "sm",
                                      class: "h-6 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("مشاهدة الكل")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
