/**
 * @Description axios请求
 * @Author luomingfeng
 * @Date 2022/4/15 20:49
 */
import { createRequest } from './request'
import { getEnvConfig } from '~/.env-config'

const { http } = getEnvConfig(import.meta.env)
const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'true'

export const request = createRequest({
  baseURL: isHttpProxy ? http.proxy : http.url,
})
