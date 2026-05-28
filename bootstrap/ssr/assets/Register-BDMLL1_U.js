import { ref, withCtx, unref, createTextVNode, openBlock, createBlock, createCommentVNode, createVNode, withModifiers, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./GuestLayout-CxsbssJd.js";
import { _ as _sfc_main$4 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$3 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$2 } from "./Label--EucbuAp.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { User, AlertCircle, Mail, Sparkles, Lock, Eye, EyeOff, Loader2 } from "lucide-vue-next";
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
    const showPassword = ref(false);
    const showPasswordConfirm = ref(false);
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "إنشاء حساب جديد - كورس" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-8 text-center sm:text-right"${_scopeId}><h1 class="text-2xl font-semibold tracking-tight text-brand-ink"${_scopeId}>ابدأ رحلتك اليوم</h1><p class="text-[13px] text-brand-body mt-1.5 leading-relaxed"${_scopeId}>انضم إلى مجتمع &quot;كورس&quot; الرائد وابدأ في بناء مستقبلك التعليمي والمهني.</p></div><form class="space-y-5"${_scopeId}><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              for: "name",
              class: "text-brand-ink font-semibold text-[11px] uppercase tracking-wider"
            }, {
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
            _push2(`<div class="relative group"${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(User), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "name",
              type: "text",
              class: "h-11 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name",
              placeholder: "أحمد محمد"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(form).errors.name) {
              _push2(`<div class="text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(AlertCircle), { class: "h-3.5 w-3.5 shrink-0" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(form).errors.name)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              for: "email",
              class: "text-brand-ink font-semibold text-[11px] uppercase tracking-wider"
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
              class: "h-11 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
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
            _push2(`</div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              for: "learning_goal",
              class: "text-brand-ink font-semibold text-[11px] uppercase tracking-wider"
            }, {
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
            _push2(`<div class="relative group"${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Sparkles), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "learning_goal",
              type: "text",
              class: "h-11 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md",
              modelValue: unref(form).learning_goal,
              "onUpdate:modelValue": ($event) => unref(form).learning_goal = $event,
              placeholder: "مثلاً: تعلم تطوير واجهات الويب"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="text-[10px] text-brand-muted pr-1.5 leading-relaxed"${_scopeId}>نستخدم هذه البيانات لبناء مسارات تعلم تفاعلية ومخصصة لك.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              for: "password",
              class: "text-brand-ink font-semibold text-[11px] uppercase tracking-wider"
            }, {
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
            _push2(`<div class="relative group"${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Lock), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "password",
              type: showPassword.value ? "text" : "password",
              class: "h-11 pr-10 pl-10 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md text-left",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              placeholder: "••••••••",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`<button type="button" class="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-muted"${_scopeId}>`);
            if (showPassword.value) {
              _push2(ssrRenderComponent(unref(Eye), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(EyeOff), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }
            _push2(`</button></div></div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              for: "password_confirmation",
              class: "text-brand-ink font-semibold text-[11px] uppercase tracking-wider"
            }, {
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
            _push2(`<div class="relative group"${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Lock), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              id: "password_confirmation",
              type: showPasswordConfirm.value ? "text" : "password",
              class: "h-11 pr-10 pl-10 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md text-left",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              placeholder: "••••••••",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`<button type="button" class="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-muted"${_scopeId}>`);
            if (showPasswordConfirm.value) {
              _push2(ssrRenderComponent(unref(Eye), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(EyeOff), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }
            _push2(`</button></div></div>`);
            if (unref(form).errors.password) {
              _push2(`<div class="col-span-1 sm:col-span-2 text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(AlertCircle), { class: "h-3.5 w-3.5 shrink-0" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(form).errors.password)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              class: ["w-full h-11 bg-brand-orange border border-brand-orange text-white font-semibold rounded-md flex items-center justify-center gap-2 mt-2", { "opacity-80 cursor-not-allowed": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).processing) {
                    _push3(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span${_scopeId2}>إنشاء الحساب</span>`);
                } else {
                  return [
                    unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                      key: 0,
                      class: "h-4 w-4 animate-spin"
                    })) : createCommentVNode("", true),
                    createVNode("span", null, "إنشاء الحساب")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 text-center text-[12px]"${_scopeId}><span class="text-brand-body"${_scopeId}>لديك حساب بالفعل؟ </span>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "font-semibold text-brand-ink hover:underline underline-offset-4"
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
              createVNode(unref(Head), { title: "إنشاء حساب جديد - كورس" }),
              createVNode("div", { class: "mb-8 text-center sm:text-right" }, [
                createVNode("h1", { class: "text-2xl font-semibold tracking-tight text-brand-ink" }, "ابدأ رحلتك اليوم"),
                createVNode("p", { class: "text-[13px] text-brand-body mt-1.5 leading-relaxed" }, 'انضم إلى مجتمع "كورس" الرائد وابدأ في بناء مستقبلك التعليمي والمهني.')
              ]),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"]),
                class: "space-y-5"
              }, [
                createVNode("div", { class: "space-y-2" }, [
                  createVNode(unref(_sfc_main$2), {
                    for: "name",
                    class: "text-brand-ink font-semibold text-[11px] uppercase tracking-wider"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("الاسم الكامل")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "relative group" }, [
                    createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted" }, [
                      createVNode(unref(User), { class: "h-4 w-4" })
                    ]),
                    createVNode(unref(_sfc_main$3), {
                      id: "name",
                      type: "text",
                      class: "h-11 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md",
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "name",
                      placeholder: "أحمد محمد"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  unref(form).errors.name ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5"
                  }, [
                    createVNode(unref(AlertCircle), { class: "h-3.5 w-3.5 shrink-0" }),
                    createTextVNode(" " + toDisplayString(unref(form).errors.name), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode(unref(_sfc_main$2), {
                    for: "email",
                    class: "text-brand-ink font-semibold text-[11px] uppercase tracking-wider"
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
                      class: "h-11 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      required: "",
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
                createVNode("div", { class: "space-y-2" }, [
                  createVNode(unref(_sfc_main$2), {
                    for: "learning_goal",
                    class: "text-brand-ink font-semibold text-[11px] uppercase tracking-wider"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("ما هو هدفك التعليمي؟ (اختياري)")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "relative group" }, [
                    createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted" }, [
                      createVNode(unref(Sparkles), { class: "h-4 w-4" })
                    ]),
                    createVNode(unref(_sfc_main$3), {
                      id: "learning_goal",
                      type: "text",
                      class: "h-11 pr-10 pl-4 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md",
                      modelValue: unref(form).learning_goal,
                      "onUpdate:modelValue": ($event) => unref(form).learning_goal = $event,
                      placeholder: "مثلاً: تعلم تطوير واجهات الويب"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("p", { class: "text-[10px] text-brand-muted pr-1.5 leading-relaxed" }, "نستخدم هذه البيانات لبناء مسارات تعلم تفاعلية ومخصصة لك.")
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode(unref(_sfc_main$2), {
                      for: "password",
                      class: "text-brand-ink font-semibold text-[11px] uppercase tracking-wider"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("كلمة المرور")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative group" }, [
                      createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted" }, [
                        createVNode(unref(Lock), { class: "h-4 w-4" })
                      ]),
                      createVNode(unref(_sfc_main$3), {
                        id: "password",
                        type: showPassword.value ? "text" : "password",
                        class: "h-11 pr-10 pl-10 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md text-left",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        required: "",
                        placeholder: "••••••••",
                        autocomplete: "new-password"
                      }, null, 8, ["type", "modelValue", "onUpdate:modelValue"]),
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => showPassword.value = !showPassword.value,
                        class: "absolute inset-y-0 left-0 flex items-center pl-3 text-brand-muted"
                      }, [
                        showPassword.value ? (openBlock(), createBlock(unref(Eye), {
                          key: 0,
                          class: "h-4 w-4"
                        })) : (openBlock(), createBlock(unref(EyeOff), {
                          key: 1,
                          class: "h-4 w-4"
                        }))
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode(unref(_sfc_main$2), {
                      for: "password_confirmation",
                      class: "text-brand-ink font-semibold text-[11px] uppercase tracking-wider"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("تأكيد الكلمة")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "relative group" }, [
                      createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brand-muted" }, [
                        createVNode(unref(Lock), { class: "h-4 w-4" })
                      ]),
                      createVNode(unref(_sfc_main$3), {
                        id: "password_confirmation",
                        type: showPasswordConfirm.value ? "text" : "password",
                        class: "h-11 pr-10 pl-10 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md text-left",
                        modelValue: unref(form).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        required: "",
                        placeholder: "••••••••",
                        autocomplete: "new-password"
                      }, null, 8, ["type", "modelValue", "onUpdate:modelValue"]),
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => showPasswordConfirm.value = !showPasswordConfirm.value,
                        class: "absolute inset-y-0 left-0 flex items-center pl-3 text-brand-muted"
                      }, [
                        showPasswordConfirm.value ? (openBlock(), createBlock(unref(Eye), {
                          key: 0,
                          class: "h-4 w-4"
                        })) : (openBlock(), createBlock(unref(EyeOff), {
                          key: 1,
                          class: "h-4 w-4"
                        }))
                      ], 8, ["onClick"])
                    ])
                  ]),
                  unref(form).errors.password ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "col-span-1 sm:col-span-2 text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1"
                  }, [
                    createVNode(unref(AlertCircle), { class: "h-3.5 w-3.5 shrink-0" }),
                    createTextVNode(" " + toDisplayString(unref(form).errors.password), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode(unref(_sfc_main$4), {
                  class: ["w-full h-11 bg-brand-orange border border-brand-orange text-white font-semibold rounded-md flex items-center justify-center gap-2 mt-2", { "opacity-80 cursor-not-allowed": unref(form).processing }],
                  disabled: unref(form).processing
                }, {
                  default: withCtx(() => [
                    unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                      key: 0,
                      class: "h-4 w-4 animate-spin"
                    })) : createCommentVNode("", true),
                    createVNode("span", null, "إنشاء الحساب")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"]),
                createVNode("div", { class: "mt-6 text-center text-[12px]" }, [
                  createVNode("span", { class: "text-brand-body" }, "لديك حساب بالفعل؟ "),
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "font-semibold text-brand-ink hover:underline underline-offset-4"
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
