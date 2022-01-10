<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      v-bind="childrenProps"
      @selection-change="selectionChange"
    >
      <el-table-column
        v-if="isShowSelection"
        align="center"
        type="selection"
      ></el-table-column>
      <el-table-column
        v-if="isShowIndex"
        width="80"
        align="center"
        type="index"
        label="序号"
      ></el-table-column>
      <template v-for="props in propList" :key="props.id">
        <el-table-column v-bind="props" align="center" show-overflow-tooltip>
          <template #default="scoped">
            <slot :name="props.slotName" :row="scoped.row">
              {{ scoped.row[props.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="isShowPage">
      <slot name="footer">
        <el-pagination
          :currentPage="page.currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      require: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array,
      require: true
    },
    isShowIndex: {
      type: Boolean,
      default: false
    },
    isShowSelection: {
      type: Boolean,
      default: false
    },
    isShowPage: {
      type: Boolean,
      default: true
    },
    page: {
      type: Object,
      default: () => {
        return { currentPage: 0, pageSize: 10 }
      }
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const selectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    return {
      selectionChange,
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px 10px 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
