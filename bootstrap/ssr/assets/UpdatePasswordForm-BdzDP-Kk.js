import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$2 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$1 } from "./Label--EucbuAp.js";
import { Lock, ShieldCheck, Loader2, Check } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "radix-vue";
const _sfc_main = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><form class="space-y-4"><div class="space-y-4"><div class="space-y-1.5">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        for: "current_password",
        class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Lock), { class: "h-3 w-3 opacity-40" }, null, _parent2, _scopeId));
            _push2(` كلمة المرور الحالية `);
          } else {
            return [
              createVNode(unref(Lock), { class: "h-3 w-3 opacity-40" }),
              createTextVNode(" كلمة المرور الحالية ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "h-8.5 text-[12px] font-normal border-[var(--border)] bg-[var(--background)] rounded-md focus:ring-1 focus:ring-[var(--primary)]",
        autocomplete: "current-password"
      }, null, _parent));
      if (unref(form).errors.current_password) {
        _push(`<div class="text-[10px] text-[var(--destructive)] font-normal">${ssrInterpolate(unref(form).errors.current_password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-1.5">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        for: "password",
        class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest flex items-center gap-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ShieldCheck), { class: "h-3 w-3 opacity-40" }, null, _parent2, _scopeId));
            _push2(` كلمة المرور الجديدة `);
          } else {
            return [
              createVNode(unref(ShieldCheck), { class: "h-3 w-3 opacity-40" }),
              createTextVNode(" كلمة المرور الجديدة ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "h-8.5 text-[12px] font-normal border-[var(--border)] bg-[var(--background)] rounded-md focus:ring-1 focus:ring-[var(--primary)]",
        autocomplete: "new-password"
      }, null, _parent));
      if (unref(form).errors.password) {
        _push(`<div class="text-[10px] text-[var(--destructive)] font-normal">${ssrInterpolate(unref(form).errors.password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-1.5">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        for: "password_confirmation",
        class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`تأكيد كلمة المرور`);
          } else {
            return [
              createTextVNode("تأكيد كلمة المرور")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "h-8.5 text-[12px] font-normal border-[var(--border)] bg-[var(--background)] rounded-md focus:ring-1 focus:ring-[var(--primary)]",
        autocomplete: "new-password"
      }, null, _parent));
      if (unref(form).errors.password_confirmation) {
        _push(`<div class="text-[10px] text-[var(--destructive)] font-normal">${ssrInterpolate(unref(form).errors.password_confirmation)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="flex items-center gap-4 pt-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        disabled: unref(form).processing,
        size: "sm",
        class: "h-8 text-[11px] font-normal px-4 rounded-md border border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)] shadow-none hover:none transition-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(form).processing) {
              _push2(ssrRenderComponent(unref(Loader2), { class: "ml-1.5 h-3 w-3 animate-spin" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(ShieldCheck), { class: "ml-1.5 h-3.5 w-3.5 opacity-60" }, null, _parent2, _scopeId));
            }
            _push2(` تحديث كلمة المرور `);
          } else {
            return [
              unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                key: 0,
                class: "ml-1.5 h-3 w-3 animate-spin"
              })) : (openBlock(), createBlock(unref(ShieldCheck), {
                key: 1,
                class: "ml-1.5 h-3.5 w-3.5 opacity-60"
              })),
              createTextVNode(" تحديث كلمة المرور ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<div class="flex items-center gap-1.5 text-emerald-700">`);
        _push(ssrRenderComponent(unref(Check), { class: "h-3.5 w-3.5" }, null, _parent));
        _push(`<span class="text-[10px] font-normal uppercase tracking-widest">تم التحديث بنجاح</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
