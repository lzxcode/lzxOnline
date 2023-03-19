import { ref, onMounted, defineProps, defineComponent } from "vue";
import "./style.scss"
import scroll from "./hooks/scroll";
const autoScroll = defineComponent({
  name: "autoScroll",
  props: {
    mode: {
      type: String,
      default: "auto",
    },
    height: {
      type: Number,
      default: 200,
    },
  },
  setup(props, { slots }) {
    let { autoScroll } = scroll;
    const count = ref(0);
    const speed = ref(3);
    let content: HTMLElement;
    let body: HTMLElement;
    let scrollItem: HTMLElement;
    const scroolItemHeight = ref(0);
    onMounted(() => {
      content = document.getElementById("content")!;
      body = document.getElementById("body")!;
      scrollItem = document.getElementsByClassName("scrollItem")[0] as HTMLElement;

      // scroolItemHeight 记录高度 因为removeChild DOM之后 DOM依旧被引用会存在 但是高度缺变化为0了
      console.log(props.mode, 123456);

      scroolItemHeight.value = scrollItem.offsetHeight;
      if (props.mode == "auto") {
        autoScroll(content, body, scrollItem, count, scroolItemHeight, speed);
      }
    });

    return () => (
      <>
        <div
          id="content"
          class="content"
          style={{ height: `${props.height}px`, overflow: 'hidden' }}
        >
          <div id="body" class="body">
            <div class="scrollItem">
              {slots.default?.()}
            </div>
          </div>
        </div >
      </>
    )
  }
})

export default autoScroll

