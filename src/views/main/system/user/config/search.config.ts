import { IForm } from '@/base-ui/form/types/type'

export const searchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeholder: '用户是否可用',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
      type: 'timepicker',
      label: '创建时间',
      placeholder: '请选择创建时间',
      otheroptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
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
