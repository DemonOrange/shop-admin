// 公共基础接口封装
import request from '@/utils/request'

export const getLogoInfo = () => {
  // return request({
  //   method: 'GET',
  //   url: '/login/info'
  // })
  return request.get('/login/info')
}
