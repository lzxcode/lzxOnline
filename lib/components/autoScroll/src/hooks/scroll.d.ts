import { Ref } from "vue";
type Scroll = (content: HTMLElement, body: HTMLElement, scrollItem: HTMLElement, count: Ref, scroolItemHeight: Ref, speed: Ref) => void;
declare const _default: {
    autoScroll: Scroll;
};
export default _default;
