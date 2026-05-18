import { withCtx, unref, createTextVNode, createVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./GuestLayout-pZJuQaq4.js";
import { _ as _sfc_main$4 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$3 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$2 } from "./Label--EucbuAp.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "radix-vue";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      learning_goal: ""
      // New field for data collection
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "إنشاء حساب جديد" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-6"${_scopeId}><h1 class="text-2xl font-bold tracking-tight"${_scopeId}>ابدأ رحلتك اليوم</h1><p class="text-sm text-zinc-500 mt-1"${_scopeId}>انضم إلى مجتمع &quot;كورس&quot; وابدأ في بناء مستقبلك.</p></div><form class="space-y-4"${_scopeId}><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "name" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`الاسم الكامل`);
                } else {
                  return [
                    createTextVNode("الاسم الكامل")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "name",
              type: "text",
              class: "h-10 border-zinc-200 focus-visible:ring-black",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name",
              placeholder: "أحمد محمد"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.name) {
              _push2(`<p class="text-xs font-bold text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "email" }, {
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
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "email",
              type: "email",
              class: "h-10 border-zinc-200 focus-visible:ring-black",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username",
              placeholder: "name@example.com"
            }, null, _parent2, _scopeId));
            if (unref(form).errors.email) {
              _push2(`<p class="text-xs font-bold text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "learning_goal" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`ما هو هدفك التعليمي؟ (اختياري)`);
                } else {
                  return [
                    createTextVNode("ما هو هدفك التعليمي؟ (اختياري)")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "learning_goal",
              type: "text",
              class: "h-10 border-zinc-200 focus-visible:ring-black",
              modelValue: unref(form).learning_goal,
              "onUpdate:modelValue": ($event) => unref(form).learning_goal = $event,
              placeholder: "مثلاً: تعلم تطوير تطبيقات الموبايل"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-[10px] text-zinc-400"${_scopeId}>نستخدم هذه البيانات لتخصيص المحتوى المناسب لك.</p></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "password" }, {
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
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "password",
              type: "password",
              class: "h-10 border-zinc-200 focus-visible:ring-black",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), { for: "password_confirmation" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`تأكيد الكلمة`);
                } else {
                  return [
                    createTextVNode("تأكيد الكلمة")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "password_confirmation",
              type: "password",
              class: "h-10 border-zinc-200 focus-visible:ring-black",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(form).errors.password) {
              _push2(`<p class="col-span-2 text-xs font-bold text-red-600"${_scopeId}>${ssrInterpolate(unref(form).errors.password)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              class: ["w-full h-11 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` إنشاء الحساب `);
                } else {
                  return [
                    createTextVNode(" إنشاء الحساب ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 text-center text-sm"${_scopeId}><span class="text-zinc-500"${_scopeId}>لديك حساب بالفعل؟ </span>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "font-bold underline underline-offset-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`سجل دخولك`);
                } else {
                  return [
                    createTextVNode("سجل دخولك")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "إنشاء حساب جديد" }),
              createVNode("div", { class: "mb-6" }, [
                createVNode("h1", { class: "text-2xl font-bold tracking-tight" }, "ابدأ رحلتك اليوم"),
                createVNode("p", { class: "text-sm text-zinc-500 mt-1" }, 'انضم إلى مجتمع "كورس" وابدأ في بناء مستقبلك.')
              ]),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"]),
                class: "space-y-4"
              }, [
                createVNode("div", { class: "space-y-2" }, [
                  createVNode(unref(_sfc_main$2), { for: "name" }, {
                    default: withCtx(() => [
                      createTextVNode("الاسم الكامل")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3), {
                    id: "name",
                    type: "text",
                    class: "h-10 border-zinc-200 focus-visible:ring-black",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name",
                    placeholder: "أحمد محمد"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  unref(form).errors.name ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-xs font-bold text-red-600"
                  }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode(unref(_sfc_main$2), { for: "email" }, {
                    default: withCtx(() => [
                      createTextVNode("البريد الإلكتروني")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3), {
                    id: "email",
                    type: "email",
                    class: "h-10 border-zinc-200 focus-visible:ring-black",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autocomplete: "username",
                    placeholder: "name@example.com"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  unref(form).errors.email ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-xs font-bold text-red-600"
                  }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode(unref(_sfc_main$2), { for: "learning_goal" }, {
                    default: withCtx(() => [
                      createTextVNode("ما هو هدفك التعليمي؟ (اختياري)")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3), {
                    id: "learning_goal",
                    type: "text",
                    class: "h-10 border-zinc-200 focus-visible:ring-black",
                    modelValue: unref(form).learning_goal,
                    "onUpdate:modelValue": ($event) => unref(form).learning_goal = $event,
                    placeholder: "مثلاً: تعلم تطوير تطبيقات الموبايل"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("p", { class: "text-[10px] text-zinc-400" }, "نستخدم هذه البيانات لتخصيص المحتوى المناسب لك.")
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode(unref(_sfc_main$2), { for: "password" }, {
                      default: withCtx(() => [
                        createTextVNode("كلمة المرور")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), {
                      id: "password",
                      type: "password",
                      class: "h-10 border-zinc-200 focus-visible:ring-black",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode(unref(_sfc_main$2), { for: "password_confirmation" }, {
                      default: withCtx(() => [
                        createTextVNode("تأكيد الكلمة")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), {
                      id: "password_confirmation",
                      type: "password",
                      class: "h-10 border-zinc-200 focus-visible:ring-black",
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  unref(form).errors.password ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "col-span-2 text-xs font-bold text-red-600"
                  }, toDisplayString(unref(form).errors.password), 1)) : createCommentVNode("", true)
                ]),
                createVNode(unref(_sfc_main$4), {
                  class: ["w-full h-11 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold", { "opacity-25": unref(form).processing }],
                  disabled: unref(form).processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(" إنشاء الحساب ")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"]),
                createVNode("div", { class: "mt-6 text-center text-sm" }, [
                  createVNode("span", { class: "text-zinc-500" }, "لديك حساب بالفعل؟ "),
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "font-bold underline underline-offset-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("سجل دخولك")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
