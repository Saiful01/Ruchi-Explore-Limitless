!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = t || self).bootstrap = {}, t.jQuery)
}(this, function (t, f) {
    "use strict";

    function s(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
        }
    }

    function r(t, e, i) {
        return e && s(t.prototype, e), i && s(t, i), t
    }

    function l(n) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {}, e = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
                return Object.getOwnPropertyDescriptor(o, t).enumerable
            }))), e.forEach(function (t) {
                var e, i, s;
                e = n, s = o[i = t], i in e ? Object.defineProperty(e, i, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[i] = s
            })
        }
        return n
    }

    f = f && f.hasOwnProperty("default") ? f.default : f;
    var e = "transitionend";

    function i(t) {
        var e = this, i = !1;
        return f(this).one(m.TRANSITION_END, function () {
            i = !0
        }), setTimeout(function () {
            i || m.triggerTransitionEnd(e)
        }, t), this
    }

    var m = {
        TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) ;
            return t
        }, getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var i = t.getAttribute("href");
                e = i && "#" !== i ? i.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        }, getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var e = f(t).css("transition-duration"), i = f(t).css("transition-delay"), s = parseFloat(e),
                n = parseFloat(i);
            return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(i))) : 0
        }, reflow: function (t) {
            return t.offsetHeight
        }, triggerTransitionEnd: function (t) {
            f(t).trigger(e)
        }, supportsTransitionEnd: function () {
            return Boolean(e)
        }, isElement: function (t) {
            return (t[0] || t).nodeType
        }, typeCheckConfig: function (t, e, i) {
            for (var s in i) if (Object.prototype.hasOwnProperty.call(i, s)) {
                var n = i[s], o = e[s],
                    r = o && m.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(n).test(r)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + r + '" but expected type "' + n + '".')
            }
            var a
        }, findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? m.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    f.fn.emulateTransitionEnd = i, f.event.special[m.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function (t) {
            if (f(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var n = "alert", o = "bs.alert", a = "." + o, h = f.fn[n],
        c = {CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api"}, d = "alert",
        u = "fade", p = "show", g = function () {
            function s(t) {
                this._element = t
            }

            var t = s.prototype;
            return t.close = function (t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function () {
                f.removeData(this._element, o), this._element = null
            }, t._getRootElement = function (t) {
                var e = m.getSelectorFromElement(t), i = !1;
                return e && (i = document.querySelector(e)), i = i || f(t).closest("." + d)[0]
            }, t._triggerCloseEvent = function (t) {
                var e = f.Event(c.CLOSE);
                return f(t).trigger(e), e
            }, t._removeElement = function (e) {
                var i = this;
                if (f(e).removeClass(p), f(e).hasClass(u)) {
                    var t = m.getTransitionDurationFromElement(e);
                    f(e).one(m.TRANSITION_END, function (t) {
                        return i._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function (t) {
                f(t).detach().trigger(c.CLOSED).remove()
            }, s._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = f(this), e = t.data(o);
                    e || (e = new s(this), t.data(o, e)), "close" === i && e[i](this)
                })
            }, s._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(s, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }]), s
        }();
    f(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), f.fn[n] = g._jQueryInterface, f.fn[n].Constructor = g, f.fn[n].noConflict = function () {
        return f.fn[n] = h, g._jQueryInterface
    };
    var _ = "button", v = "bs.button", y = "." + v, w = ".data-api", b = f.fn[_], k = "active", x = "btn", C = "focus",
        T = '[data-toggle^="button"]', E = '[data-toggle="buttons"]', D = 'input:not([type="hidden"])', S = ".active",
        M = ".btn", I = {CLICK_DATA_API: "click" + y + w, FOCUS_BLUR_DATA_API: "focus" + y + w + " blur" + y + w},
        A = function () {
            function i(t) {
                this._element = t
            }

            var t = i.prototype;
            return t.toggle = function () {
                var t = !0, e = !0, i = f(this._element).closest(E)[0];
                if (i) {
                    var s = this._element.querySelector(D);
                    if (s) {
                        if ("radio" === s.type) if (s.checked && this._element.classList.contains(k)) t = !1; else {
                            var n = i.querySelector(S);
                            n && f(n).removeClass(k)
                        }
                        if (t) {
                            if (s.hasAttribute("disabled") || i.hasAttribute("disabled") || s.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            s.checked = !this._element.classList.contains(k), f(s).trigger("change")
                        }
                        s.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(k)), t && f(this._element).toggleClass(k)
            }, t.dispose = function () {
                f.removeData(this._element, v), this._element = null
            }, i._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = f(this).data(v);
                    t || (t = new i(this), f(this).data(v, t)), "toggle" === e && t[e]()
                })
            }, r(i, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }]), i
        }();
    f(document).on(I.CLICK_DATA_API, T, function (t) {
        t.preventDefault();
        var e = t.target;
        f(e).hasClass(x) || (e = f(e).closest(M)), A._jQueryInterface.call(f(e), "toggle")
    }).on(I.FOCUS_BLUR_DATA_API, T, function (t) {
        var e = f(t.target).closest(M)[0];
        f(e).toggleClass(C, /^focus(in)?$/.test(t.type))
    }), f.fn[_] = A._jQueryInterface, f.fn[_].Constructor = A, f.fn[_].noConflict = function () {
        return f.fn[_] = b, A._jQueryInterface
    };
    var $ = "carousel", O = "bs.carousel", N = "." + O, P = ".data-api", F = f.fn[$],
        H = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, j = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, L = "next", z = "prev", W = "left", U = "right", R = {
            SLIDE: "slide" + N,
            SLID: "slid" + N,
            KEYDOWN: "keydown" + N,
            MOUSEENTER: "mouseenter" + N,
            MOUSELEAVE: "mouseleave" + N,
            TOUCHSTART: "touchstart" + N,
            TOUCHMOVE: "touchmove" + N,
            TOUCHEND: "touchend" + N,
            POINTERDOWN: "pointerdown" + N,
            POINTERUP: "pointerup" + N,
            DRAG_START: "dragstart" + N,
            LOAD_DATA_API: "load" + N + P,
            CLICK_DATA_API: "click" + N + P
        }, B = "carousel", q = "active", Y = "slide", V = "carousel-item-right", K = "carousel-item-left",
        Q = "carousel-item-next", X = "carousel-item-prev", J = "pointer-event", G = ".active",
        Z = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item img",
        it = ".carousel-item-next, .carousel-item-prev", st = ".carousel-indicators",
        nt = "[data-slide], [data-slide-to]", ot = '[data-ride="carousel"]', rt = {TOUCH: "touch", PEN: "pen"},
        at = function () {
            function o(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(st), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }

            var t = o.prototype;
            return t.next = function () {
                this._isSliding || this._slide(L)
            }, t.nextWhenVisible = function () {
                !document.hidden && f(this._element).is(":visible") && "hidden" !== f(this._element).css("visibility") && this.next()
            }, t.prev = function () {
                this._isSliding || this._slide(z)
            }, t.pause = function (t) {
                t || (this._isPaused = !0), this._element.querySelector(it) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function (t) {
                var e = this;
                this._activeElement = this._element.querySelector(Z);
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) f(this._element).one(R.SLID, function () {
                    return e.to(t)
                }); else {
                    if (i === t) return this.pause(), void this.cycle();
                    var s = i < t ? L : z;
                    this._slide(s, this._items[t])
                }
            }, t.dispose = function () {
                f(this._element).off(N), f.removeData(this._element, O), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function (t) {
                return t = l({}, H, t), m.typeCheckConfig($, t, j), t
            }, t._handleSwipe = function () {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    0 < e && this.prev(), e < 0 && this.next()
                }
            }, t._addEventListeners = function () {
                var e = this;
                this._config.keyboard && f(this._element).on(R.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && f(this._element).on(R.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(R.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function () {
                var i = this;
                if (this._touchSupported) {
                    var e = function (t) {
                        i._pointerEvent && rt[t.originalEvent.pointerType.toUpperCase()] ? i.touchStartX = t.originalEvent.clientX : i._pointerEvent || (i.touchStartX = t.originalEvent.touches[0].clientX)
                    }, s = function (t) {
                        i._pointerEvent && rt[t.originalEvent.pointerType.toUpperCase()] && (i.touchDeltaX = t.originalEvent.clientX - i.touchStartX), i._handleSwipe(), "hover" === i._config.pause && (i.pause(), i.touchTimeout && clearTimeout(i.touchTimeout), i.touchTimeout = setTimeout(function (t) {
                            return i.cycle(t)
                        }, 500 + i._config.interval))
                    };
                    f(this._element.querySelectorAll(et)).on(R.DRAG_START, function (t) {
                        return t.preventDefault()
                    }), this._pointerEvent ? (f(this._element).on(R.POINTERDOWN, function (t) {
                        return e(t)
                    }), f(this._element).on(R.POINTERUP, function (t) {
                        return s(t)
                    }), this._element.classList.add(J)) : (f(this._element).on(R.TOUCHSTART, function (t) {
                        return e(t)
                    }), f(this._element).on(R.TOUCHMOVE, function (t) {
                        var e;
                        (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? i.touchDeltaX = 0 : i.touchDeltaX = e.originalEvent.touches[0].clientX - i.touchStartX
                    }), f(this._element).on(R.TOUCHEND, function (t) {
                        return s(t)
                    }))
                }
            }, t._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function (t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t)
            }, t._getItemByDirection = function (t, e) {
                var i = t === L, s = t === z, n = this._getItemIndex(e), o = this._items.length - 1;
                if ((s && 0 === n || i && n === o) && !this._config.wrap) return e;
                var r = (n + (t === z ? -1 : 1)) % this._items.length;
                return -1 == r ? this._items[this._items.length - 1] : this._items[r]
            }, t._triggerSlideEvent = function (t, e) {
                var i = this._getItemIndex(t), s = this._getItemIndex(this._element.querySelector(Z)),
                    n = f.Event(R.SLIDE, {relatedTarget: t, direction: e, from: s, to: i});
                return f(this._element).trigger(n), n
            }, t._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(G));
                    f(e).removeClass(q);
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && f(i).addClass(q)
                }
            }, t._slide = function (t, e) {
                var i, s, n, o = this, r = this._element.querySelector(Z), a = this._getItemIndex(r),
                    l = e || r && this._getItemByDirection(t, r), h = this._getItemIndex(l),
                    c = Boolean(this._interval);
                if (n = t === L ? (i = K, s = Q, W) : (i = V, s = X, U), l && f(l).hasClass(q)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, n).isDefaultPrevented() && r && l) {
                    this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                    var d = f.Event(R.SLID, {relatedTarget: l, direction: n, from: a, to: h});
                    if (f(this._element).hasClass(Y)) {
                        f(l).addClass(s), m.reflow(l), f(r).addClass(i), f(l).addClass(i);
                        var u = parseInt(l.getAttribute("data-interval"), 10);
                        u ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = u) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var p = m.getTransitionDurationFromElement(r);
                        f(r).one(m.TRANSITION_END, function () {
                            f(l).removeClass(i + " " + s).addClass(q), f(r).removeClass(q + " " + s + " " + i), o._isSliding = !1, setTimeout(function () {
                                return f(o._element).trigger(d)
                            }, 0)
                        }).emulateTransitionEnd(p)
                    } else f(r).removeClass(q), f(l).addClass(q), this._isSliding = !1, f(this._element).trigger(d);
                    c && this.cycle()
                }
            }, o._jQueryInterface = function (s) {
                return this.each(function () {
                    var t = f(this).data(O), e = l({}, H, f(this).data());
                    "object" == typeof s && (e = l({}, e, s));
                    var i = "string" == typeof s ? s : e.slide;
                    if (t || (t = new o(this, e), f(this).data(O, t)), "number" == typeof s) t.to(s); else if ("string" == typeof i) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    } else e.interval && e.ride && (t.pause(), t.cycle())
                })
            }, o._dataApiClickHandler = function (t) {
                var e = m.getSelectorFromElement(this);
                if (e) {
                    var i = f(e)[0];
                    if (i && f(i).hasClass(B)) {
                        var s = l({}, f(i).data(), f(this).data()), n = this.getAttribute("data-slide-to");
                        n && (s.interval = !1), o._jQueryInterface.call(f(i), s), n && f(i).data(O).to(n), t.preventDefault()
                    }
                }
            }, r(o, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return H
                }
            }]), o
        }();
    f(document).on(R.CLICK_DATA_API, nt, at._dataApiClickHandler), f(window).on(R.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(ot)), e = 0, i = t.length; e < i; e++) {
            var s = f(t[e]);
            at._jQueryInterface.call(s, s.data())
        }
    }), f.fn[$] = at._jQueryInterface, f.fn[$].Constructor = at, f.fn[$].noConflict = function () {
        return f.fn[$] = F, at._jQueryInterface
    };
    var lt = "collapse", ht = "bs.collapse", ct = "." + ht, dt = f.fn[lt], ut = {toggle: !0, parent: ""},
        pt = {toggle: "boolean", parent: "(string|element)"}, ft = {
            SHOW: "show" + ct,
            SHOWN: "shown" + ct,
            HIDE: "hide" + ct,
            HIDDEN: "hidden" + ct,
            CLICK_DATA_API: "click" + ct + ".data-api"
        }, mt = "show", gt = "collapse", _t = "collapsing", vt = "collapsed", yt = "width", wt = "height",
        bt = ".show, .collapsing", kt = '[data-toggle="collapse"]', xt = function () {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = [].slice.call(document.querySelectorAll(kt)), s = 0, n = i.length; s < n; s++) {
                    var o = i[s], r = m.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(r)).filter(function (t) {
                            return t === e
                        });
                    null !== r && 0 < a.length && (this._selector = r, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var t = a.prototype;
            return t.toggle = function () {
                f(this._element).hasClass(mt) ? this.hide() : this.show()
            }, t.show = function () {
                var t, e, i = this;
                if (!this._isTransitioning && !f(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(bt)).filter(function (t) {
                    return "string" == typeof i._config.parent ? t.getAttribute("data-parent") === i._config.parent : t.classList.contains(gt)
                })).length && (t = null), !(t && (e = f(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                    var s = f.Event(ft.SHOW);
                    if (f(this._element).trigger(s), !s.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(f(t).not(this._selector), "hide"), e || f(t).data(ht, null));
                        var n = this._getDimension();
                        f(this._element).removeClass(gt).addClass(_t), this._element.style[n] = 0, this._triggerArray.length && f(this._triggerArray).removeClass(vt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (n[0].toUpperCase() + n.slice(1)),
                            r = m.getTransitionDurationFromElement(this._element);
                        f(this._element).one(m.TRANSITION_END, function () {
                            f(i._element).removeClass(_t).addClass(gt).addClass(mt), i._element.style[n] = "", i.setTransitioning(!1), f(i._element).trigger(ft.SHOWN)
                        }).emulateTransitionEnd(r), this._element.style[n] = this._element[o] + "px"
                    }
                }
            }, t.hide = function () {
                var t = this;
                if (!this._isTransitioning && f(this._element).hasClass(mt)) {
                    var e = f.Event(ft.HIDE);
                    if (f(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", m.reflow(this._element), f(this._element).addClass(_t).removeClass(gt).removeClass(mt);
                        var s = this._triggerArray.length;
                        if (0 < s) for (var n = 0; n < s; n++) {
                            var o = this._triggerArray[n], r = m.getSelectorFromElement(o);
                            if (null !== r) f([].slice.call(document.querySelectorAll(r))).hasClass(mt) || f(o).addClass(vt).attr("aria-expanded", !1)
                        }
                        this.setTransitioning(!0);
                        this._element.style[i] = "";
                        var a = m.getTransitionDurationFromElement(this._element);
                        f(this._element).one(m.TRANSITION_END, function () {
                            t.setTransitioning(!1), f(t._element).removeClass(_t).addClass(gt).trigger(ft.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function (t) {
                this._isTransitioning = t
            }, t.dispose = function () {
                f.removeData(this._element, ht), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function (t) {
                return (t = l({}, ut, t)).toggle = Boolean(t.toggle), m.typeCheckConfig(lt, t, pt), t
            }, t._getDimension = function () {
                return f(this._element).hasClass(yt) ? yt : wt
            }, t._getParent = function () {
                var t, i = this;
                m.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    s = [].slice.call(t.querySelectorAll(e));
                return f(s).each(function (t, e) {
                    i._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function (t, e) {
                var i = f(t).hasClass(mt);
                e.length && f(e).toggleClass(vt, !i).attr("aria-expanded", i)
            }, a._getTargetFromElement = function (t) {
                var e = m.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, a._jQueryInterface = function (s) {
                return this.each(function () {
                    var t = f(this), e = t.data(ht), i = l({}, ut, t.data(), "object" == typeof s && s ? s : {});
                    if (!e && i.toggle && /show|hide/.test(s) && (i.toggle = !1), e || (e = new a(this, i), t.data(ht, e)), "string" == typeof s) {
                        if (void 0 === e[s]) throw new TypeError('No method named "' + s + '"');
                        e[s]()
                    }
                })
            }, r(a, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return ut
                }
            }]), a
        }();
    f(document).on(ft.CLICK_DATA_API, kt, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var i = f(this), e = m.getSelectorFromElement(this), s = [].slice.call(document.querySelectorAll(e));
        f(s).each(function () {
            var t = f(this), e = t.data(ht) ? "toggle" : i.data();
            xt._jQueryInterface.call(t, e)
        })
    }), f.fn[lt] = xt._jQueryInterface, f.fn[lt].Constructor = xt, f.fn[lt].noConflict = function () {
        return f.fn[lt] = dt, xt._jQueryInterface
    };
    for (var Ct = "undefined" != typeof window && "undefined" != typeof document, Tt = ["Edge", "Trident", "Firefox"], Et = 0, Dt = 0; Dt < Tt.length; Dt += 1) if (Ct && 0 <= navigator.userAgent.indexOf(Tt[Dt])) {
        Et = 1;
        break
    }
    var St = Ct && window.Promise ? function (t) {
        var e = !1;
        return function () {
            e || (e = !0, window.Promise.resolve().then(function () {
                e = !1, t()
            }))
        }
    } : function (t) {
        var e = !1;
        return function () {
            e || (e = !0, setTimeout(function () {
                e = !1, t()
            }, Et))
        }
    };

    function Mt(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function It(t, e) {
        if (1 !== t.nodeType) return [];
        var i = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? i[e] : i
    }

    function At(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function $t(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case"HTML":
            case"BODY":
                return t.ownerDocument.body;
            case"#document":
                return t.body
        }
        var e = It(t), i = e.overflow, s = e.overflowX, n = e.overflowY;
        return /(auto|scroll|overlay)/.test(i + n + s) ? t : $t(At(t))
    }

    var Ot = Ct && !(!window.MSInputMethodContext || !document.documentMode),
        Nt = Ct && /MSIE 10/.test(navigator.userAgent);

    function Pt(t) {
        return 11 === t ? Ot : 10 === t ? Nt : Ot || Nt
    }

    function Ft(t) {
        if (!t) return document.documentElement;
        for (var e = Pt(10) ? document.body : null, i = t.offsetParent || null; i === e && t.nextElementSibling;) i = (t = t.nextElementSibling).offsetParent;
        var s = i && i.nodeName;
        return s && "BODY" !== s && "HTML" !== s ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === It(i, "position") ? Ft(i) : i : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function Ht(t) {
        return null !== t.parentNode ? Ht(t.parentNode) : t
    }

    function jt(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, s = i ? t : e, n = i ? e : t,
            o = document.createRange();
        o.setStart(s, 0), o.setEnd(n, 0);
        var r, a, l = o.commonAncestorContainer;
        if (t !== l && e !== l || s.contains(n)) return "BODY" === (a = (r = l).nodeName) || "HTML" !== a && Ft(r.firstElementChild) !== r ? Ft(l) : l;
        var h = Ht(t);
        return h.host ? jt(h.host, e) : jt(t, Ht(e).host)
    }

    function Lt(t, e) {
        var i = "top" === (1 < arguments.length && void 0 !== e ? e : "top") ? "scrollTop" : "scrollLeft",
            s = t.nodeName;
        if ("BODY" !== s && "HTML" !== s) return t[i];
        var n = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || n)[i]
    }

    function zt(t, e) {
        var i = "x" === e ? "Left" : "Top", s = "Left" == i ? "Right" : "Bottom";
        return parseFloat(t["border" + i + "Width"], 10) + parseFloat(t["border" + s + "Width"], 10)
    }

    function Wt(t, e, i, s) {
        return Math.max(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], Pt(10) ? parseInt(i["offset" + t]) + parseInt(s["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(s["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function Ut(t) {
        var e = t.body, i = t.documentElement, s = Pt(10) && getComputedStyle(i);
        return {height: Wt("Height", e, i, s), width: Wt("Width", e, i, s)}
    }

    var Rt = function (t, e, i) {
        return e && Bt(t.prototype, e), i && Bt(t, i), t
    };

    function Bt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
        }
    }

    function qt(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    var Yt = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
        }
        return t
    };

    function Vt(t) {
        return Yt({}, t, {right: t.left + t.width, bottom: t.top + t.height})
    }

    function Kt(t) {
        var e = {};
        try {
            if (Pt(10)) {
                e = t.getBoundingClientRect();
                var i = Lt(t, "top"), s = Lt(t, "left");
                e.top += i, e.left += s, e.bottom += i, e.right += s
            } else e = t.getBoundingClientRect()
        } catch (t) {
        }
        var n = {left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top},
            o = "HTML" === t.nodeName ? Ut(t.ownerDocument) : {}, r = o.width || t.clientWidth || n.right - n.left,
            a = o.height || t.clientHeight || n.bottom - n.top, l = t.offsetWidth - r, h = t.offsetHeight - a;
        if (l || h) {
            var c = It(t);
            l -= zt(c, "x"), h -= zt(c, "y"), n.width -= l, n.height -= h
        }
        return Vt(n)
    }

    function Qt(t, e, i) {
        var s = 2 < arguments.length && void 0 !== i && i, n = Pt(10), o = "HTML" === e.nodeName, r = Kt(t), a = Kt(e),
            l = $t(t), h = It(e), c = parseFloat(h.borderTopWidth, 10), d = parseFloat(h.borderLeftWidth, 10);
        s && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var u = Vt({top: r.top - a.top - c, left: r.left - a.left - d, width: r.width, height: r.height});
        if (u.marginTop = 0, u.marginLeft = 0, !n && o) {
            var p = parseFloat(h.marginTop, 10), f = parseFloat(h.marginLeft, 10);
            u.top -= c - p, u.bottom -= c - p, u.left -= d - f, u.right -= d - f, u.marginTop = p, u.marginLeft = f
        }
        return (n && !s ? e.contains(l) : e === l && "BODY" !== l.nodeName) && (u = function (t, e, i) {
            var s = 2 < arguments.length && void 0 !== i && i, n = Lt(e, "top"), o = Lt(e, "left"), r = s ? -1 : 1;
            return t.top += n * r, t.bottom += n * r, t.left += o * r, t.right += o * r, t
        }(u, e)), u
    }

    function Xt(t) {
        if (!t || !t.parentElement || Pt()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === It(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function Jt(t, e, i, s, n) {
        var o = 4 < arguments.length && void 0 !== n && n, r = {top: 0, left: 0}, a = o ? Xt(t) : jt(t, e);
        if ("viewport" === s) r = function (t, e) {
            var i = 1 < arguments.length && void 0 !== e && e, s = t.ownerDocument.documentElement, n = Qt(t, s),
                o = Math.max(s.clientWidth, window.innerWidth || 0),
                r = Math.max(s.clientHeight, window.innerHeight || 0), a = i ? 0 : Lt(s), l = i ? 0 : Lt(s, "left");
            return Vt({top: a - n.top + n.marginTop, left: l - n.left + n.marginLeft, width: o, height: r})
        }(a, o); else {
            var l = void 0;
            "scrollParent" === s ? "BODY" === (l = $t(At(e))).nodeName && (l = t.ownerDocument.documentElement) : l = "window" === s ? t.ownerDocument.documentElement : s;
            var h = Qt(l, a, o);
            if ("HTML" !== l.nodeName || function t(e) {
                var i = e.nodeName;
                if ("BODY" === i || "HTML" === i) return !1;
                if ("fixed" === It(e, "position")) return !0;
                var s = At(e);
                return !!s && t(s)
            }(a)) r = h; else {
                var c = Ut(t.ownerDocument), d = c.height, u = c.width;
                r.top += h.top - h.marginTop, r.bottom = d + h.top, r.left += h.left - h.marginLeft, r.right = u + h.left
            }
        }
        var p = "number" == typeof(i = i || 0);
        return r.left += p ? i : i.left || 0, r.top += p ? i : i.top || 0, r.right -= p ? i : i.right || 0, r.bottom -= p ? i : i.bottom || 0, r
    }

    function Gt(t, e, s, i, n, o) {
        var r = 5 < arguments.length && void 0 !== o ? o : 0;
        if (-1 === t.indexOf("auto")) return t;
        var a = Jt(s, i, r, n), l = {
            top: {width: a.width, height: e.top - a.top},
            right: {width: a.right - e.right, height: a.height},
            bottom: {width: a.width, height: a.bottom - e.bottom},
            left: {width: e.left - a.left, height: a.height}
        }, h = Object.keys(l).map(function (t) {
            return Yt({key: t}, l[t], {area: (e = l[t]).width * e.height});
            var e
        }).sort(function (t, e) {
            return e.area - t.area
        }), c = h.filter(function (t) {
            var e = t.width, i = t.height;
            return e >= s.clientWidth && i >= s.clientHeight
        }), d = 0 < c.length ? c[0].key : h[0].key, u = t.split("-")[1];
        return d + (u ? "-" + u : "")
    }

    function Zt(t, e, i, s) {
        var n = 3 < arguments.length && void 0 !== s ? s : null;
        return Qt(i, n ? Xt(e) : jt(e, i), n)
    }

    function te(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            s = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {width: t.offsetWidth + s, height: t.offsetHeight + i}
    }

    function ee(t) {
        var e = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t]
        })
    }

    function ie(t, e, i) {
        i = i.split("-")[0];
        var s = te(t), n = {width: s.width, height: s.height}, o = -1 !== ["right", "left"].indexOf(i),
            r = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", h = o ? "width" : "height";
        return n[r] = e[r] + e[l] / 2 - s[l] / 2, n[a] = i === a ? e[a] - s[h] : e[ee(a)], n
    }

    function se(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function ne(t, i, e) {
        return (void 0 === e ? t : t.slice(0, function (t, e, i) {
            if (Array.prototype.findIndex) return t.findIndex(function (t) {
                return t[e] === i
            });
            var s = se(t, function (t) {
                return t[e] === i
            });
            return t.indexOf(s)
        }(t, "name", e))).forEach(function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var e = t.function || t.fn;
            t.enabled && Mt(e) && (i.offsets.popper = Vt(i.offsets.popper), i.offsets.reference = Vt(i.offsets.reference), i = e(i, t))
        }), i
    }

    function oe(t, i) {
        return t.some(function (t) {
            var e = t.name;
            return t.enabled && e === i
        })
    }

    function re(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), s = 0; s < e.length; s++) {
            var n = e[s], o = n ? "" + n + i : t;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function ae(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function le(t, e, i, s) {
        i.updateBound = s, ae(t).addEventListener("resize", i.updateBound, {passive: !0});
        var n = $t(t);
        return function t(e, i, s, n) {
            var o = "BODY" === e.nodeName, r = o ? e.ownerDocument.defaultView : e;
            r.addEventListener(i, s, {passive: !0}), o || t($t(r.parentNode), i, s, n), n.push(r)
        }(n, "scroll", i.updateBound, i.scrollParents), i.scrollElement = n, i.eventsEnabled = !0, i
    }

    function he() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ae(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function ce(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function de(i, s) {
        Object.keys(s).forEach(function (t) {
            var e = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ce(s[t]) && (e = "px"), i.style[t] = s[t] + e
        })
    }

    function ue(t, e) {
        function i(t) {
            return t
        }

        var s = t.offsets, n = s.popper, o = s.reference, r = Math.round, a = Math.floor, l = r(o.width),
            h = r(n.width), c = -1 !== ["left", "right"].indexOf(t.placement), d = -1 !== t.placement.indexOf("-"),
            u = e ? c || d || l % 2 == h % 2 ? r : a : i, p = e ? r : i;
        return {
            left: u(l % 2 == 1 && h % 2 == 1 && !d && e ? n.left - 1 : n.left),
            top: p(n.top),
            bottom: p(n.bottom),
            right: u(n.right)
        }
    }

    var pe = Ct && /Firefox/i.test(navigator.userAgent);

    function fe(t, e, i) {
        var s = se(t, function (t) {
            return t.name === e
        }), n = !!s && t.some(function (t) {
            return t.name === i && t.enabled && t.order < s.order
        });
        if (!n) {
            var o = "`" + e + "`", r = "`" + i + "`";
            console.warn(r + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return n
    }

    var me = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ge = me.slice(3);

    function _e(t, e) {
        var i = 1 < arguments.length && void 0 !== e && e, s = ge.indexOf(t),
            n = ge.slice(s + 1).concat(ge.slice(0, s));
        return i ? n.reverse() : n
    }

    var ve = "flip", ye = "clockwise", we = "counterclockwise";

    function be(t, n, o, e) {
        var r = [0, 0], a = -1 !== ["right", "left"].indexOf(e), i = t.split(/(\+|\-)/).map(function (t) {
            return t.trim()
        }), s = i.indexOf(se(i, function (t) {
            return -1 !== t.search(/,|\s/)
        }));
        i[s] && -1 === i[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            h = -1 !== s ? [i.slice(0, s).concat([i[s].split(l)[0]]), [i[s].split(l)[1]].concat(i.slice(s + 1))] : [i];
        return (h = h.map(function (t, e) {
            var i = (1 === e ? !a : a) ? "height" : "width", s = !1;
            return t.reduce(function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
            }, []).map(function (t) {
                return function (t, e, i, s) {
                    var n = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +n[1], r = n[2];
                    if (!o) return t;
                    if (0 !== r.indexOf("%")) return "vh" !== r && "vw" !== r ? o : ("vh" === r ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    var a = void 0;
                    switch (r) {
                        case"%p":
                            a = i;
                            break;
                        case"%":
                        case"%r":
                        default:
                            a = s
                    }
                    return Vt(a)[e] / 100 * o
                }(t, i, n, o)
            })
        })).forEach(function (i, s) {
            i.forEach(function (t, e) {
                ce(t) && (r[s] += t * ("-" === i[e - 1] ? -1 : 1))
            })
        }), r
    }

    var ke = {
        placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (t) {
                    var e = t.placement, i = e.split("-")[0], s = e.split("-")[1];
                    if (s) {
                        var n = t.offsets, o = n.reference, r = n.popper, a = -1 !== ["bottom", "top"].indexOf(i),
                            l = a ? "left" : "top", h = a ? "width" : "height",
                            c = {start: qt({}, l, o[l]), end: qt({}, l, o[l] + o[h] - r[h])};
                        t.offsets.popper = Yt({}, r, c[s])
                    }
                    return t
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (t, e) {
                    var i = e.offset, s = t.placement, n = t.offsets, o = n.popper, r = n.reference,
                        a = s.split("-")[0], l = void 0;
                    return l = ce(+i) ? [+i, 0] : be(i, o, r, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (t, s) {
                    var e = s.boundariesElement || Ft(t.instance.popper);
                    t.instance.reference === e && (e = Ft(e));
                    var i = re("transform"), n = t.instance.popper.style, o = n.top, r = n.left, a = n[i];
                    n.top = "", n.left = "", n[i] = "";
                    var l = Jt(t.instance.popper, t.instance.reference, s.padding, e, t.positionFixed);
                    n.top = o, n.left = r, n[i] = a, s.boundaries = l;
                    var h = s.priority, c = t.offsets.popper, d = {
                        primary: function (t) {
                            var e = c[t];
                            return c[t] < l[t] && !s.escapeWithReference && (e = Math.max(c[t], l[t])), qt({}, t, e)
                        }, secondary: function (t) {
                            var e = "right" === t ? "left" : "top", i = c[e];
                            return c[t] > l[t] && !s.escapeWithReference && (i = Math.min(c[e], l[t] - ("right" === t ? c.width : c.height))), qt({}, e, i)
                        }
                    };
                    return h.forEach(function (t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                        c = Yt({}, c, d[e](t))
                    }), t.offsets.popper = c, t
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (t) {
                    var e = t.offsets, i = e.popper, s = e.reference, n = t.placement.split("-")[0], o = Math.floor,
                        r = -1 !== ["top", "bottom"].indexOf(n), a = r ? "right" : "bottom", l = r ? "left" : "top",
                        h = r ? "width" : "height";
                    return i[a] < o(s[l]) && (t.offsets.popper[l] = o(s[l]) - i[h]), i[l] > o(s[a]) && (t.offsets.popper[l] = o(s[a])), t
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (t, e) {
                    var i;
                    if (!fe(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var s = e.element;
                    if ("string" == typeof s) {
                        if (!(s = t.instance.popper.querySelector(s))) return t
                    } else if (!t.instance.popper.contains(s)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var n = t.placement.split("-")[0], o = t.offsets, r = o.popper, a = o.reference,
                        l = -1 !== ["left", "right"].indexOf(n), h = l ? "height" : "width", c = l ? "Top" : "Left",
                        d = c.toLowerCase(), u = l ? "left" : "top", p = l ? "bottom" : "right", f = te(s)[h];
                    a[p] - f < r[d] && (t.offsets.popper[d] -= r[d] - (a[p] - f)), a[d] + f > r[p] && (t.offsets.popper[d] += a[d] + f - r[p]), t.offsets.popper = Vt(t.offsets.popper);
                    var m = a[d] + a[h] / 2 - f / 2, g = It(t.instance.popper), _ = parseFloat(g["margin" + c], 10),
                        v = parseFloat(g["border" + c + "Width"], 10), y = m - t.offsets.popper[d] - _ - v;
                    return y = Math.max(Math.min(r[h] - f, y), 0), t.arrowElement = s, t.offsets.arrow = (qt(i = {}, d, Math.round(y)), qt(i, u, ""), i), t
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (f, m) {
                    if (oe(f.instance.modifiers, "inner")) return f;
                    if (f.flipped && f.placement === f.originalPlacement) return f;
                    var g = Jt(f.instance.popper, f.instance.reference, m.padding, m.boundariesElement, f.positionFixed),
                        _ = f.placement.split("-")[0], v = ee(_), y = f.placement.split("-")[1] || "", w = [];
                    switch (m.behavior) {
                        case ve:
                            w = [_, v];
                            break;
                        case ye:
                            w = _e(_);
                            break;
                        case we:
                            w = _e(_, !0);
                            break;
                        default:
                            w = m.behavior
                    }
                    return w.forEach(function (t, e) {
                        if (_ !== t || w.length === e + 1) return f;
                        _ = f.placement.split("-")[0], v = ee(_);
                        var i, s = f.offsets.popper, n = f.offsets.reference, o = Math.floor,
                            r = "left" === _ && o(s.right) > o(n.left) || "right" === _ && o(s.left) < o(n.right) || "top" === _ && o(s.bottom) > o(n.top) || "bottom" === _ && o(s.top) < o(n.bottom),
                            a = o(s.left) < o(g.left), l = o(s.right) > o(g.right), h = o(s.top) < o(g.top),
                            c = o(s.bottom) > o(g.bottom),
                            d = "left" === _ && a || "right" === _ && l || "top" === _ && h || "bottom" === _ && c,
                            u = -1 !== ["top", "bottom"].indexOf(_),
                            p = !!m.flipVariations && (u && "start" === y && a || u && "end" === y && l || !u && "start" === y && h || !u && "end" === y && c);
                        (r || d || p) && (f.flipped = !0, (r || d) && (_ = w[e + 1]), p && (y = "end" === (i = y) ? "start" : "start" === i ? "end" : i), f.placement = _ + (y ? "-" + y : ""), f.offsets.popper = Yt({}, f.offsets.popper, ie(f.instance.popper, f.offsets.reference, f.placement)), f = ne(f.instance.modifiers, f, "flip"))
                    }), f
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (t) {
                    var e = t.placement, i = e.split("-")[0], s = t.offsets, n = s.popper, o = s.reference,
                        r = -1 !== ["left", "right"].indexOf(i), a = -1 === ["top", "left"].indexOf(i);
                    return n[r ? "left" : "top"] = o[i] - (a ? n[r ? "width" : "height"] : 0), t.placement = ee(e), t.offsets.popper = Vt(n), t
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (t) {
                    if (!fe(t.instance.modifiers, "hide", "preventOverflow")) return t;
                    var e = t.offsets.reference, i = se(t.instance.modifiers, function (t) {
                        return "preventOverflow" === t.name
                    }).boundaries;
                    if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                        if (!0 === t.hide) return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide) return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (t, e) {
                    var i = e.x, s = e.y, n = t.offsets.popper, o = se(t.instance.modifiers, function (t) {
                        return "applyStyle" === t.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var r = void 0 !== o ? o : e.gpuAcceleration, a = Ft(t.instance.popper), l = Kt(a),
                        h = {position: n.position}, c = ue(t, window.devicePixelRatio < 2 || !pe),
                        d = "bottom" === i ? "top" : "bottom", u = "right" === s ? "left" : "right",
                        p = re("transform"), f = void 0, m = void 0;
                    if (m = "bottom" == d ? "HTML" === a.nodeName ? -a.clientHeight + c.bottom : -l.height + c.bottom : c.top, f = "right" == u ? "HTML" === a.nodeName ? -a.clientWidth + c.right : -l.width + c.right : c.left, r && p) h[p] = "translate3d(" + f + "px, " + m + "px, 0)", h[d] = 0, h[u] = 0, h.willChange = "transform"; else {
                        var g = "bottom" == d ? -1 : 1, _ = "right" == u ? -1 : 1;
                        h[d] = m * g, h[u] = f * _, h.willChange = d + ", " + u
                    }
                    var v = {"x-placement": t.placement};
                    return t.attributes = Yt({}, v, t.attributes), t.styles = Yt({}, h, t.styles), t.arrowStyles = Yt({}, t.offsets.arrow, t.arrowStyles), t
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (t) {
                    var e, i;
                    return de(t.instance.popper, t.styles), e = t.instance.popper, i = t.attributes, Object.keys(i).forEach(function (t) {
                        !1 !== i[t] ? e.setAttribute(t, i[t]) : e.removeAttribute(t)
                    }), t.arrowElement && Object.keys(t.arrowStyles).length && de(t.arrowElement, t.arrowStyles), t
                }, onLoad: function (t, e, i, s, n) {
                    var o = Zt(n, e, t, i.positionFixed),
                        r = Gt(i.placement, o, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return e.setAttribute("x-placement", r), de(e, {position: i.positionFixed ? "fixed" : "absolute"}), i
                }, gpuAcceleration: void 0
            }
        }
    }, xe = (Rt(Ce, [{
        key: "update", value: function () {
            return function () {
                if (!this.state.isDestroyed) {
                    var t = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                    t.offsets.reference = Zt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = Gt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = ie(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ne(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                }
            }.call(this)
        }
    }, {
        key: "destroy", value: function () {
            return function () {
                return this.state.isDestroyed = !0, oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[re("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }.call(this)
        }
    }, {
        key: "enableEventListeners", value: function () {
            return function () {
                this.state.eventsEnabled || (this.state = le(this.reference, this.options, this.state, this.scheduleUpdate))
            }.call(this)
        }
    }, {
        key: "disableEventListeners", value: function () {
            return he.call(this)
        }
    }]), Ce);

    function Ce(t, e) {
        var i = this, s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, Ce), this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update)
        }, this.update = St(this.update.bind(this)), this.options = Yt({}, Ce.Defaults, s), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Yt({}, Ce.Defaults.modifiers, s.modifiers)).forEach(function (t) {
            i.options.modifiers[t] = Yt({}, Ce.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
            return Yt({name: t}, i.options.modifiers[t])
        }).sort(function (t, e) {
            return t.order - e.order
        }), this.modifiers.forEach(function (t) {
            t.enabled && Mt(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
        }), this.update();
        var n = this.options.eventsEnabled;
        n && this.enableEventListeners(), this.state.eventsEnabled = n
    }

    xe.Utils = ("undefined" != typeof window ? window : global).PopperUtils, xe.placements = me, xe.Defaults = ke;
    var Te = "dropdown", Ee = "bs.dropdown", De = "." + Ee, Se = ".data-api", Me = f.fn[Te],
        Ie = new RegExp("38|40|27"), Ae = {
            HIDE: "hide" + De,
            HIDDEN: "hidden" + De,
            SHOW: "show" + De,
            SHOWN: "shown" + De,
            CLICK: "click" + De,
            CLICK_DATA_API: "click" + De + Se,
            KEYDOWN_DATA_API: "keydown" + De + Se,
            KEYUP_DATA_API: "keyup" + De + Se
        }, $e = "disabled", Oe = "show", Ne = "dropup", Pe = "dropright", Fe = "dropleft", He = "dropdown-menu-right",
        je = "position-static", Le = '[data-toggle="dropdown"]', ze = ".dropdown form", We = ".dropdown-menu",
        Ue = ".navbar-nav", Re = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Be = "top-start",
        qe = "top-end", Ye = "bottom-start", Ve = "bottom-end", Ke = "right-start", Qe = "left-start",
        Xe = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, Je = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Ge = function () {
            function h(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var t = h.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !f(this._element).hasClass($e)) {
                    var t = h._getParentFromElement(this._element), e = f(this._menu).hasClass(Oe);
                    if (h._clearMenus(), !e) {
                        var i = {relatedTarget: this._element}, s = f.Event(Ae.SHOW, i);
                        if (f(t).trigger(s), !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === xe) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var n = this._element;
                                "parent" === this._config.reference ? n = t : m.isElement(this._config.reference) && (n = this._config.reference, void 0 !== this._config.reference.jquery && (n = this._config.reference[0])), "scrollParent" !== this._config.boundary && f(t).addClass(je), this._popper = new xe(n, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === f(t).closest(Ue).length && f(document.body).children().on("mouseover", null, f.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), f(this._menu).toggleClass(Oe), f(t).toggleClass(Oe).trigger(f.Event(Ae.SHOWN, i))
                        }
                    }
                }
            }, t.show = function () {
                if (!(this._element.disabled || f(this._element).hasClass($e) || f(this._menu).hasClass(Oe))) {
                    var t = {relatedTarget: this._element}, e = f.Event(Ae.SHOW, t),
                        i = h._getParentFromElement(this._element);
                    f(i).trigger(e), e.isDefaultPrevented() || (f(this._menu).toggleClass(Oe), f(i).toggleClass(Oe).trigger(f.Event(Ae.SHOWN, t)))
                }
            }, t.hide = function () {
                if (!this._element.disabled && !f(this._element).hasClass($e) && f(this._menu).hasClass(Oe)) {
                    var t = {relatedTarget: this._element}, e = f.Event(Ae.HIDE, t),
                        i = h._getParentFromElement(this._element);
                    f(i).trigger(e), e.isDefaultPrevented() || (f(this._menu).toggleClass(Oe), f(i).toggleClass(Oe).trigger(f.Event(Ae.HIDDEN, t)))
                }
            }, t.dispose = function () {
                f.removeData(this._element, Ee), f(this._element).off(De), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function () {
                var e = this;
                f(this._element).on(Ae.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function (t) {
                return t = l({}, this.constructor.Default, f(this._element).data(), t), m.typeCheckConfig(Te, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function () {
                if (!this._menu) {
                    var t = h._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(We))
                }
                return this._menu
            }, t._getPlacement = function () {
                var t = f(this._element.parentNode), e = Ye;
                return t.hasClass(Ne) ? (e = Be, f(this._menu).hasClass(He) && (e = qe)) : t.hasClass(Pe) ? e = Ke : t.hasClass(Fe) ? e = Qe : f(this._menu).hasClass(He) && (e = Ve), e
            }, t._detectNavbar = function () {
                return 0 < f(this._element).closest(".navbar").length
            }, t._getOffset = function () {
                var e = this, t = {};
                return "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function () {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {enabled: !1}), t
            }, h._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = f(this).data(Ee);
                    if (t || (t = new h(this, "object" == typeof e ? e : null), f(this).data(Ee, t)), "string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, h._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Le)), i = 0, s = e.length; i < s; i++) {
                    var n = h._getParentFromElement(e[i]), o = f(e[i]).data(Ee), r = {relatedTarget: e[i]};
                    if (t && "click" === t.type && (r.clickEvent = t), o) {
                        var a = o._menu;
                        if (f(n).hasClass(Oe) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && f.contains(n, t.target))) {
                            var l = f.Event(Ae.HIDE, r);
                            f(n).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && f(document.body).children().off("mouseover", null, f.noop), e[i].setAttribute("aria-expanded", "false"), f(a).removeClass(Oe), f(n).removeClass(Oe).trigger(f.Event(Ae.HIDDEN, r)))
                        }
                    }
                }
            }, h._getParentFromElement = function (t) {
                var e, i = m.getSelectorFromElement(t);
                return i && (e = document.querySelector(i)), e || t.parentNode
            }, h._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || f(t.target).closest(We).length)) : Ie.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !f(this).hasClass($e))) {
                    var e = h._getParentFromElement(this), i = f(e).hasClass(Oe);
                    if (i && (!i || 27 !== t.which && 32 !== t.which)) {
                        var s = [].slice.call(e.querySelectorAll(Re));
                        if (0 !== s.length) {
                            var n = s.indexOf(t.target);
                            38 === t.which && 0 < n && n--, 40 === t.which && n < s.length - 1 && n++, n < 0 && (n = 0), s[n].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var o = e.querySelector(Le);
                            f(o).trigger("focus")
                        }
                        f(this).trigger("click")
                    }
                }
            }, r(h, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return Xe
                }
            }, {
                key: "DefaultType", get: function () {
                    return Je
                }
            }]), h
        }();
    f(document).on(Ae.KEYDOWN_DATA_API, Le, Ge._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API, We, Ge._dataApiKeydownHandler).on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, Ge._clearMenus).on(Ae.CLICK_DATA_API, Le, function (t) {
        t.preventDefault(), t.stopPropagation(), Ge._jQueryInterface.call(f(this), "toggle")
    }).on(Ae.CLICK_DATA_API, ze, function (t) {
        t.stopPropagation()
    }), f.fn[Te] = Ge._jQueryInterface, f.fn[Te].Constructor = Ge, f.fn[Te].noConflict = function () {
        return f.fn[Te] = Me, Ge._jQueryInterface
    };
    var Ze = "modal", ti = "bs.modal", ei = "." + ti, ii = f.fn[Ze],
        si = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
        ni = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, oi = {
            HIDE: "hide" + ei,
            HIDDEN: "hidden" + ei,
            SHOW: "show" + ei,
            SHOWN: "shown" + ei,
            FOCUSIN: "focusin" + ei,
            RESIZE: "resize" + ei,
            CLICK_DISMISS: "click.dismiss" + ei,
            KEYDOWN_DISMISS: "keydown.dismiss" + ei,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ei,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ei,
            CLICK_DATA_API: "click" + ei + ".data-api"
        }, ri = "modal-dialog-scrollable", ai = "modal-scrollbar-measure", li = "modal-backdrop", hi = "modal-open",
        ci = "fade", di = "show", ui = ".modal-dialog", pi = ".modal-body", fi = '[data-toggle="modal"]',
        mi = '[data-dismiss="modal"]', gi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _i = ".sticky-top",
        vi = function () {
            function n(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ui), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }

            var t = n.prototype;
            return t.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function (t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    f(this._element).hasClass(ci) && (this._isTransitioning = !0);
                    var i = f.Event(oi.SHOW, {relatedTarget: t});
                    f(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), f(this._element).on(oi.CLICK_DISMISS, mi, function (t) {
                        return e.hide(t)
                    }), f(this._dialog).on(oi.MOUSEDOWN_DISMISS, function () {
                        f(e._element).one(oi.MOUSEUP_DISMISS, function (t) {
                            f(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function (t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = f.Event(oi.HIDE);
                    if (f(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var s = f(this._element).hasClass(ci);
                        if (s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), f(document).off(oi.FOCUSIN), f(this._element).removeClass(di), f(this._element).off(oi.CLICK_DISMISS), f(this._dialog).off(oi.MOUSEDOWN_DISMISS), s) {
                            var n = m.getTransitionDurationFromElement(this._element);
                            f(this._element).one(m.TRANSITION_END, function (t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(n)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function () {
                [window, this._element, this._dialog].forEach(function (t) {
                    return f(t).off(ei)
                }), f(document).off(oi.FOCUSIN), f.removeData(this._element, ti), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function () {
                this._adjustDialog()
            }, t._getConfig = function (t) {
                return t = l({}, si, t), m.typeCheckConfig(Ze, t, ni), t
            }, t._showElement = function (t) {
                var e = this, i = f(this._element).hasClass(ci);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), f(this._dialog).hasClass(ri) ? this._dialog.querySelector(pi).scrollTop = 0 : this._element.scrollTop = 0, i && m.reflow(this._element), f(this._element).addClass(di), this._config.focus && this._enforceFocus();

                function s() {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, f(e._element).trigger(n)
                }

                var n = f.Event(oi.SHOWN, {relatedTarget: t});
                if (i) {
                    var o = m.getTransitionDurationFromElement(this._dialog);
                    f(this._dialog).one(m.TRANSITION_END, s).emulateTransitionEnd(o)
                } else s()
            }, t._enforceFocus = function () {
                var e = this;
                f(document).off(oi.FOCUSIN).on(oi.FOCUSIN, function (t) {
                    document !== t.target && e._element !== t.target && 0 === f(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? f(this._element).on(oi.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || f(this._element).off(oi.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? f(window).on(oi.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : f(window).off(oi.RESIZE)
            }, t._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                    f(document.body).removeClass(hi), t._resetAdjustments(), t._resetScrollbar(), f(t._element).trigger(oi.HIDDEN)
                })
            }, t._removeBackdrop = function () {
                this._backdrop && (f(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function (t) {
                var e = this, i = f(this._element).hasClass(ci) ? ci : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = li, i && this._backdrop.classList.add(i), f(this._backdrop).appendTo(document.body), f(this._element).on(oi.CLICK_DISMISS, function (t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                    }), i && m.reflow(this._backdrop), f(this._backdrop).addClass(di), !t) return;
                    if (!i) return void t();
                    var s = m.getTransitionDurationFromElement(this._backdrop);
                    f(this._backdrop).one(m.TRANSITION_END, t).emulateTransitionEnd(s)
                } else if (!this._isShown && this._backdrop) {
                    f(this._backdrop).removeClass(di);
                    var n = function () {
                        e._removeBackdrop(), t && t()
                    };
                    if (f(this._element).hasClass(ci)) {
                        var o = m.getTransitionDurationFromElement(this._backdrop);
                        f(this._backdrop).one(m.TRANSITION_END, n).emulateTransitionEnd(o)
                    } else n()
                } else t && t()
            }, t._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function () {
                var n = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(gi)),
                        e = [].slice.call(document.querySelectorAll(_i));
                    f(t).each(function (t, e) {
                        var i = e.style.paddingRight, s = f(e).css("padding-right");
                        f(e).data("padding-right", i).css("padding-right", parseFloat(s) + n._scrollbarWidth + "px")
                    }), f(e).each(function (t, e) {
                        var i = e.style.marginRight, s = f(e).css("margin-right");
                        f(e).data("margin-right", i).css("margin-right", parseFloat(s) - n._scrollbarWidth + "px")
                    });
                    var i = document.body.style.paddingRight, s = f(document.body).css("padding-right");
                    f(document.body).data("padding-right", i).css("padding-right", parseFloat(s) + this._scrollbarWidth + "px")
                }
                f(document.body).addClass(hi)
            }, t._resetScrollbar = function () {
                var t = [].slice.call(document.querySelectorAll(gi));
                f(t).each(function (t, e) {
                    var i = f(e).data("padding-right");
                    f(e).removeData("padding-right"), e.style.paddingRight = i || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + _i));
                f(e).each(function (t, e) {
                    var i = f(e).data("margin-right");
                    void 0 !== i && f(e).css("margin-right", i).removeData("margin-right")
                });
                var i = f(document.body).data("padding-right");
                f(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, t._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = ai, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, n._jQueryInterface = function (i, s) {
                return this.each(function () {
                    var t = f(this).data(ti), e = l({}, si, f(this).data(), "object" == typeof i && i ? i : {});
                    if (t || (t = new n(this, e), f(this).data(ti, t)), "string" == typeof i) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i](s)
                    } else e.show && t.show(s)
                })
            }, r(n, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return si
                }
            }]), n
        }();
    f(document).on(oi.CLICK_DATA_API, fi, function (t) {
        var e, i = this, s = m.getSelectorFromElement(this);
        s && (e = document.querySelector(s));
        var n = f(e).data(ti) ? "toggle" : l({}, f(e).data(), f(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var o = f(e).one(oi.SHOW, function (t) {
            t.isDefaultPrevented() || o.one(oi.HIDDEN, function () {
                f(i).is(":visible") && i.focus()
            })
        });
        vi._jQueryInterface.call(f(e), n, this)
    }), f.fn[Ze] = vi._jQueryInterface, f.fn[Ze].Constructor = vi, f.fn[Ze].noConflict = function () {
        return f.fn[Ze] = ii, vi._jQueryInterface
    };
    var yi = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], wi = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }, bi = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function xi(t, o, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(o), a = [].slice.call(i.body.querySelectorAll("*")), s = function (t) {
            var e = a[t], i = e.nodeName.toLowerCase();
            if (-1 === r.indexOf(e.nodeName.toLowerCase())) return e.parentNode.removeChild(e), "continue";
            var s = [].slice.call(e.attributes), n = [].concat(o["*"] || [], o[i] || []);
            s.forEach(function (t) {
                !function (t, e) {
                    var i = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(i)) return -1 === yi.indexOf(i) || Boolean(t.nodeValue.match(bi) || t.nodeValue.match(ki));
                    for (var s = e.filter(function (t) {
                        return t instanceof RegExp
                    }), n = 0, o = s.length; n < o; n++) if (i.match(s[n])) return 1
                }(t, n) && e.removeAttribute(t.nodeName)
            })
        }, n = 0, l = a.length; n < l; n++) s(n);
        return i.body.innerHTML
    }

    var Ci = "tooltip", Ti = "bs.tooltip", Ei = "." + Ti, Di = f.fn[Ci], Si = "bs-tooltip",
        Mi = new RegExp("(^|\\s)" + Si + "\\S+", "g"), Ii = ["sanitize", "whiteList", "sanitizeFn"], Ai = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        }, $i = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, Oi = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: wi
        }, Ni = "show", Pi = "out", Fi = {
            HIDE: "hide" + Ei,
            HIDDEN: "hidden" + Ei,
            SHOW: "show" + Ei,
            SHOWN: "shown" + Ei,
            INSERTED: "inserted" + Ei,
            CLICK: "click" + Ei,
            FOCUSIN: "focusin" + Ei,
            FOCUSOUT: "focusout" + Ei,
            MOUSEENTER: "mouseenter" + Ei,
            MOUSELEAVE: "mouseleave" + Ei
        }, Hi = "fade", ji = "show", Li = ".tooltip-inner", zi = ".arrow", Wi = "hover", Ui = "focus", Ri = "click",
        Bi = "manual", qi = function () {
            function s(t, e) {
                if (void 0 === xe) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }

            var t = s.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }, t.disable = function () {
                this._isEnabled = !1
            }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function (t) {
                if (this._isEnabled) if (t) {
                    var e = this.constructor.DATA_KEY, i = f(t.currentTarget).data(e);
                    i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), f(t.currentTarget).data(e, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (f(this.getTipElement()).hasClass(ji)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, t.dispose = function () {
                clearTimeout(this._timeout), f.removeData(this.element, this.constructor.DATA_KEY), f(this.element).off(this.constructor.EVENT_KEY), f(this.element).closest(".modal").off("hide.bs.modal"), this.tip && f(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function () {
                var e = this;
                if ("none" === f(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = f.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    f(this.element).trigger(t);
                    var i = m.findShadowRoot(this.element),
                        s = f.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !s) return;
                    var n = this.getTipElement(), o = m.getUID(this.constructor.NAME);
                    n.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && f(n).addClass(Hi);
                    var r = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement,
                        a = this._getAttachment(r);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    f(n).data(this.constructor.DATA_KEY, this), f.contains(this.element.ownerDocument.documentElement, this.tip) || f(n).appendTo(l), f(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new xe(this.element, n, {
                        placement: a,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: zi},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), f(n).addClass(ji), "ontouchstart" in document.documentElement && f(document.body).children().on("mouseover", null, f.noop);
                    var h = function () {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, f(e.element).trigger(e.constructor.Event.SHOWN), t === Pi && e._leave(null, e)
                    };
                    if (f(this.tip).hasClass(Hi)) {
                        var c = m.getTransitionDurationFromElement(this.tip);
                        f(this.tip).one(m.TRANSITION_END, h).emulateTransitionEnd(c)
                    } else h()
                }
            }, t.hide = function (t) {
                function e() {
                    i._hoverState !== Ni && s.parentNode && s.parentNode.removeChild(s), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), f(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
                }

                var i = this, s = this.getTipElement(), n = f.Event(this.constructor.Event.HIDE);
                if (f(this.element).trigger(n), !n.isDefaultPrevented()) {
                    if (f(s).removeClass(ji), "ontouchstart" in document.documentElement && f(document.body).children().off("mouseover", null, f.noop), this._activeTrigger[Ri] = !1, this._activeTrigger[Ui] = !1, this._activeTrigger[Wi] = !1, f(this.tip).hasClass(Hi)) {
                        var o = m.getTransitionDurationFromElement(s);
                        f(s).one(m.TRANSITION_END, e).emulateTransitionEnd(o)
                    } else e();
                    this._hoverState = ""
                }
            }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function () {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function (t) {
                f(this.getTipElement()).addClass(Si + "-" + t)
            }, t.getTipElement = function () {
                return this.tip = this.tip || f(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(f(t.querySelectorAll(Li)), this.getTitle()), f(t).removeClass(Hi + " " + ji)
            }, t.setElementContent = function (t, e) {
                "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = xi(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? f(e).parent().is(t) || t.empty().append(e) : t.text(f(e).text())
            }, t.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
            }, t._getOffset = function () {
                var e = this, t = {};
                return "function" == typeof this.config.offset ? t.fn = function (t) {
                    return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function () {
                return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? f(this.config.container) : f(document).find(this.config.container)
            }, t._getAttachment = function (t) {
                return $i[t.toUpperCase()]
            }, t._setListeners = function () {
                var s = this;
                this.config.trigger.split(" ").forEach(function (t) {
                    if ("click" === t) f(s.element).on(s.constructor.Event.CLICK, s.config.selector, function (t) {
                        return s.toggle(t)
                    }); else if (t !== Bi) {
                        var e = t === Wi ? s.constructor.Event.MOUSEENTER : s.constructor.Event.FOCUSIN,
                            i = t === Wi ? s.constructor.Event.MOUSELEAVE : s.constructor.Event.FOCUSOUT;
                        f(s.element).on(e, s.config.selector, function (t) {
                            return s._enter(t)
                        }).on(i, s.config.selector, function (t) {
                            return s._leave(t)
                        })
                    }
                }), f(this.element).closest(".modal").on("hide.bs.modal", function () {
                    s.element && s.hide()
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                !this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function (t, e) {
                var i = this.constructor.DATA_KEY;
                (e = e || f(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), f(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusin" === t.type ? Ui : Wi] = !0), f(e.getTipElement()).hasClass(ji) || e._hoverState === Ni ? e._hoverState = Ni : (clearTimeout(e._timeout), e._hoverState = Ni, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                    e._hoverState === Ni && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function (t, e) {
                var i = this.constructor.DATA_KEY;
                (e = e || f(t.currentTarget).data(i)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), f(t.currentTarget).data(i, e)), t && (e._activeTrigger["focusout" === t.type ? Ui : Wi] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Pi, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                    e._hoverState === Pi && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function (t) {
                var e = f(this.element).data();
                return Object.keys(e).forEach(function (t) {
                    -1 !== Ii.indexOf(t) && delete e[t]
                }), "number" == typeof(t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), m.typeCheckConfig(Ci, t, this.constructor.DefaultType), t.sanitize && (t.template = xi(t.template, t.whiteList, t.sanitizeFn)), t
            }, t._getDelegateConfig = function () {
                var t = {};
                if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function () {
                var t = f(this.getTipElement()), e = t.attr("class").match(Mi);
                null !== e && e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function (t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function () {
                var t = this.getTipElement(), e = this.config.animation;
                null === t.getAttribute("x-placement") && (f(t).removeClass(Hi), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, s._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = f(this).data(Ti), e = "object" == typeof i && i;
                    if ((t || !/dispose|hide/.test(i)) && (t || (t = new s(this, e), f(this).data(Ti, t)), "string" == typeof i)) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, r(s, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return Oi
                }
            }, {
                key: "NAME", get: function () {
                    return Ci
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Ti
                }
            }, {
                key: "Event", get: function () {
                    return Fi
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Ei
                }
            }, {
                key: "DefaultType", get: function () {
                    return Ai
                }
            }]), s
        }();
    f.fn[Ci] = qi._jQueryInterface, f.fn[Ci].Constructor = qi, f.fn[Ci].noConflict = function () {
        return f.fn[Ci] = Di, qi._jQueryInterface
    };
    var Yi = "popover", Vi = "bs.popover", Ki = "." + Vi, Qi = f.fn[Yi], Xi = "bs-popover",
        Ji = new RegExp("(^|\\s)" + Xi + "\\S+", "g"), Gi = l({}, qi.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Zi = l({}, qi.DefaultType, {content: "(string|element|function)"}), ts = "fade", es = "show",
        is = ".popover-header", ss = ".popover-body", ns = {
            HIDE: "hide" + Ki,
            HIDDEN: "hidden" + Ki,
            SHOW: "show" + Ki,
            SHOWN: "shown" + Ki,
            INSERTED: "inserted" + Ki,
            CLICK: "click" + Ki,
            FOCUSIN: "focusin" + Ki,
            FOCUSOUT: "focusout" + Ki,
            MOUSEENTER: "mouseenter" + Ki,
            MOUSELEAVE: "mouseleave" + Ki
        }, os = function (t) {
            var e, i;

            function s() {
                return t.apply(this, arguments) || this
            }

            i = t, (e = s).prototype = Object.create(i.prototype), (e.prototype.constructor = e).__proto__ = i;
            var n = s.prototype;
            return n.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, n.addAttachmentClass = function (t) {
                f(this.getTipElement()).addClass(Xi + "-" + t)
            }, n.getTipElement = function () {
                return this.tip = this.tip || f(this.config.template)[0], this.tip
            }, n.setContent = function () {
                var t = f(this.getTipElement());
                this.setElementContent(t.find(is), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ss), e), t.removeClass(ts + " " + es)
            }, n._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, n._cleanTipClass = function () {
                var t = f(this.getTipElement()), e = t.attr("class").match(Ji);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, s._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = f(this).data(Vi), e = "object" == typeof i ? i : null;
                    if ((t || !/dispose|hide/.test(i)) && (t || (t = new s(this, e), f(this).data(Vi, t)), "string" == typeof i)) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, r(s, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return Gi
                }
            }, {
                key: "NAME", get: function () {
                    return Yi
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Vi
                }
            }, {
                key: "Event", get: function () {
                    return ns
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Ki
                }
            }, {
                key: "DefaultType", get: function () {
                    return Zi
                }
            }]), s
        }(qi);
    f.fn[Yi] = os._jQueryInterface, f.fn[Yi].Constructor = os, f.fn[Yi].noConflict = function () {
        return f.fn[Yi] = Qi, os._jQueryInterface
    };
    var rs = "scrollspy", as = "bs.scrollspy", ls = "." + as, hs = f.fn[rs],
        cs = {offset: 10, method: "auto", target: ""},
        ds = {offset: "number", method: "string", target: "(string|element)"},
        us = {ACTIVATE: "activate" + ls, SCROLL: "scroll" + ls, LOAD_DATA_API: "load" + ls + ".data-api"},
        ps = "dropdown-item", fs = "active", ms = '[data-spy="scroll"]', gs = ".nav, .list-group", _s = ".nav-link",
        vs = ".nav-item", ys = ".list-group-item", ws = ".dropdown", bs = ".dropdown-item", ks = ".dropdown-toggle",
        xs = "offset", Cs = "position", Ts = function () {
            function i(t, e) {
                var i = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + _s + "," + this._config.target + " " + ys + "," + this._config.target + " " + bs, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, f(this._scrollElement).on(us.SCROLL, function (t) {
                    return i._process(t)
                }), this.refresh(), this._process()
            }

            var t = i.prototype;
            return t.refresh = function () {
                var e = this, t = this._scrollElement === this._scrollElement.window ? xs : Cs,
                    n = "auto" === this._config.method ? t : this._config.method, o = n === Cs ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                    var e, i = m.getSelectorFromElement(t);
                    if (i && (e = document.querySelector(i)), e) {
                        var s = e.getBoundingClientRect();
                        if (s.width || s.height) return [f(e)[n]().top + o, i]
                    }
                    return null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function () {
                f.removeData(this._element, as), f(this._scrollElement).off(ls), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function (t) {
                if ("string" != typeof(t = l({}, cs, "object" == typeof t && t ? t : {})).target) {
                    var e = f(t.target).attr("id");
                    e || (e = m.getUID(rs), f(t.target).attr("id", e)), t.target = "#" + e
                }
                return m.typeCheckConfig(rs, t, ds), t
            }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                    i = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), i <= t) {
                    var s = this._targets[this._targets.length - 1];
                    this._activeTarget !== s && this._activate(s)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var n = this._offsets.length; n--;) {
                        this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (void 0 === this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
                    }
                }
            }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                }), i = f([].slice.call(document.querySelectorAll(t.join(","))));
                i.hasClass(ps) ? (i.closest(ws).find(ks).addClass(fs), i.addClass(fs)) : (i.addClass(fs), i.parents(gs).prev(_s + ", " + ys).addClass(fs), i.parents(gs).prev(vs).children(_s).addClass(fs)), f(this._scrollElement).trigger(us.ACTIVATE, {relatedTarget: e})
            }, t._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
                    return t.classList.contains(fs)
                }).forEach(function (t) {
                    return t.classList.remove(fs)
                })
            }, i._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = f(this).data(as);
                    if (t || (t = new i(this, "object" == typeof e && e), f(this).data(as, t)), "string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, r(i, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "Default", get: function () {
                    return cs
                }
            }]), i
        }();
    f(window).on(us.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(ms)), e = t.length; e--;) {
            var i = f(t[e]);
            Ts._jQueryInterface.call(i, i.data())
        }
    }), f.fn[rs] = Ts._jQueryInterface, f.fn[rs].Constructor = Ts, f.fn[rs].noConflict = function () {
        return f.fn[rs] = hs, Ts._jQueryInterface
    };
    var Es = "bs.tab", Ds = "." + Es, Ss = f.fn.tab, Ms = {
            HIDE: "hide" + Ds,
            HIDDEN: "hidden" + Ds,
            SHOW: "show" + Ds,
            SHOWN: "shown" + Ds,
            CLICK_DATA_API: "click" + Ds + ".data-api"
        }, Is = "dropdown-menu", As = "active", $s = "disabled", Os = "fade", Ns = "show", Ps = ".dropdown",
        Fs = ".nav, .list-group", Hs = ".active", js = "> li > .active",
        Ls = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', zs = ".dropdown-toggle",
        Ws = "> .dropdown-menu .active", Us = function () {
            function s(t) {
                this._element = t
            }

            var t = s.prototype;
            return t.show = function () {
                var i = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && f(this._element).hasClass(As) || f(this._element).hasClass($s))) {
                    var t, s, e = f(this._element).closest(Fs)[0], n = m.getSelectorFromElement(this._element);
                    if (e) {
                        var o = "UL" === e.nodeName || "OL" === e.nodeName ? js : Hs;
                        s = (s = f.makeArray(f(e).find(o)))[s.length - 1]
                    }
                    var r = f.Event(Ms.HIDE, {relatedTarget: this._element}), a = f.Event(Ms.SHOW, {relatedTarget: s});
                    if (s && f(s).trigger(r), f(this._element).trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                        n && (t = document.querySelector(n)), this._activate(this._element, e);
                        var l = function () {
                            var t = f.Event(Ms.HIDDEN, {relatedTarget: i._element}),
                                e = f.Event(Ms.SHOWN, {relatedTarget: s});
                            f(s).trigger(t), f(i._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function () {
                f.removeData(this._element, Es), this._element = null
            }, t._activate = function (t, e, i) {
                function s() {
                    return n._transitionComplete(t, o, i)
                }

                var n = this, o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? f(e).children(Hs) : f(e).find(js))[0],
                    r = i && o && f(o).hasClass(Os);
                if (o && r) {
                    var a = m.getTransitionDurationFromElement(o);
                    f(o).removeClass(Ns).one(m.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function (t, e, i) {
                if (e) {
                    f(e).removeClass(As);
                    var s = f(e.parentNode).find(Ws)[0];
                    s && f(s).removeClass(As), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (f(t).addClass(As), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), m.reflow(t), t.classList.contains(Os) && t.classList.add(Ns), t.parentNode && f(t.parentNode).hasClass(Is)) {
                    var n = f(t).closest(Ps)[0];
                    if (n) {
                        var o = [].slice.call(n.querySelectorAll(zs));
                        f(o).addClass(As)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, s._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = f(this), e = t.data(Es);
                    if (e || (e = new s(this), t.data(Es, e)), "string" == typeof i) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, r(s, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }]), s
        }();
    f(document).on(Ms.CLICK_DATA_API, Ls, function (t) {
        t.preventDefault(), Us._jQueryInterface.call(f(this), "show")
    }), f.fn.tab = Us._jQueryInterface, f.fn.tab.Constructor = Us, f.fn.tab.noConflict = function () {
        return f.fn.tab = Ss, Us._jQueryInterface
    };
    var Rs = "toast", Bs = "bs.toast", qs = "." + Bs, Ys = f.fn[Rs], Vs = {
            CLICK_DISMISS: "click.dismiss" + qs,
            HIDE: "hide" + qs,
            HIDDEN: "hidden" + qs,
            SHOW: "show" + qs,
            SHOWN: "shown" + qs
        }, Ks = "fade", Qs = "hide", Xs = "show", Js = "showing",
        Gs = {animation: "boolean", autohide: "boolean", delay: "number"},
        Zs = {animation: !0, autohide: !0, delay: 500}, tn = '[data-dismiss="toast"]', en = function () {
            function s(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }

            var t = s.prototype;
            return t.show = function () {
                var t = this;
                f(this._element).trigger(Vs.SHOW), this._config.animation && this._element.classList.add(Ks);

                function e() {
                    t._element.classList.remove(Js), t._element.classList.add(Xs), f(t._element).trigger(Vs.SHOWN), t._config.autohide && t.hide()
                }

                if (this._element.classList.remove(Qs), this._element.classList.add(Js), this._config.animation) {
                    var i = m.getTransitionDurationFromElement(this._element);
                    f(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(i)
                } else e()
            }, t.hide = function (t) {
                var e = this;
                this._element.classList.contains(Xs) && (f(this._element).trigger(Vs.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
                    e._close()
                }, this._config.delay))
            }, t.dispose = function () {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Xs) && this._element.classList.remove(Xs), f(this._element).off(Vs.CLICK_DISMISS), f.removeData(this._element, Bs), this._element = null, this._config = null
            }, t._getConfig = function (t) {
                return t = l({}, Zs, f(this._element).data(), "object" == typeof t && t ? t : {}), m.typeCheckConfig(Rs, t, this.constructor.DefaultType), t
            }, t._setListeners = function () {
                var t = this;
                f(this._element).on(Vs.CLICK_DISMISS, tn, function () {
                    return t.hide(!0)
                })
            }, t._close = function () {
                function t() {
                    e._element.classList.add(Qs), f(e._element).trigger(Vs.HIDDEN)
                }

                var e = this;
                if (this._element.classList.remove(Xs), this._config.animation) {
                    var i = m.getTransitionDurationFromElement(this._element);
                    f(this._element).one(m.TRANSITION_END, t).emulateTransitionEnd(i)
                } else t()
            }, s._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = f(this), e = t.data(Bs);
                    if (e || (e = new s(this, "object" == typeof i && i), t.data(Bs, e)), "string" == typeof i) {
                        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i](this)
                    }
                })
            }, r(s, null, [{
                key: "VERSION", get: function () {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType", get: function () {
                    return Gs
                }
            }, {
                key: "Default", get: function () {
                    return Zs
                }
            }]), s
        }();
    f.fn[Rs] = en._jQueryInterface, f.fn[Rs].Constructor = en, f.fn[Rs].noConflict = function () {
        return f.fn[Rs] = Ys, en._jQueryInterface
    }, function () {
        if (void 0 === f) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = f.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(), t.Util = m, t.Alert = g, t.Button = A, t.Carousel = at, t.Collapse = xt, t.Dropdown = Ge, t.Modal = vi, t.Popover = os, t.Scrollspy = Ts, t.Tab = Us, t.Toast = en, t.Tooltip = qi, Object.defineProperty(t, "__esModule", {value: !0})
}), function (r) {
    "use strict";

    function n(t, e) {
        this.options = e;
        var i = r(t), s = i.is("img"), n = s ? i.attr("src") : i.backgroundImageUrl(),
            o = this.options.generateUrl(i, n);
        r("<img/>").attr("src", o).load(function () {
            s ? i.attr("src", r(this).attr("src")) : (i.backgroundImageUrl(r(this).attr("src")), i.backgroundSize(r(this)[0].width, r(this)[0].height)), i.attr("data-retina", "complete")
        })
    }

    n.prototype = {constructor: n}, r.fn.retinaReplace = function (s) {
        return t() <= 1 ? this : this.each(function () {
            var t = r(this), e = t.data("retinaReplace"),
                i = r.extend({}, r.fn.retinaReplace.defaults, t.data(), "object" == typeof s && s);
            e || t.data("retinaReplace", e = new n(this, i)), "string" == typeof s && e[s]()
        })
    }, r.fn.retinaReplace.defaults = {
        suffix: "_2x", generateUrl: function (t, e) {
            var i = e.lastIndexOf("."), s = e.substr(i + 1);
            return e.substr(0, i) + this.suffix + "." + s
        }
    }, r.fn.retinaReplace.Constructor = n;
    var t = function () {
        return void 0 === window.devicePixelRatio ? 1 : window.devicePixelRatio
    };
    r.fn.backgroundImageUrl = function (t) {
        return t ? this.each(function () {
            r(this).css("background-image", 'url("' + t + '")')
        }) : r(this).css("background-image").replace(/url\(|\)|"|'/g, "")
    }, r.fn.backgroundSize = function (t, e) {
        var i = Math.floor(t / 2) + "px " + Math.floor(e / 2) + "px";
        r(this).css("background-size", i), r(this).css("-webkit-background-size", i)
    }, r(function () {
        r("[data-retina='true']").retinaReplace()
    })
}(window.jQuery), function (r, a, l, h) {
    function c(t, e) {
        var i = this;
        "object" == typeof e && (delete e.refresh, delete e.render, r.extend(this, e)), this.$element = r(t), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var s = (this.position + "").toLowerCase().match(/\S+/g) || [];
        if (s.length < 1 && s.push("center"), 1 == s.length && s.push(s[0]), "top" != s[0] && "bottom" != s[0] && "left" != s[1] && "right" != s[1] || (s = [s[1], s[0]]), this.positionX !== h && (s[0] = this.positionX.toLowerCase()), this.positionY !== h && (s[1] = this.positionY.toLowerCase()), i.positionX = s[0], i.positionY = s[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: 'url("' + this.imageSrc + '")',
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this;
        if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: 'url("' + this.imageSrc + '")',
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this;
        this.$mirror = r("<div />").prependTo(this.mirrorContainer);
        var n = this.$element.find(">.parallax-slider"), o = !1;
        0 == n.length ? this.$slider = r("<img />").prependTo(this.$mirror) : (this.$slider = n.prependTo(this.$mirror), o = !0), this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }), this.$slider.addClass("parallax-slider").one("load", function () {
            i.naturalHeight && i.naturalWidth || (i.naturalHeight = this.naturalHeight || this.height || 1, i.naturalWidth = this.naturalWidth || this.width || 1), i.aspectRatio = i.naturalWidth / i.naturalHeight, c.isSetup || c.setup(), c.sliders.push(i), c.isFresh = !1, c.requestRender()
        }), o || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || 0 < n.length) && this.$slider.trigger("load")
    }

    !function () {
        for (var n = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !a.requestAnimationFrame; ++e) a.requestAnimationFrame = a[t[e] + "RequestAnimationFrame"], a.cancelAnimationFrame = a[t[e] + "CancelAnimationFrame"] || a[t[e] + "CancelRequestAnimationFrame"];
        a.requestAnimationFrame || (a.requestAnimationFrame = function (t) {
            var e = (new Date).getTime(), i = Math.max(0, 16 - (e - n)), s = a.setTimeout(function () {
                t(e + i)
            }, i);
            return n = e + i, s
        }), a.cancelAnimationFrame || (a.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        })
    }(), r.extend(c.prototype, {
        speed: .2,
        bleed: 0,
        zIndex: 1,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        mirrorContainer: "body",
        refresh: function () {
            this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var t, e = c.winHeight, i = c.docHeight, s = Math.min(this.boxOffsetTop, i - e),
                n = Math.max(this.boxOffsetTop + this.boxHeight - e, 0),
                o = this.boxHeight + (s - n) * (1 - this.speed) | 0, r = (this.boxOffsetTop - s) * (1 - this.speed) | 0;
            o * this.aspectRatio >= this.boxWidth ? (this.imageWidth = o * this.aspectRatio | 0, this.imageHeight = o, this.offsetBaseTop = r, t = this.imageWidth - this.boxWidth, "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -t : isNaN(this.positionX) ? this.offsetLeft = -t / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -t)) : (this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, t = this.imageHeight - o, "top" == this.positionY ? this.offsetBaseTop = r : "bottom" == this.positionY ? this.offsetBaseTop = r - t : isNaN(this.positionY) ? this.offsetBaseTop = r - t / 2 | 0 : this.offsetBaseTop = r + Math.max(this.positionY, -t))
        },
        render: function () {
            var t = c.scrollTop, e = c.scrollLeft, i = this.overScrollFix ? c.overScroll : 0, s = t + c.winHeight;
            this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - e, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
                transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - i) + "px, 0px)",
                visibility: this.visibility,
                height: this.boxHeight,
                width: this.boxWidth
            }), this.$slider.css({
                transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
                position: "absolute",
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            })
        }
    }), r.extend(c, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function () {
            if (!this.isReady) {
                function t() {
                    c.winHeight = n.height(), c.winWidth = n.width(), c.docHeight = s.height(), c.docWidth = s.width()
                }

                function e() {
                    var t = n.scrollTop(), e = c.docHeight - c.winHeight, i = c.docWidth - c.winWidth;
                    c.scrollTop = Math.max(0, Math.min(e, t)), c.scrollLeft = Math.max(0, Math.min(i, n.scrollLeft())), c.overScroll = Math.max(t - e, Math.min(t, 0))
                }

                var i = this, s = r(l), n = r(a);
                n.on("resize.px.parallax load.px.parallax", function () {
                    t(), i.refresh(), c.isFresh = !1, c.requestRender()
                }).on("scroll.px.parallax load.px.parallax", function () {
                    e(), c.requestRender()
                }), t(), e(), this.isReady = !0;
                var o = -1;
                !function t() {
                    if (o == a.pageYOffset) return a.requestAnimationFrame(t), !1;
                    o = a.pageYOffset, i.render(), a.requestAnimationFrame(t)
                }()
            }
        },
        configure: function (t) {
            "object" == typeof t && (delete t.refresh, delete t.render, r.extend(this.prototype, t))
        },
        refresh: function () {
            r.each(this.sliders, function () {
                this.refresh()
            }), this.isFresh = !0
        },
        render: function () {
            this.isFresh || this.refresh(), r.each(this.sliders, function () {
                this.render()
            })
        },
        requestRender: function () {
            this.render(), this.isBusy = !1
        },
        destroy: function (t) {
            var e, i = r(t).data("px.parallax");
            for (i.$mirror.remove(), e = 0; e < this.sliders.length; e += 1) this.sliders[e] == i && this.sliders.splice(e, 1);
            r(t).data("px.parallax", !1), 0 === this.sliders.length && (r(a).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, c.isSetup = !1)
        }
    });
    var t = r.fn.parallax;
    r.fn.parallax = function (i) {
        return this.each(function () {
            var t = r(this), e = "object" == typeof i && i;
            this == a || this == l || t.is("body") ? c.configure(e) : t.data("px.parallax") ? "object" == typeof i && r.extend(t.data("px.parallax"), e) : (e = r.extend({}, t.data(), e), t.data("px.parallax", new c(this, e))), "string" == typeof i && ("destroy" == i ? c.destroy(this) : c[i]())
        })
    }, r.fn.parallax.Constructor = c, r.fn.parallax.noConflict = function () {
        return r.fn.parallax = t, this
    }, r(function () {
        r('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(window.jQuery || window.Zepto)
}(function (c) {
    function t() {
    }

    function d(t, e) {
        m.ev.on("mfp" + t + w, e)
    }

    function u(t, e, i, s) {
        var n = document.createElement("div");
        return n.className = "mfp-" + t, i && (n.innerHTML = i), s ? e && e.appendChild(n) : (n = c(n), e && n.appendTo(e)), n
    }

    function p(t, e) {
        m.ev.triggerHandler("mfp" + t, e), m.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), m.st.callbacks[t] && m.st.callbacks[t].apply(m, c.isArray(e) ? e : [e]))
    }

    function f(t) {
        return t === e && m.currTemplate.closeBtn || (m.currTemplate.closeBtn = c(m.st.closeMarkup.replace("%title%", m.st.tClose)), e = t), m.currTemplate.closeBtn
    }

    function o() {
        c.magnificPopup.instance || ((m = new t).init(), c.magnificPopup.instance = m)
    }

    var m, s, g, n, _, e, l = "Close", h = "BeforeClose", v = "MarkupParse", y = "Open", w = ".mfp", b = "mfp-ready",
        i = "mfp-removing", r = "mfp-prevent-close", a = !!window.jQuery, k = c(window);
    t.prototype = {
        constructor: t, init: function () {
            var t = navigator.appVersion;
            m.isLowIE = m.isIE8 = document.all && !document.addEventListener, m.isAndroid = /android/gi.test(t), m.isIOS = /iphone|ipad|ipod/gi.test(t), m.supportsTransition = function () {
                var t = document.createElement("p").style, e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;) if (e.pop() + "Transition" in t) return !0;
                return !1
            }(), m.probablyMobile = m.isAndroid || m.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), g = c(document), m.popupsCache = {}
        }, open: function (t) {
            var e;
            if (!1 === t.isObj) {
                m.items = t.items.toArray(), m.index = 0;
                var i, s = t.items;
                for (e = 0; e < s.length; e++) if ((i = s[e]).parsed && (i = i.el[0]), i === t.el[0]) {
                    m.index = e;
                    break
                }
            } else m.items = c.isArray(t.items) ? t.items : [t.items], m.index = t.index || 0;
            if (!m.isOpen) {
                m.types = [], _ = "", t.mainEl && t.mainEl.length ? m.ev = t.mainEl.eq(0) : m.ev = g, t.key ? (m.popupsCache[t.key] || (m.popupsCache[t.key] = {}), m.currTemplate = m.popupsCache[t.key]) : m.currTemplate = {}, m.st = c.extend(!0, {}, c.magnificPopup.defaults, t), m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos, m.st.modal && (m.st.closeOnContentClick = !1, m.st.closeOnBgClick = !1, m.st.showCloseBtn = !1, m.st.enableEscapeKey = !1), m.bgOverlay || (m.bgOverlay = u("bg").on("click" + w, function () {
                    m.close()
                }), m.wrap = u("wrap").attr("tabindex", -1).on("click" + w, function (t) {
                    m._checkIfClose(t.target) && m.close()
                }), m.container = u("container", m.wrap)), m.contentContainer = u("content"), m.st.preloader && (m.preloader = u("preloader", m.container, m.st.tLoading));
                var n = c.magnificPopup.modules;
                for (e = 0; e < n.length; e++) {
                    var o = n[e];
                    o = o.charAt(0).toUpperCase() + o.slice(1), m["init" + o].call(m)
                }
                p("BeforeOpen"), m.st.showCloseBtn && (m.st.closeBtnInside ? (d(v, function (t, e, i, s) {
                    i.close_replaceWith = f(s.type)
                }), _ += " mfp-close-btn-in") : m.wrap.append(f())), m.st.alignTop && (_ += " mfp-align-top"), m.fixedContentPos ? m.wrap.css({
                    overflow: m.st.overflowY,
                    overflowX: "hidden",
                    overflowY: m.st.overflowY
                }) : m.wrap.css({
                    top: k.scrollTop(),
                    position: "absolute"
                }), !1 !== m.st.fixedBgPos && ("auto" !== m.st.fixedBgPos || m.fixedContentPos) || m.bgOverlay.css({
                    height: g.height(),
                    position: "absolute"
                }), m.st.enableEscapeKey && g.on("keyup" + w, function (t) {
                    27 === t.keyCode && m.close()
                }), k.on("resize" + w, function () {
                    m.updateSize()
                }), m.st.closeOnContentClick || (_ += " mfp-auto-cursor"), _ && m.wrap.addClass(_);
                var r = m.wH = k.height(), a = {};
                if (m.fixedContentPos && m._hasScrollBar(r)) {
                    var l = m._getScrollbarSize();
                    l && (a.marginRight = l)
                }
                m.fixedContentPos && (m.isIE7 ? c("body, html").css("overflow", "hidden") : a.overflow = "hidden");
                var h = m.st.mainClass;
                return m.isIE7 && (h += " mfp-ie7"), h && m._addClassToMFP(h), m.updateItemHTML(), p("BuildControls"), c("html").css(a), m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || c(document.body)), m._lastFocusedEl = document.activeElement, setTimeout(function () {
                    m.content ? (m._addClassToMFP(b), m._setFocus()) : m.bgOverlay.addClass(b), g.on("focusin" + w, m._onFocusIn)
                }, 16), m.isOpen = !0, m.updateSize(r), p(y), t
            }
            m.updateItemHTML()
        }, close: function () {
            m.isOpen && (p(h), m.isOpen = !1, m.st.removalDelay && !m.isLowIE && m.supportsTransition ? (m._addClassToMFP(i), setTimeout(function () {
                m._close()
            }, m.st.removalDelay)) : m._close())
        }, _close: function () {
            p(l);
            var t = i + " " + b + " ";
            if (m.bgOverlay.detach(), m.wrap.detach(), m.container.empty(), m.st.mainClass && (t += m.st.mainClass + " "), m._removeClassFromMFP(t), m.fixedContentPos) {
                var e = {marginRight: ""};
                m.isIE7 ? c("body, html").css("overflow", "") : e.overflow = "", c("html").css(e)
            }
            g.off("keyup.mfp focusin" + w), m.ev.off(w), m.wrap.attr("class", "mfp-wrap").removeAttr("style"), m.bgOverlay.attr("class", "mfp-bg"), m.container.attr("class", "mfp-container"), !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(), m.st.autoFocusLast && m._lastFocusedEl && c(m._lastFocusedEl).focus(), m.currItem = null, m.content = null, m.currTemplate = null, m.prevHeight = 0, p("AfterClose")
        }, updateSize: function (t) {
            if (m.isIOS) {
                var e = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * e;
                m.wrap.css("height", i), m.wH = i
            } else m.wH = t || k.height();
            m.fixedContentPos || m.wrap.css("height", m.wH), p("Resize")
        }, updateItemHTML: function () {
            var t = m.items[m.index];
            m.contentContainer.detach(), m.content && m.content.detach(), t.parsed || (t = m.parseEl(m.index));
            var e = t.type;
            if (p("BeforeChange", [m.currItem ? m.currItem.type : "", e]), m.currItem = t, !m.currTemplate[e]) {
                var i = !!m.st[e] && m.st[e].markup;
                p("FirstMarkupParse", i), m.currTemplate[e] = !i || c(i)
            }
            n && n !== t.type && m.container.removeClass("mfp-" + n + "-holder");
            var s = m["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, m.currTemplate[e]);
            m.appendContent(s, e), t.preloaded = !0, p("Change", t), n = t.type, m.container.prepend(m.contentContainer), p("AfterChange")
        }, appendContent: function (t, e) {
            (m.content = t) ? m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[e] ? m.content.find(".mfp-close").length || m.content.append(f()) : m.content = t : m.content = "", p("BeforeAppend"), m.container.addClass("mfp-" + e + "-holder"), m.contentContainer.append(m.content)
        }, parseEl: function (t) {
            var e, i = m.items[t];
            if ((i = i.tagName ? {el: c(i)} : (e = i.type, {data: i, src: i.src})).el) {
                for (var s = m.types, n = 0; n < s.length; n++) if (i.el.hasClass("mfp-" + s[n])) {
                    e = s[n];
                    break
                }
                i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
            }
            return i.type = e || m.st.type || "inline", i.index = t, i.parsed = !0, m.items[t] = i, p("ElementParse", i), m.items[t]
        }, addGroup: function (e, i) {
            function t(t) {
                t.mfpEl = this, m._openClick(t, e, i)
            }

            var s = "click.magnificPopup";
            (i = i || {}).mainEl = e, i.items ? (i.isObj = !0, e.off(s).on(s, t)) : (i.isObj = !1, i.delegate ? e.off(s).on(s, i.delegate, t) : (i.items = e).off(s).on(s, t))
        }, _openClick: function (t, e, i) {
            if ((void 0 !== i.midClick ? i.midClick : c.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                var s = void 0 !== i.disableOn ? i.disableOn : c.magnificPopup.defaults.disableOn;
                if (s) if (c.isFunction(s)) {
                    if (!s.call(m)) return !0
                } else if (k.width() < s) return !0;
                t.type && (t.preventDefault(), m.isOpen && t.stopPropagation()), i.el = c(t.mfpEl), i.delegate && (i.items = e.find(i.delegate)), m.open(i)
            }
        }, updateStatus: function (t, e) {
            if (m.preloader) {
                s !== t && m.container.removeClass("mfp-s-" + s), e || "loading" !== t || (e = m.st.tLoading);
                var i = {status: t, text: e};
                p("UpdateStatus", i), t = i.status, e = i.text, m.preloader.html(e), m.preloader.find("a").on("click", function (t) {
                    t.stopImmediatePropagation()
                }), m.container.addClass("mfp-s-" + t), s = t
            }
        }, _checkIfClose: function (t) {
            if (!c(t).hasClass(r)) {
                var e = m.st.closeOnContentClick, i = m.st.closeOnBgClick;
                if (e && i) return !0;
                if (!m.content || c(t).hasClass("mfp-close") || m.preloader && t === m.preloader[0]) return !0;
                if (t === m.content[0] || c.contains(m.content[0], t)) {
                    if (e) return !0
                } else if (i && c.contains(document, t)) return !0;
                return !1
            }
        }, _addClassToMFP: function (t) {
            m.bgOverlay.addClass(t), m.wrap.addClass(t)
        }, _removeClassFromMFP: function (t) {
            this.bgOverlay.removeClass(t), m.wrap.removeClass(t)
        }, _hasScrollBar: function (t) {
            return (m.isIE7 ? g.height() : document.body.scrollHeight) > (t || k.height())
        }, _setFocus: function () {
            (m.st.focus ? m.content.find(m.st.focus).eq(0) : m.wrap).focus()
        }, _onFocusIn: function (t) {
            if (t.target !== m.wrap[0] && !c.contains(m.wrap[0], t.target)) return m._setFocus(), !1
        }, _parseMarkup: function (n, t, e) {
            var o;
            e.data && (t = c.extend(e.data, t)), p(v, [n, t, e]), c.each(t, function (t, e) {
                if (void 0 === e || !1 === e) return !0;
                if (1 < (o = t.split("_")).length) {
                    var i = n.find(w + "-" + o[0]);
                    if (0 < i.length) {
                        var s = o[1];
                        "replaceWith" === s ? i[0] !== e[0] && i.replaceWith(e) : "img" === s ? i.is("img") ? i.attr("src", e) : i.replaceWith(c("<img>").attr("src", e).attr("class", i.attr("class"))) : i.attr(o[1], e)
                    }
                } else n.find(w + "-" + t).html(e)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === m.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), m.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return m.scrollbarSize
        }
    }, c.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (t, e) {
            return o(), (t = t ? c.extend(!0, {}, t) : {}).isObj = !0, t.index = e || 0, this.instance.open(t)
        },
        close: function () {
            return c.magnificPopup.instance && c.magnificPopup.instance.close()
        },
        registerModule: function (t, e) {
            e.options && (c.magnificPopup.defaults[t] = e.options), c.extend(this.proto, e.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, c.fn.magnificPopup = function (t) {
        o();
        var e = c(this);
        if ("string" == typeof t) if ("open" === t) {
            var i, s = a ? e.data("magnificPopup") : e[0].magnificPopup, n = parseInt(arguments[1], 10) || 0;
            i = s.items ? s.items[n] : (i = e, s.delegate && (i = i.find(s.delegate)), i.eq(n)), m._openClick({mfpEl: i}, e, s)
        } else m.isOpen && m[t].apply(m, Array.prototype.slice.call(arguments, 1)); else t = c.extend(!0, {}, t), a ? e.data("magnificPopup", t) : e[0].magnificPopup = t, m.addGroup(e, t);
        return e
    };

    function x() {
        E && (T.after(E.addClass(C)).detach(), E = null)
    }

    var C, T, E, D = "inline";
    c.magnificPopup.registerModule(D, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                m.types.push(D), d(l + "." + D, function () {
                    x()
                })
            }, getInline: function (t, e) {
                if (x(), t.src) {
                    var i = m.st.inline, s = c(t.src);
                    if (s.length) {
                        var n = s[0].parentNode;
                        n && n.tagName && (T || (C = i.hiddenClass, T = u(C), C = "mfp-" + C), E = s.after(T).detach().removeClass(C)), m.updateStatus("ready")
                    } else m.updateStatus("error", i.tNotFound), s = c("<div>");
                    return t.inlineElement = s
                }
                return m.updateStatus("ready"), m._parseMarkup(e, {}, t), e
            }
        }
    });

    function S() {
        I && c(document.body).removeClass(I)
    }

    function M() {
        S(), m.req && m.req.abort()
    }

    var I, A = "ajax";
    c.magnificPopup.registerModule(A, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                m.types.push(A), I = m.st.ajax.cursor, d(l + "." + A, M), d("BeforeChange." + A, M)
            }, getAjax: function (n) {
                I && c(document.body).addClass(I), m.updateStatus("loading");
                var t = c.extend({
                    url: n.src, success: function (t, e, i) {
                        var s = {data: t, xhr: i};
                        p("ParseAjax", s), m.appendContent(c(s.data), A), n.finished = !0, S(), m._setFocus(), setTimeout(function () {
                            m.wrap.addClass(b)
                        }, 16), m.updateStatus("ready"), p("AjaxContentAdded")
                    }, error: function () {
                        S(), n.finished = n.loadError = !0, m.updateStatus("error", m.st.ajax.tError.replace("%url%", n.src))
                    }
                }, m.st.ajax.settings);
                return m.req = c.ajax(t), ""
            }
        }
    });
    var $;
    c.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var t = m.st.image, e = ".image";
                m.types.push("image"), d(y + e, function () {
                    "image" === m.currItem.type && t.cursor && c(document.body).addClass(t.cursor)
                }), d(l + e, function () {
                    t.cursor && c(document.body).removeClass(t.cursor), k.off("resize" + w)
                }), d("Resize" + e, m.resizeImage), m.isLowIE && d("AfterChange", m.resizeImage)
            }, resizeImage: function () {
                var t = m.currItem;
                if (t && t.img && m.st.image.verticalFit) {
                    var e = 0;
                    m.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", m.wH - e)
                }
            }, _onImageHasSize: function (t) {
                t.img && (t.hasSize = !0, $ && clearInterval($), t.isCheckingImgSize = !1, p("ImageHasSize", t), t.imgHidden && (m.content && m.content.removeClass("mfp-loading"), t.imgHidden = !1))
            }, findImageSize: function (e) {
                var i = 0, s = e.img[0], n = function (t) {
                    $ && clearInterval($), $ = setInterval(function () {
                        0 < s.naturalWidth ? m._onImageHasSize(e) : (200 < i && clearInterval($), 3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500))
                    }, t)
                };
                n(1)
            }, getImage: function (t, e) {
                var i = 0, s = function () {
                    t && (t.img[0].complete ? (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, p("ImageLoadComplete")) : ++i < 200 ? setTimeout(s, 100) : n())
                }, n = function () {
                    t && (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("error", o.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
                }, o = m.st.image, r = e.find(".mfp-img");
                if (r.length) {
                    var a = document.createElement("img");
                    a.className = "mfp-img", t.el && t.el.find("img").length && (a.alt = t.el.find("img").attr("alt")), t.img = c(a).on("load.mfploader", s).on("error.mfploader", n), a.src = t.src, r.is("img") && (t.img = t.img.clone()), 0 < (a = t.img[0]).naturalWidth ? t.hasSize = !0 : a.width || (t.hasSize = !1)
                }
                return m._parseMarkup(e, {
                    title: function (t) {
                        if (t.data && void 0 !== t.data.title) return t.data.title;
                        var e = m.st.image.titleSrc;
                        if (e) {
                            if (c.isFunction(e)) return e.call(m, t);
                            if (t.el) return t.el.attr(e) || ""
                        }
                        return ""
                    }(t), img_replaceWith: t.img
                }, t), m.resizeImage(), t.hasSize ? ($ && clearInterval($), t.loadError ? (e.addClass("mfp-loading"), m.updateStatus("error", o.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), m.updateStatus("ready"))) : (m.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), m.findImageSize(t))), e
            }
        }
    });
    var O;
    c.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (t) {
                return t.is("img") ? t : t.find("img")
            }
        }, proto: {
            initZoom: function () {
                var t, o = m.st.zoom, e = ".zoom";
                if (o.enabled && m.supportsTransition) {
                    function i(t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            i = "all " + o.duration / 1e3 + "s " + o.easing, s = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }, n = "transition";
                        return s["-webkit-" + n] = s["-moz-" + n] = s["-o-" + n] = s[n] = i, e.css(s), e
                    }

                    function s() {
                        m.content.css("visibility", "visible")
                    }

                    var n, r, a = o.duration;
                    d("BuildControls" + e, function () {
                        if (m._allowZoom()) {
                            if (clearTimeout(n), m.content.css("visibility", "hidden"), !(t = m._getItemToZoom())) return void s();
                            (r = i(t)).css(m._getOffset()), m.wrap.append(r), n = setTimeout(function () {
                                r.css(m._getOffset(!0)), n = setTimeout(function () {
                                    s(), setTimeout(function () {
                                        r.remove(), t = r = null, p("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), d(h + e, function () {
                        if (m._allowZoom()) {
                            if (clearTimeout(n), m.st.removalDelay = a, !t) {
                                if (!(t = m._getItemToZoom())) return;
                                r = i(t)
                            }
                            r.css(m._getOffset(!0)), m.wrap.append(r), m.content.css("visibility", "hidden"), setTimeout(function () {
                                r.css(m._getOffset())
                            }, 16)
                        }
                    }), d(l + e, function () {
                        m._allowZoom() && (s(), r && r.remove(), t = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === m.currItem.type
            }, _getItemToZoom: function () {
                return !!m.currItem.hasSize && m.currItem.img
            }, _getOffset: function (t) {
                var e, i = (e = t ? m.currItem.img : m.st.zoom.opener(m.currItem.el || m.currItem)).offset(),
                    s = parseInt(e.css("padding-top"), 10), n = parseInt(e.css("padding-bottom"), 10);
                i.top -= c(window).scrollTop() - s;
                var o = {width: e.width(), height: (a ? e.innerHeight() : e[0].offsetHeight) - n - s};
                return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O ? o["-moz-transform"] = o.transform = "translate(" + i.left + "px," + i.top + "px)" : (o.left = i.left, o.top = i.top), o
            }
        }
    });

    function N(t) {
        if (m.currTemplate[P]) {
            var e = m.currTemplate[P].find("iframe");
            e.length && (t || (e[0].src = "//about:blank"), m.isIE8 && e.css("display", t ? "block" : "none"))
        }
    }

    var P = "iframe";
    c.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                m.types.push(P), d("BeforeChange", function (t, e, i) {
                    e !== i && (e === P ? N() : i === P && N(!0))
                }), d(l + "." + P, function () {
                    N()
                })
            }, getIframe: function (t, e) {
                var i = t.src, s = m.st.iframe;
                c.each(s.patterns, function () {
                    if (-1 < i.indexOf(this.index)) return this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1
                });
                var n = {};
                return s.srcAction && (n[s.srcAction] = i), m._parseMarkup(e, n, t), m.updateStatus("ready"), e
            }
        }
    });

    function F(t) {
        var e = m.items.length;
        return e - 1 < t ? t - e : t < 0 ? e + t : t
    }

    function H(t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
    }

    c.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var o = m.st.gallery, t = ".mfp-gallery";
                if (m.direction = !0, !o || !o.enabled) return !1;
                _ += " mfp-gallery", d(y + t, function () {
                    o.navigateByImgClick && m.wrap.on("click" + t, ".mfp-img", function () {
                        if (1 < m.items.length) return m.next(), !1
                    }), g.on("keydown" + t, function (t) {
                        37 === t.keyCode ? m.prev() : 39 === t.keyCode && m.next()
                    })
                }), d("UpdateStatus" + t, function (t, e) {
                    e.text && (e.text = H(e.text, m.currItem.index, m.items.length))
                }), d(v + t, function (t, e, i, s) {
                    var n = m.items.length;
                    i.counter = 1 < n ? H(o.tCounter, s.index, n) : ""
                }), d("BuildControls" + t, function () {
                    if (1 < m.items.length && o.arrows && !m.arrowLeft) {
                        var t = o.arrowMarkup,
                            e = m.arrowLeft = c(t.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(r),
                            i = m.arrowRight = c(t.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(r);
                        e.click(function () {
                            m.prev()
                        }), i.click(function () {
                            m.next()
                        }), m.container.append(e.add(i))
                    }
                }), d("Change" + t, function () {
                    m._preloadTimeout && clearTimeout(m._preloadTimeout), m._preloadTimeout = setTimeout(function () {
                        m.preloadNearbyImages(), m._preloadTimeout = null
                    }, 16)
                }), d(l + t, function () {
                    g.off(t), m.wrap.off("click" + t), m.arrowRight = m.arrowLeft = null
                })
            }, next: function () {
                m.direction = !0, m.index = F(m.index + 1), m.updateItemHTML()
            }, prev: function () {
                m.direction = !1, m.index = F(m.index - 1), m.updateItemHTML()
            }, goTo: function (t) {
                m.direction = t >= m.index, m.index = t, m.updateItemHTML()
            }, preloadNearbyImages: function () {
                var t, e = m.st.gallery.preload, i = Math.min(e[0], m.items.length), s = Math.min(e[1], m.items.length);
                for (t = 1; t <= (m.direction ? s : i); t++) m._preloadItem(m.index + t);
                for (t = 1; t <= (m.direction ? i : s); t++) m._preloadItem(m.index - t)
            }, _preloadItem: function (t) {
                if (t = F(t), !m.items[t].preloaded) {
                    var e = m.items[t];
                    e.parsed || (e = m.parseEl(t)), p("LazyLoad", e), "image" === e.type && (e.img = c('<img class="mfp-img" />').on("load.mfploader", function () {
                        e.hasSize = !0
                    }).on("error.mfploader", function () {
                        e.hasSize = !0, e.loadError = !0, p("LazyLoadError", e)
                    }).attr("src", e.src)), e.preloaded = !0
                }
            }
        }
    });
    var j = "retina";
    c.magnificPopup.registerModule(j, {
        options: {
            replaceSrc: function (t) {
                return t.src.replace(/\.\w+$/, function (t) {
                    return "@2x" + t
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (1 < window.devicePixelRatio) {
                    var i = m.st.retina, s = i.ratio;
                    1 < (s = isNaN(s) ? s() : s) && (d("ImageHasSize." + j, function (t, e) {
                        e.img.css({"max-width": e.img[0].naturalWidth / s, width: "100%"})
                    }), d("ElementParse." + j, function (t, e) {
                        e.src = i.replaceSrc(e, s)
                    }))
                }
            }
        }
    }), o()
}), function () {
    function e(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    var s, t, i, l, n, r = [].indexOf || function (t) {
        for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
        return -1
    };

    function o() {
    }

    function a() {
        this.keys = [], this.values = []
    }

    function h() {
        "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
    }

    function c(t) {
        null == t && (t = {}), this.scrollCallback = e(this.scrollCallback, this), this.scrollHandler = e(this.scrollHandler, this), this.resetAnimation = e(this.resetAnimation, this), this.start = e(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
    }

    o.prototype.extend = function (t, e) {
        var i, s;
        for (i in e) s = e[i], null == t[i] && (t[i] = s);
        return t
    }, o.prototype.isMobile = function (t) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
    }, o.prototype.createEvent = function (t, e, i, s) {
        var n;
        return null == e && (e = !1), null == i && (i = !1), null == s && (s = null), null != document.createEvent ? (n = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, s) : null != document.createEventObject ? (n = document.createEventObject()).eventType = t : n.eventName = t, n
    }, o.prototype.emitEvent = function (t, e) {
        return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
    }, o.prototype.addEvent = function (t, e, i) {
        return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
    }, o.prototype.removeEvent = function (t, e, i) {
        return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
    }, o.prototype.innerHeight = function () {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }, t = o, i = this.WeakMap || this.MozWeakMap || (a.prototype.get = function (t) {
        var e, i, s, n;
        for (e = i = 0, s = (n = this.keys).length; i < s; e = ++i) if (n[e] === t) return this.values[e]
    }, a.prototype.set = function (t, e) {
        var i, s, n, o;
        for (i = s = 0, n = (o = this.keys).length; s < n; i = ++s) if (o[i] === t) return void(this.values[i] = e);
        return this.keys.push(t), this.values.push(e)
    }, a), s = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (h.notSupported = !0, h.prototype.observe = function () {
    }, h), l = this.getComputedStyle || function (i, t) {
        return this.getPropertyValue = function (t) {
            var e;
            return "float" === t && (t = "styleFloat"), n.test(t) && t.replace(n, function (t, e) {
                return e.toUpperCase()
            }), (null != (e = i.currentStyle) ? e[t] : void 0) || null
        }, this
    }, n = /(\-([a-z]){1})/g, this.WOW = (c.prototype.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: null,
        scrollContainer: null
    }, c.prototype.init = function () {
        var t;
        return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
    }, c.prototype.start = function () {
        var n, t, e, i, r;
        if (this.stopped = !1, this.boxes = function () {
            var t, e, i, s;
            for (s = [], t = 0, e = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; t < e; t++) n = i[t], s.push(n);
            return s
        }.call(this), this.all = function () {
            var t, e, i, s;
            for (s = [], t = 0, e = (i = this.boxes).length; t < e; t++) n = i[t], s.push(n);
            return s
        }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (t = 0, e = (i = this.boxes).length; t < e; t++) n = i[t], this.applyStyle(n, !0);
        if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new s((r = this, function (t) {
            var e, i, n, o, s;
            for (s = [], e = 0, i = t.length; e < i; e++) o = t[e], s.push(function () {
                var t, e, i, s;
                for (s = [], t = 0, e = (i = o.addedNodes || []).length; t < e; t++) n = i[t], s.push(this.doSync(n));
                return s
            }.call(r));
            return s
        })).observe(document.body, {childList: !0, subtree: !0})
    }, c.prototype.stop = function () {
        if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
    }, c.prototype.sync = function (t) {
        if (s.notSupported) return this.doSync(this.element)
    }, c.prototype.doSync = function (t) {
        var e, i, s, n, o;
        if (null == t && (t = this.element), 1 === t.nodeType) {
            for (o = [], i = 0, s = (n = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i < s; i++) e = n[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
            return o
        }
    }, c.prototype.show = function (t) {
        return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
    }, c.prototype.applyStyle = function (t, e) {
        var i, s, n, o;
        return s = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), n = t.getAttribute("data-wow-iteration"), this.animate((o = this, function () {
            return o.customStyle(t, e, s, i, n)
        }))
    }, c.prototype.animate = "requestAnimationFrame" in window ? function (t) {
        return window.requestAnimationFrame(t)
    } : function (t) {
        return t()
    }, c.prototype.resetStyle = function () {
        var t, e, i, s, n;
        for (n = [], e = 0, i = (s = this.boxes).length; e < i; e++) t = s[e], n.push(t.style.visibility = "visible");
        return n
    }, c.prototype.resetAnimation = function (t) {
        var e;
        if (0 <= t.type.toLowerCase().indexOf("animationend")) return (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim()
    }, c.prototype.customStyle = function (t, e, i, s, n) {
        return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {animationDuration: i}), s && this.vendorSet(t.style, {animationDelay: s}), n && this.vendorSet(t.style, {animationIterationCount: n}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
    }, c.prototype.vendors = ["moz", "webkit"], c.prototype.vendorSet = function (n, t) {
        var o, e, r, a;
        for (o in e = [], t) r = t[o], n["" + o] = r, e.push(function () {
            var t, e, i, s;
            for (s = [], t = 0, e = (i = this.vendors).length; t < e; t++) a = i[t], s.push(n["" + a + o.charAt(0).toUpperCase() + o.substr(1)] = r);
            return s
        }.call(this));
        return e
    }, c.prototype.vendorCSS = function (t, e) {
        var i, s, n, o, r, a;
        for (o = (r = l(t)).getPropertyCSSValue(e), i = 0, s = (n = this.vendors).length; i < s; i++) a = n[i], o = o || r.getPropertyCSSValue("-" + a + "-" + e);
        return o
    }, c.prototype.animationName = function (e) {
        var i;
        try {
            i = this.vendorCSS(e, "animation-name").cssText
        } catch (t) {
            i = l(e).getPropertyValue("animation-name")
        }
        return "none" === i ? "" : i
    }, c.prototype.cacheAnimationName = function (t) {
        return this.animationNameCache.set(t, this.animationName(t))
    }, c.prototype.cachedAnimationName = function (t) {
        return this.animationNameCache.get(t)
    }, c.prototype.scrollHandler = function () {
        return this.scrolled = !0
    }, c.prototype.scrollCallback = function () {
        var n;
        if (this.scrolled && (this.scrolled = !1, this.boxes = function () {
            var t, e, i, s;
            for (s = [], t = 0, e = (i = this.boxes).length; t < e; t++) (n = i[t]) && (this.isVisible(n) ? this.show(n) : s.push(n));
            return s
        }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
    }, c.prototype.offsetTop = function (t) {
        for (var e; void 0 === t.offsetTop;) t = t.parentNode;
        for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
        return e
    }, c.prototype.isVisible = function (t) {
        var e, i, s, n, o;
        return i = t.getAttribute("data-wow-offset") || this.config.offset, n = (o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, e = (s = this.offsetTop(t)) + t.clientHeight, s <= n && o <= e
    }, c.prototype.util = function () {
        return null != this._util ? this._util : this._util = new t
    }, c.prototype.disabled = function () {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }, c)
}.call(this), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return e(t, document, window, navigator)
    }) : "object" == typeof exports ? e(require("jquery"), document, window, navigator) : e(jQuery, document, window, navigator)
}(function (l, h, c, t, d) {
    "use strict";
    var e, i, s = 0,
        n = (e = t.userAgent, i = /msie\s\d+/i, 0 < e.search(i) && i.exec(e).toString().split(" ")[1] < 9 && (l("html").addClass("lt-ie9"), !0));
    Function.prototype.bind || (Function.prototype.bind = function (s) {
        var n = this, o = [].slice;
        if ("function" != typeof n) throw new TypeError;
        var r = o.call(arguments, 1), a = function () {
            if (this instanceof a) {
                var t = function () {
                };
                t.prototype = n.prototype;
                var e = new t, i = n.apply(e, r.concat(o.call(arguments)));
                return Object(i) === i ? i : e
            }
            return n.apply(s, r.concat(o.call(arguments)))
        };
        return a
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
        var i;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var s = Object(this), n = s.length >>> 0;
        if (0 == n) return -1;
        var o = +e || 0;
        if (Math.abs(o) === 1 / 0 && (o = 0), n <= o) return -1;
        for (i = Math.max(0 <= o ? o : n - Math.abs(o), 0); i < n;) {
            if (i in s && s[i] === t) return i;
            i++
        }
        return -1
    });

    function o(t, e, i) {
        this.VERSION = "2.2.0", this.input = t, this.plugin_count = i, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, e = e || {}, this.$cache = {
            win: l(c),
            body: l(h.body),
            input: l(t),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        }, this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        }, this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var s, n, o, r = this.$cache.input, a = r.prop("value");
        for (o in s = {
            type: "single",
            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,
            min_interval: 0,
            max_interval: 0,
            drag_interval: !1,
            values: [],
            p_values: [],
            from_fixed: !1,
            from_min: null,
            from_max: null,
            from_shadow: !1,
            to_fixed: !1,
            to_min: null,
            to_max: null,
            to_shadow: !1,
            prettify_enabled: !0,
            prettify_separator: " ",
            prettify: null,
            force_edges: !1,
            keyboard: !0,
            grid: !1,
            grid_margin: !0,
            grid_num: 4,
            grid_snap: !1,
            hide_min_max: !1,
            hide_from_to: !1,
            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: !0,
            values_separator: " — ",
            input_values_separator: ";",
            disable: !1,
            block: !1,
            extra_classes: "",
            scope: null,
            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        }, "INPUT" !== r[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", r[0]), (n = {
            type: r.data("type"),
            min: r.data("min"),
            max: r.data("max"),
            from: r.data("from"),
            to: r.data("to"),
            step: r.data("step"),
            min_interval: r.data("minInterval"),
            max_interval: r.data("maxInterval"),
            drag_interval: r.data("dragInterval"),
            values: r.data("values"),
            from_fixed: r.data("fromFixed"),
            from_min: r.data("fromMin"),
            from_max: r.data("fromMax"),
            from_shadow: r.data("fromShadow"),
            to_fixed: r.data("toFixed"),
            to_min: r.data("toMin"),
            to_max: r.data("toMax"),
            to_shadow: r.data("toShadow"),
            prettify_enabled: r.data("prettifyEnabled"),
            prettify_separator: r.data("prettifySeparator"),
            force_edges: r.data("forceEdges"),
            keyboard: r.data("keyboard"),
            grid: r.data("grid"),
            grid_margin: r.data("gridMargin"),
            grid_num: r.data("gridNum"),
            grid_snap: r.data("gridSnap"),
            hide_min_max: r.data("hideMinMax"),
            hide_from_to: r.data("hideFromTo"),
            prefix: r.data("prefix"),
            postfix: r.data("postfix"),
            max_postfix: r.data("maxPostfix"),
            decorate_both: r.data("decorateBoth"),
            values_separator: r.data("valuesSeparator"),
            input_values_separator: r.data("inputValuesSeparator"),
            disable: r.data("disable"),
            block: r.data("block"),
            extra_classes: r.data("extraClasses")
        }).values = n.values && n.values.split(","), n) n.hasOwnProperty(o) && (n[o] !== d && "" !== n[o] || delete n[o]);
        a !== d && "" !== a && ((a = a.split(n.input_values_separator || e.input_values_separator || ";"))[0] && a[0] == +a[0] && (a[0] = +a[0]), a[1] && a[1] == +a[1] && (a[1] = +a[1]), e && e.values && e.values.length ? (s.from = a[0] && e.values.indexOf(a[0]), s.to = a[1] && e.values.indexOf(a[1])) : (s.from = a[0] && +a[0], s.to = a[1] && +a[1])), l.extend(s, e), l.extend(s, n), this.options = s, this.update_check = {}, this.validate(), this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        }, this.init()
    }

    o.prototype = {
        init: function (t) {
            this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
        }, append: function () {
            var t = '<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>';
            this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
        }, setTopHandler: function () {
            var t = this.options.min, e = this.options.max, i = this.options.from, s = this.options.to;
            t < i && s === e ? this.$cache.s_from.addClass("type_last") : s < e && this.$cache.s_to.addClass("type_last")
        }, changeLevel: function (t) {
            switch (t) {
                case"single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                    break;
                case"from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                    break;
                case"to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                    break;
                case"both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
            }
        }, appendDisableMask: function () {
            this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
        }, removeDisableMask: function () {
            this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
        }, remove: function () {
            this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), n && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
        }, bindEvents: function () {
            this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), n && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
        }, pointerFocus: function (t) {
            var e, i;
            this.target || (e = (i = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, e += i.width() / 2 - 1, this.pointerClick("single", {
                preventDefault: function () {
                }, pageX: e
            }))
        }, pointerMove: function (t) {
            if (this.dragging) {
                var e = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
                this.coords.x_pointer = e - this.coords.x_gap, this.calc()
            }
        }, pointerUp: function (t) {
            this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, n && l("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (l.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
        }, pointerDown: function (t, e) {
            e.preventDefault();
            var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            2 !== e.button && ("both" === t && this.setTempMinInterval(), t = t || (this.target || "from"), this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = i - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), n && l("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
        }, pointerClick: function (t, e) {
            e.preventDefault();
            var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
        }, key: function (t, e) {
            if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                switch (e.which) {
                    case 83:
                    case 65:
                    case 40:
                    case 37:
                        e.preventDefault(), this.moveByKey(!1);
                        break;
                    case 87:
                    case 68:
                    case 38:
                    case 39:
                        e.preventDefault(), this.moveByKey(!0)
                }
                return !0
            }
        }, moveByKey: function (t) {
            var e = this.coords.p_pointer, i = (this.options.max - this.options.min) / 100;
            i = this.options.step / i, t ? e += i : e -= i, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * e), this.is_key = !0, this.calc()
        }, setMinMax: function () {
            if (this.options) {
                if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void(this.$cache.max[0].style.display = "none");
                if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max])); else {
                    var t = this._prettify(this.options.min), e = this._prettify(this.options.max);
                    this.result.min_pretty = t, this.result.max_pretty = e, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(e, this.options.max))
                }
                this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
            }
        }, setTempMinInterval: function () {
            var t = this.result.to - this.result.from;
            null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
        }, restoreOriginalMinInterval: function () {
            null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
        }, calc: function (t) {
            if (this.options && (this.calc_count++, 10 !== this.calc_count && !t || (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                this.calcPointerPercent();
                var e = this.getHandleX();
                switch ("both" === this.target && (this.coords.p_gap = 0, e = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, e = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(e)), this.target) {
                    case"base":
                        var i = (this.options.max - this.options.min) / 100,
                            s = (this.result.from - this.options.min) / i, n = (this.result.to - this.options.min) / i;
                        this.coords.p_single_real = this.toFixed(s), this.coords.p_from_real = this.toFixed(s), this.coords.p_to_real = this.toFixed(n), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                        break;
                    case"single":
                        if (this.options.from_fixed) break;
                        this.coords.p_single_real = this.convertToRealPercent(e), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                        break;
                    case"from":
                        if (this.options.from_fixed) break;
                        this.coords.p_from_real = this.convertToRealPercent(e), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                        break;
                    case"to":
                        if (this.options.to_fixed) break;
                        this.coords.p_to_real = this.convertToRealPercent(e), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both":
                        if (this.options.from_fixed || this.options.to_fixed) break;
                        e = this.toFixed(e + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both_one":
                        if (this.options.from_fixed || this.options.to_fixed) break;
                        var o = this.convertToRealPercent(e), r = this.result.from_percent,
                            a = this.result.to_percent - r, l = a / 2, h = o - l, c = o + l;
                        h < 0 && (c = (h = 0) + a), 100 < c && (h = (c = 100) - a), this.coords.p_from_real = this.calcWithStep(h), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(c), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                }
                "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
            }
        }, calcPointerPercent: function () {
            this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
        }, convertToRealPercent: function (t) {
            return t / (100 - this.coords.p_handle) * 100
        }, convertToFakePercent: function (t) {
            return t / 100 * (100 - this.coords.p_handle)
        }, getHandleX: function () {
            var t = 100 - this.coords.p_handle, e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
            return e < 0 ? e = 0 : t < e && (e = t), e
        }, calcHandlePercent: function () {
            "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
        }, chooseHandle: function (t) {
            return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
        }, calcMinMax: function () {
            this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
        }, calcLabels: function () {
            this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
        }, updateScene: function () {
            this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
        }, drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw || (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%" : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", this.old_from === this.result.from && !this.force_redraw || (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), this.old_to === this.result.to && !this.force_redraw || (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1))
        }, drawLabels: function () {
            if (this.options) {
                var t, e, i, s, n, o = this.options.values.length, r = this.options.p_values;
                if (!this.options.hide_from_to) if ("single" === this.options.type) t = o ? this.decorate(r[this.result.from]) : (s = this._prettify(this.result.from), this.decorate(s, this.result.from)), this.$cache.single.html(t), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"; else {
                    i = o ? (this.options.decorate_both ? (t = this.decorate(r[this.result.from]), t += this.options.values_separator, t += this.decorate(r[this.result.to])) : t = this.decorate(r[this.result.from] + this.options.values_separator + r[this.result.to]), e = this.decorate(r[this.result.from]), this.decorate(r[this.result.to])) : (s = this._prettify(this.result.from), n = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(s, this.result.from), t += this.options.values_separator, t += this.decorate(n, this.result.to)) : t = this.decorate(s + this.options.values_separator + n, this.result.to), e = this.decorate(s, this.result.from), this.decorate(n, this.result.to)), this.$cache.single.html(t), this.$cache.from.html(e), this.$cache.to.html(i), this.calcLabels();
                    var a = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                        l = this.labels.p_single_left + this.labels.p_single_fake,
                        h = this.labels.p_to_left + this.labels.p_to_fake, c = Math.max(l, h);
                    this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", c = this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", h) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", Math.max(l, h))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), a < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", c > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"
                }
            }
        }, drawShadow: function () {
            var t, e, i, s, n = this.options, o = this.$cache, r = "number" == typeof n.from_min && !isNaN(n.from_min),
                a = "number" == typeof n.from_max && !isNaN(n.from_max),
                l = "number" == typeof n.to_min && !isNaN(n.to_min),
                h = "number" == typeof n.to_max && !isNaN(n.to_max);
            "single" === n.type ? n.from_shadow && (r || a) ? (t = this.convertToPercent(r ? n.from_min : n.min), e = this.convertToPercent(a ? n.from_max : n.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, o.shad_single[0].style.display = "block", o.shad_single[0].style.left = t + "%", o.shad_single[0].style.width = e + "%") : o.shad_single[0].style.display = "none" : (n.from_shadow && (r || a) ? (t = this.convertToPercent(r ? n.from_min : n.min), e = this.convertToPercent(a ? n.from_max : n.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, o.shad_from[0].style.display = "block", o.shad_from[0].style.left = t + "%", o.shad_from[0].style.width = e + "%") : o.shad_from[0].style.display = "none", n.to_shadow && (l || h) ? (i = this.convertToPercent(l ? n.to_min : n.min), s = this.convertToPercent(h ? n.to_max : n.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), s = this.toFixed(s - this.coords.p_handle / 100 * s), i += this.coords.p_handle / 2, o.shad_to[0].style.display = "block", o.shad_to[0].style.left = i + "%", o.shad_to[0].style.width = s + "%") : o.shad_to[0].style.display = "none")
        }, writeToInput: function () {
            "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
        }, callOnStart: function () {
            this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
        }, callOnChange: function () {
            this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
        }, callOnFinish: function () {
            this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
        }, callOnUpdate: function () {
            this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
        }, toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
        }, convertToPercent: function (t, e) {
            var i, s = this.options.max - this.options.min, n = s / 100;
            return s ? (i = (e ? t : t - this.options.min) / n, this.toFixed(i)) : (this.no_diapason = !0, 0)
        }, convertToValue: function (t) {
            var e, i, s = this.options.min, n = this.options.max, o = s.toString().split(".")[1],
                r = n.toString().split(".")[1], a = 0, l = 0;
            if (0 === t) return this.options.min;
            if (100 === t) return this.options.max;
            o && (a = e = o.length), r && (a = i = r.length), e && i && (a = i <= e ? e : i), s < 0 && (s = +(s + (l = Math.abs(s))).toFixed(a), n = +(n + l).toFixed(a));
            var h, c = (n - s) / 100 * t + s, d = this.options.step.toString().split(".")[1];
            return c = d ? +c.toFixed(d.length) : (c /= this.options.step, +(c *= this.options.step).toFixed(0)), l && (c -= l), (h = d ? +c.toFixed(d.length) : this.toFixed(c)) < this.options.min ? h = this.options.min : h > this.options.max && (h = this.options.max), h
        }, calcWithStep: function (t) {
            var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
            return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e)
        }, checkMinInterval: function (t, e, i) {
            var s, n, o = this.options;
            return o.min_interval ? (s = this.convertToValue(t), n = this.convertToValue(e), "from" === i ? n - s < o.min_interval && (s = n - o.min_interval) : s - n < o.min_interval && (s = n + o.min_interval), this.convertToPercent(s)) : t
        }, checkMaxInterval: function (t, e, i) {
            var s, n, o = this.options;
            return o.max_interval ? (s = this.convertToValue(t), n = this.convertToValue(e), "from" === i ? n - s > o.max_interval && (s = n - o.max_interval) : s - n > o.max_interval && (s = n + o.max_interval), this.convertToPercent(s)) : t
        }, checkDiapason: function (t, e, i) {
            var s = this.convertToValue(t), n = this.options;
            return "number" != typeof e && (e = n.min), "number" != typeof i && (i = n.max), s < e && (s = e), i < s && (s = i), this.convertToPercent(s)
        }, toFixed: function (t) {
            return +(t = t.toFixed(20))
        }, _prettify: function (t) {
            return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t
        }, prettify: function (t) {
            return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
        }, checkEdges: function (t, e) {
            return this.options.force_edges && (t < 0 ? t = 0 : 100 - e < t && (t = 100 - e)), this.toFixed(t)
        }, validate: function () {
            var t, e, i = this.options, s = this.result, n = i.values, o = n.length;
            if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), o) for (i.p_values = [], i.min = 0, i.max = o - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < o; e++) t = +n[e], t = isNaN(t) ? n[e] : (n[e] = t, this._prettify(t)), i.p_values.push(t);
            "number" == typeof i.from && !isNaN(i.from) || (i.from = i.min), "number" == typeof i.to && !isNaN(i.to) || (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max), i.to < i.min && (i.to = i.min), i.to > i.max && (i.to = i.max), this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)), i.from > i.to && (i.from = i.to), i.to < i.from && (i.to = i.from)), ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), s && (s.min !== i.min && (s.min = i.min), s.max !== i.max && (s.max = i.max), (s.from < s.min || s.from > s.max) && (s.from = i.from), (s.to < s.min || s.to > s.max) && (s.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
        }, decorate: function (t, e) {
            var i = "", s = this.options;
            return s.prefix && (i += s.prefix), i += t, s.max_postfix && (s.values.length && t === s.p_values[s.max] ? (i += s.max_postfix, s.postfix && (i += " ")) : e === s.max && (i += s.max_postfix, s.postfix && (i += " "))), s.postfix && (i += s.postfix), i
        }, updateFrom: function () {
            this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
        }, updateTo: function () {
            this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
        }, updateResult: function () {
            this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
        }, appendGrid: function () {
            if (this.options.grid) {
                var t, e, i, s, n, o = this.options, r = o.max - o.min, a = o.grid_num, l = 0, h = 0, c = 4, d = "";
                for (this.calcGridMargin(), l = o.grid_snap ? 50 < r ? (a = 50 / o.step, this.toFixed(o.step / .5)) : (a = r / o.step, this.toFixed(o.step / (r / 100))) : this.toFixed(100 / a), 4 < a && (c = 3), 7 < a && (c = 2), 14 < a && (c = 1), 28 < a && (c = 0), t = 0; t < a + 1; t++) {
                    for (i = c, 100 < (h = this.toFixed(l * t)) && (h = 100), s = ((this.coords.big[t] = h) - l * (t - 1)) / (i + 1), e = 1; e <= i && 0 !== h; e++) d += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(h - s * e) + '%"></span>';
                    d += '<span class="irs-grid-pol" style="left: ' + h + '%"></span>', n = this.convertToValue(h), d += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + h + '%">' + (n = o.values.length ? o.p_values[n] : this._prettify(n)) + "</span>"
                }
                this.coords.big_num = Math.ceil(a + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(d), this.cacheGridLabels()
            }
        }, cacheGridLabels: function () {
            var t, e, i = this.coords.big_num;
            for (e = 0; e < i; e++) t = this.$cache.grid.find(".js-grid-text-" + e), this.$cache.grid_labels.push(t);
            this.calcGridLabels()
        }, calcGridLabels: function () {
            var t, e, i = [], s = [], n = this.coords.big_num;
            for (t = 0; t < n; t++) this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), i[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), s[t] = this.toFixed(i[t] + this.coords.big_p[t]);
            for (this.options.force_edges && (i[0] < -this.coords.grid_gap && (i[0] = -this.coords.grid_gap, s[0] = this.toFixed(i[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), s[n - 1] > 100 + this.coords.grid_gap && (s[n - 1] = 100 + this.coords.grid_gap, i[n - 1] = this.toFixed(s[n - 1] - this.coords.big_p[n - 1]), this.coords.big_x[n - 1] = this.toFixed(this.coords.big_p[n - 1] - this.coords.grid_gap))), this.calcGridCollision(2, i, s), this.calcGridCollision(4, i, s), t = 0; t < n; t++) e = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (e.style.marginLeft = -this.coords.big_x[t] + "%")
        }, calcGridCollision: function (t, e, i) {
            var s, n, o, r = this.coords.big_num;
            for (s = 0; s < r && !(r <= (n = s + t / 2)); s += t) o = this.$cache.grid_labels[n][0], i[s] <= e[n] ? o.style.visibility = "visible" : o.style.visibility = "hidden"
        }, calcGridMargin: function () {
            this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
        }, update: function (t) {
            this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = l.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
        }, reset: function () {
            this.input && (this.updateResult(), this.update())
        }, destroy: function () {
            this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), l.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
        }
    }, l.fn.ionRangeSlider = function (t) {
        return this.each(function () {
            l.data(this, "ionRangeSlider") || l.data(this, "ionRangeSlider", new o(this, t, s++))
        })
    }, function () {
        for (var o = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !c.requestAnimationFrame; ++e) c.requestAnimationFrame = c[t[e] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[t[e] + "CancelAnimationFrame"] || c[t[e] + "CancelRequestAnimationFrame"];
        c.requestAnimationFrame || (c.requestAnimationFrame = function (t, e) {
            var i = (new Date).getTime(), s = Math.max(0, 16 - (i - o)), n = c.setTimeout(function () {
                t(i + s)
            }, s);
            return o = i + s, n
        }), c.cancelAnimationFrame || (c.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        })
    }()
}), function (o) {
    o.fn.footerReveal = function (t) {
        var e = o(this), i = e.prev(), s = o(window), n = o.extend({shadow: !0, shadowOpacity: .8, zIndex: -100}, t);
        o.extend(!0, {}, n, t);
        return e.outerHeight() <= s.outerHeight() && (e.css({
            "z-index": n.zIndex,
            position: "fixed",
            bottom: 0
        }), n.shadow && i.css({
            "-moz-box-shadow": "0 20px 30px -20px rgba(0,0,0," + n.shadowOpacity + ")",
            "-webkit-box-shadow": "0 20px 30px -20px rgba(0,0,0," + n.shadowOpacity + ")",
            "box-shadow": "0 20px 30px -20px rgba(0,0,0," + n.shadowOpacity + ")"
        }), s.on("load resize", function () {
            e.css({width: i.outerWidth()}), i.css({"margin-bottom": e.outerHeight()})
        })), this
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function (c) {
    var n = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        allow_duplicates: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {from: "top", align: "right"},
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {enter: "animated fadeInDown", exit: "animated fadeOutUp"},
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        onClick: null,
        icon_type: "class",
        template: '<div data-notify="container" class="customized_notify alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><i><span data-notify="icon"></span></i> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };

    function i(t, e, i) {
        var l, h, s = {
            content: {
                message: "object" == typeof e ? e.message : e,
                title: e.title ? e.title : "",
                icon: e.icon ? e.icon : "",
                url: e.url ? e.url : "#",
                target: e.target ? e.target : "-"
            }
        };
        i = c.extend(!0, {}, s, i), this.settings = c.extend(!0, {}, n, i), this._defaults = n, "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        }, "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        }), !this.settings.allow_duplicates && (this.settings.allow_duplicates || (l = this, h = !1, c('[data-notify="container"]').each(function (t, e) {
            var i = c(e), s = i.find('[data-notify="title"]').html().trim(),
                n = i.find('[data-notify="message"]').html().trim(),
                o = s === c("<div>" + l.settings.content.title + "</div>").html().trim(),
                r = n === c("<div>" + l.settings.content.message + "</div>").html().trim(),
                a = i.hasClass("alert-" + l.settings.type);
            return o && r && a && (h = !0), !h
        }), h)) || this.init()
    }

    String.format = function () {
        var i = arguments;
        return arguments[0].replace(/(\{\{\d\}\}|\{\d\})/g, function (t) {
            if ("{{" === t.substring(0, 2)) return t;
            var e = parseInt(t.match(/\d/)[0]);
            return i[e + 1]
        })
    }, c.extend(i.prototype, {
        init: function () {
            var a = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = {
                $ele: this.$ele,
                update: function (t, e) {
                    var i = {};
                    for (var s in"string" == typeof t ? i[t] = e : i = t, i) switch (s) {
                        case"type":
                            this.$ele.removeClass("alert-" + a.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + a.settings.type), a.settings.type = i[s], this.$ele.addClass("alert-" + i[s]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[s]);
                            break;
                        case"icon":
                            var n = this.$ele.find('[data-notify="icon"]');
                            "class" === a.settings.icon_type.toLowerCase() ? n.removeClass(a.settings.content.icon).addClass(i[s]) : (n.is("img") || n.find("img"), n.attr("src", i[s])), a.settings.content.icon = i[t];
                            break;
                        case"progress":
                            var o = a.settings.delay - a.settings.delay * (i[s] / 100);
                            this.$ele.data("notify-delay", o), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[s]).css("width", i[s] + "%");
                            break;
                        case"url":
                            this.$ele.find('[data-notify="url"]').attr("href", i[s]);
                            break;
                        case"target":
                            this.$ele.find('[data-notify="url"]').attr("target", i[s]);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + s + '"]').html(i[s])
                    }
                    var r = this.$ele.outerHeight() + parseInt(a.settings.spacing) + parseInt(a.settings.offset.y);
                    a.reposition(r)
                },
                close: function () {
                    a.close()
                }
            }
        }, buildNotify: function () {
            var t = this.settings.content;
            this.$ele = c(String.format(this.settings.template, this.settings.type, t.title, t.message, t.url, t.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
        }, setIcon: function () {
            "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
        }, styleDismiss: function () {
            this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            })
        }, styleURL: function () {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%",
                zIndex: this.settings.z_index + 1
            })
        }, placement: function () {
            var i = this, t = this.settings.offset.y, e = {
                display: "inline-block",
                margin: "0px auto",
                position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                transition: "all .5s ease-in-out",
                zIndex: this.settings.z_index
            }, s = !1, n = this.settings;
            switch (c('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
                t = Math.max(t, parseInt(c(this).css(n.placement.from)) + parseInt(c(this).outerHeight()) + parseInt(n.spacing))
            }), !0 === this.settings.newest_on_top && (t = this.settings.offset.y), e[this.settings.placement.from] = t + "px", this.settings.placement.align) {
                case"left":
                case"right":
                    e[this.settings.placement.align] = this.settings.offset.x + "px";
                    break;
                case"center":
                    e.left = 0, e.right = 0
            }
            this.$ele.css(e).addClass(this.settings.animate.enter), c.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (t, e) {
                i.$ele[0].style[e + "AnimationIterationCount"] = 1
            }), c(this.settings.element).append(this.$ele), !0 === this.settings.newest_on_top && (t = parseInt(t) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(t)), c.isFunction(i.settings.onShow) && i.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function () {
                s = !0
            }).one(this.animations.end, function () {
                i.$ele.removeClass(i.settings.animate.enter), c.isFunction(i.settings.onShown) && i.settings.onShown.call(this)
            }), setTimeout(function () {
                s || c.isFunction(i.settings.onShown) && i.settings.onShown.call(this)
            }, 600)
        }, bind: function () {
            var i = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
                i.close()
            }), c.isFunction(i.settings.onClick) && this.$ele.on("click", function (t) {
                t.target != i.$ele.find('[data-notify="dismiss"]')[0] && i.settings.onClick.call(this, t)
            }), this.$ele.mouseover(function () {
                c(this).data("data-hover", "true")
            }).mouseout(function () {
                c(this).data("data-hover", "false")
            }), this.$ele.data("data-hover", "false"), 0 < this.settings.delay) {
                i.$ele.data("notify-delay", i.settings.delay);
                var s = setInterval(function () {
                    var t = parseInt(i.$ele.data("notify-delay")) - i.settings.timer;
                    if ("false" === i.$ele.data("data-hover") && "pause" === i.settings.mouse_over || "pause" != i.settings.mouse_over) {
                        var e = (i.settings.delay - t) / i.settings.delay * 100;
                        i.$ele.data("notify-delay", t), i.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", e).css("width", e + "%")
                    }
                    t <= -i.settings.timer && (clearInterval(s), i.close())
                }, i.settings.timer)
            }
        }, close: function () {
            var t = this, e = parseInt(this.$ele.css(this.settings.placement.from)), i = !1;
            this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), t.reposition(e), c.isFunction(t.settings.onClose) && t.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function () {
                i = !0
            }).one(this.animations.end, function () {
                c(this).remove(), c.isFunction(t.settings.onClosed) && t.settings.onClosed.call(this)
            }), setTimeout(function () {
                i || (t.$ele.remove(), t.settings.onClosed && t.settings.onClosed(t.$ele))
            }, 600)
        }, reposition: function (t) {
            var e = this,
                i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                s = this.$ele.nextAll(i);
            !0 === this.settings.newest_on_top && (s = this.$ele.prevAll(i)), s.each(function () {
                c(this).css(e.settings.placement.from, t), t = parseInt(t) + parseInt(e.settings.spacing) + c(this).outerHeight()
            })
        }
    }), c.notify = function (t, e) {
        return new i(this, t, e).notify
    }, c.notifyDefaults = function (t) {
        return n = c.extend(!0, {}, n, t)
    }, c.notifyClose = function (t) {
        void 0 === t || "all" === t ? c("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === t || "info" === t || "warning" === t || "danger" === t ? c(".alert-" + t + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t ? c(t + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : c('[data-notify-position="' + t + '"]').find('[data-notify="dismiss"]').trigger("click")
    }, c.notifyCloseExcept = function (t) {
        "success" === t || "info" === t || "warning" === t || "danger" === t ? c("[data-notify]").not(".alert-" + t).find('[data-notify="dismiss"]').trigger("click") : c("[data-notify]").not(t).find('[data-notify="dismiss"]').trigger("click")
    }
}), function (x) {
    function n() {
        return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }

    function e() {
        I && M[I.id].fx && !M[I.id].fxmobile && (x(window).width() < 480 ? I.element.removeClass("picker-fxs") : I.element.addClass("picker-fxs"))
    }

    function l() {
        var t = P($()), e = P(k());
        if (M[I.id].lock) {
            if ("from" == M[I.id].lock) return t < e ? (W(), I.element.addClass("picker-lkd"), !0) : (I.element.removeClass("picker-lkd"), !1);
            if ("to" == M[I.id].lock) return e < t ? (W(), I.element.addClass("picker-lkd"), !0) : (I.element.removeClass("picker-lkd"), !1)
        }
        return M[I.id].disabledays && (-1 != M[I.id].disabledays.indexOf(t) ? (W(), I.element.addClass("picker-lkd"), !0) : (I.element.removeClass("picker-lkd"), !1))
    }

    function C(t) {
        return t % 1 == 0
    }

    function T(t) {
        return /(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/.test(t)
    }

    function h(t) {
        return parseInt(M[I.id].key[t].current)
    }

    function c(t) {
        return parseInt(M[I.id].key[t].today)
    }

    function r(t, e) {
        for (var i = [], s = M[I.id].key[t], n = s.min; n <= s.max; n++) n % e == 0 && i.push(n);
        return i
    }

    function E() {
        return S[M[I.id].lang].gregorian ? [1, 2, 3, 4, 5, 6, 0] : [0, 1, 2, 3, 4, 5, 6]
    }

    function a(t) {
        return N('ul.pick[data-k="' + t + '"]')
    }

    function d(t, e) {
        ul = a(t);
        var i = [];
        return ul.find("li").each(function () {
            i.push(x(this).attr("value"))
        }), "last" == e ? i[i.length - 1] : i[0]
    }

    function t() {
        M[I.id].large && (I.element.toggleClass("picker-lg"), H())
    }

    function s() {
        N("ul.pick.pick-l").toggleClass("visible")
    }

    function u() {
        if (!I.element.hasClass("picker-modal")) {
            var t = I.input, e = t.offset().left + t.outerWidth() / 2, i = t.offset().top + t.outerHeight();
            I.element.css({left: e, top: i})
        }
    }

    function p() {
        l() || (I.element.removeClass("picker-focus"), I.element.hasClass("picker-modal") && x(".picker-modal-overlay").addClass("tohide"), I = null), A = !1
    }

    function D(t) {
        var e = a(t), s = M[I.id].key[t];
        for (M[I.id].key[t].current = s.today < s.min && s.min || s.today, i = s.min; i <= s.max; i++) {
            var n = i;
            "m" == t && (n = S[M[I.id].lang].months.short[i - 1]), "l" == t && (n = S[Object.keys(S)[i]].name), n += "d" == t ? "<span></span>" : "", x("<li>", {
                value: i,
                html: n
            }).appendTo(e)
        }
        x("<div>", {
            class: "pick-arw pick-arw-s1 pick-arw-l",
            html: x("<i>", {class: "pick-i-l"})
        }).appendTo(e), x("<div>", {
            class: "pick-arw pick-arw-s1 pick-arw-r",
            html: x("<i>", {class: "pick-i-r"})
        }).appendTo(e), "y" == t && (x("<div>", {
            class: "pick-arw pick-arw-s2 pick-arw-l",
            html: x("<i>", {class: "pick-i-l"})
        }).appendTo(e), x("<div>", {
            class: "pick-arw pick-arw-s2 pick-arw-r",
            html: x("<i>", {class: "pick-i-r"})
        }).appendTo(e)), L(t, h(t))
    }

    function f(t, e) {
        var i = M[I.id].key[t];
        e > i.max && ("d" == t && z("m", "right"), "m" == t && z("y", "right"), e = i.min), e < i.min && ("d" == t && z("m", "left"), "m" == t && z("y", "left"), e = i.max), M[I.id].key[t].current = e, L(t, e)
    }

    function m(t) {
        return t < 10 ? "0" + t : t
    }

    var g = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
        _ = "webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend", S = {
            en: {
                name: "English",
                gregorian: !1,
                months: {
                    short: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                    full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                weekdays: {
                    short: ["S", "M", "T", "W", "T", "F", "S"],
                    full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                }
            },
            ka: {
                name: "Georgian",
                gregorian: !1,
                months: {
                    short: ["იან", "თებ", "მარტ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექტ", "ოქტ", "ნოემბ", "დეკ"],
                    full: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"]
                },
                weekdays: {
                    short: ["კვ", "ორ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
                    full: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
                }
            },
            it: {
                name: "Italiano",
                gregorian: !0,
                months: {
                    short: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                    full: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
                },
                weekdays: {
                    short: ["D", "L", "M", "M", "G", "V", "S"],
                    full: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
                }
            },
            fr: {
                name: "Français",
                gregorian: !0,
                months: {
                    short: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
                    full: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
                },
                weekdays: {
                    short: ["D", "L", "M", "M", "J", "V", "S"],
                    full: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
                }
            },
            zh: {
                name: "中文",
                gregorian: !0,
                months: {
                    short: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    full: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                weekdays: {
                    short: ["天", "一", "二", "三", "四", "五", "六"],
                    full: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                }
            },
            ar: {
                name: "العَرَبِيَّة",
                gregorian: !1,
                months: {
                    short: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                    full: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                },
                weekdays: {
                    short: ["S", "M", "T", "W", "T", "F", "S"],
                    full: ["الأحد", "الإثنين", "الثلثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                }
            },
            fa: {
                name: "فارسی",
                gregorian: !1,
                months: {
                    short: ["ژانویه", "فووریه", "مارچ", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
                    full: ["ژانویه", "فووریه", "مارچ", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"]
                },
                weekdays: {
                    short: ["S", "M", "T", "W", "T", "F", "S"],
                    full: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه"]
                }
            },
            hu: {
                name: "Hungarian",
                gregorian: !0,
                months: {
                    short: ["jan", "feb", "már", "ápr", "máj", "jún", "júl", "aug", "sze", "okt", "nov", "dec"],
                    full: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"]
                },
                weekdays: {
                    short: ["v", "h", "k", "s", "c", "p", "s"],
                    full: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
                }
            },
            gr: {
                name: "Ελληνικά",
                gregorian: !0,
                months: {
                    short: ["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιούν", "Ιούλ", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"],
                    full: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"]
                },
                weekdays: {
                    short: ["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"],
                    full: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
                }
            },
            es: {
                name: "Español",
                gregorian: !0,
                months: {
                    short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                    full: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
                },
                weekdays: {
                    short: ["D", "L", "M", "X", "J", "V", "S"],
                    full: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
                }
            },
            da: {
                name: "Dansk",
                gregorian: !0,
                months: {
                    short: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                    full: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
                },
                weekdays: {
                    short: ["s", "m", "t", "o", "t", "f", "l"],
                    full: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
                }
            },
            de: {
                name: "Deutsch",
                gregorian: !0,
                months: {
                    short: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                    full: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                },
                weekdays: {
                    short: ["S", "M", "D", "M", "D", "F", "S"],
                    full: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                }
            },
            nl: {
                name: "Nederlands",
                gregorian: !0,
                months: {
                    short: ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                    full: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
                },
                weekdays: {
                    short: ["z", "m", "d", "w", "d", "v", "z"],
                    full: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
                }
            },
            pl: {
                name: "język polski",
                gregorian: !0,
                months: {
                    short: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                    full: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"]
                },
                weekdays: {
                    short: ["n", "p", "w", "ś", "c", "p", "s"],
                    full: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                }
            },
            pt: {
                name: "Português",
                gregorian: !0,
                months: {
                    short: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    full: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
                },
                weekdays: {
                    short: ["D", "S", "T", "Q", "Q", "S", "S"],
                    full: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
                }
            },
            si: {
                name: "Slovenščina",
                gregorian: !0,
                months: {
                    short: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
                    full: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"]
                },
                weekdays: {
                    short: ["n", "p", "t", "s", "č", "p", "s"],
                    full: ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"]
                }
            },
            uk: {
                name: "українська мова",
                gregorian: !0,
                months: {
                    short: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"],
                    full: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"]
                },
                weekdays: {
                    short: ["н", "п", "в", "с", "ч", "п", "с"],
                    full: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"]
                }
            },
            ru: {
                name: "русский язык",
                gregorian: !0,
                months: {
                    short: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
                    full: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
                },
                weekdays: {
                    short: ["в", "п", "в", "с", "ч", "п", "с"],
                    full: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                }
            },
            tr: {
                name: "Türkçe",
                gregorian: !0,
                months: {
                    short: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                    full: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
                },
                weekdays: {
                    short: ["P", "P", "S", "Ç", "P", "C", "C"],
                    full: ["Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                }
            },
            ko: {
                name: "조선말",
                gregorian: !0,
                months: {
                    short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                    full: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                },
                weekdays: {
                    short: ["일", "월", "화", "수", "목", "금", "토"],
                    full: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                }
            },
            fi: {
                name: "suomen kieli",
                gregorian: !0,
                months: {
                    short: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
                    full: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"]
                },
                weekdays: {
                    short: ["S", "M", "T", "K", "T", "P", "L"],
                    full: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"]
                }
            },
            vi: {
                name: "Tiếng việt",
                gregorian: !1,
                months: {
                    short: ["Th.01", "Th.02", "Th.03", "Th.04", "Th.05", "Th.06", "Th.07", "Th.08", "Th.09", "Th.10", "Th.11", "Th.12"],
                    full: ["Tháng 01", "Tháng 02", "Tháng 03", "Tháng 04", "Tháng 05", "Tháng 06", "Tháng 07", "Tháng 08", "Tháng 09", "Tháng 10", "Tháng 11", "Tháng 12"]
                },
                weekdays: {
                    short: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    full: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
                }
            }
        }, M = {}, I = null, A = !1, v = null, y = null, w = null, b = !1, k = function () {
            return c("m") + "/" + c("d") + "/" + c("y")
        }, $ = function () {
            return h("m") + "/" + h("d") + "/" + h("y")
        }, O = function (t, e) {
            var i = M[I.id].key[t];
            return e > i.max ? O(t, e - i.max + (i.min - 1)) : e < i.min ? O(t, e + 1 + (i.max - i.min)) : e
        }, N = function (t) {
            if (I) return I.element.find(t)
        }, P = function (t) {
            return Date.parse(t) / 1e3
        }, F = function () {
            var e = E();
            N(".pick-lg .pick-lg-h li").each(function (t) {
                x(this).html(S[M[I.id].lang].weekdays.short[e[t]])
            }), N("ul.pick.pick-m li").each(function () {
                x(this).html(S[M[I.id].lang].months.short[x(this).attr("value") - 1])
            })
        }, H = function () {
            var t = 0, e = N(".pick-lg-b");
            e.find("li").empty().removeClass("pick-n pick-b pick-a pick-v pick-lk pick-sl pick-h").attr("data-value", "");
            new Date($());

            function i(t) {
                var e = t.getMonth(), i = t.getFullYear();
                return [31, i % 4 == 0 && (i % 100 != 0 || i % 400 == 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            }

            var s = new Date($()), n = new Date($());
            n.setMonth(n.getMonth() - 1), s.setDate(1);
            var o = s.getDay() - 1;
            o < 0 && (o = 6), S[M[I.id].lang].gregorian && --o < 0 && (o = 6);
            for (var r = i(n) - o; r <= i(n); r++) e.find("li").eq(t).html(r).addClass("pick-b pick-n pick-h"), t++;
            for (r = 1; r <= i(s); r++) e.find("li").eq(t).html(r).addClass("pick-n pick-v").attr("data-value", r), t++;
            if (e.find("li.pick-n").length < 42) {
                var a = 42 - e.find("li.pick-n").length;
                for (r = 1; r <= a; r++) e.find("li").eq(t).html(r).addClass("pick-a pick-n pick-h"), t++
            }
            M[I.id].lock && ("from" === M[I.id].lock ? h("y") <= c("y") && (h("m") == c("m") ? N('.pick-lg .pick-lg-b li.pick-v[data-value="' + c("d") + '"]').prevAll("li").addClass("pick-lk") : h("m") < c("m") ? N(".pick-lg .pick-lg-b li").addClass("pick-lk") : h("m") > c("m") && h("y") < c("y") && N(".pick-lg .pick-lg-b li").addClass("pick-lk")) : h("y") >= c("y") && (h("m") == c("m") ? N('.pick-lg .pick-lg-b li.pick-v[data-value="' + c("d") + '"]').nextAll("li").addClass("pick-lk") : h("m") > c("m") ? N(".pick-lg .pick-lg-b li").addClass("pick-lk") : h("m") < c("m") && h("y") > c("y") && N(".pick-lg .pick-lg-b li").addClass("pick-lk"))), M[I.id].disabledays && x.each(M[I.id].disabledays, function (t, e) {
                if (e && T(e)) {
                    var i = new Date(1e3 * e);
                    i.getMonth() + 1 == h("m") && i.getFullYear() == h("y") && N('.pick-lg .pick-lg-b li.pick-v[data-value="' + i.getDate() + '"]').addClass("pick-lk")
                }
            }), N(".pick-lg-b li.pick-v[data-value=" + h("d") + "]").addClass("pick-sl")
        }, j = function () {
            var e, i, t;
            I.element.hasClass("picker-lg") && H(), e = h("m"), i = h("y"), t = i % 4 == 0 && (i % 100 != 0 || i % 400 == 0), M[I.id].key.d.max = [31, t ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e - 1], h("d") > M[I.id].key.d.max && (M[I.id].key.d.current = M[I.id].key.d.max, L("d", h("d"))), N(".pick-d li").removeClass("pick-wke").each(function () {
                var t = new Date(e + "/" + x(this).attr("value") + "/" + i).getDay();
                x(this).find("span").html(S[M[I.id].lang].weekdays.full[t]), 0 != t && 6 != t || x(this).addClass("pick-wke")
            }), I.element.hasClass("picker-lg") && (N(".pick-lg-b li").removeClass("pick-wke"), N(".pick-lg-b li.pick-v").each(function () {
                var t = new Date(e + "/" + x(this).attr("data-value") + "/" + i).getDay();
                0 != t && 6 != t || x(this).addClass("pick-wke")
            })), U()
        }, L = function (t, e) {
            var i, s = a(t);
            s.find("li").removeClass("pick-sl pick-bfr pick-afr"), e == d(t, "last") && ((i = s.find('li[value="' + d(t, "first") + '"]')).clone().insertAfter(s.find("li[value=" + e + "]")), i.remove());
            e == d(t, "first") && ((i = s.find('li[value="' + d(t, "last") + '"]')).clone().insertBefore(s.find("li[value=" + e + "]")), i.remove());
            s.find("li[value=" + e + "]").addClass("pick-sl"), s.find("li.pick-sl").nextAll("li").addClass("pick-afr"), s.find("li.pick-sl").prevAll("li").addClass("pick-bfr")
        }, z = function (t, e) {
            var i = h(t);
            "right" == e ? i++ : i--, f(t, i)
        }, W = function () {
            I.element.addClass("picker-rmbl")
        }, U = function () {
            if (!l() && A) {
                var t = h("d"), e = h("m"), i = h("y"), s = new Date(e + "/" + t + "/" + i).getDay(),
                    n = M[I.id].format.replace(/\b(d)\b/g, m(t)).replace(/\b(m)\b/g, m(e)).replace(/\b(S)\b/g, (o = t) + ((r = ["th", "st", "nd", "rd"])[((a = o % 100) - 20) % 10] || r[a] || r[0])).replace(/\b(Y)\b/g, i).replace(/\b(U)\b/g, P($())).replace(/\b(D)\b/g, S[M[I.id].lang].weekdays.short[s]).replace(/\b(l)\b/g, S[M[I.id].lang].weekdays.full[s]).replace(/\b(F)\b/g, S[M[I.id].lang].months.full[e - 1]).replace(/\b(M)\b/g, S[M[I.id].lang].months.short[e - 1]).replace(/\b(n)\b/g, e).replace(/\b(j)\b/g, t);
                I.input.val(n).change(), A = !1
            }
            var o, r, a
        };
    if (n()) var R = {i: "touchstart", m: "touchmove", e: "touchend"}; else R = {
        i: "mousedown",
        m: "mousemove",
        e: "mouseup"
    };
    var B = "div.datedropper.picker-focus";
    x(document).on("click", function (t) {
        I && (I.input.is(t.target) || I.element.is(t.target) || 0 !== I.element.has(t.target).length || (p(), v = null))
    }).on(_, B + ".picker-rmbl", function () {
        I.element.hasClass("picker-rmbl") && x(this).removeClass("picker-rmbl")
    }).on(g, ".picker-modal-overlay", function () {
        x(this).remove()
    }).on(R.i, B + " .pick-lg li.pick-v", function () {
        N(".pick-lg-b li").removeClass("pick-sl"), x(this).addClass("pick-sl"), M[I.id].key.d.current = x(this).attr("data-value"), L("d", x(this).attr("data-value")), A = !0
    }).on("click", B + " .pick-btn-sz", function () {
        t()
    }).on("click", B + " .pick-btn-lng", function () {
        s()
    }).on(R.i, B + " .pick-arw.pick-arw-s2", function (t) {
        t.preventDefault(), v = null;
        x(this).closest("ul").data("k");
        var e, i = M[I.id].jump;
        e = x(this).hasClass("pick-arw-r") ? h("y") + i : h("y") - i;
        var s = r("y", i);
        e > s[s.length - 1] && (e = s[0]), e < s[0] && (e = s[s.length - 1]), M[I.id].key.y.current = e, L("y", h("y")), A = !0
    }).on(R.i, B + " .pick-arw.pick-arw-s1", function (t) {
        t.preventDefault(), v = null;
        var e = x(this).closest("ul").data("k");
        x(this).hasClass("pick-arw-r") ? z(e, "right") : z(e, "left"), A = !0
    }).on(R.i, B + " ul.pick.pick-y li", function () {
        b = !0
    }).on(R.e, B + " ul.pick.pick-y li", function () {
        if (b && !(M[I.id].jump >= M[I.id].key.y.max - M[I.id].key.y.min)) {
            x(this).closest("ul").toggleClass("pick-jump");
            var t = function (t, e) {
                for (var i = e[0], s = Math.abs(t - i), n = 0; n < e.length; n++) {
                    var o = Math.abs(t - e[n]);
                    o < s && (s = o, i = e[n])
                }
                return i
            }(h("y"), r("y", M[I.id].jump));
            M[I.id].key.y.current = t, L("y", h("y")), b = !1
        }
    }).on(R.i, B + " ul.pick.pick-d li", function () {
        b = !0
    }).on(R.e, B + " ul.pick.pick-d li", function () {
        b && (t(), b = !1)
    }).on(R.i, B + " ul.pick.pick-l li", function () {
        b = !0
    }).on(R.e, B + " ul.pick.pick-l li", function () {
        var t;
        b && (s(), t = x(this).val(), M[I.id].lang = Object.keys(S)[t], F(), j(), b = !1)
    }).on(R.i, B + " ul.pick", function (t) {
        if (v = x(this)) {
            var e = v.data("k");
            y = n() ? t.originalEvent.touches[0].pageY : t.pageY, w = h(e)
        }
    }).on(R.m, function (t) {
        if (b = !1, v) {
            t.preventDefault();
            var e = v.data("k");
            o = n() ? t.originalEvent.touches[0].pageY : t.pageY, o = y - o, o = Math.round(.026 * o), i = w + o;
            var s = O(e, i);
            s != M[I.id].key[e].current && f(e, s), A = !0
        }
    }).on(R.e, function (t) {
        v && (w = y = v = null), I && j()
    }).on(R.i, B + " .pick-submit", function () {
        p()
    }), x(window).resize(function () {
        I && (u(), e())
    }), x.fn.dateDropper = function (t) {
        return x(this).each(function () {
            if (x(this).is("input") && !x(this).hasClass("picker-input")) {
                var t = x(this), e = "datedropper-" + Object.keys(M).length;
                t.attr("data-id", e).addClass("picker-input").prop({type: "text", readonly: !0});
                var i = t.data("default-date") && T(t.data("default-date")) ? t.data("default-date") : null,
                    s = t.data("disabled-days") ? t.data("disabled-days").split(",") : null,
                    n = t.data("format") || "m/d/Y", o = !1 !== t.data("fx") || t.data("fx"),
                    r = !1 === t.data("fx") ? "" : "picker-fxs", a = !1 !== t.data("fx-mobile") || t.data("fx-mobile"),
                    l = !1 !== t.data("init-set"), h = t.data("lang") && t.data("lang") in S ? t.data("lang") : "en",
                    c = !0 === t.data("large-mode"), d = !0 === t.data("large-default") && !0 == c ? "picker-lg" : "",
                    u = ("from" == t.data("lock") || "to" == t.data("lock")) && t.data("lock"),
                    p = t.data("jump") && C(t.data("jump")) ? t.data("jump") : 10,
                    f = t.data("max-year") && C(t.data("max-year")) ? t.data("max-year") : (new Date).getFullYear(),
                    m = t.data("min-year") && C(t.data("min-year")) ? t.data("min-year") : 1970,
                    g = !0 === t.data("modal") ? "picker-modal" : "", _ = t.data("theme") || "primary",
                    v = !0 === t.data("translate-mode");
                if (s && x.each(s, function (t, e) {
                    e && T(e) && (s[t] = P(e))
                }), M[e] = {
                    disabledays: s,
                    format: n,
                    fx: o,
                    fxmobile: a,
                    lang: h,
                    large: c,
                    lock: u,
                    jump: p,
                    key: {
                        m: {min: 1, max: 12, current: 1, today: (new Date).getMonth() + 1},
                        d: {min: 1, max: 31, current: 1, today: (new Date).getDate()},
                        y: {min: m, max: f, current: m, today: (new Date).getFullYear()},
                        l: {min: 0, max: Object.keys(S).length - 1, current: 0, today: 0}
                    },
                    translate: v
                }, i) {
                    var y = i.match(/\d+/g);
                    x.each(y, function (t, e) {
                        y[t] = parseInt(e)
                    }), M[e].key.m.today = y[0] && y[0] <= 12 ? y[0] : M[e].key.m.today, M[e].key.d.today = y[1] && y[1] <= 31 ? y[1] : M[e].key.d.today, M[e].key.y.today = y[2] ? y[2] : M[e].key.y.today, M[e].key.y.today > M[e].key.y.max && (M[e].key.y.max = M[e].key.y.today), M[e].key.y.today < M[e].key.y.min && (M[e].key.y.min = M[e].key.y.today)
                }
                for (var w in x("<div>", {
                    class: "datedropper " + g + " " + _ + " " + r + " " + d,
                    id: e,
                    html: x("<div>", {class: "picker"})
                }).appendTo("body"), I = {
                    id: e,
                    input: t,
                    element: x("#" + e)
                }, M[e].key) x("<ul>", {class: "pick pick-" + w, "data-k": w}).appendTo(N(".picker")), D(w);
                if (M[e].large) {
                    x("<div>", {class: "pick-lg"}).insertBefore(N(".pick-d")), x('<ul class="pick-lg-h"></ul><ul class="pick-lg-b"></ul>').appendTo(N(".pick-lg"));
                    for (var b = E(), k = 0; k < 7; k++) x("<li>", {html: S[M[I.id].lang].weekdays.short[b[k]]}).appendTo(N(".pick-lg .pick-lg-h"));
                    for (k = 0; k < 42; k++) x("<li>").appendTo(N(".pick-lg .pick-lg-b"))
                }
                x("<div>", {class: "pick-btns"}).appendTo(N(".picker")), x("<div>", {class: "pick-submit"}).appendTo(N(".pick-btns")), M[I.id].translate && x("<div>", {class: "pick-btn pick-btn-lng"}).appendTo(N(".pick-btns")), M[I.id].large && x("<div>", {class: "pick-btn pick-btn-sz"}).appendTo(N(".pick-btns")), "Y" != n && "m" != n || (N(".pick-d,.pick-btn-sz").hide(), I.element.addClass("picker-tiny"), "Y" == n && N(".pick-m,.pick-btn-lng").hide(), "m" == n && N(".pick-y").hide()), l && (A = !0, U()), I = null
            }
        }).focus(function (t) {
            t.preventDefault(), x(this).blur(), I && p(), I = {
                id: x(this).data("id"),
                input: x(this),
                element: x("#" + x(this).data("id"))
            }, e(), u(), j(), I.element.addClass("picker-focus"), I.element.hasClass("picker-modal") && x("body").append('<div class="picker-modal-overlay"></div>')
        })
    }
}(jQuery), function (b) {
    b.fn.timeDropper = function (n, t) {
        return b(this).each(function () {
            function c(t) {
                return t < 10 ? "0" + t : t
            }

            var h, d = b(this), u = !1, p = !1, t = b(".td-clock").length, e = null, f = b.extend({
                format: "h:mm a",
                autoswitch: !1,
                meridians: !1,
                mousewheel: !1,
                setCurrentTime: !0,
                init_animation: "fadein",
                primaryColor: "#1977CC",
                borderColor: "#1977CC",
                backgroundColor: "#FFF",
                textColor: "#555"
            }, n);
            d.prop({readonly: !0}).addClass("td-input"), b("body").append('<div class="td-wrap td-n2" id="td-clock-' + t + '"><div class="td-overlay"></div><div class="td-clock td-init"><div class="td-deg td-n"><div class="td-select"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 35.4" enable-background="new 0 0 100 35.4" xml:space="preserve"><g><path fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M98.1,33C85.4,21.5,68.5,14.5,50,14.5S14.6,21.5,1.9,33"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.9" y1="33" x2="1.9" y2="28.6"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.9" y1="33" x2="6.3" y2="33"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="98.1" y1="33" x2="93.7" y2="33"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="98.1" y1="33" x2="98.1" y2="28.6"/></g></svg></div></div><div class="td-medirian"><span class="td-icon-am td-n">AM</span><span class="td-icon-pm td-n">PM</span></div><div class="td-lancette"><div></div><div></div></div><div class="td-time"><span class="on"></span>:<span></span></div></div></div>'), b("head").append("<style>#td-clock-" + t + " .td-clock {color:" + f.textColor + ";background: " + f.backgroundColor + "; box-shadow: 0 0 0 1px " + f.borderColor + ",0 0 0 8px rgba(0, 0, 0, 0.05); } #td-clock-" + t + " .td-clock .td-time span.on { color:" + f.primaryColor + "} #td-clock-" + t + " .td-clock:before { border-color: " + f.borderColor + "} #td-clock-" + t + " .td-select:after { box-shadow: 0 0 0 1px " + f.borderColor + " } #td-clock-" + t + " .td-clock:before,#td-clock-" + t + " .td-select:after {background: " + f.backgroundColor + ";} #td-clock-" + t + " .td-lancette {border: 2px solid " + f.primaryColor + "; opacity:0.1}#td-clock-" + t + " .td-lancette div:after { background: " + f.primaryColor + ";} #td-clock-" + t + " .td-bulletpoint div:after { background:" + f.primaryColor + "; opacity:0.1}</style>");
            var i = b("#td-clock-" + t), s = i.find(".td-overlay"), m = i.find(".td-clock");
            m.find("svg").attr("style", "stroke:" + f.borderColor);

            function g() {
                var t = m.find(".td-time span.on"), e = parseInt(t.attr("data-id"));
                deg = 0 == t.index() ? Math.round(360 * e / 23) : Math.round(360 * e / 59), v = -1, y = deg, w = deg
            }

            function _(t) {
                var e = m.find(".td-time span.on");
                e.attr("data-id");
                var i = Math.round(23 * t / 360), s = Math.round(59 * t / 360);
                if (0 == e.index() ? (e.attr("data-id", c(i)), f.meridians && (12 <= i && i < 24 ? (m.find(".td-icon-pm").addClass("td-on"), m.find(".td-icon-am").removeClass("td-on")) : (m.find(".td-icon-am").addClass("td-on"), m.find(".td-icon-pm").removeClass("td-on")), 12 < i && (i -= 12), 0 == i && (i = 12)), e.text(c(i))) : e.attr("data-id", c(s)).text(c(s)), w = t, m.find(".td-deg").css("transform", "rotate(" + t + "deg)"), 0 == e.index()) {
                    var n = Math.round(360 * i / 12);
                    m.find(".td-lancette div:last").css("transform", "rotate(" + n + "deg)")
                } else m.find(".td-lancette div:first").css("transform", "rotate(" + t + "deg)");
                var o = m.find(".td-time span:first").attr("data-id"), r = m.find(".td-time span:last").attr("data-id");
                if (12 <= Math.round(o) && Math.round(o) < 24) {
                    i = Math.round(o) - 12;
                    var a = "pm", l = "PM"
                } else i = Math.round(o), a = "am", l = "AM";
                0 == i && (i = 12);
                var h = f.format.replace(/\b(H)\b/g, Math.round(o)).replace(/\b(h)\b/g, Math.round(i)).replace(/\b(m)\b/g, Math.round(r)).replace(/\b(HH)\b/g, c(Math.round(o))).replace(/\b(hh)\b/g, c(Math.round(i))).replace(/\b(mm)\b/g, c(Math.round(r))).replace(/\b(a)\b/g, a).replace(/\b(A)\b/g, l);
                d.val(h)
            }

            var v = -1, y = 0, w = 0;
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (p = !0), m.find(".td-time span").on("click", function (t) {
                var e = b(this);
                m.find(".td-time span").removeClass("on"), e.addClass("on");
                var i = parseInt(e.attr("data-id"));
                deg = 0 == e.index() ? Math.round(360 * i / 23) : Math.round(360 * i / 59), v = -1, y = deg, w = deg, _(deg)
            }), m.find(".td-deg").on("touchstart mousedown", function (t) {
                g(), t.preventDefault(), clearInterval(h), m.find(".td-deg").removeClass("td-n"), m.find(".td-select").removeClass("td-rubber"), u = !0;
                var e, i, s, n, o = m.offset(), r = o.top + m.height() / 2, a = o.left + m.width() / 2,
                    l = 180 / Math.PI;
                m.removeClass("td-rubber"), b(window).on("touchmove mousemove", function (t) {
                    1 == u && (move = p ? t.originalEvent.touches[0] : t, e = r - move.pageY, i = a - move.pageX, (s = Math.atan2(e, i) * l) < 0 && (s = 360 + s), -1 == v && (v = s), (n = Math.floor(s - v + y)) < 0 ? n = 360 + n : 360 < n && (n %= 360), _(n))
                })
            }), f.mousewheel && m.on("mousewheel", function (t) {
                t.preventDefault(), m.find(".td-deg").removeClass("td-n"), 0 < t.originalEvent.wheelDelta ? w <= 360 && (t.originalEvent.wheelDelta <= 120 ? w++ : 120 < t.originalEvent.wheelDelta && (w += 20), 360 < w && (w = 0)) : 0 <= w && (-120 <= t.originalEvent.wheelDelta ? w-- : t.originalEvent.wheelDelta < -120 && (w -= 20), w < 0 && (w = 360)), v = -1, _(y = w)
            }), b(document).on("touchend mouseup", function () {
                u && (u = !1, f.autoswitch && (m.find(".td-time span").toggleClass("on"), m.find(".td-time span.on").click()), m.find(".td-deg").addClass("td-n"), m.find(".td-select").addClass("td-rubber"))
            });
            !function () {
                var t, e, i = new Date, s = m.find(".td-time span:first"), n = m.find(".td-time span:last");
                if (d.val().length && !f.setCurrentTime) {
                    var o = /\d+/g, r = d.val().split(":");
                    r ? (t = r[0].match(o), e = r[1].match(o), -1 != d.val().indexOf("am") || -1 != d.val().indexOf("AM") || -1 != d.val().indexOf("pm") || -1 != d.val().indexOf("PM") ? -1 != d.val().indexOf("am") || -1 != d.val().indexOf("AM") ? 12 == t && (t = 0) : t < 13 && 24 == (t = parseInt(t) + 12) && (t = 0) : 24 == t && (t = 0)) : (t = parseInt(s.text()) ? c(s.text()) : c(i.getHours()), e = parseInt(n.text()) ? c(n.text()) : c(i.getMinutes()))
                } else t = parseInt(s.text()) ? c(s.text()) : c(i.getHours()), e = parseInt(n.text()) ? c(n.text()) : c(i.getMinutes());
                s.attr("data-id", t).text(t), n.attr("data-id", e).text(e), y = Math.round(360 * t / 23), m.find(".td-lancette div:first").css("transform", "rotate(" + Math.round(360 * e / 59) + "deg)"), _(y), w = y, v = -1
            }(), d.focus(function (t) {
                t.preventDefault(), d.blur()
            }), d.click(function (t) {
                clearInterval(e), i.removeClass("td-fadeout"), i.addClass("td-show").addClass("td-" + f.init_animation), m.css({
                    top: d.offset().top + (d.outerHeight() - 8),
                    left: d.offset().left + d.outerWidth() / 2 - m.outerWidth() / 2
                }), m.hasClass("td-init") && (h = setInterval(function () {
                    m.find(".td-select").addClass("td-alert"), setTimeout(function () {
                        m.find(".td-select").removeClass("td-alert")
                    }, 1e3)
                }, 2e3), m.removeClass("td-init"))
            }), s.click(function () {
                i.addClass("td-fadeout").removeClass("td-" + f.init_animation), e = setTimeout(function () {
                    i.removeClass("td-show")
                }, 300)
            }), b(window).on("resize", function () {
                g(), m.css({
                    top: d.offset().top + (d.outerHeight() - 8),
                    left: d.offset().left + d.outerWidth() / 2 - m.outerWidth() / 2
                })
            })
        })
    }
}(jQuery), function (l, i, n, a) {
    function h(t, e) {
        this.settings = null, this.options = l.extend({}, h.Defaults, e), this.$element = l(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, l.each(["onResize", "onThrottledResize"], l.proxy(function (t, e) {
            this._handlers[e] = l.proxy(this[e], this)
        }, this)), l.each(h.Plugins, l.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), l.each(h.Workers, l.proxy(function (t, e) {
            this._pipe.push({filter: e.filter, run: l.proxy(e.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    h.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: i,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, h.Width = {Default: "default", Inner: "inner", Outer: "outer"}, h.Type = {
        Event: "event",
        State: "state"
    }, h.Plugins = {}, h.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this.settings.margin || "", i = !this.settings.autoWidth, s = this.settings.rtl,
                n = {width: "auto", "margin-left": s ? e : "", "margin-right": s ? "" : e};
            i || this.$stage.children().css(n), t.css = n
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null,
                s = this._items.length, n = !this.settings.autoWidth, o = [];
            for (t.items = {
                merge: !1,
                width: e
            }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var t = [], e = this._items, i = this.settings, s = Math.max(2 * i.items, 4),
                n = 2 * Math.ceil(e.length / 2), o = i.loop && e.length ? i.rewind ? s : Math.max(s, n) : 0, r = "",
                a = "";
            for (o /= 2; 0 < o;) t.push(this.normalize(t.length / 2, !0)), r += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a, --o;
            this._clones = t, l(r).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t = this.settings.stagePadding, e = this._coordinates, i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this._coordinates.length, i = !this.settings.autoWidth, s = this.$stage.children();
            if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css); else i && (t.css.width = t.items.width, s.css(t.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1, o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o, a = r + this.width() * n, l = [];
            for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], h.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(l("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
    }, h.prototype.initializeItems = function () {
        var t = this.$element.find(".owl-item");
        if (t.length) return this._items = t.get().map(function (t) {
            return l(t)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, h.prototype.initialize = function () {
        var t, e, i;
        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, h.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, h.prototype.setup = function () {
        var e = this.viewport(), t = this.options.responsive, i = -1, s = null;
        t ? (l.each(t, function (t) {
            t <= e && i < t && (i = Number(t))
        }), "function" == typeof(s = l.extend({}, this.options, t[i])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : s = l.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = i, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, h.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, h.prototype.prepare = function (t) {
        var e = this.trigger("prepare", {content: t});
        return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {content: e.data}), e.data
    }, h.prototype.update = function () {
        for (var t = 0, e = this._pipe.length, i = l.proxy(function (t) {
            return this[t]
        }, this._invalidated), s = {}; t < e;) (this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s), t++;
        this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, h.prototype.width = function (t) {
        switch (t = t || h.Width.Default) {
            case h.Width.Inner:
            case h.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, h.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, h.prototype.onThrottledResize = function () {
        i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, h.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, h.prototype.registerEventHandlers = function () {
        l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
    }, h.prototype.onDragStart = function (t) {
        var e = null;
        3 !== t.which && (e = l.support.transform ? {
            x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
            y: e[16 === e.length ? 13 : 5]
        } : (e = this.$stage.position(), {
            x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
            y: e.top
        }), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(n).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(n).one("mousemove.owl.core touchmove.owl.core", l.proxy(function (t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            l(n).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, h.prototype.onDragMove = function (t) {
        var e = null, i = null, s = null, n = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
    }, h.prototype.onDragEnd = function (t) {
        var e = this.difference(this._drag.pointer, this.pointer(t)), i = this._drag.stage.current,
            s = 0 < e.x ^ this.settings.rtl ? "left" : "right";
        l(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, h.prototype.closest = function (i, s) {
        var n = -1, o = this.width(), r = this.coordinates();
        return this.settings.freeDrag || l.each(r, l.proxy(function (t, e) {
            return "left" === s && e - 30 < i && i < e + 30 ? n = t : "right" === s && e - o - 30 < i && i < e - o + 30 ? n = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] !== a ? r[t + 1] : e - o) && (n = "left" === s ? t + 1 : t), -1 === n
        }, this)), this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? n = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())), n
    }, h.prototype.animate = function (t) {
        var e = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : e ? this.$stage.animate({left: t + "px"}, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: t + "px"})
    }, h.prototype.is = function (t) {
        return this._states.current[t] && 0 < this._states.current[t]
    }, h.prototype.current = function (t) {
        if (t === a) return this._current;
        if (0 === this._items.length) return a;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== a && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, h.prototype.invalidate = function (t) {
        return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function (t, e) {
            return e
        })
    }, h.prototype.reset = function (t) {
        (t = this.normalize(t)) !== a && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, h.prototype.normalize = function (t, e) {
        var i = this._items.length, s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = a : (t < 0 || i + s <= t) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, h.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, h.prototype.maximum = function (t) {
        var e, i, s, n = this.settings, o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1; else if (n.autoWidth || n.merge) {
            if (e = this._items.length) for (i = this._items[--e].width(), s = this.$element.width(); e-- && !(s < (i += this._items[e].width() + this.settings.margin));) ;
            o = e + 1
        } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, h.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, h.prototype.items = function (t) {
        return t === a ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, h.prototype.mergers = function (t) {
        return t === a ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, h.prototype.clones = function (i) {
        function s(t) {
            return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
        }

        var e = this._clones.length / 2, n = e + this._items.length;
        return i === a ? l.map(this._clones, function (t, e) {
            return s(e)
        }) : l.map(this._clones, function (t, e) {
            return t === i ? s(e) : null
        })
    }, h.prototype.speed = function (t) {
        return t !== a && (this._speed = t), this._speed
    }, h.prototype.coordinates = function (t) {
        var e, i = 1, s = t - 1;
        return t === a ? l.map(this._coordinates, l.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, s = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[s] || 0)) / 2 * i) : e = this._coordinates[s] || 0, e = Math.ceil(e))
    }, h.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, h.prototype.to = function (t, e) {
        var i = this.current(), s = null, n = t - this.relative(i), o = (0 < n) - (n < 0), r = this._items.length,
            a = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= l && 0 < s - n && (i = s - n, t = s, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, h.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, h.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, h.prototype.onTransitionEnd = function (t) {
        if (t !== a && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, h.prototype.viewport = function () {
        var t;
        return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : n.documentElement && n.documentElement.clientWidth ? t = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
    }, h.prototype.replace = function (t) {
        this.$stage.empty(), this._items = [], t = t && (t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function () {
            return 1 === this.nodeType
        }).each(l.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, h.prototype.add = function (t, e) {
        var i = this.relative(this._current);
        e = e === a ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
            content: t,
            position: e
        }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, h.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== a && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, h.prototype.preloadAutoWidthImages = function (t) {
        t.each(l.proxy(function (t, e) {
            this.enter("pre-loading"), e = l(e), l(new Image).one("load", l.proxy(function (t) {
                e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
        }, this))
    }, h.prototype.destroy = function () {
        for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(n).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, h.prototype.op = function (t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case"<":
                return s ? i < t : t < i;
            case">":
                return s ? t < i : i < t;
            case">=":
                return s ? t <= i : i <= t;
            case"<=":
                return s ? i <= t : t <= i
        }
    }, h.prototype.on = function (t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, h.prototype.off = function (t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, h.prototype.trigger = function (t, e, i, s, n) {
        var o = {item: {count: this._items.length, index: this.current()}},
            r = l.camelCase(l.grep(["on", t, i], function (t) {
                return t
            }).join("-").toLowerCase()),
            a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({relatedTarget: this}, o, e));
        return this._supress[t] || (l.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(a)
        }), this.register({
            type: h.Type.Event,
            name: t
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)), a
    }, h.prototype.enter = function (t) {
        l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
            this._states.current[e] === a && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, h.prototype.leave = function (t) {
        l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, h.prototype.register = function (i) {
        if (i.type === h.Type.Event) {
            if (l.event.special[i.name] || (l.event.special[i.name] = {}), !l.event.special[i.name].owl) {
                var e = l.event.special[i.name]._default;
                l.event.special[i.name]._default = function (t) {
                    return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
                }, l.event.special[i.name].owl = !0
            }
        } else i.type === h.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function (t, e) {
            return l.inArray(t, this._states.tags[i.name]) === e
        }, this)))
    }, h.prototype.suppress = function (t) {
        l.each(t, l.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, h.prototype.release = function (t) {
        l.each(t, l.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, h.prototype.pointer = function (t) {
        var e = {x: null, y: null};
        return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
    }, h.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, h.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
    }, l.fn.owlCarousel = function (e) {
        var s = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var t = l(this), i = t.data("owl.carousel");
            i || (i = new h(this, "object" == typeof e && e), t.data("owl.carousel", i), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {
                i.register({
                    type: h.Type.Event,
                    name: e
                }), i.$element.on(e + ".owl.carousel.core", l.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                }, i))
            })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s)
        })
    }, l.fn.owlCarousel.Constructor = h
}(window.Zepto || window.jQuery, window, document), function (e, i) {
    var s = function (t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    s.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, s.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, s.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document), function (a, o) {
    var e = function (t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                    var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items,
                        s = e.center && -1 * i || 0,
                        n = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s,
                        o = this._core.clones().length, r = a.proxy(function (t, e) {
                            this.load(e)
                        }, this);
                    for (0 < e.lazyLoadEager && (i += e.lazyLoadEager, e.loop && (n -= e.lazyLoadEager, i++)); s++ < i;) this.load(o / 2 + this._core.relative(n)), o && a.each(this._core.clones(this._core.relative(n)), r), n++
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, e.prototype.load = function (t) {
        var e = this._core.$stage.children().eq(t), i = e && e.find(".owl-lazy");
        !i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function (t, e) {
            var i, s = a(e),
                n = 1 < o.devicePixelRatio && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
            this._core.trigger("load", {
                element: s,
                url: n
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", a.proxy(function () {
                s.css("opacity", 1), this._core.trigger("loaded", {element: s, url: n}, "lazy")
            }, this)).attr("src", n) : s.is("source") ? s.one("load.owl.lazy", a.proxy(function () {
                this._core.trigger("loaded", {element: s, url: n}, "lazy")
            }, this)).attr("srcset", n) : ((i = new Image).onload = a.proxy(function () {
                s.css({"background-image": 'url("' + n + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: s,
                    url: n
                }, "lazy")
            }, this), i.src = n)
        }, this)), this._loaded.push(e.get(0)))
    }, e.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document), function (r, i) {
    var s = function (t) {
        this._core = t, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": r.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": r.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this), "loaded.owl.lazy": r.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = r.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var e = this;
        r(i).on("load", function () {
            e._core.settings.autoHeight && e.update()
        }), r(i).resize(function () {
            e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId), e._intervalId = setTimeout(function () {
                e.update()
            }, 250))
        })
    };
    s.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, s.prototype.update = function () {
        var t = this._core._current, e = t + this._core.settings.items, i = this._core.settings.lazyLoad,
            s = this._core.$stage.children().toArray().slice(t, e), n = [], o = 0;
        r.each(s, function (t, e) {
            n.push(r(e).height())
        }), (o = Math.max.apply(null, n)) <= 1 && i && this._previousHeight && (o = this._previousHeight), this._previousHeight = o, this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, r.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document), function (c, e) {
    var i = function (t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this), "refreshed.owl.carousel": c.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": c.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": c.proxy(function (t) {
                if (t.namespace) {
                    var e = c(t.content).find(".owl-video");
                    e.length && (e.css("display", "none"), this.fetch(e, c(t.content)))
                }
            }, this)
        }, this._core.options = c.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function (t) {
            this.play(t)
        }, this))
    };
    i.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, i.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight, r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (-1 < (s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube"; else if (-1 < s[3].indexOf("vimeo")) i = "vimeo"; else {
            if (!(-1 < s[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6], this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, i.prototype.thumbnail = function (e, t) {
        function i(t) {
            s = h.lazyLoad ? c("<div/>", {class: "owl-video-tn " + l, srcType: t}) : c("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + t + ")"
            }), e.after(s), e.after('<div class="owl-video-play-icon"></div>')
        }

        var s, n, o = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "",
            r = e.find("img"), a = "src", l = "", h = this._core.settings;
        if (e.wrap(c("<div/>", {
            class: "owl-video-wrapper",
            style: o
        })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), r.length) return i(r.attr(a)), r.remove(), !1;
        "youtube" === t.type ? (n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", i(n)) : "vimeo" === t.type ? c.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                n = t[0].thumbnail_large, i(n)
            }
        }) : "vzaar" === t.type && c.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                n = t.framegrab_url, i(n)
            }
        })
    }, i.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, i.prototype.play = function (t) {
        var e, i = c(t.target).closest("." + this._core.settings.itemClass), s = this._videos[i.attr("data-video")],
            n = s.width || "100%", o = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (e = c('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o), e.attr("width", n), "youtube" === s.type ? e.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? e.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && e.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), c(e).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
    }, i.prototype.isInFullScreen = function () {
        var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
        return t && c(t).parent().hasClass("owl-video-frame")
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, c.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, (window, document)), function (r) {
    var e = function (t) {
        this.core = t, this.core.options = r.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": r.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this), "translate.owl.carousel": r.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        if (1 === this.core.settings.items && r.support.animation && r.support.transition) {
            this.core.speed(0);
            var t, e = r.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next), n = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(r.support.animation.end, e).css({left: t + "px"}).addClass("animated owl-animated-out").addClass(o)), n && s.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(n))
        }
    }, e.prototype.clear = function (t) {
        r(t.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, r.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, (window, document)), function (s, n, e) {
    var i = function (t) {
        this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": s.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this), "initialized.owl.carousel": s.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": s.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this), "stop.owl.autoplay": s.proxy(function (t) {
                t.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": s.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": s.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": s.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": s.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = s.extend({}, i.Defaults, this._core.options)
    };
    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, i.prototype._next = function (t) {
        this._call = n.setTimeout(s.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
    }, i.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, i.prototype.play = function (t, e) {
        var i;
        this._core.is("rotating") || this._core.enter("rotating"), t = t || this._core.settings.autoplayTimeout, i = Math.min(this._time % (this._timeout || t), t), this._paused ? (this._time = this.read(), this._paused = !1) : n.clearTimeout(this._call), this._time += this.read() % t - i, this._timeout = t, this._call = n.setTimeout(s.proxy(this._next, this, e), t - i)
    }, i.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, n.clearTimeout(this._call), this._core.leave("rotating"))
    }, i.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, n.clearTimeout(this._call))
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, s.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document), function (o) {
    "use strict";
    var e = function (t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "changed.owl.carousel": o.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this), "initialized.owl.carousel": o.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = o.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function () {
        var t, i = this._core.settings;
        for (t in this._controls.$relative = (i.navContainer ? o(i.navContainer) : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = o("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function (t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = o("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function (t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [o('<button role="button">').addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? o(i.dotsContainer) : o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", o.proxy(function (t) {
            var e = o(t.target).parent().is(this._controls.$absolute) ? o(t.target).index() : o(t.target).parent().index();
            t.preventDefault(), this.to(e, i.dotsSpeed)
        }, this)), this._overrides) this._core[t] = o.proxy(this[t], this)
    }, e.prototype.destroy = function () {
        var t, e, i, s, n;
        for (t in n = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function () {
        var t, e, i = this._core.clones().length / 2, s = i + this._core.items().length, n = this._core.maximum(!0),
            o = this._core.settings, r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy) for (this._pages = [], t = i, e = 0; t < s; t++) {
            if (r <= e || 0 === e) {
                if (this._pages.push({start: Math.min(n, t - i), end: t - i + r - 1}), Math.min(n, t - i) === n) break;
                e = 0, 0
            }
            e += this._core.mergers(this._core.relative(t))
        }
    }, e.prototype.draw = function () {
        var t, e = this._core.settings, i = this._core.items().length <= e.items,
            s = this._core.relative(this._core.current()), n = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !n && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !n && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 != t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(1 + t).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function (t) {
        var e = this._core.settings;
        t.page = {
            index: o.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
        }
    }, e.prototype.current = function () {
        var i = this._core.relative(this._core.current());
        return o.grep(this._pages, o.proxy(function (t, e) {
            return t.start <= i && t.end >= i
        }, this)).pop()
    }, e.prototype.getPosition = function (t) {
        var e, i, s = this._core.settings;
        return "page" == s.slideBy ? (e = o.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += s.slideBy : e -= s.slideBy), e
    }, e.prototype.next = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, e.prototype.prev = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, e.prototype.to = function (t, e, i) {
        var s;
        !i && this._pages.length ? (s = this._pages.length, o.proxy(this._overrides.to, this._core)(this._pages[(t % s + s) % s].start, e)) : o.proxy(this._overrides.to, this._core)(t, e)
    }, o.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, (window, document)), function (s, n) {
    "use strict";
    var e = function (t) {
        this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": s.proxy(function (t) {
                t.namespace && "URLHash" === this._core.settings.startPosition && s(n).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": s.proxy(function (t) {
                if (t.namespace) {
                    var e = s(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!e) return;
                    this._hashes[e] = t.content
                }
            }, this), "changed.owl.carousel": s.proxy(function (t) {
                if (t.namespace && "position" === t.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())),
                        e = s.map(this._hashes, function (t, e) {
                            return t === i ? e : null
                        }).join();
                    if (!e || n.location.hash.slice(1) === e) return;
                    n.location.hash = e
                }
            }, this)
        }, this._core.options = s.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), s(n).on("hashchange.owl.navigation", s.proxy(function (t) {
            var e = n.location.hash.substring(1), i = this._core.$stage.children(),
                s = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }, this))
    };
    e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
        var t, e;
        for (t in s(n).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, s.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document), function (n, o) {
    var r = n("<support>").get(0).style, a = "Webkit Moz O ms".split(" "), t = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, e = function () {
        return !!l("transform")
    }, i = function () {
        return !!l("perspective")
    }, s = function () {
        return !!l("animation")
    };

    function l(t, i) {
        var s = !1, e = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + a.join(e + " ") + e).split(" "), function (t, e) {
            if (r[e] !== o) return s = !i || e, !1
        }), s
    }

    function h(t) {
        return l(t, !0)
    }

    !function () {
        return !!l("transition")
    }() || (n.support.transition = new String(h("transition")), n.support.transition.end = t.transition.end[n.support.transition]), s() && (n.support.animation = new String(h("animation")), n.support.animation.end = t.animation.end[n.support.animation]), e() && (n.support.transform = new String(h("transform")), n.support.transform3d = i())
}(window.Zepto || window.jQuery, (window, void document)), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function (o, s) {
    var i = "plugin_hideShowPassword", n = ["show", "innerToggle"], e = {
        show: "infer",
        innerToggle: !1,
        enable: function () {
            var t = document.body, e = document.createElement("input"), i = !0;
            e = (t = t || document.createElement("body")).appendChild(e);
            try {
                e.setAttribute("type", "text")
            } catch (t) {
                i = !1
            }
            return t.removeChild(e), i
        }(),
        triggerOnToggle: !1,
        className: "hideShowPassword-field",
        initEvent: "hideShowPasswordInit",
        changeEvent: "passwordVisibilityChange",
        props: {autocapitalize: "off", autocomplete: "off", autocorrect: "off", spellcheck: "false"},
        toggle: {
            element: '<button type="button">',
            className: "hideShowPassword-toggle",
            touchSupport: "undefined" != typeof Modernizr && Modernizr.touchevents,
            attachToEvent: "click.hideShowPassword",
            attachToTouchEvent: "touchstart.hideShowPassword mousedown.hideShowPassword",
            attachToKeyEvent: "keyup",
            attachToKeyCodes: !0,
            styles: {position: "absolute"},
            touchStyles: {pointerEvents: "none"},
            position: "infer",
            verticalAlign: "middle",
            offset: 0,
            attr: {role: "button", "aria-label": "Show Password", title: "Show Password", tabIndex: 0}
        },
        wrapper: {
            element: "<div>",
            className: "hideShowPassword-wrapper",
            enforceWidth: !1,
            styles: {position: "relative"},
            inheritStyles: ["display", "verticalAlign", "marginTop", "marginRight", "marginBottom", "marginLeft"],
            innerElementStyles: {marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0}
        },
        states: {
            shown: {
                className: "hideShowPassword-shown",
                changeEvent: "passwordShown",
                props: {type: "text"},
                toggle: {
                    className: "hideShowPassword-toggle-hide",
                    content: "Hide",
                    attr: {"aria-pressed": "true", title: "Hide Password"}
                }
            },
            hidden: {
                className: "hideShowPassword-hidden",
                changeEvent: "passwordHidden",
                props: {type: "password"},
                toggle: {
                    className: "hideShowPassword-toggle-show",
                    content: "Show",
                    attr: {"aria-pressed": "false", title: "Show Password"}
                }
            }
        }
    };

    function r(t, e) {
        this.element = o(t), this.wrapperElement = o(), this.toggleElement = o(), this.init(e)
    }

    r.prototype = {
        init: function (t) {
            this.update(t, e) && (this.element.addClass(this.options.className), this.options.innerToggle && (this.wrapElement(this.options.wrapper), this.initToggle(this.options.toggle), "string" == typeof this.options.innerToggle && (this.toggleElement.hide(), this.element.one(this.options.innerToggle, o.proxy(function () {
                this.toggleElement.show()
            }, this)))), this.element.trigger(this.options.initEvent, [this]))
        }, update: function (t, e) {
            return this.options = this.prepareOptions(t, e), this.updateElement() && this.element.trigger(this.options.changeEvent, [this]).trigger(this.state().changeEvent, [this]), this.options.enable
        }, toggle: function (t) {
            return t = t || "toggle", this.update({show: t})
        }, prepareOptions: function (t, e) {
            var i, s = t || {}, n = [];
            if (e = e || this.options, t = o.extend(!0, {}, e, t), s.hasOwnProperty("wrapper") && s.wrapper.hasOwnProperty("inheritStyles") && (t.wrapper.inheritStyles = s.wrapper.inheritStyles), t.enable && ("toggle" === t.show ? t.show = this.isType("hidden", t.states) : "infer" === t.show && (t.show = this.isType("shown", t.states)), "infer" === t.toggle.position && (t.toggle.position = "rtl" === this.element.css("text-direction") ? "left" : "right"), !o.isArray(t.toggle.attachToKeyCodes))) {
                if (!0 === t.toggle.attachToKeyCodes) switch ((i = o(t.toggle.element)).prop("tagName").toLowerCase()) {
                    case"button":
                    case"input":
                        break;
                    case"a":
                        if (i.filter("[href]").length) {
                            n.push(32);
                            break
                        }
                    default:
                        n.push(32, 13)
                }
                t.toggle.attachToKeyCodes = n
            }
            return t
        }, updateElement: function () {
            return !(!this.options.enable || this.isType()) && (this.element.prop(o.extend({}, this.options.props, this.state().props)).addClass(this.state().className).removeClass(this.otherState().className), this.options.triggerOnToggle && this.element.trigger(this.options.triggerOnToggle, [this]), this.updateToggle(), !0)
        }, isType: function (t, e) {
            return (e = e || this.options.states)[t = t || this.state(s, s, e).props.type] && (t = e[t].props.type), this.element.prop("type") === t
        }, state: function (t, e, i) {
            return i = i || this.options.states, t === s && (t = this.options.show), "boolean" == typeof t && (t = t ? "shown" : "hidden"), e && (t = "shown" === t ? "hidden" : "shown"), i[t]
        }, otherState: function (t) {
            return this.state(t, !0)
        }, wrapElement: function (i) {
            var t, e = i.enforceWidth;
            return this.wrapperElement.length || (t = this.element.outerWidth(), o.each(i.inheritStyles, o.proxy(function (t, e) {
                i.styles[e] = this.element.css(e)
            }, this)), this.element.css(i.innerElementStyles).wrap(o(i.element).addClass(i.className).css(i.styles)), this.wrapperElement = this.element.parent(), !0 === e && (e = this.wrapperElement.outerWidth() !== t && t), !1 !== e && this.wrapperElement.css("width", e)), this.wrapperElement
        }, initToggle: function (t) {
            return this.toggleElement.length || (this.toggleElement = o(t.element).attr(t.attr).addClass(t.className).css(t.styles).appendTo(this.wrapperElement), this.updateToggle(), this.positionToggle(t.position, t.verticalAlign, t.offset), t.touchSupport ? (this.toggleElement.css(t.touchStyles), this.element.on(t.attachToTouchEvent, o.proxy(this.toggleTouchEvent, this))) : this.toggleElement.on(t.attachToEvent, o.proxy(this.toggleEvent, this)), t.attachToKeyCodes.length && this.toggleElement.on(t.attachToKeyEvent, o.proxy(this.toggleKeyEvent, this))), this.toggleElement
        }, positionToggle: function (t, e, i) {
            var s = {};
            switch (s[t] = i, e) {
                case"top":
                case"bottom":
                    s[e] = i;
                    break;
                case"middle":
                    s.top = "50%", s.marginTop = this.toggleElement.outerHeight() / -2
            }
            return this.toggleElement.css(s)
        }, updateToggle: function (t, e) {
            var i, s;
            return this.toggleElement.length && (i = "padding-" + this.options.toggle.position, t = t || this.state().toggle, e = e || this.otherState().toggle, this.toggleElement.attr(t.attr).addClass(t.className).removeClass(e.className).html(t.content), s = this.toggleElement.outerWidth() + 2 * this.options.toggle.offset, this.element.css(i) !== s && this.element.css(i, s)), this.toggleElement
        }, toggleEvent: function (t) {
            t.preventDefault(), this.toggle()
        }, toggleKeyEvent: function (i) {
            o.each(this.options.toggle.attachToKeyCodes, o.proxy(function (t, e) {
                if (i.which === e) return this.toggleEvent(i), !1
            }, this))
        }, toggleTouchEvent: function (t) {
            var e, i, s, n = this.toggleElement.offset().left;
            n && (e = t.pageX || t.originalEvent.pageX, s = "left" === this.options.toggle.position ? (i = e, n += this.toggleElement.outerWidth()) : (i = n, e), i <= s && this.toggleEvent(t))
        }
    }, o.fn.hideShowPassword = function () {
        var s = {};
        return o.each(arguments, function (t, e) {
            var i = {};
            if ("object" == typeof e) i = e; else {
                if (!n[t]) return !1;
                i[n[t]] = e
            }
            o.extend(!0, s, i)
        }), this.each(function () {
            var t = o(this), e = t.data(i);
            e ? e.update(s) : t.data(i, new r(this, s))
        })
    }, o.each({show: !0, hide: !1, toggle: "toggle"}, function (t, i) {
        o.fn[t + "Password"] = function (t, e) {
            return this.hideShowPassword(i, t, e)
        }
    })
}), function (T, E) {
    var f = T(window);

    function D() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function a() {
        var t = new Date;
        return D(t.getFullYear(), t.getMonth(), t.getDate())
    }

    function t(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    function v(t, e) {
        this.dates = new i, this.viewDate = a(), this.focusDate = null, this._process_options(e), this.element = T(t), this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.is(".date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = T(M.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (t, e) {
            return parseInt(e) + 1
        }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
    }

    var e, i = (e = {
        get: function (t) {
            return this.slice(t)[0]
        }, contains: function (t) {
            for (var e = t && t.valueOf(), i = 0, s = this.length; i < s; i++) if (this[i].valueOf() === e) return i;
            return -1
        }, remove: function (t) {
            this.splice(t, 1)
        }, replace: function (t) {
            t && (T.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
        }, clear: function () {
            this.length = 0
        }, copy: function () {
            var t = new i;
            return t.replace(this), t
        }
    }, function () {
        var t = [];
        return t.push.apply(t, arguments), T.extend(t, e), t
    });
    v.prototype = {
        constructor: v, _process_options: function (t) {
            this._o = T.extend({}, this._o, t);
            var e = this.o = T.extend({}, this._o), i = e.language;
            switch (S[i] || (i = i.split("-")[0], S[i] || (i = d.language)), e.language = i, e.startView) {
                case 2:
                case"decade":
                    e.startView = 2;
                    break;
                case 1:
                case"year":
                    e.startView = 1;
                    break;
                default:
                    e.startView = 0
            }
            switch (e.minViewMode) {
                case 1:
                case"months":
                    e.minViewMode = 1;
                    break;
                case 2:
                case"years":
                    e.minViewMode = 2;
                    break;
                default:
                    e.minViewMode = 0
            }
            e.startView = Math.max(e.startView, e.minViewMode), !0 !== e.multidate && (e.multidate = Number(e.multidate) || !1, !1 !== e.multidate ? e.multidate = Math.max(0, e.multidate) : e.multidate = 1), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
            var s = M.parseFormat(e.format);
            e.startDate !== -1 / 0 && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = M.parseDate(e.startDate, s, e.language) : e.startDate = -1 / 0), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = M.parseDate(e.endDate, s, e.language) : e.endDate = 1 / 0), e.daysOfWeekDisabled = e.daysOfWeekDisabled || [], T.isArray(e.daysOfWeekDisabled) || (e.daysOfWeekDisabled = e.daysOfWeekDisabled.split(/[,\s]*/)), e.daysOfWeekDisabled = T.map(e.daysOfWeekDisabled, function (t) {
                return parseInt(t, 10)
            });
            var n = String(e.orientation).toLowerCase().split(/\s+/g), o = e.orientation.toLowerCase();
            if (n = T.grep(n, function (t) {
                return /^auto|left|right|top|bottom$/.test(t)
            }), e.orientation = {x: "auto", y: "auto"}, o && "auto" !== o) if (1 === n.length) switch (n[0]) {
                case"top":
                case"bottom":
                    e.orientation.y = n[0];
                    break;
                case"left":
                case"right":
                    e.orientation.x = n[0]
            } else o = T.grep(n, function (t) {
                return /^left|right$/.test(t)
            }), e.orientation.x = o[0] || "auto", o = T.grep(n, function (t) {
                return /^top|bottom$/.test(t)
            }), e.orientation.y = o[0] || "auto"; else ;
        }, _events: [], _secondaryEvents: [], _applyEvents: function (t) {
            for (var e, i, s, n = 0; n < t.length; n++) e = t[n][0], 2 === t[n].length ? (i = E, s = t[n][1]) : 3 === t[n].length && (i = t[n][1], s = t[n][2]), e.on(s, i)
        }, _unapplyEvents: function (t) {
            for (var e, i, s, n = 0; n < t.length; n++) e = t[n][0], 2 === t[n].length ? (s = E, i = t[n][1]) : 3 === t[n].length && (s = t[n][1], i = t[n][2]), e.off(i, s)
        }, _buildEvents: function () {
            this.isInput ? this._events = [[this.element, {
                focus: T.proxy(this.show, this),
                keyup: T.proxy(function (t) {
                    -1 === T.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this),
                keydown: T.proxy(this.keydown, this)
            }]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), {
                focus: T.proxy(this.show, this),
                keyup: T.proxy(function (t) {
                    -1 === T.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this),
                keydown: T.proxy(this.keydown, this)
            }], [this.component, {click: T.proxy(this.show, this)}]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {click: T.proxy(this.show, this)}]], this._events.push([this.element, "*", {
                blur: T.proxy(function (t) {
                    this._focused_from = t.target
                }, this)
            }], [this.element, {
                blur: T.proxy(function (t) {
                    this._focused_from = t.target
                }, this)
            }]), this._secondaryEvents = [[this.picker, {click: T.proxy(this.click, this)}], [T(window), {resize: T.proxy(this.place, this)}], [T(document), {
                "mousedown touchstart": T.proxy(function (t) {
                    this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                }, this)
            }]]
        }, _attachEvents: function () {
            this._detachEvents(), this._applyEvents(this._events)
        }, _detachEvents: function () {
            this._unapplyEvents(this._events)
        }, _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        }, _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        }, _trigger: function (t, e) {
            var i = e || this.dates.get(-1), s = this._utc_to_local(i);
            this.element.trigger({
                type: t,
                date: s,
                dates: T.map(this.dates, this._utc_to_local),
                format: T.proxy(function (t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                    var i = this.dates.get(t);
                    return M.formatDate(i, e, this.o.language)
                }, this)
            })
        }, show: function () {
            this.isInline || this.picker.appendTo("body"), this.picker.show(), this.place(), this._attachSecondaryEvents(), this._trigger("show")
        }, hide: function () {
            this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
        }, remove: function () {
            this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
        }, _utc_to_local: function (t) {
            return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        }, _local_to_utc: function (t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        }, _zero_time: function (t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        }, _zero_utc_time: function (t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
        }, getDates: function () {
            return T.map(this.dates, this._utc_to_local)
        }, getUTCDates: function () {
            return T.map(this.dates, function (t) {
                return new Date(t)
            })
        }, getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        }, getUTCDate: function () {
            return new Date(this.dates.get(-1))
        }, setDates: function () {
            var t = T.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, t), this._trigger("changeDate"), this.setValue()
        }, setUTCDates: function () {
            var t = T.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, T.map(t, this._utc_to_local)), this._trigger("changeDate"), this.setValue()
        }, setDate: t("setDates"), setUTCDate: t("setUTCDates"), setValue: function () {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change()
        }, getFormattedDate: function (e) {
            e === E && (e = this.o.format);
            var i = this.o.language;
            return T.map(this.dates, function (t) {
                return M.formatDate(t, e, i)
            }).join(this.o.multidateSeparator)
        }, setStartDate: function (t) {
            this._process_options({startDate: t}), this.update(), this.updateNavArrows()
        }, setEndDate: function (t) {
            this._process_options({endDate: t}), this.update(), this.updateNavArrows()
        }, setDaysOfWeekDisabled: function (t) {
            this._process_options({daysOfWeekDisabled: t}), this.update(), this.updateNavArrows()
        }, place: function () {
            if (!this.isInline) {
                var t = this.picker.outerWidth(), e = this.picker.outerHeight(), i = f.width(), s = f.height(),
                    n = f.scrollTop(), o = parseInt(this.element.parents().filter(function () {
                        return "auto" !== T(this).css("z-index")
                    }).first().css("z-index")) + 9999,
                    r = this.component ? this.component.parent().offset() : this.element.offset(),
                    a = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    l = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), h = r.left,
                    c = r.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (h -= t - l)) : (this.picker.addClass("datepicker-orient-left"), r.left < 0 ? h -= r.left - 10 : r.left + t > i && (h = i - t - 10));
                var d, u, p = this.o.orientation.y;
                "auto" === p && (d = -n + r.top - e, u = n + s - (r.top + a + e), p = Math.max(d, u) === u ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + p), "top" === p ? c += a : c -= e + parseInt(this.picker.css("padding-top")), this.picker.css({
                    top: c,
                    left: h,
                    zIndex: o
                })
            }
        }, _allow_update: !0, update: function () {
            if (this._allow_update) {
                var t = this.dates.copy(), i = [], e = !1;
                arguments.length ? (T.each(arguments, T.proxy(function (t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
                }, this)), e = !0) : (i = (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val()) && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = T.map(i, T.proxy(function (t) {
                    return M.parseDate(t, this.o.format, this.o.language)
                }, this)), i = T.grep(i, T.proxy(function (t) {
                    return t < this.o.startDate || t > this.o.endDate || !t
                }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), e ? this.setValue() : i.length && String(t) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && t.length && this._trigger("clearDate"), this.fill()
            }
        }, fillDow: function () {
            var t = this.o.weekStart, e = "<tr>";
            if (this.o.calendarWeeks) {
                var i = '<th class="cw">&nbsp;</th>';
                e += i, this.picker.find(".datepicker-days thead tr:first-child").prepend(i)
            }
            for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + S[this.o.language].daysMin[t++ % 7] + "</th>";
            e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
        }, fillMonths: function () {
            for (var t = "", e = 0; e < 12;) t += '<span class="month">' + S[this.o.language].monthsShort[e++] + "</span>";
            this.picker.find(".datepicker-months td").html(t)
        }, setRange: function (t) {
            t && t.length ? this.range = T.map(t, function (t) {
                return t.valueOf()
            }) : delete this.range, this.fill()
        }, getClassNames: function (t) {
            var e = [], i = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), n = new Date;
            return t.getUTCFullYear() < i || t.getUTCFullYear() === i && t.getUTCMonth() < s ? e.push("old") : (t.getUTCFullYear() > i || t.getUTCFullYear() === i && t.getUTCMonth() > s) && e.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && e.push("focused"), this.o.todayHighlight && t.getUTCFullYear() === n.getFullYear() && t.getUTCMonth() === n.getMonth() && t.getUTCDate() === n.getDate() && e.push("today"), -1 !== this.dates.contains(t) && e.push("active"), (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || -1 !== T.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)) && e.push("disabled"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && e.push("range"), -1 !== T.inArray(t.valueOf(), this.range) && e.push("selected")), e
        }, fill: function () {
            var t, e = new Date(this.viewDate), i = e.getUTCFullYear(), s = e.getUTCMonth(),
                n = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                r = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                a = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                l = S[this.o.language].today || S.en.today || "", h = S[this.o.language].clear || S.en.clear || "";
            this.picker.find(".datepicker-days thead th.datepicker-switch").text(S[this.o.language].months[s] + " " + i), this.picker.find("tfoot th.today").text(l).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot th.clear").text(h).toggle(!1 !== this.o.clearBtn), this.updateNavArrows(), this.fillMonths();
            var c = D(i, s - 1, 28), d = M.getDaysInMonth(c.getUTCFullYear(), c.getUTCMonth());
            c.setUTCDate(d), c.setUTCDate(d - (c.getUTCDay() - this.o.weekStart + 7) % 7);
            var u = new Date(c);
            u.setUTCDate(u.getUTCDate() + 42), u = u.valueOf();
            for (var p, f = []; c.valueOf() < u;) {
                if (c.getUTCDay() === this.o.weekStart && (f.push("<tr>"), this.o.calendarWeeks)) {
                    var m = new Date(+c + (this.o.weekStart - c.getUTCDay() - 7) % 7 * 864e5),
                        g = new Date(Number(m) + (11 - m.getUTCDay()) % 7 * 864e5),
                        _ = new Date(Number(_ = D(g.getUTCFullYear(), 0, 1)) + (11 - _.getUTCDay()) % 7 * 864e5),
                        v = (g - _) / 864e5 / 7 + 1;
                    f.push('<td class="cw">' + v + "</td>")
                }
                if ((p = this.getClassNames(c)).push("day"), this.o.beforeShowDay !== T.noop) {
                    var y = this.o.beforeShowDay(this._utc_to_local(c));
                    y === E ? y = {} : "boolean" == typeof y ? y = {enabled: y} : "string" == typeof y && (y = {classes: y}), !1 === y.enabled && p.push("disabled"), y.classes && (p = p.concat(y.classes.split(/\s+/))), y.tooltip && (t = y.tooltip)
                }
                p = T.unique(p), f.push('<td class="' + p.join(" ") + '"' + (t ? ' title="' + t + '"' : "") + ">" + c.getUTCDate() + "</td>"), c.getUTCDay() === this.o.weekEnd && f.push("</tr>"), c.setUTCDate(c.getUTCDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").empty().append(f.join(""));
            var w = this.picker.find(".datepicker-months").find("th:eq(1)").text(i).end().find("span").removeClass("active");
            T.each(this.dates, function (t, e) {
                e.getUTCFullYear() === i && w.eq(e.getUTCMonth()).addClass("active")
            }), (i < n || r < i) && w.addClass("disabled"), i === n && w.slice(0, o).addClass("disabled"), i === r && w.slice(a + 1).addClass("disabled"), f = "", i = 10 * parseInt(i / 10, 10);
            var b = this.picker.find(".datepicker-years").find("th:eq(1)").text(i + "-" + (i + 9)).end().find("td");
            --i;
            for (var k, x = T.map(this.dates, function (t) {
                return t.getUTCFullYear()
            }), C = -1; C < 11; C++) k = ["year"], -1 === C ? k.push("old") : 10 === C && k.push("new"), -1 !== T.inArray(i, x) && k.push("active"), (i < n || r < i) && k.push("disabled"), f += '<span class="' + k.join(" ") + '">' + i + "</span>", i += 1;
            b.html(f)
        }, updateNavArrows: function () {
            if (this._allow_update) {
                var t = new Date(this.viewDate), e = t.getUTCFullYear(), i = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"});
                        break;
                    case 1:
                    case 2:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"})
                }
            }
        }, click: function (t) {
            t.preventDefault();
            var e, i, s, n = T(t.target).closest("span, td, th");
            if (1 === n.length) switch (n[0].nodeName.toLowerCase()) {
                case"th":
                    switch (n[0].className) {
                        case"datepicker-switch":
                            this.showMode(1);
                            break;
                        case"prev":
                        case"next":
                            var o = M.modes[this.viewMode].navStep * ("prev" === n[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, o), this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, o), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill();
                            break;
                        case"today":
                            var r = new Date;
                            r = D(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0), this.showMode(-2);
                            var a = "linked" === this.o.todayBtn ? null : "view";
                            this._setDate(r, a);
                            break;
                        case"clear":
                            var l;
                            this.isInput ? l = this.element : this.component && (l = this.element.find("input")), l && l.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
                    }
                    break;
                case"span":
                    n.is(".disabled") || (this.viewDate.setUTCDate(1), n.is(".month") ? (s = 1, i = n.parent().find("span").index(n), e = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(i), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(D(e, i, s))) : (s = 1, i = 0, e = parseInt(n.text(), 10) || 0, this.viewDate.setUTCFullYear(e), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(D(e, i, s))), this.showMode(-1), this.fill());
                    break;
                case"td":
                    n.is(".day") && !n.is(".disabled") && (s = parseInt(n.text(), 10) || 1, e = this.viewDate.getUTCFullYear(), i = this.viewDate.getUTCMonth(), n.is(".old") ? 0 === i ? (i = 11, --e) : --i : n.is(".new") && (11 === i ? (i = 0, e += 1) : i += 1), this._setDate(D(e, i, s)))
            }
            this.picker.is(":visible") && this._focused_from && T(this._focused_from).focus(), delete this._focused_from
        }, _toggle_multidate: function (t) {
            var e = this.dates.contains(t);
            if (t ? -1 !== e ? this.dates.remove(e) : this.dates.push(t) : this.dates.clear(), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        }, _setDate: function (t, e) {
            var i;
            e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate"), this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), !this.o.autoclose || e && "date" !== e || this.hide()
        }, moveMonth: function (t, e) {
            if (!t) return E;
            if (!e) return t;
            var i, s, n = new Date(t.valueOf()), o = n.getUTCDate(), r = n.getUTCMonth(), a = Math.abs(e);
            if (e = 0 < e ? 1 : -1, 1 === a) s = -1 === e ? function () {
                return n.getUTCMonth() === r
            } : function () {
                return n.getUTCMonth() !== i
            }, i = r + e, n.setUTCMonth(i), (i < 0 || 11 < i) && (i = (i + 12) % 12); else {
                for (var l = 0; l < a; l++) n = this.moveMonth(n, e);
                i = n.getUTCMonth(), n.setUTCDate(o), s = function () {
                    return i !== n.getUTCMonth()
                }
            }
            for (; s();) n.setUTCDate(--o), n.setUTCMonth(i);
            return n
        }, moveYear: function (t, e) {
            return this.moveMonth(t, 12 * e)
        }, dateWithinRange: function (t) {
            return t >= this.o.startDate && t <= this.o.endDate
        }, keydown: function (t) {
            if (this.picker.is(":not(:visible)")) 27 === t.keyCode && this.show(); else {
                var e, i, s, n, o = !1, r = this.focusDate || this.viewDate;
                switch (t.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.o.keyboardNavigation) break;
                        e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e), s = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e), s = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : ((i = new Date(this.dates.get(-1) || a())).setUTCDate(i.getUTCDate() + e), (s = new Date(r)).setUTCDate(r.getUTCDate() + e)), this.dateWithinRange(i) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
                        break;
                    case 38:
                    case 40:
                        if (!this.o.keyboardNavigation) break;
                        e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e), s = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e), s = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : ((i = new Date(this.dates.get(-1) || a())).setUTCDate(i.getUTCDate() + 7 * e), (s = new Date(r)).setUTCDate(r.getUTCDate() + 7 * e)), this.dateWithinRange(i) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
                        break;
                    case 32:
                        break;
                    case 13:
                        r = this.focusDate || this.dates.get(-1) || this.viewDate, this._toggle_multidate(r), o = !0, this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                }
                if (o) this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change()
            }
        }, showMode: function (t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + M.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
        }
    };

    function c(t, e) {
        this.element = T(t), this.inputs = T.map(e.inputs, function (t) {
            return t.jquery ? t[0] : t
        }), delete e.inputs, T(this.inputs).datepicker(e).bind("changeDate", T.proxy(this.dateUpdated, this)), this.pickers = T.map(this.inputs, function (t) {
            return T(t).data("datepicker")
        }), this.updateDates()
    }

    c.prototype = {
        updateDates: function () {
            this.dates = T.map(this.pickers, function (t) {
                return t.getUTCDate()
            }), this.updateRanges()
        }, updateRanges: function () {
            var i = T.map(this.dates, function (t) {
                return t.valueOf()
            });
            T.each(this.pickers, function (t, e) {
                e.setRange(i)
            })
        }, dateUpdated: function (t) {
            if (!this.updating) {
                this.updating = !0;
                var i = T(t.target).data("datepicker").getUTCDate(), e = T.inArray(t.target, this.inputs),
                    s = this.inputs.length;
                if (-1 !== e) {
                    if (T.each(this.pickers, function (t, e) {
                        e.getUTCDate() || e.setUTCDate(i)
                    }), i < this.dates[e]) for (; 0 <= e && i < this.dates[e];) this.pickers[e--].setUTCDate(i); else if (i > this.dates[e]) for (; e < s && i > this.dates[e];) this.pickers[e++].setUTCDate(i);
                    this.updateDates(), delete this.updating
                }
            }
        }, remove: function () {
            T.map(this.pickers, function (t) {
                t.remove()
            }), delete this.element.data().datepicker
        }
    };
    var s = T.fn.datepicker;
    T.fn.datepicker = function (a) {
        var l, h = Array.apply(null, arguments);
        return h.shift(), this.each(function () {
            var t = T(this), e = t.data("datepicker"), i = "object" == typeof a && a;
            if (!e) {
                var s = function (t, e) {
                    var i = T(t).data(), s = {}, n = new RegExp("^" + e.toLowerCase() + "([A-Z])");

                    function o(t, e) {
                        return e.toLowerCase()
                    }

                    for (var r in e = new RegExp("^" + e.toLowerCase()), i) e.test(r) && (s[r.replace(n, o)] = i[r]);
                    return s
                }(this, "date"), n = function (t) {
                    var i = {};
                    if (S[t] || (t = t.split("-")[0], S[t])) {
                        var s = S[t];
                        return T.each(u, function (t, e) {
                            e in s && (i[e] = s[e])
                        }), i
                    }
                }(T.extend({}, d, s, i).language), o = T.extend({}, d, n, s, i);
                if (t.is(".input-daterange") || o.inputs) {
                    var r = {inputs: o.inputs || t.find('input[name="start"], input[name="end"]').toArray()};
                    t.data("datepicker", e = new c(this, T.extend(o, r)))
                } else t.data("datepicker", e = new v(this, o))
            }
            if ("string" == typeof a && "function" == typeof e[a] && (l = e[a].apply(e, h)) !== E) return !1
        }), l !== E ? l : this
    };
    var d = T.fn.datepicker.defaults = {
        autoclose: !0,
        beforeShowDay: T.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        daysOfWeekDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0
    }, u = T.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    T.fn.datepicker.Constructor = v;
    var S = T.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    }, M = {
        modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {clsName: "years", navFnc: "FullYear", navStep: 10}],
        isLeapYear: function (t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        },
        getDaysInMonth: function (t, e) {
            return [31, M.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function (t) {
            var e = t.replace(this.validParts, "\0").split("\0"), i = t.match(this.validParts);
            if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
            return {separators: e, parts: i}
        },
        parseDate: function (t, e, i) {
            if (!t) return E;
            if (t instanceof Date) return t;
            "string" == typeof e && (e = M.parseFormat(e));
            var s, n, o, r = /([\-+]\d+)([dmwy])/, a = t.match(/([\-+]\d+)([dmwy])/g);
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(t)) {
                for (t = new Date, o = 0; o < a.length; o++) switch (s = r.exec(a[o]), n = parseInt(s[1]), s[2]) {
                    case"d":
                        t.setUTCDate(t.getUTCDate() + n);
                        break;
                    case"m":
                        t = v.prototype.moveMonth.call(v.prototype, t, n);
                        break;
                    case"w":
                        t.setUTCDate(t.getUTCDate() + 7 * n);
                        break;
                    case"y":
                        t = v.prototype.moveYear.call(v.prototype, t, n)
                }
                return D(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 0, 0, 0)
            }
            a = t && t.match(this.nonpunctuation) || [], t = new Date;
            var l, h, c = {}, d = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], u = {
                yyyy: function (t, e) {
                    return t.setUTCFullYear(e)
                }, yy: function (t, e) {
                    return t.setUTCFullYear(2e3 + e)
                }, m: function (t, e) {
                    if (isNaN(t)) return t;
                    for (--e; e < 0;) e += 12;
                    for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                    return t
                }, d: function (t, e) {
                    return t.setUTCDate(e)
                }
            };
            u.M = u.MM = u.mm = u.m, u.dd = u.d, t = D(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0);
            var p = e.parts.slice();

            function f() {
                var t = this.slice(0, a[o].length);
                return t === a[o].slice(0, t.length)
            }

            if (a.length !== p.length && (p = T(p).filter(function (t, e) {
                return -1 !== T.inArray(e, d)
            }).toArray()), a.length === p.length) {
                var m, g, _;
                for (o = 0, m = p.length; o < m; o++) {
                    if (l = parseInt(a[o], 10), s = p[o], isNaN(l)) switch (s) {
                        case"MM":
                            h = T(S[i].months).filter(f), l = T.inArray(h[0], S[i].months) + 1;
                            break;
                        case"M":
                            h = T(S[i].monthsShort).filter(f), l = T.inArray(h[0], S[i].monthsShort) + 1
                    }
                    c[s] = l
                }
                for (o = 0; o < d.length; o++) (_ = d[o]) in c && !isNaN(c[_]) && (g = new Date(t), u[_](g, c[_]), isNaN(g) || (t = g))
            }
            return t
        },
        formatDate: function (t, e, i) {
            if (!t) return "";
            "string" == typeof e && (e = M.parseFormat(e));
            var s = {
                d: t.getUTCDate(),
                D: S[i].daysShort[t.getUTCDay()],
                DD: S[i].days[t.getUTCDay()],
                m: t.getUTCMonth() + 1,
                M: S[i].monthsShort[t.getUTCMonth()],
                MM: S[i].months[t.getUTCMonth()],
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear()
            };
            s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, t = [];
            for (var n = T.extend([], e.separators), o = 0, r = e.parts.length; o <= r; o++) n.length && t.push(n.shift()), t.push(s[e.parts[o]]);
            return t.join("")
        },
        headTemplate: '<thead><tr><th class="prev"></th><th colspan="5" class="datepicker-switch"></th><th class="next"></th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    M.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + M.headTemplate + "<tbody></tbody>" + M.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + M.headTemplate + M.contTemplate + M.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + M.headTemplate + M.contTemplate + M.footTemplate + "</table></div></div>", T.fn.datepicker.DPGlobal = M, T.fn.datepicker.noConflict = function () {
        return T.fn.datepicker = s, this
    }, T(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (t) {
        var e = T(this);
        e.data("datepicker") || (t.preventDefault(), e.datepicker("show"))
    }), T(function () {
        T('[data-provide="datepicker-inline"]').datepicker()
    })
}(window.jQuery), function (f, m, s) {
    "use strict";

    function o(t, e) {
        this.widget = "", this.$element = f(t), this.defaultTime = e.defaultTime, this.disableFocus = e.disableFocus, this.disableMousewheel = e.disableMousewheel, this.isOpen = e.isOpen, this.minuteStep = e.minuteStep, this.modalBackdrop = e.modalBackdrop, this.orientation = e.orientation, this.secondStep = e.secondStep, this.showInputs = e.showInputs, this.showMeridian = e.showMeridian, this.showSeconds = e.showSeconds, this.template = e.template, this.appendWidgetTo = e.appendWidgetTo, this.showWidgetOnAddonClick = e.showWidgetOnAddonClick, this._init()
    }

    o.prototype = {
        constructor: o, _init: function () {
            var t = this;
            this.showWidgetOnAddonClick && (this.$element.parent().hasClass("input-append") || this.$element.parent().hasClass("input-prepend")) ? (this.$element.parent(".input-append, .input-prepend").find(".add-on").on({"click.timepicker": f.proxy(this.showWidget, this)}), this.$element.on({
                "focus.timepicker": f.proxy(this.highlightUnit, this),
                "click.timepicker": f.proxy(this.highlightUnit, this),
                "keydown.timepicker": f.proxy(this.elementKeydown, this),
                "blur.timepicker": f.proxy(this.blurElement, this),
                "mousewheel.timepicker DOMMouseScroll.timepicker": f.proxy(this.mousewheel, this)
            })) : this.template ? this.$element.on({
                "focus.timepicker": f.proxy(this.showWidget, this),
                "click.timepicker": f.proxy(this.showWidget, this),
                "blur.timepicker": f.proxy(this.blurElement, this),
                "mousewheel.timepicker DOMMouseScroll.timepicker": f.proxy(this.mousewheel, this)
            }) : this.$element.on({
                "focus.timepicker": f.proxy(this.highlightUnit, this),
                "click.timepicker": f.proxy(this.highlightUnit, this),
                "keydown.timepicker": f.proxy(this.elementKeydown, this),
                "blur.timepicker": f.proxy(this.blurElement, this),
                "mousewheel.timepicker DOMMouseScroll.timepicker": f.proxy(this.mousewheel, this)
            }), !1 !== this.template ? this.$widget = f(this.getTemplate()).on("click", f.proxy(this.widgetClick, this)) : this.$widget = !1, this.showInputs && !1 !== this.$widget && this.$widget.find("input").each(function () {
                f(this).on({
                    "click.timepicker": function () {
                        f(this).select()
                    }, "keydown.timepicker": f.proxy(t.widgetKeydown, t), "keyup.timepicker": f.proxy(t.widgetKeyup, t)
                })
            }), this.setDefaultTime(this.defaultTime)
        }, blurElement: function () {
            this.highlightedUnit = null, this.updateFromElementVal()
        }, clear: function () {
            this.hour = "", this.minute = "", this.second = "", this.meridian = "", this.$element.val("")
        }, decrementHour: function () {
            if (this.showMeridian) if (1 === this.hour) this.hour = 12; else {
                if (12 === this.hour) return this.hour--, this.toggleMeridian();
                if (0 === this.hour) return this.hour = 11, this.toggleMeridian();
                this.hour--
            } else this.hour <= 0 ? this.hour = 23 : this.hour--
        }, decrementMinute: function (t) {
            var e;
            (e = t ? this.minute - t : this.minute - this.minuteStep) < 0 ? (this.decrementHour(), this.minute = e + 60) : this.minute = e
        }, decrementSecond: function () {
            var t = this.second - this.secondStep;
            t < 0 ? (this.decrementMinute(!0), this.second = 60 + t) : this.second = t
        }, elementKeydown: function (t) {
            switch (t.keyCode) {
                case 9:
                case 27:
                    this.updateFromElementVal();
                    break;
                case 37:
                    t.preventDefault(), this.highlightPrevUnit();
                    break;
                case 38:
                    switch (t.preventDefault(), this.highlightedUnit) {
                        case"hour":
                            this.incrementHour(), this.highlightHour();
                            break;
                        case"minute":
                            this.incrementMinute(), this.highlightMinute();
                            break;
                        case"second":
                            this.incrementSecond(), this.highlightSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian(), this.highlightMeridian()
                    }
                    this.update();
                    break;
                case 39:
                    t.preventDefault(), this.highlightNextUnit();
                    break;
                case 40:
                    switch (t.preventDefault(), this.highlightedUnit) {
                        case"hour":
                            this.decrementHour(), this.highlightHour();
                            break;
                        case"minute":
                            this.decrementMinute(), this.highlightMinute();
                            break;
                        case"second":
                            this.decrementSecond(), this.highlightSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian(), this.highlightMeridian()
                    }
                    this.update()
            }
        }, getCursorPosition: function () {
            var t = this.$element.get(0);
            if ("selectionStart" in t) return t.selectionStart;
            if (s.selection) {
                t.focus();
                var e = s.selection.createRange(), i = s.selection.createRange().text.length;
                return e.moveStart("character", -t.value.length), e.text.length - i
            }
        }, getTemplate: function () {
            var t, e, i, s, n, o;
            switch (n = this.showInputs ? (e = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>', i = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>', s = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>', '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>') : (e = '<span class="bootstrap-timepicker-hour"></span>', i = '<span class="bootstrap-timepicker-minute"></span>', s = '<span class="bootstrap-timepicker-second"></span>', '<span class="bootstrap-timepicker-meridian"></span>'), o = '<table><tr><td><a href="#" data-action="incrementHour"><i class="icon-up-open-big"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="icon-up-open-big"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="icon-up-open-big"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="icon-up-open-big"></i></a></td>' : "") + "</tr><tr><td>" + e + '</td> <td class="separator">:</td><td>' + i + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + s + "</td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + n + "</td>" : "") + '</tr><tr><td><a href="#" data-action="decrementHour"><i class="icon-down-open-big"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="icon-down-open-big"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="icon-down-open-big"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="icon-down-open-big"></i></a></td>' : "") + "</tr></table>", this.template) {
                case"modal":
                    t = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">×</a><h3>Pick a Time</h3></div><div class="modal-content">' + o + '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';
                    break;
                case"dropdown":
                    t = '<div class="bootstrap-timepicker-widget dropdown-menu">' + o + "</div>"
            }
            return t
        }, getTime: function () {
            return "" === this.hour ? "" : this.hour + ":" + (1 === this.minute.toString().length ? "0" + this.minute : this.minute) + (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second : this.second) : "") + (this.showMeridian ? " " + this.meridian : "")
        }, hideWidget: function () {
            !1 !== this.isOpen && (this.$element.trigger({
                type: "hide.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            }), "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"), f(s).off("mousedown.timepicker, touchend.timepicker"), this.isOpen = !1, this.$widget.detach())
        }, highlightUnit: function () {
            this.position = this.getCursorPosition(), 0 <= this.position && this.position <= 2 ? this.highlightHour() : 3 <= this.position && this.position <= 5 ? this.highlightMinute() : 6 <= this.position && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : 9 <= this.position && this.position <= 11 && this.highlightMeridian()
        }, highlightNextUnit: function () {
            switch (this.highlightedUnit) {
                case"hour":
                    this.highlightMinute();
                    break;
                case"minute":
                    this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case"second":
                    this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                    break;
                case"meridian":
                    this.highlightHour()
            }
        }, highlightPrevUnit: function () {
            switch (this.highlightedUnit) {
                case"hour":
                    this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
                    break;
                case"minute":
                    this.highlightHour();
                    break;
                case"second":
                    this.highlightMinute();
                    break;
                case"meridian":
                    this.showSeconds ? this.highlightSecond() : this.highlightMinute()
            }
        }, highlightHour: function () {
            var t = this.$element.get(0), e = this;
            this.highlightedUnit = "hour", t.setSelectionRange && setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(0, 1) : t.setSelectionRange(0, 2)
            }, 0)
        }, highlightMinute: function () {
            var t = this.$element.get(0), e = this;
            this.highlightedUnit = "minute", t.setSelectionRange && setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(2, 4) : t.setSelectionRange(3, 5)
            }, 0)
        }, highlightSecond: function () {
            var t = this.$element.get(0), e = this;
            this.highlightedUnit = "second", t.setSelectionRange && setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
            }, 0)
        }, highlightMeridian: function () {
            var t = this.$element.get(0), e = this;
            this.highlightedUnit = "meridian", t.setSelectionRange && (this.showSeconds ? setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(8, 10) : t.setSelectionRange(9, 11)
            }, 0) : setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
            }, 0))
        }, incrementHour: function () {
            if (this.showMeridian) {
                if (11 === this.hour) return this.hour++, this.toggleMeridian();
                12 === this.hour && (this.hour = 0)
            }
            23 !== this.hour ? this.hour++ : this.hour = 0
        }, incrementMinute: function (t) {
            var e;
            59 < (e = t ? this.minute + t : this.minute + this.minuteStep - this.minute % this.minuteStep) ? (this.incrementHour(), this.minute = e - 60) : this.minute = e
        }, incrementSecond: function () {
            var t = this.second + this.secondStep - this.second % this.secondStep;
            59 < t ? (this.incrementMinute(!0), this.second = t - 60) : this.second = t
        }, mousewheel: function (t) {
            if (!this.disableMousewheel) {
                t.preventDefault(), t.stopPropagation();
                var e = t.originalEvent.wheelDelta || -t.originalEvent.detail, i = null;
                switch ("mousewheel" === t.type ? i = -1 * t.originalEvent.wheelDelta : "DOMMouseScroll" === t.type && (i = 40 * t.originalEvent.detail), i && (t.preventDefault(), f(this).scrollTop(i + f(this).scrollTop())), this.highlightedUnit) {
                    case"minute":
                        0 < e ? this.incrementMinute() : this.decrementMinute(), this.highlightMinute();
                        break;
                    case"second":
                        0 < e ? this.incrementSecond() : this.decrementSecond(), this.highlightSecond();
                        break;
                    case"meridian":
                        this.toggleMeridian(), this.highlightMeridian();
                        break;
                    default:
                        0 < e ? this.incrementHour() : this.decrementHour(), this.highlightHour()
                }
                return !1
            }
        }, place: function () {
            if (!this.isInline) {
                var t = this.$widget.outerWidth(), e = this.$widget.outerHeight(), i = f(m).width(), s = f(m).height(),
                    n = f(m).scrollTop(), o = parseInt(this.$element.parents().filter(function () {
                    }).first().css("z-index"), 10) + 10,
                    r = this.component ? this.component.parent().offset() : this.$element.offset(),
                    a = this.component ? this.component.outerHeight(!0) : this.$element.outerHeight(!1),
                    l = this.component ? this.component.outerWidth(!0) : this.$element.outerWidth(!1), h = r.left,
                    c = r.top;
                this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"), "auto" !== this.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.orientation.x), "right" === this.orientation.x && (h -= t - l)) : (this.$widget.addClass("timepicker-orient-left"), r.left < 0 ? h -= r.left - 10 : r.left + t > i && (h = i - t - 10));
                var d, u, p = this.orientation.y;
                "auto" === p && (d = -n + r.top - e, u = n + s - (r.top + a + e), p = Math.max(d, u) === u ? "top" : "bottom"), this.$widget.addClass("timepicker-orient-" + p), "top" === p ? c += a : c -= e + parseInt(this.$widget.css("padding-top"), 10), this.$widget.css({
                    top: c,
                    left: h,
                    zIndex: o
                })
            }
        }, remove: function () {
            f("document").off(".timepicker"), this.$widget && this.$widget.remove(), delete this.$element.data().timepicker
        }, setDefaultTime: function (t) {
            if (this.$element.val()) this.updateFromElementVal(); else if ("current" === t) {
                var e = new Date, i = e.getHours(), s = e.getMinutes(), n = e.getSeconds(), o = "AM";
                0 !== n && 60 === (n = Math.ceil(e.getSeconds() / this.secondStep) * this.secondStep) && (s += 1, n = 0), 0 !== s && 60 === (s = Math.ceil(e.getMinutes() / this.minuteStep) * this.minuteStep) && (i += 1, s = 0), this.showMeridian && (0 === i ? i = 12 : o = 12 <= i ? (12 < i && (i -= 12), "PM") : "AM"), this.hour = i, this.minute = s, this.second = n, this.meridian = o, this.update()
            } else !1 === t ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = "AM") : this.setTime(t)
        }, setTime: function (t, e) {
            var i, s, n, o, r;
            t ? ("object" == typeof t && t.getMonth ? (s = t.getHours(), n = t.getMinutes(), o = t.getSeconds(), this.showMeridian && (r = "AM", 12 < s && (r = "PM", s %= 12), 12 === s && (r = "PM"))) : (r = null !== t.match(/p/i) ? "PM" : "AM", s = (i = (t = t.replace(/[^0-9\:]/g, "")).split(":"))[0] ? i[0].toString() : i.toString(), n = i[1] ? i[1].toString() : "", o = i[2] ? i[2].toString() : "", 4 < s.length && (o = s.substr(4, 2)), 2 < s.length && (n = s.substr(2, 2), s = s.substr(0, 2)), 2 < n.length && (o = n.substr(2, 2), n = n.substr(0, 2)), 2 < o.length && (o = o.substr(2, 2)), s = parseInt(s, 10), n = parseInt(n, 10), o = parseInt(o, 10), isNaN(s) && (s = 0), isNaN(n) && (n = 0), isNaN(o) && (o = 0), this.showMeridian ? s < 1 ? s = 1 : 12 < s && (s = 12) : (24 <= s ? s = 23 : s < 0 && (s = 0), s < 13 && "PM" === r && (s += 12)), n < 0 ? n = 0 : 60 <= n && (n = 59), this.showSeconds && (isNaN(o) || o < 0 ? o = 0 : 60 <= o && (o = 59))), this.hour = s, this.minute = n, this.second = o, this.meridian = r, this.update(e)) : this.clear()
        }, showWidget: function () {
            if (!this.isOpen && !this.$element.is(":disabled")) {
                this.$widget.appendTo(this.appendWidgetTo);
                var e = this;
                f(s).on("mousedown.timepicker, touchend.timepicker", function (t) {
                    e.$element.parent().find(t.target).length || e.$widget.is(t.target) || e.$widget.find(t.target).length || e.hideWidget()
                }), this.$element.trigger({
                    type: "show.timepicker",
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                }), this.place(), this.disableFocus && this.$element.blur(), "" === this.hour && (this.defaultTime ? this.setDefaultTime(this.defaultTime) : this.setTime("0:0:0")), "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", f.proxy(this.hideWidget, this)) : !1 === this.isOpen && this.$widget.addClass("open"), this.isOpen = !0
            }
        }, toggleMeridian: function () {
            this.meridian = "AM" === this.meridian ? "PM" : "AM"
        }, update: function (t) {
            this.updateElement(), t || this.updateWidget(), this.$element.trigger({
                type: "changeTime.timepicker",
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            })
        }, updateElement: function () {
            this.$element.val(this.getTime()).change()
        }, updateFromElementVal: function () {
            this.setTime(this.$element.val())
        }, updateWidget: function () {
            if (!1 !== this.$widget) {
                var t = this.hour, e = 1 === this.minute.toString().length ? "0" + this.minute : this.minute,
                    i = 1 === this.second.toString().length ? "0" + this.second : this.second;
                this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(t), this.$widget.find("input.bootstrap-timepicker-minute").val(e), this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(i), this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(t), this.$widget.find("span.bootstrap-timepicker-minute").text(e), this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(i), this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))
            }
        }, updateFromWidgetInputs: function () {
            if (!1 !== this.$widget) {
                var t = this.$widget.find("input.bootstrap-timepicker-hour").val() + ":" + this.$widget.find("input.bootstrap-timepicker-minute").val() + (this.showSeconds ? ":" + this.$widget.find("input.bootstrap-timepicker-second").val() : "") + (this.showMeridian ? this.$widget.find("input.bootstrap-timepicker-meridian").val() : "");
                this.setTime(t, !0)
            }
        }, widgetClick: function (t) {
            t.stopPropagation(), t.preventDefault();
            var e = f(t.target), i = e.closest("a").data("action");
            i && this[i](), this.update(), e.is("input") && e.get(0).setSelectionRange(0, 2)
        }, widgetKeydown: function (t) {
            var e = f(t.target), i = e.attr("class").replace("bootstrap-timepicker-", "");
            switch (t.keyCode) {
                case 9:
                    if (this.showMeridian && "meridian" === i || this.showSeconds && "second" === i || !this.showMeridian && !this.showSeconds && "minute" === i) return this.hideWidget();
                    break;
                case 27:
                    this.hideWidget();
                    break;
                case 38:
                    switch (t.preventDefault(), i) {
                        case"hour":
                            this.incrementHour();
                            break;
                        case"minute":
                            this.incrementMinute();
                            break;
                        case"second":
                            this.incrementSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian()
                    }
                    this.setTime(this.getTime()), e.get(0).setSelectionRange(0, 2);
                    break;
                case 40:
                    switch (t.preventDefault(), i) {
                        case"hour":
                            this.decrementHour();
                            break;
                        case"minute":
                            this.decrementMinute();
                            break;
                        case"second":
                            this.decrementSecond();
                            break;
                        case"meridian":
                            this.toggleMeridian()
                    }
                    this.setTime(this.getTime()), e.get(0).setSelectionRange(0, 2)
            }
        }, widgetKeyup: function (t) {
            (65 === t.keyCode || 77 === t.keyCode || 80 === t.keyCode || 46 === t.keyCode || 8 === t.keyCode || 46 <= t.keyCode && t.keyCode <= 57) && this.updateFromWidgetInputs()
        }
    }, f.fn.timepicker = function (s) {
        var n = Array.apply(null, arguments);
        return n.shift(), this.each(function () {
            var t = f(this), e = t.data("timepicker"), i = "object" == typeof s && s;
            e || t.data("timepicker", e = new o(this, f.extend({}, f.fn.timepicker.defaults, i, f(this).data()))), "string" == typeof s && e[s].apply(e, n)
        })
    }, f.fn.timepicker.defaults = {
        defaultTime: "current",
        disableFocus: !1,
        disableMousewheel: !1,
        isOpen: !1,
        minuteStep: 15,
        modalBackdrop: !1,
        orientation: {x: "auto", y: "auto"},
        secondStep: 15,
        showSeconds: !1,
        showInputs: !0,
        showMeridian: !0,
        template: "dropdown",
        appendWidgetTo: "body",
        showWidgetOnAddonClick: !0
    }, f.fn.timepicker.Constructor = o
}(jQuery, window, document), function (w) {
    var b = "iCheck", k = b + "-helper", x = "checkbox", C = "radio", T = "checked", p = "un" + T, E = "disabled",
        f = "determinate", D = "in" + f, S = "update", M = "type", I = "click", A = "touchbegin.i touchend.i",
        $ = "addClass", O = "removeClass", N = "trigger", P = "label", m = "cursor",
        F = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

    function H(t, e, i) {
        var s = t[0], n = /er/.test(i) ? D : /bl/.test(i) ? E : T, o = i == S ? {
            checked: s[T],
            disabled: s[E],
            indeterminate: "true" == t.attr(D) || "false" == t.attr(f)
        } : s[n];
        if (/^(ch|di|in)/.test(i) && !o) j(t, n); else if (/^(un|en|de)/.test(i) && o) L(t, n); else if (i == S) for (var r in o) (o[r] ? j : L)(t, r, !0); else e && "toggle" != i || (e || t[N]("ifClicked"), o ? s[M] !== C && L(t, n) : j(t, n))
    }

    function j(t, e, i) {
        var s = t[0], n = t.parent(), o = e == T, r = e == D, a = e == E, l = r ? f : o ? p : "enabled",
            h = g(t, l + _(s[M])), c = g(t, e + _(s[M]));
        if (!0 !== s[e]) {
            if (!i && e == T && s[M] == C && s.name) {
                var d = t.closest("form"), u = 'input[name="' + s.name + '"]';
                (u = d.length ? d.find(u) : w(u)).each(function () {
                    this !== s && w(this).data(b) && L(w(this), e)
                })
            }
            r ? (s[e] = !0, s[T] && L(t, T, "force")) : (i || (s[e] = !0), o && s[D] && L(t, D, !1)), v(t, o, e, i)
        }
        s[E] && g(t, m, !0) && n.find("." + k).css(m, "default"), n[$](c || g(t, e) || ""), n.attr("role") && !r && n.attr("aria-" + (a ? E : T), "true"), n[O](h || g(t, l) || "")
    }

    function L(t, e, i) {
        var s = t[0], n = t.parent(), o = e == T, r = e == D, a = e == E, l = r ? f : o ? p : "enabled",
            h = g(t, l + _(s[M])), c = g(t, e + _(s[M]));
        !1 !== s[e] && (!r && i && "force" != i || (s[e] = !1), v(t, o, l, i)), !s[E] && g(t, m, !0) && n.find("." + k).css(m, "pointer"), n[O](c || g(t, e) || ""), n.attr("role") && !r && n.attr("aria-" + (a ? E : T), "false"), n[$](h || g(t, l) || "")
    }

    function z(t, e) {
        t.data(b) && (t.parent().html(t.attr("style", t.data(b).s || "")), e && t[N](e), t.off(".i").unwrap(), w(P + '[for="' + t[0].id + '"]').add(t.closest(P)).off(".i"))
    }

    function g(t, e, i) {
        if (t.data(b)) return t.data(b).o[e + (i ? "" : "Class")]
    }

    function _(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }

    function v(t, e, i, s) {
        s || (e && t[N]("ifToggled"), t[N]("ifChanged")[N]("if" + _(i)))
    }

    w.fn[b] = function (e, i) {
        function t(t) {
            t.each(function () {
                var t = w(this);
                n = t.is(s) ? n.add(t) : n.add(t.find(s))
            })
        }

        var s = 'input[type="' + x + '"], input[type="' + C + '"]', n = w();
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(e)) return e = e.toLowerCase(), t(this), n.each(function () {
            var t = w(this);
            "destroy" == e ? z(t, "ifDestroyed") : H(t, !0, e), w.isFunction(i) && i()
        });
        if ("object" != typeof e && e) return this;
        var p = w.extend({checkedClass: T, disabledClass: E, indeterminateClass: D, labelHover: !0}, e), o = p.handle,
            f = p.hoverClass || "hover", m = p.focusClass || "focus", g = p.activeClass || "active", _ = !!p.labelHover,
            v = p.labelHoverClass || "hover", y = 0 | ("" + p.increaseArea).replace("%", "");
        return o != x && o != C || (s = 'input[type="' + o + '"]'), y < -50 && (y = -50), t(this), n.each(function () {
            var s = w(this);
            z(s);
            var t, n = this, e = n.id, i = -y + "%", o = 100 + 2 * y + "%", r = {
                    position: "absolute",
                    top: i,
                    left: i,
                    display: "block",
                    width: o,
                    height: o,
                    margin: 0,
                    padding: 0,
                    background: "#fff",
                    border: 0,
                    opacity: 0
                }, a = F ? {position: "absolute", visibility: "hidden"} : y ? r : {position: "absolute", opacity: 0},
                l = n[M] == x ? p.checkboxClass || "i" + x : p.radioClass || "i" + C,
                h = w(P + '[for="' + e + '"]').add(s.closest(P)), c = !!p.aria,
                d = b + "-" + Math.random().toString(36).substr(2, 6),
                u = '<div class="' + l + '" ' + (c ? 'role="' + n[M] + '" ' : "");
            c && h.each(function () {
                u += 'aria-labelledby="', this.id ? u += this.id : (this.id = d, u += d), u += '"'
            }), u = s.wrap(u + "/>")[N]("ifCreated").parent().append(p.insert), t = w('<ins class="' + k + '"/>').css(r).appendTo(u), s.data(b, {
                o: p,
                s: s.attr("style")
            }).css(a), p.inheritClass && u[$](n.className || ""), p.inheritID && e && u.attr("id", b + "-" + e), "static" == u.css("position") && u.css("position", "relative"), H(s, !0, S), h.length && h.on(I + ".i mouseover.i mouseout.i " + A, function (t) {
                var e = t[M], i = w(this);
                if (!n[E]) {
                    if (e == I) {
                        if (w(t.target).is("a")) return;
                        H(s, !1, !0)
                    } else _ && (/ut|nd/.test(e) ? (u[O](f), i[O](v)) : (u[$](f), i[$](v)));
                    t.stopPropagation()
                }
            }), s.on(I + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (t) {
                var e = t[M], i = t.keyCode;
                return e != I && ("keydown" == e && 32 == i ? (n[M] == C && n[T] || (n[T] ? L : j)(s, T), !1) : void("keyup" == e && n[M] == C ? n[T] || j(s, T) : /us|ur/.test(e) && u["blur" == e ? O : $](m)))
            }), t.on(I + " mousedown mouseup mouseover mouseout " + A, function (t) {
                var e = t[M], i = /wn|up/.test(e) ? g : f;
                n[E] || (e == I ? H(s, !1, !0) : (/wn|er|in/.test(e) ? u[$](i) : u[O](i + " " + g), h.length && _ && i == f && h[/ut|nd/.test(e) ? O : $](v)), t.stopPropagation())
            })
        })
    }
}(window.jQuery || window.Zepto);
$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});
