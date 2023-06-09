export interface ILoginInfo {
    login_square: string
    login_rectangle: string
    login_logo: string
    slide: string[]
}
export interface IMenu {
    path: string
    title: string
    icon: string
    header: string
    is_header: number
    children?: IMenu[]
}
export interface IUserInfo {
    account: string
    head_pic: string
    id: number
}
export interface IloginResponse {
    token: string
    expires_time: number
    menus: IMenu,
    unique_auth: string[]
    user_info: IUserInfo
    logo: string
    logo_square: string
    version: string
    newOrderAudioLink: string
}
export interface IlogOut {
    status: string
    message: string
}
