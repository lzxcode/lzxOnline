import {
  Fragment,
  createVNode,
  defineComponent,
  onMounted,
  ref
} from "./chunk-B7UOCPZH.js";

// node_modules/lzooxyue/es/components/autoScroll/src/hooks/scroll.mjs
var r = function(l, e2, i, t, a2, f) {
  window.requestAnimationFrame(function s() {
    if (!e2.lastChild)
      throw new Error("没有滚动元素");
    (e2.offsetHeight < l.offsetHeight || e2.lastChild.offsetTop < l.offsetHeight) && e2.appendChild(i.cloneNode(true)), e2.firstChild && Math.abs(e2.offsetTop) >= a2.value && (t.value = Math.abs(e2.offsetTop) - a2.value, e2.removeChild(e2.firstChild)), t.value = t.value - f.value, e2.style.setProperty("margin-top", `${t.value}px`), window.requestAnimationFrame(s);
  });
};
var o = {
  autoScroll: r
};

// node_modules/lzooxyue/es/components/autoScroll/src/autoScroll.mjs
var b = defineComponent({
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
    slots: o2
  }) {
    let {
      autoScroll: a2
    } = o;
    const u = ref(0), i = ref(3);
    let d, c, l;
    const m2 = ref(0);
    return onMounted(() => {
      d = document.getElementById("content"), c = document.getElementById("body"), l = document.getElementsByClassName("scrollItem")[0], console.log(t.mode, 123456), m2.value = l.offsetHeight, t.mode == "auto" && a2(d, c, l, u, m2, i);
    }), () => {
      var r2;
      return createVNode(Fragment, null, [createVNode("div", {
        id: "content",
        class: "content",
        style: {
          height: `${t.height}px`,
          overflow: "hidden"
        }
      }, [createVNode("div", {
        id: "body",
        class: "body"
      }, [createVNode("div", {
        class: "scrollItem"
      }, [(r2 = o2.default) == null ? void 0 : r2.call(o2)])])])]);
    };
  }
});

// node_modules/lzooxyue/es/components/autoScroll/index.mjs
b.install = (t) => {
  t.component(b.name, b);
};

// node_modules/lzooxyue/es/components/index.mjs
var n = [b];
var m = (t) => {
  n.map((o2) => {
    t.component(o2.name, o2);
  });
};
var a = {
  install: m,
  ...n
};

// node_modules/lzooxyue/es/index.mjs
var n2 = (o2) => {
  o2.use(a);
};
var e = {
  install: n2
};
export {
  e as default
};
//# sourceMappingURL=lzooxyue.js.map
