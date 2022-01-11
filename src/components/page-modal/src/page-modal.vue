<template>
  <div class="page-modal">
    <el-dialog
      v-model="centerDialogVisible"
      :title="title"
      width="30%"
      center
      destroy-on-close
    >
      <dm-form v-bind="modalConfig" v-model="formData"></dm-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handlerConfirmClick"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from '@/store'
import DmForm from '@/base-ui/form'
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: '新建'
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    DmForm
  },
  setup(props) {
    const store = useStore()
    const centerDialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    //点击确定按钮的逻辑
    const handlerConfirmClick = () => {
      centerDialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        //编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          queryInfo: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        //新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          queryInfo: { ...formData.value, ...props.otherInfo }
        })
      }
    }
    return {
      centerDialogVisible,
      formData,
      handlerConfirmClick
    }
  }
})
</script>

<style scoped></style>
