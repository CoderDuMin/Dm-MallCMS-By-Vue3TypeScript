import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemType } from './type'
import {
  getPageListData,
  deletePageDataById,
  createPageDataById,
  editPageDataById
} from '@/service/main/system/system'

const urlMap = {
  users: '/users/list',
  role: '/role/list',
  goods: '/goods/list',
  menu: '/menu/list',
  department: '/department/list',
  category: '/category/list'
}
const systemModule: Module<ISystemType, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0
    }
  },
  getters: {
    getDataList(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList
            break
          case 'role':
            return state.roleList
            break
          case 'goods':
            return state.goodsList
            break
          case 'menu':
            return state.menuList
            break
          case 'department':
            return state.departmentList
            break
          case 'category':
            return state.categoryList
            break
        }
      }
    },
    getDataCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userCount
            break
          case 'role':
            return state.roleCount
            break
          case 'goods':
            return state.goodsCount
            break
          case 'department':
            return state.departmentCount
            break
          case 'category':
            return state.categoryCount
            break
        }
      }
    }
  },
  mutations: {
    changeUserList(state, data) {
      state.userList = data
    },
    changeUserCount(state, totalCount) {
      state.userCount = totalCount
    },
    changeRoleList(state, data) {
      state.roleList = data
    },
    changeRoleCount(state, totalCount) {
      state.roleCount = totalCount
    },
    changeGoodsList(state, data) {
      state.goodsList = data
    },
    changeGoodsCount(state, totalCount) {
      state.goodsCount = totalCount
    },
    changeMenuList(state, data) {
      state.menuList = data
    },
    changeDepartmentList(state, data) {
      state.departmentList = data
    },
    changeDepartmentCount(state, totalCount) {
      state.departmentCount = totalCount
    },
    changeCategoryList(state, data) {
      state.categoryList = data
    },
    changeCategoryCount(state, totalCount) {
      state.categoryCount = totalCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      //1.根据pageName获取对应请求Url
      const pageName = payload.pageName
      const pageUrl = urlMap[pageName]
      console.log('pageUrl:', pageUrl)
      console.log('queryinfo:', payload.queryInfo)
      //2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      //3.commit对应mutation
      switch (pageName) {
        case 'users':
          commit('changeUserList', pageResult.data.list)
          commit('changeUserCount', pageResult.data.totalCount)
          break
        case 'role':
          commit('changeRoleList', pageResult.data.list)
          commit('changeRoleCount', pageResult.data.totalCount)
          break
        case 'goods':
          commit('changeGoodsList', pageResult.data.list)
          commit('changeGoodsCount', pageResult.data.totalCount)
          break
        case 'menu':
          commit('changeMenuList', pageResult.data.list)
          break
        case 'department':
          commit('changeDepartmentList', pageResult.data.list)
          commit('changeDepartmentCount', pageResult.data.totalCount)
          break
        case 'category':
          commit('changeCategoryList', pageResult.data.list)
          commit('changeCategoryCount', pageResult.data.totalCount)
          break
      }
    },
    async deletePageDataAction(context, payload: any) {
      const { pageName, id } = payload
      const url = `/${pageName}/${id}`
      console.log(url)
      await deletePageDataById(url)

      context.dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction(context, payload: any) {
      //1.创建数据的请求
      const { pageName, queryInfo } = payload
      const url = `/${pageName}`
      await createPageDataById(url, queryInfo)

      //2.请求最新的数据
      context.dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    async editPageDataAction(context, payload: any) {
      //1.编辑数据的请求
      const { pageName, queryInfo, id } = payload
      const url = `/${pageName}/${id}`
      await editPageDataById(url, queryInfo)

      //2.请求最新的数据
      context.dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
