import "./autoScroll/index.mjs";
import c from "./autoScroll/src/autoScroll.mjs";
const n = [c], m = (t) => {
  n.map((o) => {
    t.component(o.name, o);
  });
}, a = {
  install: m,
  ...n
};
export {
  a as default
};
//# sourceMappingURL=index.mjs.map
