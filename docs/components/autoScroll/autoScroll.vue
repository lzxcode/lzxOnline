<template>
  <view id="content" class="content" :style="{height:`${height}px`,overflow: 'hidden'}">
    <view id="body" class="body">
      <view class="scrollItem">
        <slot />
      </view>
    </view>
  </view>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
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
  data() {
    return {
      count: 0,
      speed: 3,
      content: null,
      body: null,
      scrollItem: null,
      scroolItemHeight: 0,
    };
  },
  mounted() {
    this.content = document.getElementById("content");
    this.body = document.getElementById("body");
    this.scrollItem = document.getElementsByClassName("scrollItem")[0];

    // scroolItemHeight 记录高度 因为removeChild DOM之后 DOM依旧被引用会存在 但是高度缺变化为0了
    this.scroolItemHeight = this.scrollItem.offsetHeight;
    if (this.mode == "auto") {
      this.autoScroll();
    }
  },
  methods: {
    autoScroll() {
      if (
        this.body.offsetHeight < this.content.offsetHeight ||
        this.body.lastChild.offsetTop < this.content.offsetHeight
      ) {
        this.body.appendChild(this.scrollItem.cloneNode(true));
      }
      if (Math.abs(this.body.offsetTop) >= this.scroolItemHeight) {
        this.count = Math.abs(this.body.offsetTop) - this.scroolItemHeight;
        this.body.removeChild(this.body.firstChild);
      }
      this.count = this.count - this.speed;
      this.body.style.setProperty("margin-top", `${this.count}px`);
      
      window.requestAnimationFrame(this.autoScroll);
    },
  },
}) 
</script>

<style>
.content {
  position: relative;
  display: block;
}
.body {
  display: block;
  position: relative;
}
</style>
