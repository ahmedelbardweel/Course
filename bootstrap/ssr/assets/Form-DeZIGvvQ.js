import { unref, withCtx, createTextVNode, createVNode, toDisplayString, withDirectives, openBlock, createBlock, Fragment, renderList, vModelSelect, createCommentVNode, vModelCheckbox, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BAtzIAbQ.js";
import { useForm, Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$8 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$7 } from "./Label--EucbuAp.js";
import { _ as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, a as _sfc_main$6 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$9 } from "./Separator-CFmMgQM_.js";
import { ChevronLeft, Save, Settings, DollarSign, Info, Layers, PlusCircle, Edit, Trash2 } from "lucide-vue-next";
import { _ as _sfc_main$a } from "./index-CGK-4kfq.js";
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
    categories: Array
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const props = __props;
    const form = useForm({
      title: ((_a = props.course) == null ? void 0 : _a.title) || "",
      category_id: ((_b = props.course) == null ? void 0 : _b.category_id) || "",
      description: ((_c = props.course) == null ? void 0 : _c.description) || "",
      price: ((_d = props.course) == null ? void 0 : _d.price) || 0,
      level: ((_e = props.course) == null ? void 0 : _e.level) || "beginner",
      thumbnail: ((_f = props.course) == null ? void 0 : _f.thumbnail) || "",
      is_published: ((_g = props.course) == null ? void 0 : _g.is_published) || false,
      allow_study_rooms: ((_h = props.course) == null ? void 0 : _h.allow_study_rooms) ?? true,
      allow_timed_comments: ((_i = props.course) == null ? void 0 : _i.allow_timed_comments) ?? true
    });
    const submit = () => {
      if (props.course) {
        form.patch(route("teacher.courses.update", props.course.id));
      } else {
        form.post(route("teacher.courses.store"));
      }
    };
    const deleteLesson = (id) => {
      if (confirm("هل أنت متأكد من حذف هذا الدرس؟")) {
        router.delete(route("teacher.lessons.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.course ? "تعديل الكورس" : "إنشاء كورس جديد"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-zinc-50/20 text-[12px]"${_scopeId}><header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.courses.index"),
              class: "hover:text-zinc-900 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`الكورسات`);
                } else {
                  return [
                    createTextVNode("الكورسات")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-bold tracking-tight"${_scopeId}>${ssrInterpolate(__props.course ? "تعديل الكورس" : "إنشاء جديد")}</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.courses.index")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    variant: "ghost",
                    size: "sm",
                    class: "h-7 text-[11px] px-3 font-medium"
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
                      class: "h-7 text-[11px] px-3 font-medium"
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
              class: "h-7 text-[11px] px-6 font-bold shadow-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Save), { class: "ml-1.5 h-3 w-3" }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(__props.course ? "حفظ" : "نشر")}`);
                } else {
                  return [
                    createVNode(unref(Save), { class: "ml-1.5 h-3 w-3" }),
                    createTextVNode(" " + toDisplayString(__props.course ? "حفظ" : "نشر"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></header><main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto"${_scopeId}><div class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full mx-auto"${_scopeId}><aside class="w-full lg:w-80 space-y-4 shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none rounded-md bg-white" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-3 border-b border-zinc-50" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Settings), { class: "h-3.5 w-3.5 text-zinc-400" }, null, _parent5, _scopeId4));
                              _push5(` الإعدادات العامة `);
                            } else {
                              return [
                                createVNode(unref(Settings), { class: "h-3.5 w-3.5 text-zinc-400" }),
                                createTextVNode(" الإعدادات العامة ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight" }, {
                            default: withCtx(() => [
                              createVNode(unref(Settings), { class: "h-3.5 w-3.5 text-zinc-400" }),
                              createTextVNode(" الإعدادات العامة ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-3 space-y-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`التصنيف *`);
                            } else {
                              return [
                                createTextVNode("التصنيف *")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<select class="${ssrRenderClass(["w-full h-8.5 rounded-md border border-zinc-200 bg-white px-2.5 text-[12px] font-medium focus:ring-1 focus:ring-zinc-900 outline-none transition-all leading-none", unref(form).errors.category_id ? "border-destructive" : ""])}"${_scopeId3}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, "") : ssrLooseEqual(unref(form).category_id, "")) ? " selected" : ""}${_scopeId3}>اختر التصنيف...</option><!--[-->`);
                        ssrRenderList(__props.categories, (cat) => {
                          _push4(`<option${ssrRenderAttr("value", cat.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, cat.id) : ssrLooseEqual(unref(form).category_id, cat.id)) ? " selected" : ""}${_scopeId3}>${ssrInterpolate(cat.name)}</option>`);
                        });
                        _push4(`<!--]--></select>`);
                        if (unref(form).errors.category_id) {
                          _push4(`<p class="text-[10px] text-destructive italic"${_scopeId3}>${ssrInterpolate(unref(form).errors.category_id)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`المستوى`);
                            } else {
                              return [
                                createTextVNode("المستوى")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="grid grid-cols-1 gap-1"${_scopeId3}><!--[-->`);
                        ssrRenderList(["beginner", "intermediate", "advanced"], (lvl) => {
                          _push4(`<button type="button" class="${ssrRenderClass([[unref(form).level === lvl ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-100 bg-zinc-50/30 text-zinc-400 hover:border-zinc-200"], "px-3 py-1.5 rounded-md text-[11px] font-bold transition-all text-right border"])}"${_scopeId3}>${ssrInterpolate(lvl === "beginner" ? "مبتدئ" : lvl === "intermediate" ? "متوسط" : "متقدم")}</button>`);
                        });
                        _push4(`<!--]--></div></div><div class="space-y-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`السعر ($)`);
                            } else {
                              return [
                                createTextVNode("السعر ($)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="relative"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(DollarSign), { class: "absolute left-2.5 top-2 h-3.5 w-3.5 text-zinc-300" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          type: "number",
                          modelValue: unref(form).price,
                          "onUpdate:modelValue": ($event) => unref(form).price = $event,
                          class: "h-8.5 text-[12px] font-bold text-center border-zinc-200"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "my-1 opacity-50" }, null, _parent4, _scopeId3));
                        _push4(`<div class="space-y-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[11px] font-black text-zinc-300 uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`الصورة المصغرة`);
                            } else {
                              return [
                                createTextVNode("الصورة المصغرة")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          modelValue: unref(form).thumbnail,
                          "onUpdate:modelValue": ($event) => unref(form).thumbnail = $event,
                          placeholder: "رابط الصورة...",
                          class: "h-8.5 text-[11px] px-2.5"
                        }, null, _parent4, _scopeId3));
                        if (unref(form).thumbnail) {
                          _push4(`<div class="aspect-video rounded-md overflow-hidden border border-zinc-100 mt-2 bg-zinc-50 flex items-center justify-center"${_scopeId3}><img${ssrRenderAttr("src", unref(form).thumbnail)} class="w-full h-full object-cover"${_scopeId3}></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "my-1 opacity-50" }, null, _parent4, _scopeId3));
                        _push4(`<div class="space-y-2 pt-1"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_published) ? ssrLooseContain(unref(form).is_published, null) : unref(form).is_published) ? " checked" : ""} id="published" class="h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          for: "published",
                          class: "text-[11px] font-bold cursor-pointer"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`نشر الكورس للطلاب`);
                            } else {
                              return [
                                createTextVNode("نشر الكورس للطلاب")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center gap-2"${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).allow_study_rooms) ? ssrLooseContain(unref(form).allow_study_rooms, null) : unref(form).allow_study_rooms) ? " checked" : ""} id="study" class="h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          for: "study",
                          class: "text-[11px] font-bold cursor-pointer"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`تفعيل غرف الدراسة`);
                            } else {
                              return [
                                createTextVNode("تفعيل غرف الدراسة")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="flex items-center gap-2"${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).allow_timed_comments) ? ssrLooseContain(unref(form).allow_timed_comments, null) : unref(form).allow_timed_comments) ? " checked" : ""} id="comments" class="h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          for: "comments",
                          class: "text-[11px] font-bold cursor-pointer"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`التعليقات الموقوتة`);
                            } else {
                              return [
                                createTextVNode("التعليقات الموقوتة")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                              default: withCtx(() => [
                                createTextVNode("التصنيف *")
                              ]),
                              _: 1
                            }),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                              class: ["w-full h-8.5 rounded-md border border-zinc-200 bg-white px-2.5 text-[12px] font-medium focus:ring-1 focus:ring-zinc-900 outline-none transition-all leading-none", unref(form).errors.category_id ? "border-destructive" : ""]
                            }, [
                              createVNode("option", {
                                value: "",
                                disabled: ""
                              }, "اختر التصنيف..."),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
                                return openBlock(), createBlock("option", {
                                  key: cat.id,
                                  value: cat.id
                                }, toDisplayString(cat.name), 9, ["value"]);
                              }), 128))
                            ], 10, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).category_id]
                            ]),
                            unref(form).errors.category_id ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-[10px] text-destructive italic"
                            }, toDisplayString(unref(form).errors.category_id), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                              default: withCtx(() => [
                                createTextVNode("المستوى")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "grid grid-cols-1 gap-1" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(["beginner", "intermediate", "advanced"], (lvl) => {
                                return createVNode("button", {
                                  type: "button",
                                  key: lvl,
                                  onClick: ($event) => unref(form).level = lvl,
                                  class: [[unref(form).level === lvl ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-100 bg-zinc-50/30 text-zinc-400 hover:border-zinc-200"], "px-3 py-1.5 rounded-md text-[11px] font-bold transition-all text-right border"]
                                }, toDisplayString(lvl === "beginner" ? "مبتدئ" : lvl === "intermediate" ? "متوسط" : "متقدم"), 11, ["onClick"]);
                              }), 64))
                            ])
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                              default: withCtx(() => [
                                createTextVNode("السعر ($)")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "relative" }, [
                              createVNode(unref(DollarSign), { class: "absolute left-2.5 top-2 h-3.5 w-3.5 text-zinc-300" }),
                              createVNode(unref(_sfc_main$8), {
                                type: "number",
                                modelValue: unref(form).price,
                                "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                class: "h-8.5 text-[12px] font-bold text-center border-zinc-200"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode(unref(_sfc_main$9), { class: "my-1 opacity-50" }),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[11px] font-black text-zinc-300 uppercase tracking-widest" }, {
                              default: withCtx(() => [
                                createTextVNode("الصورة المصغرة")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              modelValue: unref(form).thumbnail,
                              "onUpdate:modelValue": ($event) => unref(form).thumbnail = $event,
                              placeholder: "رابط الصورة...",
                              class: "h-8.5 text-[11px] px-2.5"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).thumbnail ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "aspect-video rounded-md overflow-hidden border border-zinc-100 mt-2 bg-zinc-50 flex items-center justify-center"
                            }, [
                              createVNode("img", {
                                src: unref(form).thumbnail,
                                class: "w-full h-full object-cover"
                              }, null, 8, ["src"])
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode(unref(_sfc_main$9), { class: "my-1 opacity-50" }),
                          createVNode("div", { class: "space-y-2 pt-1" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => unref(form).is_published = $event,
                                id: "published",
                                class: "h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).is_published]
                              ]),
                              createVNode(unref(_sfc_main$7), {
                                for: "published",
                                class: "text-[11px] font-bold cursor-pointer"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("نشر الكورس للطلاب")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => unref(form).allow_study_rooms = $event,
                                id: "study",
                                class: "h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).allow_study_rooms]
                              ]),
                              createVNode(unref(_sfc_main$7), {
                                for: "study",
                                class: "text-[11px] font-bold cursor-pointer"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("تفعيل غرف الدراسة")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => unref(form).allow_timed_comments = $event,
                                id: "comments",
                                class: "h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).allow_timed_comments]
                              ]),
                              createVNode(unref(_sfc_main$7), {
                                for: "comments",
                                class: "text-[11px] font-bold cursor-pointer"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("التعليقات الموقوتة")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "p-3 border-b border-zinc-50" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight" }, {
                          default: withCtx(() => [
                            createVNode(unref(Settings), { class: "h-3.5 w-3.5 text-zinc-400" }),
                            createTextVNode(" الإعدادات العامة ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-3 space-y-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("التصنيف *")
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                            class: ["w-full h-8.5 rounded-md border border-zinc-200 bg-white px-2.5 text-[12px] font-medium focus:ring-1 focus:ring-zinc-900 outline-none transition-all leading-none", unref(form).errors.category_id ? "border-destructive" : ""]
                          }, [
                            createVNode("option", {
                              value: "",
                              disabled: ""
                            }, "اختر التصنيف..."),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
                              return openBlock(), createBlock("option", {
                                key: cat.id,
                                value: cat.id
                              }, toDisplayString(cat.name), 9, ["value"]);
                            }), 128))
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).category_id]
                          ]),
                          unref(form).errors.category_id ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-[10px] text-destructive italic"
                          }, toDisplayString(unref(form).errors.category_id), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "space-y-1.5" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("المستوى")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "grid grid-cols-1 gap-1" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(["beginner", "intermediate", "advanced"], (lvl) => {
                              return createVNode("button", {
                                type: "button",
                                key: lvl,
                                onClick: ($event) => unref(form).level = lvl,
                                class: [[unref(form).level === lvl ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-100 bg-zinc-50/30 text-zinc-400 hover:border-zinc-200"], "px-3 py-1.5 rounded-md text-[11px] font-bold transition-all text-right border"]
                              }, toDisplayString(lvl === "beginner" ? "مبتدئ" : lvl === "intermediate" ? "متوسط" : "متقدم"), 11, ["onClick"]);
                            }), 64))
                          ])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                            default: withCtx(() => [
                              createTextVNode("السعر ($)")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "relative" }, [
                            createVNode(unref(DollarSign), { class: "absolute left-2.5 top-2 h-3.5 w-3.5 text-zinc-300" }),
                            createVNode(unref(_sfc_main$8), {
                              type: "number",
                              modelValue: unref(form).price,
                              "onUpdate:modelValue": ($event) => unref(form).price = $event,
                              class: "h-8.5 text-[12px] font-bold text-center border-zinc-200"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode(unref(_sfc_main$9), { class: "my-1 opacity-50" }),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[11px] font-black text-zinc-300 uppercase tracking-widest" }, {
                            default: withCtx(() => [
                              createTextVNode("الصورة المصغرة")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), {
                            modelValue: unref(form).thumbnail,
                            "onUpdate:modelValue": ($event) => unref(form).thumbnail = $event,
                            placeholder: "رابط الصورة...",
                            class: "h-8.5 text-[11px] px-2.5"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).thumbnail ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "aspect-video rounded-md overflow-hidden border border-zinc-100 mt-2 bg-zinc-50 flex items-center justify-center"
                          }, [
                            createVNode("img", {
                              src: unref(form).thumbnail,
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"])
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode(unref(_sfc_main$9), { class: "my-1 opacity-50" }),
                        createVNode("div", { class: "space-y-2 pt-1" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(form).is_published = $event,
                              id: "published",
                              class: "h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).is_published]
                            ]),
                            createVNode(unref(_sfc_main$7), {
                              for: "published",
                              class: "text-[11px] font-bold cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("نشر الكورس للطلاب")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(form).allow_study_rooms = $event,
                              id: "study",
                              class: "h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).allow_study_rooms]
                            ]),
                            createVNode(unref(_sfc_main$7), {
                              for: "study",
                              class: "text-[11px] font-bold cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("تفعيل غرف الدراسة")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(form).allow_timed_comments = $event,
                              id: "comments",
                              class: "h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).allow_timed_comments]
                            ]),
                            createVNode(unref(_sfc_main$7), {
                              for: "comments",
                              class: "text-[11px] font-bold cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("التعليقات الموقوتة")
                              ]),
                              _: 1
                            })
                          ])
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
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none rounded-md bg-white overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-3 border-b border-zinc-50 bg-zinc-50/10" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-400" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Info), { class: "h-3.5 w-3.5" }, null, _parent5, _scopeId4));
                              _push5(` تفاصيل الكورس `);
                            } else {
                              return [
                                createVNode(unref(Info), { class: "h-3.5 w-3.5" }),
                                createTextVNode(" تفاصيل الكورس ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-400" }, {
                            default: withCtx(() => [
                              createVNode(unref(Info), { class: "h-3.5 w-3.5" }),
                              createTextVNode(" تفاصيل الكورس ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-4 space-y-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[12px] font-bold text-zinc-900" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`عنوان الكورس *`);
                            } else {
                              return [
                                createTextVNode("عنوان الكورس *")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$8), {
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          placeholder: "مثلاً: تطوير الويب الكامل باستخدام Laravel",
                          class: "h-9 text-[13px] font-bold px-3 border-zinc-200 focus-visible:ring-zinc-900 shadow-sm"
                        }, null, _parent4, _scopeId3));
                        if (unref(form).errors.title) {
                          _push4(`<p class="text-[10px] text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.title)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "text-[12px] font-bold text-zinc-900" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`وصف الكورس`);
                            } else {
                              return [
                                createTextVNode("وصف الكورس")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<textarea rows="6" class="w-full min-h-[150px] rounded-md border border-zinc-200 p-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-zinc-900 leading-relaxed shadow-inner bg-zinc-50/10" placeholder="اكتب وصفاً جذاباً وشاملاً للكورس..."${_scopeId3}>${ssrInterpolate(unref(form).description)}</textarea>`);
                        if (unref(form).errors.description) {
                          _push4(`<p class="text-[10px] text-destructive"${_scopeId3}>${ssrInterpolate(unref(form).errors.description)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[12px] font-bold text-zinc-900" }, {
                              default: withCtx(() => [
                                createTextVNode("عنوان الكورس *")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), {
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              placeholder: "مثلاً: تطوير الويب الكامل باستخدام Laravel",
                              class: "h-9 text-[13px] font-bold px-3 border-zinc-200 focus-visible:ring-zinc-900 shadow-sm"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.title ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-[10px] text-destructive"
                            }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode(unref(_sfc_main$7), { class: "text-[12px] font-bold text-zinc-900" }, {
                              default: withCtx(() => [
                                createTextVNode("وصف الكورس")
                              ]),
                              _: 1
                            }),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).description = $event,
                              rows: "6",
                              class: "w-full min-h-[150px] rounded-md border border-zinc-200 p-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-zinc-900 leading-relaxed shadow-inner bg-zinc-50/10",
                              placeholder: "اكتب وصفاً جذاباً وشاملاً للكورس..."
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
                    createVNode(unref(_sfc_main$4), { class: "p-3 border-b border-zinc-50 bg-zinc-50/10" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-400" }, {
                          default: withCtx(() => [
                            createVNode(unref(Info), { class: "h-3.5 w-3.5" }),
                            createTextVNode(" تفاصيل الكورس ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-4 space-y-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-1.5" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[12px] font-bold text-zinc-900" }, {
                            default: withCtx(() => [
                              createTextVNode("عنوان الكورس *")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), {
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            placeholder: "مثلاً: تطوير الويب الكامل باستخدام Laravel",
                            class: "h-9 text-[13px] font-bold px-3 border-zinc-200 focus-visible:ring-zinc-900 shadow-sm"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          unref(form).errors.title ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-[10px] text-destructive"
                          }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "space-y-1.5" }, [
                          createVNode(unref(_sfc_main$7), { class: "text-[12px] font-bold text-zinc-900" }, {
                            default: withCtx(() => [
                              createTextVNode("وصف الكورس")
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            rows: "6",
                            class: "w-full min-h-[150px] rounded-md border border-zinc-200 p-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-zinc-900 leading-relaxed shadow-inner bg-zinc-50/10",
                            placeholder: "اكتب وصفاً جذاباً وشاملاً للكورس..."
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
            if (__props.course) {
              _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none rounded-md bg-white overflow-hidden" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-3 border-b border-zinc-50 bg-zinc-50/10 flex flex-row items-center justify-between space-y-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-400" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2;
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Layers), { class: "h-3.5 w-3.5" }, null, _parent5, _scopeId4));
                                _push5(` منهج الكورس (${ssrInterpolate(((_a2 = __props.course.lessons) == null ? void 0 : _a2.length) || 0)} درس) `);
                              } else {
                                return [
                                  createVNode(unref(Layers), { class: "h-3.5 w-3.5" }),
                                  createTextVNode(" منهج الكورس (" + toDisplayString(((_b2 = __props.course.lessons) == null ? void 0 : _b2.length) || 0) + " درس) ", 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(Link), {
                            href: _ctx.route("teacher.lessons.create", __props.course.id)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                  variant: "outline",
                                  size: "sm",
                                  class: "h-7 text-[10px] font-black border-zinc-200 px-3 uppercase tracking-widest hover:bg-zinc-900 hover:text-white"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(PlusCircle), { class: "ml-1.5 h-3.5 w-3.5" }, null, _parent6, _scopeId5));
                                      _push6(` إضافة درس `);
                                    } else {
                                      return [
                                        createVNode(unref(PlusCircle), { class: "ml-1.5 h-3.5 w-3.5" }),
                                        createTextVNode(" إضافة درس ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$2), {
                                    variant: "outline",
                                    size: "sm",
                                    class: "h-7 text-[10px] font-black border-zinc-200 px-3 uppercase tracking-widest hover:bg-zinc-900 hover:text-white"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(PlusCircle), { class: "ml-1.5 h-3.5 w-3.5" }),
                                      createTextVNode(" إضافة درس ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-400" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createVNode(unref(Layers), { class: "h-3.5 w-3.5" }),
                                  createTextVNode(" منهج الكورس (" + toDisplayString(((_a2 = __props.course.lessons) == null ? void 0 : _a2.length) || 0) + " درس) ", 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(unref(Link), {
                              href: _ctx.route("teacher.lessons.create", __props.course.id)
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "outline",
                                  size: "sm",
                                  class: "h-7 text-[10px] font-black border-zinc-200 px-3 uppercase tracking-widest hover:bg-zinc-900 hover:text-white"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(PlusCircle), { class: "ml-1.5 h-3.5 w-3.5" }),
                                    createTextVNode(" إضافة درس ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2;
                        if (_push4) {
                          if (((_a2 = __props.course.lessons) == null ? void 0 : _a2.length) === 0) {
                            _push4(`<div class="p-12 text-center text-zinc-400 italic text-[12px]"${_scopeId3}> لا توجد دروس مضافة لهذا الكورس حتى الآن. </div>`);
                          } else {
                            _push4(`<div class="divide-y divide-zinc-50"${_scopeId3}><!--[-->`);
                            ssrRenderList(__props.course.lessons, (lesson, index) => {
                              _push4(`<div class="flex items-center justify-between p-3 hover:bg-zinc-50/50 transition-all group"${_scopeId3}><div class="flex items-center gap-3"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(_sfc_main$a), {
                                variant: "outline",
                                class: "h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] font-black border-zinc-200 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(index + 1)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(index + 1), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`<div${_scopeId3}><div class="text-[12px] font-bold text-zinc-700 group-hover:text-zinc-900 transition-colors"${_scopeId3}>${ssrInterpolate(lesson.title)}</div></div></div><div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId3}>`);
                              _push4(ssrRenderComponent(unref(_sfc_main$2), {
                                variant: "ghost",
                                size: "icon",
                                class: "h-7 w-7 rounded-md text-zinc-300 hover:text-emerald-600"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(Edit), { class: "h-3.5 w-3.5" }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(unref(_sfc_main$2), {
                                onClick: ($event) => deleteLesson(lesson.id),
                                variant: "ghost",
                                size: "icon",
                                class: "h-7 w-7 rounded-md text-zinc-300 hover:text-red-500"
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
                              _push4(`</div></div>`);
                            });
                            _push4(`<!--]--></div>`);
                          }
                        } else {
                          return [
                            ((_b2 = __props.course.lessons) == null ? void 0 : _b2.length) === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "p-12 text-center text-zinc-400 italic text-[12px]"
                            }, " لا توجد دروس مضافة لهذا الكورس حتى الآن. ")) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "divide-y divide-zinc-50"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.course.lessons, (lesson, index) => {
                                return openBlock(), createBlock("div", {
                                  key: lesson.id,
                                  class: "flex items-center justify-between p-3 hover:bg-zinc-50/50 transition-all group"
                                }, [
                                  createVNode("div", { class: "flex items-center gap-3" }, [
                                    createVNode(unref(_sfc_main$a), {
                                      variant: "outline",
                                      class: "h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] font-black border-zinc-200 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-[12px] font-bold text-zinc-700 group-hover:text-zinc-900 transition-colors" }, toDisplayString(lesson.title), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" }, [
                                    createVNode(unref(_sfc_main$2), {
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 rounded-md text-zinc-300 hover:text-emerald-600"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$2), {
                                      onClick: ($event) => deleteLesson(lesson.id),
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 rounded-md text-zinc-300 hover:text-red-500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]);
                              }), 128))
                            ]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$4), { class: "p-3 border-b border-zinc-50 bg-zinc-50/10 flex flex-row items-center justify-between space-y-0" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-400" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode(unref(Layers), { class: "h-3.5 w-3.5" }),
                                createTextVNode(" منهج الكورس (" + toDisplayString(((_a2 = __props.course.lessons) == null ? void 0 : _a2.length) || 0) + " درس) ", 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(unref(Link), {
                            href: _ctx.route("teacher.lessons.create", __props.course.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$2), {
                                variant: "outline",
                                size: "sm",
                                class: "h-7 text-[10px] font-black border-zinc-200 px-3 uppercase tracking-widest hover:bg-zinc-900 hover:text-white"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(PlusCircle), { class: "ml-1.5 h-3.5 w-3.5" }),
                                  createTextVNode(" إضافة درس ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$6), { class: "p-0" }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            ((_a2 = __props.course.lessons) == null ? void 0 : _a2.length) === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "p-12 text-center text-zinc-400 italic text-[12px]"
                            }, " لا توجد دروس مضافة لهذا الكورس حتى الآن. ")) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "divide-y divide-zinc-50"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.course.lessons, (lesson, index) => {
                                return openBlock(), createBlock("div", {
                                  key: lesson.id,
                                  class: "flex items-center justify-between p-3 hover:bg-zinc-50/50 transition-all group"
                                }, [
                                  createVNode("div", { class: "flex items-center gap-3" }, [
                                    createVNode(unref(_sfc_main$a), {
                                      variant: "outline",
                                      class: "h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] font-black border-zinc-200 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-[12px] font-bold text-zinc-700 group-hover:text-zinc-900 transition-colors" }, toDisplayString(lesson.title), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" }, [
                                    createVNode(unref(_sfc_main$2), {
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 rounded-md text-zinc-300 hover:text-emerald-600"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$2), {
                                      onClick: ($event) => deleteLesson(lesson.id),
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 rounded-md text-zinc-300 hover:text-red-500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]);
                              }), 128))
                            ]))
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-zinc-50/20 text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("teacher.courses.index"),
                      class: "hover:text-zinc-900 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("الكورسات")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(ChevronLeft), { class: "h-3 w-3" }),
                    createVNode("span", { class: "text-zinc-900 font-bold tracking-tight" }, toDisplayString(__props.course ? "تعديل الكورس" : "إنشاء جديد"), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("teacher.courses.index")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2), {
                          variant: "ghost",
                          size: "sm",
                          class: "h-7 text-[11px] px-3 font-medium"
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
                      class: "h-7 text-[11px] px-6 font-bold shadow-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Save), { class: "ml-1.5 h-3 w-3" }),
                        createTextVNode(" " + toDisplayString(__props.course ? "حفظ" : "نشر"), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right overflow-y-auto" }, [
                  createVNode("div", { class: "w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full mx-auto" }, [
                    createVNode("aside", { class: "w-full lg:w-80 space-y-4 shrink-0" }, [
                      createVNode(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none rounded-md bg-white" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "p-3 border-b border-zinc-50" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Settings), { class: "h-3.5 w-3.5 text-zinc-400" }),
                                  createTextVNode(" الإعدادات العامة ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), { class: "p-3 space-y-4" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                                  default: withCtx(() => [
                                    createTextVNode("التصنيف *")
                                  ]),
                                  _: 1
                                }),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                  class: ["w-full h-8.5 rounded-md border border-zinc-200 bg-white px-2.5 text-[12px] font-medium focus:ring-1 focus:ring-zinc-900 outline-none transition-all leading-none", unref(form).errors.category_id ? "border-destructive" : ""]
                                }, [
                                  createVNode("option", {
                                    value: "",
                                    disabled: ""
                                  }, "اختر التصنيف..."),
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
                                    return openBlock(), createBlock("option", {
                                      key: cat.id,
                                      value: cat.id
                                    }, toDisplayString(cat.name), 9, ["value"]);
                                  }), 128))
                                ], 10, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(form).category_id]
                                ]),
                                unref(form).errors.category_id ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-[10px] text-destructive italic"
                                }, toDisplayString(unref(form).errors.category_id), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                                  default: withCtx(() => [
                                    createTextVNode("المستوى")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "grid grid-cols-1 gap-1" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(["beginner", "intermediate", "advanced"], (lvl) => {
                                    return createVNode("button", {
                                      type: "button",
                                      key: lvl,
                                      onClick: ($event) => unref(form).level = lvl,
                                      class: [[unref(form).level === lvl ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-100 bg-zinc-50/30 text-zinc-400 hover:border-zinc-200"], "px-3 py-1.5 rounded-md text-[11px] font-bold transition-all text-right border"]
                                    }, toDisplayString(lvl === "beginner" ? "مبتدئ" : lvl === "intermediate" ? "متوسط" : "متقدم"), 11, ["onClick"]);
                                  }), 64))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-bold text-zinc-500" }, {
                                  default: withCtx(() => [
                                    createTextVNode("السعر ($)")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(unref(DollarSign), { class: "absolute left-2.5 top-2 h-3.5 w-3.5 text-zinc-300" }),
                                  createVNode(unref(_sfc_main$8), {
                                    type: "number",
                                    modelValue: unref(form).price,
                                    "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                    class: "h-8.5 text-[12px] font-bold text-center border-zinc-200"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode(unref(_sfc_main$9), { class: "my-1 opacity-50" }),
                              createVNode("div", { class: "space-y-2" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[11px] font-black text-zinc-300 uppercase tracking-widest" }, {
                                  default: withCtx(() => [
                                    createTextVNode("الصورة المصغرة")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: unref(form).thumbnail,
                                  "onUpdate:modelValue": ($event) => unref(form).thumbnail = $event,
                                  placeholder: "رابط الصورة...",
                                  class: "h-8.5 text-[11px] px-2.5"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                unref(form).thumbnail ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "aspect-video rounded-md overflow-hidden border border-zinc-100 mt-2 bg-zinc-50 flex items-center justify-center"
                                }, [
                                  createVNode("img", {
                                    src: unref(form).thumbnail,
                                    class: "w-full h-full object-cover"
                                  }, null, 8, ["src"])
                                ])) : createCommentVNode("", true)
                              ]),
                              createVNode(unref(_sfc_main$9), { class: "my-1 opacity-50" }),
                              createVNode("div", { class: "space-y-2 pt-1" }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  withDirectives(createVNode("input", {
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => unref(form).is_published = $event,
                                    id: "published",
                                    class: "h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelCheckbox, unref(form).is_published]
                                  ]),
                                  createVNode(unref(_sfc_main$7), {
                                    for: "published",
                                    class: "text-[11px] font-bold cursor-pointer"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("نشر الكورس للطلاب")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  withDirectives(createVNode("input", {
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => unref(form).allow_study_rooms = $event,
                                    id: "study",
                                    class: "h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelCheckbox, unref(form).allow_study_rooms]
                                  ]),
                                  createVNode(unref(_sfc_main$7), {
                                    for: "study",
                                    class: "text-[11px] font-bold cursor-pointer"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("تفعيل غرف الدراسة")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  withDirectives(createVNode("input", {
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => unref(form).allow_timed_comments = $event,
                                    id: "comments",
                                    class: "h-3.5 w-3.5 rounded border-zinc-300 text-zinc-900"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelCheckbox, unref(form).allow_timed_comments]
                                  ]),
                                  createVNode(unref(_sfc_main$7), {
                                    for: "comments",
                                    class: "text-[11px] font-bold cursor-pointer"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("التعليقات الموقوتة")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex-1 w-full space-y-4" }, [
                      createVNode(unref(_sfc_main$3), { class: "border-zinc-200 shadow-none rounded-md bg-white overflow-hidden" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "p-3 border-b border-zinc-50 bg-zinc-50/10" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-400" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Info), { class: "h-3.5 w-3.5" }),
                                  createTextVNode(" تفاصيل الكورس ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), { class: "p-4 space-y-4" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[12px] font-bold text-zinc-900" }, {
                                  default: withCtx(() => [
                                    createTextVNode("عنوان الكورس *")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), {
                                  modelValue: unref(form).title,
                                  "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                  placeholder: "مثلاً: تطوير الويب الكامل باستخدام Laravel",
                                  class: "h-9 text-[13px] font-bold px-3 border-zinc-200 focus-visible:ring-zinc-900 shadow-sm"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                unref(form).errors.title ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-[10px] text-destructive"
                                }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$7), { class: "text-[12px] font-bold text-zinc-900" }, {
                                  default: withCtx(() => [
                                    createTextVNode("وصف الكورس")
                                  ]),
                                  _: 1
                                }),
                                withDirectives(createVNode("textarea", {
                                  "onUpdate:modelValue": ($event) => unref(form).description = $event,
                                  rows: "6",
                                  class: "w-full min-h-[150px] rounded-md border border-zinc-200 p-3 text-[13px] font-medium outline-none focus:ring-1 focus:ring-zinc-900 leading-relaxed shadow-inner bg-zinc-50/10",
                                  placeholder: "اكتب وصفاً جذاباً وشاملاً للكورس..."
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
                      }),
                      __props.course ? (openBlock(), createBlock(unref(_sfc_main$3), {
                        key: 0,
                        class: "border-zinc-200 shadow-none rounded-md bg-white overflow-hidden"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "p-3 border-b border-zinc-50 bg-zinc-50/10 flex flex-row items-center justify-between space-y-0" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { class: "text-[12px] font-black flex items-center gap-2 uppercase tracking-tight text-zinc-400" }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createVNode(unref(Layers), { class: "h-3.5 w-3.5" }),
                                    createTextVNode(" منهج الكورس (" + toDisplayString(((_a2 = __props.course.lessons) == null ? void 0 : _a2.length) || 0) + " درس) ", 1)
                                  ];
                                }),
                                _: 1
                              }),
                              createVNode(unref(Link), {
                                href: _ctx.route("teacher.lessons.create", __props.course.id)
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$2), {
                                    variant: "outline",
                                    size: "sm",
                                    class: "h-7 text-[10px] font-black border-zinc-200 px-3 uppercase tracking-widest hover:bg-zinc-900 hover:text-white"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(PlusCircle), { class: "ml-1.5 h-3.5 w-3.5" }),
                                      createTextVNode(" إضافة درس ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), { class: "p-0" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                ((_a2 = __props.course.lessons) == null ? void 0 : _a2.length) === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "p-12 text-center text-zinc-400 italic text-[12px]"
                                }, " لا توجد دروس مضافة لهذا الكورس حتى الآن. ")) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "divide-y divide-zinc-50"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.course.lessons, (lesson, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: lesson.id,
                                      class: "flex items-center justify-between p-3 hover:bg-zinc-50/50 transition-all group"
                                    }, [
                                      createVNode("div", { class: "flex items-center gap-3" }, [
                                        createVNode(unref(_sfc_main$a), {
                                          variant: "outline",
                                          class: "h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] font-black border-zinc-200 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(index + 1), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-[12px] font-bold text-zinc-700 group-hover:text-zinc-900 transition-colors" }, toDisplayString(lesson.title), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" }, [
                                        createVNode(unref(_sfc_main$2), {
                                          variant: "ghost",
                                          size: "icon",
                                          class: "h-7 w-7 rounded-md text-zinc-300 hover:text-emerald-600"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(_sfc_main$2), {
                                          onClick: ($event) => deleteLesson(lesson.id),
                                          variant: "ghost",
                                          size: "icon",
                                          class: "h-7 w-7 rounded-md text-zinc-300 hover:text-red-500"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])
                                    ]);
                                  }), 128))
                                ]))
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Courses/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
