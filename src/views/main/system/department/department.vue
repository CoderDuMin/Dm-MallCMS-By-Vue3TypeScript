<template>
  <div class="department">
    <page-search
      :searchConfig="searchConfig"
      @btnReset="handlerReset"
      @btnSearch="handlerSearch"
    ></page-search>
    <page-content
      :ContentConfig="ContentConfig"
      :pageName="pageName"
      creatName="新建部门"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { PageSearch } from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchConfig } from './config/search.config'
import { ContentConfig } from './config/page-content.config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const pageName = 'department'
    const [pageContentRef, handlerReset, handlerSearch] = usePageSearch()
    return {
      pageName,
      searchConfig,
      ContentConfig,
      pageContentRef,
      handlerReset,
      handlerSearch
    }
  }
})
</script>

<style scoped></style>
