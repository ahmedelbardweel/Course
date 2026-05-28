import { ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-1E9rQXwG.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$b } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$2, b as _sfc_main$4, c as _sfc_main$5, a as _sfc_main$6, d as _sfc_main$8 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$7 } from "./Separator-CFmMgQM_.js";
import { _ as _sfc_main$a } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$9 } from "./Label--EucbuAp.js";
import { _ as _sfc_main$3 } from "./index-CGK-4kfq.js";
import { CheckCircle2, CreditCard, Lock, ShieldCheck, ChevronLeft, Loader2, Wallet } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "radix-vue";
const _sfc_main = {
  __name: "Checkout",
  __ssrInlineRender: true,
  props: {
    course: Object
  },
  setup(__props) {
    const props = __props;
    const isProcessing = ref(false);
    const form = useForm({});
    const handlePayment = () => {
      isProcessing.value = true;
      setTimeout(() => {
        form.post(route("courses.enroll", props.course.slug));
      }, 1500);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "إتمام الشراء" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "الرئيسية", url: _ctx.route("dashboard") },
          { label: "الدورات", url: _ctx.route("courses.index") },
          { label: __props.course.title, url: _ctx.route("courses.show", __props.course.slug) },
          { label: "إتمام الدفع" }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]"${_scopeId}><main class="flex-1 p-4 lg:p-8 text-right overflow-y-auto"${_scopeId}><div class="w-full max-w-6xl mx-auto"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"${_scopeId}><div class="lg:col-span-5 order-2 lg:order-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden sticky top-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="aspect-video relative overflow-hidden border-b border-[var(--border)]"${_scopeId2}>`);
                  if (__props.course.thumbnail) {
                    _push3(`<img${ssrRenderAttr("src", __props.course.thumbnail)} class="w-full h-full object-cover"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="absolute inset-0 bg-[var(--foreground)]/40 flex items-end p-4"${_scopeId2}><div class="space-y-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$3), {
                    variant: "secondary",
                    class: "h-4 text-[8px] font-normal uppercase tracking-widest bg-[var(--card)] text-[var(--foreground)] border-none rounded"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a = __props.course.category) == null ? void 0 : _a.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b = __props.course.category) == null ? void 0 : _b.name), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<h3 class="text-[14px] font-normal text-white leading-tight line-clamp-1"${_scopeId2}>${ssrInterpolate(__props.course.title)}</h3></div></div></div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-4 border-b border-[var(--border)] bg-[var(--card)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[10px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`تفاصيل الفاتورة`);
                            } else {
                              return [
                                createTextVNode("تفاصيل الفاتورة")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-[10px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]" }, {
                            default: withCtx(() => [
                              createTextVNode("تفاصيل الفاتورة")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-4 space-y-4 bg-[var(--card)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-2.5"${_scopeId3}><div class="flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]"${_scopeId3}><span${_scopeId3}>سعر الكورس الأصلي</span><span class="font-normal text-[var(--foreground)]"${_scopeId3}>$${ssrInterpolate(__props.course.price)}</span></div><div class="flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]"${_scopeId3}><span${_scopeId3}>رسوم المعالجة</span><span class="text-[var(--foreground)] font-normal"${_scopeId3}>مجاني</span></div><div class="flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]"${_scopeId3}><span${_scopeId3}>الخصومات المطبقة</span><span class="text-[var(--muted-foreground)] font-normal"${_scopeId3}>$0.00</span></div></div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "bg-[var(--border)]" }, null, _parent4, _scopeId3));
                        _push4(`<div class="flex justify-between items-center py-2"${_scopeId3}><span class="text-[13px] font-normal text-[var(--foreground)] uppercase"${_scopeId3}>الإجمالي النهائي</span><div class="text-right"${_scopeId3}><div class="text-2xl font-normal text-[var(--foreground)] tracking-tighter"${_scopeId3}>$${ssrInterpolate(__props.course.price)}</div><div class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest mt-1"${_scopeId3}>مدى الحياة</div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-2.5" }, [
                            createVNode("div", { class: "flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]" }, [
                              createVNode("span", null, "سعر الكورس الأصلي"),
                              createVNode("span", { class: "font-normal text-[var(--foreground)]" }, "$" + toDisplayString(__props.course.price), 1)
                            ]),
                            createVNode("div", { class: "flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]" }, [
                              createVNode("span", null, "رسوم المعالجة"),
                              createVNode("span", { class: "text-[var(--foreground)] font-normal" }, "مجاني")
                            ]),
                            createVNode("div", { class: "flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]" }, [
                              createVNode("span", null, "الخصومات المطبقة"),
                              createVNode("span", { class: "text-[var(--muted-foreground)] font-normal" }, "$0.00")
                            ])
                          ]),
                          createVNode(unref(_sfc_main$7), { class: "bg-[var(--border)]" }),
                          createVNode("div", { class: "flex justify-between items-center py-2" }, [
                            createVNode("span", { class: "text-[13px] font-normal text-[var(--foreground)] uppercase" }, "الإجمالي النهائي"),
                            createVNode("div", { class: "text-right" }, [
                              createVNode("div", { class: "text-2xl font-normal text-[var(--foreground)] tracking-tighter" }, "$" + toDisplayString(__props.course.price), 1),
                              createVNode("div", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest mt-1" }, "مدى الحياة")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "bg-[var(--muted)] p-4 flex flex-col gap-3 border-t border-[var(--border)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h4 class="text-[9px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] w-full mb-1"${_scopeId3}>مزايا الاشتراك:</h4><div class="w-full space-y-2"${_scopeId3}><div class="flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }, null, _parent4, _scopeId3));
                        _push4(` وصول كامل لجميع الدروس (${ssrInterpolate(__props.course.lessons_count)} درس) </div><div class="flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }, null, _parent4, _scopeId3));
                        _push4(` شهادة إتمام رقمية معتمدة </div><div class="flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }, null, _parent4, _scopeId3));
                        _push4(` استخدام غير محدود للمساعد الذكي AI </div></div>`);
                      } else {
                        return [
                          createVNode("h4", { class: "text-[9px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] w-full mb-1" }, "مزايا الاشتراك:"),
                          createVNode("div", { class: "w-full space-y-2" }, [
                            createVNode("div", { class: "flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]" }, [
                              createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }),
                              createTextVNode(" وصول كامل لجميع الدروس (" + toDisplayString(__props.course.lessons_count) + " درس) ", 1)
                            ]),
                            createVNode("div", { class: "flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]" }, [
                              createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }),
                              createTextVNode(" شهادة إتمام رقمية معتمدة ")
                            ]),
                            createVNode("div", { class: "flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]" }, [
                              createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }),
                              createTextVNode(" استخدام غير محدود للمساعد الذكي AI ")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "aspect-video relative overflow-hidden border-b border-[var(--border)]" }, [
                      __props.course.thumbnail ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: __props.course.thumbnail,
                        class: "w-full h-full object-cover"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode("div", { class: "absolute inset-0 bg-[var(--foreground)]/40 flex items-end p-4" }, [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$3), {
                            variant: "secondary",
                            class: "h-4 text-[8px] font-normal uppercase tracking-widest bg-[var(--card)] text-[var(--foreground)] border-none rounded"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = __props.course.category) == null ? void 0 : _a.name), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode("h3", { class: "text-[14px] font-normal text-white leading-tight line-clamp-1" }, toDisplayString(__props.course.title), 1)
                        ])
                      ])
                    ]),
                    createVNode(unref(_sfc_main$4), { class: "p-4 border-b border-[var(--border)] bg-[var(--card)]" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[10px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]" }, {
                          default: withCtx(() => [
                            createTextVNode("تفاصيل الفاتورة")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-4 space-y-4 bg-[var(--card)]" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-2.5" }, [
                          createVNode("div", { class: "flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]" }, [
                            createVNode("span", null, "سعر الكورس الأصلي"),
                            createVNode("span", { class: "font-normal text-[var(--foreground)]" }, "$" + toDisplayString(__props.course.price), 1)
                          ]),
                          createVNode("div", { class: "flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]" }, [
                            createVNode("span", null, "رسوم المعالجة"),
                            createVNode("span", { class: "text-[var(--foreground)] font-normal" }, "مجاني")
                          ]),
                          createVNode("div", { class: "flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]" }, [
                            createVNode("span", null, "الخصومات المطبقة"),
                            createVNode("span", { class: "text-[var(--muted-foreground)] font-normal" }, "$0.00")
                          ])
                        ]),
                        createVNode(unref(_sfc_main$7), { class: "bg-[var(--border)]" }),
                        createVNode("div", { class: "flex justify-between items-center py-2" }, [
                          createVNode("span", { class: "text-[13px] font-normal text-[var(--foreground)] uppercase" }, "الإجمالي النهائي"),
                          createVNode("div", { class: "text-right" }, [
                            createVNode("div", { class: "text-2xl font-normal text-[var(--foreground)] tracking-tighter" }, "$" + toDisplayString(__props.course.price), 1),
                            createVNode("div", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest mt-1" }, "مدى الحياة")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "bg-[var(--muted)] p-4 flex flex-col gap-3 border-t border-[var(--border)]" }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "text-[9px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] w-full mb-1" }, "مزايا الاشتراك:"),
                        createVNode("div", { class: "w-full space-y-2" }, [
                          createVNode("div", { class: "flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]" }, [
                            createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }),
                            createTextVNode(" وصول كامل لجميع الدروس (" + toDisplayString(__props.course.lessons_count) + " درس) ", 1)
                          ]),
                          createVNode("div", { class: "flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]" }, [
                            createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }),
                            createTextVNode(" شهادة إتمام رقمية معتمدة ")
                          ]),
                          createVNode("div", { class: "flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]" }, [
                            createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }),
                            createTextVNode(" استخدام غير محدود للمساعد الذكي AI ")
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
            _push2(`</div><div class="lg:col-span-7 order-1 lg:order-2 space-y-6"${_scopeId}><div class="space-y-1 pb-2"${_scopeId}><h1 class="text-2xl font-normal text-[var(--foreground)] tracking-tight leading-none uppercase"${_scopeId}>إتمام عملية الدفع</h1><p class="text-[11px] text-[var(--muted-foreground)] font-normal leading-relaxed max-w-lg"${_scopeId}>اختر وسيلة الدفع المناسبة وأكمل العملية بأمان للبدء فوراً في رحلتك التعليمية.</p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-4 border-b border-[var(--border)] flex flex-row items-center justify-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[11px] font-normal uppercase tracking-widest flex items-center gap-2 text-[var(--foreground)]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="h-7 w-7 rounded bg-[var(--primary)] text-white flex items-center justify-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(CreditCard), { class: "h-3.5 w-3.5" }, null, _parent5, _scopeId4));
                              _push5(`</div> بطاقة الائتمان / الخصم `);
                            } else {
                              return [
                                createVNode("div", { class: "h-7 w-7 rounded bg-[var(--primary)] text-white flex items-center justify-center" }, [
                                  createVNode(unref(CreditCard), { class: "h-3.5 w-3.5" })
                                ]),
                                createTextVNode(" بطاقة الائتمان / الخصم ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex items-center gap-2 grayscale opacity-40"${_scopeId3}><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" class="h-2.5"${_scopeId3}><img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" class="h-3.5"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { class: "text-[11px] font-normal uppercase tracking-widest flex items-center gap-2 text-[var(--foreground)]" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "h-7 w-7 rounded bg-[var(--primary)] text-white flex items-center justify-center" }, [
                                createVNode(unref(CreditCard), { class: "h-3.5 w-3.5" })
                              ]),
                              createTextVNode(" بطاقة الائتمان / الخصم ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex items-center gap-2 grayscale opacity-40" }, [
                            createVNode("img", {
                              src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
                              class: "h-2.5"
                            }),
                            createVNode("img", {
                              src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
                              class: "h-3.5"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-6 space-y-6 bg-[var(--card)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`الاسم على البطاقة`);
                            } else {
                              return [
                                createTextVNode("الاسم على البطاقة")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$a), {
                          placeholder: "John Doe",
                          class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`رقم البطاقة`);
                            } else {
                              return [
                                createTextVNode("رقم البطاقة")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="relative"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$a), {
                          placeholder: "0000 0000 0000 0000",
                          class: "h-9 text-[12px] font-mono font-normal pl-12 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)] tracking-widest"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-[var(--muted-foreground)]" }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="grid grid-cols-2 gap-4"${_scopeId3}><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
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
                        _push4(ssrRenderComponent(unref(_sfc_main$a), {
                          placeholder: "MM/YY",
                          class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`رمز الأمان (CVV)`);
                            } else {
                              return [
                                createTextVNode("رمز الأمان (CVV)")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$a), {
                          placeholder: "123",
                          class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("الاسم على البطاقة")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$a), {
                                placeholder: "John Doe",
                                class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                              })
                            ]),
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("رقم البطاقة")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative" }, [
                                createVNode(unref(_sfc_main$a), {
                                  placeholder: "0000 0000 0000 0000",
                                  class: "h-9 text-[12px] font-mono font-normal pl-12 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)] tracking-widest"
                                }),
                                createVNode(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-[var(--muted-foreground)]" })
                              ])
                            ]),
                            createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                                  default: withCtx(() => [
                                    createTextVNode("تاريخ الانتهاء")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$a), {
                                  placeholder: "MM/YY",
                                  class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                                })
                              ]),
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                                  default: withCtx(() => [
                                    createTextVNode("رمز الأمان (CVV)")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$a), {
                                  placeholder: "123",
                                  class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                                })
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "bg-[var(--muted)] p-4 flex items-center gap-3 border-t border-[var(--border)]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="h-7 w-7 rounded bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] flex items-center justify-center shrink-0"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(ShieldCheck), { class: "h-3.5 w-3.5 text-[var(--primary)]" }, null, _parent4, _scopeId3));
                        _push4(`</div><p class="text-[10px] font-normal text-[var(--muted-foreground)] italic"${_scopeId3}>نحن نستخدم تشفيراً عالمياً 256-bit لضمان أمن بياناتك المالية.</p>`);
                      } else {
                        return [
                          createVNode("div", { class: "h-7 w-7 rounded bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] flex items-center justify-center shrink-0" }, [
                            createVNode(unref(ShieldCheck), { class: "h-3.5 w-3.5 text-[var(--primary)]" })
                          ]),
                          createVNode("p", { class: "text-[10px] font-normal text-[var(--muted-foreground)] italic" }, "نحن نستخدم تشفيراً عالمياً 256-bit لضمان أمن بياناتك المالية.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "p-4 border-b border-[var(--border)] flex flex-row items-center justify-between" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[11px] font-normal uppercase tracking-widest flex items-center gap-2 text-[var(--foreground)]" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "h-7 w-7 rounded bg-[var(--primary)] text-white flex items-center justify-center" }, [
                              createVNode(unref(CreditCard), { class: "h-3.5 w-3.5" })
                            ]),
                            createTextVNode(" بطاقة الائتمان / الخصم ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex items-center gap-2 grayscale opacity-40" }, [
                          createVNode("img", {
                            src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
                            class: "h-2.5"
                          }),
                          createVNode("img", {
                            src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
                            class: "h-3.5"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-6 space-y-6 bg-[var(--card)]" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                              default: withCtx(() => [
                                createTextVNode("الاسم على البطاقة")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$a), {
                              placeholder: "John Doe",
                              class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                            })
                          ]),
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                              default: withCtx(() => [
                                createTextVNode("رقم البطاقة")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "relative" }, [
                              createVNode(unref(_sfc_main$a), {
                                placeholder: "0000 0000 0000 0000",
                                class: "h-9 text-[12px] font-mono font-normal pl-12 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)] tracking-widest"
                              }),
                              createVNode(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-[var(--muted-foreground)]" })
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("تاريخ الانتهاء")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$a), {
                                placeholder: "MM/YY",
                                class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                              })
                            ]),
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("رمز الأمان (CVV)")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$a), {
                                placeholder: "123",
                                class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                              })
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "bg-[var(--muted)] p-4 flex items-center gap-3 border-t border-[var(--border)]" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-7 w-7 rounded bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] flex items-center justify-center shrink-0" }, [
                          createVNode(unref(ShieldCheck), { class: "h-3.5 w-3.5 text-[var(--primary)]" })
                        ]),
                        createVNode("p", { class: "text-[10px] font-normal text-[var(--muted-foreground)] italic" }, "نحن نستخدم تشفيراً عالمياً 256-bit لضمان أمن بياناتك المالية.")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("courses.show", __props.course.slug)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$b), {
                    variant: "ghost",
                    class: "h-8 text-[11px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-md px-6 bg-transparent border border-[var(--border)] hover:bg-[var(--muted)]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ChevronLeft), { class: "h-3.5 w-3.5 ml-1.5" }, null, _parent4, _scopeId3));
                        _push4(` العودة للتفاصيل `);
                      } else {
                        return [
                          createVNode(unref(ChevronLeft), { class: "h-3.5 w-3.5 ml-1.5" }),
                          createTextVNode(" العودة للتفاصيل ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$b), {
                      variant: "ghost",
                      class: "h-8 text-[11px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-md px-6 bg-transparent border border-[var(--border)] hover:bg-[var(--muted)]"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronLeft), { class: "h-3.5 w-3.5 ml-1.5" }),
                        createTextVNode(" العودة للتفاصيل ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$b), {
              onClick: handlePayment,
              disabled: isProcessing.value,
              class: "h-10 text-[12px] font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded-md px-8 shadow-none border-none group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (isProcessing.value) {
                    _push3(ssrRenderComponent(unref(Loader2), { class: "ml-2 h-4 w-4 animate-spin" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span class="flex items-center gap-2"${_scopeId2}> دفع $${ssrInterpolate(__props.course.price)} والاشتراك الآن `);
                    _push3(ssrRenderComponent(unref(Wallet), { class: "h-3.5 w-3.5 opacity-50" }, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  }
                } else {
                  return [
                    isProcessing.value ? (openBlock(), createBlock(unref(Loader2), {
                      key: 0,
                      class: "ml-2 h-4 w-4 animate-spin"
                    })) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "flex items-center gap-2"
                    }, [
                      createTextVNode(" دفع $" + toDisplayString(__props.course.price) + " والاشتراك الآن ", 1),
                      createVNode(unref(Wallet), { class: "h-3.5 w-3.5 opacity-50" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-[var(--background)] text-[12px]" }, [
                createVNode("main", { class: "flex-1 p-4 lg:p-8 text-right overflow-y-auto" }, [
                  createVNode("div", { class: "w-full max-w-6xl mx-auto" }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" }, [
                      createVNode("div", { class: "lg:col-span-5 order-2 lg:order-1" }, [
                        createVNode(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden sticky top-4" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "aspect-video relative overflow-hidden border-b border-[var(--border)]" }, [
                              __props.course.thumbnail ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: __props.course.thumbnail,
                                class: "w-full h-full object-cover"
                              }, null, 8, ["src"])) : createCommentVNode("", true),
                              createVNode("div", { class: "absolute inset-0 bg-[var(--foreground)]/40 flex items-end p-4" }, [
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode(unref(_sfc_main$3), {
                                    variant: "secondary",
                                    class: "h-4 text-[8px] font-normal uppercase tracking-widest bg-[var(--card)] text-[var(--foreground)] border-none rounded"
                                  }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString((_a = __props.course.category) == null ? void 0 : _a.name), 1)
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode("h3", { class: "text-[14px] font-normal text-white leading-tight line-clamp-1" }, toDisplayString(__props.course.title), 1)
                                ])
                              ])
                            ]),
                            createVNode(unref(_sfc_main$4), { class: "p-4 border-b border-[var(--border)] bg-[var(--card)]" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$5), { class: "text-[10px] font-normal uppercase tracking-widest text-[var(--muted-foreground)]" }, {
                                  default: withCtx(() => [
                                    createTextVNode("تفاصيل الفاتورة")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$6), { class: "p-4 space-y-4 bg-[var(--card)]" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-2.5" }, [
                                  createVNode("div", { class: "flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]" }, [
                                    createVNode("span", null, "سعر الكورس الأصلي"),
                                    createVNode("span", { class: "font-normal text-[var(--foreground)]" }, "$" + toDisplayString(__props.course.price), 1)
                                  ]),
                                  createVNode("div", { class: "flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]" }, [
                                    createVNode("span", null, "رسوم المعالجة"),
                                    createVNode("span", { class: "text-[var(--foreground)] font-normal" }, "مجاني")
                                  ]),
                                  createVNode("div", { class: "flex justify-between items-center text-[11px] font-normal text-[var(--muted-foreground)]" }, [
                                    createVNode("span", null, "الخصومات المطبقة"),
                                    createVNode("span", { class: "text-[var(--muted-foreground)] font-normal" }, "$0.00")
                                  ])
                                ]),
                                createVNode(unref(_sfc_main$7), { class: "bg-[var(--border)]" }),
                                createVNode("div", { class: "flex justify-between items-center py-2" }, [
                                  createVNode("span", { class: "text-[13px] font-normal text-[var(--foreground)] uppercase" }, "الإجمالي النهائي"),
                                  createVNode("div", { class: "text-right" }, [
                                    createVNode("div", { class: "text-2xl font-normal text-[var(--foreground)] tracking-tighter" }, "$" + toDisplayString(__props.course.price), 1),
                                    createVNode("div", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest mt-1" }, "مدى الحياة")
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), { class: "bg-[var(--muted)] p-4 flex flex-col gap-3 border-t border-[var(--border)]" }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "text-[9px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] w-full mb-1" }, "مزايا الاشتراك:"),
                                createVNode("div", { class: "w-full space-y-2" }, [
                                  createVNode("div", { class: "flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]" }, [
                                    createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }),
                                    createTextVNode(" وصول كامل لجميع الدروس (" + toDisplayString(__props.course.lessons_count) + " درس) ", 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]" }, [
                                    createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }),
                                    createTextVNode(" شهادة إتمام رقمية معتمدة ")
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-2 text-[10px] font-normal text-[var(--foreground)]" }, [
                                    createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-[var(--primary)]" }),
                                    createTextVNode(" استخدام غير محدود للمساعد الذكي AI ")
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "lg:col-span-7 order-1 lg:order-2 space-y-6" }, [
                        createVNode("div", { class: "space-y-1 pb-2" }, [
                          createVNode("h1", { class: "text-2xl font-normal text-[var(--foreground)] tracking-tight leading-none uppercase" }, "إتمام عملية الدفع"),
                          createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] font-normal leading-relaxed max-w-lg" }, "اختر وسيلة الدفع المناسبة وأكمل العملية بأمان للبدء فوراً في رحلتك التعليمية.")
                        ]),
                        createVNode(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none bg-[var(--card)] rounded-md overflow-hidden" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "p-4 border-b border-[var(--border)] flex flex-row items-center justify-between" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$5), { class: "text-[11px] font-normal uppercase tracking-widest flex items-center gap-2 text-[var(--foreground)]" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "h-7 w-7 rounded bg-[var(--primary)] text-white flex items-center justify-center" }, [
                                      createVNode(unref(CreditCard), { class: "h-3.5 w-3.5" })
                                    ]),
                                    createTextVNode(" بطاقة الائتمان / الخصم ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex items-center gap-2 grayscale opacity-40" }, [
                                  createVNode("img", {
                                    src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
                                    class: "h-2.5"
                                  }),
                                  createVNode("img", {
                                    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
                                    class: "h-3.5"
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$6), { class: "p-6 space-y-6 bg-[var(--card)]" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("div", { class: "space-y-1.5" }, [
                                    createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                                      default: withCtx(() => [
                                        createTextVNode("الاسم على البطاقة")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$a), {
                                      placeholder: "John Doe",
                                      class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                                    })
                                  ]),
                                  createVNode("div", { class: "space-y-1.5" }, [
                                    createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                                      default: withCtx(() => [
                                        createTextVNode("رقم البطاقة")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(unref(_sfc_main$a), {
                                        placeholder: "0000 0000 0000 0000",
                                        class: "h-9 text-[12px] font-mono font-normal pl-12 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)] tracking-widest"
                                      }),
                                      createVNode(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-[var(--muted-foreground)]" })
                                    ])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                    createVNode("div", { class: "space-y-1.5" }, [
                                      createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                                        default: withCtx(() => [
                                          createTextVNode("تاريخ الانتهاء")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), {
                                        placeholder: "MM/YY",
                                        class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                                      })
                                    ]),
                                    createVNode("div", { class: "space-y-1.5" }, [
                                      createVNode(unref(_sfc_main$9), { class: "text-[10px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, {
                                        default: withCtx(() => [
                                          createTextVNode("رمز الأمان (CVV)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), {
                                        placeholder: "123",
                                        class: "h-9 text-[12px] font-normal border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] rounded-md focus-visible:ring-[var(--primary)]"
                                      })
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), { class: "bg-[var(--muted)] p-4 flex items-center gap-3 border-t border-[var(--border)]" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "h-7 w-7 rounded bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] flex items-center justify-center shrink-0" }, [
                                  createVNode(unref(ShieldCheck), { class: "h-3.5 w-3.5 text-[var(--primary)]" })
                                ]),
                                createVNode("p", { class: "text-[10px] font-normal text-[var(--muted-foreground)] italic" }, "نحن نستخدم تشفيراً عالمياً 256-bit لضمان أمن بياناتك المالية.")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex flex-col md:flex-row items-center justify-between gap-4 pt-4" }, [
                          createVNode(unref(Link), {
                            href: _ctx.route("courses.show", __props.course.slug)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$b), {
                                variant: "ghost",
                                class: "h-8 text-[11px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-md px-6 bg-transparent border border-[var(--border)] hover:bg-[var(--muted)]"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ChevronLeft), { class: "h-3.5 w-3.5 ml-1.5" }),
                                  createTextVNode(" العودة للتفاصيل ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode(unref(_sfc_main$b), {
                            onClick: handlePayment,
                            disabled: isProcessing.value,
                            class: "h-10 text-[12px] font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95 rounded-md px-8 shadow-none border-none group"
                          }, {
                            default: withCtx(() => [
                              isProcessing.value ? (openBlock(), createBlock(unref(Loader2), {
                                key: 0,
                                class: "ml-2 h-4 w-4 animate-spin"
                              })) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "flex items-center gap-2"
                              }, [
                                createTextVNode(" دفع $" + toDisplayString(__props.course.price) + " والاشتراك الآن ", 1),
                                createVNode(unref(Wallet), { class: "h-3.5 w-3.5 opacity-50" })
                              ]))
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Courses/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
