<template>
  <div class="category">
    <page-search
      :searchConfig="searchConfigRef"
      @btnSearch="handlerSearch"
      @btnReset="handlerReset"
    ></page-search>
    <page-content
      :ContentConfig="ContentConfig"
      :pageName="pageName"
      ref="pageContentRef"
      creatName="新建类别"
      @newBtnClick="handlerNewData"
      @editBtnClick="handlerEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :pageName="pageName"
      :modalConfig="modalConfig"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageContent from '@/components/page-content'
import { PageSearch } from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { ContentConfig } from './config/page-content.config'
import { searchConfig } from './config/search.config'
import { modalConfig } from './config/modal-config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'category',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const pageName = 'category'
    const store = useStore()
    const searchConfigRef = computed(() => {
      const nameItem = searchConfig.formItems.find(
        (item) => item.field === 'name'
      )
      nameItem!.options = store.state.entireCategory.map((item) => {
        return { title: item.name, value: item.name }
      })
      return searchConfig
    })

    const [pageContentRef, handlerReset, handlerSearch] = usePageSearch()
    const [pageModalRef, defaultInfo, handlerNewData, handlerEditData] =
      usePageModal(undefined, undefined)
    return {
      pageName,
      ContentConfig,
      searchConfigRef,
      pageContentRef,
      handlerReset,
      handlerSearch,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handlerNewData,
      handlerEditData
    }
  }
})
</script>

<style scoped></style>
