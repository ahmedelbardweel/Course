import { unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withDirectives, Fragment, renderList, vModelSelect, vModelText, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-DnWC7g1W.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$8 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$7 } from "./Label--EucbuAp.js";
import { Save, Settings, Plus, Trash2, Check, X } from "lucide-vue-next";
import { _ as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, a as _sfc_main$6 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$9 } from "./index-CGK-4kfq.js";
import "./Separator-CFmMgQM_.js";
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
    quiz: Object,
    courses: Array
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const props = __props;
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const z = date.getTimezoneOffset() * 60 * 1e3;
      const localDate = new Date(date - z);
      return localDate.toISOString().slice(0, 16);
    };
    const form = useForm({
      course_id: ((_a = props.quiz) == null ? void 0 : _a.course_id) || "",
      title: ((_b = props.quiz) == null ? void 0 : _b.title) || "",
      description: ((_c = props.quiz) == null ? void 0 : _c.description) || "",
      passing_score: ((_d = props.quiz) == null ? void 0 : _d.passing_score) || 80,
      duration: ((_e = props.quiz) == null ? void 0 : _e.duration) || "",
      attempts_limit: ((_f = props.quiz) == null ? void 0 : _f.attempts_limit) || 1,
      start_time: formatDate((_g = props.quiz) == null ? void 0 : _g.start_time),
      end_time: formatDate((_h = props.quiz) == null ? void 0 : _h.end_time),
      instructions: ((_i = props.quiz) == null ? void 0 : _i.instructions) || "",
      is_published: props.quiz ? Boolean(props.quiz.is_published) : true,
      questions: ((_j = props.quiz) == null ? void 0 : _j.questions.map((q) => ({
        question_text: q.question_text,
        points: q.points,
        options: q.options.map((o) => ({
          option_text: o.option_text,
          is_correct: Boolean(o.is_correct)
        }))
      }))) || [
        {
          question_text: "",
          points: 1,
          options: [
            { option_text: "", is_correct: true },
            { option_text: "", is_correct: false }
          ]
        }
      ]
    });
    const addQuestion = () => {
      form.questions.push({
        question_text: "",
        points: 1,
        options: [
          { option_text: "", is_correct: true },
          { option_text: "", is_correct: false }
        ]
      });
    };
    const removeQuestion = (index) => {
      if (form.questions.length > 1) {
        form.questions.splice(index, 1);
      }
    };
    const addOption = (qIndex) => {
      form.questions[qIndex].options.push({ option_text: "", is_correct: false });
    };
    const removeOption = (qIndex, oIndex) => {
      if (form.questions[qIndex].options.length > 2) {
        form.questions[qIndex].options.splice(oIndex, 1);
      }
    };
    const setCorrect = (qIndex, oIndex) => {
      form.questions[qIndex].options.forEach((opt, idx) => {
        opt.is_correct = idx === oIndex;
      });
    };
    const submit = () => {
      if (props.quiz) {
        form.patch(route("teacher.quizzes.update", props.quiz.id), {
          preserveScroll: true
        });
      } else {
        form.post(route("teacher.quizzes.store"));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.quiz ? "تعديل الاختبار" : "إنشاء اختبار"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "لوحة التحكم", url: _ctx.route("teacher.dashboard") },
          { label: "الاختبارات", url: _ctx.route("teacher.quizzes.index") },
          { label: __props.quiz ? "تعديل الاختبار" : "إنشاء جديد" }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]"${_scopeId}><header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none"${_scopeId}><div${_scopeId}></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.quizzes.index")
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
              class: "h-7 text-[11px] px-5 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 shadow-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Save), { class: "ml-1.5 h-3 w-3" }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(__props.quiz ? "حفظ" : "نشر")}`);
                } else {
                  return [
                    createVNode(unref(Save), { class: "ml-1.5 h-3 w-3" }),
                    createTextVNode(" " + toDisplayString(__props.quiz ? "حفظ" : "نشر"), 1)
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
                              _push5(` الإعدادات `);
                            } else {
                              return [
                                createVNode(unref(Settings), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" }),
                                createTextVNode(" الإعدادات ")
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
                              createTextVNode(" الإعدادات ")
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
                              _push5(`عنوان الاختبار *`);
                            } else {
                              return [
                                createTextVNode("عنوان الاختبار *")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          placeholder: "...",
                          class: ["h-8 text-[12px] px-2.5 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]", { "border-destructive": unref(form).errors.title }]
                        }, null, _parent4, _scopeId3));
                        if (unref(form).errors.title) {
                          _push4(`<p class="text-[10px] text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.title)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`الكورس *`);
                            } else {
                              return [
                                createTextVNode("الكورس *")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<select class="${ssrRenderClass(["w-full h-8.5 rounded-md border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-2.5 text-[12px] font-normal focus:ring-1 focus:ring-[var(--primary)] outline-none leading-none", unref(form).errors.course_id ? "border-destructive" : ""])}"${_scopeId3}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).course_id) ? ssrLooseContain(unref(form).course_id, "") : ssrLooseEqual(unref(form).course_id, "")) ? " selected" : ""}${_scopeId3}>اختر كورس...</option><!--[-->`);
                        ssrRenderList(__props.courses, (course) => {
                          _push4(`<option${ssrRenderAttr("value", course.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).course_id) ? ssrLooseContain(unref(form).course_id, course.id) : ssrLooseEqual(unref(form).course_id, course.id)) ? " selected" : ""}${_scopeId3}>${ssrInterpolate(course.title)}</option>`);
                        });
                        _push4(`<!--]--></select></div><div class="grid grid-cols-2 gap-2.5"${_scopeId3}><div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`النجاح %`);
                            } else {
                              return [
                                createTextVNode("النجاح %")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          type: "number",
                          modelValue: unref(form).passing_score,
                          "onUpdate:modelValue": ($event) => unref(form).passing_score = $event,
                          class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`المدة (د)`);
                            } else {
                              return [
                                createTextVNode("المدة (د)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          type: "number",
                          modelValue: unref(form).duration,
                          "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                          class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]",
                          placeholder: "-"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`المحاولات`);
                            } else {
                              return [
                                createTextVNode("المحاولات")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          type: "number",
                          modelValue: unref(form).attempts_limit,
                          "onUpdate:modelValue": ($event) => unref(form).attempts_limit = $event,
                          class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`وقت البدء`);
                            } else {
                              return [
                                createTextVNode("وقت البدء")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          type: "datetime-local",
                          modelValue: unref(form).start_time,
                          "onUpdate:modelValue": ($event) => unref(form).start_time = $event,
                          class: "h-8 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`تعليمات`);
                            } else {
                              return [
                                createTextVNode("تعليمات")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<textarea rows="2" class="w-full min-h-[50px] rounded-md border border-[var(--border)] p-2 text-[12px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] bg-[var(--card)] text-[var(--foreground)]" placeholder="..."${_scopeId3}>${ssrInterpolate(unref(form).instructions)}</textarea></div><div class="flex items-center gap-2 pt-1"${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_published) ? ssrLooseContain(unref(form).is_published, null) : unref(form).is_published) ? " checked" : ""} id="is_published" class="h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          for: "is_published",
                          class: "text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`نشر الاختبار للطلاب`);
                            } else {
                              return [
                                createTextVNode("نشر الاختبار للطلاب")
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
                                createTextVNode("عنوان الاختبار *")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              placeholder: "...",
                              class: ["h-8 text-[12px] px-2.5 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]", { "border-destructive": unref(form).errors.title }]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            unref(form).errors.title ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-[10px] text-destructive"
                            }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("الكورس *")
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
                              }, "اختر كورس..."),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                                return openBlock(), createBlock("option", {
                                  key: course.id,
                                  value: course.id
                                }, toDisplayString(course.title), 9, ["value"]);
                              }), 128))
                            ], 10, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).course_id]
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-2 gap-2.5" }, [
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                default: withCtx(() => [
                                  createTextVNode("النجاح %")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                type: "number",
                                modelValue: unref(form).passing_score,
                                "onUpdate:modelValue": ($event) => unref(form).passing_score = $event,
                                class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                default: withCtx(() => [
                                  createTextVNode("المدة (د)")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                type: "number",
                                modelValue: unref(form).duration,
                                "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                                class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]",
                                placeholder: "-"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("المحاولات")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              type: "number",
                              modelValue: unref(form).attempts_limit,
                              "onUpdate:modelValue": ($event) => unref(form).attempts_limit = $event,
                              class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("وقت البدء")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              type: "datetime-local",
                              modelValue: unref(form).start_time,
                              "onUpdate:modelValue": ($event) => unref(form).start_time = $event,
                              class: "h-8 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("تعليمات")
                              ]),
                              _: 1
                            }),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).instructions = $event,
                              rows: "2",
                              class: "w-full min-h-[50px] rounded-md border border-[var(--border)] p-2 text-[12px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] bg-[var(--card)] text-[var(--foreground)]",
                              placeholder: "..."
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).instructions]
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center gap-2 pt-1" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(form).is_published = $event,
                              id: "is_published",
                              class: "h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).is_published]
                            ]),
                            createVNode(unref(_sfc_main$7), {
                              for: "is_published",
                              class: "text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("نشر الاختبار للطلاب")
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
                            createTextVNode(" الإعدادات ")
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
                              createTextVNode("عنوان الاختبار *")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), {
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            placeholder: "...",
                            class: ["h-8 text-[12px] px-2.5 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]", { "border-destructive": unref(form).errors.title }]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          unref(form).errors.title ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-[10px] text-destructive"
                          }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("الكورس *")
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
                            }, "اختر كورس..."),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                              return openBlock(), createBlock("option", {
                                key: course.id,
                                value: course.id
                              }, toDisplayString(course.title), 9, ["value"]);
                            }), 128))
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).course_id]
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-2 gap-2.5" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("النجاح %")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              type: "number",
                              modelValue: unref(form).passing_score,
                              "onUpdate:modelValue": ($event) => unref(form).passing_score = $event,
                              class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                              default: withCtx(() => [
                                createTextVNode("المدة (د)")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              type: "number",
                              modelValue: unref(form).duration,
                              "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                              class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]",
                              placeholder: "-"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("المحاولات")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), {
                            type: "number",
                            modelValue: unref(form).attempts_limit,
                            "onUpdate:modelValue": ($event) => unref(form).attempts_limit = $event,
                            class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("وقت البدء")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), {
                            type: "datetime-local",
                            modelValue: unref(form).start_time,
                            "onUpdate:modelValue": ($event) => unref(form).start_time = $event,
                            class: "h-8 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("تعليمات")
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => unref(form).instructions = $event,
                            rows: "2",
                            class: "w-full min-h-[50px] rounded-md border border-[var(--border)] p-2 text-[12px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] bg-[var(--card)] text-[var(--foreground)]",
                            placeholder: "..."
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).instructions]
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 pt-1" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(form).is_published = $event,
                            id: "is_published",
                            class: "h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(form).is_published]
                          ]),
                          createVNode(unref(_sfc_main$7), {
                            for: "is_published",
                            class: "text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("نشر الاختبار للطلاب")
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
            _push2(`</aside><div class="flex-1 w-full space-y-4"${_scopeId}><div class="flex items-center justify-between border-b border-[var(--border)] pb-2.5 px-1"${_scopeId}><h3 class="text-[12px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]"${_scopeId}>الأسئلة والخيارات (${ssrInterpolate(unref(form).questions.length)})</h3>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: addQuestion,
              class: "h-7 text-[11px] font-normal px-3 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Plus), { class: "ml-1 h-3 w-3 text-[var(--primary)]" }, null, _parent3, _scopeId2));
                  _push3(` إضافة سؤال `);
                } else {
                  return [
                    createVNode(unref(Plus), { class: "ml-1 h-3 w-3 text-[var(--primary)]" }),
                    createTextVNode(" إضافة سؤال ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><!--[-->`);
            ssrRenderList(unref(form).questions, (question, qIdx) => {
              _push2(`<div class="space-y-2.5"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-2.5 bg-[var(--muted)] flex flex-row items-center justify-between border-b border-[var(--border)] space-y-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-2.5 flex-1"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$9), {
                            variant: "outline",
                            class: "h-5 min-w-[20px] rounded bg-[var(--card)] font-normal text-[10px] p-0 flex items-center justify-center border border-[var(--border)] text-[var(--foreground)]"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(qIdx + 1)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(qIdx + 1), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$8), {
                            modelValue: question.question_text,
                            "onUpdate:modelValue": ($event) => question.question_text = $event,
                            placeholder: "نص السؤال...",
                            class: "border-none shadow-none focus-visible:ring-0 text-[12px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)]"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            type: "button",
                            variant: "ghost",
                            size: "icon",
                            onClick: ($event) => removeQuestion(qIdx),
                            class: "h-6 w-6 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
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
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2.5 flex-1" }, [
                              createVNode(unref(_sfc_main$9), {
                                variant: "outline",
                                class: "h-5 min-w-[20px] rounded bg-[var(--card)] font-normal text-[10px] p-0 flex items-center justify-center border border-[var(--border)] text-[var(--foreground)]"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(qIdx + 1), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: question.question_text,
                                "onUpdate:modelValue": ($event) => question.question_text = $event,
                                placeholder: "نص السؤال...",
                                class: "border-none shadow-none focus-visible:ring-0 text-[12px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)]"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode(unref(_sfc_main$2), {
                              type: "button",
                              variant: "ghost",
                              size: "icon",
                              onClick: ($event) => removeQuestion(qIdx),
                              class: "h-6 w-6 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-3 space-y-3 bg-[var(--card)]" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-2 pb-1"${_scopeId3}><span class="text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest"${_scopeId3}>درجة السؤال:</span>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$8), {
                            type: "number",
                            modelValue: question.points,
                            "onUpdate:modelValue": ($event) => question.points = $event,
                            class: "w-14 h-6 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-1 focus:ring-0 shadow-none"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2.5"${_scopeId3}><!--[-->`);
                          ssrRenderList(question.options, (option, oIdx) => {
                            _push4(`<div class="group/opt"${_scopeId3}><div class="${ssrRenderClass([
                              "flex items-center gap-2 p-2 border rounded-md relative shadow-none",
                              option.is_correct ? "border-[var(--primary)] bg-[var(--accent)] text-[var(--foreground)]" : "bg-[var(--card)] border-[var(--border)] hover:border-[var(--muted-foreground)]"
                            ])}"${_scopeId3}><button type="button" class="${ssrRenderClass([
                              "h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0",
                              option.is_correct ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)]"
                            ])}"${_scopeId3}>`);
                            if (option.is_correct) {
                              _push4(ssrRenderComponent(unref(Check), { class: "h-2.5 w-2.5 text-white" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</button>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$8), {
                              modelValue: option.option_text,
                              "onUpdate:modelValue": ($event) => option.option_text = $event,
                              placeholder: "...",
                              class: "border-none shadow-none focus-visible:ring-0 text-[12px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)]"
                            }, null, _parent4, _scopeId3));
                            if (question.options.length > 2) {
                              _push4(`<button type="button" class="absolute top-2 left-2 text-[var(--muted-foreground)] hover:text-red-500"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(X), { class: "h-3 w-3" }, null, _parent4, _scopeId3));
                              _push4(`</button>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div></div>`);
                          });
                          _push4(`<!--]-->`);
                          if (question.options.length < 6) {
                            _push4(`<button type="button" class="flex items-center justify-center gap-1.5 p-2 border border-dashed border-[var(--border)] rounded-md text-[11px] font-normal text-[var(--muted-foreground)] hover:border-[var(--muted-foreground)] bg-[var(--card)] hover:text-[var(--foreground)]"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Plus), { class: "h-3 w-3 text-[var(--primary)]" }, null, _parent4, _scopeId3));
                            _push4(` خيار جديد </button>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2 pb-1" }, [
                              createVNode("span", { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, "درجة السؤال:"),
                              createVNode(unref(_sfc_main$8), {
                                type: "number",
                                modelValue: question.points,
                                "onUpdate:modelValue": ($event) => question.points = $event,
                                class: "w-14 h-6 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-1 focus:ring-0 shadow-none"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2.5" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(question.options, (option, oIdx) => {
                                return openBlock(), createBlock("div", {
                                  key: oIdx,
                                  class: "group/opt"
                                }, [
                                  createVNode("div", {
                                    class: [
                                      "flex items-center gap-2 p-2 border rounded-md relative shadow-none",
                                      option.is_correct ? "border-[var(--primary)] bg-[var(--accent)] text-[var(--foreground)]" : "bg-[var(--card)] border-[var(--border)] hover:border-[var(--muted-foreground)]"
                                    ]
                                  }, [
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => setCorrect(qIdx, oIdx),
                                      class: [
                                        "h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0",
                                        option.is_correct ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)]"
                                      ]
                                    }, [
                                      option.is_correct ? (openBlock(), createBlock(unref(Check), {
                                        key: 0,
                                        class: "h-2.5 w-2.5 text-white"
                                      })) : createCommentVNode("", true)
                                    ], 10, ["onClick"]),
                                    createVNode(unref(_sfc_main$8), {
                                      modelValue: option.option_text,
                                      "onUpdate:modelValue": ($event) => option.option_text = $event,
                                      placeholder: "...",
                                      class: "border-none shadow-none focus-visible:ring-0 text-[12px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)]"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    question.options.length > 2 ? (openBlock(), createBlock("button", {
                                      key: 0,
                                      type: "button",
                                      onClick: ($event) => removeOption(qIdx, oIdx),
                                      class: "absolute top-2 left-2 text-[var(--muted-foreground)] hover:text-red-500"
                                    }, [
                                      createVNode(unref(X), { class: "h-3 w-3" })
                                    ], 8, ["onClick"])) : createCommentVNode("", true)
                                  ], 2)
                                ]);
                              }), 128)),
                              question.options.length < 6 ? (openBlock(), createBlock("button", {
                                key: 0,
                                type: "button",
                                onClick: ($event) => addOption(qIdx),
                                class: "flex items-center justify-center gap-1.5 p-2 border border-dashed border-[var(--border)] rounded-md text-[11px] font-normal text-[var(--muted-foreground)] hover:border-[var(--muted-foreground)] bg-[var(--card)] hover:text-[var(--foreground)]"
                              }, [
                                createVNode(unref(Plus), { class: "h-3 w-3 text-[var(--primary)]" }),
                                createTextVNode(" خيار جديد ")
                              ], 8, ["onClick"])) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$4), { class: "p-2.5 bg-[var(--muted)] flex flex-row items-center justify-between border-b border-[var(--border)] space-y-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2.5 flex-1" }, [
                            createVNode(unref(_sfc_main$9), {
                              variant: "outline",
                              class: "h-5 min-w-[20px] rounded bg-[var(--card)] font-normal text-[10px] p-0 flex items-center justify-center border border-[var(--border)] text-[var(--foreground)]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(qIdx + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$8), {
                              modelValue: question.question_text,
                              "onUpdate:modelValue": ($event) => question.question_text = $event,
                              placeholder: "نص السؤال...",
                              class: "border-none shadow-none focus-visible:ring-0 text-[12px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(unref(_sfc_main$2), {
                            type: "button",
                            variant: "ghost",
                            size: "icon",
                            onClick: ($event) => removeQuestion(qIdx),
                            class: "h-6 w-6 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$6), { class: "p-3 space-y-3 bg-[var(--card)]" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2 pb-1" }, [
                            createVNode("span", { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, "درجة السؤال:"),
                            createVNode(unref(_sfc_main$8), {
                              type: "number",
                              modelValue: question.points,
                              "onUpdate:modelValue": ($event) => question.points = $event,
                              class: "w-14 h-6 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-1 focus:ring-0 shadow-none"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2.5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(question.options, (option, oIdx) => {
                              return openBlock(), createBlock("div", {
                                key: oIdx,
                                class: "group/opt"
                              }, [
                                createVNode("div", {
                                  class: [
                                    "flex items-center gap-2 p-2 border rounded-md relative shadow-none",
                                    option.is_correct ? "border-[var(--primary)] bg-[var(--accent)] text-[var(--foreground)]" : "bg-[var(--card)] border-[var(--border)] hover:border-[var(--muted-foreground)]"
                                  ]
                                }, [
                                  createVNode("button", {
                                    type: "button",
                                    onClick: ($event) => setCorrect(qIdx, oIdx),
                                    class: [
                                      "h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0",
                                      option.is_correct ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)]"
                                    ]
                                  }, [
                                    option.is_correct ? (openBlock(), createBlock(unref(Check), {
                                      key: 0,
                                      class: "h-2.5 w-2.5 text-white"
                                    })) : createCommentVNode("", true)
                                  ], 10, ["onClick"]),
                                  createVNode(unref(_sfc_main$8), {
                                    modelValue: option.option_text,
                                    "onUpdate:modelValue": ($event) => option.option_text = $event,
                                    placeholder: "...",
                                    class: "border-none shadow-none focus-visible:ring-0 text-[12px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)]"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  question.options.length > 2 ? (openBlock(), createBlock("button", {
                                    key: 0,
                                    type: "button",
                                    onClick: ($event) => removeOption(qIdx, oIdx),
                                    class: "absolute top-2 left-2 text-[var(--muted-foreground)] hover:text-red-500"
                                  }, [
                                    createVNode(unref(X), { class: "h-3 w-3" })
                                  ], 8, ["onClick"])) : createCommentVNode("", true)
                                ], 2)
                              ]);
                            }), 128)),
                            question.options.length < 6 ? (openBlock(), createBlock("button", {
                              key: 0,
                              type: "button",
                              onClick: ($event) => addOption(qIdx),
                              class: "flex items-center justify-center gap-1.5 p-2 border border-dashed border-[var(--border)] rounded-md text-[11px] font-normal text-[var(--muted-foreground)] hover:border-[var(--muted-foreground)] bg-[var(--card)] hover:text-[var(--foreground)]"
                            }, [
                              createVNode(unref(Plus), { class: "h-3 w-3 text-[var(--primary)]" }),
                              createTextVNode(" خيار جديد ")
                            ], 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-[var(--background)] text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none" }, [
                  createVNode("div"),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("teacher.quizzes.index")
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
                      class: "h-7 text-[11px] px-5 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 shadow-none"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Save), { class: "ml-1.5 h-3 w-3" }),
                        createTextVNode(" " + toDisplayString(__props.quiz ? "حفظ" : "نشر"), 1)
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
                                  createTextVNode(" الإعدادات ")
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
                                    createTextVNode("عنوان الاختبار *")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: unref(form).title,
                                  "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                  placeholder: "...",
                                  class: ["h-8 text-[12px] px-2.5 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]", { "border-destructive": unref(form).errors.title }]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                unref(form).errors.title ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-[10px] text-destructive"
                                }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("الكورس *")
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
                                  }, "اختر كورس..."),
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                                    return openBlock(), createBlock("option", {
                                      key: course.id,
                                      value: course.id
                                    }, toDisplayString(course.title), 9, ["value"]);
                                  }), 128))
                                ], 10, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(form).course_id]
                                ])
                              ]),
                              createVNode("div", { class: "grid grid-cols-2 gap-2.5" }, [
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                    default: withCtx(() => [
                                      createTextVNode("النجاح %")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$8), {
                                    type: "number",
                                    modelValue: unref(form).passing_score,
                                    "onUpdate:modelValue": ($event) => unref(form).passing_score = $event,
                                    class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                    default: withCtx(() => [
                                      createTextVNode("المدة (د)")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$8), {
                                    type: "number",
                                    modelValue: unref(form).duration,
                                    "onUpdate:modelValue": ($event) => unref(form).duration = $event,
                                    class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]",
                                    placeholder: "-"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("المحاولات")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  type: "number",
                                  modelValue: unref(form).attempts_limit,
                                  "onUpdate:modelValue": ($event) => unref(form).attempts_limit = $event,
                                  class: "h-8 text-[12px] text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("وقت البدء")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  type: "datetime-local",
                                  modelValue: unref(form).start_time,
                                  "onUpdate:modelValue": ($event) => unref(form).start_time = $event,
                                  class: "h-8 text-[11px] px-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("تعليمات")
                                  ]),
                                  _: 1
                                }),
                                withDirectives(createVNode("textarea", {
                                  "onUpdate:modelValue": ($event) => unref(form).instructions = $event,
                                  rows: "2",
                                  class: "w-full min-h-[50px] rounded-md border border-[var(--border)] p-2 text-[12px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] bg-[var(--card)] text-[var(--foreground)]",
                                  placeholder: "..."
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, unref(form).instructions]
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center gap-2 pt-1" }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => unref(form).is_published = $event,
                                  id: "is_published",
                                  class: "h-3.5 w-3.5 rounded border-[var(--border)] text-[var(--primary)] bg-[var(--card)] focus:ring-[var(--primary)]"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelCheckbox, unref(form).is_published]
                                ]),
                                createVNode(unref(_sfc_main$7), {
                                  for: "is_published",
                                  class: "text-[11px] font-normal text-[var(--foreground)] cursor-pointer select-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("نشر الاختبار للطلاب")
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
                      createVNode("div", { class: "flex items-center justify-between border-b border-[var(--border)] pb-2.5 px-1" }, [
                        createVNode("h3", { class: "text-[12px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]" }, "الأسئلة والخيارات (" + toDisplayString(unref(form).questions.length) + ")", 1),
                        createVNode(unref(_sfc_main$2), {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          onClick: addQuestion,
                          class: "h-7 text-[11px] font-normal px-3 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)]"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Plus), { class: "ml-1 h-3 w-3 text-[var(--primary)]" }),
                            createTextVNode(" إضافة سؤال ")
                          ]),
                          _: 1
                        })
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(form).questions, (question, qIdx) => {
                        return openBlock(), createBlock("div", {
                          key: qIdx,
                          class: "space-y-2.5"
                        }, [
                          createVNode(unref(_sfc_main$3), { class: "border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$4), { class: "p-2.5 bg-[var(--muted)] flex flex-row items-center justify-between border-b border-[var(--border)] space-y-0" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2.5 flex-1" }, [
                                    createVNode(unref(_sfc_main$9), {
                                      variant: "outline",
                                      class: "h-5 min-w-[20px] rounded bg-[var(--card)] font-normal text-[10px] p-0 flex items-center justify-center border border-[var(--border)] text-[var(--foreground)]"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(qIdx + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(unref(_sfc_main$8), {
                                      modelValue: question.question_text,
                                      "onUpdate:modelValue": ($event) => question.question_text = $event,
                                      placeholder: "نص السؤال...",
                                      class: "border-none shadow-none focus-visible:ring-0 text-[12px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)]"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(unref(_sfc_main$2), {
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ($event) => removeQuestion(qIdx),
                                    class: "h-6 w-6 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$6), { class: "p-3 space-y-3 bg-[var(--card)]" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2 pb-1" }, [
                                    createVNode("span", { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, "درجة السؤال:"),
                                    createVNode(unref(_sfc_main$8), {
                                      type: "number",
                                      modelValue: question.points,
                                      "onUpdate:modelValue": ($event) => question.points = $event,
                                      class: "w-14 h-6 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] px-1 focus:ring-0 shadow-none"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2.5" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(question.options, (option, oIdx) => {
                                      return openBlock(), createBlock("div", {
                                        key: oIdx,
                                        class: "group/opt"
                                      }, [
                                        createVNode("div", {
                                          class: [
                                            "flex items-center gap-2 p-2 border rounded-md relative shadow-none",
                                            option.is_correct ? "border-[var(--primary)] bg-[var(--accent)] text-[var(--foreground)]" : "bg-[var(--card)] border-[var(--border)] hover:border-[var(--muted-foreground)]"
                                          ]
                                        }, [
                                          createVNode("button", {
                                            type: "button",
                                            onClick: ($event) => setCorrect(qIdx, oIdx),
                                            class: [
                                              "h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0",
                                              option.is_correct ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)]"
                                            ]
                                          }, [
                                            option.is_correct ? (openBlock(), createBlock(unref(Check), {
                                              key: 0,
                                              class: "h-2.5 w-2.5 text-white"
                                            })) : createCommentVNode("", true)
                                          ], 10, ["onClick"]),
                                          createVNode(unref(_sfc_main$8), {
                                            modelValue: option.option_text,
                                            "onUpdate:modelValue": ($event) => option.option_text = $event,
                                            placeholder: "...",
                                            class: "border-none shadow-none focus-visible:ring-0 text-[12px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)]"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          question.options.length > 2 ? (openBlock(), createBlock("button", {
                                            key: 0,
                                            type: "button",
                                            onClick: ($event) => removeOption(qIdx, oIdx),
                                            class: "absolute top-2 left-2 text-[var(--muted-foreground)] hover:text-red-500"
                                          }, [
                                            createVNode(unref(X), { class: "h-3 w-3" })
                                          ], 8, ["onClick"])) : createCommentVNode("", true)
                                        ], 2)
                                      ]);
                                    }), 128)),
                                    question.options.length < 6 ? (openBlock(), createBlock("button", {
                                      key: 0,
                                      type: "button",
                                      onClick: ($event) => addOption(qIdx),
                                      class: "flex items-center justify-center gap-1.5 p-2 border border-dashed border-[var(--border)] rounded-md text-[11px] font-normal text-[var(--muted-foreground)] hover:border-[var(--muted-foreground)] bg-[var(--card)] hover:text-[var(--foreground)]"
                                    }, [
                                      createVNode(unref(Plus), { class: "h-3 w-3 text-[var(--primary)]" }),
                                      createTextVNode(" خيار جديد ")
                                    ], 8, ["onClick"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Quizzes/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
