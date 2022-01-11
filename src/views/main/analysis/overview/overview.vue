<template>
  <div class="overview">
    <dm-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </dm-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DmCard from '@/base-ui/card'

export default defineComponent({
  name: 'overview',
  components: {
    DmCard
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.c-left {
  text-align: left;
}
</style>
