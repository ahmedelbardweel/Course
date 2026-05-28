import { ref, computed, onUnmounted, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BgifGF--.js";
import { _ as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, a as _sfc_main$5, d as _sfc_main$8 } from "./CardTitle-Cy38L483.js";
import { _ as _sfc_main$6 } from "./index-BhZ8Ukd6.js";
import { _ as _sfc_main$7 } from "./index-CGK-4kfq.js";
import { AlertCircle, Clock, AlertTriangle, Lock, Check, Trophy, Frown } from "lucide-vue-next";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "reka-ui";
const _sfc_main = {
  __name: "TakeQuiz",
  __ssrInlineRender: true,
  props: {
    course: Object,
    quiz: Object,
    previousAttempts: Array
  },
  setup(__props) {
    var _a;
    const props = __props;
    const quizState = ref("intro");
    const currentQuestionIndex = ref(0);
    const timeLeft = ref(null);
    const timerInterval = ref(null);
    const form = useForm({
      answers: (((_a = props.quiz) == null ? void 0 : _a.questions) || []).map((q) => ({
        question_id: q.id,
        option_id: null
      }))
    });
    const currentQuestion = computed(() => props.quiz.questions[currentQuestionIndex.value]);
    const isLastQuestion = computed(() => {
      var _a2;
      return currentQuestionIndex.value === (((_a2 = props.quiz.questions) == null ? void 0 : _a2.length) || 0) - 1;
    });
    const allAnswered = computed(() => form.answers.every((a) => a.option_id !== null));
    const attemptsCount = computed(() => props.previousAttempts.length);
    const canAttempt = computed(() => attemptsCount.value < props.quiz.attempts_limit);
    const isStarted = computed(() => {
      if (!props.quiz.start_time) return true;
      return /* @__PURE__ */ new Date() >= new Date(props.quiz.start_time);
    });
    const isEnded = computed(() => {
      if (!props.quiz.end_time) return false;
      return /* @__PURE__ */ new Date() > new Date(props.quiz.end_time);
    });
    const startTimer = () => {
      if (props.quiz.duration) {
        timeLeft.value = props.quiz.duration * 60;
        timerInterval.value = setInterval(() => {
          if (timeLeft.value > 0) {
            timeLeft.value--;
          } else {
            clearInterval(timerInterval.value);
            submitQuiz();
          }
        }, 1e3);
      }
    };
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, "0")}`;
    };
    const startQuiz = () => {
      quizState.value = "taking";
      startTimer();
    };
    const selectOption = (optionId) => {
      form.answers[currentQuestionIndex.value].option_id = optionId;
    };
    const nextQuestion = () => {
      if (!isLastQuestion.value) {
        currentQuestionIndex.value++;
      }
    };
    const prevQuestion = () => {
      if (currentQuestionIndex.value > 0) {
        currentQuestionIndex.value--;
      }
    };
    const submitQuiz = () => {
      if (timerInterval.value) clearInterval(timerInterval.value);
      form.post(route("quizzes.submit", props.quiz.id), {
        onSuccess: () => {
          quizState.value = "submitted";
        }
      });
    };
    onUnmounted(() => {
      if (timerInterval.value) clearInterval(timerInterval.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.quiz.title
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        breadcrumbs: [
          { label: "الرئيسية", url: _ctx.route("dashboard") },
          { label: "الدورات", url: _ctx.route("courses.index") },
          { label: __props.course.title, url: _ctx.route("courses.show", __props.course.slug) },
          { label: __props.quiz.title }
        ]
      }, {
        "header-actions": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (quizState.value === "taking" && timeLeft.value !== null) {
              _push2(`<div class="flex items-center gap-1.5 px-3 py-1 bg-[var(--muted)] border border-[var(--border)] rounded-md font-mono font-normal text-xs text-[var(--foreground)]"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Clock), { class: "h-3 w-3 text-[var(--muted-foreground)]" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(formatTime(timeLeft.value))}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              quizState.value === "taking" && timeLeft.value !== null ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex items-center gap-1.5 px-3 py-1 bg-[var(--muted)] border border-[var(--border)] rounded-md font-mono font-normal text-xs text-[var(--foreground)]"
              }, [
                createVNode(unref(Clock), { class: "h-3 w-3 text-[var(--muted-foreground)]" }),
                createTextVNode(" " + toDisplayString(formatTime(timeLeft.value)), 1)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full bg-[var(--background)] text-[12px]"${_scopeId}><main class="flex-1 p-4 lg:p-6 text-right max-w-full"${_scopeId}>`);
            if (quizState.value === "intro") {
              _push2(`<div class="max-w-4xl mx-auto space-y-6"${_scopeId}><div class="space-y-1 border-b border-[var(--border)] pb-4"${_scopeId}><h2 class="text-xl font-normal tracking-tight text-[var(--foreground)]"${_scopeId}>${ssrInterpolate(__props.quiz.title)}</h2><p class="text-[11px] text-[var(--muted-foreground)] font-normal"${_scopeId}>${ssrInterpolate(__props.quiz.description)}</p></div><div class="grid grid-cols-1 md:grid-cols-4 gap-4"${_scopeId}><div class="md:col-span-3 space-y-4"${_scopeId}><div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block"${_scopeId2}>المدة</span><span class="text-xs font-normal text-[var(--foreground)]"${_scopeId2}>${ssrInterpolate(__props.quiz.duration ? `${__props.quiz.duration} د` : "مفتوح")}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block" }, "المدة"),
                      createVNode("span", { class: "text-xs font-normal text-[var(--foreground)]" }, toDisplayString(__props.quiz.duration ? `${__props.quiz.duration} د` : "مفتوح"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b;
                  if (_push3) {
                    _push3(`<span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block"${_scopeId2}>الأسئلة</span><span class="text-xs font-normal text-[var(--foreground)]"${_scopeId2}>${ssrInterpolate(((_a2 = __props.quiz.questions) == null ? void 0 : _a2.length) || 0)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block" }, "الأسئلة"),
                      createVNode("span", { class: "text-xs font-normal text-[var(--foreground)]" }, toDisplayString(((_b = __props.quiz.questions) == null ? void 0 : _b.length) || 0), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block"${_scopeId2}>النجاح</span><span class="text-xs font-normal text-[var(--foreground)]"${_scopeId2}>${ssrInterpolate(__props.quiz.passing_score)}%</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block" }, "النجاح"),
                      createVNode("span", { class: "text-xs font-normal text-[var(--foreground)]" }, toDisplayString(__props.quiz.passing_score) + "%", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block"${_scopeId2}>المحاولات</span><span class="text-xs font-normal text-[var(--foreground)]"${_scopeId2}>${ssrInterpolate(attemptsCount.value)} / ${ssrInterpolate(__props.quiz.attempts_limit)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block" }, "المحاولات"),
                      createVNode("span", { class: "text-xs font-normal text-[var(--foreground)]" }, toDisplayString(attemptsCount.value) + " / " + toDisplayString(__props.quiz.attempts_limit), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (__props.quiz.instructions) {
                _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-3 bg-[var(--muted)] border-b border-[var(--border)]" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-[11px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] flex items-center gap-1.5" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(AlertCircle), { class: "h-3 w-3" }, null, _parent5, _scopeId4));
                                  _push5(` تعليمات الاختبار `);
                                } else {
                                  return [
                                    createVNode(unref(AlertCircle), { class: "h-3 w-3" }),
                                    createTextVNode(" تعليمات الاختبار ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(_sfc_main$4), { class: "text-[11px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] flex items-center gap-1.5" }, {
                                default: withCtx(() => [
                                  createVNode(unref(AlertCircle), { class: "h-3 w-3" }),
                                  createTextVNode(" تعليمات الاختبار ")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 text-[12px] leading-relaxed text-[var(--foreground)] whitespace-pre-line" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(__props.quiz.instructions)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(__props.quiz.instructions), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(_sfc_main$3), { class: "p-3 bg-[var(--muted)] border-b border-[var(--border)]" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$4), { class: "text-[11px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] flex items-center gap-1.5" }, {
                              default: withCtx(() => [
                                createVNode(unref(AlertCircle), { class: "h-3 w-3" }),
                                createTextVNode(" تعليمات الاختبار ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$5), { class: "p-4 text-[12px] leading-relaxed text-[var(--foreground)] whitespace-pre-line" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.quiz.instructions), 1)
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="pt-2"${_scopeId}>`);
              if (!isStarted.value) {
                _push2(`<div class="p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] font-normal flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Clock), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" }, null, _parent2, _scopeId));
                _push2(` سيبدأ في: ${ssrInterpolate(new Date(__props.quiz.start_time).toLocaleString("ar-SA"))}</div>`);
              } else if (isEnded.value) {
                _push2(`<div class="p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] font-normal flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(AlertTriangle), { class: "h-3.5 w-3.5 text-[var(--primary)]" }, null, _parent2, _scopeId));
                _push2(` انتهى وقت التقديم. </div>`);
              } else if (!canAttempt.value) {
                _push2(`<div class="p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] font-normal flex items-center gap-2 text-center justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Lock), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
                _push2(` استنفدت المحاولات المسموحة. </div>`);
              } else {
                _push2(ssrRenderComponent(unref(_sfc_main$6), {
                  onClick: startQuiz,
                  class: "w-full h-10 rounded-md text-xs font-normal shadow-none tracking-widest uppercase bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` ابدأ الاختبار الآن `);
                    } else {
                      return [
                        createTextVNode(" ابدأ الاختبار الآن ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`</div></div><aside class="space-y-3"${_scopeId}><h3 class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] px-1"${_scopeId}>المحاولات السابقة</h3>`);
              if (__props.previousAttempts.length === 0) {
                _push2(`<div class="text-[10px] text-[var(--muted-foreground)] text-center py-6 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)]"${_scopeId}> لا توجد محاولات </div>`);
              } else {
                _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
                ssrRenderList(__props.previousAttempts, (attempt) => {
                  _push2(ssrRenderComponent(unref(_sfc_main$2), {
                    key: attempt.id,
                    class: "p-2.5 shadow-none border-[var(--border)] bg-[var(--card)] flex items-center justify-between rounded-md"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div${_scopeId2}><div class="text-[9px] font-normal text-[var(--muted-foreground)]"${_scopeId2}>${ssrInterpolate(new Date(attempt.created_at).toLocaleDateString("ar-SA"))}</div><div class="text-[12px] font-normal text-[var(--foreground)] tracking-tighter"${_scopeId2}>${ssrInterpolate(attempt.score)}%</div></div><div class="${ssrRenderClass([attempt.status === "passed" ? "bg-[var(--primary)] text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)] border-[var(--border)] border", "px-2 py-0.5 text-[8px] font-normal uppercase rounded shadow-none"])}"${_scopeId2}>${ssrInterpolate(attempt.status === "passed" ? "ناجح" : "راسب")}</div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-[9px] font-normal text-[var(--muted-foreground)]" }, toDisplayString(new Date(attempt.created_at).toLocaleDateString("ar-SA")), 1),
                            createVNode("div", { class: "text-[12px] font-normal text-[var(--foreground)] tracking-tighter" }, toDisplayString(attempt.score) + "%", 1)
                          ]),
                          createVNode("div", {
                            class: [attempt.status === "passed" ? "bg-[var(--primary)] text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)] border-[var(--border)] border", "px-2 py-0.5 text-[8px] font-normal uppercase rounded shadow-none"]
                          }, toDisplayString(attempt.status === "passed" ? "ناجح" : "راسب"), 3)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              }
              _push2(`</aside></div></div>`);
            } else if (quizState.value === "taking") {
              _push2(`<div class="w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full"${_scopeId}><aside class="w-full lg:w-64 shrink-0 lg:sticky lg:top-[60px]"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "p-3 shadow-none border border-[var(--border)] rounded-md bg-[var(--card)]" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest mb-3"${_scopeId2}>خريطة الأسئلة</h3><div class="grid grid-cols-5 gap-1.5"${_scopeId2}><!--[-->`);
                    ssrRenderList(__props.quiz.questions, (q, idx) => {
                      var _a2;
                      _push3(`<button class="${ssrRenderClass([
                        "h-7 rounded flex items-center justify-center text-[10px] font-normal border",
                        currentQuestionIndex.value === idx ? "border-[var(--primary)] ring-1 ring-[var(--primary)]" : "border-[var(--border)]",
                        ((_a2 = unref(form).answers[idx]) == null ? void 0 : _a2.option_id) !== null ? "bg-[var(--foreground)] text-[var(--card)] border-[var(--foreground)]" : "bg-[var(--muted)] text-[var(--muted-foreground)]"
                      ])}"${_scopeId2}>${ssrInterpolate(idx + 1)}</button>`);
                    });
                    _push3(`<!--]--></div><div class="mt-4 pt-4 border-t border-[var(--border)]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$6), {
                      onClick: submitQuiz,
                      disabled: !allAnswered.value || unref(form).processing,
                      class: "w-full h-8 text-[10px] font-normal uppercase tracking-widest bg-[var(--primary)] text-white shadow-none"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` تقديم الإجابات `);
                        } else {
                          return [
                            createTextVNode(" تقديم الإجابات ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest mb-3" }, "خريطة الأسئلة"),
                      createVNode("div", { class: "grid grid-cols-5 gap-1.5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.quiz.questions, (q, idx) => {
                          var _a2;
                          return openBlock(), createBlock("button", {
                            key: idx,
                            onClick: ($event) => currentQuestionIndex.value = idx,
                            class: [
                              "h-7 rounded flex items-center justify-center text-[10px] font-normal border",
                              currentQuestionIndex.value === idx ? "border-[var(--primary)] ring-1 ring-[var(--primary)]" : "border-[var(--border)]",
                              ((_a2 = unref(form).answers[idx]) == null ? void 0 : _a2.option_id) !== null ? "bg-[var(--foreground)] text-[var(--card)] border-[var(--foreground)]" : "bg-[var(--muted)] text-[var(--muted-foreground)]"
                            ]
                          }, toDisplayString(idx + 1), 11, ["onClick"]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "mt-4 pt-4 border-t border-[var(--border)]" }, [
                        createVNode(unref(_sfc_main$6), {
                          onClick: submitQuiz,
                          disabled: !allAnswered.value || unref(form).processing,
                          class: "w-full h-8 text-[10px] font-normal uppercase tracking-widest bg-[var(--primary)] text-white shadow-none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" تقديم الإجابات ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</aside><div class="flex-1 w-full space-y-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "p-4 border-b border-[var(--border)] bg-[var(--card)]" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$7), {
                            variant: "secondary",
                            class: "h-4.5 font-normal text-[9px] uppercase tracking-widest mb-3 bg-[var(--accent)] text-[var(--foreground)] rounded border border-[var(--border)]"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b;
                              if (_push5) {
                                _push5(`السؤال ${ssrInterpolate(currentQuestionIndex.value + 1)} من ${ssrInterpolate((_a2 = __props.quiz.questions) == null ? void 0 : _a2.length)}`);
                              } else {
                                return [
                                  createTextVNode("السؤال " + toDisplayString(currentQuestionIndex.value + 1) + " من " + toDisplayString((_b = __props.quiz.questions) == null ? void 0 : _b.length), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$4), { class: "text-sm md:text-base leading-relaxed font-normal text-[var(--foreground)]" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a2, _b;
                              if (_push5) {
                                _push5(`${ssrInterpolate((_a2 = currentQuestion.value) == null ? void 0 : _a2.question_text)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString((_b = currentQuestion.value) == null ? void 0 : _b.question_text), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$7), {
                              variant: "secondary",
                              class: "h-4.5 font-normal text-[9px] uppercase tracking-widest mb-3 bg-[var(--accent)] text-[var(--foreground)] rounded border border-[var(--border)]"
                            }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode("السؤال " + toDisplayString(currentQuestionIndex.value + 1) + " من " + toDisplayString((_a2 = __props.quiz.questions) == null ? void 0 : _a2.length), 1)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$4), { class: "text-sm md:text-base leading-relaxed font-normal text-[var(--foreground)]" }, {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(toDisplayString((_a2 = currentQuestion.value) == null ? void 0 : _a2.question_text), 1)
                                ];
                              }),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "p-4 pt-4 grid grid-cols-1 md:grid-cols-2 gap-2 bg-[var(--card)]" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b;
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList((_a2 = currentQuestion.value) == null ? void 0 : _a2.options, (option) => {
                            var _a3, _b2, _c;
                            _push4(`<button class="${ssrRenderClass([
                              "w-full text-right p-3 rounded-md border flex items-center justify-between shadow-none",
                              ((_a3 = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _a3.option_id) === option.id ? "border-[var(--primary)] bg-[var(--accent)] text-[var(--foreground)] z-10" : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]"
                            ])}"${_scopeId3}><span class="font-normal text-[12px]"${_scopeId3}>${ssrInterpolate(option.option_text)}</span><div class="${ssrRenderClass(["h-4 w-4 rounded-full border flex items-center justify-center shrink-0", ((_b2 = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _b2.option_id) === option.id ? "bg-[var(--primary)] text-white border-[var(--primary)]" : "border-[var(--border)] bg-[var(--card)]"])}"${_scopeId3}>`);
                            if (((_c = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _c.option_id) === option.id) {
                              _push4(ssrRenderComponent(unref(Check), { class: "h-2.5 w-2.5 text-white" }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div></button>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList((_b = currentQuestion.value) == null ? void 0 : _b.options, (option) => {
                              var _a3, _b2, _c;
                              return openBlock(), createBlock("button", {
                                key: option.id,
                                onClick: ($event) => selectOption(option.id),
                                class: [
                                  "w-full text-right p-3 rounded-md border flex items-center justify-between shadow-none",
                                  ((_a3 = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _a3.option_id) === option.id ? "border-[var(--primary)] bg-[var(--accent)] text-[var(--foreground)] z-10" : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]"
                                ]
                              }, [
                                createVNode("span", { class: "font-normal text-[12px]" }, toDisplayString(option.option_text), 1),
                                createVNode("div", {
                                  class: ["h-4 w-4 rounded-full border flex items-center justify-center shrink-0", ((_b2 = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _b2.option_id) === option.id ? "bg-[var(--primary)] text-white border-[var(--primary)]" : "border-[var(--border)] bg-[var(--card)]"]
                                }, [
                                  ((_c = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _c.option_id) === option.id ? (openBlock(), createBlock(unref(Check), {
                                    key: 0,
                                    class: "h-2.5 w-2.5 text-white"
                                  })) : createCommentVNode("", true)
                                ], 2)
                              ], 10, ["onClick"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$8), { class: "p-3 border-t border-[var(--border)] bg-[var(--muted)] flex items-center justify-between" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$6), {
                            variant: "ghost",
                            size: "sm",
                            onClick: prevQuestion,
                            disabled: currentQuestionIndex.value === 0,
                            class: "h-7 px-4 text-[11px] font-normal border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`السابق`);
                              } else {
                                return [
                                  createTextVNode("السابق")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if (!isLastQuestion.value) {
                            _push4(ssrRenderComponent(unref(_sfc_main$6), {
                              onClick: nextQuestion,
                              variant: "secondary",
                              size: "sm",
                              class: "h-7 px-6 text-[11px] font-normal uppercase tracking-widest border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`التالي`);
                                } else {
                                  return [
                                    createTextVNode("التالي")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(unref(_sfc_main$6), {
                              onClick: submitQuiz,
                              disabled: !allAnswered.value || unref(form).processing,
                              class: "h-7 px-8 text-[11px] font-normal uppercase tracking-widest bg-[var(--primary)] text-white"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`إنهاء`);
                                } else {
                                  return [
                                    createTextVNode("إنهاء")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            createVNode(unref(_sfc_main$6), {
                              variant: "ghost",
                              size: "sm",
                              onClick: prevQuestion,
                              disabled: currentQuestionIndex.value === 0,
                              class: "h-7 px-4 text-[11px] font-normal border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("السابق")
                              ]),
                              _: 1
                            }, 8, ["disabled"]),
                            !isLastQuestion.value ? (openBlock(), createBlock(unref(_sfc_main$6), {
                              key: 0,
                              onClick: nextQuestion,
                              variant: "secondary",
                              size: "sm",
                              class: "h-7 px-6 text-[11px] font-normal uppercase tracking-widest border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("التالي")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(unref(_sfc_main$6), {
                              key: 1,
                              onClick: submitQuiz,
                              disabled: !allAnswered.value || unref(form).processing,
                              class: "h-7 px-8 text-[11px] font-normal uppercase tracking-widest bg-[var(--primary)] text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("إنهاء")
                              ]),
                              _: 1
                            }, 8, ["disabled"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$3), { class: "p-4 border-b border-[var(--border)] bg-[var(--card)]" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), {
                            variant: "secondary",
                            class: "h-4.5 font-normal text-[9px] uppercase tracking-widest mb-3 bg-[var(--accent)] text-[var(--foreground)] rounded border border-[var(--border)]"
                          }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode("السؤال " + toDisplayString(currentQuestionIndex.value + 1) + " من " + toDisplayString((_a2 = __props.quiz.questions) == null ? void 0 : _a2.length), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$4), { class: "text-sm md:text-base leading-relaxed font-normal text-[var(--foreground)]" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode(toDisplayString((_a2 = currentQuestion.value) == null ? void 0 : _a2.question_text), 1)
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$5), { class: "p-4 pt-4 grid grid-cols-1 md:grid-cols-2 gap-2 bg-[var(--card)]" }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList((_a2 = currentQuestion.value) == null ? void 0 : _a2.options, (option) => {
                              var _a3, _b, _c;
                              return openBlock(), createBlock("button", {
                                key: option.id,
                                onClick: ($event) => selectOption(option.id),
                                class: [
                                  "w-full text-right p-3 rounded-md border flex items-center justify-between shadow-none",
                                  ((_a3 = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _a3.option_id) === option.id ? "border-[var(--primary)] bg-[var(--accent)] text-[var(--foreground)] z-10" : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]"
                                ]
                              }, [
                                createVNode("span", { class: "font-normal text-[12px]" }, toDisplayString(option.option_text), 1),
                                createVNode("div", {
                                  class: ["h-4 w-4 rounded-full border flex items-center justify-center shrink-0", ((_b = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _b.option_id) === option.id ? "bg-[var(--primary)] text-white border-[var(--primary)]" : "border-[var(--border)] bg-[var(--card)]"]
                                }, [
                                  ((_c = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _c.option_id) === option.id ? (openBlock(), createBlock(unref(Check), {
                                    key: 0,
                                    class: "h-2.5 w-2.5 text-white"
                                  })) : createCommentVNode("", true)
                                ], 2)
                              ], 10, ["onClick"]);
                            }), 128))
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$8), { class: "p-3 border-t border-[var(--border)] bg-[var(--muted)] flex items-center justify-between" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$6), {
                            variant: "ghost",
                            size: "sm",
                            onClick: prevQuestion,
                            disabled: currentQuestionIndex.value === 0,
                            class: "h-7 px-4 text-[11px] font-normal border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("السابق")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          !isLastQuestion.value ? (openBlock(), createBlock(unref(_sfc_main$6), {
                            key: 0,
                            onClick: nextQuestion,
                            variant: "secondary",
                            size: "sm",
                            class: "h-7 px-6 text-[11px] font-normal uppercase tracking-widest border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("التالي")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(unref(_sfc_main$6), {
                            key: 1,
                            onClick: submitQuiz,
                            disabled: !allAnswered.value || unref(form).processing,
                            class: "h-7 px-8 text-[11px] font-normal uppercase tracking-widest bg-[var(--primary)] text-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("إنهاء")
                            ]),
                            _: 1
                          }, 8, ["disabled"]))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if (quizState.value === "submitted") {
              _push2(`<div class="max-w-lg mx-auto py-8"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none text-center p-10 bg-[var(--card)] rounded-md relative overflow-hidden" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([((_a2 = _ctx.$page.props.flash) == null ? void 0 : _a2.passed) ? "bg-[var(--primary)]" : "bg-[var(--border)]", "absolute top-0 left-0 w-full h-[2px]"])}"${_scopeId2}></div><div class="h-16 w-16 mx-auto rounded-md flex items-center justify-center mb-6 border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)]"${_scopeId2}>`);
                    if ((_b = _ctx.$page.props.flash) == null ? void 0 : _b.passed) {
                      _push3(ssrRenderComponent(unref(Trophy), { class: "h-8 w-8 text-[var(--primary)]" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(Frown), { class: "h-8 w-8 text-[var(--muted-foreground)]" }, null, _parent3, _scopeId2));
                    }
                    _push3(`</div><h2 class="text-xl font-normal mb-1 text-[var(--foreground)]"${_scopeId2}>${ssrInterpolate(((_c = _ctx.$page.props.flash) == null ? void 0 : _c.passed) ? "مبارك! لقد نجحت" : "لم تجتز الاختبار")}</h2><p class="text-[11px] text-[var(--muted-foreground)] font-normal uppercase tracking-[0.2em] mb-8"${_scopeId2}> الدرجة النهائية: ${ssrInterpolate((_d = _ctx.$page.props.flash) == null ? void 0 : _d.score)}% </p><div class="grid grid-cols-2 gap-3 max-w-xs mx-auto mb-8"${_scopeId2}><div class="p-4 rounded-md bg-[var(--muted)] border border-[var(--border)]"${_scopeId2}><span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block mb-1"${_scopeId2}>درجتك</span><span class="text-xl font-normal text-[var(--foreground)]"${_scopeId2}>${ssrInterpolate((_e = _ctx.$page.props.flash) == null ? void 0 : _e.score)}%</span></div><div class="p-4 rounded-md bg-[var(--muted)] border border-[var(--border)]"${_scopeId2}><span class="text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block mb-1"${_scopeId2}>الحالة</span><span class="text-base font-normal uppercase text-[var(--foreground)]"${_scopeId2}>${ssrInterpolate(((_f = _ctx.$page.props.flash) == null ? void 0 : _f.passed) ? "ناجح" : "راسب")}</span></div></div><div class="flex flex-col sm:flex-row items-center justify-center gap-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("courses.show", __props.course.slug),
                      class: "w-full sm:w-auto"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$6), {
                            size: "sm",
                            class: "w-full h-9 px-8 rounded-md font-normal text-[11px] uppercase tracking-widest shadow-none bg-[var(--foreground)] text-[var(--card)] hover:bg-[var(--foreground)] opacity-95"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`العودة للكورس`);
                              } else {
                                return [
                                  createTextVNode("العودة للكورس")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$6), {
                              size: "sm",
                              class: "w-full h-9 px-8 rounded-md font-normal text-[11px] uppercase tracking-widest shadow-none bg-[var(--foreground)] text-[var(--card)] hover:bg-[var(--foreground)] opacity-95"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("العودة للكورس")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (!((_g = _ctx.$page.props.flash) == null ? void 0 : _g.passed) && canAttempt.value) {
                      _push3(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("quizzes.show", { course: __props.course.slug, quiz: __props.quiz.id }),
                        class: "w-full sm:w-auto"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(_sfc_main$6), {
                              variant: "outline",
                              size: "sm",
                              class: "w-full h-9 px-8 rounded-md font-normal text-[11px] uppercase tracking-widest border-[var(--border)] hover:bg-[var(--muted)] bg-[var(--card)] text-[var(--foreground)]"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`محاولة أخرى`);
                                } else {
                                  return [
                                    createTextVNode("محاولة أخرى")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(_sfc_main$6), {
                                variant: "outline",
                                size: "sm",
                                class: "w-full h-9 px-8 rounded-md font-normal text-[11px] uppercase tracking-widest border-[var(--border)] hover:bg-[var(--muted)] bg-[var(--card)] text-[var(--foreground)]"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("محاولة أخرى")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["absolute top-0 left-0 w-full h-[2px]", ((_h = _ctx.$page.props.flash) == null ? void 0 : _h.passed) ? "bg-[var(--primary)]" : "bg-[var(--border)]"]
                      }, null, 2),
                      createVNode("div", { class: "h-16 w-16 mx-auto rounded-md flex items-center justify-center mb-6 border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)]" }, [
                        ((_i = _ctx.$page.props.flash) == null ? void 0 : _i.passed) ? (openBlock(), createBlock(unref(Trophy), {
                          key: 0,
                          class: "h-8 w-8 text-[var(--primary)]"
                        })) : (openBlock(), createBlock(unref(Frown), {
                          key: 1,
                          class: "h-8 w-8 text-[var(--muted-foreground)]"
                        }))
                      ]),
                      createVNode("h2", { class: "text-xl font-normal mb-1 text-[var(--foreground)]" }, toDisplayString(((_j = _ctx.$page.props.flash) == null ? void 0 : _j.passed) ? "مبارك! لقد نجحت" : "لم تجتز الاختبار"), 1),
                      createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] font-normal uppercase tracking-[0.2em] mb-8" }, " الدرجة النهائية: " + toDisplayString((_k = _ctx.$page.props.flash) == null ? void 0 : _k.score) + "% ", 1),
                      createVNode("div", { class: "grid grid-cols-2 gap-3 max-w-xs mx-auto mb-8" }, [
                        createVNode("div", { class: "p-4 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                          createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block mb-1" }, "درجتك"),
                          createVNode("span", { class: "text-xl font-normal text-[var(--foreground)]" }, toDisplayString((_l = _ctx.$page.props.flash) == null ? void 0 : _l.score) + "%", 1)
                        ]),
                        createVNode("div", { class: "p-4 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                          createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block mb-1" }, "الحالة"),
                          createVNode("span", { class: "text-base font-normal uppercase text-[var(--foreground)]" }, toDisplayString(((_m = _ctx.$page.props.flash) == null ? void 0 : _m.passed) ? "ناجح" : "راسب"), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col sm:flex-row items-center justify-center gap-3" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("courses.show", __props.course.slug),
                          class: "w-full sm:w-auto"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), {
                              size: "sm",
                              class: "w-full h-9 px-8 rounded-md font-normal text-[11px] uppercase tracking-widest shadow-none bg-[var(--foreground)] text-[var(--card)] hover:bg-[var(--foreground)] opacity-95"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("العودة للكورس")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        !((_n = _ctx.$page.props.flash) == null ? void 0 : _n.passed) && canAttempt.value ? (openBlock(), createBlock(unref(Link), {
                          key: 0,
                          href: _ctx.route("quizzes.show", { course: __props.course.slug, quiz: __props.quiz.id }),
                          class: "w-full sm:w-auto"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6), {
                              variant: "outline",
                              size: "sm",
                              class: "w-full h-9 px-8 rounded-md font-normal text-[11px] uppercase tracking-widest border-[var(--border)] hover:bg-[var(--muted)] bg-[var(--card)] text-[var(--foreground)]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("محاولة أخرى")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["href"])) : createCommentVNode("", true)
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
            _push2(`</main></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col h-full bg-[var(--background)] text-[12px]" }, [
                createVNode("main", { class: "flex-1 p-4 lg:p-6 text-right max-w-full" }, [
                  quizState.value === "intro" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "max-w-4xl mx-auto space-y-6"
                  }, [
                    createVNode("div", { class: "space-y-1 border-b border-[var(--border)] pb-4" }, [
                      createVNode("h2", { class: "text-xl font-normal tracking-tight text-[var(--foreground)]" }, toDisplayString(__props.quiz.title), 1),
                      createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] font-normal" }, toDisplayString(__props.quiz.description), 1)
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-4 gap-4" }, [
                      createVNode("div", { class: "md:col-span-3 space-y-4" }, [
                        createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-2.5" }, [
                          createVNode(unref(_sfc_main$2), { class: "p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block" }, "المدة"),
                              createVNode("span", { class: "text-xs font-normal text-[var(--foreground)]" }, toDisplayString(__props.quiz.duration ? `${__props.quiz.duration} د` : "مفتوح"), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block" }, "الأسئلة"),
                                createVNode("span", { class: "text-xs font-normal text-[var(--foreground)]" }, toDisplayString(((_a2 = __props.quiz.questions) == null ? void 0 : _a2.length) || 0), 1)
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block" }, "النجاح"),
                              createVNode("span", { class: "text-xs font-normal text-[var(--foreground)]" }, toDisplayString(__props.quiz.passing_score) + "%", 1)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), { class: "p-3 shadow-none border-[var(--border)] bg-[var(--card)] text-center space-y-1 rounded-md" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block" }, "المحاولات"),
                              createVNode("span", { class: "text-xs font-normal text-[var(--foreground)]" }, toDisplayString(attemptsCount.value) + " / " + toDisplayString(__props.quiz.attempts_limit), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        __props.quiz.instructions ? (openBlock(), createBlock(unref(_sfc_main$2), {
                          key: 0,
                          class: "border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$3), { class: "p-3 bg-[var(--muted)] border-b border-[var(--border)]" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$4), { class: "text-[11px] font-normal uppercase tracking-widest text-[var(--muted-foreground)] flex items-center gap-1.5" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(AlertCircle), { class: "h-3 w-3" }),
                                    createTextVNode(" تعليمات الاختبار ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$5), { class: "p-4 text-[12px] leading-relaxed text-[var(--foreground)] whitespace-pre-line" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.quiz.instructions), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", { class: "pt-2" }, [
                          !isStarted.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] font-normal flex items-center gap-2"
                          }, [
                            createVNode(unref(Clock), { class: "h-3.5 w-3.5 text-[var(--muted-foreground)]" }),
                            createTextVNode(" سيبدأ في: " + toDisplayString(new Date(__props.quiz.start_time).toLocaleString("ar-SA")), 1)
                          ])) : isEnded.value ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] font-normal flex items-center gap-2"
                          }, [
                            createVNode(unref(AlertTriangle), { class: "h-3.5 w-3.5 text-[var(--primary)]" }),
                            createTextVNode(" انتهى وقت التقديم. ")
                          ])) : !canAttempt.value ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "p-3 rounded-md bg-[var(--muted)] border border-[var(--border)] text-[var(--muted-foreground)] font-normal flex items-center gap-2 text-center justify-center"
                          }, [
                            createVNode(unref(Lock), { class: "h-3.5 w-3.5" }),
                            createTextVNode(" استنفدت المحاولات المسموحة. ")
                          ])) : (openBlock(), createBlock(unref(_sfc_main$6), {
                            key: 3,
                            onClick: startQuiz,
                            class: "w-full h-10 rounded-md text-xs font-normal shadow-none tracking-widest uppercase bg-[var(--primary)] text-white hover:bg-[var(--primary)] opacity-95"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" ابدأ الاختبار الآن ")
                            ]),
                            _: 1
                          }))
                        ])
                      ]),
                      createVNode("aside", { class: "space-y-3" }, [
                        createVNode("h3", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-[0.2em] px-1" }, "المحاولات السابقة"),
                        __props.previousAttempts.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-[10px] text-[var(--muted-foreground)] text-center py-6 border border-dashed border-[var(--border)] rounded-md bg-[var(--card)]"
                        }, " لا توجد محاولات ")) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "space-y-2"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.previousAttempts, (attempt) => {
                            return openBlock(), createBlock(unref(_sfc_main$2), {
                              key: attempt.id,
                              class: "p-2.5 shadow-none border-[var(--border)] bg-[var(--card)] flex items-center justify-between rounded-md"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-[9px] font-normal text-[var(--muted-foreground)]" }, toDisplayString(new Date(attempt.created_at).toLocaleDateString("ar-SA")), 1),
                                  createVNode("div", { class: "text-[12px] font-normal text-[var(--foreground)] tracking-tighter" }, toDisplayString(attempt.score) + "%", 1)
                                ]),
                                createVNode("div", {
                                  class: [attempt.status === "passed" ? "bg-[var(--primary)] text-white" : "bg-[var(--muted)] text-[var(--muted-foreground)] border-[var(--border)] border", "px-2 py-0.5 text-[8px] font-normal uppercase rounded shadow-none"]
                                }, toDisplayString(attempt.status === "passed" ? "ناجح" : "راسب"), 3)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]))
                      ])
                    ])
                  ])) : quizState.value === "taking" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "w-full flex flex-col lg:flex-row-reverse gap-6 items-start max-w-full"
                  }, [
                    createVNode("aside", { class: "w-full lg:w-64 shrink-0 lg:sticky lg:top-[60px]" }, [
                      createVNode(unref(_sfc_main$2), { class: "p-3 shadow-none border border-[var(--border)] rounded-md bg-[var(--card)]" }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest mb-3" }, "خريطة الأسئلة"),
                          createVNode("div", { class: "grid grid-cols-5 gap-1.5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.quiz.questions, (q, idx) => {
                              var _a2;
                              return openBlock(), createBlock("button", {
                                key: idx,
                                onClick: ($event) => currentQuestionIndex.value = idx,
                                class: [
                                  "h-7 rounded flex items-center justify-center text-[10px] font-normal border",
                                  currentQuestionIndex.value === idx ? "border-[var(--primary)] ring-1 ring-[var(--primary)]" : "border-[var(--border)]",
                                  ((_a2 = unref(form).answers[idx]) == null ? void 0 : _a2.option_id) !== null ? "bg-[var(--foreground)] text-[var(--card)] border-[var(--foreground)]" : "bg-[var(--muted)] text-[var(--muted-foreground)]"
                                ]
                              }, toDisplayString(idx + 1), 11, ["onClick"]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "mt-4 pt-4 border-t border-[var(--border)]" }, [
                            createVNode(unref(_sfc_main$6), {
                              onClick: submitQuiz,
                              disabled: !allAnswered.value || unref(form).processing,
                              class: "w-full h-8 text-[10px] font-normal uppercase tracking-widest bg-[var(--primary)] text-white shadow-none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" تقديم الإجابات ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex-1 w-full space-y-4" }, [
                      createVNode(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none rounded-md overflow-hidden bg-[var(--card)]" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), { class: "p-4 border-b border-[var(--border)] bg-[var(--card)]" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$7), {
                                variant: "secondary",
                                class: "h-4.5 font-normal text-[9px] uppercase tracking-widest mb-3 bg-[var(--accent)] text-[var(--foreground)] rounded border border-[var(--border)]"
                              }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createTextVNode("السؤال " + toDisplayString(currentQuestionIndex.value + 1) + " من " + toDisplayString((_a2 = __props.quiz.questions) == null ? void 0 : _a2.length), 1)
                                  ];
                                }),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$4), { class: "text-sm md:text-base leading-relaxed font-normal text-[var(--foreground)]" }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createTextVNode(toDisplayString((_a2 = currentQuestion.value) == null ? void 0 : _a2.question_text), 1)
                                  ];
                                }),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$5), { class: "p-4 pt-4 grid grid-cols-1 md:grid-cols-2 gap-2 bg-[var(--card)]" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList((_a2 = currentQuestion.value) == null ? void 0 : _a2.options, (option) => {
                                  var _a3, _b, _c;
                                  return openBlock(), createBlock("button", {
                                    key: option.id,
                                    onClick: ($event) => selectOption(option.id),
                                    class: [
                                      "w-full text-right p-3 rounded-md border flex items-center justify-between shadow-none",
                                      ((_a3 = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _a3.option_id) === option.id ? "border-[var(--primary)] bg-[var(--accent)] text-[var(--foreground)] z-10" : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted-foreground)]"
                                    ]
                                  }, [
                                    createVNode("span", { class: "font-normal text-[12px]" }, toDisplayString(option.option_text), 1),
                                    createVNode("div", {
                                      class: ["h-4 w-4 rounded-full border flex items-center justify-center shrink-0", ((_b = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _b.option_id) === option.id ? "bg-[var(--primary)] text-white border-[var(--primary)]" : "border-[var(--border)] bg-[var(--card)]"]
                                    }, [
                                      ((_c = unref(form).answers[currentQuestionIndex.value]) == null ? void 0 : _c.option_id) === option.id ? (openBlock(), createBlock(unref(Check), {
                                        key: 0,
                                        class: "h-2.5 w-2.5 text-white"
                                      })) : createCommentVNode("", true)
                                    ], 2)
                                  ], 10, ["onClick"]);
                                }), 128))
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$8), { class: "p-3 border-t border-[var(--border)] bg-[var(--muted)] flex items-center justify-between" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), {
                                variant: "ghost",
                                size: "sm",
                                onClick: prevQuestion,
                                disabled: currentQuestionIndex.value === 0,
                                class: "h-7 px-4 text-[11px] font-normal border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("السابق")
                                ]),
                                _: 1
                              }, 8, ["disabled"]),
                              !isLastQuestion.value ? (openBlock(), createBlock(unref(_sfc_main$6), {
                                key: 0,
                                onClick: nextQuestion,
                                variant: "secondary",
                                size: "sm",
                                class: "h-7 px-6 text-[11px] font-normal uppercase tracking-widest border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("التالي")
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(unref(_sfc_main$6), {
                                key: 1,
                                onClick: submitQuiz,
                                disabled: !allAnswered.value || unref(form).processing,
                                class: "h-7 px-8 text-[11px] font-normal uppercase tracking-widest bg-[var(--primary)] text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("إنهاء")
                                ]),
                                _: 1
                              }, 8, ["disabled"]))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])) : quizState.value === "submitted" ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "max-w-lg mx-auto py-8"
                  }, [
                    createVNode(unref(_sfc_main$2), { class: "border-[var(--border)] shadow-none text-center p-10 bg-[var(--card)] rounded-md relative overflow-hidden" }, {
                      default: withCtx(() => {
                        var _a2, _b, _c, _d, _e, _f, _g;
                        return [
                          createVNode("div", {
                            class: ["absolute top-0 left-0 w-full h-[2px]", ((_a2 = _ctx.$page.props.flash) == null ? void 0 : _a2.passed) ? "bg-[var(--primary)]" : "bg-[var(--border)]"]
                          }, null, 2),
                          createVNode("div", { class: "h-16 w-16 mx-auto rounded-md flex items-center justify-center mb-6 border border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)]" }, [
                            ((_b = _ctx.$page.props.flash) == null ? void 0 : _b.passed) ? (openBlock(), createBlock(unref(Trophy), {
                              key: 0,
                              class: "h-8 w-8 text-[var(--primary)]"
                            })) : (openBlock(), createBlock(unref(Frown), {
                              key: 1,
                              class: "h-8 w-8 text-[var(--muted-foreground)]"
                            }))
                          ]),
                          createVNode("h2", { class: "text-xl font-normal mb-1 text-[var(--foreground)]" }, toDisplayString(((_c = _ctx.$page.props.flash) == null ? void 0 : _c.passed) ? "مبارك! لقد نجحت" : "لم تجتز الاختبار"), 1),
                          createVNode("p", { class: "text-[11px] text-[var(--muted-foreground)] font-normal uppercase tracking-[0.2em] mb-8" }, " الدرجة النهائية: " + toDisplayString((_d = _ctx.$page.props.flash) == null ? void 0 : _d.score) + "% ", 1),
                          createVNode("div", { class: "grid grid-cols-2 gap-3 max-w-xs mx-auto mb-8" }, [
                            createVNode("div", { class: "p-4 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                              createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block mb-1" }, "درجتك"),
                              createVNode("span", { class: "text-xl font-normal text-[var(--foreground)]" }, toDisplayString((_e = _ctx.$page.props.flash) == null ? void 0 : _e.score) + "%", 1)
                            ]),
                            createVNode("div", { class: "p-4 rounded-md bg-[var(--muted)] border border-[var(--border)]" }, [
                              createVNode("span", { class: "text-[9px] font-normal text-[var(--muted-foreground)] uppercase tracking-widest block mb-1" }, "الحالة"),
                              createVNode("span", { class: "text-base font-normal uppercase text-[var(--foreground)]" }, toDisplayString(((_f = _ctx.$page.props.flash) == null ? void 0 : _f.passed) ? "ناجح" : "راسب"), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-col sm:flex-row items-center justify-center gap-3" }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("courses.show", __props.course.slug),
                              class: "w-full sm:w-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$6), {
                                  size: "sm",
                                  class: "w-full h-9 px-8 rounded-md font-normal text-[11px] uppercase tracking-widest shadow-none bg-[var(--foreground)] text-[var(--card)] hover:bg-[var(--foreground)] opacity-95"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("العودة للكورس")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["href"]),
                            !((_g = _ctx.$page.props.flash) == null ? void 0 : _g.passed) && canAttempt.value ? (openBlock(), createBlock(unref(Link), {
                              key: 0,
                              href: _ctx.route("quizzes.show", { course: __props.course.slug, quiz: __props.quiz.id }),
                              class: "w-full sm:w-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$6), {
                                  variant: "outline",
                                  size: "sm",
                                  class: "w-full h-9 px-8 rounded-md font-normal text-[11px] uppercase tracking-widest border-[var(--border)] hover:bg-[var(--muted)] bg-[var(--card)] text-[var(--foreground)]"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("محاولة أخرى")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["href"])) : createCommentVNode("", true)
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Courses/TakeQuiz.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
