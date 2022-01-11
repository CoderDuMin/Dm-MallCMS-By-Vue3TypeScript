<template>
  <div class="menu">
    <page-content
      :ContentConfig="ContentConfig"
      pageName="menu"
      creatName="新建菜单"
      @newBtnClick="handlerNewData"
      @editBtnClick="handlerEditData"
    ></page-content>
    <page-modal
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="menu"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { ContentConfig } from './config/page-content.config'
import { modalConfig } from './config/modal-config'

import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'dmmenu',
  components: {
    PageContent,
    PageModal
  },
  setup() {
    // 调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, handlerNewData, handlerEditData] =
      usePageModal(undefined, undefined)
    const store = useStore()
    const modalConfigRef = computed(() => {
      const partentItem = modalConfig.formItems.find(
        (item) => item.field === 'parentId'
      )
      partentItem!.options = store.state.entireMenu.map((item) => {
        if (item.type === 1) {
          return { title: item.name, value: item.id }
        }
      })
      return modalConfig
    })

    return {
      ContentConfig,
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
