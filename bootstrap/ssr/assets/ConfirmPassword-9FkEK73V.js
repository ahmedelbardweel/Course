import { ref, withCtx, unref, createTextVNode, openBlock, createBlock, createCommentVNode, createVNode, withModifiers, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./GuestLayout-CxsbssJd.js";
import { _ as _sfc_main$4 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$3 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$2 } from "./Label--EucbuAp.js";
import { useForm, Head } from "@inertiajs/vue3";
import { Lock, Eye, EyeOff, AlertCircle, Loader2 } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "radix-vue";
const _sfc_main = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const showPassword = ref(false);
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "تأكيد كلمة المرور - كورس" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-6 text-center sm:text-right"${_scopeId}><h1 class="text-2xl font-semibold tracking-tight text-brand-ink"${_scopeId}>تأكيد الهوية</h1><p class="text-[13px] text-brand-body mt-1.5 leading-relaxed"${_scopeId}> هذه منطقة آمنة من التطبيق. يرجى تأكيد كلمة المرور الخاصة بك للمتابعة. </p></div><form class="space-y-5"${_scopeId}><div class="space-y-2"${_scopeId}>`);
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
              class: "h-11 pr-10 pl-10 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              placeholder: "••••••••",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`<button type="button" class="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-muted"${_scopeId}>`);
            if (showPassword.value) {
              _push2(ssrRenderComponent(unref(Eye), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(EyeOff), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }
            _push2(`</button></div>`);
            if (unref(form).errors.password) {
              _push2(`<div class="text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(AlertCircle), { class: "h-3.5 w-3.5 shrink-0" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(form).errors.password)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              class: ["w-full h-11 bg-brand-orange border border-brand-orange text-white font-semibold rounded-md flex items-center justify-center gap-2", { "opacity-80 cursor-not-allowed": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).processing) {
                    _push3(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span${_scopeId2}>تأكيد كلمة المرور</span>`);
                } else {
                  return [
                    unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                      key: 0,
                      class: "h-4 w-4 animate-spin"
                    })) : createCommentVNode("", true),
                    createVNode("span", null, "تأكيد كلمة المرور")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "تأكيد كلمة المرور - كورس" }),
              createVNode("div", { class: "mb-6 text-center sm:text-right" }, [
                createVNode("h1", { class: "text-2xl font-semibold tracking-tight text-brand-ink" }, "تأكيد الهوية"),
                createVNode("p", { class: "text-[13px] text-brand-body mt-1.5 leading-relaxed" }, " هذه منطقة آمنة من التطبيق. يرجى تأكيد كلمة المرور الخاصة بك للمتابعة. ")
              ]),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"]),
                class: "space-y-5"
              }, [
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
                      class: "h-11 pr-10 pl-10 border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/55 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-md",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      placeholder: "••••••••",
                      autocomplete: "current-password",
                      autofocus: ""
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
                  ]),
                  unref(form).errors.password ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-[11px] font-semibold text-brand-orange bg-white border border-brand-hairline px-3 py-1.5 rounded-md flex items-center gap-1.5 mt-1.5"
                  }, [
                    createVNode(unref(AlertCircle), { class: "h-3.5 w-3.5 shrink-0" }),
                    createTextVNode(" " + toDisplayString(unref(form).errors.password), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode(unref(_sfc_main$4), {
                  class: ["w-full h-11 bg-brand-orange border border-brand-orange text-white font-semibold rounded-md flex items-center justify-center gap-2", { "opacity-80 cursor-not-allowed": unref(form).processing }],
                  disabled: unref(form).processing
                }, {
                  default: withCtx(() => [
                    unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                      key: 0,
                      class: "h-4 w-4 animate-spin"
                    })) : createCommentVNode("", true),
                    createVNode("span", null, "تأكيد كلمة المرور")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
