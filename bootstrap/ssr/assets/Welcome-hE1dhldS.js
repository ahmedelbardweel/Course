import { unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$2 } from "./CourseCard-DFUm2IVH.js";
import "./index-CGK-4kfq.js";
import { Sparkles, ChevronLeft, MessageSquare, Zap, LayoutGrid, Trophy, ArrowRight, MousePointer2 } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "./CardTitle-Cy38L483.js";
import "axios";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    courses: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "المستقبل يبدأ هنا" }, null, _parent));
      _push(`<div class="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white text-[12px]"><nav class="h-11 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 flex items-center justify-between"><div class="flex items-center gap-8">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "text-[18px] font-black tracking-tighter text-zinc-900 flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-6 w-6 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-[12px]"${_scopeId}>C</div><span${_scopeId}>كورس</span>`);
          } else {
            return [
              createVNode("div", { class: "h-6 w-6 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-[12px]" }, "C"),
              createVNode("span", null, "كورس")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-zinc-400">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-zinc-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`الكورسات`);
          } else {
            return [
              createTextVNode("الكورسات")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-zinc-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`المسارات الذكية`);
          } else {
            return [
              createTextVNode("المسارات الذكية")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-zinc-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`عن المنصة`);
          } else {
            return [
              createTextVNode("عن المنصة")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center gap-2">`);
      if (__props.canLogin) {
        _push(`<!--[-->`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 px-4 h-8 flex items-center transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`لوحة التحكم`);
              } else {
                return [
                  createTextVNode("لوحة التحكم")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(_sfc_main$1), {
                  variant: "ghost",
                  class: "h-8 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`تسجيل الدخول`);
                    } else {
                      return [
                        createTextVNode("تسجيل الدخول")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(_sfc_main$1), {
                    variant: "ghost",
                    class: "h-8 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("تسجيل الدخول")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("register")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(_sfc_main$1), { class: "h-8 bg-zinc-900 text-white hover:bg-zinc-800 text-[11px] font-black uppercase tracking-widest px-6 rounded-full shadow-lg shadow-zinc-900/20" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` انضم إلينا مجاناً `);
                    } else {
                      return [
                        createTextVNode(" انضم إلينا مجاناً ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(_sfc_main$1), { class: "h-8 bg-zinc-900 text-white hover:bg-zinc-800 text-[11px] font-black uppercase tracking-widest px-6 rounded-full shadow-lg shadow-zinc-900/20" }, {
                    default: withCtx(() => [
                      createTextVNode(" انضم إلينا مجاناً ")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav><main><section class="relative py-16 lg:py-24 overflow-hidden bg-white"><div class="container mx-auto px-4 relative z-10"><div class="max-w-4xl mx-auto text-center space-y-8"><div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-black uppercase tracking-widest text-zinc-400 shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "h-3 w-3 text-emerald-500" }, null, _parent));
      _push(` الجيل القادم من التعليم الإلكتروني </div><h1 class="text-4xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-zinc-900 animate-in fade-in slide-in-from-top-6 duration-700"> تعلم ما يجعلك <span class="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-400 to-zinc-900">خارج الصندوق</span></h1><p class="text-[13px] lg:text-[15px] text-zinc-500 font-medium leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-top-8 duration-1000"> منصة تعليمية متكاملة مدعومة بالذكاء الاصطناعي، توفر لك تجربة تعليمية فريدة، تفاعلية، ولحظية لتبني مستقبلك المهني بأسلوب عصري. </p><div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 animate-in fade-in slide-in-from-top-10 duration-1000">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        size: "lg",
        class: "h-11 px-10 text-[12px] font-black uppercase tracking-widest bg-zinc-900 text-white hover:bg-zinc-800 rounded-full shadow-2xl shadow-zinc-900/30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` استعرض الكورسات `);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "mr-2 h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" استعرض الكورسات "),
              createVNode(unref(ChevronLeft), { class: "mr-2 h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        size: "lg",
        variant: "outline",
        class: "h-11 px-10 text-[12px] font-black uppercase tracking-widest border-zinc-200 rounded-full hover:bg-zinc-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` تحدث مع المساعد AI `);
            _push2(ssrRenderComponent(unref(MessageSquare), { class: "mr-2 h-4 w-4 opacity-40" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" تحدث مع المساعد AI "),
              createVNode(unref(MessageSquare), { class: "mr-2 h-4 w-4 opacity-40" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 blur-[120px] opacity-[0.05] bg-zinc-900 rounded-full"></div><div class="absolute bottom-0 right-1/4 -z-10 h-[300px] w-[300px] blur-[100px] opacity-[0.05] bg-zinc-400 rounded-full"></div><div class="absolute top-20 right-20 text-zinc-50 opacity-[0.4] -rotate-12 pointer-events-none select-none">`);
      _push(ssrRenderComponent(unref(Zap), { class: "h-64 w-64" }, null, _parent));
      _push(`</div></section><section class="py-16 border-y border-zinc-50 bg-zinc-50/20"><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="space-y-4 text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group"><div class="h-12 w-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(unref(Sparkles), { class: "h-6 w-6" }, null, _parent));
      _push(`</div><h3 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight">ذكاء اصطناعي تفاعلي</h3><p class="text-[11px] text-zinc-400 font-medium leading-relaxed">مساعد ذكي يرافقك في كل خطوة، يشرح لك المفاهيم المعقدة ويختبر مهاراتك بشكل لحظي.</p></div><div class="space-y-4 text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group"><div class="h-12 w-12 rounded-xl bg-white border border-zinc-100 text-zinc-900 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(unref(LayoutGrid), { class: "h-6 w-6" }, null, _parent));
      _push(`</div><h3 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight">مسارات تعلم مخصصة</h3><p class="text-[11px] text-zinc-400 font-medium leading-relaxed">خرائط طريق ذكية يتم رسمها بناءً على أهدافك المهنية ومستواك الحالي لضمان الوصول للقمة.</p></div><div class="space-y-4 text-center p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group"><div class="h-12 w-12 rounded-xl bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">`);
      _push(ssrRenderComponent(unref(Trophy), { class: "h-6 w-6" }, null, _parent));
      _push(`</div><h3 class="text-[14px] font-black text-zinc-900 uppercase tracking-tight">شهادات معتمدة</h3><p class="text-[11px] text-zinc-400 font-medium leading-relaxed">وثق مهاراتك بشهادات رقمية معتمدة تدعم ملفك الشخصي وتفتح لك أبواب كبرى الشركات.</p></div></div></div></section><section class="py-24 bg-white"><div class="container mx-auto px-4"><div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"><div class="space-y-2"><div class="flex items-center gap-2"><div class="h-6 w-1.5 bg-zinc-900 rounded-full"></div><h2 class="text-xl font-black text-zinc-900 uppercase tracking-tight">الكورسات الأكثر طلباً</h2></div><p class="text-[11px] text-zinc-400 font-medium uppercase tracking-[0.2em]">اختر من بين مئات الكورسات المصممة بواسطة خبراء الصناعة</p></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` عرض جميع الكورسات `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-3 w-3 opacity-50" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" عرض جميع الكورسات "),
              createVNode(unref(ArrowRight), { class: "h-3 w-3 opacity-50" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"><!--[-->`);
      ssrRenderList(__props.courses, (course) => {
        var _a;
        _push(ssrRenderComponent(_sfc_main$2, {
          key: course.id,
          id: course.id,
          slug: course.slug,
          title: course.title,
          description: course.description,
          price: "$" + course.price,
          category: (_a = course.category) == null ? void 0 : _a.name,
          thumbnail: course.thumbnail
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-12 border-t border-zinc-50 bg-zinc-50/10"><div class="container mx-auto px-4"><div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center"><div class="space-y-1"><div class="text-2xl font-black text-zinc-900 tracking-tighter uppercase">+50k</div><div class="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">طالب نشط</div></div><div class="space-y-1"><div class="text-2xl font-black text-zinc-900 tracking-tighter uppercase">+200</div><div class="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">خبير تعليمي</div></div><div class="space-y-1"><div class="text-2xl font-black text-zinc-900 tracking-tighter uppercase">98%</div><div class="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">نسبة النجاح</div></div><div class="space-y-1"><div class="text-2xl font-black text-zinc-900 tracking-tighter uppercase">24/7</div><div class="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">دعم ذكي</div></div></div></div></section><section class="py-24 bg-white relative overflow-hidden"><div class="container mx-auto px-4 relative z-10 text-center space-y-8"><h2 class="text-3xl lg:text-5xl font-black tracking-tighter text-zinc-900 uppercase leading-none">جاهز لتبدأ رحلتك؟</h2><p class="text-[13px] text-zinc-500 font-medium max-w-lg mx-auto leading-relaxed uppercase tracking-tight">انضم إلى آلاف الطلاب الذين غيروا حياتهم المهنية من خلال منصتنا. ابدأ اليوم مجاناً.</p><div class="flex justify-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("register")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              size: "lg",
              class: "h-12 px-12 text-[12px] font-black uppercase tracking-widest bg-zinc-900 text-white hover:bg-zinc-800 rounded-full shadow-2xl shadow-zinc-900/30 group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ابدأ الآن مجاناً `);
                  _push3(ssrRenderComponent(unref(MousePointer2), { class: "mr-2 h-4 w-4 group-hover:scale-125 transition-transform" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" ابدأ الآن مجاناً "),
                    createVNode(unref(MousePointer2), { class: "mr-2 h-4 w-4 group-hover:scale-125 transition-transform" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), {
                size: "lg",
                class: "h-12 px-12 text-[12px] font-black uppercase tracking-widest bg-zinc-900 text-white hover:bg-zinc-800 rounded-full shadow-2xl shadow-zinc-900/30 group"
              }, {
                default: withCtx(() => [
                  createTextVNode(" ابدأ الآن مجاناً "),
                  createVNode(unref(MousePointer2), { class: "mr-2 h-4 w-4 group-hover:scale-125 transition-transform" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></main><footer class="border-t py-8 bg-white"><div class="container mx-auto px-4"><div class="flex flex-col md:flex-row items-center justify-between gap-6"><div class="text-[14px] font-black tracking-tighter uppercase">كورس</div><div class="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-400">`);
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
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-zinc-900 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`تواصل معنا`);
          } else {
            return [
              createTextVNode("تواصل معنا")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-[9px] font-black text-zinc-300 uppercase tracking-widest">© 2024 كورس. جميع الحقوق محفوظة.</div></div></div></footer></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
