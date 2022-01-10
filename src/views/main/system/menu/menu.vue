<template>
  <div class="menu">
    <page-content
      :ContentConfig="ContentConfig"
      pageName="menu"
      creatName="新建菜单"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { ContentConfig } from './config/page-content.config'
export default defineComponent({
  name: 'dmmenu',
  components: {
    PageContent
  },
  setup() {
    return {
      ContentConfig
    }
  }
})
</script>

<style scoped></style>
