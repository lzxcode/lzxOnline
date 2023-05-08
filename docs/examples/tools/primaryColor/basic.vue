<template>
  <div
    class="color"
    @drop="drag"
    @dragenter="ignoreDrag"
    @dragover="ignoreDrag"
    :style="{ backgroundColor: `rgb(${backgroundColor})` }"
  >
    将图片拖入，背景色为主颜色
  </div>
</template>

<script lang="ts" setup>
import { readFile } from "fs";
import { ref } from "vue";
import colorFun from "./primaryColor";
function ignoreDrag(event) {
  event.stopPropagation(); 
  event.preventDefault();
}
let backgroundColor = ref("");
function drag(event) {
  event.stopPropagation();
  event.preventDefault();
  var data = event.dataTransfer;
  var files = data.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(files);
  readFile.onload = function (e) {
    colorFun(e.target!.result as string).then((res) => {
      backgroundColor.value = res;
    });
  };
}
</script>

<style>
.color {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}
</style>
