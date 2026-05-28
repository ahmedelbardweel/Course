import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col items-center justify-center bg-background selection:bg-brand-orange selection:text-white px-4 relative overflow-hidden text-[12px] animate-in fade-in duration-700 ease-out" }, _attrs))}><div class="relative z-10 w-full flex flex-col items-center"><div class="mb-8">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "flex flex-col items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-10 w-10 bg-brand-orange rounded-md flex items-center justify-center text-white border border-brand-orange"${_scopeId}><span class="text-xl font-normal italic"${_scopeId}>C</span></div><span class="text-sm font-semibold tracking-tight text-brand-ink uppercase"${_scopeId}>كورس</span>`);
          } else {
            return [
              createVNode("div", { class: "h-10 w-10 bg-brand-orange rounded-md flex items-center justify-center text-white border border-brand-orange" }, [
                createVNode("span", { class: "text-xl font-normal italic" }, "C")
              ]),
              createVNode("span", { class: "text-sm font-semibold tracking-tight text-brand-ink uppercase" }, "كورس")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full sm:max-w-[400px] bg-white border border-brand-hairline p-6 sm:p-8 rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="mt-8 flex flex-col items-center gap-3"><div class="flex items-center gap-3 text-[10px] uppercase tracking-widest text-brand-muted">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "text-brand-body"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`الشروط`);
          } else {
            return [
              createTextVNode("الشروط")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="h-1 w-1 bg-brand-hairline rounded-full"></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "text-brand-body"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`الخصوصية`);
          } else {
            return [
              createTextVNode("الخصوصية")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="h-1 w-1 bg-brand-hairline rounded-full"></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "text-brand-body"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`الدعم`);
          } else {
            return [
              createTextVNode("الدعم")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-[9px] text-brand-muted uppercase tracking-[0.2em] font-medium"> © 2024 كورس. المستقبل يبدأ هنا. </div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
