// 公共基础接口封装
import request from '@/utils/request'
import { ILoginInfo, IloginResponse, IlogOut } from './types/common'
// interface ResponseData<T = any> {
//   status: number,
//   msg: string,
//   data: T
// }
// 封装泛型请求方法

export const getLogoInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })
  // return request.get<{
  //   status: number,
  //   msg: string
  // data: {
  //   login_square: string,
  //   login_rectangle: string, b
  //   login_logo: string,
  //   slide: string[]
  // }
  // }>('/login/info')
  // return request.get <ResponseData<{
  // login_square: string,
  // login_rectangle: string,
  // login_logo: string,
  // slide: string[]
  // }>>('/login/info').then(res => {
  //   return res.data
  // })
}
export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/admin/captcha_pro',
    responseType: 'blob' // 请求获取图片数据
  })
}
export const login = (data: {
  account: string,
  pwd: string,
  imgcode: string
}) => {
  return request<IloginResponse>({
    method: 'POST',
    url: '/admin/login',
    data
  })
}
export const logOut = () => {
  return request<IlogOut>({
    method: 'GET',
    url: '/admin/setting/admin/logout'
  })
}
