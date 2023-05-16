<template>
  <div v-for="(menu, index) in menuList">
    {{ menu.theme }}
  </div>
</template>

<script setup lang="ts">
import { getMenu } from "@/network/system/menu";
import { reactive, ref } from "vue";

type menuItem = {
  theme: string;
  _id: string;
};

let menuList = ref<menuItem[]>([]);
getMenu().then((res) => {
  menuList.value = res.data;
});
</script>

<style scoped lang="sass"></style>
