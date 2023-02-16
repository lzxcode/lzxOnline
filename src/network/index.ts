import { BASE_URL, BASE_NAME } from './request/config'
import Request from './request/index'
import { Res } from './request/index'
const sysRequest = new Request({
  baseURL: BASE_URL
})

sysRequest
  .get<{ data: '' } | Res>({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })

export { sysRequest }
