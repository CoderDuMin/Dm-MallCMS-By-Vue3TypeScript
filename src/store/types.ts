import { ILoginState } from './login/types'
import { ISystemType } from './main/system/type'
import { IAnalysisType } from './main/analysis/type'
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
  entireCategory: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemType
  analysis: IAnalysisType
}

export type IStoreType = IRootState & IRootWithModule
