import { BASE_URL, BASE_NAME } from '../request/config'
import Request from '../request/index'
const sysRequest = new Request({
  baseURL: BASE_URL
})
export default sysRequest
