import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import { registerApp } from '@/global/index'
import { setupStore } from '@/store/index'
// import ddRequest from './service'
import 'normalize.css'
import './assets/css/index.less'
import 'default-passive-events'

const app = createApp(App)

//注册element-plus
app.use(registerApp)

app.use(store)
setupStore()
app.use(router)

app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// ddRequest.request({
//   url: 'home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独的请求拦截器')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独的响应拦截器')
//       return res
//     }
//   },
//   showLoading: false
// })

// interface MyType {
//   data: any
//   returnCode: any
//   success: any
// }
// ddRequest
//   .get<MyType>({
//     url: 'home/multidata',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
