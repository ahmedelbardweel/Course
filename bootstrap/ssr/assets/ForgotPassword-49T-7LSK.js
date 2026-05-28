import { withCtx, unref, createTextVNode, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./GuestLayout-CxsbssJd.js";
import { _ as _sfc_main$4 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$3 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$2 } from "./Label--EucbuAp.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { Mail, AlertCircle, Loader2, ArrowRight } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "radix-vue";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "استعادة كلمة المرور - كورس" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-6 text-center sm:text-right"${_scopeId}><h1 class="text-2xl font-semibold tracking-tight text-brand-ink"${_scopeId}>استعادة كلمة المرور</h1><p class="text-[13px] text-brand-body mt-1.5 leading-relaxed"${_scopeId}> هل نسيت كلمة المرور؟ لا تقلق. أدخل بريدك الإلكتروني وسنرسل لك رابط استعادتها فوراً. </p></div>`);
            if (__props.status) {
              _push2(`<div class="mb-5 text-[12px] font-semibold text-brand-orange bg-white border border-brand-hairline p-3 rounded-md text-center flex items-center justify-center gap-2"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form class="space-y-5"${_scopeId}><div class="space-y-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              for: "email",
              class: "text-brand-ink font-semibold text-[10px] uppercase tracking-wider"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`البريد الإلكتروني`);
                } else {
                  return [
                    createTextVNode("البريد الإلكتروني")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative group"${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "email",
              type: "email",
              class: "h-10 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username",
              placeholder: "name@example.com"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(form).errors.email) {
              _push2(`<div class="text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(AlertCircle), { class: "h-3.5 w-3.5 shrink-0" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(form).errors.email)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              class: ["w-full h-10 bg-brand-orange border border-brand-orange text-white font-semibold rounded-md flex items-center justify-center gap-2", { "opacity-80 cursor-not-allowed": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).processing) {
                    _push3(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span${_scopeId2}>إرسال رابط الاستعادة</span>`);
                } else {
                  return [
                    unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                      key: 0,
                      class: "h-4 w-4 animate-spin"
                    })) : createCommentVNode("", true),
                    createVNode("span", null, "إرسال رابط الاستعادة")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-5 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-ink hover:underline underline-offset-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>العودة لتسجيل الدخول</span>`);
                  _push3(ssrRenderComponent(unref(ArrowRight), { class: "h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "العودة لتسجيل الدخول"),
                    createVNode(unref(ArrowRight), { class: "h-3.5 w-3.5" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "استعادة كلمة المرور - كورس" }),
              createVNode("div", { class: "mb-6 text-center sm:text-right" }, [
                createVNode("h1", { class: "text-2xl font-semibold tracking-tight text-brand-ink" }, "استعادة كلمة المرور"),
                createVNode("p", { class: "text-[13px] text-brand-body mt-1.5 leading-relaxed" }, " هل نسيت كلمة المرور؟ لا تقلق. أدخل بريدك الإلكتروني وسنرسل لك رابط استعادتها فوراً. ")
              ]),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-5 text-[12px] font-semibold text-brand-orange bg-white border border-brand-hairline p-3 rounded-md text-center flex items-center justify-center gap-2"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"]),
                class: "space-y-5"
              }, [
                createVNode("div", { class: "space-y-1.5" }, [
                  createVNode(unref(_sfc_main$2), {
                    for: "email",
                    class: "text-brand-ink font-semibold text-[10px] uppercase tracking-wider"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("البريد الإلكتروني")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "relative group" }, [
                    createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted" }, [
                      createVNode(unref(Mail), { class: "h-4 w-4" })
                    ]),
                    createVNode(unref(_sfc_main$3), {
                      id: "email",
                      type: "email",
                      class: "h-10 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "username",
                      placeholder: "name@example.com"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  unref(form).errors.email ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5"
                  }, [
                    createVNode(unref(AlertCircle), { class: "h-3.5 w-3.5 shrink-0" }),
                    createTextVNode(" " + toDisplayString(unref(form).errors.email), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode(unref(_sfc_main$4), {
                  class: ["w-full h-10 bg-brand-orange border border-brand-orange text-white font-semibold rounded-md flex items-center justify-center gap-2", { "opacity-80 cursor-not-allowed": unref(form).processing }],
                  disabled: unref(form).processing
                }, {
                  default: withCtx(() => [
                    unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                      key: 0,
                      class: "h-4 w-4 animate-spin"
                    })) : createCommentVNode("", true),
                    createVNode("span", null, "إرسال رابط الاستعادة")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"]),
                createVNode("div", { class: "mt-5 text-center" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-ink hover:underline underline-offset-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "العودة لتسجيل الدخول"),
                      createVNode(unref(ArrowRight), { class: "h-3.5 w-3.5" })
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
