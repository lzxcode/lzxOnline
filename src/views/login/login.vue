<template>
  <comps :aaa="aaa"></comps>
  <el-button type="primary" @click="click">hahahha</el-button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue'
import comps from './comps.vue'
export default defineComponent({
  components: {
    comps
  },
  setup(props) {
    //不写类型会自动推导
    const aaa = { lzx: { asd: 'lzx' } }
    // ref() 不写就是any
    // let component = ref() 然后在templete上加ref setup返回  然后就可以component.value拿到组件实例
    function click() {
      aaa.lzx.asd = 'lzx1234'
    }

    return { aaa, click }
  }
})
</script>

<style scoped></style>
