import { defineComponent as s, ref as l, onMounted as f, createVNode as e, Fragment as g } from "vue";
import "./style.scss.mjs";
import p from "./hooks/scroll.mjs";
const b = s({
  name: "autoScroll",
  props: {
    mode: {
      type: String,
      default: "auto"
    },
    height: {
      type: Number,
      default: 200
    }
  },
  setup(n, {
    slots: t
  }) {
    let {
      autoScroll: a
    } = p;
    const u = l(0), i = l(3);
    let d, c, o;
    const m = l(0);
    return f(() => {
      d = document.getElementById("content"), c = document.getElementById("body"), o = document.getElementsByClassName("scrollItem")[0], m.value = o.offsetHeight, n.mode == "auto" && a(d, c, o, u, m, i);
    }), () => {
      var r;
      return e(g, null, [e("div", {
        id: "content",
        class: "content",
        style: {
          height: `${n.height}px`,
          overflow: "hidden"
        }
      }, [e("div", {
        id: "body",
        class: "body"
      }, [e("div", {
        class: "scrollItem"
      }, [(r = t.default) == null ? void 0 : r.call(t)])])])]);
    };
  }
});
export {
  b as default
};
//# sourceMappingURL=autoScroll.mjs.map
