import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { Zap } from "lucide-vue-next";
const _sfc_main = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col items-center justify-center bg-white selection:bg-zinc-900 selection:text-white px-4 relative overflow-hidden text-[12px] animate-in fade-in duration-700 ease-out" }, _attrs))}><div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-50/50 rounded-full blur-[100px] opacity-40 pointer-events-none"></div><div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-50/50 rounded-full blur-[100px] opacity-40 pointer-events-none"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none select-none">`);
      _push(ssrRenderComponent(unref(Zap), { class: "h-[500px] w-[500px] text-zinc-900" }, null, _parent));
      _push(`</div><div class="relative z-10 w-full flex flex-col items-center"><div class="mb-8">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "flex flex-col items-center gap-2 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-10 w-10 bg-zinc-950 rounded-md flex items-center justify-center text-white border border-zinc-950 transition-colors duration-300"${_scopeId}><span class="text-xl font-black italic"${_scopeId}>C</span></div><span class="text-sm font-extrabold tracking-tight text-zinc-950 uppercase"${_scopeId}>كورس</span>`);
          } else {
            return [
              createVNode("div", { class: "h-10 w-10 bg-zinc-950 rounded-md flex items-center justify-center text-white border border-zinc-950 transition-colors duration-300" }, [
                createVNode("span", { class: "text-xl font-black italic" }, "C")
              ]),
              createVNode("span", { class: "text-sm font-extrabold tracking-tight text-zinc-950 uppercase" }, "كورس")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full sm:max-w-[400px] bg-white border border-zinc-200 p-6 sm:p-8 rounded-lg shadow-sm transition-all duration-300">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="mt-8 flex flex-col items-center gap-3"><div class="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-zinc-900 transition-colors"
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
      _push(`<div class="h-1 w-1 bg-zinc-200 rounded-full"></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-zinc-900 transition-colors"
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
      _push(`<div class="h-1 w-1 bg-zinc-200 rounded-full"></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-zinc-900 transition-colors"
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
      _push(`</div><div class="text-[9px] text-zinc-400 uppercase tracking-[0.2em] font-black"> © 2024 كورس. المستقبل يبدأ هنا. </div></div></div></div>`);
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
