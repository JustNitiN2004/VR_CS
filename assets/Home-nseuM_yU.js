import {
    j as p,
    r as E,
    c as V,
    g as ct,
    S as pt,
    A as mt
} from "./index-6NHkQpqh.js";
import {
    C as X
} from "./Carousel-DRgdYvNQ.js";
import {
    B as ft
} from "./Blog-DUlo-rk7.js";
import {
    S as vt
} from "./Service-Ccawhdbi.js";
const gt = o => {
    var i;
    return p.jsx("div", {
        className: "w-100",
        children: p.jsx("div", {
            className: "home-slider",
            children: p.jsx(X, {
                fade: !0,
                children: (i = o.slide) == null ? void 0 : i.map((t, e) => p.jsxs(X.Item, {
                    children: [p.jsx("img", {
                        className: "d-block w-100",
                        src: t.image,
                        alt: t.heading
                    }), p.jsx(X.Caption, {
                        children: t.url ? p.jsx("a", {
                            className: "btn btn-primary btn-carosol",
                            target: "_blank",
                            rel: "noreferrer",
                            href: t.url,
                            children: "Apply Now"
                        }) : null
                    })]
                }, e))
            })
        })
    })
};
var K = {},
    q = {},
    v = {},
    F = {};
(function(o) {
    function i(a, r, l) {
        var u = r.slidesToShow,
            d = r.currentSlide;
        return l.length > 2 * u ? a + 2 * u : d >= l.length ? l.length + a : a
    }

    function t(a, r) {
        if (r.length > 2 * a) {
            for (var l = {}, u = r.length - 2 * a, d = r.length - u, c = u, h = 0; h < d; h++) l[h] = c, c++;
            var m = r.length + d,
                f = m + r.slice(0, 2 * a).length,
                g = 0;
            for (h = m; h <= f; h++) l[h] = g, g++;
            var b = m,
                C = 0;
            for (h = d; h < b; h++) l[h] = C, C++;
            return l
        }
        l = {};
        var I = 3 * r.length,
            S = 0;
        for (h = 0; h < I; h++) l[h] = S, ++S === r.length && (S = 0);
        return l
    }

    function e(a, r) {
        return r.length < a ? r : r.length > 2 * a ? r.slice(r.length - 2 * a, r.length).concat(r, r.slice(0, 2 * a)) : r.concat(r, r)
    }

    function n(a, r) {
        return r.length > 2 * a ? 2 * a : r.length
    }

    function s(a, r, l) {
        var u, d = a.currentSlide,
            c = a.slidesToShow,
            h = a.itemWidth,
            m = a.totalItems,
            f = 0,
            g = 0,
            b = d === 0,
            C = r.length - (r.length - 2 * c);
        return r.length < c ? (g = f = 0, b = u = !1) : r.length > 2 * c ? ((u = d >= C + r.length) && (g = -h * (f = d - r.length)), b && (g = -h * (f = C + (r.length - 2 * c)))) : ((u = d >= 2 * r.length) && (g = -h * (f = d - r.length)), b && (g = l.showDots ? -h * (f = r.length) : -h * (f = m / 3))), {
            isReachingTheEnd: u,
            isReachingTheStart: b,
            nextSlide: f,
            nextPosition: g
        }
    }
    Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.getOriginalCounterPart = i, o.getOriginalIndexLookupTableByClones = t, o.getClones = e, o.getInitialSlideInInfiniteMode = n, o.checkClonesPosition = s
})(F);
var j = {};
Object.defineProperty(j, "__esModule", {
    value: !0
});

function St(o, i, t, e) {
    var n = 0,
        s = e || t;
    return i && s && (n = o[s].partialVisibilityGutter || o[s].paritialVisibilityGutter), n
}

function yt(o, i) {
    var t;
    return i[o] && (t = (100 / i[o].items).toFixed(1)), t
}

function Tt(o, i, t) {
    return Math.round(t / (i + (o.centerMode ? 1 : 0)))
}
j.getPartialVisibilityGutter = St, j.getWidthFromDeviceType = yt, j.getItemClientSideWidth = Tt;
var T = {};
Object.defineProperty(T, "__esModule", {
    value: !0
});
var z = j;

function H(o) {
    var i = o.slidesToShow;
    return o.totalItems < i
}

function wt(o, i) {
    var t, e = o.domLoaded,
        n = o.slidesToShow,
        s = o.containerWidth,
        a = o.itemWidth,
        r = i.deviceType,
        l = i.responsive,
        u = i.ssr,
        d = i.partialVisbile,
        c = i.partialVisible,
        h = !!(e && n && s && a);
    u && r && !h && (t = z.getWidthFromDeviceType(r, l));
    var m = !!(u && r && !h && t);
    return {
        shouldRenderOnSSR: m,
        flexBisis: t,
        domFullyLoaded: h,
        partialVisibilityGutter: z.getPartialVisibilityGutter(l, d || c, r, o.deviceType),
        shouldRenderAtAll: m || h
    }
}

function bt(o, i) {
    var t = i.currentSlide,
        e = i.slidesToShow;
    return t <= o && o < t + e
}

function st(o, i, t) {
    var e = t || o.transform;
    return !i.infinite && o.currentSlide === 0 || H(o) ? e : e + o.itemWidth / 2
}

function Ct(o) {
    return !(0 < o.currentSlide)
}

function at(o) {
    var i = o.currentSlide,
        t = o.totalItems;
    return !(i + o.slidesToShow < t)
}

function lt(o, i, t, e) {
    i === void 0 && (i = 0);
    var n = o.currentSlide,
        s = o.slidesToShow,
        a = at(o),
        r = !t.infinite && a,
        l = e || o.transform;
    if (H(o)) return l;
    var u = l + n * i;
    return r ? u + (o.containerWidth - (o.itemWidth - i) * s) : u
}

function ut(o, i) {
    return o.rtl ? -1 * i : i
}

function It(o, i, t) {
    var e = i.partialVisbile,
        n = i.partialVisible,
        s = i.responsive,
        a = i.deviceType,
        r = i.centerMode,
        l = t || o.transform,
        u = z.getPartialVisibilityGutter(s, e || n, a, o.deviceType);
    return ut(i, n || e ? lt(o, u, i, t) : r ? st(o, i, t) : l)
}

function Mt(o, i) {
    var t = o.domLoaded,
        e = o.slidesToShow,
        n = o.containerWidth,
        s = o.itemWidth,
        a = i.deviceType,
        r = i.responsive,
        l = i.slidesToSlide || 1,
        u = !!(t && e && n && s);
    return i.ssr && i.deviceType && !u && Object.keys(r).forEach(function(d) {
        var c = r[d].slidesToSlide;
        a === d && c && (l = c)
    }), u && Object.keys(r).forEach(function(d) {
        var c = r[d],
            h = c.breakpoint,
            m = c.slidesToSlide,
            f = h.max,
            g = h.min;
        m && window.innerWidth >= g && window.innerWidth <= f && (l = m)
    }), l
}
T.notEnoughChildren = H, T.getInitialState = wt, T.getIfSlideIsVisbile = bt, T.getTransformForCenterMode = st, T.isInLeftEnd = Ct, T.isInRightEnd = at, T.getTransformForPartialVsibile = lt, T.parsePosition = ut, T.getTransform = It, T.getSlidesToSlide = Mt;
var J = {};
Object.defineProperty(J, "__esModule", {
    value: !0
});
var xt = function(o, i, t) {
    var e;
    return function() {
        var n = arguments;
        e || (o.apply(this, n), e = !0, typeof t == "function" && t(!0), setTimeout(function() {
            e = !1, typeof t == "function" && t(!1)
        }, i))
    }
};
J.default = xt;
var dt = {};
(function(o) {
    function i(t, e) {
        var n = e.partialVisbile,
            s = e.partialVisible,
            a = e.centerMode,
            r = e.ssr,
            l = e.responsive;
        if ((n || s) && a) throw new Error("center mode can not be used at the same time with partialVisible");
        if (!l) throw r ? new Error("ssr mode need to be used in conjunction with responsive prop") : new Error("Responsive prop is needed for deciding the amount of items to show on the screen");
        if (l && typeof l != "object") throw new Error("responsive prop must be an object")
    }
    Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.default = i
})(dt);
var Q = {};
Object.defineProperty(Q, "__esModule", {
    value: !0
});
var Pt = T;

function _t(o, i, t) {
    t === void 0 && (t = 0);
    var e, n, s = o.slidesToShow,
        a = o.currentSlide,
        r = o.itemWidth,
        l = o.totalItems,
        u = Pt.getSlidesToSlide(o, i),
        d = a + 1 + t + s + (0 < t ? 0 : u);
    return n = d <= l ? -r * (e = a + t + (0 < t ? 0 : u)) : l < d && a !== l - s ? -r * (e = l - s) : e = void 0, {
        nextSlides: e,
        nextPosition: n
    }
}
Q.populateNextSlides = _t;
var Z = {};
Object.defineProperty(Z, "__esModule", {
    value: !0
});
var Et = E,
    Rt = T,
    Ot = T;

function jt(o, i, t) {
    t === void 0 && (t = 0);
    var e, n, s = o.currentSlide,
        a = o.itemWidth,
        r = o.slidesToShow,
        l = i.children,
        u = i.showDots,
        d = i.infinite,
        c = Rt.getSlidesToSlide(o, i),
        h = s - t - (0 < t ? 0 : c),
        m = (Et.Children.toArray(l).length - r) % c;
    return n = 0 <= h ? (e = h, u && !d && 0 < m && Ot.isInRightEnd(o) && (e = s - m), -a * e) : e = h < 0 && s !== 0 ? 0 : void 0, {
        nextSlides: e,
        nextPosition: n
    }
}
Z.populatePreviousSlides = jt;
var ht = {};
(function(o) {
    function i(t, e, n, s, a, r) {
        var l, u, d = t.itemWidth,
            c = t.slidesToShow,
            h = t.totalItems,
            m = t.currentSlide,
            f = e.infinite,
            g = !1,
            b = Math.round((n - s) / d),
            C = Math.round((s - n) / d),
            I = n < a;
        if (a < n && b <= c) {
            l = "right";
            var S = Math.abs(-d * (h - c)),
                x = r - (s - a),
                M = m === h - c;
            (Math.abs(x) <= S || M && f) && (u = x, g = !0)
        }
        return I && C <= c && (l = "left", ((x = r + (a - s)) <= 0 || m === 0 && f) && (g = !0, u = x)), {
            direction: l,
            nextPosition: u,
            canContinue: g
        }
    }
    Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.populateSlidesOnMouseTouchMove = i
})(ht);
Object.defineProperty(v, "__esModule", {
    value: !0
});
var W = F;
v.getOriginalCounterPart = W.getOriginalCounterPart, v.getClones = W.getClones, v.checkClonesPosition = W.checkClonesPosition, v.getInitialSlideInInfiniteMode = W.getInitialSlideInInfiniteMode;
var U = j;
v.getWidthFromDeviceType = U.getWidthFromDeviceType, v.getPartialVisibilityGutter = U.getPartialVisibilityGutter, v.getItemClientSideWidth = U.getItemClientSideWidth;
var _ = T;
v.getInitialState = _.getInitialState, v.getIfSlideIsVisbile = _.getIfSlideIsVisbile, v.getTransformForCenterMode = _.getTransformForCenterMode, v.getTransformForPartialVsibile = _.getTransformForPartialVsibile, v.isInLeftEnd = _.isInLeftEnd, v.isInRightEnd = _.isInRightEnd, v.notEnoughChildren = _.notEnoughChildren, v.getSlidesToSlide = _.getSlidesToSlide;
var At = J;
v.throttle = At.default;
var Dt = dt;
v.throwError = Dt.default;
var Lt = Q;
v.populateNextSlides = Lt.populateNextSlides;
var Wt = Z;
v.populatePreviousSlides = Wt.populatePreviousSlides;
var Nt = ht;
v.populateSlidesOnMouseTouchMove = Nt.populateSlidesOnMouseTouchMove;
var G = {},
    kt = V && V.__extends || function() {
        var o = function(i, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, n) {
                    e.__proto__ = n
                } || function(e, n) {
                    for (var s in n) n.hasOwnProperty(s) && (e[s] = n[s])
                })(i, t)
        };
        return function(i, t) {
            function e() {
                this.constructor = i
            }
            o(i, t), i.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e)
        }
    }();
Object.defineProperty(G, "__esModule", {
    value: !0
});
var Vt = E;

function Bt(o) {
    return "clientY" in o
}
G.isMouseMoveEvent = Bt;
var Ft = function(o) {
    function i() {
        return o !== null && o.apply(this, arguments) || this
    }
    return kt(i, o), i
}(Vt.Component);
G.default = Ft;
var tt = {},
    et = {};
Object.defineProperty(et, "__esModule", {
    value: !0
});
var Gt = F,
    $t = T;

function Xt(o, i, t, e) {
    var n = {},
        s = $t.getSlidesToSlide(i, t);
    return Array(o).fill(0).forEach(function(a, r) {
        var l = Gt.getOriginalCounterPart(r, i, e);
        if (r === 0) n[0] = l;
        else {
            var u = n[r - 1] + s;
            n[r] = u
        }
    }), n
}
et.getLookupTableForNextSlides = Xt;
Object.defineProperty(tt, "__esModule", {
    value: !0
});
var D = E,
    Ut = F,
    Yt = et,
    ot = T,
    zt = function(o) {
        var i = o.props,
            t = o.state,
            e = o.goToSlide,
            n = o.getState,
            s = i.showDots,
            a = i.customDot,
            r = i.dotListClass,
            l = i.infinite,
            u = i.children;
        if (!s || ot.notEnoughChildren(t)) return null;
        var d, c = t.currentSlide,
            h = t.slidesToShow,
            m = ot.getSlidesToSlide(t, i),
            f = D.Children.toArray(u);
        d = l ? Math.ceil(f.length / m) : Math.ceil((f.length - h) / m) + 1;
        var g = Yt.getLookupTableForNextSlides(d, t, i, f),
            b = Ut.getOriginalIndexLookupTableByClones(h, f),
            C = b[c];
        return D.createElement("ul", {
            className: "react-multi-carousel-dot-list " + r
        }, Array(d).fill(0).map(function(I, S) {
            var x, M;
            if (l) {
                M = g[S];
                var O = b[M];
                x = C === O || O <= C && C < O + m
            } else {
                var A = f.length - h,
                    L = S * m;
                x = (M = A < L ? A : L) === c || M < c && c < M + m && c < f.length - h
            }
            return a ? D.cloneElement(a, {
                index: S,
                active: x,
                key: S,
                onClick: function() {
                    return e(M)
                },
                carouselState: n()
            }) : D.createElement("li", {
                "data-index": S,
                key: S,
                className: "react-multi-carousel-dot " + (x ? "react-multi-carousel-dot--active" : "")
            }, D.createElement("button", {
                "aria-label": "Go to slide " + (S + 1),
                onClick: function() {
                    return e(M)
                }
            }))
        }))
    };
tt.default = zt;
var $ = {};
Object.defineProperty($, "__esModule", {
    value: !0
});
var B = E,
    Kt = function(o) {
        var i = o.customLeftArrow,
            t = o.getState,
            e = o.previous,
            n = o.disabled,
            s = o.rtl;
        if (i) return B.cloneElement(i, {
            onClick: function() {
                return e()
            },
            carouselState: t(),
            disabled: n,
            rtl: s
        });
        var a = s ? "rtl" : "";
        return B.createElement("button", {
            "aria-label": "Go to previous slide",
            className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--left " + a,
            onClick: function() {
                return e()
            },
            type: "button",
            disabled: n
        })
    };
$.LeftArrow = Kt;
var qt = function(o) {
    var i = o.customRightArrow,
        t = o.getState,
        e = o.next,
        n = o.disabled,
        s = o.rtl;
    if (i) return B.cloneElement(i, {
        onClick: function() {
            return e()
        },
        carouselState: t(),
        disabled: n,
        rtl: s
    });
    var a = s ? "rtl" : "";
    return B.createElement("button", {
        "aria-label": "Go to next slide",
        className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--right " + a,
        onClick: function() {
            return e()
        },
        type: "button",
        disabled: n
    })
};
$.RightArrow = qt;
var it = {};
Object.defineProperty(it, "__esModule", {
    value: !0
});
var N = E,
    Y = v,
    Ht = function(o) {
        var i = o.props,
            t = o.state,
            e = o.goToSlide,
            n = o.clones,
            s = o.notEnoughChildren,
            a = t.itemWidth,
            r = i.children,
            l = i.infinite,
            u = i.itemClass,
            d = i.itemAriaLabel,
            c = i.partialVisbile,
            h = i.partialVisible,
            m = Y.getInitialState(t, i),
            f = m.flexBisis,
            g = m.shouldRenderOnSSR,
            b = m.domFullyLoaded,
            C = m.partialVisibilityGutter;
        return m.shouldRenderAtAll ? (c && console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'), N.createElement(N.Fragment, null, (l ? n : N.Children.toArray(r)).map(function(I, S) {
            return N.createElement("li", {
                key: S,
                "data-index": S,
                onClick: function() {
                    i.focusOnSelect && e(S)
                },
                "aria-hidden": Y.getIfSlideIsVisbile(S, t) ? "false" : "true",
                "aria-label": d || (I.props.ariaLabel ? I.props.ariaLabel : null),
                style: {
                    flex: g ? "1 0 " + f + "%" : "auto",
                    position: "relative",
                    width: b ? ((c || h) && C && !s ? a - C : a) + "px" : "auto"
                },
                className: "react-multi-carousel-item " + (Y.getIfSlideIsVisbile(S, t) ? "react-multi-carousel-item--active" : "") + " " + u
            }, I)
        }))) : null
    };
it.default = Ht;
var Jt = V && V.__extends || function() {
    var o = function(i, t) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, n) {
                e.__proto__ = n
            } || function(e, n) {
                for (var s in n) n.hasOwnProperty(s) && (e[s] = n[s])
            })(i, t)
    };
    return function(i, t) {
        function e() {
            this.constructor = i
        }
        o(i, t), i.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e)
    }
}();
Object.defineProperty(q, "__esModule", {
    value: !0
});
var w = E,
    y = v,
    R = G,
    Qt = tt,
    nt = $,
    Zt = it,
    k = T,
    P = 400,
    rt = "transform 400ms ease-in-out",
    te = function(o) {
        function i(t) {
            var e = o.call(this, t) || this;
            return e.containerRef = w.createRef(), e.listRef = w.createRef(), e.state = {
                itemWidth: 0,
                slidesToShow: 0,
                currentSlide: 0,
                totalItems: w.Children.count(t.children),
                deviceType: "",
                domLoaded: !1,
                transform: 0,
                containerWidth: 0
            }, e.onResize = e.onResize.bind(e), e.handleDown = e.handleDown.bind(e), e.handleMove = e.handleMove.bind(e), e.handleOut = e.handleOut.bind(e), e.onKeyUp = e.onKeyUp.bind(e), e.handleEnter = e.handleEnter.bind(e), e.setIsInThrottle = e.setIsInThrottle.bind(e), e.next = y.throttle(e.next.bind(e), t.transitionDuration || P, e.setIsInThrottle), e.previous = y.throttle(e.previous.bind(e), t.transitionDuration || P, e.setIsInThrottle), e.goToSlide = y.throttle(e.goToSlide.bind(e), t.transitionDuration || P, e.setIsInThrottle), e.onMove = !1, e.initialX = 0, e.lastX = 0, e.isAnimationAllowed = !1, e.direction = "", e.initialY = 0, e.isInThrottle = !1, e.transformPlaceHolder = 0, e
        }
        return Jt(i, o), i.prototype.resetTotalItems = function() {
            var t = this,
                e = w.Children.count(this.props.children),
                n = y.notEnoughChildren(this.state) ? 0 : Math.max(0, Math.min(this.state.currentSlide, e));
            this.setState({
                totalItems: e,
                currentSlide: n
            }, function() {
                t.setContainerAndItemWidth(t.state.slidesToShow, !0)
            })
        }, i.prototype.setIsInThrottle = function(t) {
            t === void 0 && (t = !1), this.isInThrottle = t
        }, i.prototype.setTransformDirectly = function(t, e) {
            var n = this.props.additionalTransfrom;
            this.transformPlaceHolder = t;
            var s = k.getTransform(this.state, this.props, this.transformPlaceHolder);
            this.listRef && this.listRef.current && (this.setAnimationDirectly(e), this.listRef.current.style.transform = "translate3d(" + (s + n) + "px,0,0)")
        }, i.prototype.setAnimationDirectly = function(t) {
            this.listRef && this.listRef.current && (this.listRef.current.style.transition = t ? this.props.customTransition || rt : "none")
        }, i.prototype.componentDidMount = function() {
            this.setState({
                domLoaded: !0
            }), this.setItemsToShow(), window.addEventListener("resize", this.onResize), this.onResize(!0), this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), this.props.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed))
        }, i.prototype.setClones = function(t, e, n, s) {
            var a = this;
            s === void 0 && (s = !1), this.isAnimationAllowed = !1;
            var r = w.Children.toArray(this.props.children),
                l = y.getInitialSlideInInfiniteMode(t || this.state.slidesToShow, r),
                u = y.getClones(this.state.slidesToShow, r),
                d = r.length < this.state.slidesToShow ? 0 : this.state.currentSlide;
            this.setState({
                totalItems: u.length,
                currentSlide: n && !s ? d : l
            }, function() {
                a.correctItemsPosition(e || a.state.itemWidth)
            })
        }, i.prototype.setItemsToShow = function(t, e) {
            var n = this,
                s = this.props.responsive;
            Object.keys(s).forEach(function(a) {
                var r = s[a],
                    l = r.breakpoint,
                    u = r.items,
                    d = l.max,
                    c = l.min,
                    h = [window.innerWidth];
                window.screen && window.screen.width && h.push(window.screen.width);
                var m = Math.min.apply(Math, h);
                c <= m && m <= d && (n.setState({
                    slidesToShow: u,
                    deviceType: a
                }), n.setContainerAndItemWidth(u, t, e))
            })
        }, i.prototype.setContainerAndItemWidth = function(t, e, n) {
            var s = this;
            if (this.containerRef && this.containerRef.current) {
                var a = this.containerRef.current.offsetWidth,
                    r = y.getItemClientSideWidth(this.props, t, a);
                this.setState({
                    containerWidth: a,
                    itemWidth: r
                }, function() {
                    s.props.infinite && s.setClones(t, r, e, n)
                }), e && this.correctItemsPosition(r)
            }
        }, i.prototype.correctItemsPosition = function(t, e, n) {
            e && (this.isAnimationAllowed = !0), !e && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
            var s = this.state.totalItems < this.state.slidesToShow ? 0 : -t * this.state.currentSlide;
            n && this.setTransformDirectly(s, !0), this.setState({
                transform: s
            })
        }, i.prototype.onResize = function(t) {
            var e;
            e = !!this.props.infinite && (typeof t != "boolean" || !t), this.setItemsToShow(e)
        }, i.prototype.componentDidUpdate = function(t, e) {
            var n = this,
                s = t.keyBoardControl,
                a = t.autoPlay,
                r = t.children,
                l = e.containerWidth,
                u = e.domLoaded,
                d = e.currentSlide;
            if (this.containerRef && this.containerRef.current && this.containerRef.current.offsetWidth !== l && (this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), this.itemsToShowTimeout = setTimeout(function() {
                    n.setItemsToShow(!0)
                }, this.props.transitionDuration || P)), s && !this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), !s && this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), a && !this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), a || !this.props.autoPlay || this.autoPlay || (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed)), r.length !== this.props.children.length ? i.clonesTimeout = setTimeout(function() {
                    n.props.infinite ? n.setClones(n.state.slidesToShow, n.state.itemWidth, !0, !0) : n.resetTotalItems()
                }, this.props.transitionDuration || P) : this.props.infinite && this.state.currentSlide !== d && this.correctClonesPosition({
                    domLoaded: u
                }), this.transformPlaceHolder !== this.state.transform && (this.transformPlaceHolder = this.state.transform), this.props.autoPlay && this.props.rewind && !this.props.infinite && y.isInRightEnd(this.state)) {
                var c = this.props.transitionDuration || P;
                i.isInThrottleTimeout = setTimeout(function() {
                    n.setIsInThrottle(!1), n.resetAutoplayInterval(), n.goToSlide(0, void 0, !!n.props.rewindWithAnimation)
                }, c + this.props.autoPlaySpeed)
            }
        }, i.prototype.correctClonesPosition = function(t) {
            var e = this,
                n = t.domLoaded,
                s = w.Children.toArray(this.props.children),
                a = y.checkClonesPosition(this.state, s, this.props),
                r = a.isReachingTheEnd,
                l = a.isReachingTheStart,
                u = a.nextSlide,
                d = a.nextPosition;
            this.state.domLoaded && n && (r || l) && (this.isAnimationAllowed = !1, i.transformTimeout = setTimeout(function() {
                e.setState({
                    transform: d,
                    currentSlide: u
                })
            }, this.props.transitionDuration || P))
        }, i.prototype.next = function(t) {
            var e = this;
            t === void 0 && (t = 0);
            var n = this.props,
                s = n.afterChange,
                a = n.beforeChange;
            if (!y.notEnoughChildren(this.state)) {
                var r = y.populateNextSlides(this.state, this.props, t),
                    l = r.nextSlides,
                    u = r.nextPosition,
                    d = this.state.currentSlide;
                l !== void 0 && u !== void 0 && (typeof a == "function" && a(l, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({
                    transform: u,
                    currentSlide: l
                }, function() {
                    typeof s == "function" && (i.afterChangeTimeout = setTimeout(function() {
                        s(d, e.getState())
                    }, e.props.transitionDuration || P))
                }))
            }
        }, i.prototype.previous = function(t) {
            var e = this;
            t === void 0 && (t = 0);
            var n = this.props,
                s = n.afterChange,
                a = n.beforeChange;
            if (!y.notEnoughChildren(this.state)) {
                var r = y.populatePreviousSlides(this.state, this.props, t),
                    l = r.nextSlides,
                    u = r.nextPosition;
                if (l !== void 0 && u !== void 0) {
                    var d = this.state.currentSlide;
                    typeof a == "function" && a(l, this.getState()), this.isAnimationAllowed = !0, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({
                        transform: u,
                        currentSlide: l
                    }, function() {
                        typeof s == "function" && (i.afterChangeTimeout2 = setTimeout(function() {
                            s(d, e.getState())
                        }, e.props.transitionDuration || P))
                    })
                }
            }
        }, i.prototype.resetAutoplayInterval = function() {
            this.props.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed))
        }, i.prototype.componentWillUnmount = function() {
            window.removeEventListener("resize", this.onResize), this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), i.clonesTimeout && clearTimeout(i.clonesTimeout), i.isInThrottleTimeout && clearTimeout(i.isInThrottleTimeout), i.transformTimeout && clearTimeout(i.transformTimeout), i.afterChangeTimeout && clearTimeout(i.afterChangeTimeout), i.afterChangeTimeout2 && clearTimeout(i.afterChangeTimeout2), i.afterChangeTimeout3 && clearTimeout(i.afterChangeTimeout3)
        }, i.prototype.resetMoveStatus = function() {
            this.onMove = !1, this.initialX = 0, this.lastX = 0, this.direction = "", this.initialY = 0
        }, i.prototype.getCords = function(t) {
            var e = t.clientX,
                n = t.clientY;
            return {
                clientX: k.parsePosition(this.props, e),
                clientY: k.parsePosition(this.props, n)
            }
        }, i.prototype.handleDown = function(t) {
            if (!(!R.isMouseMoveEvent(t) && !this.props.swipeable || R.isMouseMoveEvent(t) && !this.props.draggable || this.isInThrottle)) {
                var e = this.getCords(R.isMouseMoveEvent(t) ? t : t.touches[0]),
                    n = e.clientX,
                    s = e.clientY;
                this.onMove = !0, this.initialX = n, this.initialY = s, this.lastX = n, this.isAnimationAllowed = !1
            }
        }, i.prototype.handleMove = function(t) {
            if (!(!R.isMouseMoveEvent(t) && !this.props.swipeable || R.isMouseMoveEvent(t) && !this.props.draggable || y.notEnoughChildren(this.state))) {
                var e = this.getCords(R.isMouseMoveEvent(t) ? t : t.touches[0]),
                    n = e.clientX,
                    s = e.clientY,
                    a = this.initialX - n,
                    r = this.initialY - s;
                if (this.onMove) {
                    if (!(Math.abs(a) > Math.abs(r))) return;
                    var l = y.populateSlidesOnMouseTouchMove(this.state, this.props, this.initialX, this.lastX, n, this.transformPlaceHolder),
                        u = l.direction,
                        d = l.nextPosition,
                        c = l.canContinue;
                    u && (this.direction = u, c && d !== void 0 && this.setTransformDirectly(d)), this.lastX = n
                }
            }
        }, i.prototype.handleOut = function(t) {
            this.props.autoPlay && !this.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
            var e = t.type === "touchend" && !this.props.swipeable,
                n = (t.type === "mouseleave" || t.type === "mouseup") && !this.props.draggable;
            if (!e && !n && this.onMove) {
                if (this.setAnimationDirectly(!0), this.direction === "right")
                    if (this.initialX - this.lastX >= this.props.minimumTouchDrag) {
                        var s = Math.round((this.initialX - this.lastX) / this.state.itemWidth);
                        this.next(s)
                    } else this.correctItemsPosition(this.state.itemWidth, !0, !0);
                this.direction === "left" && (this.lastX - this.initialX > this.props.minimumTouchDrag ? (s = Math.round((this.lastX - this.initialX) / this.state.itemWidth), this.previous(s)) : this.correctItemsPosition(this.state.itemWidth, !0, !0)), this.resetMoveStatus()
            }
        }, i.prototype.isInViewport = function(t) {
            var e = t.getBoundingClientRect(),
                n = e.top,
                s = n === void 0 ? 0 : n,
                a = e.left,
                r = a === void 0 ? 0 : a,
                l = e.bottom,
                u = l === void 0 ? 0 : l,
                d = e.right,
                c = d === void 0 ? 0 : d;
            return 0 <= s && 0 <= r && u <= (window.innerHeight || document.documentElement.clientHeight) && c <= (window.innerWidth || document.documentElement.clientWidth)
        }, i.prototype.isChildOfCarousel = function(t) {
            return !!(t instanceof Element && this.listRef && this.listRef.current) && this.listRef.current.contains(t)
        }, i.prototype.onKeyUp = function(t) {
            var e = t.target;
            switch (t.keyCode) {
                case 37:
                    if (this.isChildOfCarousel(e)) return this.previous();
                    break;
                case 39:
                    if (this.isChildOfCarousel(e)) return this.next();
                    break;
                case 9:
                    if (this.isChildOfCarousel(e) && e instanceof HTMLInputElement && this.isInViewport(e)) return this.next()
            }
        }, i.prototype.handleEnter = function(t) {
            R.isMouseMoveEvent(t) && this.autoPlay && this.props.autoPlay && this.props.pauseOnHover && (clearInterval(this.autoPlay), this.autoPlay = void 0)
        }, i.prototype.goToSlide = function(t, e, n) {
            var s = this;
            if (n === void 0 && (n = !0), !this.isInThrottle) {
                var a = this.state.itemWidth,
                    r = this.props,
                    l = r.afterChange,
                    u = r.beforeChange,
                    d = this.state.currentSlide;
                typeof u != "function" || e && (typeof e != "object" || e.skipBeforeChange) || u(t, this.getState()), this.isAnimationAllowed = n, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({
                    currentSlide: t,
                    transform: -a * t
                }, function() {
                    s.props.infinite && s.correctClonesPosition({
                        domLoaded: !0
                    }), typeof l != "function" || e && (typeof e != "object" || e.skipAfterChange) || (i.afterChangeTimeout3 = setTimeout(function() {
                        l(d, s.getState())
                    }, s.props.transitionDuration || P))
                })
            }
        }, i.prototype.getState = function() {
            return this.state
        }, i.prototype.renderLeftArrow = function(t) {
            var e = this,
                n = this.props,
                s = n.customLeftArrow,
                a = n.rtl;
            return w.createElement(nt.LeftArrow, {
                customLeftArrow: s,
                getState: function() {
                    return e.getState()
                },
                previous: this.previous,
                disabled: t,
                rtl: a
            })
        }, i.prototype.renderRightArrow = function(t) {
            var e = this,
                n = this.props,
                s = n.customRightArrow,
                a = n.rtl;
            return w.createElement(nt.RightArrow, {
                customRightArrow: s,
                getState: function() {
                    return e.getState()
                },
                next: this.next,
                disabled: t,
                rtl: a
            })
        }, i.prototype.renderButtonGroups = function() {
            var t = this,
                e = this.props.customButtonGroup;
            return e ? w.cloneElement(e, {
                previous: function() {
                    return t.previous()
                },
                next: function() {
                    return t.next()
                },
                goToSlide: function(n, s) {
                    return t.goToSlide(n, s)
                },
                carouselState: this.getState()
            }) : null
        }, i.prototype.renderDotsList = function() {
            var t = this;
            return w.createElement(Qt.default, {
                state: this.state,
                props: this.props,
                goToSlide: this.goToSlide,
                getState: function() {
                    return t.getState()
                }
            })
        }, i.prototype.renderCarouselItems = function() {
            var t = [];
            if (this.props.infinite) {
                var e = w.Children.toArray(this.props.children);
                t = y.getClones(this.state.slidesToShow, e)
            }
            return w.createElement(Zt.default, {
                clones: t,
                goToSlide: this.goToSlide,
                state: this.state,
                notEnoughChildren: y.notEnoughChildren(this.state),
                props: this.props
            })
        }, i.prototype.render = function() {
            var t = this.props,
                e = t.deviceType,
                n = t.arrows,
                s = t.renderArrowsWhenDisabled,
                a = t.removeArrowOnDeviceType,
                r = t.infinite,
                l = t.containerClass,
                u = t.sliderClass,
                d = t.customTransition,
                c = t.additionalTransfrom,
                h = t.renderDotsOutside,
                m = t.renderButtonGroupOutside,
                f = t.className,
                g = t.rtl,
                b = y.getInitialState(this.state, this.props),
                C = b.shouldRenderOnSSR,
                I = b.shouldRenderAtAll,
                S = y.isInLeftEnd(this.state),
                x = y.isInRightEnd(this.state),
                M = n && !(a && (e && -1 < a.indexOf(e) || this.state.deviceType && -1 < a.indexOf(this.state.deviceType))) && !y.notEnoughChildren(this.state) && I,
                O = !r && S,
                A = !r && x,
                L = k.getTransform(this.state, this.props);
            return w.createElement(w.Fragment, null, w.createElement("div", {
                className: "react-multi-carousel-list " + l + " " + f,
                dir: g ? "rtl" : "ltr",
                ref: this.containerRef
            }, w.createElement("ul", {
                ref: this.listRef,
                className: "react-multi-carousel-track " + u,
                style: {
                    transition: this.isAnimationAllowed ? d || rt : "none",
                    overflow: C ? "hidden" : "unset",
                    transform: "translate3d(" + (L + c) + "px,0,0)"
                },
                onMouseMove: this.handleMove,
                onMouseDown: this.handleDown,
                onMouseUp: this.handleOut,
                onMouseEnter: this.handleEnter,
                onMouseLeave: this.handleOut,
                onTouchStart: this.handleDown,
                onTouchMove: this.handleMove,
                onTouchEnd: this.handleOut
            }, this.renderCarouselItems()), M && (!O || s) && this.renderLeftArrow(O), M && (!A || s) && this.renderRightArrow(A), I && !m && this.renderButtonGroups(), I && !h && this.renderDotsList()), I && h && this.renderDotsList(), I && m && this.renderButtonGroups())
        }, i.defaultProps = {
            slidesToSlide: 1,
            infinite: !1,
            draggable: !0,
            swipeable: !0,
            arrows: !0,
            renderArrowsWhenDisabled: !1,
            containerClass: "",
            sliderClass: "",
            itemClass: "",
            keyBoardControl: !0,
            autoPlaySpeed: 3e3,
            showDots: !1,
            renderDotsOutside: !1,
            renderButtonGroupOutside: !1,
            minimumTouchDrag: 80,
            className: "",
            dotListClass: "",
            focusOnSelect: !1,
            centerMode: !1,
            additionalTransfrom: 0,
            pauseOnHover: !0,
            shouldResetAutoplay: !0,
            rewind: !1,
            rtl: !1,
            rewindWithAnimation: !1
        }, i
    }(w.Component);
q.default = te;
Object.defineProperty(K, "__esModule", {
    value: !0
});
var ee = q;
K.default = ee.default;
var ie = K;
const oe = ct(ie),
    ne = {
        desktop: {
            breakpoint: {
                max: 3e3,
                min: 1024
            },
            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    },
    re = o => {
        var i;
        return p.jsx("div", {
            className: "container mt-4",
            children: p.jsxs("div", {
                className: "row",
                children: [p.jsxs("div", {
                    className: "testimonial",
                    children: [p.jsx("h2", {
                        className: "text-center fw-bold",
                        children: "Testimonial"
                    }), p.jsx("hr", {})]
                }), p.jsx("div", {
                    className: "row",
                    children: p.jsx(oe, {
                        swipeable: !1,
                        draggable: !1,
                        showDots: !1,
                        responsive: ne,
                        ssr: !0,
                        infinite: !0,
                        autoPlay: !0,
                        autoPlaySpeed: 1e3,
                        keyBoardControl: !0,
                        customTransition: "all .5",
                        transitionDuration: 500,
                        containerClass: "carousel-container",
                        removeArrowOnDeviceType: ["tablet", "mobile"],
                        dotListClass: "custom-dot-list-style",
                        itemClass: "",
                        children: (i = o.testimonials) == null ? void 0 : i.map((t, e) => p.jsxs("div", {
                            className: "item testimonial-block",
                            children: [p.jsxs("div", {
                                className: "d-flex align-items-end mb-2",
                                children: [p.jsx("img", {
                                    src: t.image,
                                    alt: t.name,
                                    className: "img-thumbnail"
                                }), p.jsx("h5", {
                                    className: "ms-3 text-orange",
                                    children: t.name
                                })]
                            }), p.jsx("p", {
                                className: "fs-small",
                                children: pt(t.description, 80)
                            })]
                        }, e))
                    })
                })]
            })
        })
    },
    de = () => {
        const [o, i] = E.useState({
            sliders: [],
            testimonials: [],
            features: {
                description: ""
            },
            about: {
                description: ""
            },
            refer: {
                description: ""
            },
            quality: {
                description: ""
            },
            blog: [],
            services: []
        });
        return E.useEffect(() => {
            (async () => {
                var {
                    data: t
                } = await mt.getData("home");
                t.status === !0 && i(t.data)
            })()
        }, []), p.jsxs("div", {
            style: {
                marginTop: 90
            },
            children: [o.sliders && o.sliders.length > 0 ? p.jsx(gt, {
                slide: o.sliders
            }) : null, p.jsx("div", {
                className: "container-lg mt-4",
                dangerouslySetInnerHTML: {
                    __html: o.features.description
                }
            }), p.jsx("div", {
                className: "container-lg mt-4",
                dangerouslySetInnerHTML: {
                    __html: o.about.description
                }
            }), o.testimonials && o.testimonials.length > 0 ? p.jsx(re, {
                testimonials: o.testimonials
            }) : null, o.services && o.services.length > 0 ? p.jsx("section", {
                className: "services mt-4",
                children: p.jsxs("div", {
                    className: "container",
                    children: [p.jsx("div", {
                        className: "col-12",
                        children: p.jsx("h3", {
                            className: "m-0 fw-bold",
                            children: "Our Services"
                        })
                    }), p.jsx("div", {
                        className: "row my-2 ",
                        children: p.jsx(vt, {
                            services: o.services
                        })
                    })]
                })
            }) : null, p.jsx("div", {
                className: "container-lg mt-4",
                dangerouslySetInnerHTML: {
                    __html: o.quality.description
                }
            }), o.blog && o.blog.length > 0 ? p.jsx("div", {
                className: "container my-4",
                children: p.jsxs("div", {
                    className: "blog",
                    children: [p.jsx("h2", {
                        className: "text-center fw-bold",
                        children: "Blogs"
                    }), p.jsx("hr", {}), p.jsx("div", {
                        className: "row",
                        children: p.jsx(ft, {
                            blogs: o.blog
                        })
                    })]
                })
            }) : null]
        })
    };
export {
    de as
    default
};