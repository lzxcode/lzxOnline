import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RquestInterceptors<P = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptCatch?: (error: any) => any
  responseInterceptor?: (res: P) => P
  responseInterceptCatch?: (error: any) => any
}
export interface RequestConfig<P = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RquestInterceptors<P>
  showLoading?: boolean
}
