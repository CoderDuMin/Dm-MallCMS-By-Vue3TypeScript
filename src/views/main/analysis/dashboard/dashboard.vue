<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <dm-card title="分类商品数量(饼图)">
          <pie-echart :pieData="cateGoodCount"></pie-echart>
        </dm-card>
      </el-col>
      <el-col :span="10">
        <dm-card title="不同城市商品销量">
          <map-echart :mapData="AddressGoodsSale"></map-echart>
        </dm-card>
      </el-col>
      <el-col :span="7">
        <dm-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="cateGoodCount"></rose-echart>
        </dm-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <dm-card title="分类商品的销量">
          <line-echart v-bind="cateGoodSale"></line-echart>
        </dm-card>
      </el-col>
      <el-col :span="12">
        <dm-card title="分类商品的收藏">
          <bar-echart v-bind="cateGoodsFavor"></bar-echart>
        </dm-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import DmCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echart'
export default defineComponent({
  name: 'dashboard',
  components: {
    DmCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getDashboardDataAction')

    const cateGoodCount = computed(() => {
      return store.state.analysis.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const cateGoodSale = computed(() => {
      const goodsSale = store.state.analysis.categoryGoodsSale
      const xLables: string[] = []
      const value: any[] = []
      for (const item of goodsSale) {
        xLables.push(item.name)
        value.push(item.goodsCount)
      }
      return { xLables, value }
    })

    const cateGoodsFavor = computed(() => {
      const goodsFavor = store.state.analysis.categoryGoodsFavor
      const xLables = []
      const value = []
      for (const item of goodsFavor) {
        xLables.push(item.name)
        value.push(item.goodsFavor)
      }
      return { xLables, value }
    })

    const AddressGoodsSale = computed(() => {
      return store.state.analysis.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      cateGoodCount,
      cateGoodSale,
      cateGoodsFavor,
      AddressGoodsSale
    }
  }
})
</script>

<style scoped></style>
