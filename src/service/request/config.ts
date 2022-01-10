//2.根据process.env.NODE_ENV区分
//开发环境: development
//生产环境: production
//测试环境: test

let BASE_URL = ''
let TIME_OUT = 500

if (process.env.NODE_ENV === 'development') {
  TIME_OUT = 5000
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  TIME_OUT = 5000
  BASE_URL = 'http://152.136.185.210:5000/'
} else {
  TIME_OUT = 5000
  BASE_URL = 'http://152.136.185.210:5000/'
}

export { TIME_OUT, BASE_URL }
