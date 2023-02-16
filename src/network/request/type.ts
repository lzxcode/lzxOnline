import {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

export interface RquestInterceptors<
  Q = InternalAxiosRequestConfig,
  P = AxiosResponse
> {
  requestInterceptor?: (config: Q) => Q
  requestInterceptCatch?: (error: any) => any
  responseInterceptor?: (res: P) => P
  responseInterceptCatch?: (error: any) => any
}
export interface RequestConfig<
  Q = InternalAxiosRequestConfig,
  P = AxiosResponse
> extends AxiosRequestConfig {
  interceptors?: RquestInterceptors<Q, P>
  showLoading?: boolean
}
