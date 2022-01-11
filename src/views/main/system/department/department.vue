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
      @editBtnClick="handlerEditData"
      @newBtnClick="handlerNewData"
    ></page-content>
    <page-modal
      :pageName="pageName"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { PageSearch } from '@/components/page-search'
import PageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'

import { searchConfig } from './config/search.config'
import { ContentConfig } from './config/page-content.config'
import { modalConfig } from './config/modal-config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'

export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageContent,
    pageModal
  },
  setup() {
    const pageName = 'department'
    const store = useStore()
    const modalConfigRef = computed(() => {
      const partentItem = modalConfig.formItems.find(
        (item) => item.field === 'parentId'
      )
      partentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    const [pageContentRef, handlerReset, handlerSearch] = usePageSearch()
    const [pageModalRef, defaultInfo, handlerNewData, handlerEditData] =
      usePageModal(undefined, undefined)
    return {
      pageName,
      searchConfig,
      ContentConfig,
      pageContentRef,
      handlerReset,
      handlerSearch,
      modalConfigRef,
      pageModalRef,
      defaultInfo,
      handlerNewData,
      handlerEditData
    }
  }
})
</script>

<style scoped></style>
