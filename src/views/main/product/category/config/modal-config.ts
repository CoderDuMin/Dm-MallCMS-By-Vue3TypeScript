import { IForm } from '@/base-ui/form/types/type'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品类别',
      placeholder: '请输入商品类别'
    }
  ],
  colLayout: {
    span: 24
  },
  labWidth: '80px',
  itemStyle: { padding: '0 2px', paddingTop: '12px' }
}
