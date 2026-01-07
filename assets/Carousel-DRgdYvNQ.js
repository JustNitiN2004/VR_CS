import {
    r as n,
    x as De,
    y as Me,
    d as W,
    j as c,
    e as j,
    f as $e,
    z as Ae,
    D as Le,
    G as ae,
    H as Oe,
    I as le,
    T as _e,
    J as Xe
} from "./index-6NHkQpqh.js";

function He(r, s) {
    const a = n.useRef(!0);
    n.useEffect(() => {
        if (a.current) {
            a.current = !1;
            return
        }
        return r()
    }, s)
}
const V = 2 ** 31 - 1;

function ce(r, s, a) {
    const l = a - Date.now();
    r.current = l <= V ? setTimeout(s, l) : setTimeout(() => ce(r, s, a), V)
}

function Pe() {
    const r = De(),
        s = n.useRef();
    return Me(() => clearTimeout(s.current)), n.useMemo(() => {
        const a = () => clearTimeout(s.current);

        function l(h, i = 0) {
            r() && (a(), i <= V ? s.current = setTimeout(h, i) : ce(s, h, Date.now() + i))
        }
        return {
            set: l,
            clear: a,
            handleRef: s
        }
    }, [])
}
const ie = n.forwardRef(({
    className: r,
    bsPrefix: s,
    as: a = "div",
    ...l
}, h) => (s = W(s, "carousel-caption"), c.jsx(a, {
    ref: h,
    className: j(r, s),
    ...l
})));
ie.displayName = "CarouselCaption";
const ue = n.forwardRef(({
    as: r = "div",
    bsPrefix: s,
    className: a,
    ...l
}, h) => {
    const i = j(a, W(s, "carousel-item"));
    return c.jsx(r, {
        ref: h,
        ...l,
        className: i
    })
});
ue.displayName = "CarouselItem";

function oe(r, s) {
    let a = 0;
    return n.Children.map(r, l => n.isValidElement(l) ? s(l, a++) : l)
}

function Ue(r, s) {
    let a = 0;
    n.Children.forEach(r, l => {
        n.isValidElement(l) && s(l, a++)
    })
}
const Ve = 40;

function We(r) {
    if (!r || !r.style || !r.parentNode || !r.parentNode.style) return !1;
    const s = getComputedStyle(r);
    return s.display !== "none" && s.visibility !== "hidden" && getComputedStyle(r.parentNode).display !== "none"
}
const de = n.forwardRef(({
    defaultActiveIndex: r = 0,
    ...s
}, a) => {
    const {
        as: l = "div",
        bsPrefix: h,
        slide: i = !0,
        fade: fe = !1,
        controls: me = !0,
        indicators: D = !0,
        indicatorLabels: M = [],
        activeIndex: p,
        onSelect: x,
        onSlide: y,
        onSlid: S,
        interval: T = 5e3,
        keyboard: F = !0,
        onKeyDown: $,
        pause: N = "hover",
        onMouseOver: A,
        onMouseOut: L,
        wrap: I = !0,
        touch: K = !0,
        onTouchStart: O,
        onTouchMove: _,
        onTouchEnd: X,
        prevIcon: he = c.jsx("span", {
            "aria-hidden": "true",
            className: "carousel-control-prev-icon"
        }),
        prevLabel: B = "Previous",
        nextIcon: pe = c.jsx("span", {
            "aria-hidden": "true",
            className: "carousel-control-next-icon"
        }),
        nextLabel: z = "Next",
        variant: G,
        className: xe,
        children: H,
        ...ve
    } = $e({
        defaultActiveIndex: r,
        ...s
    }, {
        activeIndex: "onSelect"
    }), f = W(h, "carousel"), E = Ae(), R = n.useRef(null), [J, Y] = n.useState("next"), [Ce, k] = n.useState(!1), [b, q] = n.useState(!1), [o, Ne] = n.useState(p || 0);
    n.useEffect(() => {
        !b && p !== o && (R.current ? Y(R.current) : Y((p || 0) > o ? "next" : "prev"), i && q(!0), Ne(p || 0))
    }, [p, b, o, i]), n.useEffect(() => {
        R.current && (R.current = null)
    });
    let v = 0,
        Q;
    Ue(H, (e, t) => {
        ++v, t === p && (Q = e.props.interval)
    });
    const Z = Le(Q),
        u = n.useCallback(e => {
            if (b) return;
            let t = o - 1;
            if (t < 0) {
                if (!I) return;
                t = v - 1
            }
            R.current = "prev", x == null || x(t, e)
        }, [b, o, x, I, v]),
        d = ae(e => {
            if (b) return;
            let t = o + 1;
            if (t >= v) {
                if (!I) return;
                t = 0
            }
            R.current = "next", x == null || x(t, e)
        }),
        P = n.useRef();
    n.useImperativeHandle(a, () => ({
        element: P.current,
        prev: u,
        next: d
    }));
    const ee = ae(() => {
            !document.hidden && We(P.current) && (E ? u() : d())
        }),
        C = J === "next" ? "start" : "end";
    He(() => {
        i || (y == null || y(o, C), S == null || S(o, C))
    }, [o]);
    const Ee = `${f}-item-${J}`,
        Re = `${f}-item-${C}`,
        be = n.useCallback(e => {
            Oe(e), y == null || y(o, C)
        }, [y, o, C]),
        ye = n.useCallback(() => {
            q(!1), S == null || S(o, C)
        }, [S, o, C]),
        Se = n.useCallback(e => {
            if (F && !/input|textarea/i.test(e.target.tagName)) switch (e.key) {
                case "ArrowLeft":
                    e.preventDefault(), E ? d(e) : u(e);
                    return;
                case "ArrowRight":
                    e.preventDefault(), E ? u(e) : d(e);
                    return
            }
            $ == null || $(e)
        }, [F, $, u, d, E]),
        Te = n.useCallback(e => {
            N === "hover" && k(!0), A == null || A(e)
        }, [N, A]),
        Ie = n.useCallback(e => {
            k(!1), L == null || L(e)
        }, [L]),
        ne = n.useRef(0),
        w = n.useRef(0),
        te = Pe(),
        ge = n.useCallback(e => {
            ne.current = e.touches[0].clientX, w.current = 0, N === "hover" && k(!0), O == null || O(e)
        }, [N, O]),
        je = n.useCallback(e => {
            e.touches && e.touches.length > 1 ? w.current = 0 : w.current = e.touches[0].clientX - ne.current, _ == null || _(e)
        }, [_]),
        ke = n.useCallback(e => {
            if (K) {
                const t = w.current;
                Math.abs(t) > Ve && (t > 0 ? u(e) : d(e))
            }
            N === "hover" && te.set(() => {
                k(!1)
            }, T || void 0), X == null || X(e)
        }, [K, N, u, d, te, T, X]),
        se = T != null && !Ce && !b,
        U = n.useRef();
    n.useEffect(() => {
        var e, t;
        if (!se) return;
        const m = E ? u : d;
        return U.current = window.setInterval(document.visibilityState ? ee : m, (e = (t = Z.current) != null ? t : T) != null ? e : void 0), () => {
            U.current !== null && clearInterval(U.current)
        }
    }, [se, u, d, Z, T, ee, E]);
    const re = n.useMemo(() => D && Array.from({
        length: v
    }, (e, t) => m => {
        x == null || x(t, m)
    }), [D, v, x]);
    return c.jsxs(l, {
        ref: P,
        ...ve,
        onKeyDown: Se,
        onMouseOver: Te,
        onMouseOut: Ie,
        onTouchStart: ge,
        onTouchMove: je,
        onTouchEnd: ke,
        className: j(xe, f, i && "slide", fe && `${f}-fade`, G && `${f}-${G}`),
        children: [D && c.jsx("div", {
            className: `${f}-indicators`,
            children: oe(H, (e, t) => c.jsx("button", {
                type: "button",
                "data-bs-target": "",
                "aria-label": M != null && M.length ? M[t] : `Slide ${t+1}`,
                className: t === o ? "active" : void 0,
                onClick: re ? re[t] : void 0,
                "aria-current": t === o
            }, t))
        }), c.jsx("div", {
            className: `${f}-inner`,
            children: oe(H, (e, t) => {
                const m = t === o;
                return i ? c.jsx(_e, { in: m,
                    onEnter: m ? be : void 0,
                    onEntered: m ? ye : void 0,
                    addEndListener: Xe,
                    children: (g, we) => n.cloneElement(e, { ...we,
                        className: j(e.props.className, m && g !== "entered" && Ee, (g === "entered" || g === "exiting") && "active", (g === "entering" || g === "exiting") && Re)
                    })
                }) : n.cloneElement(e, {
                    className: j(e.props.className, m && "active")
                })
            })
        }), me && c.jsxs(c.Fragment, {
            children: [(I || p !== 0) && c.jsxs(le, {
                className: `${f}-control-prev`,
                onClick: u,
                children: [he, B && c.jsx("span", {
                    className: "visually-hidden",
                    children: B
                })]
            }), (I || p !== v - 1) && c.jsxs(le, {
                className: `${f}-control-next`,
                onClick: d,
                children: [pe, z && c.jsx("span", {
                    className: "visually-hidden",
                    children: z
                })]
            })]
        })]
    })
});
de.displayName = "Carousel";
const Ke = Object.assign(de, {
    Caption: ie,
    Item: ue
});
export {
    Ke as C
};