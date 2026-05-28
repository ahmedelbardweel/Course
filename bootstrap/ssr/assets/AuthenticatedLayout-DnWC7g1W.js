import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext, ref, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { X, LayoutDashboard, Compass, BookOpen, Sparkles, LogOut, FileText, PlusCircle, ClipboardList, Trophy, Users, BarChart3, MessageSquare, Menu, ChevronLeft, Bell } from "lucide-vue-next";
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
          "fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-brand-hairline transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:relative lg:inset-y-auto lg:translate-x-0 shrink-0 flex flex-col",
          __props.isSidebarOpen ? "translate-x-0" : "translate-x-full"
        ]
      }, _attrs))}><div class="flex items-center px-4 border-b border-brand-hairline" style="${ssrRenderStyle({ paddingTop: "max(0.625rem, env(safe-area-inset-top, 0px))", paddingBottom: "0.625rem", minHeight: "calc(2.75rem + env(safe-area-inset-top, 0px))" })}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "flex items-center gap-2 font-bold tracking-tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-6 w-6 bg-brand-orange rounded flex items-center justify-center text-white text-[11px] font-medium"${_scopeId}>C</div><span class="text-sm font-semibold tracking-tight text-brand-ink"${_scopeId}>كورس</span>`);
          } else {
            return [
              createVNode("div", { class: "h-6 w-6 bg-brand-orange rounded flex items-center justify-center text-white text-[11px] font-medium" }, "C"),
              createVNode("span", { class: "text-sm font-semibold tracking-tight text-brand-ink" }, "كورس")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="lg:hidden mr-auto text-brand-body p-1 rounded-md">`);
      _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></div><div class="flex-1 overflow-y-auto py-6 px-4 space-y-7"><div class="space-y-2"><h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">الرئيسية</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: [[_ctx.route().current("dashboard") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
      _push(`</div></div><div class="space-y-2"><h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">التعليم</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("courses.index"),
        class: [[_ctx.route().current("courses.index") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
        class: [[_ctx.route().current("courses.my-learning") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
      _push(`</div></div><div class="space-y-2"><h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">الذكاء الاصطناعي</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("ai.index"),
        class: [[_ctx.route().current("ai.index") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
      _push(`</div></div></div><div class="mt-auto p-4 border-t border-brand-hairline">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("logout"),
        method: "post",
        as: "button",
        class: "w-full flex items-center gap-3 px-3 py-2 rounded-md text-xs font-semibold text-brand-body"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LogOut), { class: "h-4 w-4 text-brand-muted" }, null, _parent2, _scopeId));
            _push2(` تسجيل الخروج `);
          } else {
            return [
              createVNode(unref(LogOut), { class: "h-4 w-4 text-brand-muted" }),
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
          "fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-brand-hairline transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:relative lg:inset-y-auto lg:translate-x-0 shrink-0 flex flex-col",
          __props.isSidebarOpen ? "translate-x-0" : "translate-x-full"
        ]
      }, _attrs))}><div class="flex items-center justify-between px-4 border-b border-brand-hairline" style="${ssrRenderStyle({ paddingTop: "max(0.625rem, env(safe-area-inset-top, 0px))", paddingBottom: "0.625rem", minHeight: "calc(2.75rem + env(safe-area-inset-top, 0px))" })}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "flex items-center gap-2 font-bold tracking-tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-6 w-6 bg-brand-orange rounded flex items-center justify-center text-white text-[11px] font-medium"${_scopeId}>C</div><span class="text-sm font-semibold tracking-tight text-brand-ink"${_scopeId}>كورس</span>`);
          } else {
            return [
              createVNode("div", { class: "h-6 w-6 bg-brand-orange rounded flex items-center justify-center text-white text-[11px] font-medium" }, "C"),
              createVNode("span", { class: "text-sm font-semibold tracking-tight text-brand-ink" }, "كورس")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="lg:hidden text-brand-body p-1 rounded-md">`);
      _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></div><div class="flex-1 overflow-y-auto py-6 px-4 space-y-7"><div class="space-y-2"><h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">العامة</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.dashboard"),
        class: [[_ctx.route().current("teacher.dashboard") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
      _push(`</div></div><div class="space-y-2"><h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">إدارة المحتوى</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.courses.index"),
        class: [[_ctx.route().current("teacher.courses.index") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
        class: [[_ctx.route().current("teacher.courses.create") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
        class: [[_ctx.route().current("teacher.quizzes.index") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
        class: [[_ctx.route().current("teacher.challenges.index") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
      _push(`</div></div><div class="space-y-2"><h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">التحليلات والطلاب</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("teacher.students.index"),
        class: [[_ctx.route().current("teacher.students.index") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
        class: [[_ctx.route().current("teacher.sales.index") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
        class: [[_ctx.route().current("teacher.moderation.comments") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
      _push(`</div></div><div class="space-y-2"><h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">أدوات ذكية</h4><div class="space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("ai.index"),
        class: [[_ctx.route().current("ai.index") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
        _push(`<div class="space-y-2"><h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">إدارة النظام</h4><div class="space-y-1">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("admin.teachers.index"),
          class: [[_ctx.route().current("admin.teachers.index") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
          class: [[_ctx.route().current("admin.scanner") ? "bg-brand-surface-strong text-brand-ink font-semibold" : "text-brand-body"], "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium"]
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
      _push(`</div><div class="mt-auto p-4 border-t border-brand-hairline">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("logout"),
        method: "post",
        as: "button",
        class: "w-full flex items-center gap-3 px-3 py-2 rounded-md text-xs font-semibold text-brand-body"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LogOut), { class: "h-4 w-4 text-brand-muted" }, null, _parent2, _scopeId));
            _push2(` تسجيل الخروج `);
          } else {
            return [
              createVNode(unref(LogOut), { class: "h-4 w-4 text-brand-muted" }),
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
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const isSidebarOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-background font-sans selection:bg-brand-orange selection:text-white flex w-full h-screen overflow-hidden relative" }, _attrs))}>`);
      if (isSidebarOpen.value) {
        _push(`<div class="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_b = (_a = _ctx.$page.props.auth) == null ? void 0 : _a.user) == null ? void 0 : _b.role) === "teacher" || ((_d = (_c = _ctx.$page.props.auth) == null ? void 0 : _c.user) == null ? void 0 : _d.role) === "admin") {
        _push(ssrRenderComponent(_sfc_main$1, {
          "is-sidebar-open": isSidebarOpen.value,
          onClose: ($event) => isSidebarOpen.value = false,
          class: "z-50"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$2, {
          "is-sidebar-open": isSidebarOpen.value,
          onClose: ($event) => isSidebarOpen.value = false,
          class: "z-50"
        }, null, _parent));
      }
      _push(`<div class="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10"><header class="shrink-0 bg-[var(--card)] border-b border-[var(--border)] sticky top-0 z-40 flex items-center justify-between px-3 lg:px-6 shadow-none" style="${ssrRenderStyle({ paddingTop: "max(0.5rem, env(safe-area-inset-top, 0px))", paddingBottom: "0.5rem", minHeight: "calc(2.75rem + env(safe-area-inset-top, 0px))" })}"><div class="flex items-center gap-2 min-w-0"><button class="lg:hidden flex-shrink-0 p-1.5 rounded hover:bg-[var(--muted)] transition-colors">`);
      _push(ssrRenderComponent(unref(Menu), { class: "h-4 w-4 text-[var(--foreground)]" }, null, _parent));
      _push(`</button><div class="text-[12px] font-normal tracking-tight text-[var(--foreground)] flex items-center gap-1.5 min-w-0 overflow-hidden">`);
      if (__props.breadcrumbs && __props.breadcrumbs.length) {
        _push(`<div class="flex items-center gap-1.5 flex-wrap"><!--[-->`);
        ssrRenderList(__props.breadcrumbs, (item, index) => {
          _push(`<!--[-->`);
          if (item.url && index < __props.breadcrumbs.length - 1) {
            _push(ssrRenderComponent(unref(Link), {
              href: item.url,
              class: "text-[var(--primary)] hover:underline font-normal whitespace-nowrap"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<span class="text-[var(--foreground)] font-normal truncate">${ssrInterpolate(item.label)}</span>`);
          }
          if (index < __props.breadcrumbs.length - 1) {
            _push(ssrRenderComponent(unref(ChevronLeft), { class: "h-3 w-3 text-[var(--muted-foreground)] opacity-50 flex-shrink-0" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      }
      _push(`</div></div><div class="flex items-center gap-2 flex-shrink-0">`);
      ssrRenderSlot(_ctx.$slots, "header-actions", {}, null, _push, _parent);
      _push(`<button class="p-1.5 rounded relative hover:bg-[var(--muted)] transition-colors">`);
      _push(ssrRenderComponent(unref(Bell), { class: "h-4 w-4 text-[var(--foreground)] opacity-70" }, null, _parent));
      _push(`<span class="absolute top-1 right-1 w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span></button><div class="hidden sm:flex flex-col items-end"><span class="text-[11px] font-normal text-[var(--foreground)] leading-none">${ssrInterpolate((_f = (_e = _ctx.$page.props.auth) == null ? void 0 : _e.user) == null ? void 0 : _f.name)}</span><span class="text-[8px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest mt-0.5">${ssrInterpolate(((_h = (_g = _ctx.$page.props.auth) == null ? void 0 : _g.user) == null ? void 0 : _h.role) === "teacher" ? "معلم" : ((_j = (_i = _ctx.$page.props.auth) == null ? void 0 : _i.user) == null ? void 0 : _j.role) === "admin" ? "مدير" : "طالب")}</span></div><div class="h-7 w-7 bg-[var(--foreground)] text-[var(--background)] rounded-md flex items-center justify-center font-normal text-xs select-none flex-shrink-0">${ssrInterpolate((_m = (_l = (_k = _ctx.$page.props.auth) == null ? void 0 : _k.user) == null ? void 0 : _l.name) == null ? void 0 : _m.charAt(0))}</div></div></header><main class="flex-1 overflow-y-auto p-4 lg:p-6 scrollbar-none animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out">`);
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
