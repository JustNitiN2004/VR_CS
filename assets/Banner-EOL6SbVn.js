import {
    j as e,
    L as l
} from "./index-6NHkQpqh.js";
const t = ({
    title: a = "",
    banner: n = "../img/page-tile.jpg",
    service: c,
    blogs: s
}) => e.jsx("section", {
    className: "contact-us bg-dark contactback",
    style: {
        backgroundImage: `url(${n})`,
        backgroundRepeat: "no-repeat"
    },
    children: e.jsxs("div", {
        className: "container-fluid banner-breadcrumb",
        children: [e.jsx("div", {
            className: "col-12 text-center",
            children: e.jsx("h3", {
                className: "text-white",
                children: a
            })
        }), e.jsx("div", {
            className: "col-12 text-center",
            children: e.jsx("img", {
                src: "img/line.png",
                alt: "",
                className: "pt-2"
            })
        }), e.jsx("div", {
            className: "col-12 mt-3",
            children: e.jsx("nav", {
                "aria-label": "breadcrumb",
                children: e.jsxs("ol", {
                    className: "breadcrumb d-flex justify-content-center",
                    children: [e.jsx("li", {
                        className: "breadcrumb-item",
                        children: e.jsx(l, {
                            to: "/home",
                            className: "orange text-decoration-none",
                            children: "Home"
                        })
                    }), s ? e.jsx("li", {
                        className: "breadcrumb-item",
                        children: e.jsx(l, {
                            to: "/Blogs",
                            className: "orange text-decoration-none",
                            children: "Blogs"
                        })
                    }) : null, null, !c || !s ? e.jsx("li", {
                        className: "breadcrumb-item active text-white",
                        "aria-current": "page",
                        children: a
                    }) : null]
                })
            })
        })]
    })
});
export {
    t as B
};