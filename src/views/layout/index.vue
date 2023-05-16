<template>
  <div class="content">
    <headNavbar></headNavbar>
    <menuNavbar></menuNavbar>
    <router-view></router-view>
  </div>
  <i class="life-bianxie bottom_right circle" @click="addMenu"></i>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import getOsInfo from "@/utils/system/getOs";
import headNavbar from "./headNavbar/index.vue";
import menuNavbar from "./menu/index.vue";

let router = useRouter();
function addMenu() {
  router.push("/system/addMenu");
}
</script>

<style scoped lang="scss">
.content {
  height: 100%;
  position: relative;
}
.circle {
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: table;
  text-align: center;
  background-color: rgb(243, 204, 157);
}
.circle::before {
  display: table-cell;
  vertical-align: middle;
  font-size: 20px;
}
</style>
