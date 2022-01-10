//service 统一出口
import DDRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import LocalCache from '@/utils/cache'

const ddRequest = new DDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      //携带token的拦截
      const token = LocalCache.getCache('token') ?? undefined
      if (token) {
        if (config.headers) {
          config.headers.common['Authorization'] = `Bearer ${token}`
        }
      }
      return config
    },
    responseInterceptor: (res) => {
      return res
    }
  }
})

export default ddRequest
