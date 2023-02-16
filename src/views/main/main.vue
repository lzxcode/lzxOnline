<template>
  <div>main {{ aaa.ID }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userInfo } from '@/store/index'
export default defineComponent({
  setup() {
    let aaa = userInfo()
    return { aaa }
  }
})
</script>

<style scoped></style>
