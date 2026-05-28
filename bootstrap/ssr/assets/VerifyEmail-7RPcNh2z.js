import { computed, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./GuestLayout-CxsbssJd.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { Mail, CheckCircle2, AlertCircle, Loader2, LogOut } from "lucide-vue-next";
const _sfc_main = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(
      () => props.status === "verification-link-sent"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "تأكيد البريد الإلكتروني" }, null, _parent2, _scopeId));
            _push2(`<div class="text-center mb-6 flex flex-col items-center"${_scopeId}><div class="inline-flex h-12 w-12 items-center justify-center rounded bg-brand-surface-strong border border-brand-hairline mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Mail), { class: "h-5 w-5 text-brand-orange" }, null, _parent2, _scopeId));
            _push2(`</div><h1 class="text-lg font-semibold tracking-tight text-brand-ink"${_scopeId}>تأكيد البريد الإلكتروني</h1><p class="mt-1 text-brand-body text-[11px] leading-relaxed"${_scopeId}> شكراً لتسجيلك! قبل البدء، يرجى تأكيد حسابك بالضغط على الرابط الذي أرسلناه للتو إلى بريدك الإلكتروني. </p></div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-6 p-3 rounded-md bg-white border border-brand-hairline flex items-start gap-2.5 text-brand-ink text-[11px] leading-relaxed animate-in fade-in duration-300"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(CheckCircle2), { class: "h-4 w-4 text-brand-orange shrink-0 mt-0.5" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>تم إرسال رابط تأكيد جديد إلى البريد الإلكتروني الذي قدمته أثناء التسجيل.</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.errors.error) {
              _push2(`<div class="mb-6 p-3 rounded-md bg-white border border-brand-hairline flex items-start gap-2.5 text-brand-orange text-[11px] leading-relaxed animate-in fade-in duration-300"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(AlertCircle), { class: "h-4 w-4 text-brand-orange shrink-0 mt-0.5" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.error)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form class="space-y-4"${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full flex items-center justify-center gap-2 bg-brand-orange border border-brand-orange text-white disabled:opacity-50 rounded-md h-9 px-4 text-xs font-semibold"${_scopeId}>`);
            if (unref(form).processing) {
              _push2(ssrRenderComponent(unref(Loader2), { class: "h-3.5 w-3.5 animate-spin" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span${_scopeId}>إعادة إرسال رابط التأكيد</span></button><div class="flex items-center justify-center pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "inline-flex items-center gap-1.5 text-brand-muted text-xs font-semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(LogOut), { class: "h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>تسجيل الخروج</span>`);
                } else {
                  return [
                    createVNode(unref(LogOut), { class: "h-3.5 w-3.5" }),
                    createVNode("span", null, "تسجيل الخروج")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "تأكيد البريد الإلكتروني" }),
              createVNode("div", { class: "text-center mb-6 flex flex-col items-center" }, [
                createVNode("div", { class: "inline-flex h-12 w-12 items-center justify-center rounded bg-brand-surface-strong border border-brand-hairline mb-3" }, [
                  createVNode(unref(Mail), { class: "h-5 w-5 text-brand-orange" })
                ]),
                createVNode("h1", { class: "text-lg font-semibold tracking-tight text-brand-ink" }, "تأكيد البريد الإلكتروني"),
                createVNode("p", { class: "mt-1 text-brand-body text-[11px] leading-relaxed" }, " شكراً لتسجيلك! قبل البدء، يرجى تأكيد حسابك بالضغط على الرابط الذي أرسلناه للتو إلى بريدك الإلكتروني. ")
              ]),
              verificationLinkSent.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-6 p-3 rounded-md bg-white border border-brand-hairline flex items-start gap-2.5 text-brand-ink text-[11px] leading-relaxed animate-in fade-in duration-300"
              }, [
                createVNode(unref(CheckCircle2), { class: "h-4 w-4 text-brand-orange shrink-0 mt-0.5" }),
                createVNode("span", null, "تم إرسال رابط تأكيد جديد إلى البريد الإلكتروني الذي قدمته أثناء التسجيل.")
              ])) : createCommentVNode("", true),
              _ctx.$page.props.errors.error ? (openBlock(), createBlock("div", {
                key: 1,
                class: "mb-6 p-3 rounded-md bg-white border border-brand-hairline flex items-start gap-2.5 text-brand-orange text-[11px] leading-relaxed animate-in fade-in duration-300"
              }, [
                createVNode(unref(AlertCircle), { class: "h-4 w-4 text-brand-orange shrink-0 mt-0.5" }),
                createVNode("span", null, toDisplayString(_ctx.$page.props.errors.error), 1)
              ])) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"]),
                class: "space-y-4"
              }, [
                createVNode("button", {
                  type: "submit",
                  disabled: unref(form).processing,
                  class: "w-full flex items-center justify-center gap-2 bg-brand-orange border border-brand-orange text-white disabled:opacity-50 rounded-md h-9 px-4 text-xs font-semibold"
                }, [
                  unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                    key: 0,
                    class: "h-3.5 w-3.5 animate-spin"
                  })) : createCommentVNode("", true),
                  createVNode("span", null, "إعادة إرسال رابط التأكيد")
                ], 8, ["disabled"]),
                createVNode("div", { class: "flex items-center justify-center pt-2" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("logout"),
                    method: "post",
                    as: "button",
                    class: "inline-flex items-center gap-1.5 text-brand-muted text-xs font-semibold"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(LogOut), { class: "h-3.5 w-3.5" }),
                      createVNode("span", null, "تسجيل الخروج")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
