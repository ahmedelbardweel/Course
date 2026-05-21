import { ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CtY-O8y9.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$b } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$2, b as _sfc_main$4, c as _sfc_main$5, a as _sfc_main$6, d as _sfc_main$8 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$7 } from "./Separator-CFmMgQM_.js";
import { _ as _sfc_main$a } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$9 } from "./Label--EucbuAp.js";
import { _ as _sfc_main$3 } from "./index-CGK-4kfq.js";
import { ChevronLeft, CheckCircle2, CreditCard, Lock, ShieldCheck, Loader2, Wallet } from "lucide-vue-next";
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
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-white text-[12px]"${_scopeId}><header class="h-11 border-b border-zinc-200 bg-white flex items-center justify-between px-4 sticky top-0 z-30"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("courses.index"),
              class: "hover:text-zinc-900 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`الدورات`);
                } else {
                  return [
                    createTextVNode("الدورات")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("courses.show", __props.course.slug),
              class: "hover:text-zinc-900 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.course.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.course.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-black"${_scopeId}>إتمام الدفع</span></div></header><main class="flex-1 p-4 lg:p-8 text-right overflow-y-auto"${_scopeId}><div class="w-full max-w-6xl mx-auto"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"${_scopeId}><div class="lg:col-span-5 order-2 lg:order-1"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-md overflow-hidden sticky top-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="aspect-video relative overflow-hidden border-b border-zinc-200"${_scopeId2}>`);
                  if (__props.course.thumbnail) {
                    _push3(`<img${ssrRenderAttr("src", __props.course.thumbnail)} class="w-full h-full object-cover"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="absolute inset-0 bg-zinc-900/40 flex items-end p-4"${_scopeId2}><div class="space-y-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$3), {
                    variant: "secondary",
                    class: "h-4 text-[8px] font-black uppercase tracking-widest bg-white/90 text-zinc-900 border-none rounded"
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
                  _push3(`<h3 class="text-[14px] font-black text-white leading-tight line-clamp-1"${_scopeId2}>${ssrInterpolate(__props.course.title)}</h3></div></div></div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-4 border-b border-zinc-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-400" }, {
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
                          createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-400" }, {
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
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-4 space-y-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-2.5"${_scopeId3}><div class="flex justify-between items-center text-[11px] font-medium text-zinc-500"${_scopeId3}><span${_scopeId3}>سعر الكورس الأصلي</span><span class="font-black text-zinc-900"${_scopeId3}>$${ssrInterpolate(__props.course.price)}</span></div><div class="flex justify-between items-center text-[11px] font-medium text-zinc-500"${_scopeId3}><span${_scopeId3}>رسوم المعالجة</span><span class="text-zinc-900 font-black"${_scopeId3}>مجاني</span></div><div class="flex justify-between items-center text-[11px] font-medium text-zinc-500"${_scopeId3}><span${_scopeId3}>الخصومات المطبقة</span><span class="text-zinc-300 font-black"${_scopeId3}>$0.00</span></div></div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$7), { class: "bg-zinc-100" }, null, _parent4, _scopeId3));
                        _push4(`<div class="flex justify-between items-center py-2"${_scopeId3}><span class="text-[13px] font-black text-zinc-900 uppercase"${_scopeId3}>الإجمالي النهائي</span><div class="text-right"${_scopeId3}><div class="text-2xl font-black text-zinc-900 tracking-tighter"${_scopeId3}>$${ssrInterpolate(__props.course.price)}</div><div class="text-[9px] font-black text-zinc-300 uppercase tracking-widest mt-1"${_scopeId3}>مدى الحياة</div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-2.5" }, [
                            createVNode("div", { class: "flex justify-between items-center text-[11px] font-medium text-zinc-500" }, [
                              createVNode("span", null, "سعر الكورس الأصلي"),
                              createVNode("span", { class: "font-black text-zinc-900" }, "$" + toDisplayString(__props.course.price), 1)
                            ]),
                            createVNode("div", { class: "flex justify-between items-center text-[11px] font-medium text-zinc-500" }, [
                              createVNode("span", null, "رسوم المعالجة"),
                              createVNode("span", { class: "text-zinc-900 font-black" }, "مجاني")
                            ]),
                            createVNode("div", { class: "flex justify-between items-center text-[11px] font-medium text-zinc-500" }, [
                              createVNode("span", null, "الخصومات المطبقة"),
                              createVNode("span", { class: "text-zinc-300 font-black" }, "$0.00")
                            ])
                          ]),
                          createVNode(unref(_sfc_main$7), { class: "bg-zinc-100" }),
                          createVNode("div", { class: "flex justify-between items-center py-2" }, [
                            createVNode("span", { class: "text-[13px] font-black text-zinc-900 uppercase" }, "الإجمالي النهائي"),
                            createVNode("div", { class: "text-right" }, [
                              createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.course.price), 1),
                              createVNode("div", { class: "text-[9px] font-black text-zinc-300 uppercase tracking-widest mt-1" }, "مدى الحياة")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "bg-zinc-50/20 p-4 flex flex-col gap-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h4 class="text-[9px] font-black uppercase tracking-widest text-zinc-400 w-full mb-1"${_scopeId3}>مزايا الاشتراك:</h4><div class="w-full space-y-2"${_scopeId3}><div class="flex items-center gap-2 text-[10px] font-bold text-zinc-600"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }, null, _parent4, _scopeId3));
                        _push4(` وصول كامل لجميع الدروس (${ssrInterpolate(__props.course.lessons_count)} درس) </div><div class="flex items-center gap-2 text-[10px] font-bold text-zinc-600"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }, null, _parent4, _scopeId3));
                        _push4(` شهادة إتمام رقمية معتمدة </div><div class="flex items-center gap-2 text-[10px] font-bold text-zinc-600"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }, null, _parent4, _scopeId3));
                        _push4(` استخدام غير محدود للمساعد الذكي AI </div></div>`);
                      } else {
                        return [
                          createVNode("h4", { class: "text-[9px] font-black uppercase tracking-widest text-zinc-400 w-full mb-1" }, "مزايا الاشتراك:"),
                          createVNode("div", { class: "w-full space-y-2" }, [
                            createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-600" }, [
                              createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }),
                              createTextVNode(" وصول كامل لجميع الدروس (" + toDisplayString(__props.course.lessons_count) + " درس) ", 1)
                            ]),
                            createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-600" }, [
                              createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }),
                              createTextVNode(" شهادة إتمام رقمية معتمدة ")
                            ]),
                            createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-600" }, [
                              createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }),
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
                    createVNode("div", { class: "aspect-video relative overflow-hidden border-b border-zinc-200" }, [
                      __props.course.thumbnail ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: __props.course.thumbnail,
                        class: "w-full h-full object-cover"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode("div", { class: "absolute inset-0 bg-zinc-900/40 flex items-end p-4" }, [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode(unref(_sfc_main$3), {
                            variant: "secondary",
                            class: "h-4 text-[8px] font-black uppercase tracking-widest bg-white/90 text-zinc-900 border-none rounded"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(toDisplayString((_a = __props.course.category) == null ? void 0 : _a.name), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode("h3", { class: "text-[14px] font-black text-white leading-tight line-clamp-1" }, toDisplayString(__props.course.title), 1)
                        ])
                      ])
                    ]),
                    createVNode(unref(_sfc_main$4), { class: "p-4 border-b border-zinc-100" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-400" }, {
                          default: withCtx(() => [
                            createTextVNode("تفاصيل الفاتورة")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "p-4 space-y-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-2.5" }, [
                          createVNode("div", { class: "flex justify-between items-center text-[11px] font-medium text-zinc-500" }, [
                            createVNode("span", null, "سعر الكورس الأصلي"),
                            createVNode("span", { class: "font-black text-zinc-900" }, "$" + toDisplayString(__props.course.price), 1)
                          ]),
                          createVNode("div", { class: "flex justify-between items-center text-[11px] font-medium text-zinc-500" }, [
                            createVNode("span", null, "رسوم المعالجة"),
                            createVNode("span", { class: "text-zinc-900 font-black" }, "مجاني")
                          ]),
                          createVNode("div", { class: "flex justify-between items-center text-[11px] font-medium text-zinc-500" }, [
                            createVNode("span", null, "الخصومات المطبقة"),
                            createVNode("span", { class: "text-zinc-300 font-black" }, "$0.00")
                          ])
                        ]),
                        createVNode(unref(_sfc_main$7), { class: "bg-zinc-100" }),
                        createVNode("div", { class: "flex justify-between items-center py-2" }, [
                          createVNode("span", { class: "text-[13px] font-black text-zinc-900 uppercase" }, "الإجمالي النهائي"),
                          createVNode("div", { class: "text-right" }, [
                            createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.course.price), 1),
                            createVNode("div", { class: "text-[9px] font-black text-zinc-300 uppercase tracking-widest mt-1" }, "مدى الحياة")
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "bg-zinc-50/20 p-4 flex flex-col gap-3" }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "text-[9px] font-black uppercase tracking-widest text-zinc-400 w-full mb-1" }, "مزايا الاشتراك:"),
                        createVNode("div", { class: "w-full space-y-2" }, [
                          createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-600" }, [
                            createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }),
                            createTextVNode(" وصول كامل لجميع الدروس (" + toDisplayString(__props.course.lessons_count) + " درس) ", 1)
                          ]),
                          createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-600" }, [
                            createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }),
                            createTextVNode(" شهادة إتمام رقمية معتمدة ")
                          ]),
                          createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-600" }, [
                            createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }),
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
            _push2(`</div><div class="lg:col-span-7 order-1 lg:order-2 space-y-6"${_scopeId}><div class="space-y-1 pb-2"${_scopeId}><h1 class="text-2xl font-black text-zinc-900 tracking-tight leading-none uppercase"${_scopeId}>إتمام عملية الدفع</h1><p class="text-[11px] text-zinc-400 font-medium leading-relaxed max-w-lg"${_scopeId}>اختر وسيلة الدفع المناسبة وأكمل العملية بأمان للبدء فوراً في رحلتك التعليمية.</p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-md overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "p-4 border-b border-zinc-100 flex flex-row items-center justify-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[11px] font-black uppercase tracking-widest flex items-center gap-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="h-7 w-7 rounded bg-zinc-900 text-white flex items-center justify-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(CreditCard), { class: "h-3.5 w-3.5" }, null, _parent5, _scopeId4));
                              _push5(`</div> بطاقة الائتمان / الخصم `);
                            } else {
                              return [
                                createVNode("div", { class: "h-7 w-7 rounded bg-zinc-900 text-white flex items-center justify-center" }, [
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
                          createVNode(unref(_sfc_main$5), { class: "text-[11px] font-black uppercase tracking-widest flex items-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "h-7 w-7 rounded bg-zinc-900 text-white flex items-center justify-center" }, [
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
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "p-6 space-y-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
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
                          class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
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
                          class: "h-9 text-[12px] font-mono font-bold pl-12 border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950 tracking-widest"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-zinc-300" }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="grid grid-cols-2 gap-4"${_scopeId3}><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
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
                          class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="space-y-1.5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
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
                          class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("الاسم على البطاقة")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$a), {
                                placeholder: "John Doe",
                                class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                              })
                            ]),
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("رقم البطاقة")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "relative" }, [
                                createVNode(unref(_sfc_main$a), {
                                  placeholder: "0000 0000 0000 0000",
                                  class: "h-9 text-[12px] font-mono font-bold pl-12 border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950 tracking-widest"
                                }),
                                createVNode(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-zinc-300" })
                              ])
                            ]),
                            createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                  default: withCtx(() => [
                                    createTextVNode("تاريخ الانتهاء")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$a), {
                                  placeholder: "MM/YY",
                                  class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                                })
                              ]),
                              createVNode("div", { class: "space-y-1.5" }, [
                                createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                  default: withCtx(() => [
                                    createTextVNode("رمز الأمان (CVV)")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$a), {
                                  placeholder: "123",
                                  class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                                })
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "bg-zinc-50/20 p-4 flex items-center gap-3 border-t border-zinc-100" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="h-7 w-7 rounded bg-zinc-100 text-zinc-900 border border-zinc-200 flex items-center justify-center shrink-0"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(ShieldCheck), { class: "h-3.5 w-3.5" }, null, _parent4, _scopeId3));
                        _push4(`</div><p class="text-[10px] font-medium text-zinc-500 italic"${_scopeId3}>نحن نستخدم تشفيراً عالمياً 256-bit لضمان أمن بياناتك المالية.</p>`);
                      } else {
                        return [
                          createVNode("div", { class: "h-7 w-7 rounded bg-zinc-100 text-zinc-900 border border-zinc-200 flex items-center justify-center shrink-0" }, [
                            createVNode(unref(ShieldCheck), { class: "h-3.5 w-3.5" })
                          ]),
                          createVNode("p", { class: "text-[10px] font-medium text-zinc-500 italic" }, "نحن نستخدم تشفيراً عالمياً 256-bit لضمان أمن بياناتك المالية.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "p-4 border-b border-zinc-100 flex flex-row items-center justify-between" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { class: "text-[11px] font-black uppercase tracking-widest flex items-center gap-2" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "h-7 w-7 rounded bg-zinc-900 text-white flex items-center justify-center" }, [
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
                    createVNode(unref(_sfc_main$6), { class: "p-6 space-y-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                              default: withCtx(() => [
                                createTextVNode("الاسم على البطاقة")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$a), {
                              placeholder: "John Doe",
                              class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                            })
                          ]),
                          createVNode("div", { class: "space-y-1.5" }, [
                            createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                              default: withCtx(() => [
                                createTextVNode("رقم البطاقة")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "relative" }, [
                              createVNode(unref(_sfc_main$a), {
                                placeholder: "0000 0000 0000 0000",
                                class: "h-9 text-[12px] font-mono font-bold pl-12 border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950 tracking-widest"
                              }),
                              createVNode(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-zinc-300" })
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("تاريخ الانتهاء")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$a), {
                                placeholder: "MM/YY",
                                class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                              })
                            ]),
                            createVNode("div", { class: "space-y-1.5" }, [
                              createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                default: withCtx(() => [
                                  createTextVNode("رمز الأمان (CVV)")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$a), {
                                placeholder: "123",
                                class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                              })
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$8), { class: "bg-zinc-50/20 p-4 flex items-center gap-3 border-t border-zinc-100" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-7 w-7 rounded bg-zinc-100 text-zinc-900 border border-zinc-200 flex items-center justify-center shrink-0" }, [
                          createVNode(unref(ShieldCheck), { class: "h-3.5 w-3.5" })
                        ]),
                        createVNode("p", { class: "text-[10px] font-medium text-zinc-500 italic" }, "نحن نستخدم تشفيراً عالمياً 256-bit لضمان أمن بياناتك المالية.")
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
                    class: "h-8 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 rounded-md px-6 transition-all"
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
                      class: "h-8 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 rounded-md px-6 transition-all"
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
              class: "h-10 text-[12px] font-bold bg-zinc-950 text-white hover:bg-zinc-900 rounded-md px-8 shadow-none transition-colors border-none group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (isProcessing.value) {
                    _push3(ssrRenderComponent(unref(Loader2), { class: "ml-2 h-4 w-4 animate-spin" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<span class="flex items-center gap-2"${_scopeId2}> دفع $${ssrInterpolate(__props.course.price)} والاشتراك الآن `);
                    _push3(ssrRenderComponent(unref(Wallet), { class: "h-3.5 w-3.5 opacity-50 group-hover:translate-x-1 transition-transform" }, null, _parent3, _scopeId2));
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
                      createVNode(unref(Wallet), { class: "h-3.5 w-3.5 opacity-50 group-hover:translate-x-1 transition-transform" })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-white text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b border-zinc-200 bg-white flex items-center justify-between px-4 sticky top-0 z-30" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("courses.index"),
                      class: "hover:text-zinc-900 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("الدورات")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(ChevronLeft), { class: "h-3 w-3" }),
                    createVNode(unref(Link), {
                      href: _ctx.route("courses.show", __props.course.slug),
                      class: "hover:text-zinc-900 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.course.title), 1)
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(ChevronLeft), { class: "h-3 w-3" }),
                    createVNode("span", { class: "text-zinc-900 font-black" }, "إتمام الدفع")
                  ])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-8 text-right overflow-y-auto" }, [
                  createVNode("div", { class: "w-full max-w-6xl mx-auto" }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" }, [
                      createVNode("div", { class: "lg:col-span-5 order-2 lg:order-1" }, [
                        createVNode(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-md overflow-hidden sticky top-4" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "aspect-video relative overflow-hidden border-b border-zinc-200" }, [
                              __props.course.thumbnail ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: __props.course.thumbnail,
                                class: "w-full h-full object-cover"
                              }, null, 8, ["src"])) : createCommentVNode("", true),
                              createVNode("div", { class: "absolute inset-0 bg-zinc-900/40 flex items-end p-4" }, [
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode(unref(_sfc_main$3), {
                                    variant: "secondary",
                                    class: "h-4 text-[8px] font-black uppercase tracking-widest bg-white/90 text-zinc-900 border-none rounded"
                                  }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createTextVNode(toDisplayString((_a = __props.course.category) == null ? void 0 : _a.name), 1)
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode("h3", { class: "text-[14px] font-black text-white leading-tight line-clamp-1" }, toDisplayString(__props.course.title), 1)
                                ])
                              ])
                            ]),
                            createVNode(unref(_sfc_main$4), { class: "p-4 border-b border-zinc-100" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$5), { class: "text-[10px] font-black uppercase tracking-widest text-zinc-400" }, {
                                  default: withCtx(() => [
                                    createTextVNode("تفاصيل الفاتورة")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$6), { class: "p-4 space-y-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-2.5" }, [
                                  createVNode("div", { class: "flex justify-between items-center text-[11px] font-medium text-zinc-500" }, [
                                    createVNode("span", null, "سعر الكورس الأصلي"),
                                    createVNode("span", { class: "font-black text-zinc-900" }, "$" + toDisplayString(__props.course.price), 1)
                                  ]),
                                  createVNode("div", { class: "flex justify-between items-center text-[11px] font-medium text-zinc-500" }, [
                                    createVNode("span", null, "رسوم المعالجة"),
                                    createVNode("span", { class: "text-zinc-900 font-black" }, "مجاني")
                                  ]),
                                  createVNode("div", { class: "flex justify-between items-center text-[11px] font-medium text-zinc-500" }, [
                                    createVNode("span", null, "الخصومات المطبقة"),
                                    createVNode("span", { class: "text-zinc-300 font-black" }, "$0.00")
                                  ])
                                ]),
                                createVNode(unref(_sfc_main$7), { class: "bg-zinc-100" }),
                                createVNode("div", { class: "flex justify-between items-center py-2" }, [
                                  createVNode("span", { class: "text-[13px] font-black text-zinc-900 uppercase" }, "الإجمالي النهائي"),
                                  createVNode("div", { class: "text-right" }, [
                                    createVNode("div", { class: "text-2xl font-black text-zinc-900 tracking-tighter" }, "$" + toDisplayString(__props.course.price), 1),
                                    createVNode("div", { class: "text-[9px] font-black text-zinc-300 uppercase tracking-widest mt-1" }, "مدى الحياة")
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), { class: "bg-zinc-50/20 p-4 flex flex-col gap-3" }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "text-[9px] font-black uppercase tracking-widest text-zinc-400 w-full mb-1" }, "مزايا الاشتراك:"),
                                createVNode("div", { class: "w-full space-y-2" }, [
                                  createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-600" }, [
                                    createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }),
                                    createTextVNode(" وصول كامل لجميع الدروس (" + toDisplayString(__props.course.lessons_count) + " درس) ", 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-600" }, [
                                    createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }),
                                    createTextVNode(" شهادة إتمام رقمية معتمدة ")
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-2 text-[10px] font-bold text-zinc-600" }, [
                                    createVNode(unref(CheckCircle2), { class: "h-3 w-3 text-zinc-900" }),
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
                          createVNode("h1", { class: "text-2xl font-black text-zinc-900 tracking-tight leading-none uppercase" }, "إتمام عملية الدفع"),
                          createVNode("p", { class: "text-[11px] text-zinc-400 font-medium leading-relaxed max-w-lg" }, "اختر وسيلة الدفع المناسبة وأكمل العملية بأمان للبدء فوراً في رحلتك التعليمية.")
                        ]),
                        createVNode(unref(_sfc_main$2), { class: "border-zinc-200 shadow-none bg-white rounded-md overflow-hidden" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "p-4 border-b border-zinc-100 flex flex-row items-center justify-between" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$5), { class: "text-[11px] font-black uppercase tracking-widest flex items-center gap-2" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "h-7 w-7 rounded bg-zinc-900 text-white flex items-center justify-center" }, [
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
                            createVNode(unref(_sfc_main$6), { class: "p-6 space-y-6" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "space-y-4" }, [
                                  createVNode("div", { class: "space-y-1.5" }, [
                                    createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                      default: withCtx(() => [
                                        createTextVNode("الاسم على البطاقة")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$a), {
                                      placeholder: "John Doe",
                                      class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                                    })
                                  ]),
                                  createVNode("div", { class: "space-y-1.5" }, [
                                    createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                      default: withCtx(() => [
                                        createTextVNode("رقم البطاقة")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(unref(_sfc_main$a), {
                                        placeholder: "0000 0000 0000 0000",
                                        class: "h-9 text-[12px] font-mono font-bold pl-12 border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950 tracking-widest"
                                      }),
                                      createVNode(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-zinc-300" })
                                    ])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                                    createVNode("div", { class: "space-y-1.5" }, [
                                      createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                        default: withCtx(() => [
                                          createTextVNode("تاريخ الانتهاء")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), {
                                        placeholder: "MM/YY",
                                        class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                                      })
                                    ]),
                                    createVNode("div", { class: "space-y-1.5" }, [
                                      createVNode(unref(_sfc_main$9), { class: "text-[10px] font-black text-zinc-400 uppercase tracking-widest" }, {
                                        default: withCtx(() => [
                                          createTextVNode("رمز الأمان (CVV)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(_sfc_main$a), {
                                        placeholder: "123",
                                        class: "h-9 text-[12px] font-medium border-zinc-200 bg-white rounded-md focus-visible:ring-zinc-950"
                                      })
                                    ])
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), { class: "bg-zinc-50/20 p-4 flex items-center gap-3 border-t border-zinc-100" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "h-7 w-7 rounded bg-zinc-100 text-zinc-900 border border-zinc-200 flex items-center justify-center shrink-0" }, [
                                  createVNode(unref(ShieldCheck), { class: "h-3.5 w-3.5" })
                                ]),
                                createVNode("p", { class: "text-[10px] font-medium text-zinc-500 italic" }, "نحن نستخدم تشفيراً عالمياً 256-bit لضمان أمن بياناتك المالية.")
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
                                class: "h-8 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 rounded-md px-6 transition-all"
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
                            class: "h-10 text-[12px] font-bold bg-zinc-950 text-white hover:bg-zinc-900 rounded-md px-8 shadow-none transition-colors border-none group"
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
                                createVNode(unref(Wallet), { class: "h-3.5 w-3.5 opacity-50 group-hover:translate-x-1 transition-transform" })
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
