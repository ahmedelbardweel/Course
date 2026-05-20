import { resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CugrFxsQ.js";
import _sfc_main$4 from "./DeleteUserForm-ycg-BdkO.js";
import _sfc_main$3 from "./UpdatePasswordForm-BkDEiE_U.js";
import _sfc_main$2 from "./UpdateProfileInformationForm-D1RhZpGa.js";
import { Head } from "@inertiajs/vue3";
import { ChevronLeft, User } from "lucide-vue-next";
import "./index-BhZ8Ukd6.js";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "./Input-Bd7d8AJ3.js";
import "@vueuse/core";
import "./Label--EucbuAp.js";
import "radix-vue";
const _sfc_main = {
  __name: "Edit",
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = resolveComponent("Badge");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "الملف الشخصي" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-zinc-50/20 text-[12px]"${_scopeId}><header class="h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm"${_scopeId}><div class="flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight"${_scopeId}><span${_scopeId}>الإعدادات</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(`<span class="text-zinc-900 font-black"${_scopeId}>الملف الشخصي</span></div></header><main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto"${_scopeId}><div class="w-full max-w-4xl mx-auto space-y-6"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-4 gap-6 items-start"${_scopeId}><div class="md:col-span-1 space-y-4 sticky top-6"${_scopeId}><div class="flex flex-col items-center p-6 bg-white border border-zinc-200 rounded-xl shadow-sm"${_scopeId}><div class="h-20 w-20 rounded-full bg-zinc-900 flex items-center justify-center text-white mb-4 shadow-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(User), { class: "h-10 w-10" }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-[13px] font-black text-zinc-900 leading-none"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</h3><p class="text-[10px] text-zinc-400 font-medium mt-1"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.email)}</p><div class="mt-4 pt-4 border-t border-zinc-50 w-full flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Badge, { class: "h-5 text-[9px] font-black uppercase tracking-widest bg-zinc-100 text-zinc-500 border-none" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$page.props.auth.user.role || "طالب")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$page.props.auth.user.role || "طالب"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="md:col-span-3 space-y-6"${_scopeId}><section class="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm space-y-6"${_scopeId}><div class="flex items-center gap-2 border-r-4 border-zinc-900 pr-3 mb-6"${_scopeId}><h2 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight"${_scopeId}>المعلومات الأساسية</h2></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status
            }, null, _parent2, _scopeId));
            _push2(`</section><section class="bg-white p-6 border border-zinc-200 rounded-xl shadow-sm space-y-6"${_scopeId}><div class="flex items-center gap-2 border-r-4 border-amber-500 pr-3 mb-6"${_scopeId}><h2 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight"${_scopeId}>كلمة المرور</h2></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`</section><section class="bg-zinc-50/50 p-6 border border-red-100 rounded-xl space-y-6"${_scopeId}><div class="flex items-center gap-2 border-r-4 border-red-500 pr-3 mb-6"${_scopeId}><h2 class="text-[14px] font-black text-red-600 uppercase tracking-tight"${_scopeId}>منطقة الخطر</h2></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(`</section></div></div></div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-zinc-50/20 text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b bg-white flex items-center justify-between px-4 sticky top-0 z-30 shadow-sm" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-[11px] text-muted-foreground font-medium uppercase tracking-tight" }, [
                    createVNode("span", null, "الإعدادات"),
                    createVNode(unref(ChevronLeft), { class: "h-3 w-3" }),
                    createVNode("span", { class: "text-zinc-900 font-black" }, "الملف الشخصي")
                  ])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right overflow-y-auto" }, [
                  createVNode("div", { class: "w-full max-w-4xl mx-auto space-y-6" }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-6 items-start" }, [
                      createVNode("div", { class: "md:col-span-1 space-y-4 sticky top-6" }, [
                        createVNode("div", { class: "flex flex-col items-center p-6 bg-white border border-zinc-200 rounded-xl shadow-sm" }, [
                          createVNode("div", { class: "h-20 w-20 rounded-full bg-zinc-900 flex items-center justify-center text-white mb-4 shadow-xl" }, [
                            createVNode(unref(User), { class: "h-10 w-10" })
                          ]),
                          createVNode("h3", { class: "text-[13px] font-black text-zinc-900 leading-none" }, toDisplayString(_ctx.$page.props.auth.user.name), 1),
                          createVNode("p", { class: "text-[10px] text-zinc-400 font-medium mt-1" }, toDisplayString(_ctx.$page.props.auth.user.email), 1),
                          createVNode("div", { class: "mt-4 pt-4 border-t border-zinc-50 w-full flex justify-center" }, [
                            createVNode(_component_Badge, { class: "h-5 text-[9px] font-black uppercase tracking-widest bg-zinc-100 text-zinc-500 border-none" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$page.props.auth.user.role || "طالب"), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "md:col-span-3 space-y-6" }, [
                        createVNode("section", { class: "bg-white p-6 border border-zinc-200 rounded-xl shadow-sm space-y-6" }, [
                          createVNode("div", { class: "flex items-center gap-2 border-r-4 border-zinc-900 pr-3 mb-6" }, [
                            createVNode("h2", { class: "text-[14px] font-black text-zinc-900 uppercase tracking-tight" }, "المعلومات الأساسية")
                          ]),
                          createVNode(_sfc_main$2, {
                            "must-verify-email": __props.mustVerifyEmail,
                            status: __props.status
                          }, null, 8, ["must-verify-email", "status"])
                        ]),
                        createVNode("section", { class: "bg-white p-6 border border-zinc-200 rounded-xl shadow-sm space-y-6" }, [
                          createVNode("div", { class: "flex items-center gap-2 border-r-4 border-amber-500 pr-3 mb-6" }, [
                            createVNode("h2", { class: "text-[14px] font-black text-zinc-900 uppercase tracking-tight" }, "كلمة المرور")
                          ]),
                          createVNode(_sfc_main$3)
                        ]),
                        createVNode("section", { class: "bg-zinc-50/50 p-6 border border-red-100 rounded-xl space-y-6" }, [
                          createVNode("div", { class: "flex items-center gap-2 border-r-4 border-red-500 pr-3 mb-6" }, [
                            createVNode("h2", { class: "text-[14px] font-black text-red-600 uppercase tracking-tight" }, "منطقة الخطر")
                          ]),
                          createVNode(_sfc_main$4)
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
