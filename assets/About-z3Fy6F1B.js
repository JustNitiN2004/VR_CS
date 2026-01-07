import {
    r as s,
    A as i,
    j as t
} from "./index-6NHkQpqh.js";
import {
    B as n
} from "./Banner-EOL6SbVn.js";
const u = () => {
    const [a, r] = s.useState({
        title: "",
        description: "",
        image: ""
    });
    return s.useEffect(() => {
        (async () => {
            var {
                data: e
            } = await i.getData("cms/5");
            e.status === !0 && r(e.data)
        })()
    }, []), t.jsxs(t.Fragment, {
        children: [t.jsx(n, {
            title: "About"
        }), a.description ? t.jsx("div", {
            dangerouslySetInnerHTML: {
                __html: a.description
            }
        }) : null]
    })
};
export {
    u as
    default
};