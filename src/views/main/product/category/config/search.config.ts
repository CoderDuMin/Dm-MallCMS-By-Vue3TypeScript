import { IForm } from '@/base-ui/form/types/type'

export const searchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入商品类别'
    }
  ],
  labWidth: '100px',
  colLayout: {
    //span:8
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  itemStyle: { padding: '0 20px', paddingTop: '22px' }
}
