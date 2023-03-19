import { defineComponent as s, ref as n, onMounted as f, createVNode as e, Fragment as g } from "vue";
import "./style.scss.mjs";
import y from "./hooks/scroll.mjs";
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
  setup(t, {
    slots: o
  }) {
    let {
      autoScroll: a
    } = y;
    const u = n(0), i = n(3);
    let d, c, l;
    const m = n(0);
    return f(() => {
      d = document.getElementById("content"), c = document.getElementById("body"), l = document.getElementsByClassName("scrollItem")[0], console.log(t.mode, 123456), m.value = l.offsetHeight, t.mode == "auto" && a(d, c, l, u, m, i);
    }), () => {
      var r;
      return e(g, null, [e("div", {
        id: "content",
        class: "content",
        style: {
          height: `${t.height}px`,
          overflow: "hidden"
        }
      }, [e("div", {
        id: "body",
        class: "body"
      }, [e("div", {
        class: "scrollItem"
      }, [(r = o.default) == null ? void 0 : r.call(o)])])])]);
    };
  }
});
export {
  b as default
};
//# sourceMappingURL=autoScroll.mjs.map
