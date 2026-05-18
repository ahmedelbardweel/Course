import { unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { reactiveOmit } from "@vueuse/core";
import { Separator } from "reka-ui";
import { c as cn } from "./utils-H80jjgLf.js";
const _sfc_main = {
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    orientation: { type: String, required: false, default: "horizontal" },
    decorative: { type: Boolean, required: false, default: true },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: {
      type: [Boolean, null, String, Object, Array],
      required: false,
      skipCheck: true
    }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator), mergeProps(unref(delegatedProps), {
        class: unref(cn)(
          "shrink-0 bg-border",
          props.orientation === "horizontal" ? "h-px w-full" : "w-px h-full",
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/separator/Separator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
