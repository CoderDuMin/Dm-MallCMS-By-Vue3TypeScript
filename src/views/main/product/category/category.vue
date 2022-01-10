<template>
  <div class="category">
    <page-search
      :searchConfig="searchConfig"
      @btnSearch="handlerSearch"
      @btnReset="handlerReset"
    ></page-search>
    <page-content
      :ContentConfig="ContentConfig"
      :pageName="pageName"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import { PageSearch } from '@/components/page-search'

import { ContentConfig } from './config/page-content.config'
import { searchConfig } from './config/search.config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'category',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    const pageName = 'category'
    const [pageContentRef, handlerReset, handlerSearch] = usePageSearch()
    return {
      pageName,
      ContentConfig,
      searchConfig,
      pageContentRef,
      handlerReset,
      handlerSearch
    }
  }
})
</script>

<style scoped></style>
