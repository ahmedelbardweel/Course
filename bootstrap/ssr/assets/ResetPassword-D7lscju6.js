import { ref, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, withModifiers, withDirectives, vModelText, vModelDynamic, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./GuestLayout-CiwyTLdo.js";
import { useForm, Head } from "@inertiajs/vue3";
import { KeyRound, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-vue-next";
const _sfc_main = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const showPassword = ref(false);
    const showPasswordConfirm = ref(false);
    const submit = () => {
      form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "إعادة تعيين كلمة المرور" }, null, _parent2, _scopeId));
            _push2(`<div class="text-center mb-6"${_scopeId}><div class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 border border-zinc-200 mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(KeyRound), { class: "h-5 w-5 text-zinc-900" }, null, _parent2, _scopeId));
            _push2(`</div><h1 class="text-lg font-black tracking-tight text-zinc-900"${_scopeId}>إعادة تعيين كلمة المرور</h1><p class="mt-1 text-zinc-500 text-[11px] leading-relaxed"${_scopeId}> أدخل كلمة المرور الجديدة أدناه لتأمين حسابك واستعادة الوصول الكامل. </p></div>`);
            if (Object.keys(unref(form).errors).length > 0) {
              _push2(`<div class="mb-5 p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 text-[11px] leading-relaxed space-y-1"${_scopeId}><!--[-->`);
              ssrRenderList(unref(form).errors, (error, key) => {
                _push2(`<div class="flex items-start gap-1.5"${_scopeId}><span class="text-zinc-900 mt-0.5"${_scopeId}>•</span><span${_scopeId}>${ssrInterpolate(error)}</span></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form class="space-y-4"${_scopeId}><div class="space-y-1.5"${_scopeId}><label for="email" class="text-xs font-bold text-zinc-700"${_scopeId}>البريد الإلكتروني</label><div class="relative"${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
            _push2(`</span><input id="email" type="email"${ssrRenderAttr("value", unref(form).email)} required autocomplete="username" readonly class="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2 pr-9 pl-3 text-xs text-zinc-500 outline-none cursor-not-allowed"${_scopeId}></div></div><div class="space-y-1.5"${_scopeId}><label for="password" class="text-xs font-bold text-zinc-700"${_scopeId}>كلمة المرور الجديدة</label><div class="relative"${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Lock), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
            _push2(`</span><input id="password"${ssrRenderAttr("type", showPassword.value ? "text" : "password")}${ssrRenderDynamicModel(showPassword.value ? "text" : "password", unref(form).password, null)} required autocomplete="new-password" class="w-full bg-white border border-zinc-200 rounded-lg py-2 pr-9 pl-10 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all" placeholder="••••••••"${_scopeId}><button type="button" class="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 hover:text-zinc-900 transition-colors"${_scopeId}>`);
            if (!showPassword.value) {
              _push2(ssrRenderComponent(unref(Eye), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(EyeOff), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
            }
            _push2(`</button></div></div><div class="space-y-1.5"${_scopeId}><label for="password_confirmation" class="text-xs font-bold text-zinc-700"${_scopeId}>تأكيد كلمة المرور الجديدة</label><div class="relative"${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Lock), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
            _push2(`</span><input id="password_confirmation"${ssrRenderAttr("type", showPasswordConfirm.value ? "text" : "password")}${ssrRenderDynamicModel(showPasswordConfirm.value ? "text" : "password", unref(form).password_confirmation, null)} required autocomplete="new-password" class="w-full bg-white border border-zinc-200 rounded-lg py-2 pr-9 pl-10 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all" placeholder="••••••••"${_scopeId}><button type="button" class="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 hover:text-zinc-900 transition-colors"${_scopeId}>`);
            if (!showPasswordConfirm.value) {
              _push2(ssrRenderComponent(unref(Eye), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(EyeOff), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
            }
            _push2(`</button></div></div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-50 disabled:pointer-events-none rounded-lg h-9 px-4 text-xs font-bold transition-all"${_scopeId}>`);
            if (unref(form).processing) {
              _push2(ssrRenderComponent(unref(Loader2), { class: "h-3.5 w-3.5 animate-spin" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span${_scopeId}>إعادة تعيين كلمة المرور</span></button></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "إعادة تعيين كلمة المرور" }),
              createVNode("div", { class: "text-center mb-6" }, [
                createVNode("div", { class: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 border border-zinc-200 mb-3" }, [
                  createVNode(unref(KeyRound), { class: "h-5 w-5 text-zinc-900" })
                ]),
                createVNode("h1", { class: "text-lg font-black tracking-tight text-zinc-900" }, "إعادة تعيين كلمة المرور"),
                createVNode("p", { class: "mt-1 text-zinc-500 text-[11px] leading-relaxed" }, " أدخل كلمة المرور الجديدة أدناه لتأمين حسابك واستعادة الوصول الكامل. ")
              ]),
              Object.keys(unref(form).errors).length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-5 p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900 text-[11px] leading-relaxed space-y-1"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).errors, (error, key) => {
                  return openBlock(), createBlock("div", {
                    key,
                    class: "flex items-start gap-1.5"
                  }, [
                    createVNode("span", { class: "text-zinc-900 mt-0.5" }, "•"),
                    createVNode("span", null, toDisplayString(error), 1)
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"]),
                class: "space-y-4"
              }, [
                createVNode("div", { class: "space-y-1.5" }, [
                  createVNode("label", {
                    for: "email",
                    class: "text-xs font-bold text-zinc-700"
                  }, "البريد الإلكتروني"),
                  createVNode("div", { class: "relative" }, [
                    createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400" }, [
                      createVNode(unref(Mail), { class: "h-3.5 w-3.5" })
                    ]),
                    withDirectives(createVNode("input", {
                      id: "email",
                      type: "email",
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      required: "",
                      autocomplete: "username",
                      readonly: "",
                      class: "w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2 pr-9 pl-3 text-xs text-zinc-500 outline-none cursor-not-allowed"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).email]
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-1.5" }, [
                  createVNode("label", {
                    for: "password",
                    class: "text-xs font-bold text-zinc-700"
                  }, "كلمة المرور الجديدة"),
                  createVNode("div", { class: "relative" }, [
                    createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400" }, [
                      createVNode(unref(Lock), { class: "h-3.5 w-3.5" })
                    ]),
                    withDirectives(createVNode("input", {
                      id: "password",
                      type: showPassword.value ? "text" : "password",
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autocomplete: "new-password",
                      class: "w-full bg-white border border-zinc-200 rounded-lg py-2 pr-9 pl-10 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all",
                      placeholder: "••••••••"
                    }, null, 8, ["type", "onUpdate:modelValue"]), [
                      [vModelDynamic, unref(form).password]
                    ]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => showPassword.value = !showPassword.value,
                      class: "absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 hover:text-zinc-900 transition-colors"
                    }, [
                      !showPassword.value ? (openBlock(), createBlock(unref(Eye), {
                        key: 0,
                        class: "h-3.5 w-3.5"
                      })) : (openBlock(), createBlock(unref(EyeOff), {
                        key: 1,
                        class: "h-3.5 w-3.5"
                      }))
                    ], 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "space-y-1.5" }, [
                  createVNode("label", {
                    for: "password_confirmation",
                    class: "text-xs font-bold text-zinc-700"
                  }, "تأكيد كلمة المرور الجديدة"),
                  createVNode("div", { class: "relative" }, [
                    createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400" }, [
                      createVNode(unref(Lock), { class: "h-3.5 w-3.5" })
                    ]),
                    withDirectives(createVNode("input", {
                      id: "password_confirmation",
                      type: showPasswordConfirm.value ? "text" : "password",
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      required: "",
                      autocomplete: "new-password",
                      class: "w-full bg-white border border-zinc-200 rounded-lg py-2 pr-9 pl-10 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none transition-all",
                      placeholder: "••••••••"
                    }, null, 8, ["type", "onUpdate:modelValue"]), [
                      [vModelDynamic, unref(form).password_confirmation]
                    ]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => showPasswordConfirm.value = !showPasswordConfirm.value,
                      class: "absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 hover:text-zinc-900 transition-colors"
                    }, [
                      !showPasswordConfirm.value ? (openBlock(), createBlock(unref(Eye), {
                        key: 0,
                        class: "h-3.5 w-3.5"
                      })) : (openBlock(), createBlock(unref(EyeOff), {
                        key: 1,
                        class: "h-3.5 w-3.5"
                      }))
                    ], 8, ["onClick"])
                  ])
                ]),
                createVNode("button", {
                  type: "submit",
                  disabled: unref(form).processing,
                  class: "w-full flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-50 disabled:pointer-events-none rounded-lg h-9 px-4 text-xs font-bold transition-all"
                }, [
                  unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                    key: 0,
                    class: "h-3.5 w-3.5 animate-spin"
                  })) : createCommentVNode("", true),
                  createVNode("span", null, "إعادة تعيين كلمة المرور")
                ], 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
