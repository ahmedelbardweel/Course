import { unref, withCtx, createTextVNode, createVNode, toDisplayString, withDirectives, openBlock, createBlock, Fragment, renderList, vModelSelect, createCommentVNode, vModelCheckbox, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CS-7yRBl.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$8 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$7 } from "./Label--EucbuAp.js";
import { _ as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, a as _sfc_main$6 } from "./CardTitle-Cy38L483.js";
import { Save, Settings, Info } from "lucide-vue-next";
import { _ as _sfc_main$9 } from "./Separator-CFmMgQM_.js";
import "axios";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "radix-vue";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: {
    challenge: Object,
    courses: Array
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    const props = __props;
    const form = useForm({
      course_id: ((_a = props.challenge) == null ? void 0 : _a.course_id) || "",
      title: ((_b = props.challenge) == null ? void 0 : _b.title) || "",
      description: ((_c = props.challenge) == null ? void 0 : _c.description) || "",
      points: ((_d = props.challenge) == null ? void 0 : _d.points) || 100,
      start_date: ((_e = props.challenge) == null ? void 0 : _e.start_date) ? new Date(props.challenge.start_date).toISOString().slice(0, 16) : "",
      end_date: ((_f = props.challenge) == null ? void 0 : _f.end_date) ? new Date(props.challenge.end_date).toISOString().slice(0, 16) : "",
      is_active: ((_g = props.challenge) == null ? void 0 : _g.is_active) ?? true
    });
    const submit = () => {
      if (props.challenge) {
        form.patch(route("teacher.challenges.update", props.challenge.id));
      } else {
        form.post(route("teacher.challenges.store"));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.challenge ? "تعديل التحدي" : "إنشاء تحدي جديد"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "لوحة التحكم", url: _ctx.route("teacher.dashboard") },
          { label: "التحديات", url: _ctx.route("teacher.challenges.index") },
          { label: __props.challenge ? "تعديل التحدي" : "إنشاء جديد" }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]"${_scopeId}><header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none"${_scopeId}><div${_scopeId}></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.challenges.index")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    variant: "ghost",
                    size: "sm",
                    class: "h-7 text-[11px] px-3 font-normal text-[var(--muted-foreground)] hover:text-[var(--foreground)] bg-transparent"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`إلغاء`);
                      } else {
                        return [
                          createTextVNode("إلغاء")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), {
                      variant: "ghost",
                      size: "sm",
                      class: "h-7 text-[11px] px-3 font-normal text-[var(--muted-foreground)] hover:text-[var(--foreground)] bg-transparent"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("إلغاء")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              size: "sm",
              onClick: submit,
              disabled: unref(form).processing,
              class: "h-7 text-[11px] px-6 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 shadow-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Save), { class: "ml-1.5 h-3 w-3" }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(__props.challenge ? "حفظ التعديلات" : "نشر التحدي")}`);
                } else {
                  return [
                    createVNode(unref(Save), { class: "ml-1.5 h-3 w-3" }),
                    createTextVNode(" " + toDisplayString(__props.challenge ? "حفظ التعديلات" : "نشر التحدي"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></header><main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto"${_scopeId}><div class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full mx-auto"${_scopeId}><aside class="w-full lg:w-80 space-y-4 shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border-[var(--border)] shadow-none rounded-md bg-[var(--card)]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-3 border-b border-[var(--border)] bg-[var(--card)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Settings), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" }, null, _parent5, _scopeId4));
                              _push5(` الإعدادات العامة `);
                            } else {
                              return [
                                createVNode(unref(Settings), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" }),
                                createTextVNode(" الإعدادات العامة ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--foreground)]" }, {
                            default: withCtx(() => [
                              createVNode(unref(Settings), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" }),
                              createTextVNode(" الإعدادات العامة ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-3 space-y-3.5 bg-[var(--card)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`الكورس المستهدف *`);
                            } else {
                              return [
                                createTextVNode("الكورس المستهدف *")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<select class="${ssrRenderClass(["w-full h-8.5 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-2.5 text-[12px] font-normal focus:ring-1 focus:ring-[var(--primary)] outline-none leading-none", unref(form).errors.course_id ? "border-destructive" : ""])}"${_scopeId3}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).course_id) ? ssrLooseContain(unref(form).course_id, "") : ssrLooseEqual(unref(form).course_id, "")) ? " selected" : ""}${_scopeId3}>اختر الكورس...</option><!--[-->`);
                        ssrRenderList(__props.courses, (course) => {
                          _push4(`<option${ssrRenderAttr("value", course.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).course_id) ? ssrLooseContain(unref(form).course_id, course.id) : ssrLooseEqual(unref(form).course_id, course.id)) ? " selected" : ""}${_scopeId3}>${ssrInterpolate(course.title)}</option>`);
                        });
                        _push4(`<!--]--></select>`);
                        if (unref(form).errors.course_id) {
                          _push4(`<p class="text-[10px] text-destructive italic"${_scopeId3}>${ssrInterpolate(unref(form).errors.course_id)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`النقاط الممنوحة`);
                            } else {
                              return [
                                createTextVNode("النقاط الممنوحة")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          type: "number",
                          modelValue: unref(form).points,
                          "onUpdate:modelValue": ($event) => unref(form).points = $event,
                          class: "h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                        }, null, _parent4, _scopeId3));
                        if (unref(form).errors.points) {
                          _push4(`<p class="text-[10px] text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.points)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "my-1 border-[var(--border)]" }, null, _parent4, _scopeId3));
                        _push4(`<div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`تاريخ البدء`);
                            } else {
                              return [
                                createTextVNode("تاريخ البدء")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          type: "datetime-local",
                          modelValue: unref(form).start_date,
                          "onUpdate:modelValue": ($event) => unref(form).start_date = $event,
                          class: "h-8.5 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`تاريخ الانتهاء`);
                            } else {
                              return [
                                createTextVNode("تاريخ الانتهاء")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          type: "datetime-local",
                          modelValue: unref(form).end_date,
                          "onUpdate:modelValue": ($event) => unref(form).end_date = $event,
                          class: "h-8.5 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center gap-2 pt-1 border-t border-[var(--border)] mt-2"${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} id="is_active" class="h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          for: "is_active",
                          class: "text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`تفعيل التحدي الآن`);
                            } else {
                              return [
                                createTextVNode("تفعيل التحدي الآن")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("الكورس المستهدف *")
                              ]),
                              _: 1
                            }),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(form).course_id = $event,
                              class: ["w-full h-8.5 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-2.5 text-[12px] font-normal focus:ring-1 focus:ring-[var(--primary)] outline-none leading-none", unref(form).errors.course_id ? "border-destructive" : ""]
                            }, [
                              createVNode("option", {
                                value: "",
                                disabled: ""
                              }, "اختر الكورس..."),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                                return openBlock(), createBlock("option", {
                                  key: course.id,
                                  value: course.id
                                }, toDisplayString(course.title), 9, ["value"]);
                              }), 128))
                            ], 10, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).course_id]
                            ]),
                            unref(form).errors.course_id ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-[10px] text-destructive italic"
                            }, toDisplayString(unref(form).errors.course_id), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("النقاط الممنوحة")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              type: "number",
                              modelValue: unref(form).points,
                              "onUpdate:modelValue": ($event) => unref(form).points = $event,
                              class: "h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.points ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-[10px] text-destructive"
                            }, toDisplayString(unref(form).errors.points), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode(unref(_sfc_main$9), { class: "my-1 border-[var(--border)]" }),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("تاريخ البدء")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              type: "datetime-local",
                              modelValue: unref(form).start_date,
                              "onUpdate:modelValue": ($event) => unref(form).start_date = $event,
                              class: "h-8.5 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("تاريخ الانتهاء")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              type: "datetime-local",
                              modelValue: unref(form).end_date,
                              "onUpdate:modelValue": ($event) => unref(form).end_date = $event,
                              class: "h-8.5 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "flex items-center gap-2 pt-1 border-t border-[var(--border)] mt-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(form).is_active = $event,
                              id: "is_active",
                              class: "h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).is_active]
                            ]),
                            createVNode(unref(_sfc_main$7), {
                              for: "is_active",
                              class: "text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("تفعيل التحدي الآن")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "p-3 border-b border-[var(--border)] bg-[var(--card)]" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--foreground)]" }, {
                          default: withCtx(() => [
                            createVNode(unref(Settings), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" }),
                            createTextVNode(" الإعدادات العامة ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-3 space-y-3.5 bg-[var(--card)]" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("الكورس المستهدف *")
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(form).course_id = $event,
                            class: ["w-full h-8.5 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-2.5 text-[12px] font-normal focus:ring-1 focus:ring-[var(--primary)] outline-none leading-none", unref(form).errors.course_id ? "border-destructive" : ""]
                          }, [
                            createVNode("option", {
                              value: "",
                              disabled: ""
                            }, "اختر الكورس..."),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                              return openBlock(), createBlock("option", {
                                key: course.id,
                                value: course.id
                              }, toDisplayString(course.title), 9, ["value"]);
                            }), 128))
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).course_id]
                          ]),
                          unref(form).errors.course_id ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-[10px] text-destructive italic"
                          }, toDisplayString(unref(form).errors.course_id), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("النقاط الممنوحة")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), {
                            type: "number",
                            modelValue: unref(form).points,
                            "onUpdate:modelValue": ($event) => unref(form).points = $event,
                            class: "h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.points ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-[10px] text-destructive"
                          }, toDisplayString(unref(form).errors.points), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(unref(_sfc_main$9), { class: "my-1 border-[var(--border)]" }),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("تاريخ البدء")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), {
                            type: "datetime-local",
                            modelValue: unref(form).start_date,
                            "onUpdate:modelValue": ($event) => unref(form).start_date = $event,
                            class: "h-8.5 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("تاريخ الانتهاء")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), {
                            type: "datetime-local",
                            modelValue: unref(form).end_date,
                            "onUpdate:modelValue": ($event) => unref(form).end_date = $event,
                            class: "h-8.5 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 pt-1 border-t border-[var(--border)] mt-2" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(form).is_active = $event,
                            id: "is_active",
                            class: "h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(form).is_active]
                          ]),
                          createVNode(unref(_sfc_main$7), {
                            for: "is_active",
                            class: "text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("تفعيل التحدي الآن")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</aside><div class="flex-1 w-full space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border-[var(--border)] shadow-none rounded-md bg-[var(--card)]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-3 border-b border-[var(--border)] bg-[var(--card)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Info), { class: "h-3.5 w-3.5" }, null, _parent5, _scopeId4));
                              _push5(` تفاصيل التحدي `);
                            } else {
                              return [
                                createVNode(unref(Info), { class: "h-3.5 w-3.5" }),
                                createTextVNode(" تفاصيل التحدي ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--muted-foreground)]" }, {
                            default: withCtx(() => [
                              createVNode(unref(Info), { class: "h-3.5 w-3.5" }),
                              createTextVNode(" تفاصيل التحدي ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-4 space-y-5 bg-[var(--card)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[12px] font-normal text-[var(--foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`عنوان التحدي *`);
                            } else {
                              return [
                                createTextVNode("عنوان التحدي *")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          placeholder: "مثلاً: حل مشكلة برمجية باستخدام Vue.js",
                          class: "h-9 text-[13px] font-normal px-3 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                        }, null, _parent4, _scopeId3));
                        if (unref(form).errors.title) {
                          _push4(`<p class="text-[10px] text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.title)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[12px] font-normal text-[var(--foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`وصف التحدي والتعليمات`);
                            } else {
                              return [
                                createTextVNode("وصف التحدي والتعليمات")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<textarea rows="10" class="w-full min-h-[200px] rounded-md border border-[var(--border)] p-3 text-[13px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] leading-relaxed shadow-none bg-[var(--card)] text-[var(--foreground)]" placeholder="اشرح للطلاب ماذا يجب عليهم فعله وكيفية تسليم الحل..."${_scopeId3}>${ssrInterpolate(unref(form).description)}</textarea>`);
                        if (unref(form).errors.description) {
                          _push4(`<p class="text-[10px] text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.description)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[12px] font-normal text-[var(--foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("عنوان التحدي *")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              placeholder: "مثلاً: حل مشكلة برمجية باستخدام Vue.js",
                              class: "h-9 text-[13px] font-normal px-3 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.title ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-[10px] text-destructive"
                            }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[12px] font-normal text-[var(--foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("وصف التحدي والتعليمات")
                              ]),
                              _: 1
                            }),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              rows: "10",
                              class: "w-full min-h-[200px] rounded-md border border-[var(--border)] p-3 text-[13px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] leading-relaxed shadow-none bg-[var(--card)] text-[var(--foreground)]",
                              placeholder: "اشرح للطلاب ماذا يجب عليهم فعله وكيفية تسليم الحل..."
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).description]
                            ]),
                            unref(form).errors.description ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-[10px] text-destructive"
                            }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "p-3 border-b border-[var(--border)] bg-[var(--card)]" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--muted-foreground)]" }, {
                          default: withCtx(() => [
                            createVNode(unref(Info), { class: "h-3.5 w-3.5" }),
                            createTextVNode(" تفاصيل التحدي ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-4 space-y-5 bg-[var(--card)]" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-1.5" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[12px] font-normal text-[var(--foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("عنوان التحدي *")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), {
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            placeholder: "مثلاً: حل مشكلة برمجية باستخدام Vue.js",
                            class: "h-9 text-[13px] font-normal px-3 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.title ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-[10px] text-destructive"
                          }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "space-y-1.5" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[12px] font-normal text-[var(--foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("وصف التحدي والتعليمات")
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            rows: "10",
                            class: "w-full min-h-[200px] rounded-md border border-[var(--border)] p-3 text-[13px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] leading-relaxed shadow-none bg-[var(--card)] text-[var(--foreground)]",
                            placeholder: "اشرح للطلاب ماذا يجب عليهم فعله وكيفية تسليم الحل..."
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).description]
                          ]),
                          unref(form).errors.description ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-[10px] text-destructive"
                          }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
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
              createVNode("div", { class: "flex flex-col h-full bg-[var(--background)] text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none" }, [
                  createVNode("div"),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("teacher.challenges.index")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), {
                          variant: "ghost",
                          size: "sm",
                          class: "h-7 text-[11px] px-3 font-normal text-[var(--muted-foreground)] hover:text-[var(--foreground)] bg-transparent"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("إلغاء")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(_sfc_main$2), {
                      size: "sm",
                      onClick: submit,
                      disabled: unref(form).processing,
                      class: "h-7 text-[11px] px-6 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 shadow-none"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Save), { class: "ml-1.5 h-3 w-3" }),
                        createTextVNode(" " + toDisplayString(__props.challenge ? "حفظ التعديلات" : "نشر التحدي"), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right overflow-y-auto" }, [
                  createVNode("div", { class: "w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full mx-auto" }, [
                    createVNode("aside", { class: "w-full lg:w-80 space-y-4 shrink-0" }, [
                      createVNode(unref(_sfc_main$3), { class: "border-[var(--border)] shadow-none rounded-md bg-[var(--card)]" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "p-3 border-b border-[var(--border)] bg-[var(--card)]" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { class: "text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--foreground)]" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Settings), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" }),
                                  createTextVNode(" الإعدادات العامة ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), { class: "p-3 space-y-3.5 bg-[var(--card)]" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("الكورس المستهدف *")
                                  ]),
                                  _: 1
                                }),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => unref(form).course_id = $event,
                                  class: ["w-full h-8.5 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-2.5 text-[12px] font-normal focus:ring-1 focus:ring-[var(--primary)] outline-none leading-none", unref(form).errors.course_id ? "border-destructive" : ""]
                                }, [
                                  createVNode("option", {
                                    value: "",
                                    disabled: ""
                                  }, "اختر الكورس..."),
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                                    return openBlock(), createBlock("option", {
                                      key: course.id,
                                      value: course.id
                                    }, toDisplayString(course.title), 9, ["value"]);
                                  }), 128))
                                ], 10, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(form).course_id]
                                ]),
                                unref(form).errors.course_id ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-[10px] text-destructive italic"
                                }, toDisplayString(unref(form).errors.course_id), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("النقاط الممنوحة")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  type: "number",
                                  modelValue: unref(form).points,
                                  "onUpdate:modelValue": ($event) => unref(form).points = $event,
                                  class: "h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                unref(form).errors.points ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-[10px] text-destructive"
                                }, toDisplayString(unref(form).errors.points), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode(unref(_sfc_main$9), { class: "my-1 border-[var(--border)]" }),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("تاريخ البدء")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  type: "datetime-local",
                                  modelValue: unref(form).start_date,
                                  "onUpdate:modelValue": ($event) => unref(form).start_date = $event,
                                  class: "h-8.5 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("تاريخ الانتهاء")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  type: "datetime-local",
                                  modelValue: unref(form).end_date,
                                  "onUpdate:modelValue": ($event) => unref(form).end_date = $event,
                                  class: "h-8.5 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "flex items-center gap-2 pt-1 border-t border-[var(--border)] mt-2" }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => unref(form).is_active = $event,
                                  id: "is_active",
                                  class: "h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelCheckbox, unref(form).is_active]
                                ]),
                                createVNode(unref(_sfc_main$7), {
                                  for: "is_active",
                                  class: "text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("تفعيل التحدي الآن")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex-1 w-full space-y-4" }, [
                      createVNode(unref(_sfc_main$3), { class: "border-[var(--border)] shadow-none rounded-md bg-[var(--card)]" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "p-3 border-b border-[var(--border)] bg-[var(--card)]" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { class: "text-[12px] font-normal flex items-center gap-2 uppercase tracking-tight text-[var(--muted-foreground)]" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Info), { class: "h-3.5 w-3.5" }),
                                  createTextVNode(" تفاصيل التحدي ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), { class: "p-4 space-y-5 bg-[var(--card)]" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[12px] font-normal text-[var(--foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("عنوان التحدي *")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: unref(form).title,
                                  "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                  placeholder: "مثلاً: حل مشكلة برمجية باستخدام Vue.js",
                                  class: "h-9 text-[13px] font-normal px-3 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                unref(form).errors.title ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-[10px] text-destructive"
                                }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[12px] font-normal text-[var(--foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("وصف التحدي والتعليمات")
                                  ]),
                                  _: 1
                                }),
                                withDirectives(createVNode("textarea", {
                                  "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                  rows: "10",
                                  class: "w-full min-h-[200px] rounded-md border border-[var(--border)] p-3 text-[13px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] leading-relaxed shadow-none bg-[var(--card)] text-[var(--foreground)]",
                                  placeholder: "اشرح للطلاب ماذا يجب عليهم فعله وكيفية تسليم الحل..."
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, unref(form).description]
                                ]),
                                unref(form).errors.description ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-[10px] text-destructive"
                                }, toDisplayString(unref(form).errors.description), 1)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Challenges/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
