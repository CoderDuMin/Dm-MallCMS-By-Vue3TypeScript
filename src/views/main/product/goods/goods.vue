<template>
  <div class="goods">
    <page-search :searchConfig="searchConfig"></page-search>
    <page-content :ContentConfig="ContentConfig" pageName="goods">
      <template #imgUrl="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="1"
        >
        </el-image>
      </template>
      <template #oldPrice="scope"> {{ '¥' + scope.row.oldPrice }} </template>
      <template #status="scope">
        <el-button plain :type="scope.row.status == 1 ? 'success' : 'danger'">{{
          scope.row.status === 1 ? '启用' : '禁用'
        }}</el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import { PageSearch } from '@/components/page-search'

import { ContentConfig } from './config/page-content.config'
import { searchConfig } from './config/search.config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return {
      ContentConfig,
      searchConfig
    }
  }
})
</script>

<style scoped></style>
