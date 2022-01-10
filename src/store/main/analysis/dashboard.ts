import { Module } from 'vuex'
import { IAnalysisType } from './type'
import { IRootState } from '../../types'

import {
  getAdressGoodsSaleData,
  getCateGoodsCountData,
  getCateGoodsFavorData,
  getCateGoodsSaleData
} from '@/service/main/analysis/dashboard'

const analysisModule: Module<IAnalysisType, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCateGoodCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCateGoodFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeCateGoodSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeAddressGoodSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountResult: any = await getCateGoodsCountData()
      const categoryGoodsFavorResult: any = await getCateGoodsFavorData()
      const categoryGoodsSaleResult: any = await getCateGoodsSaleData()
      const addressGoodsSaleResult: any = await getAdressGoodsSaleData()
      commit('changeCateGoodCount', categoryGoodsCountResult.data)
      commit('changeCateGoodFavor', categoryGoodsFavorResult.data)
      commit('changeCateGoodSale', categoryGoodsSaleResult.data)
      commit('changeAddressGoodSale', addressGoodsSaleResult.data)
    }
  }
}

export default analysisModule
