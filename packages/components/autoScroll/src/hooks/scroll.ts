import { Ref } from "vue";
type Scroll = (
  content: HTMLElement,
  body: HTMLElement,
  scrollItem: HTMLElement,
  count: Ref,
  scroolItemHeight: Ref,
  speed: Ref
) => void;
const autoScroll: Scroll = function (
  content,
  body,
  scrollItem,
  count,
  scroolItemHeight,
  speed
) {
  window.requestAnimationFrame(function scroll() {
    if (!body.lastChild) throw new Error("没有滚动元素");
    if (
      body.offsetHeight < content.offsetHeight ||
      (body.lastChild as HTMLElement).offsetTop < content.offsetHeight
    ) {
      body.appendChild(scrollItem.cloneNode(true));
    }
    if (body.firstChild && Math.abs(body.offsetTop) >= scroolItemHeight.value) {
      count.value = Math.abs(body.offsetTop) - scroolItemHeight.value;
      body.removeChild(body.firstChild);
    }
    count.value = count.value - speed.value;
    body.style.setProperty("margin-top", `${count.value}px`);
    window.requestAnimationFrame(scroll)
  });
};

export default {
  autoScroll,
};
