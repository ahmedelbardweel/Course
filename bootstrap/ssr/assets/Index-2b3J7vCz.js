import { ref, watch, unref, withCtx, createTextVNode, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, vModelText, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-Cd85X56I.js";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$5, c as _sfc_main$7 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$6 } from "./index-CGK-4kfq.js";
import { _ as _sfc_main$4 } from "./index-BhZ8Ukd6.js";
import "./Input-Bd7d8AJ3.js";
import { ClipboardList, SearchX, Clock, Award, Calendar, ArrowLeft } from "lucide-vue-next";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "reka-ui";
import "@vueuse/core";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    quizzes: Array,
    enrolledCourses: Array,
    filters: Object
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const currentStatus = ref(((_a = props.filters) == null ? void 0 : _a.status) || "all");
    const currentCourse = ref(((_b = props.filters) == null ? void 0 : _b.course_id) || "");
    const dateFrom = ref(((_c = props.filters) == null ? void 0 : _c.date_from) || "");
    const dateTo = ref(((_d = props.filters) == null ? void 0 : _d.date_to) || "");
    const applyFilters = () => {
      router.get(route("student.quizzes.index"), {
        status: currentStatus.value,
        course_id: currentCourse.value,
        date_from: dateFrom.value,
        date_to: dateTo.value
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
    const clearFilters = () => {
      currentStatus.value = "all";
      currentCourse.value = "";
      dateFrom.value = "";
      dateTo.value = "";
      applyFilters();
    };
    watch([currentCourse, dateFrom, dateTo], () => {
      applyFilters();
    });
    const getStatusBadge = (status) => {
      switch (status) {
        case "passed":
          return { label: "ناجح", class: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" };
        case "failed":
          return { label: "راسب", class: "bg-rose-500/10 text-rose-500 border-rose-500/20" };
        case "expired":
          return { label: "منتهي الصلاحية", class: "bg-amber-500/10 text-amber-500 border-amber-500/20" };
        case "upcoming":
          return { label: "قريباً", class: "bg-blue-500/10 text-blue-500 border-blue-500/20" };
        case "not_started":
          return { label: "جاهز للتقديم", class: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" };
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
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "كل الاختبارات" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "الرئيسية", url: _ctx.route("dashboard") },
          { label: "كل الاختبارات" }
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
                  _push3(`${ssrInterpolate(__props.quizzes.length)} اختبار متاح `);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.quizzes.length) + " اختبار متاح ", 1)
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
                  createTextVNode(toDisplayString(__props.quizzes.length) + " اختبار متاح ", 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]" dir="rtl"${_scopeId}><main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto"${_scopeId}><div class="w-full space-y-6 max-w-full mx-auto"${_scopeId}><div class="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="h-8 w-8 rounded-md bg-brand-orange text-white flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ClipboardList), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h1 class="text-base font-normal text-[var(--foreground)] tracking-tight"${_scopeId}>الاختبارات الأكاديمية</h1><p class="text-[10px] text-[var(--muted-foreground)] font-normal mt-1"${_scopeId}>تتبع اختبارات الكورسات، النتائج ومستواك الدراسي</p></div></div></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none bg-[var(--card)] rounded-md" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-4 space-y-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4"${_scopeId3}><div class="space-y-1.5"${_scopeId3}><label class="text-[10px] font-medium text-[var(--muted-foreground)]"${_scopeId3}>تصفية حسب الكورس</label><select class="w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"${_scopeId3}><option value=""${ssrIncludeBooleanAttr(Array.isArray(currentCourse.value) ? ssrLooseContain(currentCourse.value, "") : ssrLooseEqual(currentCourse.value, "")) ? " selected" : ""}${_scopeId3}>جميع الكورسات المشترك بها</option><!--[-->`);
                        ssrRenderList(__props.enrolledCourses, (course) => {
                          _push4(`<option${ssrRenderAttr("value", course.id)}${ssrIncludeBooleanAttr(Array.isArray(currentCourse.value) ? ssrLooseContain(currentCourse.value, course.id) : ssrLooseEqual(currentCourse.value, course.id)) ? " selected" : ""}${_scopeId3}>${ssrInterpolate(course.title)}</option>`);
                        });
                        _push4(`<!--]--></select></div><div class="space-y-1.5"${_scopeId3}><label class="text-[10px] font-medium text-[var(--muted-foreground)]"${_scopeId3}>تاريخ البدء من</label><input type="date"${ssrRenderAttr("value", dateFrom.value)} class="w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"${_scopeId3}></div><div class="space-y-1.5"${_scopeId3}><label class="text-[10px] font-medium text-[var(--muted-foreground)]"${_scopeId3}>تاريخ البدء إلى</label><input type="date"${ssrRenderAttr("value", dateTo.value)} class="w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"${_scopeId3}></div></div><div class="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center pt-2 border-t border-[var(--border)]"${_scopeId3}><div class="flex flex-wrap gap-1"${_scopeId3}><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "all" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> الكل </button><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "not_started" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> غير مقدمة (جديد) </button><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "passed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> ناجح </button><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "failed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> راسب </button><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "expired" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> فاتتني / منتهية </button><button class="${ssrRenderClass(["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "upcoming" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"])}"${_scopeId3}> قريباً </button></div>`);
                        if (currentCourse.value || dateFrom.value || dateTo.value || currentStatus.value !== "all") {
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
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, [
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
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode("label", { class: "text-[10px] font-medium text-[var(--muted-foreground)]" }, "تاريخ البدء من"),
                              withDirectives(createVNode("input", {
                                type: "date",
                                "onUpdate:modelValue": ($event) => dateFrom.value = $event,
                                class: "w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, dateFrom.value]
                              ])
                            ]),
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode("label", { class: "text-[10px] font-medium text-[var(--muted-foreground)]" }, "تاريخ البدء إلى"),
                              withDirectives(createVNode("input", {
                                type: "date",
                                "onUpdate:modelValue": ($event) => dateTo.value = $event,
                                class: "w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, dateTo.value]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center pt-2 border-t border-[var(--border)]" }, [
                            createVNode("div", { class: "flex flex-wrap gap-1" }, [
                              createVNode("button", {
                                onClick: ($event) => selectStatus("all"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "all" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " الكل ", 10, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => selectStatus("not_started"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "not_started" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " غير مقدمة (جديد) ", 10, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => selectStatus("passed"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "passed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " ناجح ", 10, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => selectStatus("failed"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "failed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " راسب ", 10, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => selectStatus("expired"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "expired" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " فاتتني / منتهية ", 10, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => selectStatus("upcoming"),
                                class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "upcoming" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                              }, " قريباً ", 10, ["onClick"])
                            ]),
                            currentCourse.value || dateFrom.value || dateTo.value || currentStatus.value !== "all" ? (openBlock(), createBlock(unref(_sfc_main$4), {
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
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, [
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
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode("label", { class: "text-[10px] font-medium text-[var(--muted-foreground)]" }, "تاريخ البدء من"),
                            withDirectives(createVNode("input", {
                              type: "date",
                              "onUpdate:modelValue": ($event) => dateFrom.value = $event,
                              class: "w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, dateFrom.value]
                            ])
                          ]),
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode("label", { class: "text-[10px] font-medium text-[var(--muted-foreground)]" }, "تاريخ البدء إلى"),
                            withDirectives(createVNode("input", {
                              type: "date",
                              "onUpdate:modelValue": ($event) => dateTo.value = $event,
                              class: "w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, dateTo.value]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center pt-2 border-t border-[var(--border)]" }, [
                          createVNode("div", { class: "flex flex-wrap gap-1" }, [
                            createVNode("button", {
                              onClick: ($event) => selectStatus("all"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "all" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " الكل ", 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => selectStatus("not_started"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "not_started" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " غير مقدمة (جديد) ", 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => selectStatus("passed"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "passed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " ناجح ", 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => selectStatus("failed"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "failed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " راسب ", 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => selectStatus("expired"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "expired" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " فاتتني / منتهية ", 10, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => selectStatus("upcoming"),
                              class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "upcoming" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                            }, " قريباً ", 10, ["onClick"])
                          ]),
                          currentCourse.value || dateFrom.value || dateTo.value || currentStatus.value !== "all" ? (openBlock(), createBlock(unref(_sfc_main$4), {
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
            if (__props.quizzes.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(SearchX), { class: "h-10 w-10 text-[var(--accent)] mb-3" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[12px] font-normal text-[var(--foreground)]"${_scopeId}>لا توجد اختبارات تطابق الفلاتر المحددة</h3><p class="text-[10px] text-[var(--muted-foreground)] mb-4 text-center max-w-xs leading-relaxed"${_scopeId}> جرّب تغيير خيارات التصفية أو الفلترة لعرض نتائج أخرى. </p></div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.quizzes, (quiz) => {
                _push2(ssrRenderComponent(unref(_sfc_main$2), {
                  key: quiz.id,
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
                                  _push5(`${ssrInterpolate(quiz.course.title)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(quiz.course.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(_sfc_main$6), {
                              class: ["h-5 text-[8px] font-normal border shadow-none px-2", getStatusBadge(quiz.status).class]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(getStatusBadge(quiz.status).label)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(getStatusBadge(quiz.status).label), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[13px] font-medium text-[var(--foreground)] line-clamp-1 leading-normal pt-1.5" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(quiz.title)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(quiz.title), 1)
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
                                    createTextVNode(toDisplayString(quiz.course.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$6), {
                                  class: ["h-5 text-[8px] font-normal border shadow-none px-2", getStatusBadge(quiz.status).class]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getStatusBadge(quiz.status).label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              createVNode(unref(_sfc_main$7), { class: "text-[13px] font-medium text-[var(--foreground)] line-clamp-1 leading-normal pt-1.5" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(quiz.title), 1)
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
                            _push4(`<p class="text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed"${_scopeId3}>${ssrInterpolate(quiz.description || "لا يوجد وصف متاح لهذا الاختبار.")}</p><div class="grid grid-cols-2 gap-2.5 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted-foreground)]"${_scopeId3}><div class="flex items-center gap-1.5"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Clock), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }, null, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>المدة: ${ssrInterpolate(quiz.duration)} دقيقة</span></div><div class="flex items-center gap-1.5"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Award), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }, null, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>درجة النجاح: %${ssrInterpolate(quiz.passing_score)}</span></div><div class="flex items-center gap-1.5 col-span-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Calendar), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }, null, _parent4, _scopeId3));
                            if (quiz.end_time) {
                              _push4(`<span${_scopeId3}>ينتهي: ${ssrInterpolate(formatDate(quiz.end_time))}</span>`);
                            } else {
                              _push4(`<span${_scopeId3}>متاح دائماً</span>`);
                            }
                            _push4(`</div></div>`);
                            if (quiz.attempts_count > 0) {
                              _push4(`<div class="p-2.5 bg-[var(--muted)] rounded-md border border-[var(--border)] text-[10px] space-y-1"${_scopeId3}><div class="flex justify-between items-center"${_scopeId3}><span class="text-[var(--muted-foreground)]"${_scopeId3}>المحاولات المقدمة:</span><span class="font-medium text-[var(--foreground)]"${_scopeId3}>${ssrInterpolate(quiz.attempts_count)} / ${ssrInterpolate(quiz.attempts_limit || "مفتوح")}</span></div><div class="flex justify-between items-center"${_scopeId3}><span class="text-[var(--muted-foreground)]"${_scopeId3}>أفضل نتيجة لك:</span><span class="${ssrRenderClass(["font-semibold", quiz.best_score >= quiz.passing_score ? "text-emerald-600" : "text-rose-600"])}"${_scopeId3}>${ssrInterpolate(quiz.best_score)}% `);
                              if (quiz.best_score >= quiz.passing_score) {
                                _push4(`<span${_scopeId3}>(ناجح)</span>`);
                              } else {
                                _push4(`<span${_scopeId3}>(راسب)</span>`);
                              }
                              _push4(`</span></div></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<div class="pt-2"${_scopeId3}>`);
                            if (quiz.status === "not_started" || quiz.status === "failed" && (!quiz.attempts_limit || quiz.attempts_count < quiz.attempts_limit)) {
                              _push4(ssrRenderComponent(unref(Link), {
                                href: _ctx.route("quizzes.show", [quiz.course.slug, quiz.id]),
                                class: "block w-full"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(_sfc_main$4), { class: "w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` بدء الاختبار الآن `);
                                          _push6(ssrRenderComponent(unref(ArrowLeft), { class: "mr-2 h-3.5 w-3.5" }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createTextVNode(" بدء الاختبار الآن "),
                                            createVNode(unref(ArrowLeft), { class: "mr-2 h-3.5 w-3.5" })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$4), { class: "w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" بدء الاختبار الآن "),
                                          createVNode(unref(ArrowLeft), { class: "mr-2 h-3.5 w-3.5" })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else if (quiz.status === "upcoming") {
                              _push4(ssrRenderComponent(unref(_sfc_main$4), {
                                disabled: "",
                                class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(` غير متاح بعد (يبدأ ${ssrInterpolate(formatDate(quiz.start_time))}) `);
                                  } else {
                                    return [
                                      createTextVNode(" غير متاح بعد (يبدأ " + toDisplayString(formatDate(quiz.start_time)) + ") ", 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(ssrRenderComponent(unref(_sfc_main$4), {
                                disabled: "",
                                class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    if (quiz.status === "expired") {
                                      _push5(`<span${_scopeId4}>منتهي الصلاحية</span>`);
                                    } else if (quiz.attempts_limit && quiz.attempts_count >= quiz.attempts_limit) {
                                      _push5(`<span${_scopeId4}>مستنفذ المحاولات المتاحة</span>`);
                                    } else if (quiz.status === "passed") {
                                      _push5(`<span${_scopeId4}>تم اجتياز الاختبار بنجاح 🎉</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      quiz.status === "expired" ? (openBlock(), createBlock("span", { key: 0 }, "منتهي الصلاحية")) : quiz.attempts_limit && quiz.attempts_count >= quiz.attempts_limit ? (openBlock(), createBlock("span", { key: 1 }, "مستنفذ المحاولات المتاحة")) : quiz.status === "passed" ? (openBlock(), createBlock("span", { key: 2 }, "تم اجتياز الاختبار بنجاح 🎉")) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            }
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed" }, toDisplayString(quiz.description || "لا يوجد وصف متاح لهذا الاختبار."), 1),
                              createVNode("div", { class: "grid grid-cols-2 gap-2.5 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted-foreground)]" }, [
                                createVNode("div", { class: "flex items-center gap-1.5" }, [
                                  createVNode(unref(Clock), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                  createVNode("span", null, "المدة: " + toDisplayString(quiz.duration) + " دقيقة", 1)
                                ]),
                                createVNode("div", { class: "flex items-center gap-1.5" }, [
                                  createVNode(unref(Award), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                  createVNode("span", null, "درجة النجاح: %" + toDisplayString(quiz.passing_score), 1)
                                ]),
                                createVNode("div", { class: "flex items-center gap-1.5 col-span-2" }, [
                                  createVNode(unref(Calendar), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                  quiz.end_time ? (openBlock(), createBlock("span", { key: 0 }, "ينتهي: " + toDisplayString(formatDate(quiz.end_time)), 1)) : (openBlock(), createBlock("span", { key: 1 }, "متاح دائماً"))
                                ])
                              ]),
                              quiz.attempts_count > 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "p-2.5 bg-[var(--muted)] rounded-md border border-[var(--border)] text-[10px] space-y-1"
                              }, [
                                createVNode("div", { class: "flex justify-between items-center" }, [
                                  createVNode("span", { class: "text-[var(--muted-foreground)]" }, "المحاولات المقدمة:"),
                                  createVNode("span", { class: "font-medium text-[var(--foreground)]" }, toDisplayString(quiz.attempts_count) + " / " + toDisplayString(quiz.attempts_limit || "مفتوح"), 1)
                                ]),
                                createVNode("div", { class: "flex justify-between items-center" }, [
                                  createVNode("span", { class: "text-[var(--muted-foreground)]" }, "أفضل نتيجة لك:"),
                                  createVNode("span", {
                                    class: ["font-semibold", quiz.best_score >= quiz.passing_score ? "text-emerald-600" : "text-rose-600"]
                                  }, [
                                    createTextVNode(toDisplayString(quiz.best_score) + "% ", 1),
                                    quiz.best_score >= quiz.passing_score ? (openBlock(), createBlock("span", { key: 0 }, "(ناجح)")) : (openBlock(), createBlock("span", { key: 1 }, "(راسب)"))
                                  ], 2)
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "pt-2" }, [
                                quiz.status === "not_started" || quiz.status === "failed" && (!quiz.attempts_limit || quiz.attempts_count < quiz.attempts_limit) ? (openBlock(), createBlock(unref(Link), {
                                  key: 0,
                                  href: _ctx.route("quizzes.show", [quiz.course.slug, quiz.id]),
                                  class: "block w-full"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$4), { class: "w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" بدء الاختبار الآن "),
                                        createVNode(unref(ArrowLeft), { class: "mr-2 h-3.5 w-3.5" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"])) : quiz.status === "upcoming" ? (openBlock(), createBlock(unref(_sfc_main$4), {
                                  key: 1,
                                  disabled: "",
                                  class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" غير متاح بعد (يبدأ " + toDisplayString(formatDate(quiz.start_time)) + ") ", 1)
                                  ]),
                                  _: 2
                                }, 1024)) : (openBlock(), createBlock(unref(_sfc_main$4), {
                                  key: 2,
                                  disabled: "",
                                  class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed"
                                }, {
                                  default: withCtx(() => [
                                    quiz.status === "expired" ? (openBlock(), createBlock("span", { key: 0 }, "منتهي الصلاحية")) : quiz.attempts_limit && quiz.attempts_count >= quiz.attempts_limit ? (openBlock(), createBlock("span", { key: 1 }, "مستنفذ المحاولات المتاحة")) : quiz.status === "passed" ? (openBlock(), createBlock("span", { key: 2 }, "تم اجتياز الاختبار بنجاح 🎉")) : createCommentVNode("", true)
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
                                  createTextVNode(toDisplayString(quiz.course.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$6), {
                                class: ["h-5 text-[8px] font-normal border shadow-none px-2", getStatusBadge(quiz.status).class]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(getStatusBadge(quiz.status).label), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ]),
                            createVNode(unref(_sfc_main$7), { class: "text-[13px] font-medium text-[var(--foreground)] line-clamp-1 leading-normal pt-1.5" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(quiz.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$3), { class: "p-4 pt-0 flex-1 flex flex-col justify-between space-y-4" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed" }, toDisplayString(quiz.description || "لا يوجد وصف متاح لهذا الاختبار."), 1),
                            createVNode("div", { class: "grid grid-cols-2 gap-2.5 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted-foreground)]" }, [
                              createVNode("div", { class: "flex items-center gap-1.5" }, [
                                createVNode(unref(Clock), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                createVNode("span", null, "المدة: " + toDisplayString(quiz.duration) + " دقيقة", 1)
                              ]),
                              createVNode("div", { class: "flex items-center gap-1.5" }, [
                                createVNode(unref(Award), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                createVNode("span", null, "درجة النجاح: %" + toDisplayString(quiz.passing_score), 1)
                              ]),
                              createVNode("div", { class: "flex items-center gap-1.5 col-span-2" }, [
                                createVNode(unref(Calendar), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                quiz.end_time ? (openBlock(), createBlock("span", { key: 0 }, "ينتهي: " + toDisplayString(formatDate(quiz.end_time)), 1)) : (openBlock(), createBlock("span", { key: 1 }, "متاح دائماً"))
                              ])
                            ]),
                            quiz.attempts_count > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "p-2.5 bg-[var(--muted)] rounded-md border border-[var(--border)] text-[10px] space-y-1"
                            }, [
                              createVNode("div", { class: "flex justify-between items-center" }, [
                                createVNode("span", { class: "text-[var(--muted-foreground)]" }, "المحاولات المقدمة:"),
                                createVNode("span", { class: "font-medium text-[var(--foreground)]" }, toDisplayString(quiz.attempts_count) + " / " + toDisplayString(quiz.attempts_limit || "مفتوح"), 1)
                              ]),
                              createVNode("div", { class: "flex justify-between items-center" }, [
                                createVNode("span", { class: "text-[var(--muted-foreground)]" }, "أفضل نتيجة لك:"),
                                createVNode("span", {
                                  class: ["font-semibold", quiz.best_score >= quiz.passing_score ? "text-emerald-600" : "text-rose-600"]
                                }, [
                                  createTextVNode(toDisplayString(quiz.best_score) + "% ", 1),
                                  quiz.best_score >= quiz.passing_score ? (openBlock(), createBlock("span", { key: 0 }, "(ناجح)")) : (openBlock(), createBlock("span", { key: 1 }, "(راسب)"))
                                ], 2)
                              ])
                            ])) : createCommentVNode("", true),
                            createVNode("div", { class: "pt-2" }, [
                              quiz.status === "not_started" || quiz.status === "failed" && (!quiz.attempts_limit || quiz.attempts_count < quiz.attempts_limit) ? (openBlock(), createBlock(unref(Link), {
                                key: 0,
                                href: _ctx.route("quizzes.show", [quiz.course.slug, quiz.id]),
                                class: "block w-full"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$4), { class: "w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" بدء الاختبار الآن "),
                                      createVNode(unref(ArrowLeft), { class: "mr-2 h-3.5 w-3.5" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["href"])) : quiz.status === "upcoming" ? (openBlock(), createBlock(unref(_sfc_main$4), {
                                key: 1,
                                disabled: "",
                                class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" غير متاح بعد (يبدأ " + toDisplayString(formatDate(quiz.start_time)) + ") ", 1)
                                ]),
                                _: 2
                              }, 1024)) : (openBlock(), createBlock(unref(_sfc_main$4), {
                                key: 2,
                                disabled: "",
                                class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed"
                              }, {
                                default: withCtx(() => [
                                  quiz.status === "expired" ? (openBlock(), createBlock("span", { key: 0 }, "منتهي الصلاحية")) : quiz.attempts_limit && quiz.attempts_count >= quiz.attempts_limit ? (openBlock(), createBlock("span", { key: 1 }, "مستنفذ المحاولات المتاحة")) : quiz.status === "passed" ? (openBlock(), createBlock("span", { key: 2 }, "تم اجتياز الاختبار بنجاح 🎉")) : createCommentVNode("", true)
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
                    createVNode("div", { class: "flex flex-col md:flex-row gap-4 justify-between items-start md:items-center" }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("div", { class: "h-8 w-8 rounded-md bg-brand-orange text-white flex items-center justify-center" }, [
                          createVNode(unref(ClipboardList), { class: "h-4 w-4" })
                        ]),
                        createVNode("div", null, [
                          createVNode("h1", { class: "text-base font-normal text-[var(--foreground)] tracking-tight" }, "الاختبارات الأكاديمية"),
                          createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)] font-normal mt-1" }, "تتبع اختبارات الكورسات، النتائج ومستواك الدراسي")
                        ])
                      ])
                    ]),
                    createVNode(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none bg-[var(--card)] rounded-md" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3), { class: "p-4 space-y-4" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, [
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
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode("label", { class: "text-[10px] font-medium text-[var(--muted-foreground)]" }, "تاريخ البدء من"),
                                withDirectives(createVNode("input", {
                                  type: "date",
                                  "onUpdate:modelValue": ($event) => dateFrom.value = $event,
                                  class: "w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, dateFrom.value]
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode("label", { class: "text-[10px] font-medium text-[var(--muted-foreground)]" }, "تاريخ البدء إلى"),
                                withDirectives(createVNode("input", {
                                  type: "date",
                                  "onUpdate:modelValue": ($event) => dateTo.value = $event,
                                  class: "w-full h-8 text-[11px] px-3 bg-[var(--background)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-[var(--foreground)]"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, dateTo.value]
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center pt-2 border-t border-[var(--border)]" }, [
                              createVNode("div", { class: "flex flex-wrap gap-1" }, [
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("all"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "all" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " الكل ", 10, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("not_started"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "not_started" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " غير مقدمة (جديد) ", 10, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("passed"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "passed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " ناجح ", 10, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("failed"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "failed" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " راسب ", 10, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("expired"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "expired" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " فاتتني / منتهية ", 10, ["onClick"]),
                                createVNode("button", {
                                  onClick: ($event) => selectStatus("upcoming"),
                                  class: ["h-7 px-3 text-[10px] rounded-md font-medium transition-all", currentStatus.value === "upcoming" ? "bg-[var(--primary)] text-white" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"]
                                }, " قريباً ", 10, ["onClick"])
                              ]),
                              currentCourse.value || dateFrom.value || dateTo.value || currentStatus.value !== "all" ? (openBlock(), createBlock(unref(_sfc_main$4), {
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
                    __props.quizzes.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-20 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"
                    }, [
                      createVNode(unref(SearchX), { class: "h-10 w-10 text-[var(--accent)] mb-3" }),
                      createVNode("h3", { class: "text-[12px] font-normal text-[var(--foreground)]" }, "لا توجد اختبارات تطابق الفلاتر المحددة"),
                      createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)] mb-4 text-center max-w-xs leading-relaxed" }, " جرّب تغيير خيارات التصفية أو الفلترة لعرض نتائج أخرى. ")
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.quizzes, (quiz) => {
                        return openBlock(), createBlock(unref(_sfc_main$2), {
                          key: quiz.id,
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
                                      createTextVNode(toDisplayString(quiz.course.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$6), {
                                    class: ["h-5 text-[8px] font-normal border shadow-none px-2", getStatusBadge(quiz.status).class]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getStatusBadge(quiz.status).label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                createVNode(unref(_sfc_main$7), { class: "text-[13px] font-medium text-[var(--foreground)] line-clamp-1 leading-normal pt-1.5" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(quiz.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$3), { class: "p-4 pt-0 flex-1 flex flex-col justify-between space-y-4" }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed" }, toDisplayString(quiz.description || "لا يوجد وصف متاح لهذا الاختبار."), 1),
                                createVNode("div", { class: "grid grid-cols-2 gap-2.5 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted-foreground)]" }, [
                                  createVNode("div", { class: "flex items-center gap-1.5" }, [
                                    createVNode(unref(Clock), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                    createVNode("span", null, "المدة: " + toDisplayString(quiz.duration) + " دقيقة", 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1.5" }, [
                                    createVNode(unref(Award), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                    createVNode("span", null, "درجة النجاح: %" + toDisplayString(quiz.passing_score), 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1.5 col-span-2" }, [
                                    createVNode(unref(Calendar), { class: "h-3.5 w-3.5 opacity-60 text-brand-orange" }),
                                    quiz.end_time ? (openBlock(), createBlock("span", { key: 0 }, "ينتهي: " + toDisplayString(formatDate(quiz.end_time)), 1)) : (openBlock(), createBlock("span", { key: 1 }, "متاح دائماً"))
                                  ])
                                ]),
                                quiz.attempts_count > 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "p-2.5 bg-[var(--muted)] rounded-md border border-[var(--border)] text-[10px] space-y-1"
                                }, [
                                  createVNode("div", { class: "flex justify-between items-center" }, [
                                    createVNode("span", { class: "text-[var(--muted-foreground)]" }, "المحاولات المقدمة:"),
                                    createVNode("span", { class: "font-medium text-[var(--foreground)]" }, toDisplayString(quiz.attempts_count) + " / " + toDisplayString(quiz.attempts_limit || "مفتوح"), 1)
                                  ]),
                                  createVNode("div", { class: "flex justify-between items-center" }, [
                                    createVNode("span", { class: "text-[var(--muted-foreground)]" }, "أفضل نتيجة لك:"),
                                    createVNode("span", {
                                      class: ["font-semibold", quiz.best_score >= quiz.passing_score ? "text-emerald-600" : "text-rose-600"]
                                    }, [
                                      createTextVNode(toDisplayString(quiz.best_score) + "% ", 1),
                                      quiz.best_score >= quiz.passing_score ? (openBlock(), createBlock("span", { key: 0 }, "(ناجح)")) : (openBlock(), createBlock("span", { key: 1 }, "(راسب)"))
                                    ], 2)
                                  ])
                                ])) : createCommentVNode("", true),
                                createVNode("div", { class: "pt-2" }, [
                                  quiz.status === "not_started" || quiz.status === "failed" && (!quiz.attempts_limit || quiz.attempts_count < quiz.attempts_limit) ? (openBlock(), createBlock(unref(Link), {
                                    key: 0,
                                    href: _ctx.route("quizzes.show", [quiz.course.slug, quiz.id]),
                                    class: "block w-full"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$4), { class: "w-full h-8 text-[11px] font-normal bg-[var(--primary)] text-white border-none shadow-none rounded-md" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" بدء الاختبار الآن "),
                                          createVNode(unref(ArrowLeft), { class: "mr-2 h-3.5 w-3.5" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["href"])) : quiz.status === "upcoming" ? (openBlock(), createBlock(unref(_sfc_main$4), {
                                    key: 1,
                                    disabled: "",
                                    class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" غير متاح بعد (يبدأ " + toDisplayString(formatDate(quiz.start_time)) + ") ", 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : (openBlock(), createBlock(unref(_sfc_main$4), {
                                    key: 2,
                                    disabled: "",
                                    class: "w-full h-8 text-[11px] font-normal bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)] shadow-none rounded-md cursor-not-allowed"
                                  }, {
                                    default: withCtx(() => [
                                      quiz.status === "expired" ? (openBlock(), createBlock("span", { key: 0 }, "منتهي الصلاحية")) : quiz.attempts_limit && quiz.attempts_count >= quiz.attempts_limit ? (openBlock(), createBlock("span", { key: 1 }, "مستنفذ المحاولات المتاحة")) : quiz.status === "passed" ? (openBlock(), createBlock("span", { key: 2 }, "تم اجتياز الاختبار بنجاح 🎉")) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Student/Quizzes/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
