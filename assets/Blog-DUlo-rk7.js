import {
    j as s,
    L as r,
    S as c
} from "./index-6NHkQpqh.js";
const t = d => {
    var l;
    return s.jsx(s.Fragment, {
        children: (l = d.blogs) == null ? void 0 : l.map((a, e) => s.jsx("div", {
            className: "col-lg-3 col-md-4 col-sm-6 col-12 mb-3",
            children: s.jsx(r, {
                className: "text-dark text-decoration-none",
                to: `/blog-details/${a.slug}`,
                children: s.jsx("div", {
                    className: "blog-card",
                    children: s.jsxs("div", {
                        className: "card",
                        children: [s.jsx("img", {
                            src: a.image,
                            className: "card-img-top",
                            alt: ""
                        }), s.jsxs("div", {
                            className: "card-title d-flex pt-2 mb-0",
                            children: [s.jsxs("span", {
                                className: "date",
                                children: [a.day, " ", s.jsx("br", {}), a.month]
                            }), s.jsx("h5", {
                                className: "text-dark",
                                children: c(a.title, 40)
                            })]
                        }), s.jsx("div", {
                            className: "card-body p-2",
                            children: c(a.short_description, 80)
                        })]
                    })
                })
            })
        }, e))
    })
};
export {
    t as B
};