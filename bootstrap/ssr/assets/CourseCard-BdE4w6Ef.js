import { unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, b as _sfc_main$3, c as _sfc_main$4, e as _sfc_main$5, d as _sfc_main$6 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$2 } from "./index-CGK-4kfq.js";
import { _ as _sfc_main$7 } from "./index-BhZ8Ukd6.js";
import axios from "axios";
import { Link } from "@inertiajs/vue3";
import { PlayCircle, Star } from "lucide-vue-next";
function trackInteraction(type, entityId = null, entityType = null, metadata = {}) {
  axios.post("/interactions", {
    type,
    interactionable_id: entityId,
    interactionable_type: entityType,
    metadata
  }).catch((error) => console.error("Tracking failed:", error));
}
const _sfc_main = {
  __name: "CourseCard",
  __ssrInlineRender: true,
  props: {
    id: Number,
    slug: String,
    title: String,
    description: String,
    price: String,
    category: String,
    thumbnail: String,
    isEnrolled: Boolean
  },
  setup(__props) {
    const props = __props;
    const handleView = () => {
      trackInteraction("view_details", props.id, "App\\Models\\Course");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$1), mergeProps({ class: "border border-brand-hairline rounded-lg overflow-hidden flex flex-col bg-white" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="aspect-video relative bg-brand-canvas overflow-hidden border-b border-brand-hairline"${_scopeId}>`);
            if (__props.thumbnail) {
              _push2(`<img${ssrRenderAttr("src", __props.thumbnail)}${ssrRenderAttr("alt", __props.title)} class="h-full w-full object-cover"${_scopeId}>`);
            } else {
              _push2(`<div class="h-full w-full flex items-center justify-center text-brand-muted opacity-40"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(PlayCircle), { class: "h-10 w-10" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`<div class="absolute top-2 left-2 flex gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              variant: "secondary",
              class: "h-4 text-[8px] font-semibold uppercase px-2 bg-white border border-brand-hairline text-brand-ink"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.category)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.category), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.isEnrolled) {
              _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "h-4 text-[8px] font-semibold uppercase px-2 bg-brand-orange text-white border border-brand-orange" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` مشترك `);
                  } else {
                    return [
                      createTextVNode(" مشترك ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "p-3 space-y-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-1 mb-0.5"${_scopeId2}><div class="flex items-center text-brand-ink gap-0.5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Star), { class: "h-2.5 w-2.5 text-brand-hairline fill-brand-hairline" }, null, _parent3, _scopeId2));
                  _push3(`</div><span class="text-[9px] font-semibold text-brand-muted mr-1"${_scopeId2}>(4.8)</span></div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "text-[12px] font-semibold text-brand-ink line-clamp-1 leading-tight" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "text-[10px] line-clamp-2 h-7 leading-relaxed text-brand-body font-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.description)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.description), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-1 mb-0.5" }, [
                      createVNode("div", { class: "flex items-center text-brand-ink gap-0.5" }, [
                        createVNode(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }),
                        createVNode(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }),
                        createVNode(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }),
                        createVNode(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }),
                        createVNode(unref(Star), { class: "h-2.5 w-2.5 text-brand-hairline fill-brand-hairline" })
                      ]),
                      createVNode("span", { class: "text-[9px] font-semibold text-brand-muted mr-1" }, "(4.8)")
                    ]),
                    createVNode(unref(_sfc_main$4), { class: "text-[12px] font-semibold text-brand-ink line-clamp-1 leading-tight" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$5), { class: "text-[10px] line-clamp-2 h-7 leading-relaxed text-brand-body font-medium" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.description), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$6), { class: "p-3 pt-0 mt-auto border-t border-brand-hairline bg-brand-canvas-soft flex items-center justify-between" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-[12px] font-semibold text-brand-ink"${_scopeId2}>${ssrInterpolate(__props.price)}</div>`);
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("courses.show", { slug: props.slug }),
                    class: "shrink-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), {
                          onClick: handleView,
                          variant: "ghost",
                          size: "sm",
                          class: "h-7 text-[10px] font-semibold text-brand-ink border border-brand-hairline rounded-md px-3 bg-white"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(__props.isEnrolled ? "عرض الكورس" : "التفاصيل")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(__props.isEnrolled ? "عرض الكورس" : "التفاصيل"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), {
                            onClick: handleView,
                            variant: "ghost",
                            size: "sm",
                            class: "h-7 text-[10px] font-semibold text-brand-ink border border-brand-hairline rounded-md px-3 bg-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.isEnrolled ? "عرض الكورس" : "التفاصيل"), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-[12px] font-semibold text-brand-ink" }, toDisplayString(__props.price), 1),
                    createVNode(unref(Link), {
                      href: _ctx.route("courses.show", { slug: props.slug }),
                      class: "shrink-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), {
                          onClick: handleView,
                          variant: "ghost",
                          size: "sm",
                          class: "h-7 text-[10px] font-semibold text-brand-ink border border-brand-hairline rounded-md px-3 bg-white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.isEnrolled ? "عرض الكورس" : "التفاصيل"), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "aspect-video relative bg-brand-canvas overflow-hidden border-b border-brand-hairline" }, [
                __props.thumbnail ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: __props.thumbnail,
                  alt: __props.title,
                  class: "h-full w-full object-cover"
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "h-full w-full flex items-center justify-center text-brand-muted opacity-40"
                }, [
                  createVNode(unref(PlayCircle), { class: "h-10 w-10" })
                ])),
                createVNode("div", { class: "absolute top-2 left-2 flex gap-1.5" }, [
                  createVNode(unref(_sfc_main$2), {
                    variant: "secondary",
                    class: "h-4 text-[8px] font-semibold uppercase px-2 bg-white border border-brand-hairline text-brand-ink"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.category), 1)
                    ]),
                    _: 1
                  }),
                  __props.isEnrolled ? (openBlock(), createBlock(unref(_sfc_main$2), {
                    key: 0,
                    class: "h-4 text-[8px] font-semibold uppercase px-2 bg-brand-orange text-white border border-brand-orange"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" مشترك ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ]),
              createVNode(unref(_sfc_main$3), { class: "p-3 space-y-1" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center gap-1 mb-0.5" }, [
                    createVNode("div", { class: "flex items-center text-brand-ink gap-0.5" }, [
                      createVNode(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }),
                      createVNode(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }),
                      createVNode(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }),
                      createVNode(unref(Star), { class: "h-2.5 w-2.5 fill-brand-ink text-brand-ink" }),
                      createVNode(unref(Star), { class: "h-2.5 w-2.5 text-brand-hairline fill-brand-hairline" })
                    ]),
                    createVNode("span", { class: "text-[9px] font-semibold text-brand-muted mr-1" }, "(4.8)")
                  ]),
                  createVNode(unref(_sfc_main$4), { class: "text-[12px] font-semibold text-brand-ink line-clamp-1 leading-tight" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5), { class: "text-[10px] line-clamp-2 h-7 leading-relaxed text-brand-body font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.description), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$6), { class: "p-3 pt-0 mt-auto border-t border-brand-hairline bg-brand-canvas-soft flex items-center justify-between" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-[12px] font-semibold text-brand-ink" }, toDisplayString(__props.price), 1),
                  createVNode(unref(Link), {
                    href: _ctx.route("courses.show", { slug: props.slug }),
                    class: "shrink-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$7), {
                        onClick: handleView,
                        variant: "ghost",
                        size: "sm",
                        class: "h-7 text-[10px] font-semibold text-brand-ink border border-brand-hairline rounded-md px-3 bg-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.isEnrolled ? "عرض الكورس" : "التفاصيل"), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CourseCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
