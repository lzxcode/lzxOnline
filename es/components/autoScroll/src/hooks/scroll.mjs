const r = function(l, e, i, t, a, f) {
  window.requestAnimationFrame(function s() {
    if (!e.lastChild)
      throw new Error("没有滚动元素");
    (e.offsetHeight < l.offsetHeight || e.lastChild.offsetTop < l.offsetHeight) && e.appendChild(i.cloneNode(!0)), e.firstChild && Math.abs(e.offsetTop) >= a.value && (t.value = Math.abs(e.offsetTop) - a.value, e.removeChild(e.firstChild)), t.value = t.value - f.value, e.style.setProperty("margin-top", `${t.value}px`), window.requestAnimationFrame(s);
  });
}, o = {
  autoScroll: r
};
export {
  o as default
};
//# sourceMappingURL=scroll.mjs.map
