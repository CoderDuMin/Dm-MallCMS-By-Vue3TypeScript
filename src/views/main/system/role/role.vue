<template>
  <div class="role">
    <page-search
      :searchConfig="searchConfig"
      @btnReset="handleResetClick"
      @btnSearch="handleQueryClick"
    ></page-search>
    <page-content
      :ContentConfig="ContentConfig"
      :pageName="pageName"
      creatName="新建角色"
      ref="pageContentRef"
      @newBtnClick="handlerNewData"
      @editBtnClick="handlerEditData"
    ></page-content>
    <page-model
      ref="pageModalRef"
      :pageName="pageName"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalConfig="modalConfig"
    >
      <el-tree
        ref="elTreeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="checkChange"
      />
    </page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { ElTree } from 'element-plus'

import { searchConfig } from './config/search.config'
import { ContentConfig } from './config/page-content.config'
import { modalConfig } from './config/modal-config'

import { PageSearch } from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-modal'

import { usePageModal } from '@/hooks/use-page-modal'
import { usePageSearch } from '@/hooks/use-page-search'

import { useStore } from '@/store'
import { mapMenuToLeafNodes } from '@/utils/map-menus'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    const pageName = 'role'
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      console.log(item.menuList)
      const nums = mapMenuToLeafNodes(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(nums, false)
      })
    }
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, handlerNewData, handlerEditData] =
      usePageModal(undefined, editCallback)

    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    const otherInfo = ref({})
    const checkChange = (data1: any, data2: any) => {
      const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      pageName,
      searchConfig,
      ContentConfig,
      modalConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      pageModalRef,
      defaultInfo,
      handlerNewData,
      handlerEditData,
      menus,
      checkChange,
      otherInfo,
      elTreeRef
    }
  }
})
</script>

<style scoped></style>
