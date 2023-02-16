<template>
  <div>{{ test1.lzx }}</div>
  <el-button type="primary" @click="click">hahahha1234</el-button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, watch } from 'vue'
import { test } from './abc'
export default defineComponent({
  props: {
    aaa: {
      type: Object,
      default: () => ({ a: 1 })
    }
  },
  setup(props) {
    //不写类型会自动推导
    // ref() 不写就是any
    // let component = ref() 然后在templete上加ref setup返回  然后就可以component.value拿到组件实例
    const ab = reactive({ lzx: 'lzx' })
    const ab1 = reactive({ ...ab })
    const test1 = ref(test)
    function click() {
      test1.value.lzx = 'lzx1234345676'
    }
    ab.lzx = '1234567'
    onMounted(() => {
      console.log(ab, ab1)
    })
    watch(
      () => props.aaa,
      (newV, O) => {
        console.log(newV.lzx, O)
      },
      {
        deep: true
      }
    )
    return { test1, click }
  }
})
</script>

<style scoped></style>
