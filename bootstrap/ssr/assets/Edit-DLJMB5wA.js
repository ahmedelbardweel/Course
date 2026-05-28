import { resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-6ZLbM_vi.js";
import _sfc_main$4 from "./DeleteUserForm-CzMX5ZYo.js";
import _sfc_main$3 from "./UpdatePasswordForm-BdzDP-Kk.js";
import _sfc_main$2 from "./UpdateProfileInformationForm-Cf_PNPW5.js";
import { Head } from "@inertiajs/vue3";
import { User } from "lucide-vue-next";
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
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "الرئيسية", url: _ctx.route("dashboard") },
          { label: "الإعدادات" },
          { label: "الملف الشخصي" }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]"${_scopeId}><main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto"${_scopeId}><div class="w-full max-w-4xl mx-auto space-y-6"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-4 gap-6 items-start"${_scopeId}><div class="md:col-span-1 space-y-4 sticky top-6"${_scopeId}><div class="flex flex-col items-center p-6 bg-[var(--card)] border border-[var(--border)] rounded-md shadow-none"${_scopeId}><div class="h-20 w-20 rounded-full bg-[var(--foreground)] flex items-center justify-center text-[var(--background)] mb-4 shadow-none"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(User), { class: "h-10 w-10" }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-[13px] font-normal text-[var(--foreground)] leading-none"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</h3><p class="text-[10px] text-[var(--muted-foreground)] font-normal mt-1"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.email)}</p><div class="mt-4 pt-4 border-t border-[var(--border)] w-full flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Badge, { class: "h-5 text-[9px] font-normal uppercase tracking-widest bg-[var(--accent)] text-[var(--muted-foreground)] border-none" }, {
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
            _push2(`</div></div></div><div class="md:col-span-3 space-y-6"${_scopeId}><section class="bg-[var(--card)] p-6 border border-[var(--border)] rounded-md shadow-none space-y-6"${_scopeId}><div class="flex items-center gap-2 border-r border-[var(--border)] pr-3 mb-6"${_scopeId}><h2 class="text-[14px] font-normal text-[var(--foreground)] uppercase tracking-tight"${_scopeId}>المعلومات الأساسية</h2></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status
            }, null, _parent2, _scopeId));
            _push2(`</section><section class="bg-[var(--card)] p-6 border border-[var(--border)] rounded-md shadow-none space-y-6"${_scopeId}><div class="flex items-center gap-2 border-r border-[var(--border)] pr-3 mb-6"${_scopeId}><h2 class="text-[14px] font-normal text-[var(--foreground)] uppercase tracking-tight"${_scopeId}>كلمة المرور</h2></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`</section><section class="bg-[var(--card)] p-6 border border-[var(--destructive)] rounded-md space-y-6"${_scopeId}><div class="flex items-center gap-2 border-r border-[var(--destructive)] pr-3 mb-6"${_scopeId}><h2 class="text-[14px] font-normal text-[var(--destructive)] uppercase tracking-tight"${_scopeId}>منطقة الخطر</h2></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(`</section></div></div></div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-[var(--background)] text-[12px]" }, [
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right overflow-y-auto" }, [
                  createVNode("div", { class: "w-full max-w-4xl mx-auto space-y-6" }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-6 items-start" }, [
                      createVNode("div", { class: "md:col-span-1 space-y-4 sticky top-6" }, [
                        createVNode("div", { class: "flex flex-col items-center p-6 bg-[var(--card)] border border-[var(--border)] rounded-md shadow-none" }, [
                          createVNode("div", { class: "h-20 w-20 rounded-full bg-[var(--foreground)] flex items-center justify-center text-[var(--background)] mb-4 shadow-none" }, [
                            createVNode(unref(User), { class: "h-10 w-10" })
                          ]),
                          createVNode("h3", { class: "text-[13px] font-normal text-[var(--foreground)] leading-none" }, toDisplayString(_ctx.$page.props.auth.user.name), 1),
                          createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)] font-normal mt-1" }, toDisplayString(_ctx.$page.props.auth.user.email), 1),
                          createVNode("div", { class: "mt-4 pt-4 border-t border-[var(--border)] w-full flex justify-center" }, [
                            createVNode(_component_Badge, { class: "h-5 text-[9px] font-normal uppercase tracking-widest bg-[var(--accent)] text-[var(--muted-foreground)] border-none" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$page.props.auth.user.role || "طالب"), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "md:col-span-3 space-y-6" }, [
                        createVNode("section", { class: "bg-[var(--card)] p-6 border border-[var(--border)] rounded-md shadow-none space-y-6" }, [
                          createVNode("div", { class: "flex items-center gap-2 border-r border-[var(--border)] pr-3 mb-6" }, [
                            createVNode("h2", { class: "text-[14px] font-normal text-[var(--foreground)] uppercase tracking-tight" }, "المعلومات الأساسية")
                          ]),
                          createVNode(_sfc_main$2, {
                            "must-verify-email": __props.mustVerifyEmail,
                            status: __props.status
                          }, null, 8, ["must-verify-email", "status"])
                        ]),
                        createVNode("section", { class: "bg-[var(--card)] p-6 border border-[var(--border)] rounded-md shadow-none space-y-6" }, [
                          createVNode("div", { class: "flex items-center gap-2 border-r border-[var(--border)] pr-3 mb-6" }, [
                            createVNode("h2", { class: "text-[14px] font-normal text-[var(--foreground)] uppercase tracking-tight" }, "كلمة المرور")
                          ]),
                          createVNode(_sfc_main$3)
                        ]),
                        createVNode("section", { class: "bg-[var(--card)] p-6 border border-[var(--destructive)] rounded-md space-y-6" }, [
                          createVNode("div", { class: "flex items-center gap-2 border-r border-[var(--destructive)] pr-3 mb-6" }, [
                            createVNode("h2", { class: "text-[14px] font-normal text-[var(--destructive)] uppercase tracking-tight" }, "منطقة الخطر")
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
