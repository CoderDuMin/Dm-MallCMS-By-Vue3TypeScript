import { AxiosRequestConfig, AxiosResponse } from 'axios'
interface IInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  reponseInterceptorCatch?: (error: any) => any
}
interface DDAxiosRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IInterceptors<T>
  showLoading?: boolean
}

export default DDAxiosRequestConfig
