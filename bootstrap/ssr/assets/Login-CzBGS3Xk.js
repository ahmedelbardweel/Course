import { computed, unref, mergeProps, withCtx, renderSlot, createVNode, useSSRContext, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./GuestLayout-pZJuQaq4.js";
import { _ as _sfc_main$5 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$4 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$3 } from "./Label--EucbuAp.js";
import { useForwardPropsEmits, CheckboxRoot, CheckboxIndicator } from "radix-vue";
import { Check } from "lucide-vue-next";
import { c as cn } from "./utils-H80jjgLf.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "class-variance-authority";
import "reka-ui";
import "@vueuse/core";
import "clsx";
import "tailwind-merge";
const _sfc_main$1 = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    defaultChecked: { type: Boolean, required: false },
    checked: { type: [Boolean, String], required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    name: { type: String, required: false },
    value: { type: String, required: false },
    id: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: String, required: false },
    class: { type: null, required: false }
  },
  emits: ["update:checked", "valueChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CheckboxRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "peer h-4 w-4 shrink-0 border-2 border-black ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black data-[state=checked]:text-white dark:border-white dark:ring-offset-black dark:focus-visible:ring-white dark:data-[state=checked]:bg-white dark:data-[state=checked]:text-black",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CheckboxIndicator), { class: "flex h-full w-full items-center justify-center text-current" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(unref(Check), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(unref(Check), { class: "h-4 w-4" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CheckboxIndicator), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(unref(Check), { class: "h-4 w-4" })
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/checkbox/Checkbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "تسجيل الدخول" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold tracking-tight"${_scopeId}>مرحباً بعودتك</h1><p class="text-sm text-zinc-500 mt-1"${_scopeId}>سجل دخولك لمتابعة رحلة التعلم الخاصة بك.</p></div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-zinc-900 border-2 border-zinc-900 p-2 text-center"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form class="space-y-4"${_scopeId}><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { for: "email" }, {
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
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              id: "email",
              type: "email",
              class: "h-10 border-zinc-200 focus-visible:ring-black",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username",
              placeholder: "name@example.com"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.email) {
              _push2(`<p class="text-xs font-bold text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { for: "password" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`كلمة المرور`);
                } else {
                  return [
                    createTextVNode("كلمة المرور")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "text-xs font-bold underline underline-offset-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` نسيت كلمة المرور؟ `);
                  } else {
                    return [
                      createTextVNode(" نسيت كلمة المرور؟ ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              id: "password",
              type: "password",
              class: "h-10 border-zinc-200 focus-visible:ring-black",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.password) {
              _push2(`<p class="text-xs font-bold text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.password)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center space-x-2 space-x-reverse"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              id: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event,
              class: "border-zinc-200"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              for: "remember",
              class: "text-sm font-medium leading-none cursor-pointer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`تذكرني على هذا الجهاز`);
                } else {
                  return [
                    createTextVNode("تذكرني على هذا الجهاز")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$5), {
              class: ["w-full h-11 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` تسجيل الدخول `);
                } else {
                  return [
                    createTextVNode(" تسجيل الدخول ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 text-center text-sm"${_scopeId}><span class="text-zinc-500"${_scopeId}>ليس لديك حساب؟ </span>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "font-bold underline underline-offset-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`انضم إلينا الآن`);
                } else {
                  return [
                    createTextVNode("انضم إلينا الآن")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "تسجيل الدخول" }),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold tracking-tight" }, "مرحباً بعودتك"),
                createVNode("p", { class: "text-sm text-zinc-500 mt-1" }, "سجل دخولك لمتابعة رحلة التعلم الخاصة بك.")
              ]),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-zinc-900 border-2 border-zinc-900 p-2 text-center"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"]),
                class: "space-y-4"
              }, [
                createVNode("div", { class: "space-y-2" }, [
                  createVNode(unref(_sfc_main$3), { for: "email" }, {
                    default: withCtx(() => [
                      createTextVNode("البريد الإلكتروني")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$4), {
                    id: "email",
                    type: "email",
                    class: "h-10 border-zinc-200 focus-visible:ring-black",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username",
                    placeholder: "name@example.com"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  unref(form).errors.email ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-xs font-bold text-red-600"
                  }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode(unref(_sfc_main$3), { for: "password" }, {
                      default: withCtx(() => [
                        createTextVNode("كلمة المرور")
                      ]),
                      _: 1
                    }),
                    __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                      key: 0,
                      href: _ctx.route("password.request"),
                      class: "text-xs font-bold underline underline-offset-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" نسيت كلمة المرور؟ ")
                      ]),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true)
                  ]),
                  createVNode(unref(_sfc_main$4), {
                    id: "password",
                    type: "password",
                    class: "h-10 border-zinc-200 focus-visible:ring-black",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  unref(form).errors.password ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-xs font-bold text-red-600"
                  }, toDisplayString(unref(form).errors.password), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex items-center space-x-2 space-x-reverse" }, [
                  createVNode(unref(_sfc_main$1), {
                    id: "remember",
                    checked: unref(form).remember,
                    "onUpdate:checked": ($event) => unref(form).remember = $event,
                    class: "border-zinc-200"
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode(unref(_sfc_main$3), {
                    for: "remember",
                    class: "text-sm font-medium leading-none cursor-pointer"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("تذكرني على هذا الجهاز")
                    ]),
                    _: 1
                  })
                ]),
                createVNode(unref(_sfc_main$5), {
                  class: ["w-full h-11 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold", { "opacity-25": unref(form).processing }],
                  disabled: unref(form).processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(" تسجيل الدخول ")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"]),
                createVNode("div", { class: "mt-6 text-center text-sm" }, [
                  createVNode("span", { class: "text-zinc-500" }, "ليس لديك حساب؟ "),
                  createVNode(unref(Link), {
                    href: _ctx.route("register"),
                    class: "font-bold underline underline-offset-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("انضم إلينا الآن")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
