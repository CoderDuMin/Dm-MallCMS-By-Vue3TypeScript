import { IAccount, IDataType, ILoginResult } from './type'
import ddRequest from '..'

enum LoginApi {
  ACCOUNTLOGIN = '/login',
  LOGINUSERINFO = '/users/',
  USERMENUS = '/role/'
}

export function AccountLogin(account: IAccount) {
  return ddRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.ACCOUNTLOGIN,
    data: account
  })
}

export function requestUserInfo(id: number) {
  return ddRequest.get<IDataType>({
    url: LoginApi.LOGINUSERINFO + id
  })
}

export function requestUserMenus(roleid: number) {
  return ddRequest.get<IDataType>({
    url: LoginApi.USERMENUS + roleid + '/menu'
  })
}
