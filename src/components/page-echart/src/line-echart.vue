<template>
  <div class="line-echart">
    <base-echart :options="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import BaseEchart from '@/base-ui/echart'

const props = defineProps<{
  xLables: string[]
  value: any[]
}>()

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {},
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: props.xLables
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '分别销量',
      data: props.value,
      type: 'line',
      areaStyle: {}
    }
  ]
}
</script>

<style scoped></style>
