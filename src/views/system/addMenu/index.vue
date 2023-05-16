<template>
  <div>
    <el-input v-model="params.theme" placeholder=""></el-input>
    <el-button type="primary" @click="add">增加</el-button>

    <el-input v-model="id" placeholder=""></el-input>
    <el-button type="primary" @click="remove">删除</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { addMenu, deleteMenu } from "@/network/system/menu";
type params = {
  theme: string;
};
const params = reactive<params>({ theme: "" });

let id = ref("");

function add() {
  addMenu(params).then((res) => {
    console.log(res.message);
  });
}

function remove() {
  deleteMenu({ theme: id.value }).then((res) => {
    console.log(res.message);
  });
}
</script>

<style scoped lang="sass"></style>
