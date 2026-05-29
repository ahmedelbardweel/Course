import { ref, unref, withCtx, createVNode, createTextVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-Di2Jw3Vp.js";
import { Head, router } from "@inertiajs/vue3";
import "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { Sparkles, CheckCheck, Clock, ChevronLeft, Trash2, Bell, Inbox, GraduationCap, Trophy, FileText, BookOpen } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "axios";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "reka-ui";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    notifications: Array,
    filter: String,
    unreadCount: Number
  },
  setup(__props) {
    const props = __props;
    const activeFilter = ref(props.filter);
    const getIcon = (type) => {
      switch (type) {
        case "lesson":
          return BookOpen;
        case "quiz":
          return FileText;
        case "challenge":
          return Trophy;
        case "course":
          return GraduationCap;
        case "reminder":
          return Clock;
        case "submission":
          return Inbox;
        default:
          return Bell;
      }
    };
    const getIconClass = (type, readAt) => {
      if (readAt) return "bg-muted text-muted-foreground";
      switch (type) {
        case "lesson":
          return "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20";
        case "quiz":
          return "bg-blue-500/10 text-blue-500 border border-blue-500/20";
        case "challenge":
          return "bg-amber-500/10 text-amber-500 border border-amber-500/20";
        case "course":
          return "bg-violet-500/10 text-violet-500 border border-violet-500/20";
        case "reminder":
          return "bg-rose-500/10 text-rose-500 border border-rose-500/20";
        case "submission":
          return "bg-cyan-500/10 text-cyan-500 border border-cyan-500/20";
        default:
          return "bg-primary/10 text-primary border border-primary/20";
      }
    };
    const getTypeLabel = (type) => {
      switch (type) {
        case "lesson":
          return "درس جديد";
        case "quiz":
          return "اختبار";
        case "challenge":
          return "تحدي جديد";
        case "course":
          return "كورس جديد";
        case "reminder":
          return "تذكير";
        case "submission":
          return "تسليم طالب";
        default:
          return "عام";
      }
    };
    const filterNotifications = (val) => {
      activeFilter.value = val;
      router.get(route("notifications.index"), { filter: val }, { preserveState: true });
    };
    const markAsRead = (id) => {
      router.post(route("notifications.read", id), {}, { preserveScroll: true });
    };
    const markAllAsRead = () => {
      router.post(route("notifications.read-all"), {}, { preserveScroll: true });
    };
    const deleteNotification = (id) => {
      router.delete(route("notifications.destroy", id), { preserveScroll: true });
    };
    const readAndNavigate = (notification) => {
      if (!notification.read_at) {
        router.post(route("notifications.read", notification.id), {}, {
          onSuccess: () => {
            router.visit(notification.url);
          }
        });
      } else {
        router.visit(notification.url);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "مركز الإشعارات" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { breadcrumbs: [{ label: "الرئيسية", url: "/dashboard" }, { label: "الإشعارات" }] }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto space-y-6" data-v-3817f1c6${_scopeId}><div class="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white border border-slate-800 shadow-xl" data-v-3817f1c6${_scopeId}><div class="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4" data-v-3817f1c6${_scopeId}><div data-v-3817f1c6${_scopeId}><div class="flex items-center gap-2" data-v-3817f1c6${_scopeId}><h1 class="text-2xl font-bold tracking-tight" data-v-3817f1c6${_scopeId}>مركز الإشعارات</h1><span class="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1" data-v-3817f1c6${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Sparkles), { class: "h-3 w-3" }, null, _parent2, _scopeId));
            _push2(` ذكي وتفاعلي </span></div><p class="mt-2 text-slate-300 text-sm max-w-xl leading-relaxed" data-v-3817f1c6${_scopeId}> تابع كل المستجدات والتحديثات في كورساتك، الامتحانات المتبقية، والتحديات البرمجية بشكل فوري. </p></div>`);
            if (__props.unreadCount > 0) {
              _push2(`<div class="flex items-center gap-2 self-start md:self-auto" data-v-3817f1c6${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                onClick: markAllAsRead,
                size: "sm",
                class: "bg-white/10 hover:bg-white/20 text-white border border-white/10 gap-2 h-9 text-xs rounded-lg transition-all duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(CheckCheck), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(` تحديد الكل كمقروء `);
                  } else {
                    return [
                      createVNode(unref(CheckCheck), { class: "h-4 w-4" }),
                      createTextVNode(" تحديد الكل كمقروء ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20" data-v-3817f1c6${_scopeId}></div><div class="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl opacity-10" data-v-3817f1c6${_scopeId}></div></div><div class="flex items-center justify-between border-b border-[var(--border)] pb-3" data-v-3817f1c6${_scopeId}><div class="flex gap-2" data-v-3817f1c6${_scopeId}><button class="${ssrRenderClass([activeFilter.value === "all" ? "bg-[var(--foreground)] text-white" : "text-[var(--muted-foreground)] hover:bg-[var(--muted)]", "px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200"])}" data-v-3817f1c6${_scopeId}> الكل </button><button class="${ssrRenderClass([activeFilter.value === "unread" ? "bg-[var(--foreground)] text-white" : "text-[var(--muted-foreground)] hover:bg-[var(--muted)]", "px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5"])}" data-v-3817f1c6${_scopeId}> غير المقروءة `);
            if (__props.unreadCount > 0) {
              _push2(`<span class="bg-red-500 text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold" data-v-3817f1c6${_scopeId}>${ssrInterpolate(__props.unreadCount)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button></div><span class="text-xs text-[var(--muted-foreground)]" data-v-3817f1c6${_scopeId}> إجمالي الإشعارات: ${ssrInterpolate(__props.notifications.length)}</span></div>`);
            if (__props.notifications.length > 0) {
              _push2(`<div class="space-y-3" data-v-3817f1c6${_scopeId}><!--[-->`);
              ssrRenderList(__props.notifications, (notification) => {
                _push2(`<div class="${ssrRenderClass([notification.read_at ? "border-[var(--border)] opacity-75" : "border-indigo-500/30 bg-gradient-to-l from-indigo-500/5 to-transparent", "group relative overflow-hidden rounded-xl border p-4 transition-all duration-300 bg-[var(--card)] hover:shadow-md flex items-start gap-4"])}" data-v-3817f1c6${_scopeId}>`);
                if (!notification.read_at) {
                  _push2(`<span class="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full" data-v-3817f1c6${_scopeId}></span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="${ssrRenderClass([getIconClass(notification.type, notification.read_at), "p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-105"])}" data-v-3817f1c6${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(getIcon(notification.type)), { class: "h-5 w-5" }, null), _parent2, _scopeId);
                _push2(`</div><div class="flex-1 min-w-0" data-v-3817f1c6${_scopeId}><div class="flex items-center gap-2 flex-wrap" data-v-3817f1c6${_scopeId}><span class="${ssrRenderClass([notification.read_at ? "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400" : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400", "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"])}" data-v-3817f1c6${_scopeId}>${ssrInterpolate(getTypeLabel(notification.type))}</span><span class="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1" data-v-3817f1c6${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Clock), { class: "h-3 w-3" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(notification.created_at)}</span></div><h3 class="${ssrRenderClass([{ "font-medium": notification.read_at }, "text-sm font-semibold text-[var(--foreground)] mt-1.5"])}" data-v-3817f1c6${_scopeId}>${ssrInterpolate(notification.title)}</h3><p class="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed" data-v-3817f1c6${_scopeId}>${ssrInterpolate(notification.message)}</p><div class="mt-3" data-v-3817f1c6${_scopeId}><button class="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors duration-200" data-v-3817f1c6${_scopeId}> عرض التفاصيل `);
                _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-3.5 w-3.5 mt-0.5" }, null, _parent2, _scopeId));
                _push2(`</button></div></div><div class="flex items-center gap-1 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-2" data-v-3817f1c6${_scopeId}>`);
                if (!notification.read_at) {
                  _push2(ssrRenderComponent(unref(_sfc_main$2), {
                    onClick: ($event) => markAsRead(notification.id),
                    size: "icon",
                    variant: "ghost",
                    title: "تحديد كمقروء",
                    class: "h-8 w-8 text-slate-500 hover:text-indigo-600 hover:bg-indigo-500/10 rounded-lg"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(unref(CheckCheck), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(unref(CheckCheck), { class: "h-4 w-4" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(unref(_sfc_main$2), {
                  onClick: ($event) => deleteNotification(notification.id),
                  size: "icon",
                  variant: "ghost",
                  title: "حذف الإشعار",
                  class: "h-8 w-8 text-slate-500 hover:text-rose-600 hover:bg-rose-500/10 rounded-lg"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(Trash2), { class: "h-4 w-4" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-16 border border-dashed border-[var(--border)] rounded-2xl bg-[var(--card)]" data-v-3817f1c6${_scopeId}><div class="bg-slate-100 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" data-v-3817f1c6${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Bell), { class: "h-8 w-8 text-[var(--muted-foreground)]" }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-base font-semibold text-[var(--foreground)]" data-v-3817f1c6${_scopeId}>لا توجد إشعارات حالياً</h3><p class="text-xs text-[var(--muted-foreground)] mt-1.5 max-w-xs mx-auto leading-relaxed" data-v-3817f1c6${_scopeId}>${ssrInterpolate(activeFilter.value === "unread" ? "رائع! لقد قرأت جميع الإشعارات المتاحة." : "كل شيء هادئ هنا. سنقوم بإعلامك فور حدوث أي نشاط جديد.")}</p>`);
              if (activeFilter.value === "unread") {
                _push2(`<div class="mt-4" data-v-3817f1c6${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$2), {
                  onClick: ($event) => filterNotifications("all"),
                  size: "sm",
                  variant: "outline",
                  class: "text-xs rounded-lg"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` عرض جميع الإشعارات `);
                    } else {
                      return [
                        createTextVNode(" عرض جميع الإشعارات ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto space-y-6" }, [
                createVNode("div", { class: "relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white border border-slate-800 shadow-xl" }, [
                  createVNode("div", { class: "relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("h1", { class: "text-2xl font-bold tracking-tight" }, "مركز الإشعارات"),
                        createVNode("span", { class: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1" }, [
                          createVNode(unref(Sparkles), { class: "h-3 w-3" }),
                          createTextVNode(" ذكي وتفاعلي ")
                        ])
                      ]),
                      createVNode("p", { class: "mt-2 text-slate-300 text-sm max-w-xl leading-relaxed" }, " تابع كل المستجدات والتحديثات في كورساتك، الامتحانات المتبقية، والتحديات البرمجية بشكل فوري. ")
                    ]),
                    __props.unreadCount > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex items-center gap-2 self-start md:self-auto"
                    }, [
                      createVNode(unref(_sfc_main$2), {
                        onClick: markAllAsRead,
                        size: "sm",
                        class: "bg-white/10 hover:bg-white/20 text-white border border-white/10 gap-2 h-9 text-xs rounded-lg transition-all duration-300"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(CheckCheck), { class: "h-4 w-4" }),
                          createTextVNode(" تحديد الكل كمقروء ")
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "absolute -right-10 -top-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20" }),
                  createVNode("div", { class: "absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl opacity-10" })
                ]),
                createVNode("div", { class: "flex items-center justify-between border-b border-[var(--border)] pb-3" }, [
                  createVNode("div", { class: "flex gap-2" }, [
                    createVNode("button", {
                      onClick: ($event) => filterNotifications("all"),
                      class: ["px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200", activeFilter.value === "all" ? "bg-[var(--foreground)] text-white" : "text-[var(--muted-foreground)] hover:bg-[var(--muted)]"]
                    }, " الكل ", 10, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => filterNotifications("unread"),
                      class: ["px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5", activeFilter.value === "unread" ? "bg-[var(--foreground)] text-white" : "text-[var(--muted-foreground)] hover:bg-[var(--muted)]"]
                    }, [
                      createTextVNode(" غير المقروءة "),
                      __props.unreadCount > 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "bg-red-500 text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold"
                      }, toDisplayString(__props.unreadCount), 1)) : createCommentVNode("", true)
                    ], 10, ["onClick"])
                  ]),
                  createVNode("span", { class: "text-xs text-[var(--muted-foreground)]" }, " إجمالي الإشعارات: " + toDisplayString(__props.notifications.length), 1)
                ]),
                __props.notifications.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-3"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.notifications, (notification) => {
                    return openBlock(), createBlock("div", {
                      key: notification.id,
                      class: ["group relative overflow-hidden rounded-xl border p-4 transition-all duration-300 bg-[var(--card)] hover:shadow-md flex items-start gap-4", notification.read_at ? "border-[var(--border)] opacity-75" : "border-indigo-500/30 bg-gradient-to-l from-indigo-500/5 to-transparent"]
                    }, [
                      !notification.read_at ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full"
                      })) : createCommentVNode("", true),
                      createVNode("div", {
                        class: ["p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-105", getIconClass(notification.type, notification.read_at)]
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(getIcon(notification.type)), { class: "h-5 w-5" }))
                      ], 2),
                      createVNode("div", { class: "flex-1 min-w-0" }, [
                        createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                          createVNode("span", {
                            class: ["text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded", notification.read_at ? "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400" : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"]
                          }, toDisplayString(getTypeLabel(notification.type)), 3),
                          createVNode("span", { class: "text-[10px] text-[var(--muted-foreground)] flex items-center gap-1" }, [
                            createVNode(unref(Clock), { class: "h-3 w-3" }),
                            createTextVNode(" " + toDisplayString(notification.created_at), 1)
                          ])
                        ]),
                        createVNode("h3", {
                          class: ["text-sm font-semibold text-[var(--foreground)] mt-1.5", { "font-medium": notification.read_at }]
                        }, toDisplayString(notification.title), 3),
                        createVNode("p", { class: "text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed" }, toDisplayString(notification.message), 1),
                        createVNode("div", { class: "mt-3" }, [
                          createVNode("button", {
                            onClick: ($event) => readAndNavigate(notification),
                            class: "text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors duration-200"
                          }, [
                            createTextVNode(" عرض التفاصيل "),
                            createVNode(unref(ChevronLeft), { class: "h-3.5 w-3.5 mt-0.5" })
                          ], 8, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center gap-1 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-2" }, [
                        !notification.read_at ? (openBlock(), createBlock(unref(_sfc_main$2), {
                          key: 0,
                          onClick: ($event) => markAsRead(notification.id),
                          size: "icon",
                          variant: "ghost",
                          title: "تحديد كمقروء",
                          class: "h-8 w-8 text-slate-500 hover:text-indigo-600 hover:bg-indigo-500/10 rounded-lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(CheckCheck), { class: "h-4 w-4" })
                          ]),
                          _: 1
                        }, 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode(unref(_sfc_main$2), {
                          onClick: ($event) => deleteNotification(notification.id),
                          size: "icon",
                          variant: "ghost",
                          title: "حذف الإشعار",
                          class: "h-8 w-8 text-slate-500 hover:text-rose-600 hover:bg-rose-500/10 rounded-lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Trash2), { class: "h-4 w-4" })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ], 2);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center py-16 border border-dashed border-[var(--border)] rounded-2xl bg-[var(--card)]"
                }, [
                  createVNode("div", { class: "bg-slate-100 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                    createVNode(unref(Bell), { class: "h-8 w-8 text-[var(--muted-foreground)]" })
                  ]),
                  createVNode("h3", { class: "text-base font-semibold text-[var(--foreground)]" }, "لا توجد إشعارات حالياً"),
                  createVNode("p", { class: "text-xs text-[var(--muted-foreground)] mt-1.5 max-w-xs mx-auto leading-relaxed" }, toDisplayString(activeFilter.value === "unread" ? "رائع! لقد قرأت جميع الإشعارات المتاحة." : "كل شيء هادئ هنا. سنقوم بإعلامك فور حدوث أي نشاط جديد."), 1),
                  activeFilter.value === "unread" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4"
                  }, [
                    createVNode(unref(_sfc_main$2), {
                      onClick: ($event) => filterNotifications("all"),
                      size: "sm",
                      variant: "outline",
                      class: "text-xs rounded-lg"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" عرض جميع الإشعارات ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : createCommentVNode("", true)
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notifications/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3817f1c6"]]);
export {
  Index as default
};
