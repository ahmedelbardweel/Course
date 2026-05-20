import { ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BAtzIAbQ.js";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, a as _sfc_main$6 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { PlayCircle, Map, TrendingUp, BookOpen, CheckCircle2, Trophy, Calendar, ArrowRight, Target, Loader2 } from "lucide-vue-next";
import { _ as _sfc_main$7 } from "./CourseCard-BG67mtO9.js";
import axios from "axios";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "reka-ui";
import "./index-CGK-4kfq.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    courses: Array,
    stats: Object,
    learningGoal: String
  },
  setup(__props) {
    const props = __props;
    const showRoadmapModal = ref(false);
    const isGeneratingRoadmap = ref(false);
    const roadmapResult = ref(null);
    const roadmapForm = ref({
      goal: props.learningGoal || "",
      level: "beginner",
      time: "ساعتين يومياً"
    });
    const generateRoadmap = async () => {
      var _a, _b;
      isGeneratingRoadmap.value = true;
      try {
        const response = await axios.post(route("ai.roadmap"), roadmapForm.value);
        roadmapResult.value = response.data.roadmap;
        showRoadmapModal.value = false;
      } catch (error) {
        alert(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) || "حدث خطأ أثناء الإنشاء");
      } finally {
        isGeneratingRoadmap.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "لوحة التحكم" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` لوحة التحكم `);
          } else {
            return [
              createTextVNode(" لوحة التحكم ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="bg-zinc-950 text-white dark:bg-white dark:text-black p-5 relative overflow-hidden rounded-xl border border-zinc-800 dark:border-zinc-200"${_scopeId}><div class="relative z-10"${_scopeId}><h1 class="text-xl font-black tracking-tight"${_scopeId}>أهلاً بك، ${ssrInterpolate(_ctx.$page.props.auth.user.name)} 👋</h1><p class="mt-1.5 text-zinc-400 dark:text-zinc-600 text-xs max-w-xl"${_scopeId}>${ssrInterpolate(__props.learningGoal ? `هدفك: ${__props.learningGoal}. نحن هنا لمساعدتك!` : "ابدأ رحلتك التعليمية واستكشف آفاقاً جديدة.")}</p><div class="mt-4 flex flex-wrap gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              size: "sm",
              class: "bg-white text-black hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800 font-bold gap-1.5 text-xs h-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` استكمال التعلم `);
                  _push3(ssrRenderComponent(unref(PlayCircle), { class: "h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" استكمال التعلم "),
                    createVNode(unref(PlayCircle), { class: "h-3.5 w-3.5" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              onClick: ($event) => showRoadmapModal.value = true,
              size: "sm",
              class: "bg-indigo-600 text-white hover:bg-indigo-700 font-bold gap-1.5 border-none text-xs h-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Map), { class: "h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                  _push3(` خارطة طريق ذكية `);
                } else {
                  return [
                    createVNode(unref(Map), { class: "h-3.5 w-3.5" }),
                    createTextVNode(" خارطة طريق ذكية ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(TrendingUp), { class: "absolute bottom-[-20%] right-[-5%] h-40 w-40 opacity-10 rotate-12" }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-3 grid-cols-2 lg:grid-cols-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
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
                        _push4(ssrRenderComponent(unref(BookOpen), { class: "h-3.5 w-3.5 text-zinc-400" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("الكورسات")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(BookOpen), { class: "h-3.5 w-3.5 text-zinc-400" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold"${_scopeId3}>${ssrInterpolate(((_a = __props.stats) == null ? void 0 : _a.enrolled_courses) ?? 0)}</div><p class="text-[9px] text-zinc-400 mt-0.5"${_scopeId3}>كورس مشترك</p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_b = __props.stats) == null ? void 0 : _b.enrolled_courses) ?? 0), 1),
                          createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "كورس مشترك")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                          default: withCtx(() => [
                            createTextVNode("الكورسات")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(BookOpen), { class: "h-3.5 w-3.5 text-zinc-400" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_a = __props.stats) == null ? void 0 : _a.enrolled_courses) ?? 0), 1),
                          createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "كورس مشترك")
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`الدروس`);
                            } else {
                              return [
                                createTextVNode("الدروس")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(CheckCircle2), { class: "h-3.5 w-3.5 text-zinc-400" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("الدروس")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(CheckCircle2), { class: "h-3.5 w-3.5 text-zinc-400" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold"${_scopeId3}>${ssrInterpolate(((_a = __props.stats) == null ? void 0 : _a.completed_lessons) ?? 0)}</div><p class="text-[9px] text-zinc-400 mt-0.5"${_scopeId3}>درس مكتمل</p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_b = __props.stats) == null ? void 0 : _b.completed_lessons) ?? 0), 1),
                          createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "درس مكتمل")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                          default: withCtx(() => [
                            createTextVNode("الدروس")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(CheckCircle2), { class: "h-3.5 w-3.5 text-zinc-400" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_a = __props.stats) == null ? void 0 : _a.completed_lessons) ?? 0), 1),
                          createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "درس مكتمل")
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`ساعات التعلم`);
                            } else {
                              return [
                                createTextVNode("ساعات التعلم")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TrendingUp), { class: "h-3.5 w-3.5 text-zinc-400" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("ساعات التعلم")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TrendingUp), { class: "h-3.5 w-3.5 text-zinc-400" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold"${_scopeId3}>${ssrInterpolate(((_a = __props.stats) == null ? void 0 : _a.learning_hours) ?? "0.0")}</div><p class="text-[9px] text-zinc-400 mt-0.5"${_scopeId3}>هذا الأسبوع</p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_b = __props.stats) == null ? void 0 : _b.learning_hours) ?? "0.0"), 1),
                          createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "هذا الأسبوع")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                          default: withCtx(() => [
                            createTextVNode("ساعات التعلم")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TrendingUp), { class: "h-3.5 w-3.5 text-zinc-400" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_a = __props.stats) == null ? void 0 : _a.learning_hours) ?? "0.0"), 1),
                          createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "هذا الأسبوع")
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg bg-zinc-50 dark:bg-zinc-900" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`النقاط`);
                            } else {
                              return [
                                createTextVNode("النقاط")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Trophy), { class: "h-3.5 w-3.5 text-yellow-500" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("النقاط")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Trophy), { class: "h-3.5 w-3.5 text-yellow-500" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<div class="text-2xl font-bold"${_scopeId3}>${ssrInterpolate(((_a = __props.stats) == null ? void 0 : _a.points) ?? 150)}</div><p class="text-[9px] text-zinc-400 mt-0.5"${_scopeId3}>مستوى: مبتدئ</p>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_b = __props.stats) == null ? void 0 : _b.points) ?? 150), 1),
                          createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "مستوى: مبتدئ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                          default: withCtx(() => [
                            createTextVNode("النقاط")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Trophy), { class: "h-3.5 w-3.5 text-yellow-500" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_a = __props.stats) == null ? void 0 : _a.points) ?? 150), 1),
                          createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "مستوى: مبتدئ")
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (roadmapResult.value) {
              _push2(`<div class="bg-white dark:bg-zinc-950 border border-indigo-100 dark:border-indigo-900 rounded-xl p-5 relative overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500"${_scopeId}><div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"${_scopeId}></div><div class="flex items-center gap-3 mb-6"${_scopeId}><div class="h-9 w-9 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 rounded-lg flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Map), { class: "h-5 w-5" }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><h2 class="text-base font-black text-indigo-950 dark:text-white"${_scopeId}>خارطة طريقك المخصصة</h2><p class="text-indigo-600/80 text-xs font-bold mt-0.5"${_scopeId}>بناءً على هدفك ومستواك</p></div></div><div class="relative border-r-2 border-indigo-100 dark:border-indigo-900/50 pr-5 space-y-5"${_scopeId}><!--[-->`);
              ssrRenderList(roadmapResult.value, (phase, index) => {
                var _a;
                _push2(`<div class="relative"${_scopeId}><div class="absolute -right-[29px] top-1 w-4 h-4 bg-white dark:bg-zinc-950 border-4 border-indigo-500 rounded-full"${_scopeId}></div><div class="bg-indigo-50/50 dark:bg-zinc-900/50 rounded-lg p-4 border border-indigo-50 dark:border-zinc-800"${_scopeId}><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 text-[10px] font-black mb-3"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Calendar), { class: "h-3 w-3" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(phase.week)}</span><h3 class="text-sm font-bold mb-1.5 text-zinc-900 dark:text-white"${_scopeId}>${ssrInterpolate(phase.title)}</h3><p class="text-zinc-500 text-xs leading-relaxed mb-3"${_scopeId}>${ssrInterpolate(phase.description)}</p>`);
                if ((_a = phase.recommended_courses) == null ? void 0 : _a.length) {
                  _push2(`<div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
                  ssrRenderList(phase.recommended_courses, (course, cIdx) => {
                    _push2(`<span class="px-2 py-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-[10px] font-bold"${_scopeId}>${ssrInterpolate(course)}</span>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-3"${_scopeId}><div class="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2"${_scopeId}><div${_scopeId}><h2 class="text-sm font-bold tracking-tight"${_scopeId}>مقترح لك</h2><p class="text-[10px] text-zinc-400 mt-0.5"${_scopeId}>كورسات تناسب هدفك التعليمي</p></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("courses.index"),
              class: "text-[10px] font-bold flex items-center gap-0.5 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` تصفح الكل `);
                  _push3(ssrRenderComponent(unref(ArrowRight), { class: "h-3 w-3" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" تصفح الكل "),
                    createVNode(unref(ArrowRight), { class: "h-3 w-3" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.courses, (course) => {
              _push2(ssrRenderComponent(_sfc_main$7, {
                key: course.id,
                id: course.id,
                slug: course.slug,
                title: course.title,
                description: course.description,
                price: course.price + "$",
                category: course.category.name,
                thumbnail: course.thumbnail
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div>`);
            if (showRoadmapModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm"${_scopeId}><div class="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"${_scopeId}><div class="p-4 border-b border-zinc-100 dark:border-zinc-900 flex justify-between items-center"${_scopeId}><h2 class="text-sm font-black"${_scopeId}>تفاصيل خارطة الطريق</h2><button class="text-zinc-400 hover:text-black dark:hover:text-white text-xs font-bold"${_scopeId}>إلغاء</button></div><div class="p-4 space-y-4"${_scopeId}><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Target), { class: "h-3.5 w-3.5 text-indigo-500" }, null, _parent2, _scopeId));
              _push2(` ما هو هدفك التعليمي؟ </label><input${ssrRenderAttr("value", roadmapForm.value.goal)} type="text" placeholder="مثال: أريد أن أصبح مطور ويب" class="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none"${_scopeId}></div><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold"${_scopeId}>مستواك الحالي</label><div class="grid grid-cols-3 gap-1.5"${_scopeId}><button class="${ssrRenderClass(["p-1.5 rounded-lg text-[10px] font-bold border-2 transition-all", roadmapForm.value.level === "beginner" ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30" : "border-zinc-200 dark:border-zinc-800 text-zinc-500"])}"${_scopeId}>مبتدئ</button><button class="${ssrRenderClass(["p-1.5 rounded-lg text-[10px] font-bold border-2 transition-all", roadmapForm.value.level === "intermediate" ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30" : "border-zinc-200 dark:border-zinc-800 text-zinc-500"])}"${_scopeId}>متوسط</button><button class="${ssrRenderClass(["p-1.5 rounded-lg text-[10px] font-bold border-2 transition-all", roadmapForm.value.level === "advanced" ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30" : "border-zinc-200 dark:border-zinc-800 text-zinc-500"])}"${_scopeId}>متقدم</button></div></div><div class="space-y-1.5"${_scopeId}><label class="text-xs font-bold flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Calendar), { class: "h-3.5 w-3.5 text-indigo-500" }, null, _parent2, _scopeId));
              _push2(` الوقت المتاح </label><input${ssrRenderAttr("value", roadmapForm.value.time)} type="text" placeholder="مثال: ساعتين يومياً" class="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none"${_scopeId}></div></div><div class="p-4 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                onClick: generateRoadmap,
                disabled: isGeneratingRoadmap.value || !roadmapForm.value.goal,
                class: "w-full bg-indigo-600 text-white hover:bg-indigo-700 h-9 text-xs rounded-lg font-bold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (isGeneratingRoadmap.value) {
                      _push3(ssrRenderComponent(unref(Loader2), { class: "h-3.5 w-3.5 animate-spin ml-1.5" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(Map), { class: "h-3.5 w-3.5 ml-1.5" }, null, _parent3, _scopeId2));
                    }
                    _push3(` ${ssrInterpolate(isGeneratingRoadmap.value ? "جاري رسم الخطة..." : "ارسم الخطة الآن")}`);
                  } else {
                    return [
                      isGeneratingRoadmap.value ? (openBlock(), createBlock(unref(Loader2), {
                        key: 0,
                        class: "h-3.5 w-3.5 animate-spin ml-1.5"
                      })) : (openBlock(), createBlock(unref(Map), {
                        key: 1,
                        class: "h-3.5 w-3.5 ml-1.5"
                      })),
                      createTextVNode(" " + toDisplayString(isGeneratingRoadmap.value ? "جاري رسم الخطة..." : "ارسم الخطة الآن"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "bg-zinc-950 text-white dark:bg-white dark:text-black p-5 relative overflow-hidden rounded-xl border border-zinc-800 dark:border-zinc-200" }, [
                  createVNode("div", { class: "relative z-10" }, [
                    createVNode("h1", { class: "text-xl font-black tracking-tight" }, "أهلاً بك، " + toDisplayString(_ctx.$page.props.auth.user.name) + " 👋", 1),
                    createVNode("p", { class: "mt-1.5 text-zinc-400 dark:text-zinc-600 text-xs max-w-xl" }, toDisplayString(__props.learningGoal ? `هدفك: ${__props.learningGoal}. نحن هنا لمساعدتك!` : "ابدأ رحلتك التعليمية واستكشف آفاقاً جديدة."), 1),
                    createVNode("div", { class: "mt-4 flex flex-wrap gap-2" }, [
                      createVNode(unref(_sfc_main$2), {
                        size: "sm",
                        class: "bg-white text-black hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800 font-bold gap-1.5 text-xs h-8"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" استكمال التعلم "),
                          createVNode(unref(PlayCircle), { class: "h-3.5 w-3.5" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$2), {
                        onClick: ($event) => showRoadmapModal.value = true,
                        size: "sm",
                        class: "bg-indigo-600 text-white hover:bg-indigo-700 font-bold gap-1.5 border-none text-xs h-8"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Map), { class: "h-3.5 w-3.5" }),
                          createTextVNode(" خارطة طريق ذكية ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ]),
                  createVNode(unref(TrendingUp), { class: "absolute bottom-[-20%] right-[-5%] h-40 w-40 opacity-10 rotate-12" })
                ]),
                createVNode("div", { class: "grid gap-3 grid-cols-2 lg:grid-cols-4" }, [
                  createVNode(unref(_sfc_main$3), { class: "border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("الكورسات")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(BookOpen), { class: "h-3.5 w-3.5 text-zinc-400" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_a = __props.stats) == null ? void 0 : _a.enrolled_courses) ?? 0), 1),
                            createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "كورس مشترك")
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3), { class: "border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("الدروس")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(CheckCircle2), { class: "h-3.5 w-3.5 text-zinc-400" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_a = __props.stats) == null ? void 0 : _a.completed_lessons) ?? 0), 1),
                            createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "درس مكتمل")
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3), { class: "border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("ساعات التعلم")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TrendingUp), { class: "h-3.5 w-3.5 text-zinc-400" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_a = __props.stats) == null ? void 0 : _a.learning_hours) ?? "0.0"), 1),
                            createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "هذا الأسبوع")
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3), { class: "border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg bg-zinc-50 dark:bg-zinc-900" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$4), { class: "flex flex-row items-center justify-between p-3 pb-1" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("النقاط")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Trophy), { class: "h-3.5 w-3.5 text-yellow-500" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), { class: "p-3 pt-0" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("div", { class: "text-2xl font-bold" }, toDisplayString(((_a = __props.stats) == null ? void 0 : _a.points) ?? 150), 1),
                            createVNode("p", { class: "text-[9px] text-zinc-400 mt-0.5" }, "مستوى: مبتدئ")
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                roadmapResult.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "bg-white dark:bg-zinc-950 border border-indigo-100 dark:border-indigo-900 rounded-xl p-5 relative overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
                }, [
                  createVNode("div", { class: "absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" }),
                  createVNode("div", { class: "flex items-center gap-3 mb-6" }, [
                    createVNode("div", { class: "h-9 w-9 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 rounded-lg flex items-center justify-center" }, [
                      createVNode(unref(Map), { class: "h-5 w-5" })
                    ]),
                    createVNode("div", null, [
                      createVNode("h2", { class: "text-base font-black text-indigo-950 dark:text-white" }, "خارطة طريقك المخصصة"),
                      createVNode("p", { class: "text-indigo-600/80 text-xs font-bold mt-0.5" }, "بناءً على هدفك ومستواك")
                    ])
                  ]),
                  createVNode("div", { class: "relative border-r-2 border-indigo-100 dark:border-indigo-900/50 pr-5 space-y-5" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(roadmapResult.value, (phase, index) => {
                      var _a;
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "relative"
                      }, [
                        createVNode("div", { class: "absolute -right-[29px] top-1 w-4 h-4 bg-white dark:bg-zinc-950 border-4 border-indigo-500 rounded-full" }),
                        createVNode("div", { class: "bg-indigo-50/50 dark:bg-zinc-900/50 rounded-lg p-4 border border-indigo-50 dark:border-zinc-800" }, [
                          createVNode("span", { class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 text-[10px] font-black mb-3" }, [
                            createVNode(unref(Calendar), { class: "h-3 w-3" }),
                            createTextVNode(" " + toDisplayString(phase.week), 1)
                          ]),
                          createVNode("h3", { class: "text-sm font-bold mb-1.5 text-zinc-900 dark:text-white" }, toDisplayString(phase.title), 1),
                          createVNode("p", { class: "text-zinc-500 text-xs leading-relaxed mb-3" }, toDisplayString(phase.description), 1),
                          ((_a = phase.recommended_courses) == null ? void 0 : _a.length) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-wrap gap-1.5"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(phase.recommended_courses, (course, cIdx) => {
                              return openBlock(), createBlock("span", {
                                key: cIdx,
                                class: "px-2 py-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-[10px] font-bold"
                              }, toDisplayString(course), 1);
                            }), 128))
                          ])) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "space-y-3" }, [
                  createVNode("div", { class: "flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2" }, [
                    createVNode("div", null, [
                      createVNode("h2", { class: "text-sm font-bold tracking-tight" }, "مقترح لك"),
                      createVNode("p", { class: "text-[10px] text-zinc-400 mt-0.5" }, "كورسات تناسب هدفك التعليمي")
                    ]),
                    createVNode(unref(Link), {
                      href: _ctx.route("courses.index"),
                      class: "text-[10px] font-bold flex items-center gap-0.5 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" تصفح الكل "),
                        createVNode(unref(ArrowRight), { class: "h-3 w-3" })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("div", { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                      return openBlock(), createBlock(_sfc_main$7, {
                        key: course.id,
                        id: course.id,
                        slug: course.slug,
                        title: course.title,
                        description: course.description,
                        price: course.price + "$",
                        category: course.category.name,
                        thumbnail: course.thumbnail
                      }, null, 8, ["id", "slug", "title", "description", "price", "category", "thumbnail"]);
                    }), 128))
                  ])
                ])
              ]),
              showRoadmapModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm"
              }, [
                createVNode("div", { class: "bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200" }, [
                  createVNode("div", { class: "p-4 border-b border-zinc-100 dark:border-zinc-900 flex justify-between items-center" }, [
                    createVNode("h2", { class: "text-sm font-black" }, "تفاصيل خارطة الطريق"),
                    createVNode("button", {
                      onClick: ($event) => showRoadmapModal.value = false,
                      class: "text-zinc-400 hover:text-black dark:hover:text-white text-xs font-bold"
                    }, "إلغاء", 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "p-4 space-y-4" }, [
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-xs font-bold flex items-center gap-1.5" }, [
                        createVNode(unref(Target), { class: "h-3.5 w-3.5 text-indigo-500" }),
                        createTextVNode(" ما هو هدفك التعليمي؟ ")
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => roadmapForm.value.goal = $event,
                        type: "text",
                        placeholder: "مثال: أريد أن أصبح مطور ويب",
                        class: "w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, roadmapForm.value.goal]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-xs font-bold" }, "مستواك الحالي"),
                      createVNode("div", { class: "grid grid-cols-3 gap-1.5" }, [
                        createVNode("button", {
                          onClick: ($event) => roadmapForm.value.level = "beginner",
                          class: ["p-1.5 rounded-lg text-[10px] font-bold border-2 transition-all", roadmapForm.value.level === "beginner" ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30" : "border-zinc-200 dark:border-zinc-800 text-zinc-500"]
                        }, "مبتدئ", 10, ["onClick"]),
                        createVNode("button", {
                          onClick: ($event) => roadmapForm.value.level = "intermediate",
                          class: ["p-1.5 rounded-lg text-[10px] font-bold border-2 transition-all", roadmapForm.value.level === "intermediate" ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30" : "border-zinc-200 dark:border-zinc-800 text-zinc-500"]
                        }, "متوسط", 10, ["onClick"]),
                        createVNode("button", {
                          onClick: ($event) => roadmapForm.value.level = "advanced",
                          class: ["p-1.5 rounded-lg text-[10px] font-bold border-2 transition-all", roadmapForm.value.level === "advanced" ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30" : "border-zinc-200 dark:border-zinc-800 text-zinc-500"]
                        }, "متقدم", 10, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("label", { class: "text-xs font-bold flex items-center gap-1.5" }, [
                        createVNode(unref(Calendar), { class: "h-3.5 w-3.5 text-indigo-500" }),
                        createTextVNode(" الوقت المتاح ")
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => roadmapForm.value.time = $event,
                        type: "text",
                        placeholder: "مثال: ساعتين يومياً",
                        class: "w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, roadmapForm.value.time]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "p-4 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900" }, [
                    createVNode(unref(_sfc_main$2), {
                      onClick: generateRoadmap,
                      disabled: isGeneratingRoadmap.value || !roadmapForm.value.goal,
                      class: "w-full bg-indigo-600 text-white hover:bg-indigo-700 h-9 text-xs rounded-lg font-bold"
                    }, {
                      default: withCtx(() => [
                        isGeneratingRoadmap.value ? (openBlock(), createBlock(unref(Loader2), {
                          key: 0,
                          class: "h-3.5 w-3.5 animate-spin ml-1.5"
                        })) : (openBlock(), createBlock(unref(Map), {
                          key: 1,
                          class: "h-3.5 w-3.5 ml-1.5"
                        })),
                        createTextVNode(" " + toDisplayString(isGeneratingRoadmap.value ? "جاري رسم الخطة..." : "ارسم الخطة الآن"), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
