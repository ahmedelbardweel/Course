import { mergeProps, unref, useSSRContext, ref, computed, watch, onMounted, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, withDirectives, withKeys, vModelText } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { useForm, Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AuthenticatedLayout-Cd85X56I.js";
import { _ as _sfc_main$5 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$6 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$3 } from "./index-CGK-4kfq.js";
import { useVModel } from "@vueuse/core";
import { _ as _sfc_main$4 } from "./Separator-CFmMgQM_.js";
import axios from "axios";
import { Loader2, Clock, BookOpen, Award, ArrowUpRight, Play, PlayCircle, Lock, Briefcase, Sparkles, CheckCircle2, X, Trash2, Check, BrainCircuit, Send } from "lucide-vue-next";
import "class-variance-authority";
import "reka-ui";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const _sfc_main$1 = {
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: [String, Number], default: "" },
    class: { type: null, default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = useVModel(props, "modelValue", emit);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        class: "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " + props.class
      }, _attrs), "textarea")}>${ssrInterpolate(unref(value))}</textarea>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ui/textarea/Textarea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    course: Object,
    currentLesson: Object,
    isEnrolled: Boolean,
    completedLessonsIds: Array
  },
  setup(__props) {
    const props = __props;
    const isTogglingComplete = ref(false);
    const isLessonCompleted = computed(() => {
      var _a;
      return props.currentLesson && ((_a = props.completedLessonsIds) == null ? void 0 : _a.includes(props.currentLesson.id));
    });
    const toggleComplete = () => {
      var _a;
      if (!((_a = props.currentLesson) == null ? void 0 : _a.id)) return;
      isTogglingComplete.value = true;
      router.post(route("lessons.complete", props.currentLesson.id), {}, {
        preserveScroll: true,
        preserveState: true,
        onFinish: () => isTogglingComplete.value = false
      });
    };
    const activeTab = ref("overview");
    const notes = ref([]);
    const newNote = ref("");
    const isSavingNote = ref(false);
    const isFetchingNotes = ref(false);
    const fetchNotes = async () => {
      if (!props.currentLesson) return;
      isFetchingNotes.value = true;
      try {
        const res = await axios.get(route("notes.index", props.currentLesson.id));
        notes.value = res.data;
      } finally {
        isFetchingNotes.value = false;
      }
    };
    const saveNote = async () => {
      if (!newNote.value.trim() || isSavingNote.value) return;
      isSavingNote.value = true;
      try {
        const res = await axios.post(route("notes.store", props.currentLesson.id), {
          content: newNote.value,
          timestamp: 0
        });
        notes.value.unshift(res.data);
        newNote.value = "";
      } catch (e) {
        alert("حدث خطأ أثناء حفظ الملاحظة.");
      } finally {
        isSavingNote.value = false;
      }
    };
    const deleteNote = async (id) => {
      if (!confirm("هل أنت متأكد من حذف هذه الملاحظة؟")) return;
      try {
        await axios.delete(route("notes.destroy", id));
        notes.value = notes.value.filter((n) => n.id !== id);
      } catch (e) {
        alert("حدث خطأ أثناء الحذف.");
      }
    };
    const isSummarizing = ref(false);
    const summaryResult = ref(null);
    const summaryIsSaved = ref(false);
    const loadSavedSummary = async () => {
      var _a;
      if (!((_a = props.currentLesson) == null ? void 0 : _a.id)) return;
      try {
        const res = await axios.get(route("ai.summary.get"), { params: { lesson_id: props.currentLesson.id } });
        if (res.data.summary) {
          summaryResult.value = res.data.summary;
          summaryIsSaved.value = true;
        } else {
          summaryResult.value = null;
          summaryIsSaved.value = false;
        }
      } catch (e) {
      }
    };
    const summarizeLesson = async () => {
      var _a;
      if (!((_a = props.currentLesson) == null ? void 0 : _a.id)) return;
      isSummarizing.value = true;
      summaryResult.value = null;
      summaryIsSaved.value = false;
      try {
        const response = await axios.post(route("ai.summarize"), { lesson_id: props.currentLesson.id });
        summaryResult.value = response.data.summary;
        summaryIsSaved.value = true;
      } catch (error) {
        alert("حدث خطأ أثناء التلخيص.");
      } finally {
        isSummarizing.value = false;
      }
    };
    const clearSummary = () => {
      summaryResult.value = null;
      summaryIsSaved.value = false;
    };
    watch(() => {
      var _a;
      return (_a = props.currentLesson) == null ? void 0 : _a.id;
    }, () => {
      summaryResult.value = null;
      summaryIsSaved.value = false;
      loadSavedSummary();
    });
    const challengeForm = useForm({});
    const participateInChallenge = (challengeId) => {
      challengeForm.post(route("challenges.participate", challengeId), {
        preserveScroll: true
      });
    };
    const showInterviewModal = ref(false);
    const interviewHistory = ref([]);
    const isInterviewing = ref(false);
    const interviewInput = ref("");
    const startInterview = async () => {
      var _a;
      showInterviewModal.value = true;
      interviewHistory.value = [];
      isInterviewing.value = true;
      try {
        const response = await axios.post(route("ai.interview"), {
          course_id: (_a = props.course) == null ? void 0 : _a.id,
          chat_history: [],
          user_answer: ""
        });
        interviewHistory.value.push({ role: "bot", content: response.data.reply });
      } catch (error) {
        alert("حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.");
      } finally {
        isInterviewing.value = false;
      }
    };
    const sendInterviewAnswer = async () => {
      var _a;
      if (!interviewInput.value.trim() || isInterviewing.value) return;
      const userAns = interviewInput.value;
      interviewHistory.value.push({ role: "user", content: userAns });
      interviewInput.value = "";
      isInterviewing.value = true;
      try {
        const response = await axios.post(route("ai.interview"), {
          course_id: (_a = props.course) == null ? void 0 : _a.id,
          chat_history: interviewHistory.value.slice(0, -1),
          user_answer: userAns
        });
        interviewHistory.value.push({ role: "bot", content: response.data.reply });
      } catch (error) {
        alert("حدث خطأ. يرجى المحاولة لاحقاً.");
      } finally {
        isInterviewing.value = false;
      }
    };
    onMounted(() => {
      if (props.isEnrolled && props.currentLesson) {
        fetchNotes();
        loadSavedSummary();
      }
    });
    const totalDuration = computed(() => {
      var _a, _b;
      return (((_b = (_a = props.course) == null ? void 0 : _a.lessons) == null ? void 0 : _b.length) || 0) * 15;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: ((_a = __props.course) == null ? void 0 : _a.title) || "الكورس"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        breadcrumbs: [
          { label: "الرئيسية", url: _ctx.route("dashboard") },
          { label: "الدورات", url: _ctx.route("courses.index") },
          { label: ((_b = __props.course) == null ? void 0 : _b.title) || "الدورة" }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            if (!__props.course) {
              _push2(`<div class="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-[var(--muted-foreground)]" data-v-698733f9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Loader2), { class: "h-6 w-6 animate-spin" }, null, _parent2, _scopeId));
              _push2(`<p class="font-normal text-sm" data-v-698733f9${_scopeId}>جاري تحميل البيانات...</p></div>`);
            } else if (!__props.isEnrolled) {
              _push2(`<div class="w-full max-w-5xl mx-auto p-4 md:p-8 space-y-8 bg-[var(--card)] border border-[var(--border)] rounded-md mt-4 shadow-none" data-v-698733f9${_scopeId}><div class="flex flex-col md:flex-row gap-8 items-start" data-v-698733f9${_scopeId}><div class="flex-1 space-y-6" data-v-698733f9${_scopeId}><div data-v-698733f9${_scopeId}>`);
              if (__props.course.category) {
                _push2(ssrRenderComponent(unref(_sfc_main$3), {
                  variant: "secondary",
                  class: "mb-4 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)] rounded shadow-none"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(__props.course.category.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(__props.course.category.name), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<h1 class="text-3xl font-normal tracking-tight text-[var(--foreground)]" data-v-698733f9${_scopeId}>${ssrInterpolate(__props.course.title)}</h1><p class="text-xs text-[var(--muted-foreground)] mt-4 leading-relaxed" data-v-698733f9${_scopeId}>${ssrInterpolate(__props.course.description)}</p></div><div class="flex flex-wrap items-center gap-4 text-[11px] text-[var(--muted-foreground)] font-normal" data-v-698733f9${_scopeId}><div class="flex items-center gap-1.5" data-v-698733f9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Clock), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`<span data-v-698733f9${_scopeId}>${ssrInterpolate(totalDuration.value)} دقيقة</span></div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                orientation: "vertical",
                class: "h-4"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1.5" data-v-698733f9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(BookOpen), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`<span data-v-698733f9${_scopeId}>${ssrInterpolate(((_a2 = __props.course.lessons) == null ? void 0 : _a2.length) || 0)} درس</span></div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                orientation: "vertical",
                class: "h-4"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1.5" data-v-698733f9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Award), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`<span data-v-698733f9${_scopeId}>${ssrInterpolate(__props.course.level || "جميع المستويات")}</span></div></div><div class="pt-4" data-v-698733f9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("courses.checkout", __props.course.slug)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      size: "lg",
                      class: "w-full md:w-auto font-normal bg-[var(--primary)] text-white rounded-md shadow-none text-xs h-10 border-none"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` اشترك الآن `);
                          _push4(ssrRenderComponent(unref(ArrowUpRight), { class: "ms-2 h-4 w-4" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createTextVNode(" اشترك الآن "),
                            createVNode(unref(ArrowUpRight), { class: "ms-2 h-4 w-4" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$5), {
                        size: "lg",
                        class: "w-full md:w-auto font-normal bg-[var(--primary)] text-white rounded-md shadow-none text-xs h-10 border-none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" اشترك الآن "),
                          createVNode(unref(ArrowUpRight), { class: "ms-2 h-4 w-4" })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="w-full md:w-1/2" data-v-698733f9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$6), { class: "overflow-hidden border border-[var(--border)] shadow-none aspect-video relative flex items-center justify-center bg-[var(--muted)] rounded-md" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (__props.course.thumbnail) {
                      _push3(`<img${ssrRenderAttr("src", __props.course.thumbnail)} class="absolute inset-0 w-full h-full object-cover" data-v-698733f9${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="relative z-10 h-11 w-11 bg-[var(--card)] border border-[var(--border)] rounded-md flex items-center justify-center shadow-none" data-v-698733f9${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Play), { class: "h-4 w-4 text-[var(--primary)] ms-0.5" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      __props.course.thumbnail ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: __props.course.thumbnail,
                        class: "absolute inset-0 w-full h-full object-cover"
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative z-10 h-11 w-11 bg-[var(--card)] border border-[var(--border)] rounded-md flex items-center justify-center shadow-none" }, [
                        createVNode(unref(Play), { class: "h-4 w-4 text-[var(--primary)] ms-0.5" })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="space-y-6 pt-8 border-t border-[var(--border)]" data-v-698733f9${_scopeId}><div data-v-698733f9${_scopeId}><h2 class="text-base font-normal tracking-tight mb-1 text-[var(--foreground)]" data-v-698733f9${_scopeId}>منهج الدورة</h2><p class="text-xs text-[var(--muted-foreground)]" data-v-698733f9${_scopeId}>تعرف على المحتوى الذي ستدرسه في هذه الدورة.</p></div><div class="grid gap-3" data-v-698733f9${_scopeId}><!--[-->`);
              ssrRenderList(__props.course.lessons, (lesson, index) => {
                _push2(ssrRenderComponent(unref(_sfc_main$6), {
                  key: lesson.id,
                  class: "p-3 flex items-center justify-between shadow-none border border-[var(--border)] rounded-md bg-[var(--card)]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center gap-4" data-v-698733f9${_scopeId2}><span class="text-xs font-normal text-[var(--muted-foreground)] w-6" data-v-698733f9${_scopeId2}>${ssrInterpolate(index + 1)}</span><div class="flex flex-col" data-v-698733f9${_scopeId2}><span class="font-normal text-xs text-[var(--foreground)]" data-v-698733f9${_scopeId2}>${ssrInterpolate(lesson.title)}</span><span class="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1 mt-1" data-v-698733f9${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(PlayCircle), { class: "h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                      _push3(` مسجل </span></div></div>`);
                      _push3(ssrRenderComponent(unref(Lock), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center gap-4" }, [
                          createVNode("span", { class: "text-xs font-normal text-[var(--muted-foreground)] w-6" }, toDisplayString(index + 1), 1),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "font-normal text-xs text-[var(--foreground)]" }, toDisplayString(lesson.title), 1),
                            createVNode("span", { class: "text-[10px] text-[var(--muted-foreground)] flex items-center gap-1 mt-1" }, [
                              createVNode(unref(PlayCircle), { class: "h-3.5 w-3.5" }),
                              createTextVNode(" مسجل ")
                            ])
                          ])
                        ]),
                        createVNode(unref(Lock), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              _push2(`<div class="max-w-7xl mx-auto p-4 md:p-6" data-v-698733f9${_scopeId}><div class="flex flex-col lg:flex-row gap-6 items-start" data-v-698733f9${_scopeId}><div class="flex-1 min-w-0 space-y-6 w-full order-2 lg:order-1" data-v-698733f9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$6), { class: "overflow-hidden shadow-none border border-[var(--border)] bg-black rounded-md" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative w-full aspect-video" data-v-698733f9${_scopeId2}>`);
                    if (__props.currentLesson) {
                      _push3(`<iframe${ssrRenderAttr("src", __props.currentLesson.video_url)} class="absolute inset-0 w-full h-full border-0" allowfullscreen data-v-698733f9${_scopeId2}></iframe>`);
                    } else {
                      _push3(`<div class="absolute inset-0 flex items-center justify-center text-white/50 flex-col gap-2" data-v-698733f9${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(PlayCircle), { class: "h-10 w-10 opacity-50" }, null, _parent3, _scopeId2));
                      _push3(`<span class="text-xs font-normal" data-v-698733f9${_scopeId2}>اختر درساً</span></div>`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative w-full aspect-video" }, [
                        __props.currentLesson ? (openBlock(), createBlock("iframe", {
                          key: 0,
                          src: __props.currentLesson.video_url,
                          class: "absolute inset-0 w-full h-full border-0",
                          allowfullscreen: ""
                        }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "absolute inset-0 flex items-center justify-center text-white/50 flex-col gap-2"
                        }, [
                          createVNode(unref(PlayCircle), { class: "h-10 w-10 opacity-50" }),
                          createVNode("span", { class: "text-xs font-normal" }, "اختر درساً")
                        ]))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="flex flex-col md:flex-row md:items-center justify-between gap-4" data-v-698733f9${_scopeId}><div class="space-y-1" data-v-698733f9${_scopeId}><h2 class="text-xl font-normal tracking-tight text-[var(--foreground)]" data-v-698733f9${_scopeId}>${ssrInterpolate(((_b2 = __props.currentLesson) == null ? void 0 : _b2.title) || "مرحباً بك")}</h2><p class="text-xs text-[var(--muted-foreground)]" data-v-698733f9${_scopeId}>${ssrInterpolate(__props.course.title)}</p></div>`);
              if (__props.currentLesson) {
                _push2(`<div class="flex flex-wrap items-center gap-2" data-v-698733f9${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$5), {
                  onClick: startInterview,
                  variant: "outline",
                  size: "sm",
                  class: "font-normal text-xs border-[var(--border)] rounded-md shadow-none h-8.5"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(Briefcase), { class: "me-2 h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                      _push3(` تدريب المقابلة `);
                    } else {
                      return [
                        createVNode(unref(Briefcase), { class: "me-2 h-3.5 w-3.5" }),
                        createTextVNode(" تدريب المقابلة ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$5), {
                  onClick: summarizeLesson,
                  disabled: isSummarizing.value,
                  variant: "secondary",
                  size: "sm",
                  class: "font-normal text-xs bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)] rounded-md shadow-none h-8.5"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (isSummarizing.value) {
                        _push3(ssrRenderComponent(unref(Loader2), { class: "me-2 h-3.5 w-3.5 animate-spin" }, null, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(unref(Sparkles), { class: "me-2 h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                      }
                      _push3(` التلخيص `);
                    } else {
                      return [
                        isSummarizing.value ? (openBlock(), createBlock(unref(Loader2), {
                          key: 0,
                          class: "me-2 h-3.5 w-3.5 animate-spin"
                        })) : (openBlock(), createBlock(unref(Sparkles), {
                          key: 1,
                          class: "me-2 h-3.5 w-3.5"
                        })),
                        createTextVNode(" التلخيص ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$5), {
                  onClick: toggleComplete,
                  disabled: isTogglingComplete.value,
                  variant: isLessonCompleted.value ? "default" : "outline",
                  size: "sm",
                  class: ["font-normal text-xs rounded-md shadow-none h-8.5", isLessonCompleted.value ? "bg-[var(--primary)] text-white border-none" : "border-[var(--border)]"]
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (isTogglingComplete.value) {
                        _push3(ssrRenderComponent(unref(Loader2), { class: "me-2 h-3.5 w-3.5 animate-spin" }, null, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(unref(CheckCircle2), { class: "me-2 h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                      }
                      _push3(` ${ssrInterpolate(isLessonCompleted.value ? "مكتمل" : "إنهاء")}`);
                    } else {
                      return [
                        isTogglingComplete.value ? (openBlock(), createBlock(unref(Loader2), {
                          key: 0,
                          class: "me-2 h-3.5 w-3.5 animate-spin"
                        })) : (openBlock(), createBlock(unref(CheckCircle2), {
                          key: 1,
                          class: "me-2 h-3.5 w-3.5"
                        })),
                        createTextVNode(" " + toDisplayString(isLessonCompleted.value ? "مكتمل" : "إنهاء"), 1)
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
              if (summaryResult.value) {
                _push2(`<div class="p-5 bg-[var(--muted)] border border-[var(--border)] rounded-md" data-v-698733f9${_scopeId}><div class="flex items-center justify-between gap-2 mb-3" data-v-698733f9${_scopeId}><div class="flex items-center gap-2" data-v-698733f9${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Sparkles), { class: "h-4 w-4 text-[var(--primary)]" }, null, _parent2, _scopeId));
                _push2(`<h3 class="font-normal text-xs text-[var(--foreground)]" data-v-698733f9${_scopeId}>ملخص الدرس</h3>`);
                if (summaryIsSaved.value) {
                  _push2(`<span class="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium" data-v-698733f9${_scopeId}>محفوظ ✓</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><button class="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors p-1 rounded" title="إخفاء الملخص" data-v-698733f9${_scopeId}>`);
                _push2(ssrRenderComponent(unref(X), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
                _push2(`</button></div><div class="prose prose-sm max-w-none text-[var(--muted-foreground)] leading-relaxed text-xs" data-v-698733f9${_scopeId}>${summaryResult.value ?? ""}</div><div class="mt-3 pt-3 border-t border-[var(--border)]" data-v-698733f9${_scopeId}><button${ssrIncludeBooleanAttr(isSummarizing.value) ? " disabled" : ""} class="text-[9px] text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors flex items-center gap-1" data-v-698733f9${_scopeId}>`);
                if (isSummarizing.value) {
                  _push2(ssrRenderComponent(unref(Loader2), { class: "h-3 w-3 animate-spin" }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(unref(Sparkles), { class: "h-3 w-3" }, null, _parent2, _scopeId));
                }
                _push2(` إعادة التلخيص </button></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="space-y-4" data-v-698733f9${_scopeId}><div class="border-b border-[var(--border)] flex items-center gap-6" data-v-698733f9${_scopeId}><!--[-->`);
              ssrRenderList([
                { id: "overview", label: "الوصف" },
                { id: "notes", label: "الملاحظات" },
                { id: "challenges", label: "التحديات" },
                { id: "quizzes", label: "الاختبارات" }
              ], (tab) => {
                _push2(`<button class="${ssrRenderClass([
                  "py-2.5 text-xs font-normal border-b-2 outline-none",
                  activeTab.value === tab.id ? "border-[var(--primary)] text-[var(--foreground)]" : "border-transparent text-[var(--muted-foreground)]"
                ])}" data-v-698733f9${_scopeId}>${ssrInterpolate(tab.label)}</button>`);
              });
              _push2(`<!--]--></div><div class="py-2" data-v-698733f9${_scopeId}>`);
              if (activeTab.value === "overview") {
                _push2(`<div class="text-xs text-[var(--muted-foreground)] leading-relaxed" data-v-698733f9${_scopeId}>${ssrInterpolate(__props.course.description)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (activeTab.value === "notes") {
                _push2(`<div class="space-y-6" data-v-698733f9${_scopeId}><div class="grid gap-2" data-v-698733f9${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$1), {
                  modelValue: newNote.value,
                  "onUpdate:modelValue": ($event) => newNote.value = $event,
                  placeholder: "أضف ملاحظة (Ctrl+Enter)",
                  class: "min-h-[100px] text-xs resize-none border-[var(--border)] focus-visible:ring-[var(--primary)] rounded-md bg-[var(--card)]",
                  onKeyup: saveNote
                }, null, _parent2, _scopeId));
                _push2(`<div class="flex justify-end" data-v-698733f9${_scopeId}>`);
                _push2(ssrRenderComponent(unref(_sfc_main$5), {
                  onClick: saveNote,
                  disabled: !newNote.value.trim() || isSavingNote.value,
                  size: "sm",
                  class: "font-normal text-xs bg-[var(--primary)] text-white rounded-md shadow-none border-none"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (isSavingNote.value) {
                        _push3(ssrRenderComponent(unref(Loader2), { class: "me-2 h-3 w-3 animate-spin" }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(` إضافة `);
                    } else {
                      return [
                        isSavingNote.value ? (openBlock(), createBlock(unref(Loader2), {
                          key: 0,
                          class: "me-2 h-3 w-3 animate-spin"
                        })) : createCommentVNode("", true),
                        createTextVNode(" إضافة ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div><div class="space-y-3" data-v-698733f9${_scopeId}>`);
                if (isFetchingNotes.value) {
                  _push2(`<div class="py-8 flex justify-center" data-v-698733f9${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(Loader2), { class: "h-5 w-5 animate-spin text-[var(--muted-foreground)]" }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else if (notes.value.length === 0) {
                  _push2(`<div class="py-8 text-center text-xs text-[var(--muted-foreground)] font-normal" data-v-698733f9${_scopeId}>لا توجد ملاحظات.</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--[-->`);
                ssrRenderList(notes.value, (note) => {
                  _push2(ssrRenderComponent(unref(_sfc_main$6), {
                    key: note.id,
                    class: "p-4 shadow-none border border-[var(--border)] rounded-md relative group bg-[var(--card)]"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<button class="absolute top-4 end-4 text-[var(--muted-foreground)]" data-v-698733f9${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(Trash2), { class: "h-3.5 w-3.5" }, null, _parent3, _scopeId2));
                        _push3(`</button><p class="text-xs text-[var(--foreground)] whitespace-pre-wrap pe-8 leading-relaxed" data-v-698733f9${_scopeId2}>${ssrInterpolate(note.content)}</p><span class="text-[10px] text-[var(--muted-foreground)] mt-3 block font-normal" data-v-698733f9${_scopeId2}>${ssrInterpolate(new Date(note.created_at).toLocaleDateString("ar-SA"))}</span>`);
                      } else {
                        return [
                          createVNode("button", {
                            onClick: ($event) => deleteNote(note.id),
                            class: "absolute top-4 end-4 text-[var(--muted-foreground)]"
                          }, [
                            createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                          ], 8, ["onClick"]),
                          createVNode("p", { class: "text-xs text-[var(--foreground)] whitespace-pre-wrap pe-8 leading-relaxed" }, toDisplayString(note.content), 1),
                          createVNode("span", { class: "text-[10px] text-[var(--muted-foreground)] mt-3 block font-normal" }, toDisplayString(new Date(note.created_at).toLocaleDateString("ar-SA")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (activeTab.value === "challenges") {
                _push2(`<div data-v-698733f9${_scopeId}>`);
                if (((_c = __props.course.challenges) == null ? void 0 : _c.length) === 0) {
                  _push2(`<div class="py-8 text-center text-xs text-[var(--muted-foreground)] font-normal" data-v-698733f9${_scopeId}>لا توجد تحديات.</div>`);
                } else {
                  _push2(`<div class="grid sm:grid-cols-2 gap-4" data-v-698733f9${_scopeId}><!--[-->`);
                  ssrRenderList(__props.course.challenges, (challenge) => {
                    _push2(ssrRenderComponent(unref(_sfc_main$6), {
                      key: challenge.id,
                      class: "p-4 shadow-none border border-[var(--border)] rounded-md flex flex-col bg-[var(--card)]"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="flex items-start justify-between mb-2" data-v-698733f9${_scopeId2}><h4 class="font-normal text-sm text-[var(--foreground)]" data-v-698733f9${_scopeId2}>${ssrInterpolate(challenge.title)}</h4>`);
                          _push3(ssrRenderComponent(unref(_sfc_main$3), {
                            variant: "secondary",
                            class: "text-[10px] font-normal bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] rounded shadow-none"
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`${ssrInterpolate(challenge.points)} نقطة `);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(challenge.points) + " نقطة ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                          _push3(`</div><p class="text-xs text-[var(--muted-foreground)] mb-6 flex-1 leading-relaxed" data-v-698733f9${_scopeId2}>${ssrInterpolate(challenge.description)}</p>`);
                          _push3(ssrRenderComponent(unref(_sfc_main$5), {
                            onClick: ($event) => participateInChallenge(challenge.id),
                            disabled: !challenge.is_active || unref(challengeForm).processing,
                            variant: "outline",
                            size: "sm",
                            class: "w-full text-xs font-normal border-[var(--border)] rounded-md shadow-none"
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(` المشاركة `);
                              } else {
                                return [
                                  createTextVNode(" المشاركة ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode("div", { class: "flex items-start justify-between mb-2" }, [
                              createVNode("h4", { class: "font-normal text-sm text-[var(--foreground)]" }, toDisplayString(challenge.title), 1),
                              createVNode(unref(_sfc_main$3), {
                                variant: "secondary",
                                class: "text-[10px] font-normal bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] rounded shadow-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(challenge.points) + " نقطة ", 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("p", { class: "text-xs text-[var(--muted-foreground)] mb-6 flex-1 leading-relaxed" }, toDisplayString(challenge.description), 1),
                            createVNode(unref(_sfc_main$5), {
                              onClick: ($event) => participateInChallenge(challenge.id),
                              disabled: !challenge.is_active || unref(challengeForm).processing,
                              variant: "outline",
                              size: "sm",
                              class: "w-full text-xs font-normal border-[var(--border)] rounded-md shadow-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" المشاركة ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (activeTab.value === "quizzes") {
                _push2(`<div data-v-698733f9${_scopeId}>`);
                if (((_d = __props.course.quizzes) == null ? void 0 : _d.length) === 0) {
                  _push2(`<div class="py-8 text-center text-xs text-[var(--muted-foreground)] font-normal" data-v-698733f9${_scopeId}>لا توجد اختبارات.</div>`);
                } else {
                  _push2(`<div class="grid sm:grid-cols-2 gap-4" data-v-698733f9${_scopeId}><!--[-->`);
                  ssrRenderList(__props.course.quizzes, (quiz) => {
                    _push2(ssrRenderComponent(unref(_sfc_main$6), {
                      key: quiz.id,
                      class: "p-4 shadow-none border border-[var(--border)] rounded-md flex flex-col bg-[var(--card)]"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<h4 class="font-normal text-sm text-[var(--foreground)] mb-1.5" data-v-698733f9${_scopeId2}>${ssrInterpolate(quiz.title)}</h4><p class="text-xs text-[var(--muted-foreground)] mb-6 flex-1 leading-relaxed" data-v-698733f9${_scopeId2}>${ssrInterpolate(quiz.description)}</p><div class="flex items-center gap-2 mb-4 text-[10px] text-[var(--muted-foreground)] font-normal" data-v-698733f9${_scopeId2}><span data-v-698733f9${_scopeId2}>${ssrInterpolate(quiz.questions_count || 0)} أسئلة</span>`);
                          _push3(ssrRenderComponent(unref(_sfc_main$4), {
                            orientation: "vertical",
                            class: "h-3"
                          }, null, _parent3, _scopeId2));
                          _push3(`<span data-v-698733f9${_scopeId2}>نجاح: ${ssrInterpolate(quiz.passing_score)}%</span></div>`);
                          _push3(ssrRenderComponent(unref(Link), {
                            href: _ctx.route("quizzes.show", { course: __props.course.slug, quiz: quiz.id })
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(unref(_sfc_main$5), {
                                  variant: "outline",
                                  size: "sm",
                                  class: "w-full text-xs font-normal border-[var(--border)] rounded-md shadow-none"
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`بدء الاختبار`);
                                    } else {
                                      return [
                                        createTextVNode("بدء الاختبار")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$5), {
                                    variant: "outline",
                                    size: "sm",
                                    class: "w-full text-xs font-normal border-[var(--border)] rounded-md shadow-none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("بدء الاختبار")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode("h4", { class: "font-normal text-sm text-[var(--foreground)] mb-1.5" }, toDisplayString(quiz.title), 1),
                            createVNode("p", { class: "text-xs text-[var(--muted-foreground)] mb-6 flex-1 leading-relaxed" }, toDisplayString(quiz.description), 1),
                            createVNode("div", { class: "flex items-center gap-2 mb-4 text-[10px] text-[var(--muted-foreground)] font-normal" }, [
                              createVNode("span", null, toDisplayString(quiz.questions_count || 0) + " أسئلة", 1),
                              createVNode(unref(_sfc_main$4), {
                                orientation: "vertical",
                                class: "h-3"
                              }),
                              createVNode("span", null, "نجاح: " + toDisplayString(quiz.passing_score) + "%", 1)
                            ]),
                            createVNode(unref(Link), {
                              href: _ctx.route("quizzes.show", { course: __props.course.slug, quiz: quiz.id })
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$5), {
                                  variant: "outline",
                                  size: "sm",
                                  class: "w-full text-xs font-normal border-[var(--border)] rounded-md shadow-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("بدء الاختبار")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><div class="w-full lg:w-[320px] shrink-0 space-y-4 order-1 lg:order-2" data-v-698733f9${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$6), { class: "shadow-none border border-[var(--border)] flex flex-col h-auto lg:max-h-[calc(100vh-8rem)] lg:sticky lg:top-24 bg-[var(--card)] rounded-md overflow-hidden" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3, _c2, _d2, _e2, _f2;
                  if (_push3) {
                    _push3(`<div class="p-4 border-b border-[var(--border)] bg-[var(--muted)]" data-v-698733f9${_scopeId2}><h3 class="font-normal text-xs mb-3 text-[var(--foreground)]" data-v-698733f9${_scopeId2}>محتوى الكورس</h3><div class="flex items-center justify-between text-[11px] text-[var(--muted-foreground)] font-normal" data-v-698733f9${_scopeId2}><span data-v-698733f9${_scopeId2}>المكتمل: ${ssrInterpolate(__props.completedLessonsIds.length)}/${ssrInterpolate(((_a3 = __props.course.lessons) == null ? void 0 : _a3.length) || 0)}</span><span data-v-698733f9${_scopeId2}>${ssrInterpolate(Math.round(__props.completedLessonsIds.length / (((_b3 = __props.course.lessons) == null ? void 0 : _b3.length) || 1) * 100))}%</span></div><div class="w-full h-2 bg-[var(--accent)] border border-[var(--border)] rounded-md mt-2 overflow-hidden" data-v-698733f9${_scopeId2}><div class="h-full bg-[var(--primary)]" style="${ssrRenderStyle({ width: `${__props.completedLessonsIds.length / (((_c2 = __props.course.lessons) == null ? void 0 : _c2.length) || 1) * 100}%` })}" data-v-698733f9${_scopeId2}></div></div></div><div class="flex-1 overflow-y-auto divide-y divide-[var(--border)] text-xs" data-v-698733f9${_scopeId2}><!--[-->`);
                    ssrRenderList(__props.course.lessons, (lesson, index) => {
                      var _a4;
                      _push3(ssrRenderComponent(unref(Link), {
                        key: lesson.id,
                        href: _ctx.route("courses.show", { slug: __props.course.slug, lesson: lesson.id }),
                        class: [
                          "p-3 flex items-start gap-3",
                          ((_a4 = __props.currentLesson) == null ? void 0 : _a4.id) === lesson.id ? "bg-[var(--muted)] border-s-2 border-[var(--primary)] font-normal" : "border-s-2 border-transparent"
                        ]
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a5, _b4, _c3, _d3, _e3, _f3;
                          if (_push4) {
                            _push4(`<div class="flex-1 min-w-0" data-v-698733f9${_scopeId3}><span class="${ssrRenderClass(["text-xs line-clamp-2", ((_a5 = __props.currentLesson) == null ? void 0 : _a5.id) === lesson.id ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"])}" data-v-698733f9${_scopeId3}>${ssrInterpolate(index + 1)}. ${ssrInterpolate(lesson.title)}</span></div>`);
                            if ((_b4 = __props.completedLessonsIds) == null ? void 0 : _b4.includes(lesson.id)) {
                              _push4(ssrRenderComponent(unref(Check), { class: "h-3.5 w-3.5 text-[var(--primary)] shrink-0 mt-0.5" }, null, _parent4, _scopeId3));
                            } else if (((_c3 = __props.currentLesson) == null ? void 0 : _c3.id) === lesson.id) {
                              _push4(`<div class="h-1.5 w-1.5 bg-[var(--primary)] rounded-full shrink-0 mt-1.5 animate-pulse" data-v-698733f9${_scopeId3}></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                          } else {
                            return [
                              createVNode("div", { class: "flex-1 min-w-0" }, [
                                createVNode("span", {
                                  class: ["text-xs line-clamp-2", ((_d3 = __props.currentLesson) == null ? void 0 : _d3.id) === lesson.id ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                }, toDisplayString(index + 1) + ". " + toDisplayString(lesson.title), 3)
                              ]),
                              ((_e3 = __props.completedLessonsIds) == null ? void 0 : _e3.includes(lesson.id)) ? (openBlock(), createBlock(unref(Check), {
                                key: 0,
                                class: "h-3.5 w-3.5 text-[var(--primary)] shrink-0 mt-0.5"
                              })) : ((_f3 = __props.currentLesson) == null ? void 0 : _f3.id) === lesson.id ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "h-1.5 w-1.5 bg-[var(--primary)] rounded-full shrink-0 mt-1.5 animate-pulse"
                              })) : createCommentVNode("", true)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-4 border-b border-[var(--border)] bg-[var(--muted)]" }, [
                        createVNode("h3", { class: "font-normal text-xs mb-3 text-[var(--foreground)]" }, "محتوى الكورس"),
                        createVNode("div", { class: "flex items-center justify-between text-[11px] text-[var(--muted-foreground)] font-normal" }, [
                          createVNode("span", null, "المكتمل: " + toDisplayString(__props.completedLessonsIds.length) + "/" + toDisplayString(((_d2 = __props.course.lessons) == null ? void 0 : _d2.length) || 0), 1),
                          createVNode("span", null, toDisplayString(Math.round(__props.completedLessonsIds.length / (((_e2 = __props.course.lessons) == null ? void 0 : _e2.length) || 1) * 100)) + "%", 1)
                        ]),
                        createVNode("div", { class: "w-full h-2 bg-[var(--accent)] border border-[var(--border)] rounded-md mt-2 overflow-hidden" }, [
                          createVNode("div", {
                            class: "h-full bg-[var(--primary)]",
                            style: { width: `${__props.completedLessonsIds.length / (((_f2 = __props.course.lessons) == null ? void 0 : _f2.length) || 1) * 100}%` }
                          }, null, 4)
                        ])
                      ]),
                      createVNode("div", { class: "flex-1 overflow-y-auto divide-y divide-[var(--border)] text-xs" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.course.lessons, (lesson, index) => {
                          var _a4;
                          return openBlock(), createBlock(unref(Link), {
                            key: lesson.id,
                            href: _ctx.route("courses.show", { slug: __props.course.slug, lesson: lesson.id }),
                            class: [
                              "p-3 flex items-start gap-3",
                              ((_a4 = __props.currentLesson) == null ? void 0 : _a4.id) === lesson.id ? "bg-[var(--muted)] border-s-2 border-[var(--primary)] font-normal" : "border-s-2 border-transparent"
                            ]
                          }, {
                            default: withCtx(() => {
                              var _a5, _b4, _c3;
                              return [
                                createVNode("div", { class: "flex-1 min-w-0" }, [
                                  createVNode("span", {
                                    class: ["text-xs line-clamp-2", ((_a5 = __props.currentLesson) == null ? void 0 : _a5.id) === lesson.id ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                  }, toDisplayString(index + 1) + ". " + toDisplayString(lesson.title), 3)
                                ]),
                                ((_b4 = __props.completedLessonsIds) == null ? void 0 : _b4.includes(lesson.id)) ? (openBlock(), createBlock(unref(Check), {
                                  key: 0,
                                  class: "h-3.5 w-3.5 text-[var(--primary)] shrink-0 mt-0.5"
                                })) : ((_c3 = __props.currentLesson) == null ? void 0 : _c3.id) === lesson.id ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "h-1.5 w-1.5 bg-[var(--primary)] rounded-full shrink-0 mt-1.5 animate-pulse"
                                })) : createCommentVNode("", true)
                              ];
                            }),
                            _: 2
                          }, 1032, ["href", "class"]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$6), { class: "shadow-none border border-[var(--border)] p-4 bg-[var(--card)] rounded-md" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3;
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-3 mb-2" data-v-698733f9${_scopeId2}><div class="h-8 w-8 rounded-md bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center" data-v-698733f9${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(BrainCircuit), { class: "h-4 w-4 text-[var(--primary)]" }, null, _parent3, _scopeId2));
                    _push3(`</div><div data-v-698733f9${_scopeId2}><h4 class="font-normal text-xs text-[var(--foreground)]" data-v-698733f9${_scopeId2}>المساعد الذكي</h4><p class="text-[10px] text-[var(--muted-foreground)]" data-v-698733f9${_scopeId2}>اطرح أسئلة حول الدرس</p></div></div>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("ai.index", { lesson_id: (_a3 = __props.currentLesson) == null ? void 0 : _a3.id })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$5), {
                            variant: "secondary",
                            size: "sm",
                            class: "w-full mt-3 text-[11px] font-normal bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] rounded-md shadow-none"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`اسأل الذكاء الاصطناعي`);
                              } else {
                                return [
                                  createTextVNode("اسأل الذكاء الاصطناعي")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$5), {
                              variant: "secondary",
                              size: "sm",
                              class: "w-full mt-3 text-[11px] font-normal bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] rounded-md shadow-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("اسأل الذكاء الاصطناعي")
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
                      createVNode("div", { class: "flex items-center gap-3 mb-2" }, [
                        createVNode("div", { class: "h-8 w-8 rounded-md bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center" }, [
                          createVNode(unref(BrainCircuit), { class: "h-4 w-4 text-[var(--primary)]" })
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", { class: "font-normal text-xs text-[var(--foreground)]" }, "المساعد الذكي"),
                          createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)]" }, "اطرح أسئلة حول الدرس")
                        ])
                      ]),
                      createVNode(unref(Link), {
                        href: _ctx.route("ai.index", { lesson_id: (_b3 = __props.currentLesson) == null ? void 0 : _b3.id })
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), {
                            variant: "secondary",
                            size: "sm",
                            class: "w-full mt-3 text-[11px] font-normal bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] rounded-md shadow-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("اسأل الذكاء الاصطناعي")
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
              _push2(ssrRenderComponent(unref(_sfc_main$6), { class: "shadow-none border border-[var(--border)] p-4 bg-[var(--card)] rounded-md" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center justify-between mb-2" data-v-698733f9${_scopeId2}><div class="flex items-center gap-3" data-v-698733f9${_scopeId2}><div class="h-8 w-8 rounded-md bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center" data-v-698733f9${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Award), { class: "h-4 w-4 text-[var(--primary)]" }, null, _parent3, _scopeId2));
                    _push3(`</div><div data-v-698733f9${_scopeId2}><h4 class="font-normal text-xs text-[var(--foreground)]" data-v-698733f9${_scopeId2}>غرف المذاكرة</h4><p class="text-[10px] text-[var(--muted-foreground)]" data-v-698733f9${_scopeId2}>للمذاكرة الجماعية</p></div></div><span class="relative flex h-2 w-2" data-v-698733f9${_scopeId2}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75" data-v-698733f9${_scopeId2}></span><span class="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]" data-v-698733f9${_scopeId2}></span></span></div>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("study-room.show", __props.course.slug)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$5), {
                            variant: "outline",
                            size: "sm",
                            class: "w-full mt-3 text-[11px] font-normal border-[var(--border)] text-[var(--foreground)] rounded-md shadow-none"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`الانضمام للغرفة`);
                              } else {
                                return [
                                  createTextVNode("الانضمام للغرفة")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$5), {
                              variant: "outline",
                              size: "sm",
                              class: "w-full mt-3 text-[11px] font-normal border-[var(--border)] text-[var(--foreground)] rounded-md shadow-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("الانضمام للغرفة")
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
                      createVNode("div", { class: "flex items-center justify-between mb-2" }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("div", { class: "h-8 w-8 rounded-md bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center" }, [
                            createVNode(unref(Award), { class: "h-4 w-4 text-[var(--primary)]" })
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", { class: "font-normal text-xs text-[var(--foreground)]" }, "غرف المذاكرة"),
                            createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)]" }, "للمذاكرة الجماعية")
                          ])
                        ]),
                        createVNode("span", { class: "relative flex h-2 w-2" }, [
                          createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75" }),
                          createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]" })
                        ])
                      ]),
                      createVNode(unref(Link), {
                        href: _ctx.route("study-room.show", __props.course.slug)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), {
                            variant: "outline",
                            size: "sm",
                            class: "w-full mt-3 text-[11px] font-normal border-[var(--border)] text-[var(--foreground)] rounded-md shadow-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("الانضمام للغرفة")
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
              _push2(`</div></div></div>`);
            }
            if (showInterviewModal.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4" data-v-698733f9${_scopeId}><div class="absolute inset-0 bg-[var(--foreground)]/30 backdrop-blur-sm" data-v-698733f9${_scopeId}></div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$6), { class: "w-full max-w-2xl h-[550px] flex flex-col relative shadow-none border border-[var(--border)] bg-[var(--card)] rounded-md overflow-hidden" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center justify-between p-4 border-b border-[var(--border)]" data-v-698733f9${_scopeId2}><div class="flex items-center gap-3" data-v-698733f9${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Briefcase), { class: "h-4 w-4 text-[var(--primary)]" }, null, _parent3, _scopeId2));
                    _push3(`<h3 class="font-normal text-sm text-[var(--foreground)]" data-v-698733f9${_scopeId2}>تدريب المقابلة الشخصية</h3></div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      variant: "ghost",
                      size: "icon",
                      onClick: ($event) => showInterviewModal.value = false,
                      class: "h-8 w-8 rounded-md"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(X), { class: "h-4 w-4 text-[var(--muted-foreground)]" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(X), { class: "h-4 w-4 text-[var(--muted-foreground)]" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--background)]" data-v-698733f9${_scopeId2}><!--[-->`);
                    ssrRenderList(interviewHistory.value, (msg, idx) => {
                      _push3(`<div class="${ssrRenderClass(["flex", msg.role === "user" ? "justify-start" : "justify-end"])}" data-v-698733f9${_scopeId2}><div class="${ssrRenderClass([
                        "max-w-[85%] rounded-md p-3 text-xs leading-relaxed border shadow-none",
                        msg.role === "user" ? "bg-[var(--primary)] text-white border-[var(--primary)] rounded-tr-none" : "bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] rounded-tl-none"
                      ])}" data-v-698733f9${_scopeId2}><p class="whitespace-pre-wrap" data-v-698733f9${_scopeId2}>${ssrInterpolate(msg.content)}</p></div></div>`);
                    });
                    _push3(`<!--]-->`);
                    if (isInterviewing.value) {
                      _push3(`<div class="flex justify-end" data-v-698733f9${_scopeId2}><div class="bg-[var(--muted)] border border-[var(--border)] rounded-md p-3 text-xs flex items-center gap-2 text-[var(--muted-foreground)] font-normal" data-v-698733f9${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(Loader2), { class: "h-3.5 w-3.5 animate-spin" }, null, _parent3, _scopeId2));
                      _push3(` يكتب... </div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="p-3 border-t border-[var(--border)] bg-[var(--card)]" data-v-698733f9${_scopeId2}><form class="flex items-center gap-2 bg-[var(--muted)] p-1.5 pl-2 rounded-md border border-[var(--border)] focus-within:border-[var(--primary)]" data-v-698733f9${_scopeId2}><textarea placeholder="أرسل إجابتك هنا..." class="flex-1 bg-transparent border-none focus:ring-0 text-xs text-[var(--foreground)] placeholder-[var(--muted-foreground)] py-1 resize-none h-7 overflow-y-auto"${ssrIncludeBooleanAttr(isInterviewing.value) ? " disabled" : ""} data-v-698733f9${_scopeId2}>${ssrInterpolate(interviewInput.value)}</textarea>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      type: "submit",
                      disabled: !interviewInput.value.trim() || isInterviewing.value,
                      size: "icon",
                      class: "h-8 w-8 shrink-0 bg-[var(--primary)] text-white rounded-md shadow-none border-none"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Send), { class: "h-3.5 w-3.5 rtl:rotate-180" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Send), { class: "h-3.5 w-3.5 rtl:rotate-180" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</form></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center justify-between p-4 border-b border-[var(--border)]" }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode(unref(Briefcase), { class: "h-4 w-4 text-[var(--primary)]" }),
                          createVNode("h3", { class: "font-normal text-sm text-[var(--foreground)]" }, "تدريب المقابلة الشخصية")
                        ]),
                        createVNode(unref(_sfc_main$5), {
                          variant: "ghost",
                          size: "icon",
                          onClick: ($event) => showInterviewModal.value = false,
                          class: "h-8 w-8 rounded-md"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(X), { class: "h-4 w-4 text-[var(--muted-foreground)]" })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--background)]" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(interviewHistory.value, (msg, idx) => {
                          return openBlock(), createBlock("div", {
                            key: idx,
                            class: ["flex", msg.role === "user" ? "justify-start" : "justify-end"]
                          }, [
                            createVNode("div", {
                              class: [
                                "max-w-[85%] rounded-md p-3 text-xs leading-relaxed border shadow-none",
                                msg.role === "user" ? "bg-[var(--primary)] text-white border-[var(--primary)] rounded-tr-none" : "bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] rounded-tl-none"
                              ]
                            }, [
                              createVNode("p", { class: "whitespace-pre-wrap" }, toDisplayString(msg.content), 1)
                            ], 2)
                          ], 2);
                        }), 128)),
                        isInterviewing.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex justify-end"
                        }, [
                          createVNode("div", { class: "bg-[var(--muted)] border border-[var(--border)] rounded-md p-3 text-xs flex items-center gap-2 text-[var(--muted-foreground)] font-normal" }, [
                            createVNode(unref(Loader2), { class: "h-3.5 w-3.5 animate-spin" }),
                            createTextVNode(" يكتب... ")
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "p-3 border-t border-[var(--border)] bg-[var(--card)]" }, [
                        createVNode("form", {
                          onSubmit: withModifiers(sendInterviewAnswer, ["prevent"]),
                          class: "flex items-center gap-2 bg-[var(--muted)] p-1.5 pl-2 rounded-md border border-[var(--border)] focus-within:border-[var(--primary)]"
                        }, [
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => interviewInput.value = $event,
                            placeholder: "أرسل إجابتك هنا...",
                            class: "flex-1 bg-transparent border-none focus:ring-0 text-xs text-[var(--foreground)] placeholder-[var(--muted-foreground)] py-1 resize-none h-7 overflow-y-auto",
                            disabled: isInterviewing.value,
                            onKeydown: withKeys(withModifiers(sendInterviewAnswer, ["exact", "prevent"]), ["enter"])
                          }, null, 40, ["onUpdate:modelValue", "disabled", "onKeydown"]), [
                            [vModelText, interviewInput.value]
                          ]),
                          createVNode(unref(_sfc_main$5), {
                            type: "submit",
                            disabled: !interviewInput.value.trim() || isInterviewing.value,
                            size: "icon",
                            class: "h-8 w-8 shrink-0 bg-[var(--primary)] text-white rounded-md shadow-none border-none"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Send), { class: "h-3.5 w-3.5 rtl:rotate-180" })
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ], 32)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !__props.course ? (openBlock(), createBlock("div", {
                key: 0,
                class: "min-h-[60vh] flex flex-col items-center justify-center gap-4 text-[var(--muted-foreground)]"
              }, [
                createVNode(unref(Loader2), { class: "h-6 w-6 animate-spin" }),
                createVNode("p", { class: "font-normal text-sm" }, "جاري تحميل البيانات...")
              ])) : !__props.isEnrolled ? (openBlock(), createBlock("div", {
                key: 1,
                class: "w-full max-w-5xl mx-auto p-4 md:p-8 space-y-8 bg-[var(--card)] border border-[var(--border)] rounded-md mt-4 shadow-none"
              }, [
                createVNode("div", { class: "flex flex-col md:flex-row gap-8 items-start" }, [
                  createVNode("div", { class: "flex-1 space-y-6" }, [
                    createVNode("div", null, [
                      __props.course.category ? (openBlock(), createBlock(unref(_sfc_main$3), {
                        key: 0,
                        variant: "secondary",
                        class: "mb-4 bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)] rounded shadow-none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.course.category.name), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("h1", { class: "text-3xl font-normal tracking-tight text-[var(--foreground)]" }, toDisplayString(__props.course.title), 1),
                      createVNode("p", { class: "text-xs text-[var(--muted-foreground)] mt-4 leading-relaxed" }, toDisplayString(__props.course.description), 1)
                    ]),
                    createVNode("div", { class: "flex flex-wrap items-center gap-4 text-[11px] text-[var(--muted-foreground)] font-normal" }, [
                      createVNode("div", { class: "flex items-center gap-1.5" }, [
                        createVNode(unref(Clock), { class: "h-4 w-4" }),
                        createVNode("span", null, toDisplayString(totalDuration.value) + " دقيقة", 1)
                      ]),
                      createVNode(unref(_sfc_main$4), {
                        orientation: "vertical",
                        class: "h-4"
                      }),
                      createVNode("div", { class: "flex items-center gap-1.5" }, [
                        createVNode(unref(BookOpen), { class: "h-4 w-4" }),
                        createVNode("span", null, toDisplayString(((_e = __props.course.lessons) == null ? void 0 : _e.length) || 0) + " درس", 1)
                      ]),
                      createVNode(unref(_sfc_main$4), {
                        orientation: "vertical",
                        class: "h-4"
                      }),
                      createVNode("div", { class: "flex items-center gap-1.5" }, [
                        createVNode(unref(Award), { class: "h-4 w-4" }),
                        createVNode("span", null, toDisplayString(__props.course.level || "جميع المستويات"), 1)
                      ])
                    ]),
                    createVNode("div", { class: "pt-4" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("courses.checkout", __props.course.slug)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$5), {
                            size: "lg",
                            class: "w-full md:w-auto font-normal bg-[var(--primary)] text-white rounded-md shadow-none text-xs h-10 border-none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" اشترك الآن "),
                              createVNode(unref(ArrowUpRight), { class: "ms-2 h-4 w-4" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ]),
                  createVNode("div", { class: "w-full md:w-1/2" }, [
                    createVNode(unref(_sfc_main$6), { class: "overflow-hidden border border-[var(--border)] shadow-none aspect-video relative flex items-center justify-center bg-[var(--muted)] rounded-md" }, {
                      default: withCtx(() => [
                        __props.course.thumbnail ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: __props.course.thumbnail,
                          class: "absolute inset-0 w-full h-full object-cover"
                        }, null, 8, ["src"])) : createCommentVNode("", true),
                        createVNode("div", { class: "relative z-10 h-11 w-11 bg-[var(--card)] border border-[var(--border)] rounded-md flex items-center justify-center shadow-none" }, [
                          createVNode(unref(Play), { class: "h-4 w-4 text-[var(--primary)] ms-0.5" })
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "space-y-6 pt-8 border-t border-[var(--border)]" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-base font-normal tracking-tight mb-1 text-[var(--foreground)]" }, "منهج الدورة"),
                    createVNode("p", { class: "text-xs text-[var(--muted-foreground)]" }, "تعرف على المحتوى الذي ستدرسه في هذه الدورة.")
                  ]),
                  createVNode("div", { class: "grid gap-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.course.lessons, (lesson, index) => {
                      return openBlock(), createBlock(unref(_sfc_main$6), {
                        key: lesson.id,
                        class: "p-3 flex items-center justify-between shadow-none border border-[var(--border)] rounded-md bg-[var(--card)]"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-4" }, [
                            createVNode("span", { class: "text-xs font-normal text-[var(--muted-foreground)] w-6" }, toDisplayString(index + 1), 1),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", { class: "font-normal text-xs text-[var(--foreground)]" }, toDisplayString(lesson.title), 1),
                              createVNode("span", { class: "text-[10px] text-[var(--muted-foreground)] flex items-center gap-1 mt-1" }, [
                                createVNode(unref(PlayCircle), { class: "h-3.5 w-3.5" }),
                                createTextVNode(" مسجل ")
                              ])
                            ])
                          ]),
                          createVNode(unref(Lock), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" })
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: "max-w-7xl mx-auto p-4 md:p-6"
              }, [
                createVNode("div", { class: "flex flex-col lg:flex-row gap-6 items-start" }, [
                  createVNode("div", { class: "flex-1 min-w-0 space-y-6 w-full order-2 lg:order-1" }, [
                    createVNode(unref(_sfc_main$6), { class: "overflow-hidden shadow-none border border-[var(--border)] bg-black rounded-md" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "relative w-full aspect-video" }, [
                          __props.currentLesson ? (openBlock(), createBlock("iframe", {
                            key: 0,
                            src: __props.currentLesson.video_url,
                            class: "absolute inset-0 w-full h-full border-0",
                            allowfullscreen: ""
                          }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "absolute inset-0 flex items-center justify-center text-white/50 flex-col gap-2"
                          }, [
                            createVNode(unref(PlayCircle), { class: "h-10 w-10 opacity-50" }),
                            createVNode("span", { class: "text-xs font-normal" }, "اختر درساً")
                          ]))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4" }, [
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("h2", { class: "text-xl font-normal tracking-tight text-[var(--foreground)]" }, toDisplayString(((_f = __props.currentLesson) == null ? void 0 : _f.title) || "مرحباً بك"), 1),
                        createVNode("p", { class: "text-xs text-[var(--muted-foreground)]" }, toDisplayString(__props.course.title), 1)
                      ]),
                      __props.currentLesson ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-wrap items-center gap-2"
                      }, [
                        createVNode(unref(_sfc_main$5), {
                          onClick: startInterview,
                          variant: "outline",
                          size: "sm",
                          class: "font-normal text-xs border-[var(--border)] rounded-md shadow-none h-8.5"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Briefcase), { class: "me-2 h-3.5 w-3.5" }),
                            createTextVNode(" تدريب المقابلة ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), {
                          onClick: summarizeLesson,
                          disabled: isSummarizing.value,
                          variant: "secondary",
                          size: "sm",
                          class: "font-normal text-xs bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border)] rounded-md shadow-none h-8.5"
                        }, {
                          default: withCtx(() => [
                            isSummarizing.value ? (openBlock(), createBlock(unref(Loader2), {
                              key: 0,
                              class: "me-2 h-3.5 w-3.5 animate-spin"
                            })) : (openBlock(), createBlock(unref(Sparkles), {
                              key: 1,
                              class: "me-2 h-3.5 w-3.5"
                            })),
                            createTextVNode(" التلخيص ")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(unref(_sfc_main$5), {
                          onClick: toggleComplete,
                          disabled: isTogglingComplete.value,
                          variant: isLessonCompleted.value ? "default" : "outline",
                          size: "sm",
                          class: ["font-normal text-xs rounded-md shadow-none h-8.5", isLessonCompleted.value ? "bg-[var(--primary)] text-white border-none" : "border-[var(--border)]"]
                        }, {
                          default: withCtx(() => [
                            isTogglingComplete.value ? (openBlock(), createBlock(unref(Loader2), {
                              key: 0,
                              class: "me-2 h-3.5 w-3.5 animate-spin"
                            })) : (openBlock(), createBlock(unref(CheckCircle2), {
                              key: 1,
                              class: "me-2 h-3.5 w-3.5"
                            })),
                            createTextVNode(" " + toDisplayString(isLessonCompleted.value ? "مكتمل" : "إنهاء"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "variant", "class"])
                      ])) : createCommentVNode("", true)
                    ]),
                    summaryResult.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-5 bg-[var(--muted)] border border-[var(--border)] rounded-md"
                    }, [
                      createVNode("div", { class: "flex items-center justify-between gap-2 mb-3" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(unref(Sparkles), { class: "h-4 w-4 text-[var(--primary)]" }),
                          createVNode("h3", { class: "font-normal text-xs text-[var(--foreground)]" }, "ملخص الدرس"),
                          summaryIsSaved.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium"
                          }, "محفوظ ✓")) : createCommentVNode("", true)
                        ]),
                        createVNode("button", {
                          onClick: clearSummary,
                          class: "text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors p-1 rounded",
                          title: "إخفاء الملخص"
                        }, [
                          createVNode(unref(X), { class: "h-3.5 w-3.5" })
                        ])
                      ]),
                      createVNode("div", {
                        class: "prose prose-sm max-w-none text-[var(--muted-foreground)] leading-relaxed text-xs",
                        innerHTML: summaryResult.value
                      }, null, 8, ["innerHTML"]),
                      createVNode("div", { class: "mt-3 pt-3 border-t border-[var(--border)]" }, [
                        createVNode("button", {
                          onClick: summarizeLesson,
                          disabled: isSummarizing.value,
                          class: "text-[9px] text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors flex items-center gap-1"
                        }, [
                          isSummarizing.value ? (openBlock(), createBlock(unref(Loader2), {
                            key: 0,
                            class: "h-3 w-3 animate-spin"
                          })) : (openBlock(), createBlock(unref(Sparkles), {
                            key: 1,
                            class: "h-3 w-3"
                          })),
                          createTextVNode(" إعادة التلخيص ")
                        ], 8, ["disabled"])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "border-b border-[var(--border)] flex items-center gap-6" }, [
                        (openBlock(), createBlock(Fragment, null, renderList([
                          { id: "overview", label: "الوصف" },
                          { id: "notes", label: "الملاحظات" },
                          { id: "challenges", label: "التحديات" },
                          { id: "quizzes", label: "الاختبارات" }
                        ], (tab) => {
                          return createVNode("button", {
                            key: tab.id,
                            onClick: ($event) => activeTab.value = tab.id,
                            class: [
                              "py-2.5 text-xs font-normal border-b-2 outline-none",
                              activeTab.value === tab.id ? "border-[var(--primary)] text-[var(--foreground)]" : "border-transparent text-[var(--muted-foreground)]"
                            ]
                          }, toDisplayString(tab.label), 11, ["onClick"]);
                        }), 64))
                      ]),
                      createVNode("div", { class: "py-2" }, [
                        activeTab.value === "overview" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-[var(--muted-foreground)] leading-relaxed"
                        }, toDisplayString(__props.course.description), 1)) : createCommentVNode("", true),
                        activeTab.value === "notes" ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "space-y-6"
                        }, [
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(unref(_sfc_main$1), {
                              modelValue: newNote.value,
                              "onUpdate:modelValue": ($event) => newNote.value = $event,
                              placeholder: "أضف ملاحظة (Ctrl+Enter)",
                              class: "min-h-[100px] text-xs resize-none border-[var(--border)] focus-visible:ring-[var(--primary)] rounded-md bg-[var(--card)]",
                              onKeyup: withKeys(withModifiers(saveNote, ["ctrl"]), ["enter"])
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                            createVNode("div", { class: "flex justify-end" }, [
                              createVNode(unref(_sfc_main$5), {
                                onClick: saveNote,
                                disabled: !newNote.value.trim() || isSavingNote.value,
                                size: "sm",
                                class: "font-normal text-xs bg-[var(--primary)] text-white rounded-md shadow-none border-none"
                              }, {
                                default: withCtx(() => [
                                  isSavingNote.value ? (openBlock(), createBlock(unref(Loader2), {
                                    key: 0,
                                    class: "me-2 h-3 w-3 animate-spin"
                                  })) : createCommentVNode("", true),
                                  createTextVNode(" إضافة ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ]),
                          createVNode("div", { class: "space-y-3" }, [
                            isFetchingNotes.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "py-8 flex justify-center"
                            }, [
                              createVNode(unref(Loader2), { class: "h-5 w-5 animate-spin text-[var(--muted-foreground)]" })
                            ])) : notes.value.length === 0 ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "py-8 text-center text-xs text-[var(--muted-foreground)] font-normal"
                            }, "لا توجد ملاحظات.")) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(notes.value, (note) => {
                              return openBlock(), createBlock(unref(_sfc_main$6), {
                                key: note.id,
                                class: "p-4 shadow-none border border-[var(--border)] rounded-md relative group bg-[var(--card)]"
                              }, {
                                default: withCtx(() => [
                                  createVNode("button", {
                                    onClick: ($event) => deleteNote(note.id),
                                    class: "absolute top-4 end-4 text-[var(--muted-foreground)]"
                                  }, [
                                    createVNode(unref(Trash2), { class: "h-3.5 w-3.5" })
                                  ], 8, ["onClick"]),
                                  createVNode("p", { class: "text-xs text-[var(--foreground)] whitespace-pre-wrap pe-8 leading-relaxed" }, toDisplayString(note.content), 1),
                                  createVNode("span", { class: "text-[10px] text-[var(--muted-foreground)] mt-3 block font-normal" }, toDisplayString(new Date(note.created_at).toLocaleDateString("ar-SA")), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true),
                        activeTab.value === "challenges" ? (openBlock(), createBlock("div", { key: 2 }, [
                          ((_g = __props.course.challenges) == null ? void 0 : _g.length) === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "py-8 text-center text-xs text-[var(--muted-foreground)] font-normal"
                          }, "لا توجد تحديات.")) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "grid sm:grid-cols-2 gap-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.course.challenges, (challenge) => {
                              return openBlock(), createBlock(unref(_sfc_main$6), {
                                key: challenge.id,
                                class: "p-4 shadow-none border border-[var(--border)] rounded-md flex flex-col bg-[var(--card)]"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-start justify-between mb-2" }, [
                                    createVNode("h4", { class: "font-normal text-sm text-[var(--foreground)]" }, toDisplayString(challenge.title), 1),
                                    createVNode(unref(_sfc_main$3), {
                                      variant: "secondary",
                                      class: "text-[10px] font-normal bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] rounded shadow-none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(challenge.points) + " نقطة ", 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("p", { class: "text-xs text-[var(--muted-foreground)] mb-6 flex-1 leading-relaxed" }, toDisplayString(challenge.description), 1),
                                  createVNode(unref(_sfc_main$5), {
                                    onClick: ($event) => participateInChallenge(challenge.id),
                                    disabled: !challenge.is_active || unref(challengeForm).processing,
                                    variant: "outline",
                                    size: "sm",
                                    class: "w-full text-xs font-normal border-[var(--border)] rounded-md shadow-none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" المشاركة ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "disabled"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]))
                        ])) : createCommentVNode("", true),
                        activeTab.value === "quizzes" ? (openBlock(), createBlock("div", { key: 3 }, [
                          ((_h = __props.course.quizzes) == null ? void 0 : _h.length) === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "py-8 text-center text-xs text-[var(--muted-foreground)] font-normal"
                          }, "لا توجد اختبارات.")) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "grid sm:grid-cols-2 gap-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.course.quizzes, (quiz) => {
                              return openBlock(), createBlock(unref(_sfc_main$6), {
                                key: quiz.id,
                                class: "p-4 shadow-none border border-[var(--border)] rounded-md flex flex-col bg-[var(--card)]"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "font-normal text-sm text-[var(--foreground)] mb-1.5" }, toDisplayString(quiz.title), 1),
                                  createVNode("p", { class: "text-xs text-[var(--muted-foreground)] mb-6 flex-1 leading-relaxed" }, toDisplayString(quiz.description), 1),
                                  createVNode("div", { class: "flex items-center gap-2 mb-4 text-[10px] text-[var(--muted-foreground)] font-normal" }, [
                                    createVNode("span", null, toDisplayString(quiz.questions_count || 0) + " أسئلة", 1),
                                    createVNode(unref(_sfc_main$4), {
                                      orientation: "vertical",
                                      class: "h-3"
                                    }),
                                    createVNode("span", null, "نجاح: " + toDisplayString(quiz.passing_score) + "%", 1)
                                  ]),
                                  createVNode(unref(Link), {
                                    href: _ctx.route("quizzes.show", { course: __props.course.slug, quiz: quiz.id })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$5), {
                                        variant: "outline",
                                        size: "sm",
                                        class: "w-full text-xs font-normal border-[var(--border)] rounded-md shadow-none"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("بدء الاختبار")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["href"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]))
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "w-full lg:w-[320px] shrink-0 space-y-4 order-1 lg:order-2" }, [
                    createVNode(unref(_sfc_main$6), { class: "shadow-none border border-[var(--border)] flex flex-col h-auto lg:max-h-[calc(100vh-8rem)] lg:sticky lg:top-24 bg-[var(--card)] rounded-md overflow-hidden" }, {
                      default: withCtx(() => {
                        var _a3, _b3, _c2;
                        return [
                          createVNode("div", { class: "p-4 border-b border-[var(--border)] bg-[var(--muted)]" }, [
                            createVNode("h3", { class: "font-normal text-xs mb-3 text-[var(--foreground)]" }, "محتوى الكورس"),
                            createVNode("div", { class: "flex items-center justify-between text-[11px] text-[var(--muted-foreground)] font-normal" }, [
                              createVNode("span", null, "المكتمل: " + toDisplayString(__props.completedLessonsIds.length) + "/" + toDisplayString(((_a3 = __props.course.lessons) == null ? void 0 : _a3.length) || 0), 1),
                              createVNode("span", null, toDisplayString(Math.round(__props.completedLessonsIds.length / (((_b3 = __props.course.lessons) == null ? void 0 : _b3.length) || 1) * 100)) + "%", 1)
                            ]),
                            createVNode("div", { class: "w-full h-2 bg-[var(--accent)] border border-[var(--border)] rounded-md mt-2 overflow-hidden" }, [
                              createVNode("div", {
                                class: "h-full bg-[var(--primary)]",
                                style: { width: `${__props.completedLessonsIds.length / (((_c2 = __props.course.lessons) == null ? void 0 : _c2.length) || 1) * 100}%` }
                              }, null, 4)
                            ])
                          ]),
                          createVNode("div", { class: "flex-1 overflow-y-auto divide-y divide-[var(--border)] text-xs" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.course.lessons, (lesson, index) => {
                              var _a4;
                              return openBlock(), createBlock(unref(Link), {
                                key: lesson.id,
                                href: _ctx.route("courses.show", { slug: __props.course.slug, lesson: lesson.id }),
                                class: [
                                  "p-3 flex items-start gap-3",
                                  ((_a4 = __props.currentLesson) == null ? void 0 : _a4.id) === lesson.id ? "bg-[var(--muted)] border-s-2 border-[var(--primary)] font-normal" : "border-s-2 border-transparent"
                                ]
                              }, {
                                default: withCtx(() => {
                                  var _a5, _b4, _c3;
                                  return [
                                    createVNode("div", { class: "flex-1 min-w-0" }, [
                                      createVNode("span", {
                                        class: ["text-xs line-clamp-2", ((_a5 = __props.currentLesson) == null ? void 0 : _a5.id) === lesson.id ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"]
                                      }, toDisplayString(index + 1) + ". " + toDisplayString(lesson.title), 3)
                                    ]),
                                    ((_b4 = __props.completedLessonsIds) == null ? void 0 : _b4.includes(lesson.id)) ? (openBlock(), createBlock(unref(Check), {
                                      key: 0,
                                      class: "h-3.5 w-3.5 text-[var(--primary)] shrink-0 mt-0.5"
                                    })) : ((_c3 = __props.currentLesson) == null ? void 0 : _c3.id) === lesson.id ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "h-1.5 w-1.5 bg-[var(--primary)] rounded-full shrink-0 mt-1.5 animate-pulse"
                                    })) : createCommentVNode("", true)
                                  ];
                                }),
                                _: 2
                              }, 1032, ["href", "class"]);
                            }), 128))
                          ])
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "shadow-none border border-[var(--border)] p-4 bg-[var(--card)] rounded-md" }, {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          createVNode("div", { class: "flex items-center gap-3 mb-2" }, [
                            createVNode("div", { class: "h-8 w-8 rounded-md bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center" }, [
                              createVNode(unref(BrainCircuit), { class: "h-4 w-4 text-[var(--primary)]" })
                            ]),
                            createVNode("div", null, [
                              createVNode("h4", { class: "font-normal text-xs text-[var(--foreground)]" }, "المساعد الذكي"),
                              createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)]" }, "اطرح أسئلة حول الدرس")
                            ])
                          ]),
                          createVNode(unref(Link), {
                            href: _ctx.route("ai.index", { lesson_id: (_a3 = __props.currentLesson) == null ? void 0 : _a3.id })
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), {
                                variant: "secondary",
                                size: "sm",
                                class: "w-full mt-3 text-[11px] font-normal bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] rounded-md shadow-none"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("اسأل الذكاء الاصطناعي")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), { class: "shadow-none border border-[var(--border)] p-4 bg-[var(--card)] rounded-md" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between mb-2" }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("div", { class: "h-8 w-8 rounded-md bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center" }, [
                              createVNode(unref(Award), { class: "h-4 w-4 text-[var(--primary)]" })
                            ]),
                            createVNode("div", null, [
                              createVNode("h4", { class: "font-normal text-xs text-[var(--foreground)]" }, "غرف المذاكرة"),
                              createVNode("p", { class: "text-[10px] text-[var(--muted-foreground)]" }, "للمذاكرة الجماعية")
                            ])
                          ]),
                          createVNode("span", { class: "relative flex h-2 w-2" }, [
                            createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75" }),
                            createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]" })
                          ])
                        ]),
                        createVNode(unref(Link), {
                          href: _ctx.route("study-room.show", __props.course.slug)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$5), {
                              variant: "outline",
                              size: "sm",
                              class: "w-full mt-3 text-[11px] font-normal border-[var(--border)] text-[var(--foreground)] rounded-md shadow-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("الانضمام للغرفة")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])),
              showInterviewModal.value ? (openBlock(), createBlock("div", {
                key: 3,
                class: "fixed inset-0 z-50 flex items-center justify-center p-4"
              }, [
                createVNode("div", {
                  class: "absolute inset-0 bg-[var(--foreground)]/30 backdrop-blur-sm",
                  onClick: ($event) => showInterviewModal.value = false
                }, null, 8, ["onClick"]),
                createVNode(unref(_sfc_main$6), { class: "w-full max-w-2xl h-[550px] flex flex-col relative shadow-none border border-[var(--border)] bg-[var(--card)] rounded-md overflow-hidden" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center justify-between p-4 border-b border-[var(--border)]" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(unref(Briefcase), { class: "h-4 w-4 text-[var(--primary)]" }),
                        createVNode("h3", { class: "font-normal text-sm text-[var(--foreground)]" }, "تدريب المقابلة الشخصية")
                      ]),
                      createVNode(unref(_sfc_main$5), {
                        variant: "ghost",
                        size: "icon",
                        onClick: ($event) => showInterviewModal.value = false,
                        class: "h-8 w-8 rounded-md"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(X), { class: "h-4 w-4 text-[var(--muted-foreground)]" })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--background)]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(interviewHistory.value, (msg, idx) => {
                        return openBlock(), createBlock("div", {
                          key: idx,
                          class: ["flex", msg.role === "user" ? "justify-start" : "justify-end"]
                        }, [
                          createVNode("div", {
                            class: [
                              "max-w-[85%] rounded-md p-3 text-xs leading-relaxed border shadow-none",
                              msg.role === "user" ? "bg-[var(--primary)] text-white border-[var(--primary)] rounded-tr-none" : "bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] rounded-tl-none"
                            ]
                          }, [
                            createVNode("p", { class: "whitespace-pre-wrap" }, toDisplayString(msg.content), 1)
                          ], 2)
                        ], 2);
                      }), 128)),
                      isInterviewing.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex justify-end"
                      }, [
                        createVNode("div", { class: "bg-[var(--muted)] border border-[var(--border)] rounded-md p-3 text-xs flex items-center gap-2 text-[var(--muted-foreground)] font-normal" }, [
                          createVNode(unref(Loader2), { class: "h-3.5 w-3.5 animate-spin" }),
                          createTextVNode(" يكتب... ")
                        ])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "p-3 border-t border-[var(--border)] bg-[var(--card)]" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(sendInterviewAnswer, ["prevent"]),
                        class: "flex items-center gap-2 bg-[var(--muted)] p-1.5 pl-2 rounded-md border border-[var(--border)] focus-within:border-[var(--primary)]"
                      }, [
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => interviewInput.value = $event,
                          placeholder: "أرسل إجابتك هنا...",
                          class: "flex-1 bg-transparent border-none focus:ring-0 text-xs text-[var(--foreground)] placeholder-[var(--muted-foreground)] py-1 resize-none h-7 overflow-y-auto",
                          disabled: isInterviewing.value,
                          onKeydown: withKeys(withModifiers(sendInterviewAnswer, ["exact", "prevent"]), ["enter"])
                        }, null, 40, ["onUpdate:modelValue", "disabled", "onKeydown"]), [
                          [vModelText, interviewInput.value]
                        ]),
                        createVNode(unref(_sfc_main$5), {
                          type: "submit",
                          disabled: !interviewInput.value.trim() || isInterviewing.value,
                          size: "icon",
                          class: "h-8 w-8 shrink-0 bg-[var(--primary)] text-white rounded-md shadow-none border-none"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Send), { class: "h-3.5 w-3.5 rtl:rotate-180" })
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ], 32)
                    ])
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Courses/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-698733f9"]]);
export {
  Show as default
};
