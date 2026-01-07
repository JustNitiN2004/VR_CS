import {
    j as e,
    L as l
} from "./index-6NHkQpqh.js";
const d = ({
    services: r = []
}) => {
    var a;
    return e.jsx(e.Fragment, {
        children: (a = r.reverse()) == null ? void 0 : a.map((s, c) => e.jsx("div", {
            className: "col-lg-3 col-md-6 my-2 ",
            children: e.jsxs("div", {
                className: "card",
                children: [e.jsx("img", {
                    src: s.image,
                    className: "fluid-img card-img-top",
                    alt: s.name
                }), e.jsxs("h5", {
                    className: "card-title text-dark",
                    children: [" ", s.name, " "]
                }), e.jsx(l, {
                    className: "text-decoration-none",
                    to: `/service-details/${s.slug}`,
                    children: "Read More"
                })]
            })
        }, c))
    })
};
export {
    d as S
};