import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { X, LayoutDashboard, Compass, BookOpen, Sparkles, LogOut, FileText, PlusCircle, ClipboardList, Trophy, Users, BarChart3, MessageSquare, Menu, Bell } from "lucide-vue-next";
const _sfc_main$2 = {
  __name: "StudentSidebar",
  __ssrInlineRender: true,
  props: {
    isSidebarOpen: Boolean
  },
  emits: ["close"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: [
          "fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-zinc-200 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:relative lg:translate-x-0 shrink-0",
          __props.isSidebarOpen ? "translate-x-0" : "translate-x-full"
        ]
      }, _attrs))}><div class="flex h-11 items-center px-4 border-b border-zinc-200">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "flex items-center gap-2 font-bold tracking-tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-6 w-6 bg-zinc-950 rounded flex items-center justify-center text-white text-[11px] font-black"${_scopeId}>C</div><span class="text-sm font-extrabold tracking-tight text-zinc-950"${_scopeId}>كورس</span>`);
          } else {
            return [
              createVNode("div", { class: "h-6 w-6 bg-zinc-950 rounded flex items-center justify-center text-white text-[11px] font-black" }, "C"),
              createVNode("span", { class: "text-sm font-extrabold tracking-tight text-zinc-950" }, "كورس")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="lg:hidden mr-auto text-zinc-500 hover:text-zinc-900 transition-colors">`);
      _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></div><div class="flex-1 overflow-y-auto py-6 px-4 space-y-8"><div class="space-y-1"><h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">الرئيسية</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: [[_ctx.route().current("dashboard") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LayoutDashboard), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` لوحة التحكم `);
          } else {
            return [
              createVNode(unref(LayoutDashboard), { class: "h-4 w-4" }),
              createTextVNode(" لوحة التحكم ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-1"><h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">التعليم</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("courses.index"),
        class: [[_ctx.route().current("courses.index") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Compass), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` كل الكورسات `);
          } else {
            return [
              createVNode(unref(Compass), { class: "h-4 w-4" }),
              createTextVNode(" كل الكورسات ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("courses.my-learning"),
        class: [[_ctx.route().current("courses.my-learning") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(BookOpen), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` دوراتي `);
          } else {
            return [
              createVNode(unref(BookOpen), { class: "h-4 w-4" }),
              createTextVNode(" دوراتي ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-1"><h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">الذكاء الاصطناعي</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("ai.index"),
        class: [[_ctx.route().current("ai.index") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Sparkles), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` المساعد الذكي `);
          } else {
            return [
              createVNode(unref(Sparkles), { class: "h-4 w-4" }),
              createTextVNode(" المساعد الذكي ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="mt-auto p-4 border-t border-zinc-200">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("logout"),
        method: "post",
        as: "button",
        class: "w-full flex items-center gap-3 px-3 py-2 rounded-md text-xs font-bold text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LogOut), { class: "h-4 w-4 text-zinc-400" }, null, _parent2, _scopeId));
            _push2(` تسجيل الخروج `);
          } else {
            return [
              createVNode(unref(LogOut), { class: "h-4 w-4 text-zinc-400" }),
              createTextVNode(" تسجيل الخروج ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></aside>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Layout/StudentSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TeacherSidebar",
  __ssrInlineRender: true,
  props: {
    isSidebarOpen: Boolean
  },
  emits: ["close"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: [
          "fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-zinc-200 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:relative lg:translate-x-0 shrink-0",
          __props.isSidebarOpen ? "translate-x-0" : "translate-x-full"
        ]
      }, _attrs))}><div class="flex h-11 items-center justify-between px-4 border-b border-zinc-200">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "flex items-center gap-2 font-bold tracking-tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-6 w-6 bg-zinc-950 rounded flex items-center justify-center text-white text-[11px] font-black"${_scopeId}>C</div><span class="text-sm font-extrabold tracking-tight text-zinc-950"${_scopeId}>كورس</span>`);
          } else {
            return [
              createVNode("div", { class: "h-6 w-6 bg-zinc-950 rounded flex items-center justify-center text-white text-[11px] font-black" }, "C"),
              createVNode("span", { class: "text-sm font-extrabold tracking-tight text-zinc-950" }, "كورس")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="lg:hidden text-zinc-500 hover:text-zinc-950">`);
      _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></div><div class="flex-1 overflow-y-auto py-6 px-4 space-y-8"><div class="space-y-1"><h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">العامة</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.dashboard"),
        class: [[_ctx.route().current("teacher.dashboard") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LayoutDashboard), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` لوحة التحكم `);
          } else {
            return [
              createVNode(unref(LayoutDashboard), { class: "h-4 w-4" }),
              createTextVNode(" لوحة التحكم ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-1"><h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">إدارة المحتوى</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.courses.index"),
        class: [[_ctx.route().current("teacher.courses.index") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FileText), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` جميع الكورسات `);
          } else {
            return [
              createVNode(unref(FileText), { class: "h-4 w-4" }),
              createTextVNode(" جميع الكورسات ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.courses.create"),
        class: [[_ctx.route().current("teacher.courses.create") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PlusCircle), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` كورس جديد `);
          } else {
            return [
              createVNode(unref(PlusCircle), { class: "h-4 w-4" }),
              createTextVNode(" كورس جديد ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.quizzes.index"),
        class: [[_ctx.route().current("teacher.quizzes.index") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ClipboardList), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` الاختبارات `);
          } else {
            return [
              createVNode(unref(ClipboardList), { class: "h-4 w-4" }),
              createTextVNode(" الاختبارات ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.challenges.index"),
        class: [[_ctx.route().current("teacher.challenges.index") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Trophy), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` التحديات الأسبوعية `);
          } else {
            return [
              createVNode(unref(Trophy), { class: "h-4 w-4" }),
              createTextVNode(" التحديات الأسبوعية ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-1"><h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">التحليلات والطلاب</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.students.index"),
        class: [[_ctx.route().current("teacher.students.index") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Users), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` الطلاب المسجلين `);
          } else {
            return [
              createVNode(unref(Users), { class: "h-4 w-4" }),
              createTextVNode(" الطلاب المسجلين ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.sales.index"),
        class: [[_ctx.route().current("teacher.sales.index") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(BarChart3), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` تقارير المبيعات `);
          } else {
            return [
              createVNode(unref(BarChart3), { class: "h-4 w-4" }),
              createTextVNode(" تقارير المبيعات ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.moderation.comments"),
        class: [[_ctx.route().current("teacher.moderation.comments") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MessageSquare), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` رقابة التعليقات `);
          } else {
            return [
              createVNode(unref(MessageSquare), { class: "h-4 w-4" }),
              createTextVNode(" رقابة التعليقات ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-1"><h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">أدوات ذكية</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("ai.index"),
        class: [[_ctx.route().current("ai.index") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Sparkles), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` المساعد الذكي `);
          } else {
            return [
              createVNode(unref(Sparkles), { class: "h-4 w-4" }),
              createTextVNode(" المساعد الذكي ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (((_b = (_a = _ctx.$page.props.auth) == null ? void 0 : _a.user) == null ? void 0 : _b.role) === "admin") {
        _push(`<div class="space-y-1"><h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">إدارة النظام</h4><div class="space-y-1">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("admin.teachers.index"),
          class: [[_ctx.route().current("admin.teachers.index") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Users), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(` إدارة المعلمين `);
            } else {
              return [
                createVNode(unref(Users), { class: "h-4 w-4" }),
                createTextVNode(" إدارة المعلمين ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("admin.scanner"),
          class: [[_ctx.route().current("admin.scanner") ? "bg-zinc-100 text-zinc-950 font-bold" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Sparkles), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(` فاحص المحتوى `);
            } else {
              return [
                createVNode(unref(Sparkles), { class: "h-4 w-4" }),
                createTextVNode(" فاحص المحتوى ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-auto p-4 border-t border-zinc-200">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("logout"),
        method: "post",
        as: "button",
        class: "w-full flex items-center gap-3 px-3 py-2 rounded-md text-xs font-bold text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LogOut), { class: "h-4 w-4 text-zinc-400" }, null, _parent2, _scopeId));
            _push2(` تسجيل الخروج `);
          } else {
            return [
              createVNode(unref(LogOut), { class: "h-4 w-4 text-zinc-400" }),
              createTextVNode(" تسجيل الخروج ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></aside>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Layout/TeacherSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const isSidebarOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans selection:bg-zinc-950 selection:text-white flex w-full h-screen overflow-hidden" }, _attrs))}>`);
      if (((_b = (_a = _ctx.$page.props.auth) == null ? void 0 : _a.user) == null ? void 0 : _b.role) === "teacher" || ((_d = (_c = _ctx.$page.props.auth) == null ? void 0 : _c.user) == null ? void 0 : _d.role) === "admin") {
        _push(ssrRenderComponent(_sfc_main$1, {
          "is-sidebar-open": isSidebarOpen.value,
          onClose: ($event) => isSidebarOpen.value = false
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$2, {
          "is-sidebar-open": isSidebarOpen.value,
          onClose: ($event) => isSidebarOpen.value = false
        }, null, _parent));
      }
      _push(`<div class="flex-1 flex flex-col min-w-0 overflow-hidden"><header class="h-11 shrink-0 bg-white/80 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-40 flex items-center justify-between px-4 lg:px-6"><div class="flex items-center gap-3"><button class="lg:hidden p-1.5 hover:bg-zinc-100 rounded">`);
      _push(ssrRenderComponent(unref(Menu), { class: "h-4 w-4" }, null, _parent));
      _push(`</button><h2 class="text-sm font-bold tracking-tight">`);
      ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      _push(`</h2></div><div class="flex items-center gap-3"><button class="p-1.5 hover:bg-zinc-100 rounded relative">`);
      _push(ssrRenderComponent(unref(Bell), { class: "h-4 w-4" }, null, _parent));
      _push(`<span class="absolute top-1 right-1 w-1.5 h-1.5 bg-zinc-950 rounded-full"></span></button><div class="hidden sm:flex flex-col items-end"><span class="text-xs font-bold leading-none">${ssrInterpolate((_f = (_e = _ctx.$page.props.auth) == null ? void 0 : _e.user) == null ? void 0 : _f.name)}</span><span class="text-[9px] text-zinc-400 uppercase tracking-widest mt-0.5">${ssrInterpolate(((_h = (_g = _ctx.$page.props.auth) == null ? void 0 : _g.user) == null ? void 0 : _h.role) === "teacher" ? "معلم" : ((_j = (_i = _ctx.$page.props.auth) == null ? void 0 : _i.user) == null ? void 0 : _j.role) === "admin" ? "مدير" : "طالب")}</span></div><div class="h-7 w-7 bg-zinc-950 rounded-md flex items-center justify-center text-white font-black text-xs shadow-sm">${ssrInterpolate((_m = (_l = (_k = _ctx.$page.props.auth) == null ? void 0 : _k.user) == null ? void 0 : _l.name) == null ? void 0 : _m.charAt(0))}</div></div></header><main class="flex-1 overflow-y-auto p-4 lg:p-6 scrollbar-none animate-in fade-in duration-500 ease-out">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
