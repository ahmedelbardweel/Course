import { mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { usePage, useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$2 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$1 } from "./Label--EucbuAp.js";
import { Loader2, Save, Check } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "radix-vue";
const _sfc_main = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><form class="space-y-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-1.5">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        for: "name",
        class: "text-[11px] font-black text-zinc-400 uppercase tracking-widest"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`الاسم الكامل`);
          } else {
            return [
              createTextVNode("الاسم الكامل")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        id: "name",
        type: "text",
        class: "h-8.5 text-[12px] font-medium border-zinc-100 bg-zinc-50/20",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      if (unref(form).errors.name) {
        _push(`<div class="text-[10px] text-red-500 font-bold">${ssrInterpolate(unref(form).errors.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-1.5">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        for: "email",
        class: "text-[11px] font-black text-zinc-400 uppercase tracking-widest"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`البريد الإلكتروني`);
          } else {
            return [
              createTextVNode("البريد الإلكتروني")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        id: "email",
        type: "email",
        class: "h-8.5 text-[12px] font-medium border-zinc-100 bg-zinc-50/20",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      if (unref(form).errors.email) {
        _push(`<div class="text-[10px] text-red-500 font-bold">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
        _push(`<div><div class="p-3 rounded-lg border border-amber-100 bg-amber-50/50 flex items-center justify-between"><p class="text-[11px] text-amber-700 font-medium"> بريدك الإلكتروني غير مفعل حالياً. </p>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "text-[10px] font-black uppercase tracking-widest text-amber-900 underline hover:no-underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` إعادة إرسال رابط التفعيل `);
            } else {
              return [
                createTextVNode(" إعادة إرسال رابط التفعيل ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mt-2 text-[10px] font-black text-emerald-600 uppercase tracking-tight" style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}"> تم إرسال رابط تفعيل جديد إلى بريدك الإلكتروني. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4 pt-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$3), {
        disabled: unref(form).processing,
        size: "sm",
        class: "h-8 text-[11px] font-black px-8 rounded-full shadow-lg shadow-zinc-900/20 transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(form).processing) {
              _push2(ssrRenderComponent(unref(Loader2), { class: "ml-1.5 h-3 w-3 animate-spin" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(Save), { class: "ml-1.5 h-3 w-3 opacity-60" }, null, _parent2, _scopeId));
            }
            _push2(` حفظ التغييرات `);
          } else {
            return [
              unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                key: 0,
                class: "ml-1.5 h-3 w-3 animate-spin"
              })) : (openBlock(), createBlock(unref(Save), {
                key: 1,
                class: "ml-1.5 h-3 w-3 opacity-60"
              })),
              createTextVNode(" حفظ التغييرات ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<div class="flex items-center gap-1.5 text-emerald-600"><div class="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Check), { class: "h-3 w-3" }, null, _parent));
        _push(`</div><span class="text-[10px] font-black uppercase tracking-widest">تم الحفظ بنجاح</span></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
