import { createStore, useStore as useVuexStore, Store } from 'vuex'
import { IRootState, IStoreType } from './types'

import { getPageListData } from '@/service/main/system/system'

import Login from './login'
import System from './main/system'
import Analysis from './main/analysis/dashboard'
const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 12,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeDepartment(state, list) {
      state.entireDepartment = list
    },
    changeRole(state, list) {
      state.entireRole = list
    },
    changeMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit, dispatch }) {
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const menuResult = await getPageListData('/menu/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const { list: roleList } = roleResult.data
      const { list: menuList } = menuResult.data

      commit('changeDepartment', departmentList)
      commit('changeRole', roleList)
      commit('changeMenu', menuList)
      dispatch('analysis/getDashboardDataAction')
    }
  },
  getters: {},
  modules: {
    login: Login,
    system: System,
    analysis: Analysis
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
