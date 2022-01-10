type IType = 'input' | 'password' | 'select' | 'timepicker'
export interface IFormType {
  field: string
  type: IType
  label: string
  rules?: any[]
  placeholder?: string
  options?: any[]
  otheroptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormType[]
  labWidth?: string
  itemStyle?: any
  colLayout?: any
}
