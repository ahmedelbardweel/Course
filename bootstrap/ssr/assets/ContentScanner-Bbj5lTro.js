import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BAtzIAbQ.js";
import { Head } from "@inertiajs/vue3";
import "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$2 } from "./index-CGK-4kfq.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./CardTitle-Cy38L483.js";
import { ChevronLeft, FileSearch, BookOpen, Loader2, Search, ShieldAlert, SearchX, Zap, AlertTriangle, CheckCircle2 } from "lucide-vue-next";
import axios from "axios";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "ContentScanner",
  __ssrInlineRender: true,
  props: {
    courses: Array
  },
  setup(__props) {
    const props = __props;
    const selectedCourse = ref(null);
    const isScanning = ref(false);
    const scanReport = ref(null);
    const scanError = ref(null);
    const scanCourse = async (courseId) => {
      var _a, _b;
      isScanning.value = true;
      scanReport.value = null;
      scanError.value = null;
      selectedCourse.value = props.courses.find((c) => c.id === courseId);
      try {
        const response = await axios.post(route("admin.scanner.scan"), {
          course_id: courseId
        });
        scanReport.value = response.data.report;
      } catch (error) {
        scanError.value = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) || "حدث خطأ أثناء الفحص الميداني";
      } finally {
        isScanning.value = false;
      }
    };
    const getSeverityColor = (severity) => {
      if (severity === "high") return "text-red-600 bg-red-50 border-red-100";
      if (severity === "medium") return "text-amber-600 bg-amber-50 border-amber-100";
      return "text-blue-600 bg-blue-50 border-blue-100";
    };
    const getSeverityText = (severity) => {
      if (severity === "high") return "حرج جداً";
      if (severity === "medium") return "متوسط";
      return "تحسين";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "كاشف المحتوى القديم | الإدارة" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-zinc-50/20 text-[12px]"${_scopeId}><header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}><span${_scopeId}>الإدارة</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-black"${_scopeId}>كاشف المحتوى الذكي</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              variant: "outline",
              class: "h-5 text-[9px] font-black uppercase tracking-widest border-zinc-200 bg-zinc-50"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`نظام التدقيق AI`);
                } else {
                  return [
                    createTextVNode("نظام التدقيق AI")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></header><main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto"${_scopeId}><div class="w-full max-w-full mx-auto space-y-6"${_scopeId}><div class="relative overflow-hidden rounded-xl bg-zinc-900 p-6 text-white shadow-xl shadow-zinc-200/50 group"${_scopeId}><div class="relative z-10 space-y-2"${_scopeId}><h1 class="text-2xl font-black tracking-tight leading-none uppercase"${_scopeId}>أداة فحص المحتوى القديم</h1><p class="text-[11px] text-zinc-400 font-medium max-w-2xl leading-relaxed"${_scopeId}> استخدم تقنيات الذكاء الاصطناعي لفحص دوراتك التعليمية واكتشاف التقنيات التي عفا عليها الزمن أو الممارسات البرمجية القديمة للحفاظ على جودة وحداثة منصتك العالمية. </p></div>`);
            _push2(ssrRenderComponent(unref(FileSearch), { class: "absolute -bottom-8 -right-8 h-48 w-48 text-white opacity-[0.03] rotate-12 group-hover:scale-110 transition-transform duration-1000" }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid lg:grid-cols-12 gap-6 items-start"${_scopeId}><div class="lg:col-span-4 space-y-4"${_scopeId}><div class="flex items-center gap-2 mb-2 border-b border-zinc-100 pb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-[12px] font-black uppercase tracking-widest text-zinc-900"${_scopeId}>الكورسات المسجلة</h2></div><div class="grid gap-3"${_scopeId}><!--[-->`);
            ssrRenderList(__props.courses, (course) => {
              var _a;
              _push2(ssrRenderComponent(unref(_sfc_main$3), {
                key: course.id,
                class: [
                  "border-zinc-100 shadow-none bg-white rounded-lg transition-all group cursor-pointer",
                  ((_a = selectedCourse.value) == null ? void 0 : _a.id) === course.id ? "border-zinc-900 ring-1 ring-zinc-900" : "hover:border-zinc-300"
                ],
                onClick: ($event) => scanCourse(course.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-4 flex items-center justify-between" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b, _c, _d, _e, _f;
                        if (_push4) {
                          _push4(`<div class="space-y-1"${_scopeId3}><h3 class="font-black text-[12px] text-zinc-900 line-clamp-1 group-hover:text-zinc-600 transition-colors"${_scopeId3}>${ssrInterpolate(course.title)}</h3><div class="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(course.lessons_count)} درس</span><div class="h-1 w-1 bg-zinc-200 rounded-full"${_scopeId3}></div><span${_scopeId3}>${ssrInterpolate((_a2 = course.category) == null ? void 0 : _a2.name)}</span></div></div><div class="${ssrRenderClass([
                            "h-8 w-8 rounded-lg flex items-center justify-center transition-all",
                            isScanning.value && ((_b = selectedCourse.value) == null ? void 0 : _b.id) === course.id ? "bg-zinc-900 text-white animate-pulse" : "bg-zinc-50 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white"
                          ])}"${_scopeId3}>`);
                          if (isScanning.value && ((_c = selectedCourse.value) == null ? void 0 : _c.id) === course.id) {
                            _push4(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin" }, null, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(unref(Search), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("h3", { class: "font-black text-[12px] text-zinc-900 line-clamp-1 group-hover:text-zinc-600 transition-colors" }, toDisplayString(course.title), 1),
                              createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest" }, [
                                createVNode("span", null, toDisplayString(course.lessons_count) + " درس", 1),
                                createVNode("div", { class: "h-1 w-1 bg-zinc-200 rounded-full" }),
                                createVNode("span", null, toDisplayString((_d = course.category) == null ? void 0 : _d.name), 1)
                              ])
                            ]),
                            createVNode("div", {
                              class: [
                                "h-8 w-8 rounded-lg flex items-center justify-center transition-all",
                                isScanning.value && ((_e = selectedCourse.value) == null ? void 0 : _e.id) === course.id ? "bg-zinc-900 text-white animate-pulse" : "bg-zinc-50 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white"
                              ]
                            }, [
                              isScanning.value && ((_f = selectedCourse.value) == null ? void 0 : _f.id) === course.id ? (openBlock(), createBlock(unref(Loader2), {
                                key: 0,
                                class: "h-4 w-4 animate-spin"
                              })) : (openBlock(), createBlock(unref(Search), {
                                key: 1,
                                class: "h-4 w-4"
                              }))
                            ], 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$4), { class: "p-4 flex items-center justify-between" }, {
                        default: withCtx(() => {
                          var _a2, _b, _c;
                          return [
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("h3", { class: "font-black text-[12px] text-zinc-900 line-clamp-1 group-hover:text-zinc-600 transition-colors" }, toDisplayString(course.title), 1),
                              createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest" }, [
                                createVNode("span", null, toDisplayString(course.lessons_count) + " درس", 1),
                                createVNode("div", { class: "h-1 w-1 bg-zinc-200 rounded-full" }),
                                createVNode("span", null, toDisplayString((_a2 = course.category) == null ? void 0 : _a2.name), 1)
                              ])
                            ]),
                            createVNode("div", {
                              class: [
                                "h-8 w-8 rounded-lg flex items-center justify-center transition-all",
                                isScanning.value && ((_b = selectedCourse.value) == null ? void 0 : _b.id) === course.id ? "bg-zinc-900 text-white animate-pulse" : "bg-zinc-50 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white"
                              ]
                            }, [
                              isScanning.value && ((_c = selectedCourse.value) == null ? void 0 : _c.id) === course.id ? (openBlock(), createBlock(unref(Loader2), {
                                key: 0,
                                class: "h-4 w-4 animate-spin"
                              })) : (openBlock(), createBlock(unref(Search), {
                                key: 1,
                                class: "h-4 w-4"
                              }))
                            ], 2)
                          ];
                        }),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="lg:col-span-8 space-y-4"${_scopeId}><div class="flex items-center justify-between mb-2 border-b border-zinc-100 pb-3"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ShieldAlert), { class: "h-4 w-4 text-zinc-400" }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-[12px] font-black uppercase tracking-widest text-zinc-900"${_scopeId}>تقرير التدقيق التقني</h2></div>`);
            if (scanReport.value) {
              _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                variant: "secondary",
                class: "h-5 text-[9px] font-black uppercase tracking-widest bg-zinc-100 border-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(scanReport.value.length)} ملاحظات مكتشفة`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(scanReport.value.length) + " ملاحظات مكتشفة", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!selectedCourse.value && !isScanning.value) {
              _push2(`<div class="flex flex-col items-center justify-center p-16 border border-dashed border-zinc-200 rounded-xl bg-white text-center min-h-[400px]"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(SearchX), { class: "h-16 w-16 text-zinc-100 mb-4" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[13px] font-black text-zinc-900 uppercase"${_scopeId}>بدء الفحص الذكي</h3><p class="text-[11px] text-zinc-400 font-medium max-w-xs mt-2 leading-relaxed"${_scopeId}>يرجى تحديد كورس من القائمة الجانبية لبدء عملية تحليل المحتوى واكتشاف التقنيات المتقادمة.</p></div>`);
            } else if (isScanning.value) {
              _push2(`<div class="flex flex-col items-center justify-center p-16 border border-zinc-200 rounded-xl bg-white text-center min-h-[400px]"${_scopeId}><div class="relative mb-6"${_scopeId}><div class="h-16 w-16 rounded-full border-4 border-zinc-50 border-t-zinc-900 animate-spin"${_scopeId}></div><div class="absolute inset-0 flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Zap), { class: "h-6 w-6 text-zinc-900" }, null, _parent2, _scopeId));
              _push2(`</div></div><h3 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight"${_scopeId}>جاري مسح وتحليل المحتوى...</h3><p class="text-[11px] text-zinc-400 font-medium mt-2 max-w-sm leading-relaxed"${_scopeId}>يقوم المحرك الذكي الآن بمراجعة نصوص الدروس ومقارنتها بقواعد البيانات الحديثة لاكتشاف أي فجوات تقنية.</p></div>`);
            } else if (scanError.value) {
              _push2(`<div class="p-6 bg-red-50 border border-red-100 rounded-xl text-center"${_scopeId}><div class="inline-flex h-10 w-10 rounded-full bg-red-100 text-red-600 items-center justify-center mb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(AlertTriangle), { class: "h-5 w-5" }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-[13px] font-black text-red-900"${_scopeId}>${ssrInterpolate(scanError.value)}</h3></div>`);
            } else if (scanReport.value) {
              _push2(`<div class="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500"${_scopeId}>`);
              if (scanReport.value.length === 0) {
                _push2(`<div class="p-16 bg-emerald-50/50 border border-emerald-100 rounded-xl text-center"${_scopeId}><div class="inline-flex h-20 w-20 rounded-full bg-white text-emerald-600 items-center justify-center mb-6 shadow-sm"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(CheckCircle2), { class: "h-10 w-10" }, null, _parent2, _scopeId));
                _push2(`</div><h3 class="text-[16px] font-black text-emerald-900 uppercase"${_scopeId}>محتوى حديث وبجودة عالية!</h3><p class="text-[11px] text-emerald-600/70 font-medium max-w-md mx-auto mt-2 leading-relaxed"${_scopeId}>لم يتم اكتشاف أي تقنيات متقادمة أو ممارسات برمجية قديمة في هذا الكورس. استمر في الحفاظ على هذا المعيار.</p></div>`);
              } else {
                _push2(`<div class="grid gap-4"${_scopeId}><!--[-->`);
                ssrRenderList(scanReport.value, (item, idx) => {
                  _push2(ssrRenderComponent(unref(_sfc_main$3), {
                    key: idx,
                    class: "border-zinc-200 shadow-none bg-white rounded-xl overflow-hidden group hover:border-zinc-900 transition-all"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-5 space-y-4" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="flex items-center justify-between border-b border-zinc-50 pb-4"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(_sfc_main$2), {
                                variant: "outline",
                                class: ["h-5 text-[9px] font-black uppercase tracking-widest px-3 border", getSeverityColor(item.severity)]
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(getSeverityText(item.severity))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(getSeverityText(item.severity)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`<div class="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-1.5"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(BookOpen), { class: "h-3 w-3 opacity-40" }, null, _parent4, _scopeId3));
                              _push4(` ${ssrInterpolate(item.lesson)}</div></div><div class="space-y-1.5"${_scopeId3}><h4 class="text-[14px] font-black text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors uppercase tracking-tight"${_scopeId3}>${ssrInterpolate(item.issue)}</h4><p class="text-[11px] text-zinc-400 font-medium leading-relaxed italic"${_scopeId3}>تم الاكتشاف بواسطة محرك الفحص الذكي</p></div><div class="p-4 bg-zinc-50 rounded-lg border border-zinc-100 flex items-start gap-3"${_scopeId3}><div class="h-6 w-6 rounded bg-white flex items-center justify-center shrink-0 shadow-sm"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(Zap), { class: "h-3 w-3 text-zinc-900" }, null, _parent4, _scopeId3));
                              _push4(`</div><div class="space-y-1"${_scopeId3}><span class="text-[10px] font-black text-zinc-900 uppercase tracking-widest"${_scopeId3}>توصية التحديث:</span><p class="text-[12px] text-zinc-600 font-medium leading-relaxed"${_scopeId3}>${ssrInterpolate(item.suggestion)}</p></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center justify-between border-b border-zinc-50 pb-4" }, [
                                  createVNode(unref(_sfc_main$2), {
                                    variant: "outline",
                                    class: ["h-5 text-[9px] font-black uppercase tracking-widest px-3 border", getSeverityColor(item.severity)]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getSeverityText(item.severity)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]),
                                  createVNode("div", { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-1.5" }, [
                                    createVNode(unref(BookOpen), { class: "h-3 w-3 opacity-40" }),
                                    createTextVNode(" " + toDisplayString(item.lesson), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "space-y-1.5" }, [
                                  createVNode("h4", { class: "text-[14px] font-black text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors uppercase tracking-tight" }, toDisplayString(item.issue), 1),
                                  createVNode("p", { class: "text-[11px] text-zinc-400 font-medium leading-relaxed italic" }, "تم الاكتشاف بواسطة محرك الفحص الذكي")
                                ]),
                                createVNode("div", { class: "p-4 bg-zinc-50 rounded-lg border border-zinc-100 flex items-start gap-3" }, [
                                  createVNode("div", { class: "h-6 w-6 rounded bg-white flex items-center justify-center shrink-0 shadow-sm" }, [
                                    createVNode(unref(Zap), { class: "h-3 w-3 text-zinc-900" })
                                  ]),
                                  createVNode("div", { class: "space-y-1" }, [
                                    createVNode("span", { class: "text-[10px] font-black text-zinc-900 uppercase tracking-widest" }, "توصية التحديث:"),
                                    createVNode("p", { class: "text-[12px] text-zinc-600 font-medium leading-relaxed" }, toDisplayString(item.suggestion), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), { class: "p-5 space-y-4" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-between border-b border-zinc-50 pb-4" }, [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "outline",
                                  class: ["h-5 text-[9px] font-black uppercase tracking-widest px-3 border", getSeverityColor(item.severity)]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getSeverityText(item.severity)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"]),
                                createVNode("div", { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-1.5" }, [
                                  createVNode(unref(BookOpen), { class: "h-3 w-3 opacity-40" }),
                                  createTextVNode(" " + toDisplayString(item.lesson), 1)
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode("h4", { class: "text-[14px] font-black text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors uppercase tracking-tight" }, toDisplayString(item.issue), 1),
                                createVNode("p", { class: "text-[11px] text-zinc-400 font-medium leading-relaxed italic" }, "تم الاكتشاف بواسطة محرك الفحص الذكي")
                              ]),
                              createVNode("div", { class: "p-4 bg-zinc-50 rounded-lg border border-zinc-100 flex items-start gap-3" }, [
                                createVNode("div", { class: "h-6 w-6 rounded bg-white flex items-center justify-center shrink-0 shadow-sm" }, [
                                  createVNode(unref(Zap), { class: "h-3 w-3 text-zinc-900" })
                                ]),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode("span", { class: "text-[10px] font-black text-zinc-900 uppercase tracking-widest" }, "توصية التحديث:"),
                                  createVNode("p", { class: "text-[12px] text-zinc-600 font-medium leading-relaxed" }, toDisplayString(item.suggestion), 1)
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
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-zinc-50/20 text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight" }, [
                    createVNode("span", null, "الإدارة"),
                    createVNode(unref(ChevronLeft), { class: "h-3 w-3" }),
                    createVNode("span", { class: "text-zinc-900 font-black" }, "كاشف المحتوى الذكي")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(unref(_sfc_main$2), {
                      variant: "outline",
                      class: "h-5 text-[9px] font-black uppercase tracking-widest border-zinc-200 bg-zinc-50"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("نظام التدقيق AI")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right overflow-y-auto" }, [
                  createVNode("div", { class: "w-full max-w-full mx-auto space-y-6" }, [
                    createVNode("div", { class: "relative overflow-hidden rounded-xl bg-zinc-900 p-6 text-white shadow-xl shadow-zinc-200/50 group" }, [
                      createVNode("div", { class: "relative z-10 space-y-2" }, [
                        createVNode("h1", { class: "text-2xl font-black tracking-tight leading-none uppercase" }, "أداة فحص المحتوى القديم"),
                        createVNode("p", { class: "text-[11px] text-zinc-400 font-medium max-w-2xl leading-relaxed" }, " استخدم تقنيات الذكاء الاصطناعي لفحص دوراتك التعليمية واكتشاف التقنيات التي عفا عليها الزمن أو الممارسات البرمجية القديمة للحفاظ على جودة وحداثة منصتك العالمية. ")
                      ]),
                      createVNode(unref(FileSearch), { class: "absolute -bottom-8 -right-8 h-48 w-48 text-white opacity-[0.03] rotate-12 group-hover:scale-110 transition-transform duration-1000" })
                    ]),
                    createVNode("div", { class: "grid lg:grid-cols-12 gap-6 items-start" }, [
                      createVNode("div", { class: "lg:col-span-4 space-y-4" }, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2 border-b border-zinc-100 pb-3" }, [
                          createVNode(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }),
                          createVNode("h2", { class: "text-[12px] font-black uppercase tracking-widest text-zinc-900" }, "الكورسات المسجلة")
                        ]),
                        createVNode("div", { class: "grid gap-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                            var _a;
                            return openBlock(), createBlock(unref(_sfc_main$3), {
                              key: course.id,
                              class: [
                                "border-zinc-100 shadow-none bg-white rounded-lg transition-all group cursor-pointer",
                                ((_a = selectedCourse.value) == null ? void 0 : _a.id) === course.id ? "border-zinc-900 ring-1 ring-zinc-900" : "hover:border-zinc-300"
                              ],
                              onClick: ($event) => scanCourse(course.id)
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$4), { class: "p-4 flex items-center justify-between" }, {
                                  default: withCtx(() => {
                                    var _a2, _b, _c;
                                    return [
                                      createVNode("div", { class: "space-y-1" }, [
                                        createVNode("h3", { class: "font-black text-[12px] text-zinc-900 line-clamp-1 group-hover:text-zinc-600 transition-colors" }, toDisplayString(course.title), 1),
                                        createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest" }, [
                                          createVNode("span", null, toDisplayString(course.lessons_count) + " درس", 1),
                                          createVNode("div", { class: "h-1 w-1 bg-zinc-200 rounded-full" }),
                                          createVNode("span", null, toDisplayString((_a2 = course.category) == null ? void 0 : _a2.name), 1)
                                        ])
                                      ]),
                                      createVNode("div", {
                                        class: [
                                          "h-8 w-8 rounded-lg flex items-center justify-center transition-all",
                                          isScanning.value && ((_b = selectedCourse.value) == null ? void 0 : _b.id) === course.id ? "bg-zinc-900 text-white animate-pulse" : "bg-zinc-50 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white"
                                        ]
                                      }, [
                                        isScanning.value && ((_c = selectedCourse.value) == null ? void 0 : _c.id) === course.id ? (openBlock(), createBlock(unref(Loader2), {
                                          key: 0,
                                          class: "h-4 w-4 animate-spin"
                                        })) : (openBlock(), createBlock(unref(Search), {
                                          key: 1,
                                          class: "h-4 w-4"
                                        }))
                                      ], 2)
                                    ];
                                  }),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "lg:col-span-8 space-y-4" }, [
                        createVNode("div", { class: "flex items-center justify-between mb-2 border-b border-zinc-100 pb-3" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(unref(ShieldAlert), { class: "h-4 w-4 text-zinc-400" }),
                            createVNode("h2", { class: "text-[12px] font-black uppercase tracking-widest text-zinc-900" }, "تقرير التدقيق التقني")
                          ]),
                          scanReport.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(unref(_sfc_main$2), {
                              variant: "secondary",
                              class: "h-5 text-[9px] font-black uppercase tracking-widest bg-zinc-100 border-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(scanReport.value.length) + " ملاحظات مكتشفة", 1)
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ]),
                        !selectedCourse.value && !isScanning.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-col items-center justify-center p-16 border border-dashed border-zinc-200 rounded-xl bg-white text-center min-h-[400px]"
                        }, [
                          createVNode(unref(SearchX), { class: "h-16 w-16 text-zinc-100 mb-4" }),
                          createVNode("h3", { class: "text-[13px] font-black text-zinc-900 uppercase" }, "بدء الفحص الذكي"),
                          createVNode("p", { class: "text-[11px] text-zinc-400 font-medium max-w-xs mt-2 leading-relaxed" }, "يرجى تحديد كورس من القائمة الجانبية لبدء عملية تحليل المحتوى واكتشاف التقنيات المتقادمة.")
                        ])) : isScanning.value ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex flex-col items-center justify-center p-16 border border-zinc-200 rounded-xl bg-white text-center min-h-[400px]"
                        }, [
                          createVNode("div", { class: "relative mb-6" }, [
                            createVNode("div", { class: "h-16 w-16 rounded-full border-4 border-zinc-50 border-t-zinc-900 animate-spin" }),
                            createVNode("div", { class: "absolute inset-0 flex items-center justify-center" }, [
                              createVNode(unref(Zap), { class: "h-6 w-6 text-zinc-900" })
                            ])
                          ]),
                          createVNode("h3", { class: "text-[14px] font-black text-zinc-900 uppercase tracking-tight" }, "جاري مسح وتحليل المحتوى..."),
                          createVNode("p", { class: "text-[11px] text-zinc-400 font-medium mt-2 max-w-sm leading-relaxed" }, "يقوم المحرك الذكي الآن بمراجعة نصوص الدروس ومقارنتها بقواعد البيانات الحديثة لاكتشاف أي فجوات تقنية.")
                        ])) : scanError.value ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "p-6 bg-red-50 border border-red-100 rounded-xl text-center"
                        }, [
                          createVNode("div", { class: "inline-flex h-10 w-10 rounded-full bg-red-100 text-red-600 items-center justify-center mb-3" }, [
                            createVNode(unref(AlertTriangle), { class: "h-5 w-5" })
                          ]),
                          createVNode("h3", { class: "text-[13px] font-black text-red-900" }, toDisplayString(scanError.value), 1)
                        ])) : scanReport.value ? (openBlock(), createBlock("div", {
                          key: 3,
                          class: "space-y-4 animate-in fade-in slide-in-from-top-4 duration-500"
                        }, [
                          scanReport.value.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "p-16 bg-emerald-50/50 border border-emerald-100 rounded-xl text-center"
                          }, [
                            createVNode("div", { class: "inline-flex h-20 w-20 rounded-full bg-white text-emerald-600 items-center justify-center mb-6 shadow-sm" }, [
                              createVNode(unref(CheckCircle2), { class: "h-10 w-10" })
                            ]),
                            createVNode("h3", { class: "text-[16px] font-black text-emerald-900 uppercase" }, "محتوى حديث وبجودة عالية!"),
                            createVNode("p", { class: "text-[11px] text-emerald-600/70 font-medium max-w-md mx-auto mt-2 leading-relaxed" }, "لم يتم اكتشاف أي تقنيات متقادمة أو ممارسات برمجية قديمة في هذا الكورس. استمر في الحفاظ على هذا المعيار.")
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "grid gap-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(scanReport.value, (item, idx) => {
                              return openBlock(), createBlock(unref(_sfc_main$3), {
                                key: idx,
                                class: "border-zinc-200 shadow-none bg-white rounded-xl overflow-hidden group hover:border-zinc-900 transition-all"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$4), { class: "p-5 space-y-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center justify-between border-b border-zinc-50 pb-4" }, [
                                        createVNode(unref(_sfc_main$2), {
                                          variant: "outline",
                                          class: ["h-5 text-[9px] font-black uppercase tracking-widest px-3 border", getSeverityColor(item.severity)]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(getSeverityText(item.severity)), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"]),
                                        createVNode("div", { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-1.5" }, [
                                          createVNode(unref(BookOpen), { class: "h-3 w-3 opacity-40" }),
                                          createTextVNode(" " + toDisplayString(item.lesson), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "space-y-1.5" }, [
                                        createVNode("h4", { class: "text-[14px] font-black text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors uppercase tracking-tight" }, toDisplayString(item.issue), 1),
                                        createVNode("p", { class: "text-[11px] text-zinc-400 font-medium leading-relaxed italic" }, "تم الاكتشاف بواسطة محرك الفحص الذكي")
                                      ]),
                                      createVNode("div", { class: "p-4 bg-zinc-50 rounded-lg border border-zinc-100 flex items-start gap-3" }, [
                                        createVNode("div", { class: "h-6 w-6 rounded bg-white flex items-center justify-center shrink-0 shadow-sm" }, [
                                          createVNode(unref(Zap), { class: "h-3 w-3 text-zinc-900" })
                                        ]),
                                        createVNode("div", { class: "space-y-1" }, [
                                          createVNode("span", { class: "text-[10px] font-black text-zinc-900 uppercase tracking-widest" }, "توصية التحديث:"),
                                          createVNode("p", { class: "text-[12px] text-zinc-600 font-medium leading-relaxed" }, toDisplayString(item.suggestion), 1)
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
                        ])) : createCommentVNode("", true)
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ContentScanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
