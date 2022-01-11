<template>
  <div class="goods">
    <page-search
      :searchConfig="searchConfig"
      @btnReset="handleResetClick"
      @btnSearch="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :ContentConfig="ContentConfig"
      pageName="goods"
      creatName="上架商品"
      @newBtnClick="handlerNewData"
      @editBtnClick="handlerEditData"
    >
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
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="goods"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import { PageSearch } from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { ContentConfig } from './config/page-content-config'
import { searchConfig } from './config/search.config'
import { modalConfig } from './config/modal-config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, handlerNewData, handlerEditData] =
      usePageModal(undefined, undefined)
    return {
      ContentConfig,
      searchConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
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
