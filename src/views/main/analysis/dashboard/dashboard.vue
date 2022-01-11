<template>
  <div class="dashboard">
    <!-- 统计数 -->
    <el-row :gutter="10">
      <template v-for="(item, index) in topPanelDatas" :key="index">
        <el-col :md="12" :lg="6" :xl="6">
          <dm-statistical-panel class="digital-panel-row" :panel-data="item" />
        </el-col>
      </template>
    </el-row>
    <!-- 图表展示 -->
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
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import DmCard from '@/base-ui/card'
import DmStatisticalPanel from '@/components/statistical-panel'
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
    MapEchart,
    DmStatisticalPanel
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/getDashboardDataAction')

    // 总量统计获取
    const topPanelDatas = ref<any>([])
    topPanelDatas.value = [
      {
        title: '销量1',
        tips: '苹果的销量',
        price: 124541,
        subTitle: '销售总量： ',
        number: 8233
      },
      {
        title: '销量2',
        tips: '苹果的销量',
        price: 24541,
        subTitle: '销售总量： ',
        number: 3133
      },
      {
        title: '销量3',
        tips: '苹果的销量',
        price: 4541,
        subTitle: '销售总量： ',
        number: 233
      },
      {
        title: '销量4',
        tips: '苹果的销量',
        price: 424541,
        subTitle: '销售总量： ',
        number: 1233
      }
    ]

    // 图表数据获取
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
      AddressGoodsSale,
      topPanelDatas
    }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  background: #f0f2f5;
  .digital-panel-row {
    height: 130px;
    margin-bottom: 10px;
    overflow: hidden;
    text-align: left;
  }
}
</style>
