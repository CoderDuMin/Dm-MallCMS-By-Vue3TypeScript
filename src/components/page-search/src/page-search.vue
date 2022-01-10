<template>
  <div class="page-search">
    <dm-form v-bind="searchConfig" v-model="form1Data">
      <!-- <template #title>
          <h2 class="title">高级检索</h2>
        </template> -->
      <template #footer>
        <div class="search-btns">
          <el-button @click="handlerResetClick">
            <el-icon class="el-icon--left"><Refresh /></el-icon>
            重置
          </el-button>
          <el-button @click="handlerQueryClick" type="primary">
            <el-icon class="el-icon--left"><Search /></el-icon>
            搜索
          </el-button>
        </div>
      </template>
    </dm-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DmForm from '@/base-ui/form'
export default defineComponent({
  props: {
    searchConfig: {
      type: Object,
      require: true
    }
  },
  components: {
    DmForm
  },
  emits: ['btnReset', 'btnSearch'],
  setup(props, { emit }) {
    //双向绑定的属性应该是由配置文件里的field来决定
    //优化一:formData里的属性应该动态决定
    const formItems = props.searchConfig?.formItems ?? []
    const formOrginData = {}
    for (const item of formItems) {
      formOrginData[item.field] = ''
    }
    const form1Data = ref(formOrginData)

    //优化二:用户点击重置
    const handlerResetClick = () => {
      // formData.value = formOrginData
      for (const key in formOrginData) {
        form1Data.value[`${key}`] = formOrginData[key]
      }
      emit('btnReset')
    }

    //优化三:用户点击搜索按钮
    const handlerQueryClick = () => {
      // console.log('点击了搜索', formData.value)
      emit('btnSearch', { ...form1Data.value })
    }
    return {
      form1Data,
      handlerResetClick,
      handlerQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.title {
  padding-top: 10px;
  margin-bottom: 0;
}
.search-btns {
  text-align: right;
  padding: 10px 20px;
}
</style>
