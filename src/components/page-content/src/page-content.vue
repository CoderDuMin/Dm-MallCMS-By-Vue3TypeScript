<template>
  <div class="page-content">
    <dm-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="ContentConfig"
      v-model:page="page"
      @selectionChange="selectionChange"
    >
      <!-- header -->
      <template #headerHandler>
        <div class="header-handler">
          <el-button v-if="isCreate" @click="handlerNewClick">{{
            creatName
          }}</el-button>
          <!-- <el-button icon="Refresh"></el-button> -->
        </div>
      </template>
      <!-- 列 -->
      <template #enable="scope">
        <el-button plain :type="scope.row.enable == 1 ? 'success' : 'danger'">{{
          scope.row.enable === 1 ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        {{ $filters.timeFormat(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.timeFormat(scope.row.updateAt) }}
      </template>

      <template #handle="scope">
        <div class="handle-btns">
          <el-button
            type="text"
            icon="Edit"
            size="medium"
            v-if="isUpdate"
            @click="handlerEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="text"
            icon="Delete"
            size="medium"
            v-if="isDelete"
            @click="handlerDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 动态插槽 -->
      <template
        v-for="prop in proplist"
        :key="prop.slotName"
        #[prop.slotName]="scope"
      >
        <template v-if="prop.slotName">
          <slot :name="prop.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </dm-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { usePermisson } from '@/hooks/use-permission'

import DmTable from '@/base-ui/table'

export default defineComponent({
  props: {
    ContentConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    },
    creatName: {
      type: String,
      default: '新建用户'
    }
  },
  components: {
    DmTable
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    //0.获取按钮权限
    const isCreate = usePermisson(props.pageName, 'create')
    const isUpdate = usePermisson(props.pageName, 'update')
    const isDelete = usePermisson(props.pageName, 'delete')
    const isQuery = usePermisson(props.pageName, 'query')

    const page = ref({ currentPage: 1, pageSize: 10 })
    watch(page, () => {
      getPageData()
    })
    const store = useStore()
    const getPageData = (queryInfo: any = {}) => {
      console.log('查询权限:', !isQuery)
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: page.value.pageSize * (page.value.currentPage - 1),
          size: page.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()
    const dataList = computed(() =>
      store.getters['system/getDataList'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['system/getDataCount'](props.pageName)
    )
    //获取动态插槽列表
    const proplist = props.ContentConfig?.propList.filter((item: any) => {
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handle') return false
      if (item.slotName === 'enable') return false
      return true
    })
    const selectionChange = (value: any) => console.log(value)

    //5.点击删除按钮
    const handlerDeleteClick = (item: any) => {
      console.log(item)
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    //6.点击新建按钮
    const handlerNewClick = () => {
      emit('newBtnClick')
    }
    //7.点击编辑按钮
    const handlerEditClick = (item: any) => {
      emit('editBtnClick', item)
    }
    return {
      dataList,
      dataCount,
      page,
      getPageData,
      selectionChange,
      handlerDeleteClick,
      handlerNewClick,
      handlerEditClick,
      proplist,
      isCreate,
      isUpdate,
      isDelete
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  border-top: 20px solid #f5f5f5;
  padding: 20px 20px;
}
</style>
