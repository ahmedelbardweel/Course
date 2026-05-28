import { unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withDirectives, vModelCheckbox, vModelText, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BgifGF--.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$8 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$9 } from "./Label--EucbuAp.js";
import { _ as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, a as _sfc_main$6 } from "./CardTitle-Cy38L483.js";
import "./Separator-CFmMgQM_.js";
import { Save, Settings, Plus, Trash2, Video, FileText, Link as Link$1, X, HelpCircle } from "lucide-vue-next";
import { _ as _sfc_main$7 } from "./index-CGK-4kfq.js";
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
    course: Object,
    lesson: Object
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    const props = __props;
    const form = useForm({
      lessons: [
        {
          title: ((_a = props.lesson) == null ? void 0 : _a.title) || "",
          video_url: ((_b = props.lesson) == null ? void 0 : _b.video_url) || "",
          video_file: null,
          content: ((_c = props.lesson) == null ? void 0 : _c.content) || "",
          duration: ((_d = props.lesson) == null ? void 0 : _d.duration) || 0,
          is_preview: ((_e = props.lesson) == null ? void 0 : _e.is_preview) || false,
          resources: ((_f = props.lesson) == null ? void 0 : _f.resources) || [],
          faqs: ((_g = props.lesson) == null ? void 0 : _g.faqs) || []
        }
      ]
    });
    const addLesson = () => {
      form.lessons.push({
        title: "",
        video_url: "",
        video_file: null,
        content: "",
        duration: 0,
        is_preview: false,
        resources: [],
        faqs: []
      });
    };
    const removeLesson = (index) => {
      if (form.lessons.length > 1) {
        form.lessons.splice(index, 1);
      }
    };
    const addResource = (lessonIndex) => {
      form.lessons[lessonIndex].resources.push({ title: "", url: "", type: "docs" });
    };
    const removeResource = (lessonIndex, resIndex) => {
      form.lessons[lessonIndex].resources.splice(resIndex, 1);
    };
    const addFaq = (lessonIndex) => {
      form.lessons[lessonIndex].faqs.push({ q: "", a: "" });
    };
    const removeFaq = (lessonIndex, faqIndex) => {
      form.lessons[lessonIndex].faqs.splice(faqIndex, 1);
    };
    const handleVideoUpload = (e, lessonIndex) => {
      const file = e.target.files[0];
      if (file) {
        form.lessons[lessonIndex].video_file = file;
      }
    };
    const submit = () => {
      if (props.lesson) {
        form.post(route("teacher.lessons.update", props.lesson.id), {
          forceFormData: true,
          _method: "PATCH"
        });
      } else {
        form.post(route("teacher.lessons.store", props.course.id), {
          forceFormData: true
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.lesson ? "تعديل الدرس" : "إضافة درس جديد"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "لوحة التحكم", url: _ctx.route("teacher.dashboard") },
          { label: "الكورسات", url: _ctx.route("teacher.courses.index") },
          { label: __props.lesson ? "تعديل الدرس" : "إضافة درس" }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]"${_scopeId}><header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none"${_scopeId}><div${_scopeId}></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.courses.edit", __props.course.id)
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
              class: "h-7 text-[11px] px-6 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 shadow-none relative overflow-hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="${ssrRenderClass([{ "opacity-0": unref(form).processing }, "flex items-center"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Save), { class: "ml-1.5 h-3 w-3" }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(__props.lesson ? "حفظ التعديل" : "حفظ الدروس")}</span>`);
                  if (unref(form).processing) {
                    _push3(`<div class="absolute inset-0 flex items-center justify-center bg-[var(--primary)] text-white"${_scopeId2}><span class="text-[10px]"${_scopeId2}>${ssrInterpolate(unref(form).progress ? unref(form).progress.percentage + "%" : "جاري الحفظ...")}</span><div class="absolute bottom-0 left-0 h-1 bg-white" style="${ssrRenderStyle({ width: (unref(form).progress ? unref(form).progress.percentage : 100) + "%" })}"${_scopeId2}></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("span", {
                      class: [{ "opacity-0": unref(form).processing }, "flex items-center"]
                    }, [
                      createVNode(unref(Save), { class: "ml-1.5 h-3 w-3" }),
                      createTextVNode(" " + toDisplayString(__props.lesson ? "حفظ التعديل" : "حفظ الدروس"), 1)
                    ], 2),
                    unref(form).processing ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "absolute inset-0 flex items-center justify-center bg-[var(--primary)] text-white"
                    }, [
                      createVNode("span", { class: "text-[10px]" }, toDisplayString(unref(form).progress ? unref(form).progress.percentage + "%" : "جاري الحفظ..."), 1),
                      createVNode("div", {
                        class: "absolute bottom-0 left-0 h-1 bg-white",
                        style: { width: (unref(form).progress ? unref(form).progress.percentage : 100) + "%" }
                      }, null, 4)
                    ])) : createCommentVNode("", true)
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
                              _push5(` الإجراءات `);
                            } else {
                              return [
                                createVNode(unref(Settings), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" }),
                                createTextVNode(" الإجراءات ")
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
                              createTextVNode(" الإجراءات ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-3 space-y-3 bg-[var(--card)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="p-2.5 rounded bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] font-normal text-[10px] leading-relaxed"${_scopeId3}> يمكنك إضافة عدة دروس في طلب واحد. سيتم تخزينها بالترتيب الموضح أدناه. </div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$2), {
                          type: "button",
                          variant: "outline",
                          onClick: addLesson,
                          class: "w-full h-8 text-[11px] font-normal border-dashed border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--muted-foreground)] rounded"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Plus), { class: "ml-1.5 h-3.5 w-3.5 text-[var(--primary)]" }, null, _parent5, _scopeId4));
                              _push5(` إضافة درس آخر للقائمة `);
                            } else {
                              return [
                                createVNode(unref(Plus), { class: "ml-1.5 h-3.5 w-3.5 text-[var(--primary)]" }),
                                createTextVNode(" إضافة درس آخر للقائمة ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "p-2.5 rounded bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] font-normal text-[10px] leading-relaxed" }, " يمكنك إضافة عدة دروس في طلب واحد. سيتم تخزينها بالترتيب الموضح أدناه. "),
                          createVNode(unref(_sfc_main$2), {
                            type: "button",
                            variant: "outline",
                            onClick: addLesson,
                            class: "w-full h-8 text-[11px] font-normal border-dashed border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--muted-foreground)] rounded"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Plus), { class: "ml-1.5 h-3.5 w-3.5 text-[var(--primary)]" }),
                              createTextVNode(" إضافة درس آخر للقائمة ")
                            ]),
                            _: 1
                          })
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
                            createTextVNode(" الإجراءات ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-3 space-y-3 bg-[var(--card)]" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "p-2.5 rounded bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] font-normal text-[10px] leading-relaxed" }, " يمكنك إضافة عدة دروس في طلب واحد. سيتم تخزينها بالترتيب الموضح أدناه. "),
                        createVNode(unref(_sfc_main$2), {
                          type: "button",
                          variant: "outline",
                          onClick: addLesson,
                          class: "w-full h-8 text-[11px] font-normal border-dashed border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--muted-foreground)] rounded"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Plus), { class: "ml-1.5 h-3.5 w-3.5 text-[var(--primary)]" }),
                            createTextVNode(" إضافة درس آخر للقائمة ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</aside><div class="flex-1 w-full space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(unref(form).lessons, (lessonItem, lIdx) => {
              _push2(`<div class="relative group/lesson"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-3 bg-[var(--muted)] flex flex-row items-center justify-between border-b border-[var(--border)] space-y-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-2.5 flex-1"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$7), {
                            variant: "outline",
                            class: "h-5 min-w-[20px] rounded bg-[var(--primary)] text-white font-normal text-[10px] p-0 flex items-center justify-center border-none shadow-none"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(lIdx + 1)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(lIdx + 1), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$8), {
                            modelValue: lessonItem.title,
                            "onUpdate:modelValue": ($event) => lessonItem.title = $event,
                            placeholder: "عنوان الدرس...",
                            class: "border-none shadow-none focus-visible:ring-0 text-[13px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                          if (unref(form).lessons.length > 1) {
                            _push4(ssrRenderComponent(unref(_sfc_main$2), {
                              type: "button",
                              variant: "ghost",
                              size: "icon",
                              onClick: ($event) => removeLesson(lIdx),
                              class: "h-7 w-7 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(Trash2), { class: "h-4 w-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2.5 flex-1" }, [
                              createVNode(unref(_sfc_main$7), {
                                variant: "outline",
                                class: "h-5 min-w-[20px] rounded bg-[var(--primary)] text-white font-normal text-[10px] p-0 flex items-center justify-center border-none shadow-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(lIdx + 1), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$8), {
                                modelValue: lessonItem.title,
                                "onUpdate:modelValue": ($event) => lessonItem.title = $event,
                                placeholder: "عنوان الدرس...",
                                class: "border-none shadow-none focus-visible:ring-0 text-[13px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            unref(form).lessons.length > 1 ? (openBlock(), createBlock(unref(_sfc_main$2), {
                              key: 0,
                              type: "button",
                              variant: "ghost",
                              size: "icon",
                              onClick: ($event) => removeLesson(lIdx),
                              class: "h-7 w-7 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Trash2), { class: "h-4 w-4" })
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-4 space-y-6 bg-[var(--card)]" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId3}><div class="space-y-1.5"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`ملف الفيديو`);
                              } else {
                                return [
                                  createTextVNode("ملف الفيديو")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="relative"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$8), {
                            type: "file",
                            accept: "video/mp4,video/webm,video/ogg",
                            onChange: (e) => handleVideoUpload(e, lIdx),
                            class: "h-8.5 text-[12px] border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] file:bg-[var(--muted)] file:text-[var(--foreground)] file:border file:border-[var(--border)] file:rounded file:px-3 file:py-1 file:mr-2 file:text-[10px] file:font-normal cursor-pointer"
                          }, null, _parent4, _scopeId3));
                          if (lessonItem.video_url) {
                            _push4(`<p class="text-[10px] text-[var(--primary)] mt-1 font-normal flex items-center gap-1"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Video), { class: "h-3 w-3" }, null, _parent4, _scopeId3));
                            _push4(` يوجد فيديو مرفوع مسبقاً </p>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></div><div class="space-y-1.5"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`مدة الدرس (بالدقائق)`);
                              } else {
                                return [
                                  createTextVNode("مدة الدرس (بالدقائق)")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$8), {
                            type: "number",
                            modelValue: lessonItem.duration,
                            "onUpdate:modelValue": ($event) => lessonItem.duration = $event,
                            class: "h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></div><div class="space-y-1.5"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-1.5" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(FileText), { class: "h-3 w-3" }, null, _parent5, _scopeId4));
                                _push5(` محتوى الدرس وملاحظات للطالب `);
                              } else {
                                return [
                                  createVNode(unref(FileText), { class: "h-3 w-3" }),
                                  createTextVNode(" محتوى الدرس وملاحظات للطالب ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]"${_scopeId3}><input type="checkbox"${ssrRenderAttr("id", "preview-" + lIdx)}${ssrIncludeBooleanAttr(Array.isArray(lessonItem.is_preview) ? ssrLooseContain(lessonItem.is_preview, null) : lessonItem.is_preview) ? " checked" : ""} class="h-3 w-3 rounded text-[var(--primary)] border-[var(--border)] bg-[var(--card)] focus:ring-[var(--primary)]"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$9), {
                            for: "preview-" + lIdx,
                            class: "text-[10px] font-normal text-[var(--muted-foreground)] cursor-pointer select-none"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`معاينة مجانية`);
                              } else {
                                return [
                                  createTextVNode("معاينة مجانية")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div><textarea rows="6" class="w-full min-h-[120px] rounded-md border border-[var(--border)] p-3 text-[12px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] shadow-none bg-[var(--card)] text-[var(--foreground)]" placeholder="اشرح محتوى الدرس أو أضف روابط خارجية..."${_scopeId3}>${ssrInterpolate(lessonItem.content)}</textarea></div><div class="grid grid-cols-1 xl:grid-cols-2 gap-6"${_scopeId3}><div class="space-y-3"${_scopeId3}><div class="flex items-center justify-between border-b border-[var(--border)] pb-1"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center gap-1.5" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Link$1), { class: "h-3 w-3 text-[var(--primary)]" }, null, _parent5, _scopeId4));
                                _push5(` المصادر `);
                              } else {
                                return [
                                  createVNode(unref(Link$1), { class: "h-3 w-3 text-[var(--primary)]" }),
                                  createTextVNode(" المصادر ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            onClick: ($event) => addResource(lIdx),
                            class: "h-6 text-[9px] font-normal text-[var(--primary)] hover:bg-[var(--muted)]"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` + إضافة `);
                              } else {
                                return [
                                  createTextVNode(" + إضافة ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="space-y-1.5"${_scopeId3}><!--[-->`);
                          ssrRenderList(lessonItem.resources, (res, rIdx) => {
                            _push4(`<div class="flex items-center gap-2 p-1.5 bg-[var(--muted)] border border-[var(--border)] rounded-md"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$8), {
                              modelValue: res.title,
                              "onUpdate:modelValue": ($event) => res.title = $event,
                              placeholder: "الاسم",
                              class: "h-7 text-[11px] flex-1 bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(_sfc_main$8), {
                              modelValue: res.url,
                              "onUpdate:modelValue": ($event) => res.url = $event,
                              placeholder: "الرابط",
                              class: "h-7 text-[11px] flex-1 bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(_sfc_main$2), {
                              onClick: ($event) => removeResource(lIdx, rIdx),
                              variant: "ghost",
                              size: "icon",
                              class: "h-7 w-7 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(X), { class: "h-3 w-3" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(X), { class: "h-3 w-3" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          });
                          _push4(`<!--]-->`);
                          if (lessonItem.resources.length === 0) {
                            _push4(`<div class="text-center py-4 border border-dashed border-[var(--border)] rounded-md text-[10px] text-[var(--muted-foreground)] italic"${_scopeId3}> لا توجد ملفات مرفقة. </div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></div><div class="space-y-3"${_scopeId3}><div class="flex items-center justify-between border-b border-[var(--border)] pb-1"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center gap-1.5" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(HelpCircle), { class: "h-3 w-3 text-[var(--primary)]" }, null, _parent5, _scopeId4));
                                _push5(` الأسئلة الشائعة `);
                              } else {
                                return [
                                  createVNode(unref(HelpCircle), { class: "h-3 w-3 text-[var(--primary)]" }),
                                  createTextVNode(" الأسئلة الشائعة ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$2), {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            onClick: ($event) => addFaq(lIdx),
                            class: "h-6 text-[9px] font-normal text-[var(--primary)] hover:bg-[var(--muted)]"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` + إضافة `);
                              } else {
                                return [
                                  createTextVNode(" + إضافة ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="space-y-2"${_scopeId3}><!--[-->`);
                          ssrRenderList(lessonItem.faqs, (faq, fIdx) => {
                            _push4(`<div class="p-2 bg-[var(--muted)] rounded-md border border-[var(--border)] space-y-2 relative text-right"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$8), {
                              modelValue: faq.q,
                              "onUpdate:modelValue": ($event) => faq.q = $event,
                              placeholder: "السؤال",
                              class: "h-7 text-[11px] font-normal bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                            }, null, _parent4, _scopeId3));
                            _push4(`<textarea rows="2" class="w-full p-2 rounded bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] text-[11px] min-h-[40px] outline-none shadow-none" placeholder="الإجابة..."${_scopeId3}>${ssrInterpolate(faq.a)}</textarea>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$2), {
                              onClick: ($event) => removeFaq(lIdx, fIdx),
                              variant: "ghost",
                              size: "icon",
                              class: "absolute top-1 left-1 h-6 w-6 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(Trash2), { class: "h-3 w-3" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(Trash2), { class: "h-3 w-3" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          });
                          _push4(`<!--]-->`);
                          if (lessonItem.faqs.length === 0) {
                            _push4(`<div class="text-center py-4 border border-dashed border-[var(--border)] rounded-md text-[10px] text-[var(--muted-foreground)] italic"${_scopeId3}> لم تضف أي أسئلة لهذا الدرس. </div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("ملف الفيديو")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(unref(_sfc_main$8), {
                                    type: "file",
                                    accept: "video/mp4,video/webm,video/ogg",
                                    onChange: (e) => handleVideoUpload(e, lIdx),
                                    class: "h-8.5 text-[12px] border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] file:bg-[var(--muted)] file:text-[var(--foreground)] file:border file:border-[var(--border)] file:rounded file:px-3 file:py-1 file:mr-2 file:text-[10px] file:font-normal cursor-pointer"
                                  }, null, 8, ["onChange"]),
                                  lessonItem.video_url ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "text-[10px] text-[var(--primary)] mt-1 font-normal flex items-center gap-1"
                                  }, [
                                    createVNode(unref(Video), { class: "h-3 w-3" }),
                                    createTextVNode(" يوجد فيديو مرفوع مسبقاً ")
                                  ])) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("مدة الدرس (بالدقائق)")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  type: "number",
                                  modelValue: lessonItem.duration,
                                  "onUpdate:modelValue": ($event) => lessonItem.duration = $event,
                                  class: "h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-1.5" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FileText), { class: "h-3 w-3" }),
                                    createTextVNode(" محتوى الدرس وملاحظات للطالب ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]" }, [
                                  withDirectives(createVNode("input", {
                                    type: "checkbox",
                                    id: "preview-" + lIdx,
                                    "onUpdate:modelValue": ($event) => lessonItem.is_preview = $event,
                                    class: "h-3 w-3 rounded text-[var(--primary)] border-[var(--border)] bg-[var(--card)] focus:ring-[var(--primary)]"
                                  }, null, 8, ["id", "onUpdate:modelValue"]), [
                                    [vModelCheckbox, lessonItem.is_preview]
                                  ]),
                                  createVNode(unref(_sfc_main$9), {
                                    for: "preview-" + lIdx,
                                    class: "text-[10px] font-normal text-[var(--muted-foreground)] cursor-pointer select-none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("معاينة مجانية")
                                    ]),
                                    _: 1
                                  }, 8, ["for"])
                                ])
                              ]),
                              withDirectives(createVNode("textarea", {
                                "onUpdate:modelValue": ($event) => lessonItem.content = $event,
                                rows: "6",
                                class: "w-full min-h-[120px] rounded-md border border-[var(--border)] p-3 text-[12px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] shadow-none bg-[var(--card)] text-[var(--foreground)]",
                                placeholder: "اشرح محتوى الدرس أو أضف روابط خارجية..."
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, lessonItem.content]
                              ])
                            ]),
                            createVNode("div", { class: "grid grid-cols-1 xl:grid-cols-2 gap-6" }, [
                              createVNode("div", { class: "space-y-3" }, [
                                createVNode("div", { class: "flex items-center justify-between border-b border-[var(--border)] pb-1" }, [
                                  createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center gap-1.5" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Link$1), { class: "h-3 w-3 text-[var(--primary)]" }),
                                      createTextVNode(" المصادر ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$2), {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ($event) => addResource(lIdx),
                                    class: "h-6 text-[9px] font-normal text-[var(--primary)] hover:bg-[var(--muted)]"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" + إضافة ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "space-y-1.5" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(lessonItem.resources, (res, rIdx) => {
                                    return openBlock(), createBlock("div", {
                                      key: rIdx,
                                      class: "flex items-center gap-2 p-1.5 bg-[var(--muted)] border border-[var(--border)] rounded-md"
                                    }, [
                                      createVNode(unref(_sfc_main$8), {
                                        modelValue: res.title,
                                        "onUpdate:modelValue": ($event) => res.title = $event,
                                        placeholder: "الاسم",
                                        class: "h-7 text-[11px] flex-1 bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(_sfc_main$8), {
                                        modelValue: res.url,
                                        "onUpdate:modelValue": ($event) => res.url = $event,
                                        placeholder: "الرابط",
                                        class: "h-7 text-[11px] flex-1 bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(_sfc_main$2), {
                                        onClick: ($event) => removeResource(lIdx, rIdx),
                                        variant: "ghost",
                                        size: "icon",
                                        class: "h-7 w-7 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(X), { class: "h-3 w-3" })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]);
                                  }), 128)),
                                  lessonItem.resources.length === 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-center py-4 border border-dashed border-[var(--border)] rounded-md text-[10px] text-[var(--muted-foreground)] italic"
                                  }, " لا توجد ملفات مرفقة. ")) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", { class: "space-y-3" }, [
                                createVNode("div", { class: "flex items-center justify-between border-b border-[var(--border)] pb-1" }, [
                                  createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center gap-1.5" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(HelpCircle), { class: "h-3 w-3 text-[var(--primary)]" }),
                                      createTextVNode(" الأسئلة الشائعة ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$2), {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ($event) => addFaq(lIdx),
                                    class: "h-6 text-[9px] font-normal text-[var(--primary)] hover:bg-[var(--muted)]"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" + إضافة ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "space-y-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(lessonItem.faqs, (faq, fIdx) => {
                                    return openBlock(), createBlock("div", {
                                      key: fIdx,
                                      class: "p-2 bg-[var(--muted)] rounded-md border border-[var(--border)] space-y-2 relative text-right"
                                    }, [
                                      createVNode(unref(_sfc_main$8), {
                                        modelValue: faq.q,
                                        "onUpdate:modelValue": ($event) => faq.q = $event,
                                        placeholder: "السؤال",
                                        class: "h-7 text-[11px] font-normal bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      withDirectives(createVNode("textarea", {
                                        "onUpdate:modelValue": ($event) => faq.a = $event,
                                        rows: "2",
                                        class: "w-full p-2 rounded bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] text-[11px] min-h-[40px] outline-none shadow-none",
                                        placeholder: "الإجابة..."
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, faq.a]
                                      ]),
                                      createVNode(unref(_sfc_main$2), {
                                        onClick: ($event) => removeFaq(lIdx, fIdx),
                                        variant: "ghost",
                                        size: "icon",
                                        class: "absolute top-1 left-1 h-6 w-6 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Trash2), { class: "h-3 w-3" })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]);
                                  }), 128)),
                                  lessonItem.faqs.length === 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-center py-4 border border-dashed border-[var(--border)] rounded-md text-[10px] text-[var(--muted-foreground)] italic"
                                  }, " لم تضف أي أسئلة لهذا الدرس. ")) : createCommentVNode("", true)
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$4), { class: "p-3 bg-[var(--muted)] flex flex-row items-center justify-between border-b border-[var(--border)] space-y-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2.5 flex-1" }, [
                            createVNode(unref(_sfc_main$7), {
                              variant: "outline",
                              class: "h-5 min-w-[20px] rounded bg-[var(--primary)] text-white font-normal text-[10px] p-0 flex items-center justify-center border-none shadow-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(lIdx + 1), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$8), {
                              modelValue: lessonItem.title,
                              "onUpdate:modelValue": ($event) => lessonItem.title = $event,
                              placeholder: "عنوان الدرس...",
                              class: "border-none shadow-none focus-visible:ring-0 text-[13px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          unref(form).lessons.length > 1 ? (openBlock(), createBlock(unref(_sfc_main$2), {
                            key: 0,
                            type: "button",
                            variant: "ghost",
                            size: "icon",
                            onClick: ($event) => removeLesson(lIdx),
                            class: "h-7 w-7 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Trash2), { class: "h-4 w-4" })
                            ]),
                            _: 1
                          }, 8, ["onClick"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$6), { class: "p-4 space-y-6 bg-[var(--card)]" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                default: withCtx(() => [
                                  createTextVNode("ملف الفيديو")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative" }, [
                                createVNode(unref(_sfc_main$8), {
                                  type: "file",
                                  accept: "video/mp4,video/webm,video/ogg",
                                  onChange: (e) => handleVideoUpload(e, lIdx),
                                  class: "h-8.5 text-[12px] border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] file:bg-[var(--muted)] file:text-[var(--foreground)] file:border file:border-[var(--border)] file:rounded file:px-3 file:py-1 file:mr-2 file:text-[10px] file:font-normal cursor-pointer"
                                }, null, 8, ["onChange"]),
                                lessonItem.video_url ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-[10px] text-[var(--primary)] mt-1 font-normal flex items-center gap-1"
                                }, [
                                  createVNode(unref(Video), { class: "h-3 w-3" }),
                                  createTextVNode(" يوجد فيديو مرفوع مسبقاً ")
                                ])) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                default: withCtx(() => [
                                  createTextVNode("مدة الدرس (بالدقائق)")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), {
                                type: "number",
                                modelValue: lessonItem.duration,
                                "onUpdate:modelValue": ($event) => lessonItem.duration = $event,
                                class: "h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-1.5" }, {
                                default: withCtx(() => [
                                  createVNode(unref(FileText), { class: "h-3 w-3" }),
                                  createTextVNode(" محتوى الدرس وملاحظات للطالب ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]" }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  id: "preview-" + lIdx,
                                  "onUpdate:modelValue": ($event) => lessonItem.is_preview = $event,
                                  class: "h-3 w-3 rounded text-[var(--primary)] border-[var(--border)] bg-[var(--card)] focus:ring-[var(--primary)]"
                                }, null, 8, ["id", "onUpdate:modelValue"]), [
                                  [vModelCheckbox, lessonItem.is_preview]
                                ]),
                                createVNode(unref(_sfc_main$9), {
                                  for: "preview-" + lIdx,
                                  class: "text-[10px] font-normal text-[var(--muted-foreground)] cursor-pointer select-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("معاينة مجانية")
                                  ]),
                                  _: 1
                                }, 8, ["for"])
                              ])
                            ]),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => lessonItem.content = $event,
                              rows: "6",
                              class: "w-full min-h-[120px] rounded-md border border-[var(--border)] p-3 text-[12px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] shadow-none bg-[var(--card)] text-[var(--foreground)]",
                              placeholder: "اشرح محتوى الدرس أو أضف روابط خارجية..."
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, lessonItem.content]
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 xl:grid-cols-2 gap-6" }, [
                            createVNode("div", { class: "space-y-3" }, [
                              createVNode("div", { class: "flex items-center justify-between border-b border-[var(--border)] pb-1" }, [
                                createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center gap-1.5" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Link$1), { class: "h-3 w-3 text-[var(--primary)]" }),
                                    createTextVNode(" المصادر ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$2), {
                                  type: "button",
                                  variant: "ghost",
                                  size: "sm",
                                  onClick: ($event) => addResource(lIdx),
                                  class: "h-6 text-[9px] font-normal text-[var(--primary)] hover:bg-[var(--muted)]"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" + إضافة ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "space-y-1.5" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(lessonItem.resources, (res, rIdx) => {
                                  return openBlock(), createBlock("div", {
                                    key: rIdx,
                                    class: "flex items-center gap-2 p-1.5 bg-[var(--muted)] border border-[var(--border)] rounded-md"
                                  }, [
                                    createVNode(unref(_sfc_main$8), {
                                      modelValue: res.title,
                                      "onUpdate:modelValue": ($event) => res.title = $event,
                                      placeholder: "الاسم",
                                      class: "h-7 text-[11px] flex-1 bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(_sfc_main$8), {
                                      modelValue: res.url,
                                      "onUpdate:modelValue": ($event) => res.url = $event,
                                      placeholder: "الرابط",
                                      class: "h-7 text-[11px] flex-1 bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(_sfc_main$2), {
                                      onClick: ($event) => removeResource(lIdx, rIdx),
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(X), { class: "h-3 w-3" })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]);
                                }), 128)),
                                lessonItem.resources.length === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-center py-4 border border-dashed border-[var(--border)] rounded-md text-[10px] text-[var(--muted-foreground)] italic"
                                }, " لا توجد ملفات مرفقة. ")) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "space-y-3" }, [
                              createVNode("div", { class: "flex items-center justify-between border-b border-[var(--border)] pb-1" }, [
                                createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center gap-1.5" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(HelpCircle), { class: "h-3 w-3 text-[var(--primary)]" }),
                                    createTextVNode(" الأسئلة الشائعة ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$2), {
                                  type: "button",
                                  variant: "ghost",
                                  size: "sm",
                                  onClick: ($event) => addFaq(lIdx),
                                  class: "h-6 text-[9px] font-normal text-[var(--primary)] hover:bg-[var(--muted)]"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" + إضافة ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "space-y-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(lessonItem.faqs, (faq, fIdx) => {
                                  return openBlock(), createBlock("div", {
                                    key: fIdx,
                                    class: "p-2 bg-[var(--muted)] rounded-md border border-[var(--border)] space-y-2 relative text-right"
                                  }, [
                                    createVNode(unref(_sfc_main$8), {
                                      modelValue: faq.q,
                                      "onUpdate:modelValue": ($event) => faq.q = $event,
                                      placeholder: "السؤال",
                                      class: "h-7 text-[11px] font-normal bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    withDirectives(createVNode("textarea", {
                                      "onUpdate:modelValue": ($event) => faq.a = $event,
                                      rows: "2",
                                      class: "w-full p-2 rounded bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] text-[11px] min-h-[40px] outline-none shadow-none",
                                      placeholder: "الإجابة..."
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, faq.a]
                                    ]),
                                    createVNode(unref(_sfc_main$2), {
                                      onClick: ($event) => removeFaq(lIdx, fIdx),
                                      variant: "ghost",
                                      size: "icon",
                                      class: "absolute top-1 left-1 h-6 w-6 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Trash2), { class: "h-3 w-3" })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]);
                                }), 128)),
                                lessonItem.faqs.length === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-center py-4 border border-dashed border-[var(--border)] rounded-md text-[10px] text-[var(--muted-foreground)] italic"
                                }, " لم تضف أي أسئلة لهذا الدرس. ")) : createCommentVNode("", true)
                              ])
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
                      href: _ctx.route("teacher.courses.edit", __props.course.id)
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
                      class: "h-7 text-[11px] px-6 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 shadow-none relative overflow-hidden"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: [{ "opacity-0": unref(form).processing }, "flex items-center"]
                        }, [
                          createVNode(unref(Save), { class: "ml-1.5 h-3 w-3" }),
                          createTextVNode(" " + toDisplayString(__props.lesson ? "حفظ التعديل" : "حفظ الدروس"), 1)
                        ], 2),
                        unref(form).processing ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute inset-0 flex items-center justify-center bg-[var(--primary)] text-white"
                        }, [
                          createVNode("span", { class: "text-[10px]" }, toDisplayString(unref(form).progress ? unref(form).progress.percentage + "%" : "جاري الحفظ..."), 1),
                          createVNode("div", {
                            class: "absolute bottom-0 left-0 h-1 bg-white",
                            style: { width: (unref(form).progress ? unref(form).progress.percentage : 100) + "%" }
                          }, null, 4)
                        ])) : createCommentVNode("", true)
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
                                  createTextVNode(" الإجراءات ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), { class: "p-3 space-y-3 bg-[var(--card)]" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "p-2.5 rounded bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] font-normal text-[10px] leading-relaxed" }, " يمكنك إضافة عدة دروس في طلب واحد. سيتم تخزينها بالترتيب الموضح أدناه. "),
                              createVNode(unref(_sfc_main$2), {
                                type: "button",
                                variant: "outline",
                                onClick: addLesson,
                                class: "w-full h-8 text-[11px] font-normal border-dashed border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--muted-foreground)] rounded"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Plus), { class: "ml-1.5 h-3.5 w-3.5 text-[var(--primary)]" }),
                                  createTextVNode(" إضافة درس آخر للقائمة ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex-1 w-full space-y-6" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(form).lessons, (lessonItem, lIdx) => {
                        return openBlock(), createBlock("div", {
                          key: lIdx,
                          class: "relative group/lesson"
                        }, [
                          createVNode(unref(_sfc_main$3), { class: "border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$4), { class: "p-3 bg-[var(--muted)] flex flex-row items-center justify-between border-b border-[var(--border)] space-y-0" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2.5 flex-1" }, [
                                    createVNode(unref(_sfc_main$7), {
                                      variant: "outline",
                                      class: "h-5 min-w-[20px] rounded bg-[var(--primary)] text-white font-normal text-[10px] p-0 flex items-center justify-center border-none shadow-none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(lIdx + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(unref(_sfc_main$8), {
                                      modelValue: lessonItem.title,
                                      "onUpdate:modelValue": ($event) => lessonItem.title = $event,
                                      placeholder: "عنوان الدرس...",
                                      class: "border-none shadow-none focus-visible:ring-0 text-[13px] font-normal bg-transparent p-0 h-auto text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  unref(form).lessons.length > 1 ? (openBlock(), createBlock(unref(_sfc_main$2), {
                                    key: 0,
                                    type: "button",
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ($event) => removeLesson(lIdx),
                                    class: "h-7 w-7 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Trash2), { class: "h-4 w-4" })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$6), { class: "p-4 space-y-6 bg-[var(--card)]" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                                    createVNode("div", { class: "space-y-1.5" }, [
                                      createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                        default: withCtx(() => [
                                          createTextVNode("ملف الفيديو")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(unref(_sfc_main$8), {
                                          type: "file",
                                          accept: "video/mp4,video/webm,video/ogg",
                                          onChange: (e) => handleVideoUpload(e, lIdx),
                                          class: "h-8.5 text-[12px] border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] file:bg-[var(--muted)] file:text-[var(--foreground)] file:border file:border-[var(--border)] file:rounded file:px-3 file:py-1 file:mr-2 file:text-[10px] file:font-normal cursor-pointer"
                                        }, null, 8, ["onChange"]),
                                        lessonItem.video_url ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "text-[10px] text-[var(--primary)] mt-1 font-normal flex items-center gap-1"
                                        }, [
                                          createVNode(unref(Video), { class: "h-3 w-3" }),
                                          createTextVNode(" يوجد فيديو مرفوع مسبقاً ")
                                        ])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("div", { class: "space-y-1.5" }, [
                                      createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)]" }, {
                                        default: withCtx(() => [
                                          createTextVNode("مدة الدرس (بالدقائق)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$8), {
                                        type: "number",
                                        modelValue: lessonItem.duration,
                                        "onUpdate:modelValue": ($event) => lessonItem.duration = $event,
                                        class: "h-8.5 text-[12px] font-normal text-center border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus-visible:ring-[var(--primary)]"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "space-y-1.5" }, [
                                    createVNode("div", { class: "flex items-center justify-between" }, [
                                      createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-1.5" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(FileText), { class: "h-3 w-3" }),
                                          createTextVNode(" محتوى الدرس وملاحظات للطالب ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]" }, [
                                        withDirectives(createVNode("input", {
                                          type: "checkbox",
                                          id: "preview-" + lIdx,
                                          "onUpdate:modelValue": ($event) => lessonItem.is_preview = $event,
                                          class: "h-3 w-3 rounded text-[var(--primary)] border-[var(--border)] bg-[var(--card)] focus:ring-[var(--primary)]"
                                        }, null, 8, ["id", "onUpdate:modelValue"]), [
                                          [vModelCheckbox, lessonItem.is_preview]
                                        ]),
                                        createVNode(unref(_sfc_main$9), {
                                          for: "preview-" + lIdx,
                                          class: "text-[10px] font-normal text-[var(--muted-foreground)] cursor-pointer select-none"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("معاينة مجانية")
                                          ]),
                                          _: 1
                                        }, 8, ["for"])
                                      ])
                                    ]),
                                    withDirectives(createVNode("textarea", {
                                      "onUpdate:modelValue": ($event) => lessonItem.content = $event,
                                      rows: "6",
                                      class: "w-full min-h-[120px] rounded-md border border-[var(--border)] p-3 text-[12px] font-normal outline-none focus:ring-1 focus:ring-[var(--primary)] shadow-none bg-[var(--card)] text-[var(--foreground)]",
                                      placeholder: "اشرح محتوى الدرس أو أضف روابط خارجية..."
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, lessonItem.content]
                                    ])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-1 xl:grid-cols-2 gap-6" }, [
                                    createVNode("div", { class: "space-y-3" }, [
                                      createVNode("div", { class: "flex items-center justify-between border-b border-[var(--border)] pb-1" }, [
                                        createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center gap-1.5" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Link$1), { class: "h-3 w-3 text-[var(--primary)]" }),
                                            createTextVNode(" المصادر ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$2), {
                                          type: "button",
                                          variant: "ghost",
                                          size: "sm",
                                          onClick: ($event) => addResource(lIdx),
                                          class: "h-6 text-[9px] font-normal text-[var(--primary)] hover:bg-[var(--muted)]"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" + إضافة ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      createVNode("div", { class: "space-y-1.5" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(lessonItem.resources, (res, rIdx) => {
                                          return openBlock(), createBlock("div", {
                                            key: rIdx,
                                            class: "flex items-center gap-2 p-1.5 bg-[var(--muted)] border border-[var(--border)] rounded-md"
                                          }, [
                                            createVNode(unref(_sfc_main$8), {
                                              modelValue: res.title,
                                              "onUpdate:modelValue": ($event) => res.title = $event,
                                              placeholder: "الاسم",
                                              class: "h-7 text-[11px] flex-1 bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$8), {
                                              modelValue: res.url,
                                              "onUpdate:modelValue": ($event) => res.url = $event,
                                              placeholder: "الرابط",
                                              class: "h-7 text-[11px] flex-1 bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(_sfc_main$2), {
                                              onClick: ($event) => removeResource(lIdx, rIdx),
                                              variant: "ghost",
                                              size: "icon",
                                              class: "h-7 w-7 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(X), { class: "h-3 w-3" })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]);
                                        }), 128)),
                                        lessonItem.resources.length === 0 ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "text-center py-4 border border-dashed border-[var(--border)] rounded-md text-[10px] text-[var(--muted-foreground)] italic"
                                        }, " لا توجد ملفات مرفقة. ")) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("div", { class: "space-y-3" }, [
                                      createVNode("div", { class: "flex items-center justify-between border-b border-[var(--border)] pb-1" }, [
                                        createVNode(unref(_sfc_main$9), { class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] flex items-center gap-1.5" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(HelpCircle), { class: "h-3 w-3 text-[var(--primary)]" }),
                                            createTextVNode(" الأسئلة الشائعة ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$2), {
                                          type: "button",
                                          variant: "ghost",
                                          size: "sm",
                                          onClick: ($event) => addFaq(lIdx),
                                          class: "h-6 text-[9px] font-normal text-[var(--primary)] hover:bg-[var(--muted)]"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" + إضافة ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      createVNode("div", { class: "space-y-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(lessonItem.faqs, (faq, fIdx) => {
                                          return openBlock(), createBlock("div", {
                                            key: fIdx,
                                            class: "p-2 bg-[var(--muted)] rounded-md border border-[var(--border)] space-y-2 relative text-right"
                                          }, [
                                            createVNode(unref(_sfc_main$8), {
                                              modelValue: faq.q,
                                              "onUpdate:modelValue": ($event) => faq.q = $event,
                                              placeholder: "السؤال",
                                              class: "h-7 text-[11px] font-normal bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] focus-visible:ring-[var(--primary)] shadow-none"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            withDirectives(createVNode("textarea", {
                                              "onUpdate:modelValue": ($event) => faq.a = $event,
                                              rows: "2",
                                              class: "w-full p-2 rounded bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] text-[11px] min-h-[40px] outline-none shadow-none",
                                              placeholder: "الإجابة..."
                                            }, null, 8, ["onUpdate:modelValue"]), [
                                              [vModelText, faq.a]
                                            ]),
                                            createVNode(unref(_sfc_main$2), {
                                              onClick: ($event) => removeFaq(lIdx, fIdx),
                                              variant: "ghost",
                                              size: "icon",
                                              class: "absolute top-1 left-1 h-6 w-6 text-[var(--muted-foreground)] hover:text-red-500 bg-transparent"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Trash2), { class: "h-3 w-3" })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ]);
                                        }), 128)),
                                        lessonItem.faqs.length === 0 ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "text-center py-4 border border-dashed border-[var(--border)] rounded-md text-[10px] text-[var(--muted-foreground)] italic"
                                        }, " لم تضف أي أسئلة لهذا الدرس. ")) : createCommentVNode("", true)
                                      ])
                                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Lessons/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
