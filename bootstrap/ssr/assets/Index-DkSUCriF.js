import { ref, computed, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CtY-O8y9.js";
import { _ as _sfc_main$2 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$3 } from "./Input-Bd7d8AJ3.js";
import { _ as _sfc_main$4 } from "./Label--EucbuAp.js";
import { Plus, CheckCircle2, AlertCircle, Search, BookOpen, Calendar, Trash2, X, UserPlus, User, Mail, Lock, Loader2 } from "lucide-vue-next";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@vueuse/core";
import "radix-vue";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    teachers: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const searchQuery = ref("");
    const filteredTeachers = computed(() => {
      if (!searchQuery.value) return props.teachers;
      const query = searchQuery.value.toLowerCase();
      return props.teachers.filter(
        (teacher) => teacher.name.toLowerCase().includes(query) || teacher.email.toLowerCase().includes(query)
      );
    });
    const showAddModal = ref(false);
    const form = useForm({
      name: "",
      email: "",
      password: ""
    });
    const openModal = () => {
      form.clearErrors();
      form.reset();
      showAddModal.value = true;
    };
    const closeModal = () => {
      showAddModal.value = false;
    };
    const submit = () => {
      form.post(route("admin.teachers.store"), {
        onSuccess: () => {
          closeModal();
          form.reset();
        }
      });
    };
    const deleteForm = useForm({});
    const deleteTeacher = (teacher) => {
      if (confirm(`هل أنت متأكد من رغبتك في حذف المعلم "${teacher.name}"؟`)) {
        deleteForm.delete(route("admin.teachers.destroy", teacher.id));
      }
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "-";
      const date = new Date(dateStr);
      return date.toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` إدارة المعلمين `);
          } else {
            return [
              createTextVNode(" إدارة المعلمين ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "إدارة المعلمين - كورس" }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-6 max-w-7xl mx-auto pb-12" data-v-2b4533ed${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-100 pb-5" data-v-2b4533ed${_scopeId}><div data-v-2b4533ed${_scopeId}><h1 class="text-xl font-extrabold text-zinc-950 tracking-tight" data-v-2b4533ed${_scopeId}>قائمة المعلمين</h1><p class="text-xs text-zinc-500 mt-1 leading-relaxed" data-v-2b4533ed${_scopeId}>أضف معلمين جدد، أو تصفح واحذف المعلمين الحاليين في المنصة.</p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              onClick: openModal,
              class: "h-9 px-4 bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.98] font-bold rounded-md transition-all shadow-sm flex items-center justify-center gap-2 self-start sm:self-auto text-xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Plus), { class: "h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-2b4533ed${_scopeId2}>إضافة معلم جديد</span>`);
                } else {
                  return [
                    createVNode(unref(Plus), { class: "h-3.5 w-3.5" }),
                    createVNode("span", null, "إضافة معلم جديد")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.$page.props.flash.success) {
              _push2(`<div class="bg-zinc-50 border border-zinc-200 text-zinc-900 p-4 rounded-md flex items-start gap-3 animate-in fade-in duration-300" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(CheckCircle2), { class: "h-5 w-5 text-zinc-950 shrink-0 mt-0.5" }, null, _parent2, _scopeId));
              _push2(`<div data-v-2b4533ed${_scopeId}><h5 class="text-xs font-bold" data-v-2b4533ed${_scopeId}>تمت العملية بنجاح</h5><p class="text-[11px] text-zinc-500 mt-0.5" data-v-2b4533ed${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash.error) {
              _push2(`<div class="bg-red-50 border border-red-200 text-red-900 p-4 rounded-md flex items-start gap-3 animate-in fade-in duration-300" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(AlertCircle), { class: "h-5 w-5 text-red-600 shrink-0 mt-0.5" }, null, _parent2, _scopeId));
              _push2(`<div data-v-2b4533ed${_scopeId}><h5 class="text-xs font-bold text-red-950" data-v-2b4533ed${_scopeId}>تنبيه بالنظام</h5><p class="text-[11px] text-red-700 mt-0.5" data-v-2b4533ed${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="relative w-full max-w-sm" data-v-2b4533ed${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400" data-v-2b4533ed${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Search), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              type: "text",
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              placeholder: "ابحث عن معلم بالاسم أو البريد الإلكتروني...",
              class: "h-9 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs placeholder:text-zinc-400"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white border border-zinc-200 rounded-md shadow-sm overflow-hidden" data-v-2b4533ed${_scopeId}><div class="overflow-x-auto" data-v-2b4533ed${_scopeId}><table class="w-full text-right text-xs" data-v-2b4533ed${_scopeId}><thead class="bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-bold uppercase tracking-wider" data-v-2b4533ed${_scopeId}><tr data-v-2b4533ed${_scopeId}><th class="py-3 px-4 font-bold" data-v-2b4533ed${_scopeId}>الاسم والمعلم</th><th class="py-3 px-4 font-bold" data-v-2b4533ed${_scopeId}>البريد الإلكتروني</th><th class="py-3 px-4 font-bold" data-v-2b4533ed${_scopeId}>الكورسات المسؤولة</th><th class="py-3 px-4 font-bold" data-v-2b4533ed${_scopeId}>تاريخ الانضمام</th><th class="py-3 px-4 font-bold text-left" data-v-2b4533ed${_scopeId}>العمليات</th></tr></thead><tbody class="divide-y divide-zinc-100" data-v-2b4533ed${_scopeId}><!--[-->`);
            ssrRenderList(filteredTeachers.value, (teacher) => {
              _push2(`<tr class="hover:bg-zinc-50/50 transition-colors" data-v-2b4533ed${_scopeId}><td class="py-3.5 px-4" data-v-2b4533ed${_scopeId}><div class="flex items-center gap-3" data-v-2b4533ed${_scopeId}><div class="h-8 w-8 bg-zinc-100 text-zinc-900 rounded-md flex items-center justify-center font-black text-xs border border-zinc-200" data-v-2b4533ed${_scopeId}>${ssrInterpolate(teacher.name.charAt(0))}</div><div class="font-bold text-zinc-900 text-xs" data-v-2b4533ed${_scopeId}>${ssrInterpolate(teacher.name)}</div></div></td><td class="py-3.5 px-4 text-zinc-500 font-mono text-[11px]" data-v-2b4533ed${_scopeId}>${ssrInterpolate(teacher.email)}</td><td class="py-3.5 px-4 text-zinc-900 font-semibold" data-v-2b4533ed${_scopeId}><div class="flex items-center gap-1.5" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(BookOpen), { class: "h-3.5 w-3.5 text-zinc-400" }, null, _parent2, _scopeId));
              _push2(`<span data-v-2b4533ed${_scopeId}>${ssrInterpolate(teacher.taught_courses_count || 0)} كورس</span></div></td><td class="py-3.5 px-4 text-zinc-500 text-[11px]" data-v-2b4533ed${_scopeId}><div class="flex items-center gap-1.5" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Calendar), { class: "h-3.5 w-3.5 text-zinc-400" }, null, _parent2, _scopeId));
              _push2(`<span data-v-2b4533ed${_scopeId}>${ssrInterpolate(formatDate(teacher.created_at))}</span></div></td><td class="py-3.5 px-4 text-left" data-v-2b4533ed${_scopeId}><button class="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded transition-all inline-flex items-center justify-center" title="حذف المعلم" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</button></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (filteredTeachers.value.length === 0) {
              _push2(`<tr data-v-2b4533ed${_scopeId}><td colspan="5" class="py-12 text-center text-zinc-400 text-xs" data-v-2b4533ed${_scopeId}> لا يوجد معلمون يطابقون خيارات البحث. </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div>`);
            if (showAddModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm animate-in fade-in duration-300" data-v-2b4533ed${_scopeId}><div class="w-full max-w-md bg-white border border-zinc-200 rounded-md shadow-lg p-6 relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 ease-out" data-v-2b4533ed${_scopeId}><button class="absolute top-4 left-4 p-1.5 text-zinc-400 hover:text-zinc-950 hover:bg-zinc-50 rounded transition-all" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</button><div class="mb-6" data-v-2b4533ed${_scopeId}><h3 class="text-sm font-extrabold text-zinc-950 flex items-center gap-2" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(UserPlus), { class: "h-4 w-4 text-zinc-900" }, null, _parent2, _scopeId));
              _push2(`<span data-v-2b4533ed${_scopeId}>إضافة معلم جديد للمنصة</span></h3><p class="text-[11px] text-zinc-500 mt-1" data-v-2b4533ed${_scopeId}>أدخل بيانات المعلم لإنشاء حساب مستقل بصلاحيات كاملة.</p></div><form class="space-y-4" data-v-2b4533ed${_scopeId}><div class="space-y-1.5" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                for: "name",
                class: "text-zinc-700 font-bold text-[10px] uppercase tracking-wider"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`اسم المعلم`);
                  } else {
                    return [
                      createTextVNode("اسم المعلم")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="relative group" data-v-2b4533ed${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(User), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</span>`);
              _push2(ssrRenderComponent(unref(_sfc_main$3), {
                id: "name",
                type: "text",
                class: "h-10 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs",
                modelValue: unref(form).name,
                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                required: "",
                placeholder: "مثال: أحمد البشير"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(form).errors.name) {
                _push2(`<div class="text-[10px] font-bold text-red-600 flex items-center gap-1 mt-1" data-v-2b4533ed${_scopeId}>`);
                _push2(ssrRenderComponent(unref(AlertCircle), { class: "h-3 w-3 shrink-0" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(unref(form).errors.name)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-1.5" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                for: "email",
                class: "text-zinc-700 font-bold text-[10px] uppercase tracking-wider"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`البريد الإلكتروني`);
                  } else {
                    return [
                      createTextVNode("البريد الإلكتروني")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="relative group" data-v-2b4533ed${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Mail), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</span>`);
              _push2(ssrRenderComponent(unref(_sfc_main$3), {
                id: "email",
                type: "email",
                class: "h-10 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs",
                modelValue: unref(form).email,
                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                required: "",
                placeholder: "name@example.com"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(form).errors.email) {
                _push2(`<div class="text-[10px] font-bold text-red-600 flex items-center gap-1 mt-1" data-v-2b4533ed${_scopeId}>`);
                _push2(ssrRenderComponent(unref(AlertCircle), { class: "h-3 w-3 shrink-0" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(unref(form).errors.email)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-1.5" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                for: "password",
                class: "text-zinc-700 font-bold text-[10px] uppercase tracking-wider"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`كلمة المرور المؤقتة`);
                  } else {
                    return [
                      createTextVNode("كلمة المرور المؤقتة")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="relative group" data-v-2b4533ed${_scopeId}><span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors" data-v-2b4533ed${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Lock), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</span>`);
              _push2(ssrRenderComponent(unref(_sfc_main$3), {
                id: "password",
                type: "password",
                class: "h-10 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs",
                modelValue: unref(form).password,
                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                required: "",
                placeholder: "••••••••"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(form).errors.password) {
                _push2(`<div class="text-[10px] font-bold text-red-600 flex items-center gap-1 mt-1" data-v-2b4533ed${_scopeId}>`);
                _push2(ssrRenderComponent(unref(AlertCircle), { class: "h-3 w-3 shrink-0" }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(unref(form).errors.password)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                type: "submit",
                class: "w-full h-10 bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.98] font-bold rounded-md transition-all shadow-sm flex items-center justify-center gap-2 mt-4 text-xs",
                disabled: unref(form).processing
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(form).processing) {
                      _push3(ssrRenderComponent(unref(Loader2), { class: "h-3.5 w-3.5 animate-spin" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<span data-v-2b4533ed${_scopeId2}>إنشاء حساب المعلم</span>`);
                  } else {
                    return [
                      unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                        key: 0,
                        class: "h-3.5 w-3.5 animate-spin"
                      })) : createCommentVNode("", true),
                      createVNode("span", null, "إنشاء حساب المعلم")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Head), { title: "إدارة المعلمين - كورس" }),
              createVNode("div", { class: "space-y-6 max-w-7xl mx-auto pb-12" }, [
                createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-100 pb-5" }, [
                  createVNode("div", null, [
                    createVNode("h1", { class: "text-xl font-extrabold text-zinc-950 tracking-tight" }, "قائمة المعلمين"),
                    createVNode("p", { class: "text-xs text-zinc-500 mt-1 leading-relaxed" }, "أضف معلمين جدد، أو تصفح واحذف المعلمين الحاليين في المنصة.")
                  ]),
                  createVNode(unref(_sfc_main$2), {
                    onClick: openModal,
                    class: "h-9 px-4 bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.98] font-bold rounded-md transition-all shadow-sm flex items-center justify-center gap-2 self-start sm:self-auto text-xs"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Plus), { class: "h-3.5 w-3.5" }),
                      createVNode("span", null, "إضافة معلم جديد")
                    ]),
                    _: 1
                  })
                ]),
                _ctx.$page.props.flash.success ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "bg-zinc-50 border border-zinc-200 text-zinc-900 p-4 rounded-md flex items-start gap-3 animate-in fade-in duration-300"
                }, [
                  createVNode(unref(CheckCircle2), { class: "h-5 w-5 text-zinc-950 shrink-0 mt-0.5" }),
                  createVNode("div", null, [
                    createVNode("h5", { class: "text-xs font-bold" }, "تمت العملية بنجاح"),
                    createVNode("p", { class: "text-[11px] text-zinc-500 mt-0.5" }, toDisplayString(_ctx.$page.props.flash.success), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.$page.props.flash.error ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "bg-red-50 border border-red-200 text-red-900 p-4 rounded-md flex items-start gap-3 animate-in fade-in duration-300"
                }, [
                  createVNode(unref(AlertCircle), { class: "h-5 w-5 text-red-600 shrink-0 mt-0.5" }),
                  createVNode("div", null, [
                    createVNode("h5", { class: "text-xs font-bold text-red-950" }, "تنبيه بالنظام"),
                    createVNode("p", { class: "text-[11px] text-red-700 mt-0.5" }, toDisplayString(_ctx.$page.props.flash.error), 1)
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "relative w-full max-w-sm" }, [
                  createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400" }, [
                    createVNode(unref(Search), { class: "h-4 w-4" })
                  ]),
                  createVNode(unref(_sfc_main$3), {
                    type: "text",
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                    placeholder: "ابحث عن معلم بالاسم أو البريد الإلكتروني...",
                    class: "h-9 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs placeholder:text-zinc-400"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "bg-white border border-zinc-200 rounded-md shadow-sm overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "w-full text-right text-xs" }, [
                      createVNode("thead", { class: "bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-bold uppercase tracking-wider" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "py-3 px-4 font-bold" }, "الاسم والمعلم"),
                          createVNode("th", { class: "py-3 px-4 font-bold" }, "البريد الإلكتروني"),
                          createVNode("th", { class: "py-3 px-4 font-bold" }, "الكورسات المسؤولة"),
                          createVNode("th", { class: "py-3 px-4 font-bold" }, "تاريخ الانضمام"),
                          createVNode("th", { class: "py-3 px-4 font-bold text-left" }, "العمليات")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-zinc-100" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredTeachers.value, (teacher) => {
                          return openBlock(), createBlock("tr", {
                            key: teacher.id,
                            class: "hover:bg-zinc-50/50 transition-colors"
                          }, [
                            createVNode("td", { class: "py-3.5 px-4" }, [
                              createVNode("div", { class: "flex items-center gap-3" }, [
                                createVNode("div", { class: "h-8 w-8 bg-zinc-100 text-zinc-900 rounded-md flex items-center justify-center font-black text-xs border border-zinc-200" }, toDisplayString(teacher.name.charAt(0)), 1),
                                createVNode("div", { class: "font-bold text-zinc-900 text-xs" }, toDisplayString(teacher.name), 1)
                              ])
                            ]),
                            createVNode("td", { class: "py-3.5 px-4 text-zinc-500 font-mono text-[11px]" }, toDisplayString(teacher.email), 1),
                            createVNode("td", { class: "py-3.5 px-4 text-zinc-900 font-semibold" }, [
                              createVNode("div", { class: "flex items-center gap-1.5" }, [
                                createVNode(unref(BookOpen), { class: "h-3.5 w-3.5 text-zinc-400" }),
                                createVNode("span", null, toDisplayString(teacher.taught_courses_count || 0) + " كورس", 1)
                              ])
                            ]),
                            createVNode("td", { class: "py-3.5 px-4 text-zinc-500 text-[11px]" }, [
                              createVNode("div", { class: "flex items-center gap-1.5" }, [
                                createVNode(unref(Calendar), { class: "h-3.5 w-3.5 text-zinc-400" }),
                                createVNode("span", null, toDisplayString(formatDate(teacher.created_at)), 1)
                              ])
                            ]),
                            createVNode("td", { class: "py-3.5 px-4 text-left" }, [
                              createVNode("button", {
                                onClick: ($event) => deleteTeacher(teacher),
                                class: "p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded transition-all inline-flex items-center justify-center",
                                title: "حذف المعلم"
                              }, [
                                createVNode(unref(Trash2), { class: "h-4 w-4" })
                              ], 8, ["onClick"])
                            ])
                          ]);
                        }), 128)),
                        filteredTeachers.value.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "5",
                            class: "py-12 text-center text-zinc-400 text-xs"
                          }, " لا يوجد معلمون يطابقون خيارات البحث. ")
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ])
              ]),
              showAddModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm animate-in fade-in duration-300",
                onClick: withModifiers(closeModal, ["self"])
              }, [
                createVNode("div", { class: "w-full max-w-md bg-white border border-zinc-200 rounded-md shadow-lg p-6 relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 ease-out" }, [
                  createVNode("button", {
                    onClick: closeModal,
                    class: "absolute top-4 left-4 p-1.5 text-zinc-400 hover:text-zinc-950 hover:bg-zinc-50 rounded transition-all"
                  }, [
                    createVNode(unref(X), { class: "h-4 w-4" })
                  ]),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("h3", { class: "text-sm font-extrabold text-zinc-950 flex items-center gap-2" }, [
                      createVNode(unref(UserPlus), { class: "h-4 w-4 text-zinc-900" }),
                      createVNode("span", null, "إضافة معلم جديد للمنصة")
                    ]),
                    createVNode("p", { class: "text-[11px] text-zinc-500 mt-1" }, "أدخل بيانات المعلم لإنشاء حساب مستقل بصلاحيات كاملة.")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "space-y-4"
                  }, [
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode(unref(_sfc_main$4), {
                        for: "name",
                        class: "text-zinc-700 font-bold text-[10px] uppercase tracking-wider"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("اسم المعلم")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "relative group" }, [
                        createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors" }, [
                          createVNode(unref(User), { class: "h-4 w-4" })
                        ]),
                        createVNode(unref(_sfc_main$3), {
                          id: "name",
                          type: "text",
                          class: "h-10 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          required: "",
                          placeholder: "مثال: أحمد البشير"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      unref(form).errors.name ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-[10px] font-bold text-red-600 flex items-center gap-1 mt-1"
                      }, [
                        createVNode(unref(AlertCircle), { class: "h-3 w-3 shrink-0" }),
                        createTextVNode(" " + toDisplayString(unref(form).errors.name), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode(unref(_sfc_main$4), {
                        for: "email",
                        class: "text-zinc-700 font-bold text-[10px] uppercase tracking-wider"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("البريد الإلكتروني")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "relative group" }, [
                        createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors" }, [
                          createVNode(unref(Mail), { class: "h-4 w-4" })
                        ]),
                        createVNode(unref(_sfc_main$3), {
                          id: "email",
                          type: "email",
                          class: "h-10 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          required: "",
                          placeholder: "name@example.com"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      unref(form).errors.email ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-[10px] font-bold text-red-600 flex items-center gap-1 mt-1"
                      }, [
                        createVNode(unref(AlertCircle), { class: "h-3 w-3 shrink-0" }),
                        createTextVNode(" " + toDisplayString(unref(form).errors.email), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode(unref(_sfc_main$4), {
                        for: "password",
                        class: "text-zinc-700 font-bold text-[10px] uppercase tracking-wider"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("كلمة المرور المؤقتة")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "relative group" }, [
                        createVNode("span", { class: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 transition-colors" }, [
                          createVNode(unref(Lock), { class: "h-4 w-4" })
                        ]),
                        createVNode(unref(_sfc_main$3), {
                          id: "password",
                          type: "password",
                          class: "h-10 pr-9 pl-4 border-zinc-200 bg-zinc-50/30 hover:bg-zinc-50 focus:bg-white focus:border-zinc-950 focus-visible:ring-0 transition-all rounded-md text-xs",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          required: "",
                          placeholder: "••••••••"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      unref(form).errors.password ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-[10px] font-bold text-red-600 flex items-center gap-1 mt-1"
                      }, [
                        createVNode(unref(AlertCircle), { class: "h-3 w-3 shrink-0" }),
                        createTextVNode(" " + toDisplayString(unref(form).errors.password), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(unref(_sfc_main$2), {
                      type: "submit",
                      class: "w-full h-10 bg-zinc-950 text-white hover:bg-zinc-900 active:scale-[0.98] font-bold rounded-md transition-all shadow-sm flex items-center justify-center gap-2 mt-4 text-xs",
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        unref(form).processing ? (openBlock(), createBlock(unref(Loader2), {
                          key: 0,
                          class: "h-3.5 w-3.5 animate-spin"
                        })) : createCommentVNode("", true),
                        createVNode("span", null, "إنشاء حساب المعلم")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ], 32)
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Teachers/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b4533ed"]]);
export {
  Index as default
};
