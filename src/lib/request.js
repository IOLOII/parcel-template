import axios from 'axios'
import qs from "qs"
// import '~element-plus/es/components/message/style/css'

import store from '@/store'
// import router from '@/router'


// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000, // request timeout
  responseType: 'json'
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['token'] = store.getters.token
    if (config.method === 'post') {
      if (!(config.data instanceof FormData)) {
        config.data = {
          ...config.data,
          // _t: Date.parse(new Date()) / 1000
        }
      }
      if (config.data.currentPage && config.data.pageSize) {
        config.data.current = config.data.currentPage
        delete config.data.currentPage
        config.data.size = config.data.pageSize
        delete config.data.pageSize
      }
    } else if (config.method === 'get') {
      // get请求参数处理
      const arrayFormat = config.headers.arrayFormat || "indices"
      config.paramsSerializer = (params) => {
        return qs.stringify(params, {
          allowDots: true,
          arrayFormat: arrayFormat,
        })
      }
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.request && response.request.responseType == 'blob') {
      return Promise.resolve(response.data)
    }
    if (response.headers['content-type'].includes("octet-stream")) {
      return Promise.resolve(response.data)
    }
    return Promise.resolve(response.data)
  },
  error => {
    let { status, data } = error.response
    switch (status) {
      case 401:
        $message.error({
          message: data,
          grouping: true,
        })
        // store.commit('updateToken')
        // router.push(
        //   {
        //     name: '主页',
        //     query: Object.assign(
        //       {},
        //       router.currentRoute.value.query, {
        //       redirect: router.currentRoute.value.path
        //     }),
        //     params: router.currentRoute.value.params
        //   }
        // )
        $eventBus.$emit('notLogin')
        break
      case 408:
        $message.error({
          message: data,
          grouping: true,
        })
        store.commit('updateToken')
        // router.push(
        //   {
        //     name: '主页',
        //     query: Object.assign(
        //       {},
        //       router.currentRoute.value.query, {
        //       redirect: router.currentRoute.value.path
        //     }),
        //     params: router.currentRoute.value.params
        //   }
        // )
        $eventBus.$emit('notLogin')
        break
      default:
        $message.error({
          message: data,
          grouping: true,
        })
        break
    }
  }
)

export default service
