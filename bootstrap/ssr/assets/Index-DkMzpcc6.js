import { ref, computed, onMounted, onUnmounted, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-LaL6PFIH.js";
import _sfc_main$3 from "./RoomChat-Bg9VHAes.js";
import _sfc_main$2 from "./JitsiStage-D6Fgowz2.js";
import axios from "axios";
import "lucide-vue-next";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    room: Object,
    initialMessages: Array,
    initialTimedComments: Array,
    user: Object
  },
  setup(__props) {
    const props = __props;
    const participants = ref([]);
    const connectionStatus = ref("جاري الاتصال...");
    const activeTab = ref("chat");
    const isLeader = computed(() => props.room.leader_id === props.user.id);
    const isLeaderPresent = computed(() => participants.value.some((p) => p.id === props.room.leader_id));
    const initRealtime = () => {
      if (!window.Echo) {
        connectionStatus.value = "Echo غير موجود";
        return;
      }
      window.Echo.connector.pusher.connection.bind("state_change", (states) => {
        console.log("Connection state changed:", states);
        if (states.current === "connected") connectionStatus.value = "متصل";
        else if (states.current === "connecting") connectionStatus.value = "جاري الاتصال...";
        else connectionStatus.value = `حالة الاتصال: ${states.current}`;
      });
      window.Echo.connector.pusher.connection.bind("error", (err) => {
        var _a;
        console.error("Echo connection error:", err);
        connectionStatus.value = `خطأ في الاتصال: ${((_a = err.error) == null ? void 0 : _a.message) || "غير معروف"}`;
      });
      window.Echo.connector.pusher.connection.bind("failed", () => {
        connectionStatus.value = "فشل الاتصال النهائي بالخادم";
      });
      window.Echo.join(`study-room.${props.room.id}`).here((users) => {
        participants.value = users;
        connectionStatus.value = "متصل بنجاح";
      }).joining((user) => {
        participants.value.push(user);
      }).leaving((user) => {
        participants.value = participants.value.filter((u) => u.id !== user.id);
      }).listen(".sync", (e) => {
        if (!isLeader.value && e.videoUrl && e.videoUrl !== props.room.video_url) {
          props.room.video_url = e.videoUrl;
        }
        if (e.leader && e.leader.id !== props.room.leader_id) {
          props.room.leader_id = e.leader.id;
          props.room.leader = e.leader;
          if (e.leader.id === props.user.id) {
            console.log("I am now the leader!");
          }
        }
      });
    };
    const transferLeadership = async (targetUserId) => {
      if (!isLeader.value) return;
      if (confirm("هل أنت متأكد من نقل قيادة الغرفة إلى هذا الطالب؟")) {
        try {
          await axios.post(`/study-rooms/${props.room.id}/take-leadership`, {
            user_id: targetUserId
          });
        } catch (error) {
          console.error("Failed to transfer leadership:", error);
          alert("حدث خطأ أثناء نقل القيادة");
        }
      }
    };
    const claimLeadership = async () => {
      try {
        await axios.post(`/study-rooms/${props.room.id}/take-leadership`, {
          user_id: props.user.id
        });
      } catch (error) {
        console.error("Failed to claim leadership:", error);
        alert("حدث خطأ أثناء المطالبة بالقيادة");
      }
    };
    onMounted(() => {
      initRealtime();
    });
    onUnmounted(() => {
      if (window.Echo) {
        window.Echo.leave(`study-room.${props.room.id}`);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "غرفة المذاكرة التفاعلية" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="h-[calc(100vh-80px)] xl:h-[calc(100vh-64px)] overflow-hidden flex flex-col p-2 sm:p-4 max-w-[1600px] mx-auto min-h-0"${_scopeId}><div class="bg-white border border-zinc-200 px-4 py-2.5 rounded-t-xl flex items-center justify-between shadow-sm text-zinc-900 relative flex-shrink-0"${_scopeId}><div${_scopeId}><h1 class="text-sm sm:text-base font-bold flex items-center gap-1.5 text-zinc-900"${_scopeId}><span class="w-2 h-2 bg-zinc-950 rounded-full animate-pulse"${_scopeId}></span> ${ssrInterpolate(__props.room.course.title)}</h1><p class="text-zinc-500 text-[10px] sm:text-xs mt-0.5 flex items-center gap-1.5"${_scopeId}> القائد الحالي: ${ssrInterpolate(((_a = __props.room.leader) == null ? void 0 : _a.name) || "غير محدد")} `);
            if (!isLeaderPresent.value && !isLeader.value) {
              _push2(`<span class="bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-[9px] border border-zinc-200"${_scopeId}> غير متواجد </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</p></div>`);
            if (!isLeaderPresent.value && !isLeader.value) {
              _push2(`<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"${_scopeId}><button class="bg-zinc-950 hover:bg-zinc-900 text-white px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold shadow transition-all flex items-center gap-1"${_scopeId}> المطالبة بالقيادة </button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}>`);
            if (isLeader.value) {
              _push2(`<span class="bg-zinc-950 text-white px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold flex items-center gap-1.5 shadow-sm"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"${_scopeId}></span> أنت تبث شاشتك </span>`);
            } else {
              _push2(`<span class="bg-zinc-50 text-zinc-700 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold border border-zinc-200 flex items-center gap-1.5"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-zinc-900 animate-pulse"${_scopeId}></span> يتم العرض بواسطة القائد </span>`);
            }
            _push2(`</div></div><div class="flex-1 grid grid-cols-1 xl:grid-cols-4 gap-3 sm:gap-4 mt-3 overflow-hidden min-h-0"${_scopeId}><div class="xl:col-span-3 flex flex-col h-[280px] sm:h-[450px] xl:h-full min-h-0 flex-shrink-0 xl:flex-shrink"${_scopeId}><div class="bg-black/5 rounded-2xl border border-zinc-200 p-1 shadow-inner h-full flex items-center justify-center relative min-h-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              room: __props.room,
              user: __props.user,
              "is-leader": isLeader.value,
              class: "w-full h-full"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="xl:col-span-1 flex flex-col h-full overflow-hidden min-h-0"${_scopeId}><div class="xl:hidden flex border border-zinc-200 bg-white mb-2 rounded-xl overflow-hidden shadow-sm flex-shrink-0"${_scopeId}><button class="${ssrRenderClass(["flex-1 py-2 text-xs font-bold transition-all text-center", activeTab.value === "chat" ? "bg-zinc-50 border-b-2 border-zinc-900 text-zinc-900" : "text-zinc-500 bg-white hover:bg-zinc-50"])}"${_scopeId}> المحادثة المباشرة </button><button class="${ssrRenderClass(["flex-1 py-2 text-xs font-bold transition-all text-center", activeTab.value === "participants" ? "bg-zinc-50 border-b-2 border-zinc-900 text-zinc-900" : "text-zinc-500 bg-white hover:bg-zinc-50"])}"${_scopeId}> الطلاب المتواجدون (${ssrInterpolate(participants.value.length)}) </button></div><div class="${ssrRenderClass([[activeTab.value === "participants" ? "block flex-1 xl:flex-none" : "hidden xl:block", isLeader.value ? "h-32" : "h-28"], "bg-white border border-zinc-200 rounded-2xl shadow-sm p-3 overflow-y-auto flex-shrink-0 mb-3"])}"${_scopeId}><h3 class="text-xs font-bold text-zinc-500 mb-2 flex items-center justify-between"${_scopeId}> الطلاب المتواجدون <span class="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded-full text-[10px]"${_scopeId}>${ssrInterpolate(participants.value.length)}</span></h3><div class="space-y-1.5"${_scopeId}><!--[-->`);
            ssrRenderList(participants.value, (p) => {
              _push2(`<div class="flex items-center gap-1.5 p-1 rounded-lg hover:bg-zinc-50 group"${_scopeId}><div class="relative flex-shrink-0"${_scopeId}><img${ssrRenderAttr("src", `https://ui-avatars.com/api/?name=${p.name}&background=f4f4f5&color=18181b&bold=true`)} class="h-6 w-6 rounded-md"${_scopeId}>`);
              if (p.id === __props.room.leader_id) {
                _push2(`<span class="absolute -bottom-0.5 -right-0.5 bg-amber-500 text-white rounded-full p-0.5 border border-white" title="القائد"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-1.5 w-1.5" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd"${_scopeId}></path></svg></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><span class="text-xs font-semibold text-zinc-700 truncate flex-1"${_scopeId}>${ssrInterpolate(p.name)}</span>`);
              if (p.id === __props.user.id) {
                _push2(`<span class="text-[9px] text-zinc-400 flex-shrink-0"${_scopeId}>(أنت)</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (isLeader.value && p.id !== __props.user.id) {
                _push2(`<button class="text-[9px] bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity" title="نقل القيادة"${_scopeId}> تعيين قائد </button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div><div class="${ssrRenderClass([[activeTab.value === "chat" ? "block" : "hidden xl:block"], "flex-1 min-h-0"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              room: __props.room,
              "initial-messages": __props.initialMessages,
              user: __props.user,
              class: "h-full"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-[calc(100vh-80px)] xl:h-[calc(100vh-64px)] overflow-hidden flex flex-col p-2 sm:p-4 max-w-[1600px] mx-auto min-h-0" }, [
                createVNode("div", { class: "bg-white border border-zinc-200 px-4 py-2.5 rounded-t-xl flex items-center justify-between shadow-sm text-zinc-900 relative flex-shrink-0" }, [
                  createVNode("div", null, [
                    createVNode("h1", { class: "text-sm sm:text-base font-bold flex items-center gap-1.5 text-zinc-900" }, [
                      createVNode("span", { class: "w-2 h-2 bg-zinc-950 rounded-full animate-pulse" }),
                      createTextVNode(" " + toDisplayString(__props.room.course.title), 1)
                    ]),
                    createVNode("p", { class: "text-zinc-500 text-[10px] sm:text-xs mt-0.5 flex items-center gap-1.5" }, [
                      createTextVNode(" القائد الحالي: " + toDisplayString(((_b = __props.room.leader) == null ? void 0 : _b.name) || "غير محدد") + " ", 1),
                      !isLeaderPresent.value && !isLeader.value ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "bg-zinc-100 text-zinc-700 px-1.5 py-0.5 rounded text-[9px] border border-zinc-200"
                      }, " غير متواجد ")) : createCommentVNode("", true)
                    ])
                  ]),
                  !isLeaderPresent.value && !isLeader.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  }, [
                    createVNode("button", {
                      onClick: claimLeadership,
                      class: "bg-zinc-950 hover:bg-zinc-900 text-white px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold shadow transition-all flex items-center gap-1"
                    }, " المطالبة بالقيادة ")
                  ])) : createCommentVNode("", true),
                  createVNode("div", null, [
                    isLeader.value ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "bg-zinc-950 text-white px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    }, [
                      createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-white animate-pulse" }),
                      createTextVNode(" أنت تبث شاشتك ")
                    ])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "bg-zinc-50 text-zinc-700 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold border border-zinc-200 flex items-center gap-1.5"
                    }, [
                      createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-zinc-900 animate-pulse" }),
                      createTextVNode(" يتم العرض بواسطة القائد ")
                    ]))
                  ])
                ]),
                createVNode("div", { class: "flex-1 grid grid-cols-1 xl:grid-cols-4 gap-3 sm:gap-4 mt-3 overflow-hidden min-h-0" }, [
                  createVNode("div", { class: "xl:col-span-3 flex flex-col h-[280px] sm:h-[450px] xl:h-full min-h-0 flex-shrink-0 xl:flex-shrink" }, [
                    createVNode("div", { class: "bg-black/5 rounded-2xl border border-zinc-200 p-1 shadow-inner h-full flex items-center justify-center relative min-h-0" }, [
                      createVNode(_sfc_main$2, {
                        room: __props.room,
                        user: __props.user,
                        "is-leader": isLeader.value,
                        class: "w-full h-full"
                      }, null, 8, ["room", "user", "is-leader"])
                    ])
                  ]),
                  createVNode("div", { class: "xl:col-span-1 flex flex-col h-full overflow-hidden min-h-0" }, [
                    createVNode("div", { class: "xl:hidden flex border border-zinc-200 bg-white mb-2 rounded-xl overflow-hidden shadow-sm flex-shrink-0" }, [
                      createVNode("button", {
                        onClick: ($event) => activeTab.value = "chat",
                        class: ["flex-1 py-2 text-xs font-bold transition-all text-center", activeTab.value === "chat" ? "bg-zinc-50 border-b-2 border-zinc-900 text-zinc-900" : "text-zinc-500 bg-white hover:bg-zinc-50"]
                      }, " المحادثة المباشرة ", 10, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => activeTab.value = "participants",
                        class: ["flex-1 py-2 text-xs font-bold transition-all text-center", activeTab.value === "participants" ? "bg-zinc-50 border-b-2 border-zinc-900 text-zinc-900" : "text-zinc-500 bg-white hover:bg-zinc-50"]
                      }, " الطلاب المتواجدون (" + toDisplayString(participants.value.length) + ") ", 11, ["onClick"])
                    ]),
                    createVNode("div", {
                      class: ["bg-white border border-zinc-200 rounded-2xl shadow-sm p-3 overflow-y-auto flex-shrink-0 mb-3", [activeTab.value === "participants" ? "block flex-1 xl:flex-none" : "hidden xl:block", isLeader.value ? "h-32" : "h-28"]]
                    }, [
                      createVNode("h3", { class: "text-xs font-bold text-zinc-500 mb-2 flex items-center justify-between" }, [
                        createTextVNode(" الطلاب المتواجدون "),
                        createVNode("span", { class: "bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded-full text-[10px]" }, toDisplayString(participants.value.length), 1)
                      ]),
                      createVNode("div", { class: "space-y-1.5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(participants.value, (p) => {
                          return openBlock(), createBlock("div", {
                            key: p.id,
                            class: "flex items-center gap-1.5 p-1 rounded-lg hover:bg-zinc-50 group"
                          }, [
                            createVNode("div", { class: "relative flex-shrink-0" }, [
                              createVNode("img", {
                                src: `https://ui-avatars.com/api/?name=${p.name}&background=f4f4f5&color=18181b&bold=true`,
                                class: "h-6 w-6 rounded-md"
                              }, null, 8, ["src"]),
                              p.id === __props.room.leader_id ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "absolute -bottom-0.5 -right-0.5 bg-amber-500 text-white rounded-full p-0.5 border border-white",
                                title: "القائد"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-1.5 w-1.5",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode("span", { class: "text-xs font-semibold text-zinc-700 truncate flex-1" }, toDisplayString(p.name), 1),
                            p.id === __props.user.id ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-[9px] text-zinc-400 flex-shrink-0"
                            }, "(أنت)")) : createCommentVNode("", true),
                            isLeader.value && p.id !== __props.user.id ? (openBlock(), createBlock("button", {
                              key: 1,
                              onClick: ($event) => transferLeadership(p.id),
                              class: "text-[9px] bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity",
                              title: "نقل القيادة"
                            }, " تعيين قائد ", 8, ["onClick"])) : createCommentVNode("", true)
                          ]);
                        }), 128))
                      ])
                    ], 2),
                    createVNode("div", {
                      class: ["flex-1 min-h-0", [activeTab.value === "chat" ? "block" : "hidden xl:block"]]
                    }, [
                      createVNode(_sfc_main$3, {
                        room: __props.room,
                        "initial-messages": __props.initialMessages,
                        user: __props.user,
                        class: "h-full"
                      }, null, 8, ["room", "initial-messages", "user"])
                    ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/StudyRoom/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
