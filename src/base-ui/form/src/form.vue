<template>
  <div>
    <div class="header"><slot name="title"></slot></div>
    <el-form :label-width="labWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'timepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otheroptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormType } from '../types/type'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormType[]>,
      dafault: () => []
    },
    labWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 })
    },
    modelValue: {
      type: Object,
      require: true
    }
  },
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })

    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )
    return {
      formData
    }
  }
})
</script>

<style scoped></style>
