import { computed, mergeProps, useSSRContext, ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AuthenticatedLayout-CtY-O8y9.js";
import { Head, Link } from "@inertiajs/vue3";
import { Sparkles, Plus, Folder, GraduationCap, Users, PlayCircle, HelpCircle, Edit, ChevronUp, ChevronDown, Award, Calendar, TrendingUp, DollarSign, Activity, Target, BookOpen, ArrowUpRight, ChevronLeft } from "lucide-vue-next";
import { _ as _sfc_main$3 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7, a as _sfc_main$8, e as _sfc_main$9 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$4 } from "./index-CGK-4kfq.js";
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
    chart_data: Array,
    courses: Array
  },
  setup(__props) {
    const expandedCourses = ref({});
    const toggleLessons = (courseId) => {
      expandedCourses.value[courseId] = !expandedCourses.value[courseId];
    };
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "لوحة تحكم المعلم الفاخرة" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}><span${_scopeId}>لوحة التحكم</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-950 font-black"${_scopeId}>المعلم</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight" }, [
                createVNode("span", null, "لوحة التحكم"),
                createVNode(unref(ChevronLeft), { class: "h-3 w-3" }),
                createVNode("span", { class: "text-zinc-950 font-black" }, "المعلم")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full space-y-8 max-w-7xl mx-auto text-right pb-12"${_scopeId}><section class="relative bg-white border border-zinc-200/80 rounded-2xl p-6 lg:p-8 overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"${_scopeId}><div class="absolute inset-0 bg-[radial-gradient(#f4f4f5_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none"${_scopeId}></div><div class="space-y-2 relative z-10"${_scopeId}><div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-zinc-200 bg-zinc-50 text-[10px] font-bold text-zinc-500 shadow-sm mb-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Sparkles), { class: "h-3 w-3 text-zinc-950" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>لوحة التحكم المحدثة للمعلم</span></div><h1 class="text-2xl font-black text-zinc-950 tracking-tight"${_scopeId}>أهلاً بك مجدداً، ${ssrInterpolate(_ctx.$page.props.auth.user.name)}!</h1><p class="text-[11px] text-zinc-400 max-w-xl font-medium leading-relaxed"${_scopeId}> تابع تقدم طلابك، وعمّق أثر محتواك التعليمي، وصمم مسارات التعلم الأكثر طلباً مستعيناً بأحدث أدوات إدارة الكورسات الذكية والتقارير المالية المتقنة. </p></div><div class="relative z-10 flex gap-2 shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.courses.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), {
                    size: "lg",
                    class: "h-10 px-6 bg-zinc-950 text-white hover:bg-zinc-900 rounded-md font-bold text-xs flex items-center gap-2 transition-all active:scale-[0.98] shadow-sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Plus), { class: "h-3.5 w-3.5" }, null, _parent4, _scopeId3));
                        _push4(` إنشاء كورس جديد `);
                      } else {
                        return [
                          createVNode(unref(Plus), { class: "h-3.5 w-3.5" }),
                          createTextVNode(" إنشاء كورس جديد ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), {
                      size: "lg",
                      class: "h-10 px-6 bg-zinc-950 text-white hover:bg-zinc-900 rounded-md font-bold text-xs flex items-center gap-2 transition-all active:scale-[0.98] shadow-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Plus), { class: "h-3.5 w-3.5" }),
                        createTextVNode(" إنشاء كورس جديد ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section><section class="space-y-4"${_scopeId}><div class="flex items-center justify-between border-b border-zinc-200 pb-3"${_scopeId}><div${_scopeId}><h2 class="text-[14px] font-black text-zinc-900 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Folder), { class: "h-4.5 w-4.5 text-zinc-400" }, null, _parent2, _scopeId));
            _push2(` إدارة كورساتك ومناهج الدروس </h2><p class="text-[10px] text-zinc-400 mt-0.5"${_scopeId}>استعراض جميع الكورسات التي أنشأتها وتفاصيل دروسها مباشرة.</p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              variant: "secondary",
              class: "h-5 text-[9px] font-bold bg-zinc-100 text-zinc-900 border-none px-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.courses.length)} كورس إجمالي `);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.courses.length) + " كورس إجمالي ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.courses.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 bg-white/50 backdrop-blur-sm rounded-xl"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(GraduationCap), { class: "h-12 w-12 text-zinc-200 mb-3" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[12px] font-bold text-zinc-800"${_scopeId}>لم تقم بإنشاء أي كورس بعد</h3><p class="text-[10px] text-zinc-400 mb-5"${_scopeId}>ابدأ الآن بإضافة أول كورس تعليمي لتبدأ رحلتك.</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("teacher.courses.create")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), {
                      variant: "outline",
                      size: "sm",
                      class: "h-8 text-[11px] font-black border-zinc-200 px-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`إنشاء أول كورس`);
                        } else {
                          return [
                            createTextVNode("إنشاء أول كورس")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$3), {
                        variant: "outline",
                        size: "sm",
                        class: "h-8 text-[11px] font-black border-zinc-200 px-6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("إنشاء أول كورس")
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
              _push2(`<div class="grid grid-cols-1 gap-5"${_scopeId}><!--[-->`);
              ssrRenderList(__props.courses, (course) => {
                _push2(ssrRenderComponent(unref(_sfc_main$5), {
                  key: course.id,
                  class: "border-zinc-200/80 shadow-none bg-white hover:border-zinc-400 transition-all duration-300 rounded-xl overflow-hidden group flex flex-col"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b;
                    if (_push3) {
                      _push3(`<div class="flex flex-col lg:flex-row"${_scopeId2}><div class="lg:w-72 aspect-video lg:aspect-auto lg:h-44 relative bg-zinc-50 border-b lg:border-b-0 lg:border-l border-zinc-100 overflow-hidden shrink-0"${_scopeId2}>`);
                      if (course.thumbnail) {
                        _push3(`<img${ssrRenderAttr("src", course.thumbnail)} class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-750 ease-out"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="w-full h-full flex items-center justify-center text-zinc-200"${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(GraduationCap), { class: "h-12 w-12 opacity-35" }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      }
                      _push3(`<div class="absolute top-3 left-3 flex flex-wrap gap-1"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$4), {
                        variant: course.is_published ? "default" : "outline",
                        class: "h-4.5 text-[8px] font-black uppercase tracking-widest px-2 shadow-sm rounded"
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
                      _push3(`</div><div class="absolute bottom-3 right-3"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$4), {
                        variant: "secondary",
                        class: "h-4.5 text-[8px] font-bold px-2 bg-white/90 backdrop-blur-sm border-none text-zinc-900 rounded"
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
                      _push3(`</div></div><div class="flex-1 p-5 flex flex-col justify-between space-y-4"${_scopeId2}><div class="space-y-1.5"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><span class="text-[9px] font-black text-zinc-400 uppercase tracking-widest"${_scopeId2}>${ssrInterpolate(((_a = course.category) == null ? void 0 : _a.name) || "عام")}</span><div class="text-[11px] font-extrabold text-zinc-900"${_scopeId2}>${ssrInterpolate(course.price > 0 ? "$" + course.price : "مجاني")}</div></div><h3 class="text-[14px] font-bold text-zinc-900 line-clamp-1 group-hover:text-zinc-950 transition-colors"${_scopeId2}>${ssrInterpolate(course.title)}</h3><p class="text-[10.5px] text-zinc-400 line-clamp-2 leading-relaxed"${_scopeId2}>${ssrInterpolate(course.description)}</p></div><div class="flex flex-wrap items-center gap-3 pt-2 border-t border-zinc-50"${_scopeId2}><div class="flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(Users), { class: "h-3.5 w-3.5 text-zinc-400" }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(course.users_count || 0)} طالب</span></div><div class="flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(PlayCircle), { class: "h-3.5 w-3.5 text-zinc-400" }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(course.lessons_count || 0)} درس</span></div><div class="flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(HelpCircle), { class: "h-3.5 w-3.5 text-zinc-400" }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(course.quizzes_count || 0)} اختبار</span></div><div class="mr-auto flex items-center gap-1.5"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("teacher.courses.edit", course.id)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(_sfc_main$3), {
                              variant: "outline",
                              size: "sm",
                              class: "h-7 text-[10px] px-3 font-bold border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-all active:scale-[0.97]"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(Edit), { class: "h-3 w-3 ml-1" }, null, _parent5, _scopeId4));
                                  _push5(` تعديل `);
                                } else {
                                  return [
                                    createVNode(unref(Edit), { class: "h-3 w-3 ml-1" }),
                                    createTextVNode(" تعديل ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(_sfc_main$3), {
                                variant: "outline",
                                size: "sm",
                                class: "h-7 text-[10px] px-3 font-bold border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-all active:scale-[0.97]"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Edit), { class: "h-3 w-3 ml-1" }),
                                  createTextVNode(" تعديل ")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$3), {
                        onClick: ($event) => toggleLessons(course.id),
                        variant: "ghost",
                        size: "sm",
                        class: "h-7 text-[10px] px-3 font-black text-zinc-600 hover:text-zinc-900 rounded-md bg-zinc-50/50 hover:bg-zinc-100/60 transition-all flex items-center gap-1"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(expandedCourses.value[course.id] ? "إخفاء الدروس" : "استعراض الدروس")}</span>`);
                            if (expandedCourses.value[course.id]) {
                              _push4(ssrRenderComponent(unref(ChevronUp), { class: "h-3 w-3" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(ssrRenderComponent(unref(ChevronDown), { class: "h-3 w-3" }, null, _parent4, _scopeId3));
                            }
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(expandedCourses.value[course.id] ? "إخفاء الدروس" : "استعراض الدروس"), 1),
                              expandedCourses.value[course.id] ? (openBlock(), createBlock(unref(ChevronUp), {
                                key: 0,
                                class: "h-3 w-3"
                              })) : (openBlock(), createBlock(unref(ChevronDown), {
                                key: 1,
                                class: "h-3 w-3"
                              }))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div></div></div>`);
                      if (expandedCourses.value[course.id]) {
                        _push3(`<div class="px-5 pb-5 pt-3 border-t border-zinc-100 bg-zinc-50/30 animate-in fade-in slide-in-from-top-2 duration-300"${_scopeId2}><div class="flex items-center gap-2 mb-3.5"${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(Award), { class: "h-4 w-4 text-zinc-400" }, null, _parent3, _scopeId2));
                        _push3(`<span class="text-[10px] font-black text-zinc-400 uppercase tracking-widest"${_scopeId2}>منهج الدروس بالتفصيل:</span></div>`);
                        if (course.lessons && course.lessons.length > 0) {
                          _push3(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"${_scopeId2}><!--[-->`);
                          ssrRenderList(course.lessons, (lesson, idx) => {
                            _push3(`<div class="p-2.5 rounded-lg bg-white border border-zinc-200/60 hover:border-zinc-900/40 hover:shadow-xs transition-all duration-200 flex items-center justify-between group/lesson"${_scopeId2}><div class="flex items-center gap-2.5 min-w-0"${_scopeId2}><div class="h-5 w-5 bg-zinc-950 text-white text-[9px] font-black rounded-md flex items-center justify-center shrink-0 shadow-sm select-none"${_scopeId2}>${ssrInterpolate(idx + 1)}</div><div class="min-w-0"${_scopeId2}><div class="text-[10.5px] font-bold text-zinc-800 line-clamp-1 group-hover/lesson:text-zinc-950 transition-colors"${_scopeId2}>${ssrInterpolate(lesson.title)}</div><div class="text-[8px] text-zinc-400 font-medium flex items-center gap-1 mt-0.5"${_scopeId2}>`);
                            _push3(ssrRenderComponent(unref(Calendar), { class: "h-2 w-2" }, null, _parent3, _scopeId2));
                            _push3(` ${ssrInterpolate(new Date(lesson.created_at || Date.now()).toLocaleDateString("ar-EG"))}</div></div></div><div class="shrink-0 flex items-center gap-1.5"${_scopeId2}>`);
                            _push3(ssrRenderComponent(unref(_sfc_main$4), {
                              variant: "outline",
                              class: "h-4 text-[7px] font-bold bg-zinc-50 border-zinc-100/80 text-zinc-400"
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(` موضع ${ssrInterpolate(lesson.position)}`);
                                } else {
                                  return [
                                    createTextVNode(" موضع " + toDisplayString(lesson.position), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                            _push3(`</div></div>`);
                          });
                          _push3(`<!--]--></div>`);
                        } else {
                          _push3(`<div class="flex flex-col items-center justify-center py-6 text-center"${_scopeId2}>`);
                          _push3(ssrRenderComponent(unref(PlayCircle), { class: "h-7 w-7 text-zinc-200 mb-1.5" }, null, _parent3, _scopeId2));
                          _push3(`<div class="text-[10px] font-bold text-zinc-400"${_scopeId2}>لا توجد دروس في هذا الكورس حتى الآن</div>`);
                          _push3(ssrRenderComponent(unref(Link), {
                            href: _ctx.route("teacher.lessons.create", course.id),
                            class: "mt-2 text-[9px] font-black text-zinc-950 hover:underline"
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(` + أضف أول درس الآن `);
                              } else {
                                return [
                                  createTextVNode(" + أضف أول درس الآن ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                          _push3(`</div>`);
                        }
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col lg:flex-row" }, [
                          createVNode("div", { class: "lg:w-72 aspect-video lg:aspect-auto lg:h-44 relative bg-zinc-50 border-b lg:border-b-0 lg:border-l border-zinc-100 overflow-hidden shrink-0" }, [
                            course.thumbnail ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: course.thumbnail,
                              class: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-750 ease-out"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "w-full h-full flex items-center justify-center text-zinc-200"
                            }, [
                              createVNode(unref(GraduationCap), { class: "h-12 w-12 opacity-35" })
                            ])),
                            createVNode("div", { class: "absolute top-3 left-3 flex flex-wrap gap-1" }, [
                              createVNode(unref(_sfc_main$4), {
                                variant: course.is_published ? "default" : "outline",
                                class: "h-4.5 text-[8px] font-black uppercase tracking-widest px-2 shadow-sm rounded"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(course.is_published ? "منشور" : "مسودة"), 1)
                                ]),
                                _: 2
                              }, 1032, ["variant"])
                            ]),
                            createVNode("div", { class: "absolute bottom-3 right-3" }, [
                              createVNode(unref(_sfc_main$4), {
                                variant: "secondary",
                                class: "h-4.5 text-[8px] font-bold px-2 bg-white/90 backdrop-blur-sm border-none text-zinc-900 rounded"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(getLevelBadge(course.level)), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          createVNode("div", { class: "flex-1 p-5 flex flex-col justify-between space-y-4" }, [
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, toDisplayString(((_b = course.category) == null ? void 0 : _b.name) || "عام"), 1),
                                createVNode("div", { class: "text-[11px] font-extrabold text-zinc-900" }, toDisplayString(course.price > 0 ? "$" + course.price : "مجاني"), 1)
                              ]),
                              createVNode("h3", { class: "text-[14px] font-bold text-zinc-900 line-clamp-1 group-hover:text-zinc-950 transition-colors" }, toDisplayString(course.title), 1),
                              createVNode("p", { class: "text-[10.5px] text-zinc-400 line-clamp-2 leading-relaxed" }, toDisplayString(course.description), 1)
                            ]),
                            createVNode("div", { class: "flex flex-wrap items-center gap-3 pt-2 border-t border-zinc-50" }, [
                              createVNode("div", { class: "flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100" }, [
                                createVNode(unref(Users), { class: "h-3.5 w-3.5 text-zinc-400" }),
                                createVNode("span", null, toDisplayString(course.users_count || 0) + " طالب", 1)
                              ]),
                              createVNode("div", { class: "flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100" }, [
                                createVNode(unref(PlayCircle), { class: "h-3.5 w-3.5 text-zinc-400" }),
                                createVNode("span", null, toDisplayString(course.lessons_count || 0) + " درس", 1)
                              ]),
                              createVNode("div", { class: "flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100" }, [
                                createVNode(unref(HelpCircle), { class: "h-3.5 w-3.5 text-zinc-400" }),
                                createVNode("span", null, toDisplayString(course.quizzes_count || 0) + " اختبار", 1)
                              ]),
                              createVNode("div", { class: "mr-auto flex items-center gap-1.5" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("teacher.courses.edit", course.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$3), {
                                      variant: "outline",
                                      size: "sm",
                                      class: "h-7 text-[10px] px-3 font-bold border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-all active:scale-[0.97]"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Edit), { class: "h-3 w-3 ml-1" }),
                                        createTextVNode(" تعديل ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(unref(_sfc_main$3), {
                                  onClick: ($event) => toggleLessons(course.id),
                                  variant: "ghost",
                                  size: "sm",
                                  class: "h-7 text-[10px] px-3 font-black text-zinc-600 hover:text-zinc-900 rounded-md bg-zinc-50/50 hover:bg-zinc-100/60 transition-all flex items-center gap-1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(expandedCourses.value[course.id] ? "إخفاء الدروس" : "استعراض الدروس"), 1),
                                    expandedCourses.value[course.id] ? (openBlock(), createBlock(unref(ChevronUp), {
                                      key: 0,
                                      class: "h-3 w-3"
                                    })) : (openBlock(), createBlock(unref(ChevronDown), {
                                      key: 1,
                                      class: "h-3 w-3"
                                    }))
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ])
                            ])
                          ])
                        ]),
                        expandedCourses.value[course.id] ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "px-5 pb-5 pt-3 border-t border-zinc-100 bg-zinc-50/30 animate-in fade-in slide-in-from-top-2 duration-300"
                        }, [
                          createVNode("div", { class: "flex items-center gap-2 mb-3.5" }, [
                            createVNode(unref(Award), { class: "h-4 w-4 text-zinc-400" }),
                            createVNode("span", { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, "منهج الدروس بالتفصيل:")
                          ]),
                          course.lessons && course.lessons.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(course.lessons, (lesson, idx) => {
                              return openBlock(), createBlock("div", {
                                key: lesson.id,
                                class: "p-2.5 rounded-lg bg-white border border-zinc-200/60 hover:border-zinc-900/40 hover:shadow-xs transition-all duration-200 flex items-center justify-between group/lesson"
                              }, [
                                createVNode("div", { class: "flex items-center gap-2.5 min-w-0" }, [
                                  createVNode("div", { class: "h-5 w-5 bg-zinc-950 text-white text-[9px] font-black rounded-md flex items-center justify-center shrink-0 shadow-sm select-none" }, toDisplayString(idx + 1), 1),
                                  createVNode("div", { class: "min-w-0" }, [
                                    createVNode("div", { class: "text-[10.5px] font-bold text-zinc-800 line-clamp-1 group-hover/lesson:text-zinc-950 transition-colors" }, toDisplayString(lesson.title), 1),
                                    createVNode("div", { class: "text-[8px] text-zinc-400 font-medium flex items-center gap-1 mt-0.5" }, [
                                      createVNode(unref(Calendar), { class: "h-2 w-2" }),
                                      createTextVNode(" " + toDisplayString(new Date(lesson.created_at || Date.now()).toLocaleDateString("ar-EG")), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "shrink-0 flex items-center gap-1.5" }, [
                                  createVNode(unref(_sfc_main$4), {
                                    variant: "outline",
                                    class: "h-4 text-[7px] font-bold bg-zinc-50 border-zinc-100/80 text-zinc-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" موضع " + toDisplayString(lesson.position), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]);
                            }), 128))
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "flex flex-col items-center justify-center py-6 text-center"
                          }, [
                            createVNode(unref(PlayCircle), { class: "h-7 w-7 text-zinc-200 mb-1.5" }),
                            createVNode("div", { class: "text-[10px] font-bold text-zinc-400" }, "لا توجد دروس في هذا الكورس حتى الآن"),
                            createVNode(unref(Link), {
                              href: _ctx.route("teacher.lessons.create", course.id),
                              class: "mt-2 text-[9px] font-black text-zinc-950 hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" + أضف أول درس الآن ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]))
                        ])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</section><section class="space-y-4 pt-4 border-t border-zinc-200/60"${_scopeId}><div class="border-b border-zinc-200 pb-3"${_scopeId}><h2 class="text-[14px] font-black text-zinc-900 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(TrendingUp), { class: "h-4.5 w-4.5 text-zinc-400" }, null, _parent2, _scopeId));
            _push2(` لوحة الإحصائيات والأداء العام </h2><p class="text-[10px] text-zinc-400 mt-0.5"${_scopeId}>تقارير إجمالية حول الأداء المالي، المشاهدات والطلاب المسجلين.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
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
                        _push4(`<div class="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(DollarSign), { class: "h-4.5 w-4.5" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("إجمالي الإيرادات")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold" }, [
                            createVNode(unref(DollarSign), { class: "h-4.5 w-4.5" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>$${ssrInterpolate(__props.stats.total_revenue)}</div><div class="flex items-center gap-1 mt-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          variant: "secondary",
                          class: "h-4 text-[8px] font-black bg-emerald-50 text-emerald-600 border-none px-1 rounded"
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
                        _push4(`<span class="text-[9px] text-zinc-400 font-bold"${_scopeId3}>منذ الشهر الماضي</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.stats.total_revenue), 1),
                          createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                            createVNode(unref(_sfc_main$4), {
                              variant: "secondary",
                              class: "h-4 text-[8px] font-black bg-emerald-50 text-emerald-600 border-none px-1 rounded"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("+20.1%")
                              ]),
                              _: 1
                            }),
                            createVNode("span", { class: "text-[9px] text-zinc-400 font-bold" }, "منذ الشهر الماضي")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("إجمالي الإيرادات")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold" }, [
                          createVNode(unref(DollarSign), { class: "h-4.5 w-4.5" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.stats.total_revenue), 1),
                        createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                          createVNode(unref(_sfc_main$4), {
                            variant: "secondary",
                            class: "h-4 text-[8px] font-black bg-emerald-50 text-emerald-600 border-none px-1 rounded"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("+20.1%")
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "text-[9px] text-zinc-400 font-bold" }, "منذ الشهر الماضي")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
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
                        _push4(`<div class="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Users), { class: "h-4.5 w-4.5" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("الطلاب الجدد")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold" }, [
                            createVNode(unref(Users), { class: "h-4.5 w-4.5" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>${ssrInterpolate(__props.stats.total_students)}</div><div class="flex items-center gap-1 mt-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$4), {
                          variant: "secondary",
                          class: "h-4 text-[8px] font-black bg-blue-50 text-blue-600 border-none px-1 rounded"
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
                        _push4(`<span class="text-[9px] text-zinc-400 font-bold"${_scopeId3}>معدل الانضمام</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_students), 1),
                          createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                            createVNode(unref(_sfc_main$4), {
                              variant: "secondary",
                              class: "h-4 text-[8px] font-black bg-blue-50 text-blue-600 border-none px-1 rounded"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("+18%")
                              ]),
                              _: 1
                            }),
                            createVNode("span", { class: "text-[9px] text-zinc-400 font-bold" }, "معدل الانضمام")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("الطلاب الجدد")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold" }, [
                          createVNode(unref(Users), { class: "h-4.5 w-4.5" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_students), 1),
                        createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                          createVNode(unref(_sfc_main$4), {
                            variant: "secondary",
                            class: "h-4 text-[8px] font-black bg-blue-50 text-blue-600 border-none px-1 rounded"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("+18%")
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "text-[9px] text-zinc-400 font-bold" }, "معدل الانضمام")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`الكورسات الإجمالية`);
                            } else {
                              return [
                                createTextVNode("الكورسات الإجمالية")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(GraduationCap), { class: "h-4.5 w-4.5" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("الكورسات الإجمالية")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold" }, [
                            createVNode(unref(GraduationCap), { class: "h-4.5 w-4.5" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>${ssrInterpolate(__props.stats.total_courses)}</div><div class="flex items-center gap-1.5 mt-1 text-[9px] text-zinc-400 font-bold"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Activity), { class: "h-3 w-3 text-purple-400" }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>تحديثات مستمرة ومنشورة</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_courses), 1),
                          createVNode("div", { class: "flex items-center gap-1.5 mt-1 text-[9px] text-zinc-400 font-bold" }, [
                            createVNode(unref(Activity), { class: "h-3 w-3 text-purple-400" }),
                            createVNode("span", null, "تحديثات مستمرة ومنشورة")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("الكورسات الإجمالية")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold" }, [
                          createVNode(unref(GraduationCap), { class: "h-4.5 w-4.5" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_courses), 1),
                        createVNode("div", { class: "flex items-center gap-1.5 mt-1 text-[9px] text-zinc-400 font-bold" }, [
                          createVNode(unref(Activity), { class: "h-3 w-3 text-purple-400" }),
                          createVNode("span", null, "تحديثات مستمرة ومنشورة")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`المشاهدات والدروس`);
                            } else {
                              return [
                                createTextVNode("المشاهدات والدروس")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(PlayCircle), { class: "h-4.5 w-4.5" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("المشاهدات والدروس")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold" }, [
                            createVNode(unref(PlayCircle), { class: "h-4.5 w-4.5" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-2xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>${ssrInterpolate(__props.stats.total_lessons)}</div><div class="flex items-center gap-1 mt-1 text-[9px] text-zinc-400 font-black uppercase tracking-widest"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(TrendingUp), { class: "h-3 w-3 text-amber-500 ml-1.5" }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>نشاط تفاعلي متصاعد</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_lessons), 1),
                          createVNode("div", { class: "flex items-center gap-1 mt-1 text-[9px] text-zinc-400 font-black uppercase tracking-widest" }, [
                            createVNode(unref(TrendingUp), { class: "h-3 w-3 text-amber-500 ml-1.5" }),
                            createVNode("span", null, "نشاط تفاعلي متصاعد")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                          default: withCtx(() => [
                            createTextVNode("المشاهدات والدروس")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold" }, [
                          createVNode(unref(PlayCircle), { class: "h-4.5 w-4.5" })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_lessons), 1),
                        createVNode("div", { class: "flex items-center gap-1 mt-1 text-[9px] text-zinc-400 font-black uppercase tracking-widest" }, [
                          createVNode(unref(TrendingUp), { class: "h-3 w-3 text-amber-500 ml-1.5" }),
                          createVNode("span", null, "نشاط تفاعلي متصاعد")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section><section class="grid grid-cols-1 lg:grid-cols-3 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "lg:col-span-2 border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300 overflow-hidden flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-5 border-b border-zinc-100 flex flex-row items-center justify-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[12px] font-black flex items-center gap-2 text-zinc-900 uppercase tracking-tight" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Target), { class: "h-4 w-4 text-zinc-400" }, null, _parent5, _scopeId4));
                              _push5(` تحليل المبيعات والأرباح الأسبوعية `);
                            } else {
                              return [
                                createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" }),
                                createTextVNode(" تحليل المبيعات والأرباح الأسبوعية ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[9.5px] mt-0.5 text-zinc-400" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`حجم الأرباح الصافية خلال الـ 7 أيام المنصرمة.`);
                            } else {
                              return [
                                createTextVNode("حجم الأرباح الصافية خلال الـ 7 أيام المنصرمة.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$7), { class: "text-[12px] font-black flex items-center gap-2 text-zinc-900 uppercase tracking-tight" }, {
                              default: withCtx(() => [
                                createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" }),
                                createTextVNode(" تحليل المبيعات والأرباح الأسبوعية ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$9), { class: "text-[9.5px] mt-0.5 text-zinc-400" }, {
                              default: withCtx(() => [
                                createTextVNode("حجم الأرباح الصافية خلال الـ 7 أيام المنصرمة.")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "p-5 flex-1 min-h-[300px] flex items-end" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, {
                          data: __props.chart_data,
                          class: "w-full h-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, {
                            data: __props.chart_data,
                            class: "w-full h-full"
                          }, null, 8, ["data"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "p-5 border-b border-zinc-100 flex flex-row items-center justify-between" }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(unref(_sfc_main$7), { class: "text-[12px] font-black flex items-center gap-2 text-zinc-900 uppercase tracking-tight" }, {
                            default: withCtx(() => [
                              createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" }),
                              createTextVNode(" تحليل المبيعات والأرباح الأسبوعية ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), { class: "text-[9.5px] mt-0.5 text-zinc-400" }, {
                            default: withCtx(() => [
                              createTextVNode("حجم الأرباح الصافية خلال الـ 7 أيام المنصرمة.")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "p-5 flex-1 min-h-[300px] flex items-end" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, {
                          data: __props.chart_data,
                          class: "w-full h-full"
                        }, null, 8, ["data"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300 overflow-hidden flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-5 border-b border-zinc-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[12px] font-black flex items-center gap-2 text-zinc-900 uppercase tracking-tight" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }, null, _parent5, _scopeId4));
                              _push5(` النشاط الأخير للكورسات `);
                            } else {
                              return [
                                createVNode(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }),
                                createTextVNode(" النشاط الأخير للكورسات ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[9.5px] mt-0.5 text-zinc-400" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`آخر التحديثات والإيرادات المحققة مؤخراً.`);
                            } else {
                              return [
                                createTextVNode("آخر التحديثات والإيرادات المحققة مؤخراً.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), { class: "text-[12px] font-black flex items-center gap-2 text-zinc-900 uppercase tracking-tight" }, {
                            default: withCtx(() => [
                              createVNode(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }),
                              createTextVNode(" النشاط الأخير للكورسات ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), { class: "text-[9.5px] mt-0.5 text-zinc-400" }, {
                            default: withCtx(() => [
                              createTextVNode("آخر التحديثات والإيرادات المحققة مؤخراً.")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "p-0 flex-1 overflow-y-auto divide-y divide-zinc-50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(__props.latest_courses, (course) => {
                          _push4(`<div class="p-3.5 flex items-center justify-between hover:bg-zinc-50/50 transition-all group"${_scopeId3}><div class="flex items-center gap-3 min-w-0"${_scopeId3}><div class="h-9 w-12 rounded border border-zinc-100 overflow-hidden shrink-0 shadow-xs bg-zinc-50 flex items-center justify-center"${_scopeId3}>`);
                          if (course.thumbnail) {
                            _push4(`<img${ssrRenderAttr("src", course.thumbnail)} class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"${_scopeId3}>`);
                          } else {
                            _push4(ssrRenderComponent(unref(GraduationCap), { class: "h-5 w-5 text-zinc-300" }, null, _parent4, _scopeId3));
                          }
                          _push4(`</div><div class="min-w-0"${_scopeId3}><div class="text-[10.5px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors"${_scopeId3}>${ssrInterpolate(course.title)}</div><div class="text-[8.5px] text-zinc-400 font-bold flex items-center gap-1.5 mt-0.5"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Users), { class: "h-3 w-3 opacity-55" }, null, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(course.users_count)} طالب </div></div></div><div class="text-[10.5px] font-black text-emerald-600 shrink-0 font-sans"${_scopeId3}> +$${ssrInterpolate((course.price * 0.7).toFixed(2))}</div></div>`);
                        });
                        _push4(`<!--]-->`);
                        if (__props.latest_courses.length === 0) {
                          _push4(`<div class="flex flex-col items-center justify-center py-12 text-center text-zinc-400 text-[10px]"${_scopeId3}> لا توجد بيانات متاحة حالياً </div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.latest_courses, (course) => {
                            return openBlock(), createBlock("div", {
                              key: course.id,
                              class: "p-3.5 flex items-center justify-between hover:bg-zinc-50/50 transition-all group"
                            }, [
                              createVNode("div", { class: "flex items-center gap-3 min-w-0" }, [
                                createVNode("div", { class: "h-9 w-12 rounded border border-zinc-100 overflow-hidden shrink-0 shadow-xs bg-zinc-50 flex items-center justify-center" }, [
                                  course.thumbnail ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: course.thumbnail,
                                    class: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock(unref(GraduationCap), {
                                    key: 1,
                                    class: "h-5 w-5 text-zinc-300"
                                  }))
                                ]),
                                createVNode("div", { class: "min-w-0" }, [
                                  createVNode("div", { class: "text-[10.5px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors" }, toDisplayString(course.title), 1),
                                  createVNode("div", { class: "text-[8.5px] text-zinc-400 font-bold flex items-center gap-1.5 mt-0.5" }, [
                                    createVNode(unref(Users), { class: "h-3 w-3 opacity-55" }),
                                    createTextVNode(" " + toDisplayString(course.users_count) + " طالب ", 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "text-[10.5px] font-black text-emerald-600 shrink-0 font-sans" }, " +$" + toDisplayString((course.price * 0.7).toFixed(2)), 1)
                            ]);
                          }), 128)),
                          __props.latest_courses.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-col items-center justify-center py-12 text-center text-zinc-400 text-[10px]"
                          }, " لا توجد بيانات متاحة حالياً ")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="p-3.5 bg-zinc-50/40 border-t border-zinc-50 text-center shrink-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("teacher.courses.index")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$3), {
                          variant: "ghost",
                          size: "sm",
                          class: "h-7 w-full text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 hover:bg-white transition-all"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` استعراض كافة الكورسات `);
                              _push5(ssrRenderComponent(unref(ArrowUpRight), { class: "h-3 w-3 mr-1" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" استعراض كافة الكورسات "),
                                createVNode(unref(ArrowUpRight), { class: "h-3 w-3 mr-1" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$3), {
                            variant: "ghost",
                            size: "sm",
                            class: "h-7 w-full text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 hover:bg-white transition-all"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" استعراض كافة الكورسات "),
                              createVNode(unref(ArrowUpRight), { class: "h-3 w-3 mr-1" })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "p-5 border-b border-zinc-100" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), { class: "text-[12px] font-black flex items-center gap-2 text-zinc-900 uppercase tracking-tight" }, {
                          default: withCtx(() => [
                            createVNode(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }),
                            createTextVNode(" النشاط الأخير للكورسات ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), { class: "text-[9.5px] mt-0.5 text-zinc-400" }, {
                          default: withCtx(() => [
                            createTextVNode("آخر التحديثات والإيرادات المحققة مؤخراً.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "p-0 flex-1 overflow-y-auto divide-y divide-zinc-50" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.latest_courses, (course) => {
                          return openBlock(), createBlock("div", {
                            key: course.id,
                            class: "p-3.5 flex items-center justify-between hover:bg-zinc-50/50 transition-all group"
                          }, [
                            createVNode("div", { class: "flex items-center gap-3 min-w-0" }, [
                              createVNode("div", { class: "h-9 w-12 rounded border border-zinc-100 overflow-hidden shrink-0 shadow-xs bg-zinc-50 flex items-center justify-center" }, [
                                course.thumbnail ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: course.thumbnail,
                                  class: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                }, null, 8, ["src"])) : (openBlock(), createBlock(unref(GraduationCap), {
                                  key: 1,
                                  class: "h-5 w-5 text-zinc-300"
                                }))
                              ]),
                              createVNode("div", { class: "min-w-0" }, [
                                createVNode("div", { class: "text-[10.5px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors" }, toDisplayString(course.title), 1),
                                createVNode("div", { class: "text-[8.5px] text-zinc-400 font-bold flex items-center gap-1.5 mt-0.5" }, [
                                  createVNode(unref(Users), { class: "h-3 w-3 opacity-55" }),
                                  createTextVNode(" " + toDisplayString(course.users_count) + " طالب ", 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "text-[10.5px] font-black text-emerald-600 shrink-0 font-sans" }, " +$" + toDisplayString((course.price * 0.7).toFixed(2)), 1)
                          ]);
                        }), 128)),
                        __props.latest_courses.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-col items-center justify-center py-12 text-center text-zinc-400 text-[10px]"
                        }, " لا توجد بيانات متاحة حالياً ")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "p-3.5 bg-zinc-50/40 border-t border-zinc-50 text-center shrink-0" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("teacher.courses.index")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), {
                            variant: "ghost",
                            size: "sm",
                            class: "h-7 w-full text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 hover:bg-white transition-all"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" استعراض كافة الكورسات "),
                              createVNode(unref(ArrowUpRight), { class: "h-3 w-3 mr-1" })
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
            }, _parent2, _scopeId));
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full space-y-8 max-w-7xl mx-auto text-right pb-12" }, [
                createVNode("section", { class: "relative bg-white border border-zinc-200/80 rounded-2xl p-6 lg:p-8 overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-6" }, [
                  createVNode("div", { class: "absolute inset-0 bg-[radial-gradient(#f4f4f5_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" }),
                  createVNode("div", { class: "space-y-2 relative z-10" }, [
                    createVNode("div", { class: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-zinc-200 bg-zinc-50 text-[10px] font-bold text-zinc-500 shadow-sm mb-1" }, [
                      createVNode(unref(Sparkles), { class: "h-3 w-3 text-zinc-950" }),
                      createVNode("span", null, "لوحة التحكم المحدثة للمعلم")
                    ]),
                    createVNode("h1", { class: "text-2xl font-black text-zinc-950 tracking-tight" }, "أهلاً بك مجدداً، " + toDisplayString(_ctx.$page.props.auth.user.name) + "!", 1),
                    createVNode("p", { class: "text-[11px] text-zinc-400 max-w-xl font-medium leading-relaxed" }, " تابع تقدم طلابك، وعمّق أثر محتواك التعليمي، وصمم مسارات التعلم الأكثر طلباً مستعيناً بأحدث أدوات إدارة الكورسات الذكية والتقارير المالية المتقنة. ")
                  ]),
                  createVNode("div", { class: "relative z-10 flex gap-2 shrink-0" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("teacher.courses.create")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), {
                          size: "lg",
                          class: "h-10 px-6 bg-zinc-950 text-white hover:bg-zinc-900 rounded-md font-bold text-xs flex items-center gap-2 transition-all active:scale-[0.98] shadow-sm"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Plus), { class: "h-3.5 w-3.5" }),
                            createTextVNode(" إنشاء كورس جديد ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ]),
                createVNode("section", { class: "space-y-4" }, [
                  createVNode("div", { class: "flex items-center justify-between border-b border-zinc-200 pb-3" }, [
                    createVNode("div", null, [
                      createVNode("h2", { class: "text-[14px] font-black text-zinc-900 flex items-center gap-2" }, [
                        createVNode(unref(Folder), { class: "h-4.5 w-4.5 text-zinc-400" }),
                        createTextVNode(" إدارة كورساتك ومناهج الدروس ")
                      ]),
                      createVNode("p", { class: "text-[10px] text-zinc-400 mt-0.5" }, "استعراض جميع الكورسات التي أنشأتها وتفاصيل دروسها مباشرة.")
                    ]),
                    createVNode(unref(_sfc_main$4), {
                      variant: "secondary",
                      class: "h-5 text-[9px] font-bold bg-zinc-100 text-zinc-900 border-none px-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.courses.length) + " كورس إجمالي ", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  __props.courses.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col items-center justify-center py-20 border border-dashed border-zinc-200 bg-white/50 backdrop-blur-sm rounded-xl"
                  }, [
                    createVNode(unref(GraduationCap), { class: "h-12 w-12 text-zinc-200 mb-3" }),
                    createVNode("h3", { class: "text-[12px] font-bold text-zinc-800" }, "لم تقم بإنشاء أي كورس بعد"),
                    createVNode("p", { class: "text-[10px] text-zinc-400 mb-5" }, "ابدأ الآن بإضافة أول كورس تعليمي لتبدأ رحلتك."),
                    createVNode(unref(Link), {
                      href: _ctx.route("teacher.courses.create")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), {
                          variant: "outline",
                          size: "sm",
                          class: "h-8 text-[11px] font-black border-zinc-200 px-6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("إنشاء أول كورس")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-1 gap-5"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                      return openBlock(), createBlock(unref(_sfc_main$5), {
                        key: course.id,
                        class: "border-zinc-200/80 shadow-none bg-white hover:border-zinc-400 transition-all duration-300 rounded-xl overflow-hidden group flex flex-col"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("div", { class: "flex flex-col lg:flex-row" }, [
                              createVNode("div", { class: "lg:w-72 aspect-video lg:aspect-auto lg:h-44 relative bg-zinc-50 border-b lg:border-b-0 lg:border-l border-zinc-100 overflow-hidden shrink-0" }, [
                                course.thumbnail ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: course.thumbnail,
                                  class: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-750 ease-out"
                                }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "w-full h-full flex items-center justify-center text-zinc-200"
                                }, [
                                  createVNode(unref(GraduationCap), { class: "h-12 w-12 opacity-35" })
                                ])),
                                createVNode("div", { class: "absolute top-3 left-3 flex flex-wrap gap-1" }, [
                                  createVNode(unref(_sfc_main$4), {
                                    variant: course.is_published ? "default" : "outline",
                                    class: "h-4.5 text-[8px] font-black uppercase tracking-widest px-2 shadow-sm rounded"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(course.is_published ? "منشور" : "مسودة"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["variant"])
                                ]),
                                createVNode("div", { class: "absolute bottom-3 right-3" }, [
                                  createVNode(unref(_sfc_main$4), {
                                    variant: "secondary",
                                    class: "h-4.5 text-[8px] font-bold px-2 bg-white/90 backdrop-blur-sm border-none text-zinc-900 rounded"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getLevelBadge(course.level)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              createVNode("div", { class: "flex-1 p-5 flex flex-col justify-between space-y-4" }, [
                                createVNode("div", { class: "space-y-1.5" }, [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("span", { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, toDisplayString(((_a = course.category) == null ? void 0 : _a.name) || "عام"), 1),
                                    createVNode("div", { class: "text-[11px] font-extrabold text-zinc-900" }, toDisplayString(course.price > 0 ? "$" + course.price : "مجاني"), 1)
                                  ]),
                                  createVNode("h3", { class: "text-[14px] font-bold text-zinc-900 line-clamp-1 group-hover:text-zinc-950 transition-colors" }, toDisplayString(course.title), 1),
                                  createVNode("p", { class: "text-[10.5px] text-zinc-400 line-clamp-2 leading-relaxed" }, toDisplayString(course.description), 1)
                                ]),
                                createVNode("div", { class: "flex flex-wrap items-center gap-3 pt-2 border-t border-zinc-50" }, [
                                  createVNode("div", { class: "flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100" }, [
                                    createVNode(unref(Users), { class: "h-3.5 w-3.5 text-zinc-400" }),
                                    createVNode("span", null, toDisplayString(course.users_count || 0) + " طالب", 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100" }, [
                                    createVNode(unref(PlayCircle), { class: "h-3.5 w-3.5 text-zinc-400" }),
                                    createVNode("span", null, toDisplayString(course.lessons_count || 0) + " درس", 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md text-[10px] text-zinc-600 font-bold border border-zinc-100" }, [
                                    createVNode(unref(HelpCircle), { class: "h-3.5 w-3.5 text-zinc-400" }),
                                    createVNode("span", null, toDisplayString(course.quizzes_count || 0) + " اختبار", 1)
                                  ]),
                                  createVNode("div", { class: "mr-auto flex items-center gap-1.5" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("teacher.courses.edit", course.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$3), {
                                          variant: "outline",
                                          size: "sm",
                                          class: "h-7 text-[10px] px-3 font-bold border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 rounded-md transition-all active:scale-[0.97]"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Edit), { class: "h-3 w-3 ml-1" }),
                                            createTextVNode(" تعديل ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["href"]),
                                    createVNode(unref(_sfc_main$3), {
                                      onClick: ($event) => toggleLessons(course.id),
                                      variant: "ghost",
                                      size: "sm",
                                      class: "h-7 text-[10px] px-3 font-black text-zinc-600 hover:text-zinc-900 rounded-md bg-zinc-50/50 hover:bg-zinc-100/60 transition-all flex items-center gap-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(expandedCourses.value[course.id] ? "إخفاء الدروس" : "استعراض الدروس"), 1),
                                        expandedCourses.value[course.id] ? (openBlock(), createBlock(unref(ChevronUp), {
                                          key: 0,
                                          class: "h-3 w-3"
                                        })) : (openBlock(), createBlock(unref(ChevronDown), {
                                          key: 1,
                                          class: "h-3 w-3"
                                        }))
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])
                                ])
                              ])
                            ]),
                            expandedCourses.value[course.id] ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "px-5 pb-5 pt-3 border-t border-zinc-100 bg-zinc-50/30 animate-in fade-in slide-in-from-top-2 duration-300"
                            }, [
                              createVNode("div", { class: "flex items-center gap-2 mb-3.5" }, [
                                createVNode(unref(Award), { class: "h-4 w-4 text-zinc-400" }),
                                createVNode("span", { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, "منهج الدروس بالتفصيل:")
                              ]),
                              course.lessons && course.lessons.length > 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(course.lessons, (lesson, idx) => {
                                  return openBlock(), createBlock("div", {
                                    key: lesson.id,
                                    class: "p-2.5 rounded-lg bg-white border border-zinc-200/60 hover:border-zinc-900/40 hover:shadow-xs transition-all duration-200 flex items-center justify-between group/lesson"
                                  }, [
                                    createVNode("div", { class: "flex items-center gap-2.5 min-w-0" }, [
                                      createVNode("div", { class: "h-5 w-5 bg-zinc-950 text-white text-[9px] font-black rounded-md flex items-center justify-center shrink-0 shadow-sm select-none" }, toDisplayString(idx + 1), 1),
                                      createVNode("div", { class: "min-w-0" }, [
                                        createVNode("div", { class: "text-[10.5px] font-bold text-zinc-800 line-clamp-1 group-hover/lesson:text-zinc-950 transition-colors" }, toDisplayString(lesson.title), 1),
                                        createVNode("div", { class: "text-[8px] text-zinc-400 font-medium flex items-center gap-1 mt-0.5" }, [
                                          createVNode(unref(Calendar), { class: "h-2 w-2" }),
                                          createTextVNode(" " + toDisplayString(new Date(lesson.created_at || Date.now()).toLocaleDateString("ar-EG")), 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "shrink-0 flex items-center gap-1.5" }, [
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "outline",
                                        class: "h-4 text-[7px] font-bold bg-zinc-50 border-zinc-100/80 text-zinc-400"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" موضع " + toDisplayString(lesson.position), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]);
                                }), 128))
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex flex-col items-center justify-center py-6 text-center"
                              }, [
                                createVNode(unref(PlayCircle), { class: "h-7 w-7 text-zinc-200 mb-1.5" }),
                                createVNode("div", { class: "text-[10px] font-bold text-zinc-400" }, "لا توجد دروس في هذا الكورس حتى الآن"),
                                createVNode(unref(Link), {
                                  href: _ctx.route("teacher.lessons.create", course.id),
                                  class: "mt-2 text-[9px] font-black text-zinc-950 hover:underline"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" + أضف أول درس الآن ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]))
                            ])) : createCommentVNode("", true)
                          ];
                        }),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]))
                ]),
                createVNode("section", { class: "space-y-4 pt-4 border-t border-zinc-200/60" }, [
                  createVNode("div", { class: "border-b border-zinc-200 pb-3" }, [
                    createVNode("h2", { class: "text-[14px] font-black text-zinc-900 flex items-center gap-2" }, [
                      createVNode(unref(TrendingUp), { class: "h-4.5 w-4.5 text-zinc-400" }),
                      createTextVNode(" لوحة الإحصائيات والأداء العام ")
                    ]),
                    createVNode("p", { class: "text-[10px] text-zinc-400 mt-0.5" }, "تقارير إجمالية حول الأداء المالي، المشاهدات والطلاب المسجلين.")
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, [
                    createVNode(unref(_sfc_main$5), { class: "border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                              default: withCtx(() => [
                                createTextVNode("إجمالي الإيرادات")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold" }, [
                              createVNode(unref(DollarSign), { class: "h-4.5 w-4.5" })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.stats.total_revenue), 1),
                            createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                              createVNode(unref(_sfc_main$4), {
                                variant: "secondary",
                                class: "h-4 text-[8px] font-black bg-emerald-50 text-emerald-600 border-none px-1 rounded"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("+20.1%")
                                ]),
                                _: 1
                              }),
                              createVNode("span", { class: "text-[9px] text-zinc-400 font-bold" }, "منذ الشهر الماضي")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5), { class: "border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                              default: withCtx(() => [
                                createTextVNode("الطلاب الجدد")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold" }, [
                              createVNode(unref(Users), { class: "h-4.5 w-4.5" })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_students), 1),
                            createVNode("div", { class: "flex items-center gap-1 mt-1" }, [
                              createVNode(unref(_sfc_main$4), {
                                variant: "secondary",
                                class: "h-4 text-[8px] font-black bg-blue-50 text-blue-600 border-none px-1 rounded"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("+18%")
                                ]),
                                _: 1
                              }),
                              createVNode("span", { class: "text-[9px] text-zinc-400 font-bold" }, "معدل الانضمام")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5), { class: "border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                              default: withCtx(() => [
                                createTextVNode("الكورسات الإجمالية")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold" }, [
                              createVNode(unref(GraduationCap), { class: "h-4.5 w-4.5" })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_courses), 1),
                            createVNode("div", { class: "flex items-center gap-1.5 mt-1 text-[9px] text-zinc-400 font-bold" }, [
                              createVNode(unref(Activity), { class: "h-3 w-3 text-purple-400" }),
                              createVNode("span", null, "تحديثات مستمرة ومنشورة")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5), { class: "border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { class: "p-4 flex flex-row items-center justify-between space-y-0 pb-1.5" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$7), { class: "text-[9px] font-black text-zinc-400 uppercase tracking-widest" }, {
                              default: withCtx(() => [
                                createTextVNode("المشاهدات والدروس")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold" }, [
                              createVNode(unref(PlayCircle), { class: "h-4.5 w-4.5" })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$8), { class: "p-4 pt-0" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, toDisplayString(__props.stats.total_lessons), 1),
                            createVNode("div", { class: "flex items-center gap-1 mt-1 text-[9px] text-zinc-400 font-black uppercase tracking-widest" }, [
                              createVNode(unref(TrendingUp), { class: "h-3 w-3 text-amber-500 ml-1.5" }),
                              createVNode("span", null, "نشاط تفاعلي متصاعد")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("section", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [
                  createVNode(unref(_sfc_main$5), { class: "lg:col-span-2 border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300 overflow-hidden flex flex-col" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$6), { class: "p-5 border-b border-zinc-100 flex flex-row items-center justify-between" }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(unref(_sfc_main$7), { class: "text-[12px] font-black flex items-center gap-2 text-zinc-900 uppercase tracking-tight" }, {
                              default: withCtx(() => [
                                createVNode(unref(Target), { class: "h-4 w-4 text-zinc-400" }),
                                createTextVNode(" تحليل المبيعات والأرباح الأسبوعية ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$9), { class: "text-[9.5px] mt-0.5 text-zinc-400" }, {
                              default: withCtx(() => [
                                createTextVNode("حجم الأرباح الصافية خلال الـ 7 أيام المنصرمة.")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$8), { class: "p-5 flex-1 min-h-[300px] flex items-end" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, {
                            data: __props.chart_data,
                            class: "w-full h-full"
                          }, null, 8, ["data"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5), { class: "border-zinc-200/80 shadow-none bg-white rounded-xl hover:border-zinc-400 transition-all duration-300 overflow-hidden flex flex-col" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$6), { class: "p-5 border-b border-zinc-100" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), { class: "text-[12px] font-black flex items-center gap-2 text-zinc-900 uppercase tracking-tight" }, {
                            default: withCtx(() => [
                              createVNode(unref(BookOpen), { class: "h-4 w-4 text-zinc-400" }),
                              createTextVNode(" النشاط الأخير للكورسات ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), { class: "text-[9.5px] mt-0.5 text-zinc-400" }, {
                            default: withCtx(() => [
                              createTextVNode("آخر التحديثات والإيرادات المحققة مؤخراً.")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$8), { class: "p-0 flex-1 overflow-y-auto divide-y divide-zinc-50" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.latest_courses, (course) => {
                            return openBlock(), createBlock("div", {
                              key: course.id,
                              class: "p-3.5 flex items-center justify-between hover:bg-zinc-50/50 transition-all group"
                            }, [
                              createVNode("div", { class: "flex items-center gap-3 min-w-0" }, [
                                createVNode("div", { class: "h-9 w-12 rounded border border-zinc-100 overflow-hidden shrink-0 shadow-xs bg-zinc-50 flex items-center justify-center" }, [
                                  course.thumbnail ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: course.thumbnail,
                                    class: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock(unref(GraduationCap), {
                                    key: 1,
                                    class: "h-5 w-5 text-zinc-300"
                                  }))
                                ]),
                                createVNode("div", { class: "min-w-0" }, [
                                  createVNode("div", { class: "text-[10.5px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors" }, toDisplayString(course.title), 1),
                                  createVNode("div", { class: "text-[8.5px] text-zinc-400 font-bold flex items-center gap-1.5 mt-0.5" }, [
                                    createVNode(unref(Users), { class: "h-3 w-3 opacity-55" }),
                                    createTextVNode(" " + toDisplayString(course.users_count) + " طالب ", 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "text-[10.5px] font-black text-emerald-600 shrink-0 font-sans" }, " +$" + toDisplayString((course.price * 0.7).toFixed(2)), 1)
                            ]);
                          }), 128)),
                          __props.latest_courses.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-col items-center justify-center py-12 text-center text-zinc-400 text-[10px]"
                          }, " لا توجد بيانات متاحة حالياً ")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "p-3.5 bg-zinc-50/40 border-t border-zinc-50 text-center shrink-0" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("teacher.courses.index")
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$3), {
                              variant: "ghost",
                              size: "sm",
                              class: "h-7 w-full text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 hover:bg-white transition-all"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" استعراض كافة الكورسات "),
                                createVNode(unref(ArrowUpRight), { class: "h-3 w-3 mr-1" })
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
