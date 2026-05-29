import { ref, watch, unref, withCtx, createTextVNode, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CS-7yRBl.js";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$5, c as _sfc_main$7 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$6 } from "./index-CGK-4kfq.js";
import { _ as _sfc_main$4 } from "./index-BhZ8Ukd6.js";
import { Sparkles, Trophy, SearchX, Award, Calendar, UserPlus, Check, Hourglass, ArrowLeft, AlertCircle } from "lucide-vue-next";
import "axios";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "reka-ui";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    challenges: Array,
    enrolledCourses: Array,
    filters: Object
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const currentStatus = ref(((_a = props.filters) == null ? void 0 : _a.status) || "all");
    const currentCourse = ref(((_b = props.filters) == null ? void 0 : _b.course_id) || "");
    const activeOnly = ref(((_c = props.filters) == null ? void 0 : _c.active_only) === "true" || ((_d = props.filters) == null ? void 0 : _d.active_only) === true);
    const applyFilters = () => {
      router.get(route("student.challenges.index"), {
        status: currentStatus.value,
        course_id: currentCourse.value,
        active_only: activeOnly.value ? "true" : ""
      }, {
        preserveState: true,
        preserveScroll: true,
        replace: true
      });
    };
    const selectStatus = (status) => {
      currentStatus.value = status;
      applyFilters();
    };
    const toggleActiveOnly = () => {
      activeOnly.value = !activeOnly.value;
      applyFilters();
    };
    const clearFilters = () => {
      currentStatus.value = "all";
      currentCourse.value = "";
      activeOnly.value = false;
      applyFilters();
    };
    watch(currentCourse, () => {
      applyFilters();
    });
    const joinChallenge = (challengeId) => {
      router.post(route("challenges.participate", challengeId), {}, {
        preserveScroll: true,
        onSuccess: () => {
        }
      });
    };
    const getStatusBadge = (status) => {
      switch (status) {
        case "completed":
          return { label: "مكتمل بنجاح", class: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" };
        case "joined":
          return { label: "قيد التنفيذ (مشترك)", class: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" };
        case "expired":
          return { label: "انتهى الوقت (مشترك)", class: "bg-amber-500/10 text-amber-500 border-amber-500/20" };
        case "missed":
          return { label: "فاتني التحدي", class: "bg-rose-500/10 text-rose-500 border-rose-500/20" };
        case "not_joined":
          return { label: "متاح للاشتراك", class: "bg-blue-500/10 text-blue-500 border-blue-500/20" };
        default:
          return { label: "غير معروف", class: "bg-gray-500/10 text-gray-500 border-gray-500/20" };
      }
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      return date.toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "تحدياتي" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "الرئيسية", url: _ctx.route("dashboard") },
          { label: "التحديات البرمجية" }
        ]
      }, {
        "header-actions": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), {
              variant: "outline",
              class: "h-5 text-[9px] font-normal uppercase tracking-widest border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.challenges.length)} تحدي متاح `);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.challenges.length) + " تحدي متاح ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$6), {
                variant: "outline",
                class: "h-5 text-[9px] font-normal uppercase tracking-widest border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.challenges.length) + " تحدي متاح ", 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]" dir="rtl"${_scopeId}><main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto"${_scopeId}><div class="w-full space-y-6 max-w-full mx-auto"${_scopeId}><div class="bg-[var(--foreground)] text-white p-6 relative overflow-hidden rounded-md border border-[var(--border)]"${_scopeId}><div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h1 class="text-xl font-normal tracking-tight flex items-center gap-2"${_scopeId}> التحديات والمسابقات البرمجية 🏆 </h1><p class="mt-2 text-white/60 text-xs max-w-xl leading-relaxed"${_scopeId}> اشترك في التحديات الأسبوعية، اختبر مهاراتك البرمجية، واجمع النقاط لرفع تصنيفك بين زملائك في الكورس! </p></div><div class="bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/15 flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Sparkles), { class: "h-5 w-5 text-amber-400" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><div class="text-[9px] text-white/50 leading-none"${_scopeId}>إجمالي النقاط المكتسبة</div><div class="text-lg font-semibold mt-0.5"${_scopeId}>${ssrInterpolate(__props.challenges.filter((c) => c.is_completed).reduce((sum, c) => sum + c.points, 0))} نقطة</div></div></div></div>`);
            _push2(ssrRenderComponent(unref(Trophy), { class: "absolute bottom-[-20%] left-[-5%] h-40 w-40 opacity-5 -rotate-12" }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none bg-[var(--card)] rounded-md" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-4 space-y-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId3}><div class="space-y-1.5"${_scopeId3}><label class="text-[10px] font-medium text-[var(--muted-foreground)]"${_scopeId3}>تصفية حسب الكورس</label><select class="w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"${_scopeId3}><option value=""${ssrIncludeBooleanAttr(Array.isArray(currentCourse.value) ? ssrLooseContain(currentCourse.value, "") : ssrLooseEqual(currentCourse.value, "")) ? " selected" : ""}${_scopeId3}>جميع الكورسات المشترك بها</option><!--[-->`);
                        ssrRenderList(__props.enrolledCourses, (course) => {
                          _push4(`<option${ssrRenderAttr("value", course.id)}${ssrIncludeBooleanAttr(Array.isArray(currentCourse.value) ? ssrLooseContain(currentCourse.value, course.id) : ssrLooseEqual(currentCourse.value, course.id)) ? " selected" : ""}${_scopeId3}>${ssrInterpolate(course.title)}</option>`);
                        });
                        _push4(`<!--]--></select></div><div class="flex items-center gap-2.5 pt-6 md:pt-8"${_scopeId3}><button type="button" class="${ssrRenderClass(["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", activeOnly.value ? "bg-[var(--primary)]" : "bg-gray-200 dark:bg-gray-750"])}"${_scopeId3}><span class="${ssrRenderClass(["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", activeOnly.value ? "-translate-x-4" : "translate-x-0"])}"${_scopeId3}></span></button><span class="text-[11px] font-medium text-[var(--foreground)]"${_scopeId3}>عرض التحديات النشطة والمتاحة حالياً فقط</span></div></div><div class="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center pt-2 border-t border-[var(--border)]"${_scopeId3}><div class="flex flex-wrap gap-1"${_scopeId3}><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "all" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> الكل </button><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "not_joined" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> متاحة للاشتراك </button><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "joined" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> مشترك بها (قيد العمل) </button><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "completed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> مكتملة </button><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "expired" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> منتهية (مشتركة) </button><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "missed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> فاتتني </button></div>`);
                        if (currentCourse.value || activeOnly.value || currentStatus.value !== "all") {
                          _push4(ssrRenderComponent(unref(_sfc_main$4), {
                            onClick: clearFilters,
                            variant: "ghost",
                            size: "sm",
                            class: "h-7 text-[10px] font-normal text-rose-500 hover:text-rose-600 hover:bg-rose-500/5 rounded-md px-2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` إعادة تعيين الفلاتر `);
                              } else {
                                return [
                                  createTextVNode(" إعادة تعيين الفلاتر ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode("label", { class: "text-[10px] font-medium text-[var(--muted-foreground)]" }, "تصفية حسب الكورس"),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => currentCourse.value = $event,
                                class: "w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                              }, [
                                createVNode("option", { value: "" }, "جميع الكورسات المشترك بها"),
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.enrolledCourses, (course) => {
                                  return openBlock(), createBlock("option", {
                                    key: course.id,
                                    value: course.id
                                  }, toDisplayString(course.title), 9, ["value"]);
                                }), 128))
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, currentCourse.value]
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center gap-2.5 pt-6 md:pt-8" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: toggleActiveOnly,
                                class: ["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", activeOnly.value ? "bg-[var(--primary)]" : "bg-gray-200 dark:bg-gray-750"]
                              }, [
                                createVNode("span", {
                                  class: ["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", activeOnly.value ? "-translate-x-4" : "translate-x-0"]
                                }, null, 2)
                              ], 2),
                              createVNode("span", { class: "text-[11px] font-medium text-[var(--foreground)]" }, "عرض التحديات النشطة والمتاحة حالياً فقط")
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center pt-2 border-t border-[var(--border)]" }, [
                            createVNode("div", { class: "flex flex-wrap gap-1" }, [
                              createVNode("button", {
                                onClick: ($event) => selectStatus("all"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "all" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " الكل ", 10, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => selectStatus("not_joined"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "not_joined" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " متاحة للاشتراك ", 10, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => selectStatus("joined"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "joined" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " مشترك بها (قيد العمل) ", 10, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => selectStatus("completed"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "completed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " مكتملة ", 10, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => selectStatus("expired"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "expired" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " منتهية (مشتركة) ", 10, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => selectStatus("missed"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "missed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " فاتتني ", 10, ["onClick"])
                            ]),
                            currentCourse.value || activeOnly.value || currentStatus.value !== "all" ? (openBlock(), createBlock(unref(_sfc_main$4), {
                              key: 0,
                              onClick: clearFilters,
                              variant: "ghost",
                              size: "sm",
                              class: "h-7 text-[10px] font-normal text-rose-500 hover:text-rose-600 hover:bg-rose-500/5 rounded-md px-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" إعادة تعيين الفلاتر ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), { class: "p-4 space-y-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode("label", { class: "text-[10px] font-medium text-[var(--muted-foreground)]" }, "تصفية حسب الكورس"),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => currentCourse.value = $event,
                              class: "w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                            }, [
                              createVNode("option", { value: "" }, "جميع الكورسات المشترك بها"),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.enrolledCourses, (course) => {
                                return openBlock(), createBlock("option", {
                                  key: course.id,
                                  value: course.id
                                }, toDisplayString(course.title), 9, ["value"]);
                              }), 128))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, currentCourse.value]
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center gap-2.5 pt-6 md:pt-8" }, [
                            createVNode("button", {
                              type: "button",
                              onClick: toggleActiveOnly,
                              class: ["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", activeOnly.value ? "bg-[var(--primary)]" : "bg-gray-200 dark:bg-gray-750"]
                            }, [
                              createVNode("span", {
                                class: ["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", activeOnly.value ? "-translate-x-4" : "translate-x-0"]
                              }, null, 2)
                            ], 2),
                            createVNode("span", { class: "text-[11px] font-medium text-[var(--foreground)]" }, "عرض التحديات النشطة والمتاحة حالياً فقط")
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center pt-2 border-t border-[var(--border)]" }, [
                          createVNode("div", { class: "flex flex-wrap gap-1" }, [
                            createVNode("button", {
                              onClick: ($event) => selectStatus("all"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "all" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " الكل ", 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => selectStatus("not_joined"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "not_joined" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " متاحة للاشتراك ", 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => selectStatus("joined"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "joined" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " مشترك بها (قيد العمل) ", 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => selectStatus("completed"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "completed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " مكتملة ", 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => selectStatus("expired"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "expired" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " منتهية (مشتركة) ", 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => selectStatus("missed"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "missed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " فاتتني ", 10, ["onClick"])
                          ]),
                          currentCourse.value || activeOnly.value || currentStatus.value !== "all" ? (openBlock(), createBlock(unref(_sfc_main$4), {
                            key: 0,
                            onClick: clearFilters,
                            variant: "ghost",
                            size: "sm",
                            class: "h-7 text-[10px] font-normal text-rose-500 hover:text-rose-600 hover:bg-rose-500/5 rounded-md px-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" إعادة تعيين الفلاتر ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.challenges.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(SearchX), { class: "h-10 w-10 text-[var(--accent)] mb-3" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[12px] font-normal text-[var(--foreground)]"${_scopeId}>لا توجد تحديات تطابق الفلاتر المحددة</h3><p class="text-[10px] text-[var(--muted-foreground)] mb-4 text-center max-w-xs leading-relaxed"${_scopeId}> جرّب تغيير خيارات التصفية أو الفلترة لعرض نتائج أخرى. </p></div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.challenges, (challenge) => {
                _push2(ssrRenderComponent(unref(_sfc_main$2), {
                  key: challenge.id,
                  class: "border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)] flex flex-col hover:border-[var(--primary)]/30 transition-all duration-300"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 pb-2 space-y-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex justify-between items-start gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$6), {
                              variant: "outline",
                              class: "h-5 text-[8px] font-normal border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(challenge.course.title)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(challenge.course.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(_sfc_main$6), {
                              class: ["h-5 text-[8px] font-normal border shadow-none px-2", getStatusBadge(challenge.status).class]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(getStatusBadge(challenge.status).label)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(getStatusBadge(challenge.status).label), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[13px] font-medium text-[var(--foreground)] line-clamp-1 leading-normal pt-1.5" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(challenge.title)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(challenge.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode("div", { class: "flex justify-between items-start gap-2" }, [
                                createVNode(unref(_sfc_main$6), {
                                  variant: "outline",
                                  class: "h-5 text-[8px] font-normal border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(challenge.course.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$6), {
                                  class: ["h-5 text-[8px] font-normal border shadow-none px-2", getStatusBadge(challenge.status).class]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getStatusBadge(challenge.status).label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              createVNode(unref(_sfc_main$7), { class: "text-[13px] font-medium text-[var(--foreground)] line-clamp-1 leading-normal pt-1.5" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(challenge.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-4 pt-0 flex-1 flex flex-col justify-between space-y-4" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<p class="text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed"${_scopeId3}>${ssrInterpolate(challenge.description || "لا يوجد وصف متاح لهذا التحدي.")}</p><div class="grid grid-cols-2 gap-2.5 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted-foreground)]"${_scopeId3}><div class="flex items-center gap-1.5"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Award), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }, null, _parent4, _scopeId3));
                            _push4(`<span class="font-semibold text-brand-orange"${_scopeId3}>+${ssrInterpolate(challenge.points)} نقطة</span></div><div class="flex items-center gap-1.5 col-span-1"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Calendar), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }, null, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>ينتهي: ${ssrInterpolate(formatDate(challenge.end_date))}</span></div></div><div class="pt-2"${_scopeId3}>`);
                            if (challenge.status === "not_joined") {
                              _push4(ssrRenderComponent(unref(_sfc_main$4), {
                                onClick: ($event) => joinChallenge(challenge.id),
                                class: "w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md flex items-center justify-center gap-1.5"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(UserPlus), { class: "h-3.5 w-3.5" }, null, _parent5, _scopeId4));
                                    _push5(` الاشتراك بالتحدي `);
                                  } else {
                                    return [
                                      createVNode(unref(UserPlus), { class: "h-3.5 w-3.5" }),
                                      createTextVNode(" الاشتراك بالتحدي ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else if (challenge.status === "completed") {
                              _push4(`<div class="w-full h-8 text-[11px] font-normal bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-md flex items-center justify-center gap-1.5 cursor-default font-semibold"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(Check), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                              _push4(` تحدي مكتمل بنجاح </div>`);
                            } else if (challenge.status === "joined") {
                              _push4(`<div class="space-y-2"${_scopeId3}><div class="w-full h-8 text-[11px] font-normal bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 rounded-md flex items-center justify-center gap-1.5 cursor-default font-semibold"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(Hourglass), { class: "h-3.5 w-3.5" }, null, _parent4, _scopeId3));
                              _push4(` جاري العمل على التحدي </div>`);
                              _push4(ssrRenderComponent(unref(Link), {
                                href: _ctx.route("courses.show", challenge.course.slug),
                                class: "block w-full"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(_sfc_main$4), {
                                      variant: "outline",
                                      size: "sm",
                                      class: "w-full h-7 text-[10px] font-normal border-[var(--border)] rounded-md shadow-none flex items-center justify-center gap-1"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` الانتقال للكورس لمعرفة الشروط `);
                                          _push6(ssrRenderComponent(unref(ArrowLeft), { class: "h-3 w-3" }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createTextVNode(" الانتقال للكورس لمعرفة الشروط "),
                                            createVNode(unref(ArrowLeft), { class: "h-3 w-3" })
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
                                        class: "w-full h-7 text-[10px] font-normal border-[var(--border)] rounded-md shadow-none flex items-center justify-center gap-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" الانتقال للكورس لمعرفة الشروط "),
                                          createVNode(unref(ArrowLeft), { class: "h-3 w-3" })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              _push4(ssrRenderComponent(unref(_sfc_main$4), {
                                disabled: "",
                                class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed flex items-center justify-center gap-1.5"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(AlertCircle), { class: "h-3.5 w-3.5" }, null, _parent5, _scopeId4));
                                    if (challenge.status === "expired") {
                                      _push5(`<span${_scopeId4}>منتهي الصلاحية</span>`);
                                    } else if (challenge.status === "missed") {
                                      _push5(`<span${_scopeId4}>فائت / غير مشترك</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createVNode(unref(AlertCircle), { class: "h-3.5 w-3.5" }),
                                      challenge.status === "expired" ? (openBlock(), createBlock("span", { key: 0 }, "منتهي الصلاحية")) : challenge.status === "missed" ? (openBlock(), createBlock("span", { key: 1 }, "فائت / غير مشترك")) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            }
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed" }, toDisplayString(challenge.description || "لا يوجد وصف متاح لهذا التحدي."), 1),
                              createVNode("div", { class: "grid grid-cols-2 gap-2.5 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted-foreground)]" }, [
                                createVNode("div", { class: "flex items-center gap-1.5" }, [
                                  createVNode(unref(Award), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                  createVNode("span", { class: "font-semibold text-brand-orange" }, "+" + toDisplayString(challenge.points) + " نقطة", 1)
                                ]),
                                createVNode("div", { class: "flex items-center gap-1.5 col-span-1" }, [
                                  createVNode(unref(Calendar), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                  createVNode("span", null, "ينتهي: " + toDisplayString(formatDate(challenge.end_date)), 1)
                                ])
                              ]),
                              createVNode("div", { class: "pt-2" }, [
                                challenge.status === "not_joined" ? (openBlock(), createBlock(unref(_sfc_main$4), {
                                  key: 0,
                                  onClick: ($event) => joinChallenge(challenge.id),
                                  class: "w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md flex items-center justify-center gap-1.5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(UserPlus), { class: "h-3.5 w-3.5" }),
                                    createTextVNode(" الاشتراك بالتحدي ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])) : challenge.status === "completed" ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "w-full h-8 text-[11px] font-normal bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-md flex items-center justify-center gap-1.5 cursor-default font-semibold"
                                }, [
                                  createVNode(unref(Check), { class: "h-4 w-4" }),
                                  createTextVNode(" تحدي مكتمل بنجاح ")
                                ])) : challenge.status === "joined" ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: "space-y-2"
                                }, [
                                  createVNode("div", { class: "w-full h-8 text-[11px] font-normal bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 rounded-md flex items-center justify-center gap-1.5 cursor-default font-semibold" }, [
                                    createVNode(unref(Hourglass), { class: "h-3.5 w-3.5" }),
                                    createTextVNode(" جاري العمل على التحدي ")
                                  ]),
                                  createVNode(unref(Link), {
                                    href: _ctx.route("courses.show", challenge.course.slug),
                                    class: "block w-full"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$4), {
                                        variant: "outline",
                                        size: "sm",
                                        class: "w-full h-7 text-[10px] font-normal border-[var(--border)] rounded-md shadow-none flex items-center justify-center gap-1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" الانتقال للكورس لمعرفة الشروط "),
                                          createVNode(unref(ArrowLeft), { class: "h-3 w-3" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["href"])
                                ])) : (openBlock(), createBlock(unref(_sfc_main$4), {
                                  key: 3,
                                  disabled: "",
                                  class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed flex items-center justify-center gap-1.5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(AlertCircle), { class: "h-3.5 w-3.5" }),
                                    challenge.status === "expired" ? (openBlock(), createBlock("span", { key: 0 }, "منتهي الصلاحية")) : challenge.status === "missed" ? (openBlock(), createBlock("span", { key: 1 }, "فائت / غير مشترك")) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024))
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(_sfc_main$5), { class: "p-4 pb-2 space-y-1" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex justify-between items-start gap-2" }, [
                              createVNode(unref(_sfc_main$6), {
                                variant: "outline",
                                class: "h-5 text-[8px] font-normal border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(challenge.course.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$6), {
                                class: ["h-5 text-[8px] font-normal border shadow-none px-2", getStatusBadge(challenge.status).class]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(getStatusBadge(challenge.status).label), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ]),
                            createVNode(unref(_sfc_main$7), { class: "text-[13px] font-medium text-[var(--foreground)] line-clamp-1 leading-normal pt-1.5" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(challenge.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$3), { class: "p-4 pt-0 flex-1 flex flex-col justify-between space-y-4" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed" }, toDisplayString(challenge.description || "لا يوجد وصف متاح لهذا التحدي."), 1),
                            createVNode("div", { class: "grid grid-cols-2 gap-2.5 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted-foreground)]" }, [
                              createVNode("div", { class: "flex items-center gap-1.5" }, [
                                createVNode(unref(Award), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                createVNode("span", { class: "font-semibold text-brand-orange" }, "+" + toDisplayString(challenge.points) + " نقطة", 1)
                              ]),
                              createVNode("div", { class: "flex items-center gap-1.5 col-span-1" }, [
                                createVNode(unref(Calendar), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                createVNode("span", null, "ينتهي: " + toDisplayString(formatDate(challenge.end_date)), 1)
                              ])
                            ]),
                            createVNode("div", { class: "pt-2" }, [
                              challenge.status === "not_joined" ? (openBlock(), createBlock(unref(_sfc_main$4), {
                                key: 0,
                                onClick: ($event) => joinChallenge(challenge.id),
                                class: "w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md flex items-center justify-center gap-1.5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(UserPlus), { class: "h-3.5 w-3.5" }),
                                  createTextVNode(" الاشتراك بالتحدي ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])) : challenge.status === "completed" ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "w-full h-8 text-[11px] font-normal bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-md flex items-center justify-center gap-1.5 cursor-default font-semibold"
                              }, [
                                createVNode(unref(Check), { class: "h-4 w-4" }),
                                createTextVNode(" تحدي مكتمل بنجاح ")
                              ])) : challenge.status === "joined" ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "space-y-2"
                              }, [
                                createVNode("div", { class: "w-full h-8 text-[11px] font-normal bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 rounded-md flex items-center justify-center gap-1.5 cursor-default font-semibold" }, [
                                  createVNode(unref(Hourglass), { class: "h-3.5 w-3.5" }),
                                  createTextVNode(" جاري العمل على التحدي ")
                                ]),
                                createVNode(unref(Link), {
                                  href: _ctx.route("courses.show", challenge.course.slug),
                                  class: "block w-full"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$4), {
                                      variant: "outline",
                                      size: "sm",
                                      class: "w-full h-7 text-[10px] font-normal border-[var(--border)] rounded-md shadow-none flex items-center justify-center gap-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" الانتقال للكورس لمعرفة الشروط "),
                                        createVNode(unref(ArrowLeft), { class: "h-3 w-3" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])) : (openBlock(), createBlock(unref(_sfc_main$4), {
                                key: 3,
                                disabled: "",
                                class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed flex items-center justify-center gap-1.5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(AlertCircle), { class: "h-3.5 w-3.5" }),
                                  challenge.status === "expired" ? (openBlock(), createBlock("span", { key: 0 }, "منتهي الصلاحية")) : challenge.status === "missed" ? (openBlock(), createBlock("span", { key: 1 }, "فائت / غير مشترك")) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024))
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
              createVNode("div", {
                class: "flex flex-col h-full bg-[var(--background)] text-[12px]",
                dir: "rtl"
              }, [
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right overflow-y-auto" }, [
                  createVNode("div", { class: "w-full space-y-6 max-w-full mx-auto" }, [
                    createVNode("div", { class: "bg-[var(--foreground)] text-white p-6 relative overflow-hidden rounded-md border border-[var(--border)]" }, [
                      createVNode("div", { class: "relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4" }, [
                        createVNode("div", null, [
                          createVNode("h1", { class: "text-xl font-normal tracking-tight flex items-center gap-2" }, " التحديات والمسابقات البرمجية 🏆 "),
                          createVNode("p", { class: "mt-2 text-white/60 text-xs max-w-xl leading-relaxed" }, " اشترك في التحديات الأسبوعية، اختبر مهاراتك البرمجية، واجمع النقاط لرفع تصنيفك بين زملائك في الكورس! ")
                        ]),
                        createVNode("div", { class: "bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/15 flex items-center gap-3" }, [
                          createVNode(unref(Sparkles), { class: "h-5 w-5 text-amber-400" }),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-[9px] text-white/50 leading-none" }, "إجمالي النقاط المكتسبة"),
                            createVNode("div", { class: "text-lg font-semibold mt-0.5" }, toDisplayString(__props.challenges.filter((c) => c.is_completed).reduce((sum, c) => sum + c.points, 0)) + " نقطة", 1)
                          ])
                        ])
                      ]),
                      createVNode(unref(Trophy), { class: "absolute bottom-[-20%] left-[-5%] h-40 w-40 opacity-5 -rotate-12" })
                    ]),
                    createVNode(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none bg-[var(--card)] rounded-md" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), { class: "p-4 space-y-4" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode("label", { class: "text-[10px] font-medium text-[var(--muted-foreground)]" }, "تصفية حسب الكورس"),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => currentCourse.value = $event,
                                  class: "w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                                }, [
                                  createVNode("option", { value: "" }, "جميع الكورسات المشترك بها"),
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.enrolledCourses, (course) => {
                                    return openBlock(), createBlock("option", {
                                      key: course.id,
                                      value: course.id
                                    }, toDisplayString(course.title), 9, ["value"]);
                                  }), 128))
                                ], 8, ["onUpdate:modelValue"]), [
                                  [vModelSelect, currentCourse.value]
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center gap-2.5 pt-6 md:pt-8" }, [
                                createVNode("button", {
                                  type: "button",
                                  onClick: toggleActiveOnly,
                                  class: ["relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none", activeOnly.value ? "bg-[var(--primary)]" : "bg-gray-200 dark:bg-gray-750"]
                                }, [
                                  createVNode("span", {
                                    class: ["pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", activeOnly.value ? "-translate-x-4" : "translate-x-0"]
                                  }, null, 2)
                                ], 2),
                                createVNode("span", { class: "text-[11px] font-medium text-[var(--foreground)]" }, "عرض التحديات النشطة والمتاحة حالياً فقط")
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center pt-2 border-t border-[var(--border)]" }, [
                              createVNode("div", { class: "flex flex-wrap gap-1" }, [
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("all"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "all" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " الكل ", 10, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("not_joined"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "not_joined" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " متاحة للاشتراك ", 10, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("joined"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "joined" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " مشترك بها (قيد العمل) ", 10, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("completed"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "completed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " مكتملة ", 10, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("expired"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "expired" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " منتهية (مشتركة) ", 10, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("missed"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "missed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " فاتتني ", 10, ["onClick"])
                              ]),
                              currentCourse.value || activeOnly.value || currentStatus.value !== "all" ? (openBlock(), createBlock(unref(_sfc_main$4), {
                                key: 0,
                                onClick: clearFilters,
                                variant: "ghost",
                                size: "sm",
                                class: "h-7 text-[10px] font-normal text-rose-500 hover:text-rose-600 hover:bg-rose-500/5 rounded-md px-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" إعادة تعيين الفلاتر ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    __props.challenges.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"
                    }, [
                      createVNode(unref(SearchX), { class: "h-10 w-10 text-[var(--accent)] mb-3" }),
                      createVNode("h3", { class: "text-[12px] font-normal text-[var(--foreground)]" }, "لا توجد تحديات تطابق الفلاتر المحددة"),
                      createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)] mb-4 text-center max-w-xs leading-relaxed" }, " جرّب تغيير خيارات التصفية أو الفلترة لعرض نتائج أخرى. ")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.challenges, (challenge) => {
                        return openBlock(), createBlock(unref(_sfc_main$2), {
                          key: challenge.id,
                          class: "border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)] flex flex-col hover:border-[var(--primary)]/30 transition-all duration-300"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$5), { class: "p-4 pb-2 space-y-1" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex justify-between items-start gap-2" }, [
                                  createVNode(unref(_sfc_main$6), {
                                    variant: "outline",
                                    class: "h-5 text-[8px] font-normal border-[var(--border)] bg-[var(--muted)] text-[var(--muted-foreground)]"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(challenge.course.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$6), {
                                    class: ["h-5 text-[8px] font-normal border shadow-none px-2", getStatusBadge(challenge.status).class]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getStatusBadge(challenge.status).label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                createVNode(unref(_sfc_main$7), { class: "text-[13px] font-medium text-[var(--foreground)] line-clamp-1 leading-normal pt-1.5" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(challenge.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$3), { class: "p-4 pt-0 flex-1 flex flex-col justify-between space-y-4" }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed" }, toDisplayString(challenge.description || "لا يوجد وصف متاح لهذا التحدي."), 1),
                                createVNode("div", { class: "grid grid-cols-2 gap-2.5 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted-foreground)]" }, [
                                  createVNode("div", { class: "flex items-center gap-1.5" }, [
                                    createVNode(unref(Award), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                    createVNode("span", { class: "font-semibold text-brand-orange" }, "+" + toDisplayString(challenge.points) + " نقطة", 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1.5 col-span-1" }, [
                                    createVNode(unref(Calendar), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                    createVNode("span", null, "ينتهي: " + toDisplayString(formatDate(challenge.end_date)), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "pt-2" }, [
                                  challenge.status === "not_joined" ? (openBlock(), createBlock(unref(_sfc_main$4), {
                                    key: 0,
                                    onClick: ($event) => joinChallenge(challenge.id),
                                    class: "w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md flex items-center justify-center gap-1.5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(UserPlus), { class: "h-3.5 w-3.5" }),
                                      createTextVNode(" الاشتراك بالتحدي ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])) : challenge.status === "completed" ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "w-full h-8 text-[11px] font-normal bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-md flex items-center justify-center gap-1.5 cursor-default font-semibold"
                                  }, [
                                    createVNode(unref(Check), { class: "h-4 w-4" }),
                                    createTextVNode(" تحدي مكتمل بنجاح ")
                                  ])) : challenge.status === "joined" ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "space-y-2"
                                  }, [
                                    createVNode("div", { class: "w-full h-8 text-[11px] font-normal bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 rounded-md flex items-center justify-center gap-1.5 cursor-default font-semibold" }, [
                                      createVNode(unref(Hourglass), { class: "h-3.5 w-3.5" }),
                                      createTextVNode(" جاري العمل على التحدي ")
                                    ]),
                                    createVNode(unref(Link), {
                                      href: _ctx.route("courses.show", challenge.course.slug),
                                      class: "block w-full"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$4), {
                                          variant: "outline",
                                          size: "sm",
                                          class: "w-full h-7 text-[10px] font-normal border-[var(--border)] rounded-md shadow-none flex items-center justify-center gap-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" الانتقال للكورس لمعرفة الشروط "),
                                            createVNode(unref(ArrowLeft), { class: "h-3 w-3" })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["href"])
                                  ])) : (openBlock(), createBlock(unref(_sfc_main$4), {
                                    key: 3,
                                    disabled: "",
                                    class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed flex items-center justify-center gap-1.5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(AlertCircle), { class: "h-3.5 w-3.5" }),
                                      challenge.status === "expired" ? (openBlock(), createBlock("span", { key: 0 }, "منتهي الصلاحية")) : challenge.status === "missed" ? (openBlock(), createBlock("span", { key: 1 }, "فائت / غير مشترك")) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Student/Challenges/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
