import {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

export interface RquestInterceptors<P = AxiosResponse> {
  requestInterceptor?: (config: any) => any
  requestInterceptCatch?: (error: any) => any
  responseInterceptor?: (res: P) => P
  responseInterceptCatch?: (error: any) => any
}
export interface RequestConfig<P = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RquestInterceptors<P>
  showLoading?: boolean
}
