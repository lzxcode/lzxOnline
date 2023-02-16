import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RquestInterceptors, RequestConfig } from './type'
export interface Res {
  code: number
  data: any
  message: string
}
class Request {
  instance: AxiosInstance
  interceptors?: RquestInterceptors
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    // 默认创建实例时都有的
    // 请求前拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    // 请求后拦截
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    // 创建实例时传入的
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptCatch
    )
  }
  request<T>(config: RequestConfig<AxiosRequestConfig, T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 对单个请求进行拦截
      // 请求前拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 请求后拦截
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = Res>(config: RequestConfig<AxiosRequestConfig, T>): Promise<T> {
    return this.request<T>({ ...config, method: 'get' })
  }
}

export default Request
