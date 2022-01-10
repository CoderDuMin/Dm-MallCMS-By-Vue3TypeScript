import Dmquest from '../../index'
import { ISystemResult, IDataType } from './type'

export function getPageListData(url: string, queryInfo: any) {
  return Dmquest.post<IDataType<ISystemResult>>({
    url: url,
    data: queryInfo,
    showLoading: false
  })
}

export function deletePageDataById(url: string) {
  return Dmquest.delete<IDataType<ISystemResult>>({
    url: url
  })
}

export function createPageDataById(url: string, newData: any) {
  return Dmquest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageDataById(url: string, editData: any) {
  return Dmquest.patch<IDataType>({
    url: url,
    data: editData
  })
}
