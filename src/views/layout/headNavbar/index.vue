<template>
  <div class="headNavbarPlaceHolder"></div>
  <div class="headNavbar" id="headNavbar">
    <img
      class="headImg"
      src="@/assets/headImg.png"
      alt="背景"
      @click="imgClick"
    />
  </div>
</template>

<script setup lang="ts">
function imgClick() {
  document.getElementById("headNavbar")?.classList.toggle("full");
}
</script>

<style scoped lang="scss">
$heigth:16%;
.headNavbarPlaceHolder {
  height: $heigth;
}
.headNavbar {
  height: $heigth;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  .headImg {
    width: 100%;
  }
  transition: height 1s;
}
.full {
  height: 100%;
}
</style>
