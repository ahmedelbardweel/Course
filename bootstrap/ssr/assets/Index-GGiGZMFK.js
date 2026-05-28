import { unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-1E9rQXwG.js";
import { Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$4 } from "./index-CGK-4kfq.js";
import { _ as _sfc_main$3, b as _sfc_main$5, c as _sfc_main$6, a as _sfc_main$7, d as _sfc_main$8 } from "./CardTitle-Cy38L483.js";
import { Plus, BookOpen, GraduationCap, Users, PlayCircle, HelpCircle, Trophy, Check, X, Edit, Trash2 } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    courses: Array
  },
  setup(__props) {
    const getLevelBadge = (level) => {
      switch (level) {
        case "beginner":
          return "مبتدئ";
        case "intermediate":
          return "متوسط";
        case "advanced":
          return "متقدم";
        default:
          return level;
      }
    };
    const deleteCourse = (id) => {
      if (confirm("هل أنت متأكد من حذف هذا الكورس؟ سيتم حذف جميع الدروس والبيانات المرتبطة به.")) {
        router.delete(route("teacher.courses.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "إدارة الكورسات" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "لوحة التحكم", url: _ctx.route("teacher.dashboard") },
          { label: "إدارة الكورسات" }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]"${_scopeId}><header class="h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none"${_scopeId}><div${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("teacher.courses.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    size: "sm",
                    class: "h-7 text-[11px] px-4 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Plus), { class: "ml-1.5 h-3 w-3" }, null, _parent4, _scopeId3));
                        _push4(` إضافة كورس جديد `);
                      } else {
                        return [
                          createVNode(unref(Plus), { class: "ml-1.5 h-3 w-3" }),
                          createTextVNode(" إضافة كورس جديد ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), {
                      size: "sm",
                      class: "h-7 text-[11px] px-4 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Plus), { class: "ml-1.5 h-3 w-3" }),
                        createTextVNode(" إضافة كورس جديد ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</header><main class="flex-1 p-4 lg:p-6 text-right"${_scopeId}><div class="w-full space-y-6 max-w-full mx-auto"${_scopeId}>`);
            if (__props.courses.length === 0) {
              _push2(`<div class="flex flex-col items-center justify-center py-24 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(BookOpen), { class: "h-12 w-12 text-[var(--muted-foreground)] opacity-40 mb-4" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[13px] font-normal text-[var(--foreground)]"${_scopeId}>لم تضف أي كورس بعد</h3><p class="text-[11px] text-[var(--muted-foreground)] mb-6"${_scopeId}>ابدأ الآن بمشاركة خبراتك وإنشاء أول محتوى تعليمي.</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("teacher.courses.create")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$2), {
                      variant: "outline",
                      size: "sm",
                      class: "h-8 text-[11px] font-normal px-8 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)]"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`إنشاء كورس الآن`);
                        } else {
                          return [
                            createTextVNode("إنشاء كورس الآن")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$2), {
                        variant: "outline",
                        size: "sm",
                        class: "h-8 text-[11px] font-normal px-8 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)]"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("إنشاء كورس الآن")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.courses, (course) => {
                _push2(ssrRenderComponent(unref(_sfc_main$3), {
                  key: course.id,
                  class: "group border-[var(--border)] shadow-none rounded-md overflow-hidden flex flex-col bg-[var(--card)] hover:border-[var(--muted-foreground)]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="aspect-video relative bg-[var(--muted)] overflow-hidden border-b border-[var(--border)]"${_scopeId2}>`);
                      if (course.thumbnail) {
                        _push3(`<img${ssrRenderAttr("src", course.thumbnail)} class="w-full h-full object-cover"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="w-full h-full flex items-center justify-center text-[var(--muted-foreground)]"${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(GraduationCap), { class: "h-10 w-10 opacity-30" }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      }
                      _push3(`<div class="absolute top-2 left-2 flex flex-wrap gap-1"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$4), {
                        variant: course.is_published ? "default" : "outline",
                        class: "h-4 text-[8px] font-normal uppercase tracking-widest px-1.5 shadow-none rounded bg-[var(--card)] text-[var(--foreground)] border-[var(--border)]"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(course.is_published ? "منشور" : "مسودة")}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(course.is_published ? "منشور" : "مسودة"), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (course.allow_study_rooms) {
                        _push3(ssrRenderComponent(unref(_sfc_main$4), {
                          variant: "secondary",
                          class: "h-4 text-[7px] font-normal uppercase px-1.5 bg-[var(--accent)] border border-[var(--border)] text-[var(--foreground)] rounded"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` غرفة مذاكرة `);
                            } else {
                              return [
                                createTextVNode(" غرفة مذاكرة ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="absolute bottom-2 right-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$4), {
                        variant: "secondary",
                        class: "h-4 text-[8px] font-normal px-1.5 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(getLevelBadge(course.level))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(getLevelBadge(course.level)), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-3 space-y-1.5 pb-2 bg-[var(--card)]" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a, _b;
                          if (_push4) {
                            _push4(`<div class="flex items-center justify-between"${_scopeId3}><span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest"${_scopeId3}>${ssrInterpolate(((_a = course.category) == null ? void 0 : _a.name) || "عام")}</span><div class="flex items-center gap-2"${_scopeId3}><div class="flex items-center gap-1 text-[var(--muted-foreground)]"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Users), { class: "h-3 w-3 opacity-55" }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-[9px] font-normal"${_scopeId3}>${ssrInterpolate(course.users_count || 0)}</span></div></div></div>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$6), { class: "text-[12px] font-normal text-[var(--foreground)] line-clamp-1" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(course.title)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(course.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, toDisplayString(((_b = course.category) == null ? void 0 : _b.name) || "عام"), 1),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("div", { class: "flex items-center gap-1 text-[var(--muted-foreground)]" }, [
                                    createVNode(unref(Users), { class: "h-3 w-3 opacity-55" }),
                                    createVNode("span", { class: "text-[9px] font-normal" }, toDisplayString(course.users_count || 0), 1)
                                  ])
                                ])
                              ]),
                              createVNode(unref(_sfc_main$6), { class: "text-[12px] font-normal text-[var(--foreground)] line-clamp-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(course.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "px-3 pb-3 pt-0 flex-1 space-y-3 bg-[var(--card)]" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<p class="text-[10px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed"${_scopeId3}>${ssrInterpolate(course.description)}</p><div class="grid grid-cols-3 gap-1 pt-1 border-t border-[var(--border)]"${_scopeId3}><div class="flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(PlayCircle), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-[10px] font-normal text-[var(--foreground)]"${_scopeId3}>${ssrInterpolate(course.lessons_count || 0)}</span><span class="text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter"${_scopeId3}>درس</span></div><div class="flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(HelpCircle), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-[10px] font-normal text-[var(--foreground)]"${_scopeId3}>${ssrInterpolate(course.quizzes_count || 0)}</span><span class="text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter"${_scopeId3}>اختبار</span></div><div class="flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Trophy), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-[10px] font-normal text-[var(--foreground)]"${_scopeId3}>${ssrInterpolate(course.challenges_count || 0)}</span><span class="text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter"${_scopeId3}>تحدي</span></div></div>`);
                          } else {
                            return [
                              createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed" }, toDisplayString(course.description), 1),
                              createVNode("div", { class: "grid grid-cols-3 gap-1 pt-1 border-t border-[var(--border)]" }, [
                                createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                                  createVNode(unref(PlayCircle), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }),
                                  createVNode("span", { class: "text-[10px] font-normal text-[var(--foreground)]" }, toDisplayString(course.lessons_count || 0), 1),
                                  createVNode("span", { class: "text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter" }, "درس")
                                ]),
                                createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                                  createVNode(unref(HelpCircle), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }),
                                  createVNode("span", { class: "text-[10px] font-normal text-[var(--foreground)]" }, toDisplayString(course.quizzes_count || 0), 1),
                                  createVNode("span", { class: "text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter" }, "اختبار")
                                ]),
                                createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                                  createVNode(unref(Trophy), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }),
                                  createVNode("span", { class: "text-[10px] font-normal text-[var(--foreground)]" }, toDisplayString(course.challenges_count || 0), 1),
                                  createVNode("span", { class: "text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter" }, "تحدي")
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "p-2 border-t border-[var(--border)] bg-[var(--muted)] flex flex-col gap-2" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center gap-3 px-1 w-full justify-between"${_scopeId3}><div class="flex items-center gap-1"${_scopeId3}><div class="${ssrRenderClass(["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.is_published ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"])}"${_scopeId3}>`);
                            if (course.is_published) {
                              _push4(ssrRenderComponent(unref(Check), { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(ssrRenderComponent(unref(X), { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            }
                            _push4(`</div><span class="${ssrRenderClass(["text-[8.5px] font-normal", course.is_published ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"])}"${_scopeId3}>منشور</span></div><div class="flex items-center gap-1"${_scopeId3}><div class="${ssrRenderClass(["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.allow_study_rooms ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"])}"${_scopeId3}>`);
                            if (course.allow_study_rooms) {
                              _push4(ssrRenderComponent(unref(Check), { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(ssrRenderComponent(unref(X), { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            }
                            _push4(`</div><span class="${ssrRenderClass(["text-[8.5px] font-normal", course.allow_study_rooms ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"])}"${_scopeId3}>غرف مذاكرة</span></div><div class="flex items-center gap-1"${_scopeId3}><div class="${ssrRenderClass(["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.allow_timed_comments ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"])}"${_scopeId3}>`);
                            if (course.allow_timed_comments) {
                              _push4(ssrRenderComponent(unref(Check), { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(ssrRenderComponent(unref(X), { class: "h-2 w-2" }, null, _parent4, _scopeId3));
                            }
                            _push4(`</div><span class="${ssrRenderClass(["text-[8.5px] font-normal", course.allow_timed_comments ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"])}"${_scopeId3}>موقتة</span></div></div><div class="flex items-center justify-between border-t border-[var(--border)] pt-2 w-full"${_scopeId3}><div class="font-normal text-xs text-[var(--foreground)] px-1"${_scopeId3}>${ssrInterpolate(course.price > 0 ? "$" + course.price : "مجاني")}</div><div class="flex items-center gap-1"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Link), {
                              href: _ctx.route("teacher.courses.edit", course.id)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(_sfc_main$2), {
                                    variant: "ghost",
                                    size: "icon",
                                    class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(Edit), { class: "h-3.5 w-3.5" }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(_sfc_main$2), {
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(_sfc_main$2), {
                              onClick: ($event) => deleteCourse(course.id),
                              variant: "ghost",
                              size: "icon",
                              class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(Trash2), { class: "h-3.5 w-3.5" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "flex items-center gap-3 px-1 w-full justify-between" }, [
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  createVNode("div", {
                                    class: ["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.is_published ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"]
                                  }, [
                                    course.is_published ? (openBlock(), createBlock(unref(Check), {
                                      key: 0,
                                      class: "h-2 w-2"
                                    })) : (openBlock(), createBlock(unref(X), {
                                      key: 1,
                                      class: "h-2 w-2"
                                    }))
                                  ], 2),
                                  createVNode("span", {
                                    class: ["text-[8.5px] font-normal", course.is_published ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                  }, "منشور", 2)
                                ]),
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  createVNode("div", {
                                    class: ["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.allow_study_rooms ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"]
                                  }, [
                                    course.allow_study_rooms ? (openBlock(), createBlock(unref(Check), {
                                      key: 0,
                                      class: "h-2 w-2"
                                    })) : (openBlock(), createBlock(unref(X), {
                                      key: 1,
                                      class: "h-2 w-2"
                                    }))
                                  ], 2),
                                  createVNode("span", {
                                    class: ["text-[8.5px] font-normal", course.allow_study_rooms ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                  }, "غرف مذاكرة", 2)
                                ]),
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  createVNode("div", {
                                    class: ["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.allow_timed_comments ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"]
                                  }, [
                                    course.allow_timed_comments ? (openBlock(), createBlock(unref(Check), {
                                      key: 0,
                                      class: "h-2 w-2"
                                    })) : (openBlock(), createBlock(unref(X), {
                                      key: 1,
                                      class: "h-2 w-2"
                                    }))
                                  ], 2),
                                  createVNode("span", {
                                    class: ["text-[8.5px] font-normal", course.allow_timed_comments ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                  }, "موقتة", 2)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center justify-between border-t border-[var(--border)] pt-2 w-full" }, [
                                createVNode("div", { class: "font-normal text-xs text-[var(--foreground)] px-1" }, toDisplayString(course.price > 0 ? "$" + course.price : "مجاني"), 1),
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("teacher.courses.edit", course.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$2), {
                                        variant: "ghost",
                                        size: "icon",
                                        class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["href"]),
                                  createVNode(unref(_sfc_main$2), {
                                    onClick: ($event) => deleteCourse(course.id),
                                    variant: "ghost",
                                    size: "icon",
                                    class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("div", { class: "aspect-video relative bg-[var(--muted)] overflow-hidden border-b border-[var(--border)]" }, [
                          course.thumbnail ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: course.thumbnail,
                            class: "w-full h-full object-cover"
                          }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-full h-full flex items-center justify-center text-[var(--muted-foreground)]"
                          }, [
                            createVNode(unref(GraduationCap), { class: "h-10 w-10 opacity-30" })
                          ])),
                          createVNode("div", { class: "absolute top-2 left-2 flex flex-wrap gap-1" }, [
                            createVNode(unref(_sfc_main$4), {
                              variant: course.is_published ? "default" : "outline",
                              class: "h-4 text-[8px] font-normal uppercase tracking-widest px-1.5 shadow-none rounded bg-[var(--card)] text-[var(--foreground)] border-[var(--border)]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(course.is_published ? "منشور" : "مسودة"), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant"]),
                            course.allow_study_rooms ? (openBlock(), createBlock(unref(_sfc_main$4), {
                              key: 0,
                              variant: "secondary",
                              class: "h-4 text-[7px] font-normal uppercase px-1.5 bg-[var(--accent)] border border-[var(--border)] text-[var(--foreground)] rounded"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" غرفة مذاكرة ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "absolute bottom-2 right-2" }, [
                            createVNode(unref(_sfc_main$4), {
                              variant: "secondary",
                              class: "h-4 text-[8px] font-normal px-1.5 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(getLevelBadge(course.level)), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        createVNode(unref(_sfc_main$5), { class: "p-3 space-y-1.5 pb-2 bg-[var(--card)]" }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, toDisplayString(((_a = course.category) == null ? void 0 : _a.name) || "عام"), 1),
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("div", { class: "flex items-center gap-1 text-[var(--muted-foreground)]" }, [
                                    createVNode(unref(Users), { class: "h-3 w-3 opacity-55" }),
                                    createVNode("span", { class: "text-[9px] font-normal" }, toDisplayString(course.users_count || 0), 1)
                                  ])
                                ])
                              ]),
                              createVNode(unref(_sfc_main$6), { class: "text-[12px] font-normal text-[var(--foreground)] line-clamp-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(course.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$7), { class: "px-3 pb-3 pt-0 flex-1 space-y-3 bg-[var(--card)]" }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed" }, toDisplayString(course.description), 1),
                            createVNode("div", { class: "grid grid-cols-3 gap-1 pt-1 border-t border-[var(--border)]" }, [
                              createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                                createVNode(unref(PlayCircle), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }),
                                createVNode("span", { class: "text-[10px] font-normal text-[var(--foreground)]" }, toDisplayString(course.lessons_count || 0), 1),
                                createVNode("span", { class: "text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter" }, "درس")
                              ]),
                              createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                                createVNode(unref(HelpCircle), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }),
                                createVNode("span", { class: "text-[10px] font-normal text-[var(--foreground)]" }, toDisplayString(course.quizzes_count || 0), 1),
                                createVNode("span", { class: "text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter" }, "اختبار")
                              ]),
                              createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                                createVNode(unref(Trophy), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }),
                                createVNode("span", { class: "text-[10px] font-normal text-[var(--foreground)]" }, toDisplayString(course.challenges_count || 0), 1),
                                createVNode("span", { class: "text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter" }, "تحدي")
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$8), { class: "p-2 border-t border-[var(--border)] bg-[var(--muted)] flex flex-col gap-2" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-3 px-1 w-full justify-between" }, [
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode("div", {
                                  class: ["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.is_published ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"]
                                }, [
                                  course.is_published ? (openBlock(), createBlock(unref(Check), {
                                    key: 0,
                                    class: "h-2 w-2"
                                  })) : (openBlock(), createBlock(unref(X), {
                                    key: 1,
                                    class: "h-2 w-2"
                                  }))
                                ], 2),
                                createVNode("span", {
                                  class: ["text-[8.5px] font-normal", course.is_published ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                }, "منشور", 2)
                              ]),
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode("div", {
                                  class: ["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.allow_study_rooms ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"]
                                }, [
                                  course.allow_study_rooms ? (openBlock(), createBlock(unref(Check), {
                                    key: 0,
                                    class: "h-2 w-2"
                                  })) : (openBlock(), createBlock(unref(X), {
                                    key: 1,
                                    class: "h-2 w-2"
                                  }))
                                ], 2),
                                createVNode("span", {
                                  class: ["text-[8.5px] font-normal", course.allow_study_rooms ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                }, "غرف مذاكرة", 2)
                              ]),
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode("div", {
                                  class: ["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.allow_timed_comments ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"]
                                }, [
                                  course.allow_timed_comments ? (openBlock(), createBlock(unref(Check), {
                                    key: 0,
                                    class: "h-2 w-2"
                                  })) : (openBlock(), createBlock(unref(X), {
                                    key: 1,
                                    class: "h-2 w-2"
                                  }))
                                ], 2),
                                createVNode("span", {
                                  class: ["text-[8.5px] font-normal", course.allow_timed_comments ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                }, "موقتة", 2)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-between border-t border-[var(--border)] pt-2 w-full" }, [
                              createVNode("div", { class: "font-normal text-xs text-[var(--foreground)] px-1" }, toDisplayString(course.price > 0 ? "$" + course.price : "مجاني"), 1),
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("teacher.courses.edit", course.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$2), {
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createVNode(unref(_sfc_main$2), {
                                  onClick: ($event) => deleteCourse(course.id),
                                  variant: "ghost",
                                  size: "icon",
                                  class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-[var(--background)] text-[12px]" }, [
                createVNode("header", { class: "h-11 border-b border-[var(--border)] bg-[var(--card)] flex items-center justify-between px-4 sticky top-0 z-30 shadow-none" }, [
                  createVNode("div"),
                  createVNode(unref(Link), {
                    href: _ctx.route("teacher.courses.create")
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), {
                        size: "sm",
                        class: "h-7 text-[11px] px-4 font-normal bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Plus), { class: "ml-1.5 h-3 w-3" }),
                          createTextVNode(" إضافة كورس جديد ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right" }, [
                  createVNode("div", { class: "w-full space-y-6 max-w-full mx-auto" }, [
                    __props.courses.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-24 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"
                    }, [
                      createVNode(unref(BookOpen), { class: "h-12 w-12 text-[var(--muted-foreground)] opacity-40 mb-4" }),
                      createVNode("h3", { class: "text-[13px] font-normal text-[var(--foreground)]" }, "لم تضف أي كورس بعد"),
                      createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] mb-6" }, "ابدأ الآن بمشاركة خبراتك وإنشاء أول محتوى تعليمي."),
                      createVNode(unref(Link), {
                        href: _ctx.route("teacher.courses.create")
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), {
                            variant: "outline",
                            size: "sm",
                            class: "h-8 text-[11px] font-normal px-8 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)]"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("إنشاء كورس الآن")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                        return openBlock(), createBlock(unref(_sfc_main$3), {
                          key: course.id,
                          class: "group border-[var(--border)] shadow-none rounded-md overflow-hidden flex flex-col bg-[var(--card)] hover:border-[var(--muted-foreground)]"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "aspect-video relative bg-[var(--muted)] overflow-hidden border-b border-[var(--border)]" }, [
                              course.thumbnail ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: course.thumbnail,
                                class: "w-full h-full object-cover"
                              }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "w-full h-full flex items-center justify-center text-[var(--muted-foreground)]"
                              }, [
                                createVNode(unref(GraduationCap), { class: "h-10 w-10 opacity-30" })
                              ])),
                              createVNode("div", { class: "absolute top-2 left-2 flex flex-wrap gap-1" }, [
                                createVNode(unref(_sfc_main$4), {
                                  variant: course.is_published ? "default" : "outline",
                                  class: "h-4 text-[8px] font-normal uppercase tracking-widest px-1.5 shadow-none rounded bg-[var(--card)] text-[var(--foreground)] border-[var(--border)]"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(course.is_published ? "منشور" : "مسودة"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["variant"]),
                                course.allow_study_rooms ? (openBlock(), createBlock(unref(_sfc_main$4), {
                                  key: 0,
                                  variant: "secondary",
                                  class: "h-4 text-[7px] font-normal uppercase px-1.5 bg-[var(--accent)] border border-[var(--border)] text-[var(--foreground)] rounded"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" غرفة مذاكرة ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "absolute bottom-2 right-2" }, [
                                createVNode(unref(_sfc_main$4), {
                                  variant: "secondary",
                                  class: "h-4 text-[8px] font-normal px-1.5 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] rounded"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getLevelBadge(course.level)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            createVNode(unref(_sfc_main$5), { class: "p-3 space-y-1.5 pb-2 bg-[var(--card)]" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest" }, toDisplayString(((_a = course.category) == null ? void 0 : _a.name) || "عام"), 1),
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode("div", { class: "flex items-center gap-1 text-[var(--muted-foreground)]" }, [
                                        createVNode(unref(Users), { class: "h-3 w-3 opacity-55" }),
                                        createVNode("span", { class: "text-[9px] font-normal" }, toDisplayString(course.users_count || 0), 1)
                                      ])
                                    ])
                                  ]),
                                  createVNode(unref(_sfc_main$6), { class: "text-[12px] font-normal text-[var(--foreground)] line-clamp-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(course.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$7), { class: "px-3 pb-3 pt-0 flex-1 space-y-3 bg-[var(--card)]" }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)] line-clamp-2 leading-relaxed" }, toDisplayString(course.description), 1),
                                createVNode("div", { class: "grid grid-cols-3 gap-1 pt-1 border-t border-[var(--border)]" }, [
                                  createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                                    createVNode(unref(PlayCircle), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }),
                                    createVNode("span", { class: "text-[10px] font-normal text-[var(--foreground)]" }, toDisplayString(course.lessons_count || 0), 1),
                                    createVNode("span", { class: "text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter" }, "درس")
                                  ]),
                                  createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                                    createVNode(unref(HelpCircle), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }),
                                    createVNode("span", { class: "text-[10px] font-normal text-[var(--foreground)]" }, toDisplayString(course.quizzes_count || 0), 1),
                                    createVNode("span", { class: "text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter" }, "اختبار")
                                  ]),
                                  createVNode("div", { class: "flex flex-col items-center p-1.5 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                                    createVNode(unref(Trophy), { class: "h-3 w-3 text-[var(--muted-foreground)] mb-1" }),
                                    createVNode("span", { class: "text-[10px] font-normal text-[var(--foreground)]" }, toDisplayString(course.challenges_count || 0), 1),
                                    createVNode("span", { class: "text-[7px] font-normal text-[var(--muted-foreground)] uppercase tracking-tighter" }, "تحدي")
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$8), { class: "p-2 border-t border-[var(--border)] bg-[var(--muted)] flex flex-col gap-2" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-3 px-1 w-full justify-between" }, [
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    createVNode("div", {
                                      class: ["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.is_published ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"]
                                    }, [
                                      course.is_published ? (openBlock(), createBlock(unref(Check), {
                                        key: 0,
                                        class: "h-2 w-2"
                                      })) : (openBlock(), createBlock(unref(X), {
                                        key: 1,
                                        class: "h-2 w-2"
                                      }))
                                    ], 2),
                                    createVNode("span", {
                                      class: ["text-[8.5px] font-normal", course.is_published ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                    }, "منشور", 2)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    createVNode("div", {
                                      class: ["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.allow_study_rooms ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"]
                                    }, [
                                      course.allow_study_rooms ? (openBlock(), createBlock(unref(Check), {
                                        key: 0,
                                        class: "h-2 w-2"
                                      })) : (openBlock(), createBlock(unref(X), {
                                        key: 1,
                                        class: "h-2 w-2"
                                      }))
                                    ], 2),
                                    createVNode("span", {
                                      class: ["text-[8.5px] font-normal", course.allow_study_rooms ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                    }, "غرف مذاكرة", 2)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    createVNode("div", {
                                      class: ["h-3.5 w-3.5 rounded-full flex items-center justify-center border", course.allow_timed_comments ? "bg-[var(--primary)] border-[var(--primary)] text-white" : "bg-[var(--card)] border-[var(--border)] text-[var(--muted-foreground)]"]
                                    }, [
                                      course.allow_timed_comments ? (openBlock(), createBlock(unref(Check), {
                                        key: 0,
                                        class: "h-2 w-2"
                                      })) : (openBlock(), createBlock(unref(X), {
                                        key: 1,
                                        class: "h-2 w-2"
                                      }))
                                    ], 2),
                                    createVNode("span", {
                                      class: ["text-[8.5px] font-normal", course.allow_timed_comments ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                    }, "موقتة", 2)
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center justify-between border-t border-[var(--border)] pt-2 w-full" }, [
                                  createVNode("div", { class: "font-normal text-xs text-[var(--foreground)] px-1" }, toDisplayString(course.price > 0 ? "$" + course.price : "مجاني"), 1),
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    createVNode(unref(Link), {
                                      href: _ctx.route("teacher.courses.edit", course.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$2), {
                                          variant: "ghost",
                                          size: "icon",
                                          class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)]"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Edit), { class: "h-3.5 w-3.5" })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["href"]),
                                    createVNode(unref(_sfc_main$2), {
                                      onClick: ($event) => deleteCourse(course.id),
                                      variant: "ghost",
                                      size: "icon",
                                      class: "h-7 w-7 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-red-500"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Courses/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
