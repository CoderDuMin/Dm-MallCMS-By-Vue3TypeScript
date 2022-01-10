<template>
  <div class="user">
    <page-search
      :searchConfig="searchConfig"
      @btnReset="handleResetClick"
      @btnSearch="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :ContentConfig="ContentConfig"
      :pageName="pageName"
      creatName="新建用户"
      @newBtnClick="handlerNewData"
      @editBtnClick="handlerEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      title="新建用户"
      :pageName="pageName"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useStore } from '@/store'

import { searchConfig } from './config/search.config'
import { ContentConfig } from './config/page-content.config'
import { modalConfig } from './config/modal-config'

import { PageSearch } from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const pageName = 'users'
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // pageModal相关的hook逻辑
    // 1.处理密码的逻辑
    const newCallback = () => {
      const item = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (item) {
        item.isHidden = false
      }
    }
    const editCallback = () => {
      const item = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (item) {
        item.isHidden = true
      }
    }

    //2.动态添加部门和角色列表
    const store = useStore()
    // const modalConfigRef=comp()
    const modalConfigRef = computed(() => {
      const departItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      departItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    // 3.调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, handlerNewData, handlerEditData] =
      usePageModal(newCallback, editCallback)

    return {
      searchConfig,
      ContentConfig,
      pageName,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfigRef,
      pageModalRef,
      defaultInfo,
      handlerNewData,
      handlerEditData
    }
  }
})
</script>

<style scoped lang="less"></style>
