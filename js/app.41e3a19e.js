(function (t) {
    function e(e) {
        for (var r, i, c = e[0], a = e[1], u = e[2], h = 0, d = []; h < c.length; h++) (i = c[h]), Object.prototype.hasOwnProperty.call(s, i) && s[i] && d.push(s[i][0]), (s[i] = 0);
        for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
        l && l(e);
        while (d.length) d.shift()();
        return o.push.apply(o, u || []), n();
    }
    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], r = !0, c = 1; c < n.length; c++) {
                var a = n[c];
                0 !== s[a] && (r = !1);
            }
            r && (o.splice(e--, 1), (t = i((i.s = n[0]))));
        }
        return t;
    }
    var r = {},
        s = { app: 0 },
        o = [];
    function i(e) {
        if (r[e]) return r[e].exports;
        var n = (r[e] = { i: e, l: !1, exports: {} });
        return t[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    (i.m = t),
        (i.c = r),
        (i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (i.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (i.t = function (t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var r in t)
                    i.d(
                        n,
                        r,
                        function (e) {
                            return t[e];
                        }.bind(null, r)
                    );
            return n;
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t["default"];
                      }
                    : function () {
                          return t;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = "");
    var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        a = c.push.bind(c);
    (c.push = e), (c = c.slice());
    for (var u = 0; u < c.length; u++) e(c[u]);
    var l = a;
    o.push([0, "chunk-vendors"]), n();
})({
    0: function (t, e, n) {
        t.exports = n("56d7");
    },
    "106f": function (t, e, n) {},
    4365: function (t, e, n) {},
    "56d7": function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n("2b0e"),
            s = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n(
                    "main",
                    [
                        t._m(0),
                        n("vue-command", {
                            attrs: {
                                "autocompletion-resolver": t.autocompletionResolver,
                                "built-in": t.builtIn,
                                commands: t.commands,
                                cursor: t.cursor,
                                history: t.history,
                                "help-timeout": 1250,
                                prompt: t.prompt,
                                stdin: t.stdin,
                                "show-help": "",
                            },
                            on: {
                                "update:cursor": function (e) {
                                    t.cursor = e;
                                },
                                "update:history": function (e) {
                                    t.history = e;
                                },
                                "update:stdin": function (e) {
                                    t.stdin = e;
                                },
                            },
                        }),
                        t._m(1),
                    ],
                    1
                );
            },
            o = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("h3", { staticStyle: { "text-align": "center" } }, [r("a", { attrs: { href: "#" } }, [r("img", { staticStyle: { width: "90px", "border-radius": "5px" }, attrs: { src: n("7c28") } })])]);
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("p", [t._v(" *** Type "), n("b", [t._v("help")]), t._v(" and browse through available commands!")]);
                },
            ],
            i = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n(
                    "div",
                    { ref: "vue-command", staticClass: "vue-command" },
                    [
                        t._t("bar", [t.hideBar ? t._e() : n("div", { staticClass: "term-bar" }, [t.hideTitle ? t._e() : n("span", { staticClass: "term-title" }, [t._v(" " + t._s(t.title) + " ")])])]),
                        n(
                            "div",
                            { ref: "term-std", staticClass: "term-std" },
                            [
                                t.isSearch
                                    ? n("search", {
                                          ref: "search",
                                          attrs: { executed: t.local.executed, "is-search": t.isSearch, stdin: t.stdin },
                                          on: {
                                              "update:isSearch": function (e) {
                                                  t.isSearch = e;
                                              },
                                              "update:is-search": function (e) {
                                                  t.isSearch = e;
                                              },
                                              click: t.focus,
                                              handle: t.handle,
                                          },
                                      })
                                    : t._e(),
                                n(
                                    "div",
                                    {
                                        directives: [{ name: "show", rawName: "v-show", value: !t.isSearch, expression: "!isSearch" }],
                                        ref: "term-cont",
                                        staticClass: "term-cont",
                                        class: { "term-cont-fullscreen": t.local.isFullscreen },
                                        on: { click: t.focus },
                                    },
                                    [
                                        t.showIntro ? n("div", [t._v(" " + t._s(t.intro) + " ")]) : t._e(),
                                        t._l(t.local.history, function (e, r) {
                                            return n(
                                                "div",
                                                { key: r, staticClass: "term-hist", class: { "term-hist-fullscreen": t.local.isFullscreen && r === t.local.history.length - 1 } },
                                                [
                                                    n("stdout", {
                                                        directives: [
                                                            { name: "show", rawName: "v-show", value: !t.local.isFullscreen || r === t.local.history.length - 1, expression: "(!local.isFullscreen || index === local.history.length - 1)" },
                                                        ],
                                                        staticClass: "term-stdout",
                                                        attrs: { component: e },
                                                    }),
                                                    n("stdin", {
                                                        directives: [
                                                            {
                                                                name: "show",
                                                                rawName: "v-show",
                                                                value: (0 === r && !t.local.isFullscreen) || (!(r === t.local.history.length - 1 && t.local.isInProgress) && !t.local.isFullscreen),
                                                                expression: "(index === 0 && !local.isFullscreen) || !(index === local.history.length - 1 && local.isInProgress) && !local.isFullscreen",
                                                            },
                                                        ],
                                                        ref: "stdin",
                                                        refInFor: !0,
                                                        attrs: {
                                                            bus: t.bus,
                                                            cursor: t.local.cursor,
                                                            "hide-prompt": t.hidePrompt,
                                                            "is-fullscreen": t.local.isFullscreen,
                                                            "is-in-progress": t.local.isInProgress,
                                                            "is-last": r === t.local.history.length - 1,
                                                            prompt: t.prompt,
                                                            "help-text": t.helpText,
                                                            "help-timeout": t.helpTimeout,
                                                            "show-help": t.showHelp,
                                                            stdin: t.local.stdin,
                                                            uid: t._uid,
                                                        },
                                                        on: {
                                                            "update:stdin": function (e) {
                                                                return t.$set(t.local, "stdin", e);
                                                            },
                                                            handle: t.handle,
                                                        },
                                                        scopedSlots: t._u(
                                                            [
                                                                {
                                                                    key: "prompt",
                                                                    fn: function () {
                                                                        return [t._t("prompt")];
                                                                    },
                                                                    proxy: !0,
                                                                },
                                                            ],
                                                            null,
                                                            !0
                                                        ),
                                                    }),
                                                ],
                                                1
                                            );
                                        }),
                                    ],
                                    2
                                ),
                            ],
                            1
                        ),
                    ],
                    2
                );
            },
            c = [],
            a = n("4795"),
            u = n.n(a),
            l = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n(
                    "div",
                    {
                        ref: "term-cont",
                        staticClass: "term-cont term-cont-fullscreen",
                        on: {
                            keydown: [
                                function (e) {
                                    return (!e.type.indexOf("key") && t._k(e.keyCode, "tab", 9, e.key, "Tab")) || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : (e.preventDefault(), t.setIsSearch(!1));
                                },
                                function (e) {
                                    return (!e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"])) || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : (e.preventDefault(), t.setIsSearch(!1));
                                },
                                function (e) {
                                    return (e.type.indexOf("key") || 67 === e.keyCode) && e.ctrlKey ? (e.shiftKey || e.altKey || e.metaKey ? null : (e.preventDefault(), t.sigint(e))) : null;
                                },
                            ],
                        },
                    },
                    [
                        n("div", { staticClass: "term-search-container" }, [
                            n("span", { staticClass: "term-search" }, [
                                t._v(" (reverse-i-search)`"),
                                n("input", {
                                    directives: [{ name: "model", rawName: "v-model", value: t.search, expression: "search" }],
                                    ref: "input",
                                    attrs: { autofocus: "", type: "text", autocorrect: "off", autocapitalize: "none" },
                                    domProps: { value: t.search },
                                    on: {
                                        keyup: function (e) {
                                            return (!e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")) || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : t.handle(e);
                                        },
                                        input: function (e) {
                                            e.target.composing || (t.search = e.target.value);
                                        },
                                    },
                                }),
                                t._v("': " + t._s(t.command) + " "),
                            ]),
                        ]),
                    ]
                );
            },
            h = [],
            d = {
                inject: ["setStdin"],
                props: { executed: { required: !0, type: Set }, isSearch: { required: !0, type: Boolean }, stdin: { required: !0, type: String } },
                data: function () {
                    return { command: "", search: "" };
                },
                watch: {
                    search: function () {
                        var t = this;
                        this.executed.forEach(function (e) {
                            e.startsWith(t.search) && ((t.command = e), t.setStdin(e));
                        });
                    },
                },
                created: function () {
                    this.command = this.stdin;
                },
                mounted: function () {
                    function t() {
                        this.style.width = "".concat(this.value.length, "ch");
                    }
                    this.focus();
                    var e = this.$refs.input;
                    e.addEventListener("input", t), t.call(e);
                },
                methods: {
                    handle: function () {
                        this.$emit("update:isSearch", !1), this.$emit("handle", this.command);
                    },
                    focus: function () {
                        this.$refs.input.focus();
                    },
                    setIsSearch: function (t) {
                        this.$emit("update:isSearch", t);
                    },
                    sigint: function () {
                        this.setStdin(""), this.$emit("update:isSearch", !1);
                    },
                },
            },
            f = d,
            p = (n("e589"), n("2877")),
            m = Object(p["a"])(f, l, h, !1, null, null, null),
            y = m.exports,
            v = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n(
                    "div",
                    { staticClass: "term-stdin-container" },
                    [
                        t._t("prompt", [t.hidePrompt ? t._e() : n("span", { staticClass: "term-ps" }, [t._v(" " + t._s(t.local.prompt) + " ")])]),
                        n("span", { staticClass: "term-stdin" }, [
                            n("input", {
                                directives: [{ name: "model", rawName: "v-model", value: t.local.stdin, expression: "local.stdin" }],
                                ref: "input",
                                attrs: { autofocus: t.isLast, disabled: !t.isLast || t.isInProgress, placeholder: t.placeholder, type: "text", autocorrect: "off", autocapitalize: "none" },
                                domProps: { value: t.local.stdin },
                                on: {
                                    click: function (e) {
                                        return t.setCursor(t.$refs.input.selectionStart);
                                    },
                                    keyup: [
                                        function (e) {
                                            return t.setCursor(t.$refs.input.selectionStart);
                                        },
                                        function (e) {
                                            return (!e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")) || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : t.handle(e);
                                        },
                                    ],
                                    input: function (e) {
                                        e.target.composing || t.$set(t.local, "stdin", e.target.value);
                                    },
                                },
                            }),
                        ]),
                    ],
                    2
                );
            },
            b = [];
        function g(t, e, n, r, s, o, i) {
            try {
                var c = t[o](i),
                    a = c.value;
            } catch (u) {
                return void n(u);
            }
            c.done ? e(a) : Promise.resolve(a).then(r, s);
        }
        function w(t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise(function (r, s) {
                    var o = t.apply(e, n);
                    function i(t) {
                        g(o, r, s, i, c, "next", t);
                    }
                    function c(t) {
                        g(o, r, s, i, c, "throw", t);
                    }
                    i(void 0);
                });
            };
        }
        var x = {
                inject: ["setCursor", "setStdin"],
                props: {
                    bus: { required: !0, type: Object },
                    cursor: { default: 0, required: !0, type: Number },
                    helpText: { default: "", type: String },
                    helpTimeout: { default: 0, type: Number },
                    hidePrompt: { default: !1, type: Boolean },
                    isInProgress: { default: !1, required: !0, type: Boolean },
                    isLast: { default: !1, required: !0, type: Boolean },
                    isFullscreen: { default: !1, required: !0, type: Boolean },
                    prompt: { default: "", type: String },
                    showHelp: { default: !1, type: Boolean },
                    stdin: { default: "", required: !0, type: String },
                    uid: { required: !0, type: Number },
                },
                data: function () {
                    return { placeholder: "", local: { prompt: "", stdin: "" } };
                },
                watch: {
                    cursor: function () {
                        this.isLast && this.$refs.input.setSelectionRange(this.cursor, this.cursor);
                    },
                    isInProgress: function () {
                        var t = this;
                        return w(
                            u.a.mark(function e() {
                                return u.a.wrap(function (e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                if (t.isInProgress || !t.isLast) {
                                                    e.next = 5;
                                                    break;
                                                }
                                                return (e.next = 3), t.$nextTick();
                                            case 3:
                                                t.scrollIntoView(), t.focus();
                                            case 5:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )();
                    },
                    isLast: function (t, e) {
                        e && !t && this.blur();
                    },
                    stdin: function () {
                        var t = this;
                        return w(
                            u.a.mark(function e() {
                                return u.a.wrap(function (e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return t.isLast && !t.isInProgress && (t.local.stdin = t.stdin), (e.next = 3), t.$nextTick();
                                            case 3:
                                                t.setCursor(t.$refs.input.selectionStart);
                                            case 4:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )();
                    },
                    "local.stdin": function () {
                        this.$emit("update:stdin", this.local.stdin), this.setCursor(this.$refs.input.selectionStart);
                    },
                },
                created: function () {
                    (this.local.prompt = this.prompt), (this.local.stdin = this.stdin);
                },
                mounted: function () {
                    var t = this;
                    this.scrollIntoView(),
                        this.focus(),
                        setTimeout(function () {
                            t.isLast && t.showHelp && t.setPlaceholder(t.helpText);
                        }, this.helpTimeout);
                },
                methods: {
                    handle: function () {
                        this.setPrompt(this.prompt), this.$emit("handle", this.local.stdin), this.setPlaceholder("");
                    },
                    setPlaceholder: function (t) {
                        this.placeholder = t;
                    },
                    setPrompt: function (t) {
                        this.local.prompt = t;
                    },
                    blur: function () {
                        this.$refs.input.blur();
                    },
                    focus: function () {
                        this.$refs.input.focus();
                    },
                    scrollIntoView: function () {
                        this.$refs.input.scrollIntoView();
                    },
                },
            },
            S = x,
            P = (n("839b"), Object(p["a"])(S, v, b, !1, null, null, null)),
            I = P.exports,
            k = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n(t.component, { tag: "component" });
            },
            O = [],
            $ = { props: { component: { required: !0, type: Object } } },
            j = $,
            _ = (n("836c"), Object(p["a"])(j, k, O, !1, null, null, null)),
            C = _.exports,
            E = {
                provide: function () {
                    return { setCursor: this.setCursor };
                },
                data: function () {
                    return { local: { cursor: 0 } };
                },
                watch: {
                    cursor: function () {
                        this.local.cursor = this.cursor;
                    },
                    "local.cursor": function () {
                        this.$emit("update:cursor", this.local.cursor);
                    },
                },
                methods: {
                    autocomplete: function () {
                        "function" === typeof this.autocompletionResolver && this.autocompletionResolver();
                    },
                    setCursor: function (t) {
                        this.local.cursor = t;
                    },
                },
            },
            A = n("6ebd"),
            F = n.n(A),
            T = 38,
            L = 40,
            H = 82,
            B = 9;
        function K(t, e, n, r, s, o, i) {
            try {
                var c = t[o](i),
                    a = c.value;
            } catch (u) {
                return void n(u);
            }
            c.done ? e(a) : Promise.resolve(a).then(r, s);
        }
        function M(t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise(function (r, s) {
                    var o = t.apply(e, n);
                    function i(t) {
                        K(o, r, s, i, c, "next", t);
                    }
                    function c(t) {
                        K(o, r, s, i, c, "throw", t);
                    }
                    i(void 0);
                });
            };
        }
        var N = function (t) {
                for (
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "VueCommandStdout",
                        s = arguments.length,
                        o = new Array(s > 4 ? s - 4 : 0),
                        i = 4;
                    i < s;
                    i++
                )
                    o[i - 4] = arguments[i];
                return {
                    name: r,
                    mixins: o,
                    inject: ["terminate"],
                    mounted: function () {
                        var t = this;
                        return M(
                            u.a.mark(function e() {
                                return u.a.wrap(function (e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), t.$nextTick();
                                            case 2:
                                                t.terminate();
                                            case 3:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )();
                    },
                    render: function (r) {
                        return n ? r("span", {}, t) : r("span", e ? { domProps: { innerText: t } } : { domProps: { innerHTML: t } });
                    },
                };
            },
            D = function (t) {
                for (
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "VueCommandStderr",
                        r = arguments.length,
                        s = new Array(r > 3 ? r - 3 : 0),
                        o = 3;
                    o < r;
                    o++
                )
                    s[o - 3] = arguments[o];
                return {
                    name: n,
                    mixins: s,
                    inject: ["terminate"],
                    mounted: function () {
                        var t = this;
                        return M(
                            u.a.mark(function e() {
                                return u.a.wrap(function (e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), t.$nextTick();
                                            case 2:
                                                t.terminate();
                                            case 3:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )();
                    },
                    render: function (n) {
                        return e ? n("span", {}, t) : n("span", { domProps: { innerHTML: t } });
                    },
                };
            },
            V = function () {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "VueCommandDummyStdout", e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                return {
                    name: t,
                    mixins: n,
                    inject: ["terminate"],
                    mounted: function () {
                        var t = this;
                        return M(
                            u.a.mark(function e() {
                                return u.a.wrap(function (e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), t.$nextTick();
                                            case 2:
                                                t.terminate();
                                            case 3:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )();
                    },
                    render: function (t) {
                        return t("span", {}, "");
                    },
                };
            },
            q = {
                autocomplete: function (t) {
                    t.$refs["term-cont"].addEventListener("keydown", function (e) {
                        e.keyCode !== B || t.local.isInProgress || (e.preventDefault(), t.autocomplete());
                    });
                },
                history: function (t) {
                    t.$refs["term-cont"].addEventListener("keydown", function (e) {
                        t.local.isInProgress || (e.keyCode === T && (e.preventDefault(), t.decreaseHistory()), e.keyCode === L && (e.preventDefault(), t.increaseHistory()));
                    });
                },
                search: function (t) {
                    t.$refs["term-cont"].addEventListener("keydown", function (e) {
                        e.ctrlKey && e.keyCode === H && !t.local.isInProgress && (e.preventDefault(), t.setIsSearchHandler());
                    });
                },
            };
        function z(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e &&
                    (r = r.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function R(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? z(Object(n), !0).forEach(function (e) {
                          W(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : z(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      });
            }
            return t;
        }
        function W(t, e, n) {
            return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
        }
        function J(t) {
            return Y(t) || Q(t) || G(t) || U();
        }
        function U() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function G(t, e) {
            if (t) {
                if ("string" === typeof t) return X(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? X(t, e) : void 0;
            }
        }
        function Q(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function Y(t) {
            if (Array.isArray(t)) return X(t);
        }
        function X(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function Z(t, e, n, r, s, o, i) {
            try {
                var c = t[o](i),
                    a = c.value;
            } catch (u) {
                return void n(u);
            }
            c.done ? e(a) : Promise.resolve(a).then(r, s);
        }
        function tt(t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise(function (r, s) {
                    var o = t.apply(e, n);
                    function i(t) {
                        Z(o, r, s, i, c, "next", t);
                    }
                    function c(t) {
                        Z(o, r, s, i, c, "throw", t);
                    }
                    i(void 0);
                });
            };
        }
        var et = function (t) {
                var e = [],
                    n = [],
                    r = /[^\s"]+|"([^"]*)"/gi;
                do {
                    (n = r.exec(t)), null != n && e.push(n[1] ? n[1] : n[0]);
                } while (null != n);
                var s = [],
                    o = !1;
                return (
                    e.forEach(function (t, n) {
                        o ? (o = !1) : t.endsWith("=") ? (s.push(t + e[n + 1]), (o = !0)) : s.push(t);
                    }),
                    s
                );
            },
            nt = {
                provide: function () {
                    return { terminate: this.terminate };
                },
                methods: {
                    handle: function (t) {
                        var e = this;
                        return tt(
                            u.a.mark(function n() {
                                var r;
                                return u.a.wrap(function (n) {
                                    while (1)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                if (((r = t.trim().split(" ")[0]), "function" !== typeof e.commands[r])) {
                                                    n.next = 5;
                                                    break;
                                                }
                                                return (n.next = 4), Promise.resolve(e.execute(t));
                                            case 4:
                                                return n.abrupt("return");
                                            case 5:
                                                if ("function" !== typeof e.builtIn) {
                                                    n.next = 9;
                                                    break;
                                                }
                                                return (n.next = 8), Promise.resolve(e.builtIn(t, e));
                                            case 8:
                                                return n.abrupt("return");
                                            case 9:
                                                e.commandNotFound(t);
                                            case 10:
                                            case "end":
                                                return n.stop();
                                        }
                                }, n);
                            })
                        )();
                    },
                    execute: function (t) {
                        var e = this;
                        return tt(
                            u.a.mark(function n() {
                                var r, s, o, i, c, a;
                                return u.a.wrap(function (n) {
                                    while (1)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (t = t.trim()), (r = F()(t.split(" "), e.parserOptions)._[0]), (s = V()), (o = et(t)), (i = F()(o, e.parserOptions)), (n.next = 7), Promise.resolve(e.commands[r](i));
                                            case 7:
                                                (s = n.sent),
                                                    (s = e.setupComponent(s, e.local.history.length, i)),
                                                    "" !== t && ((c = new Set(e.local.executed)), c.delete(t), c.add(t), e.$emit("update:executed", c), e.setExecuted(c)),
                                                    e.setPointer(e.local.executed.size),
                                                    (a = J(e.local.history)),
                                                    a.push(s),
                                                    e.emitExecute(),
                                                    e.setIsInProgress(!0),
                                                    e.setHistory(a),
                                                    e.$emit("update:history", J(a));
                                            case 17:
                                            case "end":
                                                return n.stop();
                                        }
                                }, n);
                            })
                        )();
                    },
                    commandNotFound: function (t) {
                        var e = V();
                        if ("" !== t) {
                            (e = D("".concat(t, ": ").concat(this.notFound), !0)), (e = this.setupComponent(e, this.local.history.length));
                            var n = new Set(this.local.executed);
                            n.delete(t), n.add(t), this.$emit("update:executed", n), this.setExecuted(n), this.setPointer(this.local.executed.size);
                        }
                        var r = J(this.local.history);
                        r.push(e), this.emitExecute(), this.setIsInProgress(!0), this.setHistory(r), this.$emit("update:history", J(r));
                    },
                    setupComponent: function (t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        (t = R({}, t)), hasOwnProperty.call(t, "computed") || (t.computed = {});
                        var s = this.local.cursor,
                            o = new Set(this.local.executed),
                            i = J(this.local.history),
                            c = this.local.pointer,
                            a = this.local.stdin;
                        return (
                            (t.computed = R(
                                {
                                    environment: function () {
                                        return { isExecuting: e.local.isInProgress && e.local.history.length - 1 === n, isFullscreen: e.local.isFullscreen, isInProgress: e.local.isInProgress };
                                    },
                                    context: function () {
                                        return { cursor: s, executed: o, history: i, parsed: r, pointer: c, stdin: a };
                                    },
                                },
                                t.computed
                            )),
                            t
                        );
                    },
                    terminate: function () {
                        this.setStdin(""), this.setIsFullscreen(!1), this.$emit("executed"), this.setIsInProgress(!1);
                    },
                },
            };
        function rt(t) {
            return ct(t) || it(t) || ot(t) || st();
        }
        function st() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function ot(t, e) {
            if (t) {
                if ("string" === typeof t) return at(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? at(t, e) : void 0;
            }
        }
        function it(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function ct(t) {
            if (Array.isArray(t)) return at(t);
        }
        function at(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        var ut = {
            provide: function () {
                return { setPointer: this.setPointer };
            },
            data: function () {
                return { local: { executed: new Set(), history: [], pointer: 0 } };
            },
            watch: {
                history: function () {
                    this.setHistory(rt(this.history));
                },
                "local.pointer": function () {
                    this.$emit("update:pointer", this.local.pointer);
                },
                pointer: function () {
                    this.setPointer(this.pointer);
                },
            },
            methods: {
                increaseHistory: function () {
                    this.local.pointer < this.local.executed.size - 1 && (this.local.pointer++, (this.local.stdin = rt(this.local.executed)[this.local.pointer]));
                },
                decreaseHistory: function () {
                    this.local.pointer > 0 && (this.local.pointer--, (this.local.stdin = rt(this.local.executed)[this.local.pointer]));
                },
                setExecuted: function (t) {
                    this.local.executed = t;
                },
                setHistory: function (t) {
                    this.local.history = t;
                },
                setPointer: function (t) {
                    this.local.pointer = t;
                },
            },
        };
        function lt(t, e, n, r, s, o, i) {
            try {
                var c = t[o](i),
                    a = c.value;
            } catch (u) {
                return void n(u);
            }
            c.done ? e(a) : Promise.resolve(a).then(r, s);
        }
        function ht(t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise(function (r, s) {
                    var o = t.apply(e, n);
                    function i(t) {
                        lt(o, r, s, i, c, "next", t);
                    }
                    function c(t) {
                        lt(o, r, s, i, c, "throw", t);
                    }
                    i(void 0);
                });
            };
        }
        var dt = {
                data: function () {
                    return { isSearch: !1 };
                },
                watch: {
                    isSearch: function () {
                        var t = this;
                        return ht(
                            u.a.mark(function e() {
                                var n, r;
                                return u.a.wrap(function (e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                if (t.isSearch) {
                                                    e.next = 6;
                                                    break;
                                                }
                                                return (e.next = 3), t.$nextTick();
                                            case 3:
                                                (n = t.$refs.stdin), (r = n[t.local.history.length - 1]), r.focus();
                                            case 6:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )();
                    },
                },
                methods: {
                    setIsSearchHandler: function () {
                        this.isInProgress || this.setIsSearch(!0);
                    },
                    setIsSearch: function (t) {
                        this.isSearch = t;
                    },
                },
            },
            ft = {
                provide: function () {
                    return { setIsFullscreen: this.setIsFullscreen, setIsInProgress: this.setIsInProgress };
                },
                data: function () {
                    return { local: { isFullscreen: !1, isInProgress: !1 } };
                },
                watch: {
                    isFullscreen: function () {
                        this.setIsFullscreen(this.isFullscreen);
                    },
                    isInProgress: function () {
                        this.setIsInProgress(this.isInProgress);
                    },
                    "local.isFullscreen": function () {
                        this.$emit("update:isFullscreen", this.local.isFullscreen);
                    },
                    "local.isInProgress": function () {
                        this.$emit("update:isInProgress", this.local.isInProgress);
                    },
                },
                methods: {
                    setIsFullscreen: function (t) {
                        this.local.isFullscreen = t;
                    },
                    setIsInProgress: function (t) {
                        this.local.isInProgress = t;
                    },
                },
            };
        function pt(t) {
            return bt(t) || vt(t) || yt(t) || mt();
        }
        function mt() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function yt(t, e) {
            if (t) {
                if ("string" === typeof t) return gt(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gt(t, e) : void 0;
            }
        }
        function vt(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function bt(t) {
            if (Array.isArray(t)) return gt(t);
        }
        function gt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function wt(t, e, n, r, s, o, i) {
            try {
                var c = t[o](i),
                    a = c.value;
            } catch (u) {
                return void n(u);
            }
            c.done ? e(a) : Promise.resolve(a).then(r, s);
        }
        function xt(t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise(function (r, s) {
                    var o = t.apply(e, n);
                    function i(t) {
                        wt(o, r, s, i, c, "next", t);
                    }
                    function c(t) {
                        wt(o, r, s, i, c, "throw", t);
                    }
                    i(void 0);
                });
            };
        }
        var St = new r["a"](),
            Pt = {
                components: { Search: y, Stdin: I, Stdout: C },
                mixins: [E, nt, ut, dt, ft],
                provide: function () {
                    return { emitExecute: this.emitExecute, emitExecuted: this.emitExecuted, emitInput: this.emitInput, setStdin: this.setStdin };
                },
                props: {
                    autocompletionResolver: { default: void 0, type: Function },
                    builtIn: { default: void 0, type: Function },
                    commands: {
                        default: function () {
                            return {};
                        },
                        type: Object,
                    },
                    cursor: { default: 0, type: Number },
                    eventListeners: {
                        default: function () {
                            return [q.autocomplete, q.history, q.search];
                        },
                        type: Array,
                    },
                    executed: {
                        default: function () {
                            return new Set();
                        },
                        type: Set,
                    },
                    helpTimeout: { default: 4e3, type: Number },
                    hideBar: { default: !1, type: Boolean },
                    hidePrompt: { default: !1, type: Boolean },
                    hideTitle: { default: !1, type: Boolean },
                    helpText: { default: "Type help", type: String },
                    history: {
                        default: function () {
                            return [];
                        },
                        type: Array,
                    },
                    intro: { default: "Fasten your seatbelts!", type: String },
                    isFullscreen: { default: !1, type: Boolean },
                    isInProgress: { default: !1, type: Boolean },
                    notFound: { default: "command not found", type: String },
                    parserOptions: {
                        default: function () {
                            return {};
                        },
                        type: Object,
                    },
                    pointer: { default: 0, type: Number },
                    prompt: { default: "~@sarkermajid:#/", type: String },
                    showHelp: { default: !1, type: Boolean },
                    showIntro: { default: !1, type: Boolean },
                    stdin: { default: "", type: String },
                    title: { default: "portfolio@sarkermajid: ~", type: String },
                },
                data: function () {
                    return { bus: St, local: { stdin: "" }, scroll: { eventListener: void 0, isBottom: !0, resizeObserver: void 0 } };
                },
                watch: {
                    stdin: function () {
                        this.setStdin(this.stdin);
                    },
                    "local.stdin": function () {
                        this.$emit("input", this.local.stdin), this.$emit("update:stdin", this.local.stdin), "" === this.local.stdin && this.setPointer(this.local.executed.size);
                    },
                },
                mounted: function () {
                    var t = this;
                    (this.scroll.resizeObserver = new ResizeObserver(
                        (function () {
                            var e = xt(
                                u.a.mark(function e(n) {
                                    return u.a.wrap(function (e) {
                                        while (1)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), t.$nextTick();
                                                case 2:
                                                    t.scroll.isBottom && (t.$refs["term-std"].scrollTop = t.$refs["term-std"].scrollHeight);
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })()
                    )),
                        this.scroll.resizeObserver.observe(this.$refs["term-cont"]),
                        (this.scroll.eventListener = function () {
                            var e = t.$refs["term-std"];
                            t.scroll.isBottom = e.scrollHeight - e.scrollTop - e.clientHeight === 0;
                        }),
                        this.$refs["term-std"].addEventListener("scroll", this.scroll.eventListener),
                        this.eventListeners.forEach(function (e) {
                            return e(t);
                        });
                },
                created: function () {
                    (this.executed.add = function () {
                        for (var t, e, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                        (t = this.local.executed).add.apply(t, r), (e = Object.getPrototypeOf(this).add).call.apply(e, [this].concat(r));
                    }),
                        (this.executed.clear = function () {
                            this.local.executed.clear(), Object.getPrototypeOf(this).add.call(this);
                        }),
                        (this.executed.delete = function () {
                            for (var t, e, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                            (t = this.local.executed).delete.apply(t, r), (e = Object.getPrototypeOf(this).delete).call.apply(e, [this].concat(r));
                        }),
                        this.setCursor(this.cursor),
                        this.setPointer(this.pointer),
                        this.setStdin(this.stdin),
                        this.setIsInProgress(this.isInProgress),
                        this.setIsFullscreen(this.isFullscreen);
                    var t = pt(this.history);
                    0 === t.length &&
                        (t.push({
                            name: "VueCommandDummyStdout",
                            render: function (t) {
                                return t("span", {}, "");
                            },
                        }),
                        this.$emit("update:history", pt(t))),
                        this.setHistory(pt(t));
                },
                methods: {
                    emitInput: function (t) {
                        this.$emit("input", t);
                    },
                    emitExecute: function () {
                        this.$emit("execute");
                    },
                    emitExecuted: function () {
                        this.$emit("executed");
                    },
                    focus: function () {
                        if ("" === window.getSelection().toString())
                            if (this.isSearch) this.$refs.search.focus();
                            else {
                                var t = this.$refs.stdin[this.local.history.length - 1];
                                t.focus();
                            }
                    },
                    setStdin: function (t) {
                        this.local.stdin = t;
                    },
                },
            },
            It = Pt,
            kt = (n("590b"), Object(p["a"])(It, i, c, !1, null, null, null)),
            Ot = kt.exports;
        function $t(t) {
            return Et(t) || Ct(t) || _t(t) || jt();
        }
        function jt() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _t(t, e) {
            if (t) {
                if ("string" === typeof t) return At(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? At(t, e) : void 0;
            }
        }
        function Ct(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function Et(t) {
            if (Array.isArray(t)) return At(t);
        }
        function At(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        var Ft = "~@sarkermajid:#/",
            Tt = {
                components: { VueCommand: Ot },
                data: function () {
                    return {
                        autocompletionResolver: function () {},
                        builtIn: void 0,
                        commands: {
                            cd: void 0,
                            clear: void 0,
                            echo: function (t) {
                                return N(JSON.stringify(t, null, 2));
                            },
                            help: function () {
                                return N(
                                    "Available Commands:<br>\n\n        &nbsp;<span class='ab'><b>about</b></span><br>\n        &nbsp;<span class='ab'><b>contact</b></span><br>\n        &nbsp;<span class='ab'><b>link</b></span><br>\n        &nbsp;<span class='ab'><b>clear</b></span><br>\n\n      "
                                );
                            },
                            about: function () {
                                return N(
                                    "\n        &nbsp;<span class='ef'>I'm a computer science & engineer graduate Full stack web developer and Laravel Developer. Currently, I am working as a Junior Web Engineer at Binary Fusion. I am passionate about Technology. I am constantly seeking out new technologies and staying up-to-date on trends in the industry. I have completed PHP with Laravel Framework from BITM under BASIS. I Design and Develop top-quality, user-friendly, and responsive custom websites with Laravel or WordPress. I'm skilled in HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, Laravel, Node js, TypeScript, MySQL, and MongoDB. I'm passionate about coding and I'm fully capable of providing reliable & great-quality work. ♓</span><br>\n        &nbsp;<b class='cd'>Exp:</b> <span class='ef'>1 Years</span><br>\n        &nbsp;<b class='cd'>Skills:</b> <span class='ef'>PHP, Laravel, MysQl, Js, jQuery, Ajax, Node Js, Express Js, Bootstrap ..</span><br>\n        &nbsp;<b class='cd'>Working:</b> <span class='ef'>I’m currently working on Laravel</span><br>\n        &nbsp;<b class='cd'>Tools:</b> <span class='ef'>VsCode, PhpStorm, Postman, Git, GitHub  ..</span><br>\n        &nbsp;<b class='cd'>Learning:</b> <span class='ef'>I’m currently learning Laravel & Vue js</span><br>\n        &nbsp;<b class='cd'>Ask?:</b> <span class='ef'>Ask me about #Laravel #PHP #MySQL ..</span><br>\n        &nbsp;<b class='cd'>Hobby:</b> <span class='ef'>Coding, Reading Books, Travelling..</span><br>\n      "
                                );
                            },
                            contact: function () {
                                return N(
                                    "\n\n        &nbsp;<b class='cd'>Mobile:</b> <span class='ef' target='_blank'>01521429619</span><br>\n        &nbsp;<b class='cd'>Email:</b> <span class='ef' target='_blank'>sarkermajid21.bd@gmail.com</span><br>\n        &nbsp;<b class='cd'>Address:</b> <span class='ef' target='_blank'>Dhaka, Bangladesh</span><br>\n      "
                                );
                            },
                            link: function () {
                                return N(
                                    "\n\n        &nbsp;<b><a class='ab' target='_blank' href='https://github.com/sarkermajid'>Github</a>,\n         <a class='ab' target='_blank' href='https://stackoverflow.com/users/13860636/sarker-majid'>StackOverFlow</a>\n         </b><br>\n        &nbsp;<b class='cd'>SocialMedia:</b>\n         <ul>\n  <li><a class='ef' target='_blank' href=\"https://www.linkedin.com/in/sarker-majid-7383591a6/\">LinkedIn</a></li>\n  \n <li><a class='ef' target='_blank' href=\"https://twitter.com/SarkerMajid/\">Twitter</a></li>\n         <li><a class='ef' target='_blank' href=\"https://www.facebook.com/sarkermajid\">FaceBook</a></li>\n\n         </ul>\n\n         <br>\n      "
                                );
                            },
                        },
                        cursor: 0,
                        history: [],
                        options: { long: { pokedex: ["color"], loading: ["amount", "timeout"] }, short: { pokedex: ["h"] } },
                        prompt: Ft,
                        stdin: "",
                    };
                },
                created: function () {
                    var t = this;
                    (this.commands.clear = function () {
                        return (t.history = []), V();
                    }),
                        (this.commands.cd = function (e) {
                            var n = e._;
                            return ("home" !== n[1] && "home/" !== n[1]) || t.prompt !== Ft
                                ? ("../" !== n[1] && ".." !== n[1]) || t.prompt !== "".concat(Ft, "home")
                                    ? "." === n[1] || "./" === n[1] || "undefined" === typeof n[1]
                                        ? V()
                                        : D("cd: ".concat(n[1], ": No such file or directory or have not allowed! 😢"))
                                    : ((t.prompt = Ft), V())
                                : ((t.prompt = "".concat(Ft, "home")), V());
                        }),
                        (this.builtIn = function (e, n) {
                            if ("reverse" === e.trim().split(" ")[0]) {
                                e = e.trim();
                                var r = e.split(" ").slice(1).join(" ").replace(/"/g, "");
                                r && (t.stdin = r.split("").reverse().join(""));
                            } else n.commandNotFound(e);
                        }),
                        (this.autocompletionResolver = function () {
                            var e = t.cursor,
                                n = t.cursor,
                                r = "";
                            while (" " !== t.stdin[n - 1] && n - 1 > 0) n--, (r = "".concat(t.stdin[n]).concat(r));
                            var s = t.stdin.split(" ");
                            if (1 !== s.length) {
                                if ("" === t.stdin[e] || " " === t.stdin[e] || "undefined" === typeof t.stdin[e]) {
                                    var o = s[0];
                                    if ("undefined" !== typeof t.options.long[o] || "undefined" !== typeof t.options.short[o])
                                        if ("--" !== r.substring(0, 2)) {
                                            if ("-" === r.substring(0, 1)) {
                                                var i = [];
                                                if (
                                                    (t.options.short[o].forEach(function (t) {
                                                        ("-".concat(t).startsWith(r) || "-" === r) && i.push(t);
                                                    }),
                                                    1 === i.length)
                                                ) {
                                                    var c = "".concat(t.stdin.substring(0, n - 1), " -").concat(i[0]),
                                                        a = "".concat(t.stdin.substring(t.cursor)),
                                                        u = t.$watch(
                                                            function () {
                                                                return t.cursor;
                                                            },
                                                            function () {
                                                                (t.cursor = e + (i[0].length - r.length + 1)), u();
                                                            }
                                                        );
                                                    return void (t.stdin = "".concat(c).concat(a));
                                                }
                                                ("-" === r || i.length > 1) &&
                                                    t.history.push({
                                                        render: function (t) {
                                                            for (var e = i.length < 5 ? i.length : 4, n = i.length < 5 ? 1 : Math.ceil(i.length / e), r = 0, s = [], o = 0; o < n; o++) {
                                                                for (var c = [], a = 0; a < e; a++) c.push(t("td", "-".concat(i[r]))), r++;
                                                                s.push(t("tr", [c]));
                                                            }
                                                            return t("table", { style: { width: "100%" } }, [s]);
                                                        },
                                                    });
                                            }
                                        } else {
                                            var l = [];
                                            if (
                                                (t.options.long[o].forEach(function (t) {
                                                    ("--".concat(t).startsWith(r) || "--" === r) && l.push(t);
                                                }),
                                                1 === l.length)
                                            ) {
                                                var h = "".concat(t.stdin.substring(0, n - 1), " --").concat(l[0]),
                                                    d = "".concat(t.stdin.substring(t.cursor)),
                                                    f = t.$watch(
                                                        function () {
                                                            return t.cursor;
                                                        },
                                                        function () {
                                                            (t.cursor = e + (l[0].length - r.length + 2)), f();
                                                        }
                                                    );
                                                return void (t.stdin = "".concat(h).concat(d));
                                            }
                                            ("--" === r || l.length > 1) &&
                                                t.history.push({
                                                    render: function (t) {
                                                        for (var e = l.length < 5 ? l.length : 4, n = l.length < 5 ? 1 : Math.ceil(l.length / e), r = 0, s = [], o = 0; o < n; o++) {
                                                            for (var i = [], c = 0; c < e; c++) i.push(t("td", "--".concat(l[r]))), r++;
                                                            s.push(t("tr", [i]));
                                                        }
                                                        return t("table", { style: { width: "100%" } }, [s]);
                                                    },
                                                });
                                        }
                                }
                            } else {
                                var p = s[0],
                                    m = [],
                                    y = [].concat($t(Object.keys(t.commands)), ["reverse"]).sort();
                                if (
                                    (y.forEach(function (t) {
                                        t.startsWith(p) && m.push(t);
                                    }),
                                    "" !== t.stdin &&
                                        m.length > 1 &&
                                        t.history.push({
                                            render: function (t) {
                                                for (var e = m.length < 5 ? m.length : 4, n = m.length < 5 ? 1 : Math.ceil(m.length / e), r = 0, s = [], o = 0; o < n; o++) {
                                                    for (var i = [], c = 0; c < e; c++) i.push(t("td", m[r])), r++;
                                                    s.push(t("tr", [i]));
                                                }
                                                return t("table", { style: { width: "100%" } }, [s]);
                                            },
                                        }),
                                    1 === m.length)
                                ) {
                                    var v = t.$watch(
                                        function () {
                                            return t.cursor;
                                        },
                                        function () {
                                            (t.cursor = e + (m[0].length - r.length + 0)), v();
                                        }
                                    );
                                    t.stdin = m[0];
                                }
                            }
                        });
                },
            },
            Lt = Tt,
            Ht = (n("859e"), Object(p["a"])(Lt, s, o, !1, null, null, null)),
            Bt = Ht.exports;
        (r["a"].config.productionTip = !1),
            new r["a"]({
                render: function (t) {
                    return t(Bt);
                },
            }).$mount("#app");
    },
    "590b": function (t, e, n) {
        "use strict";
        n("acc8");
    },
    "7c28": function (t, e, n) {
        t.exports = n.p + "img/profile.a639cc40.jpg";
    },
    "836c": function (t, e, n) {
        "use strict";
        n("b50a");
    },
    "839b": function (t, e, n) {
        "use strict";
        n("106f");
    },
    "859e": function (t, e, n) {
        "use strict";
        n("dff8");
    },
    acc8: function (t, e, n) {},
    b50a: function (t, e, n) {},
    dff8: function (t, e, n) {},
    e589: function (t, e, n) {
        "use strict";
        n("4365");
    },
});
//# sourceMappingURL=app.41e3a19e.js.map
