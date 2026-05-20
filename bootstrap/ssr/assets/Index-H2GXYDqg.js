import { unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CugrFxsQ.js";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, a as _sfc_main$5, e as _sfc_main$6 } from "./CardTitle-Cy38L483.js";
import { ChevronLeft, Wallet, TrendingUp, BarChart3, Target, PieChart, Users } from "lucide-vue-next";
import { _ as _sfc_main$7 } from "./index-CGK-4kfq.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    sales: Array,
    total_earnings: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "تقارير المبيعات" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-zinc-50/20 text-[12px]"${_scopeId}><header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}><span${_scopeId}>لوحة التحكم</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-black"${_scopeId}>تقارير المبيعات</span></div></header><main class="flex-1 p-4 lg:p-6 text-right"${_scopeId}><div class="w-full space-y-6 max-w-full mx-auto"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-lg overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`صافي الأرباح (70%)`);
                            } else {
                              return [
                                createTextVNode("صافي الأرباح (70%)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="h-8 w-8 rounded-md bg-emerald-50 flex items-center justify-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Wallet), { class: "h-4 w-4 text-emerald-600" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("صافي الأرباح (70%)")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-md bg-emerald-50 flex items-center justify-center" }, [
                            createVNode(unref(Wallet), { class: "h-4 w-4 text-emerald-600" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 pt-4 bg-emerald-50/5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>$${ssrInterpolate(__props.total_earnings.toFixed(2))}</div><div class="flex items-center gap-1 mt-1 text-[10px] text-emerald-600 font-bold uppercase tracking-widest"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(TrendingUp), { class: "h-3 w-3" }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>نمو مستقر</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.total_earnings.toFixed(2)), 1),
                          createVNode("div", { class: "flex items-center gap-1 mt-1 text-[10px] text-emerald-600 font-bold uppercase tracking-widest" }, [
                            createVNode(unref(TrendingUp), { class: "h-3 w-3" }),
                            createVNode("span", null, "نمو مستقر")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("صافي الأرباح (70%)")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-md bg-emerald-50 flex items-center justify-center" }, [
                          createVNode(unref(Wallet), { class: "h-4 w-4 text-emerald-600" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5), { class: "p-4 pt-4 bg-emerald-50/5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.total_earnings.toFixed(2)), 1),
                        createVNode("div", { class: "flex items-center gap-1 mt-1 text-[10px] text-emerald-600 font-bold uppercase tracking-widest" }, [
                          createVNode(unref(TrendingUp), { class: "h-3 w-3" }),
                          createVNode("span", null, "نمو مستقر")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-lg overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`إجمالي مبيعات المنصة`);
                            } else {
                              return [
                                createTextVNode("إجمالي مبيعات المنصة")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(BarChart3), { class: "h-4 w-4 text-blue-600" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("إجمالي مبيعات المنصة")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center" }, [
                            createVNode(unref(BarChart3), { class: "h-4 w-4 text-blue-600" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 pt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>$${ssrInterpolate((__props.total_earnings / 0.7).toFixed(2))}</div><div class="text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest"${_scopeId3}>قبل اقتطاع العمولة</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString((__props.total_earnings / 0.7).toFixed(2)), 1),
                          createVNode("div", { class: "text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest" }, "قبل اقتطاع العمولة")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("إجمالي مبيعات المنصة")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center" }, [
                          createVNode(unref(BarChart3), { class: "h-4 w-4 text-blue-600" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5), { class: "p-4 pt-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString((__props.total_earnings / 0.7).toFixed(2)), 1),
                        createVNode("div", { class: "text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest" }, "قبل اقتطاع العمولة")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-lg overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`متوسط الربح لكل كورس`);
                            } else {
                              return [
                                createTextVNode("متوسط الربح لكل كورس")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="h-8 w-8 rounded-md bg-zinc-50 flex items-center justify-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Target), { class: "h-4 w-4 text-zinc-400" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("متوسط الربح لكل كورس")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-md bg-zinc-50 flex items-center justify-center" }, [
                            createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 pt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>$${ssrInterpolate(__props.sales.length > 0 ? (__props.total_earnings / __props.sales.length).toFixed(2) : 0)}</div><div class="text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest"${_scopeId3}>أداء المحتوى التعليمي</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.sales.length > 0 ? (__props.total_earnings / __props.sales.length).toFixed(2) : 0), 1),
                          createVNode("div", { class: "text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest" }, "أداء المحتوى التعليمي")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("متوسط الربح لكل كورس")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-md bg-zinc-50 flex items-center justify-center" }, [
                          createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5), { class: "p-4 pt-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.sales.length > 0 ? (__props.total_earnings / __props.sales.length).toFixed(2) : 0), 1),
                        createVNode("div", { class: "text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest" }, "أداء المحتوى التعليمي")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-4 border-b border-zinc-50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(PieChart), { class: "h-4 w-4 text-zinc-400" }, null, _parent5, _scopeId4));
                              _push5(` تحليل مبيعات الكورسات `);
                            } else {
                              return [
                                createVNode(unref(PieChart), { class: "h-4 w-4 text-zinc-400" }),
                                createTextVNode(" تحليل مبيعات الكورسات ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-[10px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`تفصيل المبيعات وصافي الربح لكل كورس بشكل مستقل.`);
                            } else {
                              return [
                                createTextVNode("تفصيل المبيعات وصافي الربح لكل كورس بشكل مستقل.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                            default: withCtx(() => [
                              createVNode(unref(PieChart), { class: "h-4 w-4 text-zinc-400" }),
                              createTextVNode(" تحليل مبيعات الكورسات ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), { class: "text-[10px]" }, {
                            default: withCtx(() => [
                              createTextVNode("تفصيل المبيعات وصافي الربح لكل كورس بشكل مستقل.")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.sales.length === 0) {
                          _push4(`<div class="flex flex-col items-center justify-center py-20 text-zinc-400 italic"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(BarChart3), { class: "h-10 w-10 opacity-10 mb-2" }, null, _parent4, _scopeId3));
                          _push4(` لا توجد بيانات مبيعات حالياً. </div>`);
                        } else {
                          _push4(`<div class="overflow-x-auto"${_scopeId3}><table class="w-full text-right border-collapse text-[12px]"${_scopeId3}><thead${_scopeId3}><tr class="bg-zinc-50/50 border-b border-zinc-100"${_scopeId3}><th class="p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400"${_scopeId3}>اسم الكورس</th><th class="p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center"${_scopeId3}>السعر</th><th class="p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center"${_scopeId3}>الطلاب</th><th class="p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center"${_scopeId3}>إجمالي المبيعات</th><th class="p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left"${_scopeId3}>صافي ربحك</th></tr></thead><tbody class="divide-y divide-zinc-50"${_scopeId3}><!--[-->`);
                          ssrRenderList(__props.sales, (sale, index) => {
                            _push4(`<tr class="hover:bg-zinc-50/30 transition-colors group"${_scopeId3}><td class="p-3 font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors"${_scopeId3}>${ssrInterpolate(sale.title)}</td><td class="p-3 text-center text-zinc-500 font-medium"${_scopeId3}>$${ssrInterpolate(sale.price)}</td><td class="p-3 text-center"${_scopeId3}><div class="flex items-center justify-center gap-1.5 text-zinc-500 font-bold"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Users), { class: "h-3 w-3 opacity-50" }, null, _parent4, _scopeId3));
                            _push4(` ${ssrInterpolate(sale.students)}</div></td><td class="p-3 text-center font-black text-zinc-400 tracking-tight"${_scopeId3}>$${ssrInterpolate(sale.total_revenue)}</td><td class="p-3 text-left"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$7), {
                              variant: "secondary",
                              class: "h-6 text-[11px] font-black bg-emerald-50 text-emerald-600 border-emerald-100/50 px-3 rounded shadow-sm"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` $${ssrInterpolate(sale.teacher_share.toFixed(2))}`);
                                } else {
                                  return [
                                    createTextVNode(" $" + toDisplayString(sale.teacher_share.toFixed(2)), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</td></tr>`);
                          });
                          _push4(`<!--]--></tbody></table></div>`);
                        }
                      } else {
                        return [
                          __props.sales.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-col items-center justify-center py-20 text-zinc-400 italic"
                          }, [
                            createVNode(unref(BarChart3), { class: "h-10 w-10 opacity-10 mb-2" }),
                            createTextVNode(" لا توجد بيانات مبيعات حالياً. ")
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "overflow-x-auto"
                          }, [
                            createVNode("table", { class: "w-full text-right border-collapse text-[12px]" }, [
                              createVNode("thead", null, [
                                createVNode("tr", { class: "bg-zinc-50/50 border-b border-zinc-100" }, [
                                  createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400" }, "اسم الكورس"),
                                  createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "السعر"),
                                  createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "الطلاب"),
                                  createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "إجمالي المبيعات"),
                                  createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left" }, "صافي ربحك")
                                ])
                              ]),
                              createVNode("tbody", { class: "divide-y divide-zinc-50" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.sales, (sale, index) => {
                                  return openBlock(), createBlock("tr", {
                                    key: index,
                                    class: "hover:bg-zinc-50/30 transition-colors group"
                                  }, [
                                    createVNode("td", { class: "p-3 font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors" }, toDisplayString(sale.title), 1),
                                    createVNode("td", { class: "p-3 text-center text-zinc-500 font-medium" }, "$" + toDisplayString(sale.price), 1),
                                    createVNode("td", { class: "p-3 text-center" }, [
                                      createVNode("div", { class: "flex items-center justify-center gap-1.5 text-zinc-500 font-bold" }, [
                                        createVNode(unref(Users), { class: "h-3 w-3 opacity-50" }),
                                        createTextVNode(" " + toDisplayString(sale.students), 1)
                                      ])
                                    ]),
                                    createVNode("td", { class: "p-3 text-center font-black text-zinc-400 tracking-tight" }, "$" + toDisplayString(sale.total_revenue), 1),
                                    createVNode("td", { class: "p-3 text-left" }, [
                                      createVNode(unref(_sfc_main$7), {
                                        variant: "secondary",
                                        class: "h-6 text-[11px] font-black bg-emerald-50 text-emerald-600 border-emerald-100/50 px-3 rounded shadow-sm"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" $" + toDisplayString(sale.teacher_share.toFixed(2)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { class: "p-4 border-b border-zinc-50" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                          default: withCtx(() => [
                            createVNode(unref(PieChart), { class: "h-4 w-4 text-zinc-400" }),
                            createTextVNode(" تحليل مبيعات الكورسات ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$6), { class: "text-[10px]" }, {
                          default: withCtx(() => [
                            createTextVNode("تفصيل المبيعات وصافي الربح لكل كورس بشكل مستقل.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5), { class: "p-0" }, {
                      default: withCtx(() => [
                        __props.sales.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-col items-center justify-center py-20 text-zinc-400 italic"
                        }, [
                          createVNode(unref(BarChart3), { class: "h-10 w-10 opacity-10 mb-2" }),
                          createTextVNode(" لا توجد بيانات مبيعات حالياً. ")
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "overflow-x-auto"
                        }, [
                          createVNode("table", { class: "w-full text-right border-collapse text-[12px]" }, [
                            createVNode("thead", null, [
                              createVNode("tr", { class: "bg-zinc-50/50 border-b border-zinc-100" }, [
                                createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400" }, "اسم الكورس"),
                                createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "السعر"),
                                createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "الطلاب"),
                                createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "إجمالي المبيعات"),
                                createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left" }, "صافي ربحك")
                              ])
                            ]),
                            createVNode("tbody", { class: "divide-y divide-zinc-50" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.sales, (sale, index) => {
                                return openBlock(), createBlock("tr", {
                                  key: index,
                                  class: "hover:bg-zinc-50/30 transition-colors group"
                                }, [
                                  createVNode("td", { class: "p-3 font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors" }, toDisplayString(sale.title), 1),
                                  createVNode("td", { class: "p-3 text-center text-zinc-500 font-medium" }, "$" + toDisplayString(sale.price), 1),
                                  createVNode("td", { class: "p-3 text-center" }, [
                                    createVNode("div", { class: "flex items-center justify-center gap-1.5 text-zinc-500 font-bold" }, [
                                      createVNode(unref(Users), { class: "h-3 w-3 opacity-50" }),
                                      createTextVNode(" " + toDisplayString(sale.students), 1)
                                    ])
                                  ]),
                                  createVNode("td", { class: "p-3 text-center font-black text-zinc-400 tracking-tight" }, "$" + toDisplayString(sale.total_revenue), 1),
                                  createVNode("td", { class: "p-3 text-left" }, [
                                    createVNode(unref(_sfc_main$7), {
                                      variant: "secondary",
                                      class: "h-6 text-[11px] font-black bg-emerald-50 text-emerald-600 border-emerald-100/50 px-3 rounded shadow-sm"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" $" + toDisplayString(sale.teacher_share.toFixed(2)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ]))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-zinc-50/20 text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight" }, [
                    createVNode("span", null, "لوحة التحكم"),
                    createVNode(unref(ChevronLeft), { class: "h-3 w-3" }),
                    createVNode("span", { class: "text-zinc-900 font-black" }, "تقارير المبيعات")
                  ])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right" }, [
                  createVNode("div", { class: "w-full space-y-6 max-w-full mx-auto" }, [
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" }, [
                      createVNode(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-lg overflow-hidden" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("صافي الأرباح (70%)")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "h-8 w-8 rounded-md bg-emerald-50 flex items-center justify-center" }, [
                                createVNode(unref(Wallet), { class: "h-4 w-4 text-emerald-600" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), { class: "p-4 pt-4 bg-emerald-50/5" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.total_earnings.toFixed(2)), 1),
                              createVNode("div", { class: "flex items-center gap-1 mt-1 text-[10px] text-emerald-600 font-bold uppercase tracking-widest" }, [
                                createVNode(unref(TrendingUp), { class: "h-3 w-3" }),
                                createVNode("span", null, "نمو مستقر")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-lg overflow-hidden" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("إجمالي مبيعات المنصة")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center" }, [
                                createVNode(unref(BarChart3), { class: "h-4 w-4 text-blue-600" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), { class: "p-4 pt-4" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString((__props.total_earnings / 0.7).toFixed(2)), 1),
                              createVNode("div", { class: "text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest" }, "قبل اقتطاع العمولة")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-lg overflow-hidden" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1 border-b border-zinc-50/50" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$4), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("متوسط الربح لكل كورس")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "h-8 w-8 rounded-md bg-zinc-50 flex items-center justify-center" }, [
                                createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), { class: "p-4 pt-4" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.sales.length > 0 ? (__props.total_earnings / __props.sales.length).toFixed(2) : 0), 1),
                              createVNode("div", { class: "text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-widest" }, "أداء المحتوى التعليمي")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-lg" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), { class: "p-4 border-b border-zinc-50" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-900" }, {
                              default: withCtx(() => [
                                createVNode(unref(PieChart), { class: "h-4 w-4 text-zinc-400" }),
                                createTextVNode(" تحليل مبيعات الكورسات ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$6), { class: "text-[10px]" }, {
                              default: withCtx(() => [
                                createTextVNode("تفصيل المبيعات وصافي الربح لكل كورس بشكل مستقل.")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), { class: "p-0" }, {
                          default: withCtx(() => [
                            __props.sales.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex flex-col items-center justify-center py-20 text-zinc-400 italic"
                            }, [
                              createVNode(unref(BarChart3), { class: "h-10 w-10 opacity-10 mb-2" }),
                              createTextVNode(" لا توجد بيانات مبيعات حالياً. ")
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "overflow-x-auto"
                            }, [
                              createVNode("table", { class: "w-full text-right border-collapse text-[12px]" }, [
                                createVNode("thead", null, [
                                  createVNode("tr", { class: "bg-zinc-50/50 border-b border-zinc-100" }, [
                                    createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400" }, "اسم الكورس"),
                                    createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "السعر"),
                                    createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "الطلاب"),
                                    createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-center" }, "إجمالي المبيعات"),
                                    createVNode("th", { class: "p-3 font-black text-[10px] uppercase tracking-widest text-zinc-400 text-left" }, "صافي ربحك")
                                  ])
                                ]),
                                createVNode("tbody", { class: "divide-y divide-zinc-50" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.sales, (sale, index) => {
                                    return openBlock(), createBlock("tr", {
                                      key: index,
                                      class: "hover:bg-zinc-50/30 transition-colors group"
                                    }, [
                                      createVNode("td", { class: "p-3 font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors" }, toDisplayString(sale.title), 1),
                                      createVNode("td", { class: "p-3 text-center text-zinc-500 font-medium" }, "$" + toDisplayString(sale.price), 1),
                                      createVNode("td", { class: "p-3 text-center" }, [
                                        createVNode("div", { class: "flex items-center justify-center gap-1.5 text-zinc-500 font-bold" }, [
                                          createVNode(unref(Users), { class: "h-3 w-3 opacity-50" }),
                                          createTextVNode(" " + toDisplayString(sale.students), 1)
                                        ])
                                      ]),
                                      createVNode("td", { class: "p-3 text-center font-black text-zinc-400 tracking-tight" }, "$" + toDisplayString(sale.total_revenue), 1),
                                      createVNode("td", { class: "p-3 text-left" }, [
                                        createVNode(unref(_sfc_main$7), {
                                          variant: "secondary",
                                          class: "h-6 text-[11px] font-black bg-emerald-50 text-emerald-600 border-emerald-100/50 px-3 rounded shadow-sm"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" $" + toDisplayString(sale.teacher_share.toFixed(2)), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ]))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Sales/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
