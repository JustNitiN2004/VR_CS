import {
    q as S,
    b as k,
    k as I,
    r as t,
    A as d,
    j as s,
    L as m,
    S as L,
    s as x,
    t as u,
    v as g,
    B as p
} from "./index-6NHkQpqh.js";
import {
    B
} from "./Banner-EOL6SbVn.js";
const H = () => {
    const c = S(),
        h = k(),
        j = "./img/image-not-found.jpg",
        {
            token: r
        } = I(e => e.user),
        [o, N] = t.useState([]),
        [f, v] = t.useState([]),
        [i, b] = t.useState(1),
        [y, w] = t.useState(1),
        [n, l] = t.useState({
            pageNo: 1,
            limit: 12,
            orderAs: 1,
            search: null,
            category: null
        });
    t.useEffect(() => {
        (async () => {
            var {
                data: e
            } = await d.getData("customer/categories");
            e.status === !0 && v(e.data)
        })()
    }, []), t.useEffect(() => {
        (async () => {
            var {
                data: e
            } = await d.getData("customer/products", n);
            e.status === !0 && (N(e.data.products), b(e.data.pageNo), w(parseInt(e.data.totalPage)))
        })()
    }, [n]);
    const P = e => {
            r ? c(u({
                product_id: e
            })).then(() => {
                h("/cart")
            }) : (c(g()), p.error("Please Login first."))
        },
        C = e => {
            r ? c(u({
                product_id: e
            })) : (c(g()), p.error("Please Login first."))
        };
    return s.jsxs(s.Fragment, {
        children: [s.jsx(B, {
            title: "Our Services"
        }), s.jsx("section", {
            children: s.jsxs("div", {
                className: "container-lg py-5",
                children: [s.jsxs("div", {
                    className: "row",
                    children: [s.jsx("div", {
                        className: "col-lg-3 col-md-3 col-sm-3 mb-4",
                        children: s.jsx("input", {
                            type: "text",
                            placeholder: "Search",
                            className: "form-control",
                            onChange: e => {
                                l(a => ({ ...a,
                                    search: e.target.value
                                }))
                            }
                        })
                    }), s.jsx("div", {
                        className: "col-xl-3 col-lg-3 col-md-3 col-sm-3 mb-4 ms-auto",
                        children: s.jsxs("select", {
                            className: "form-select form-select",
                            onChange: e => {
                                l(a => ({ ...a,
                                    category: e.target.value
                                }))
                            },
                            children: [s.jsx("option", {
                                value: "",
                                children: "All Category"
                            }), f.map(e => s.jsx("option", {
                                value: e.id,
                                children: e.name
                            }, e.id))]
                        })
                    }), s.jsx("div", {
                        className: "col-xl-2 col-lg-3 col-md-3 col-sm-3 mb-4",
                        children: s.jsxs("select", {
                            className: "form-select form-select",
                            onChange: e => {
                                l(a => ({ ...a,
                                    orderAs: e.target.value
                                }))
                            },
                            children: [s.jsx("option", {
                                value: 4,
                                children: "Newest"
                            }), s.jsx("option", {
                                value: 1,
                                children: "Low to High Price"
                            }), s.jsx("option", {
                                value: 2,
                                children: "High to Low Price"
                            }), s.jsx("option", {
                                value: 3,
                                children: "Most Viewed"
                            })]
                        })
                    })]
                }), s.jsxs("div", {
                    className: "row products",
                    children: [o.map((e, a) => s.jsx("div", {
                        className: "col-lg-3 col-md-4 col-sm-6 mb-4",
                        children: s.jsxs("div", {
                            className: "card",
                            children: [s.jsx(m, {
                                to: `/product/${e.slug}`,
                                children: s.jsx("img", {
                                    src: e.main_image.image || j,
                                    className: "card-img-top p-4 aspect-ratio-1 h-100",
                                    style: {
                                        borderBottom: "1px solid #e0e6ed"
                                    },
                                    alt: ""
                                })
                            }), s.jsxs("div", {
                                className: "row card-footer h-100 border-top-0 p-2",
                                children: [s.jsx("div", {
                                    className: "col-12 mb-2",
                                    style: {
                                        minHeight: 48
                                    },
                                    children: s.jsx(m, {
                                        className: "text-decoration-none",
                                        to: `/product/${e.slug}`,
                                        children: s.jsx("small", {
                                            className: "text-dark",
                                            children: L(e.name, 55)
                                        })
                                    })
                                }), s.jsx("div", {
                                    className: "col-12 align-self-end",
                                    children: s.jsxs("div", {
                                        className: "row",
                                        children: [s.jsx("div", {
                                            className: "col-xl-5 col-xl-5 col-12",
                                            children: s.jsxs("div", {
                                                className: "pricing d-flex",
                                                children: [s.jsx("span", {
                                                    className: "text-success mt-1",
                                                    children: "₹"
                                                }), s.jsx("span", {
                                                    className: "text-success fs-4",
                                                    children: e.price
                                                }), s.jsx("del", {
                                                    className: "mt-auto fs--1 mb-1 ms-2",
                                                    children: e.mrp
                                                })]
                                            })
                                        }), s.jsx("div", {
                                            className: "col-xl-7 col-xl-7 col-12",
                                            children: s.jsxs("div", {
                                                className: "d-flex gap-1 justify-content-end",
                                                children: [s.jsx("button", {
                                                    className: "btn btn-outline-info btn-sm py-1",
                                                    onClick: () => C(e.id),
                                                    children: s.jsx("i", {
                                                        className: "fa-solid fa-cart-plus"
                                                    })
                                                }), s.jsx("button", {
                                                    "data-product-id": 3,
                                                    className: "btn btn-outline-primary btn-sm py-1",
                                                    onClick: () => P(e.id),
                                                    children: "Buy Now"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    }, a)), o && o.length === 0 ? s.jsx("h6", {
                        className: "text-danger text-center",
                        children: " No Product Found "
                    }) : s.jsxs("div", {
                        className: "col-lg-12 col-md-12  d-flex justify-content-center align-items-center gap-2",
                        children: [s.jsxs(x, {
                            className: "min-w-150",
                            onClick: () => {
                                l(e => ({ ...e,
                                    pageNo: parseInt(e.pageNo) - 1
                                }))
                            },
                            variant: "outline-primary",
                            disabled: parseInt(i) === 1,
                            children: [s.jsx("i", {
                                className: "fa-solid fa-angles-left me-1"
                            }), "Previous"]
                        }), s.jsxs(x, {
                            className: "min-w-150",
                            onClick: () => {
                                l(e => ({ ...e,
                                    pageNo: parseInt(e.pageNo) + 1
                                }))
                            },
                            variant: "outline-primary",
                            disabled: parseInt(i) === parseInt(y),
                            children: ["Next", s.jsx("i", {
                                className: "fa-solid fa-angles-right ms-1"
                            })]
                        })]
                    })]
                })]
            })
        })]
    })
};
export {
    H as
    default
};