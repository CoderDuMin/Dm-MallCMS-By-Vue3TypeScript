import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import router from '@/router/index'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'
import {
  AccountLogin,
  requestUserInfo,
  requestUserMenus
} from '@/service/login/login'
import LocalCache from '@/utils/cache'
const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userinfo: {},
      usermenus: {},
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userinfo: any) {
      state.userinfo = userinfo
    },
    changeUserMenus(state, usermenus: any) {
      state.usermenus = usermenus

      //usermenus ==> routes
      const routes = mapMenusToRoutes(usermenus)

      //将routes  => router.main.childern
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      //获取用户按钮权限
      const permission = mapMenusToPermissions(usermenus)
      state.permissions = permission
    }
  },
  actions: {
    async accountLoginAction(context, payload: any) {
      //1.实现登录逻辑
      const loginResult = await AccountLogin(payload)
      const { id, token } = loginResult.data
      context.commit('changeToken', token)
      LocalCache.setCache('token', token)

      //2.请求用户信息
      const userInfoResult = await requestUserInfo(id)
      const userinfo = userInfoResult.data
      context.commit('changeUserInfo', userinfo)
      LocalCache.setCache('userinfo', userinfo)

      //3.获取菜单信息
      const userMenuResult = await requestUserMenus(userinfo.role.id)
      const usermenus = userMenuResult.data
      console.log(usermenus)
      context.commit('changeUserMenus', usermenus)
      LocalCache.setCache('usermenus', usermenus)

      //初始化数据
      context.dispatch('getInitialDataAction', null, { root: true })
      //4.跳转主页
      router.push('/main')
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userinfo = LocalCache.getCache('userinfo')
      dispatch('getInitialDataAction', null, { root: true })
      if (userinfo) {
        commit('changeUserInfo', userinfo)
      }
      const usermenus = LocalCache.getCache('usermenus')
      if (usermenus) {
        commit('changeUserMenus', usermenus)
      }
    }
  },
  getters: {}
}

export default login
