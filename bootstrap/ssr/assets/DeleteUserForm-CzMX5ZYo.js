import { ref, watch, onMounted, onUnmounted, computed, mergeProps, useSSRContext, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, withKeys, toDisplayString, createCommentVNode, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$4 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$3 } from "./Label--EucbuAp.js";
import { UserX, AlertTriangle, X, Loader2 } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "radix-vue";
const _sfc_main$1 = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dialog = ref();
    const showSlot = ref(props.show);
    watch(
      () => props.show,
      () => {
        var _a;
        if (props.show) {
          document.body.style.overflow = "hidden";
          showSlot.value = true;
          (_a = dialog.value) == null ? void 0 : _a.showModal();
        } else {
          document.body.style.overflow = "";
          setTimeout(() => {
            var _a2;
            (_a2 = dialog.value) == null ? void 0 : _a2.close();
            showSlot.value = false;
          }, 200);
        }
      }
    );
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        if (props.show) {
          close();
        }
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        class: "z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",
        ref_key: "dialog",
        ref: dialog
      }, _attrs))}><div class="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0" scroll-region><div class="fixed inset-0 transform transition-all" style="${ssrRenderStyle(__props.show ? null : { display: "none" })}"><div class="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-900"></div></div><div class="${ssrRenderClass([maxWidthClass.value, "mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800"])}" style="${ssrRenderStyle(__props.show ? null : { display: "none" })}">`);
      if (showSlot.value) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></dialog>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      nextTick(() => passwordInput.value.focus());
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.clearErrors();
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-col md:flex-row items-center justify-between gap-6"><div class="space-y-1 text-right"><h3 class="text-[13px] font-normal text-[var(--destructive)] uppercase tracking-tight">حذف الحساب نهائياً</h3><p class="text-[11px] text-[var(--muted-foreground)] font-normal leading-relaxed max-w-lg"> بمجرد حذف حسابك، سيتم حذف جميع الموارد والبيانات المرتبطة به بشكل دائم. يرجى التأكد من تحميل أي بيانات ترغب في الاحتفاظ بها قبل المتابعة. </p></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), {
        variant: "destructive",
        onClick: confirmUserDeletion,
        class: "h-8 text-[11px] font-normal px-4 rounded-md border border-[var(--destructive)] bg-[var(--destructive)] text-[var(--destructive-foreground)] shadow-none shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UserX), { class: "ml-1.5 h-3.5 w-3.5 opacity-60" }, null, _parent2, _scopeId));
            _push2(` حذف الحساب `);
          } else {
            return [
              createVNode(unref(UserX), { class: "ml-1.5 h-3.5 w-3.5 opacity-60" }),
              createTextVNode(" حذف الحساب ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        show: confirmingUserDeletion.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 bg-[var(--card)] rounded-md border border-[var(--border)] overflow-hidden relative shadow-none"${_scopeId}><div class="absolute top-0 left-0 w-full h-1 bg-[var(--destructive)]"${_scopeId}></div><div class="flex items-center gap-3 mb-6 border-b border-[var(--border)] pb-4"${_scopeId}><div class="h-10 w-10 rounded-md bg-[var(--background)] text-[var(--destructive)] flex items-center justify-center border border-[var(--border)]"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(AlertTriangle), { class: "h-5 w-5" }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h2 class="text-[14px] font-normal text-[var(--foreground)] uppercase tracking-tight"${_scopeId}>هل أنت متأكد من حذف الحساب؟</h2><p class="text-[10px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest mt-0.5"${_scopeId}>لا يمكن التراجع عن هذا الإجراء</p></div></div><p class="text-[12px] text-[var(--muted-foreground)] font-normal leading-relaxed mb-6"${_scopeId}> بمجرد حذف الحساب، سيتم مسح كافة بياناتك وتفاعلاتك من المنصة بشكل نهائي. يرجى إدخال كلمة المرور الخاصة بك لتأكيد طلب الحذف. </p><div class="space-y-2 mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              for: "password",
              class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`كلمة المرور للتأكيد`);
                } else {
                  return [
                    createTextVNode("كلمة المرور للتأكيد")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "h-10 text-[12px] font-normal border-[var(--border)] bg-[var(--background)] rounded-md focus:ring-1 focus:ring-[var(--destructive)]",
              placeholder: "••••••••",
              onKeyup: deleteUser
            }, null, _parent2, _scopeId));
            if (unref(form).errors.password) {
              _push2(`<div class="text-[10px] text-[var(--destructive)] font-normal"${_scopeId}>${ssrInterpolate(unref(form).errors.password)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              variant: "ghost",
              onClick: closeModal,
              class: "h-9 text-[11px] font-normal px-4 rounded-md border border-[var(--border)] bg-transparent text-[var(--muted-foreground)] hover:none transition-none shadow-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(X), { class: "ml-1.5 h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                  _push3(` إلغاء `);
                } else {
                  return [
                    createVNode(unref(X), { class: "ml-1.5 h-3.5 w-3.5" }),
                    createTextVNode(" إلغاء ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              variant: "destructive",
              disabled: unref(form).processing,
              onClick: deleteUser,
              class: "h-9 text-[11px] font-normal px-6 rounded-md border border-[var(--destructive)] bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:none transition-none shadow-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(form).processing) {
                    _push3(ssrRenderComponent(unref(Loader2), { class: "ml-1.5 h-3.5 w-3.5 animate-spin" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(UserX), { class: "ml-1.5 h-3.5 w-3.5 opacity-60" }, null, _parent3, _scopeId2));
                  }
                  _push3(` حذف نهائي `);
                } else {
                  return [
                    unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                      key: 0,
                      class: "ml-1.5 h-3.5 w-3.5 animate-spin"
                    })) : (openBlock(), createBlock(unref(UserX), {
                      key: 1,
                      class: "ml-1.5 h-3.5 w-3.5 opacity-60"
                    })),
                    createTextVNode(" حذف نهائي ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 bg-[var(--card)] rounded-md border border-[var(--border)] overflow-hidden relative shadow-none" }, [
                createVNode("div", { class: "absolute top-0 left-0 w-full h-1 bg-[var(--destructive)]" }),
                createVNode("div", { class: "flex items-center gap-3 mb-6 border-b border-[var(--border)] pb-4" }, [
                  createVNode("div", { class: "h-10 w-10 rounded-md bg-[var(--background)] text-[var(--destructive)] flex items-center justify-center border border-[var(--border)]" }, [
                    createVNode(unref(AlertTriangle), { class: "h-5 w-5" })
                  ]),
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-[14px] font-normal text-[var(--foreground)] uppercase tracking-tight" }, "هل أنت متأكد من حذف الحساب؟"),
                    createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest mt-0.5" }, "لا يمكن التراجع عن هذا الإجراء")
                  ])
                ]),
                createVNode("p", { class: "text-[12px] text-[var(--muted-foreground)] font-normal leading-relaxed mb-6" }, " بمجرد حذف الحساب، سيتم مسح كافة بياناتك وتفاعلاتك من المنصة بشكل نهائي. يرجى إدخال كلمة المرور الخاصة بك لتأكيد طلب الحذف. "),
                createVNode("div", { class: "space-y-2 mb-8" }, [
                  createVNode(unref(_sfc_main$3), {
                    for: "password",
                    class: "text-[11px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("كلمة المرور للتأكيد")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$4), {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "h-10 text-[12px] font-normal border-[var(--border)] bg-[var(--background)] rounded-md focus:ring-1 focus:ring-[var(--destructive)]",
                    placeholder: "••••••••",
                    onKeyup: withKeys(deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  unref(form).errors.password ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-[10px] text-[var(--destructive)] font-normal"
                  }, toDisplayString(unref(form).errors.password), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                  createVNode(unref(_sfc_main$2), {
                    variant: "ghost",
                    onClick: closeModal,
                    class: "h-9 text-[11px] font-normal px-4 rounded-md border border-[var(--border)] bg-transparent text-[var(--muted-foreground)] hover:none transition-none shadow-none"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(X), { class: "ml-1.5 h-3.5 w-3.5" }),
                      createTextVNode(" إلغاء ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$2), {
                    variant: "destructive",
                    disabled: unref(form).processing,
                    onClick: deleteUser,
                    class: "h-9 text-[11px] font-normal px-6 rounded-md border border-[var(--destructive)] bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:none transition-none shadow-none"
                  }, {
                    default: withCtx(() => [
                      unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                        key: 0,
                        class: "ml-1.5 h-3.5 w-3.5 animate-spin"
                      })) : (openBlock(), createBlock(unref(UserX), {
                        key: 1,
                        class: "ml-1.5 h-3.5 w-3.5 opacity-60"
                      })),
                      createTextVNode(" حذف نهائي ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
