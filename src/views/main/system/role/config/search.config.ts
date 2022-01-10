import { IForm } from '@/base-ui/form/types/type'

export const searchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '介绍',
      placeholder: '请输入角色结束'
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
