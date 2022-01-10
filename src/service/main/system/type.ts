export interface ISystemResult {
  list: any[]
  totalCount: number
}
export interface IDataType<T = any> {
  code: number
  data: T
}
