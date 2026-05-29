import { ref, watch, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CS-7yRBl.js";
import { Head, router } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./CourseCard-BdE4w6Ef.js";
import { _ as _sfc_main$4 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { LayoutGrid, SearchX, Search } from "lucide-vue-next";
import "axios";
import "./CardTitle-Cy38L483.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "./index-CGK-4kfq.js";
import "class-variance-authority";
import "@vueuse/core";
import "reka-ui";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    courses: Array,
    categories: Array,
    filters: Object
  },
  setup(__props) {
    var _a, _b;
    const debounce = (fn, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
      };
    };
    const props = __props;
    const search = ref(((_a = props.filters) == null ? void 0 : _a.search) || "");
    const currentCategory = ref(((_b = props.filters) == null ? void 0 : _b.category) || "");
    const applyFilters = () => {
      router.get(route("courses.index"), {
        search: search.value,
        category: currentCategory.value
      }, {
        preserveState: true,
        preserveScroll: true,
        replace: true
      });
    };
    watch(search, debounce(() => {
      applyFilters();
    }, 300));
    const selectCategory = (slug) => {
      currentCategory.value = currentCategory.value === slug ? "" : slug;
      applyFilters();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "تصفح الكورسات" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "الرئيسية", url: _ctx.route("dashboard") },
          { label: "استكشف التعليم" }
        ]
      }, {
        "header-actions": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative w-48 md:w-64"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Search), { class: "absolute right-2 top-2 h-3 w-3 text-[var(--muted-foreground)]" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              modelValue: search.value,
              "onUpdate:modelValue": ($event) => search.value = $event,
              placeholder: "ابحث عن كورس...",
              class: "h-7 pr-7 text-[10px] border-[var(--border)] bg-[var(--background)] shadow-none focus-visible:ring-[var(--primary)] rounded-md"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative w-48 md:w-64" }, [
                createVNode(unref(Search), { class: "absolute right-2 top-2 h-3 w-3 text-[var(--muted-foreground)]" }),
                createVNode(unref(_sfc_main$4), {
                  modelValue: search.value,
                  "onUpdate:modelValue": ($event) => search.value = $event,
                  placeholder: "ابحث عن كورس...",
                  class: "h-7 pr-7 text-[10px] border-[var(--border)] bg-[var(--background)] shadow-none focus-visible:ring-[var(--primary)] rounded-md"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--card)] text-[12px]"${_scopeId}><main class="flex-1 p-4 lg:p-6 text-right overflow-y-auto"${_scopeId}><div class="w-full space-y-6 max-w-full mx-auto"${_scopeId}><div class="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b border-[var(--border)] pb-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="h-8 w-8 rounded-md bg-[var(--primary)] text-white flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(LayoutGrid), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h2 class="text-[13px] font-normal text-[var(--foreground)] tracking-tight leading-none"${_scopeId}>جميع التصنيفات</h2><p class="text-[10px] text-[var(--muted-foreground)] font-normal mt-1 uppercase tracking-widest"${_scopeId}>اختر ما يناسب شغفك</p></div></div><div class="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-hide max-w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              onClick: ($event) => selectCategory(""),
              variant: currentCategory.value === "" ? "default" : "ghost",
              size: "sm",
              class: ["h-7 text-[10px] px-4 font-normal uppercase tracking-widest rounded-md", currentCategory.value === "" ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)]"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` الكل `);
                } else {
                  return [
                    createTextVNode(" الكل ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                key: category.id,
                onClick: ($event) => selectCategory(category.slug),
                variant: currentCategory.value === category.slug ? "default" : "ghost",
                size: "sm",
                class: ["h-7 text-[10px] px-4 font-normal uppercase tracking-widest rounded-md", currentCategory.value === category.slug ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)]"]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(category.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(category.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
            if (__props.courses.length > 0) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.courses, (course) => {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  key: course.id,
                  id: course.id,
                  slug: course.slug,
                  title: course.title,
                  description: course.description,
                  price: course.price === 0 ? "مجاني" : "$" + course.price,
                  category: course.category.name,
                  thumbnail: course.thumbnail,
                  "is-enrolled": course.is_enrolled
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="flex flex-col items-center justify-center py-32 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(SearchX), { class: "h-12 w-12 text-[var(--accent)] mb-4" }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-[13px] font-normal text-[var(--foreground)]"${_scopeId}>لا توجد نتائج مطابقة</h3><p class="text-[11px] text-[var(--muted-foreground)] mb-6"${_scopeId}>حاول استخدام كلمات مفتاحية أخرى أو تغيير التصنيف.</p>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                onClick: ($event) => {
                  search.value = "";
                  selectCategory("");
                },
                variant: "outline",
                size: "sm",
                class: "h-8 text-[11px] font-normal px-8 border-[var(--border)] rounded-md shadow-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`إعادة تعيين البحث`);
                  } else {
                    return [
                      createTextVNode("إعادة تعيين البحث")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-[var(--card)] text-[12px]" }, [
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right overflow-y-auto" }, [
                  createVNode("div", { class: "w-full space-y-6 max-w-full mx-auto" }, [
                    createVNode("div", { class: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b border-[var(--border)] pb-4" }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("div", { class: "h-8 w-8 rounded-md bg-[var(--primary)] text-white flex items-center justify-center" }, [
                          createVNode(unref(LayoutGrid), { class: "h-4 w-4" })
                        ]),
                        createVNode("div", null, [
                          createVNode("h2", { class: "text-[13px] font-normal text-[var(--foreground)] tracking-tight leading-none" }, "جميع التصنيفات"),
                          createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)] font-normal mt-1 uppercase tracking-widest" }, "اختر ما يناسب شغفك")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-hide max-w-full" }, [
                        createVNode(unref(_sfc_main$2), {
                          onClick: ($event) => selectCategory(""),
                          variant: currentCategory.value === "" ? "default" : "ghost",
                          size: "sm",
                          class: ["h-7 text-[10px] px-4 font-normal uppercase tracking-widest rounded-md", currentCategory.value === "" ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)]"]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" الكل ")
                          ]),
                          _: 1
                        }, 8, ["onClick", "variant", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                          return openBlock(), createBlock(unref(_sfc_main$2), {
                            key: category.id,
                            onClick: ($event) => selectCategory(category.slug),
                            variant: currentCategory.value === category.slug ? "default" : "ghost",
                            size: "sm",
                            class: ["h-7 text-[10px] px-4 font-normal uppercase tracking-widest rounded-md", currentCategory.value === category.slug ? "bg-[var(--primary)] text-white" : "text-[var(--muted-foreground)]"]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(category.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick", "variant", "class"]);
                        }), 128))
                      ])
                    ]),
                    __props.courses.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.courses, (course) => {
                        return openBlock(), createBlock(_sfc_main$3, {
                          key: course.id,
                          id: course.id,
                          slug: course.slug,
                          title: course.title,
                          description: course.description,
                          price: course.price === 0 ? "مجاني" : "$" + course.price,
                          category: course.category.name,
                          thumbnail: course.thumbnail,
                          "is-enrolled": course.is_enrolled
                        }, null, 8, ["id", "slug", "title", "description", "price", "category", "thumbnail", "is-enrolled"]);
                      }), 128))
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-col items-center justify-center py-32 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)] shadow-none"
                    }, [
                      createVNode(unref(SearchX), { class: "h-12 w-12 text-[var(--accent)] mb-4" }),
                      createVNode("h3", { class: "text-[13px] font-normal text-[var(--foreground)]" }, "لا توجد نتائج مطابقة"),
                      createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] mb-6" }, "حاول استخدام كلمات مفتاحية أخرى أو تغيير التصنيف."),
                      createVNode(unref(_sfc_main$2), {
                        onClick: ($event) => {
                          search.value = "";
                          selectCategory("");
                        },
                        variant: "outline",
                        size: "sm",
                        class: "h-8 text-[11px] font-normal px-8 border-[var(--border)] rounded-md shadow-none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("إعادة تعيين البحث")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Courses/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
