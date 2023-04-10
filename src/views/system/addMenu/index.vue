<template>
  <div>
    <el-input v-model="params.theme" placeholder=""></el-input>
    <el-input
      v-model="params.content"
      type="textarea"
      placeholder=""
    ></el-input>
    <el-button type="primary" @click="add">增加</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { getMenu } from "@/network/system/menuAdd";
type params = {
  theme: string;
  content: string;
};
const params: params = reactive({ theme: "", content: "" });

function add() {
  getMenu(params).then((res) => {
    console.log(res.message);
  });
}

</script>

<style scoped lang="sass"></style>
