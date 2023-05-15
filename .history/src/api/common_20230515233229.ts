// 公共基础接口封装
import request from '@/utils/request'

export const getLogoInfo = () => {
  // return request({
  //   method: 'GET',
  //   url: '/login/info'
  // })
  return request.get<{
    status: number,
    msg: string
    data: {
      login_square: string,
      login_rectangle: string,
      login_logo: string,
      slide: string[]
    }
  }>('/login/info')
}
