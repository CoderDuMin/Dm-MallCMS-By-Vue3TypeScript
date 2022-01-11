import { IForm } from '@/base-ui/form/types/type'

export const searchConfig: IForm = {
  formItems: [
    {
      label: 'id',
      type: 'input',
      field: 'id',
      placeholder: '请输入查询id'
    },
    {
      label: '商品名称',
      type: 'input',
      field: 'name',
      placeholder: '请输入商品名称'
    },
    {
      label: '商品描述',
      type: 'input',
      field: 'desc',
      placeholder: '请输入描述关键字'
    },
    {
      label: '商品状态',
      type: 'select',
      placeholder: '请选择状态',
      field: 'status',
      options: [
        {
          title: '正常',
          value: 1
        },
        {
          title: '禁止',
          value: 0
        }
      ]
    },
    {
      label: '地址',
      type: 'input',
      field: 'desc',
      placeholder: '请输入地址描述'
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
