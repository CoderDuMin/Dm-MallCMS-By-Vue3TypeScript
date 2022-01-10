import axios from 'axios'

//axios的实例对象
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

//2.模拟get请求
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'xxhh',
//       age: 16
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// //3.模拟post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'postxxhh',
//       age: 16
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

//axios的配置选项
//4.1 全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 5000
// axios.defaults.headers = {}

//4.2单独的配置
// axios
//   .get('/get', {
//     timeout: 10000,
//     params: {
//       name: 'xxhh',
//       age: 16
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios
//   .post('/post', {
//     data: {
//       name: 'postxxhh',
//       age: 16
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

//5.axios.all
axios
  .all([
    axios.get('/get', { params: { name: 'xxhh', age: 16 } }),
    axios.post('/post', { data: { name: 'hh25', age: 16 } })
  ])
  .then((res) => {
    console.log(res[0])
    console.log(res[1])
  })

//axios.interceptors 拦截器
//request 请求的拦截,fn1和fn2
//fn1(config)请求成功会触发
//fn2(err)请求失败会触发
axios.interceptors.request.use(
  (config) => {
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求失败:', err)
    return err
  }
)
//response 响应的拦截,fn1和fn2
//fn1(res)响应成功会触发
//fn2(err)响应失败会触发
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截:', res)
    return res.data
  },
  (err) => {
    console.log('响应失败:', err)
    return err
  }
)
