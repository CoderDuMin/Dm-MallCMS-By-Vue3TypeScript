import { IForm } from '@/base-ui/form/types/type'

export const searchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'select',
      label: '部门名称',
      placeholder: '请选择部门',
      options: [
        { title: '总裁办', value: '总裁办' },
        { title: '客服部', value: '客服部' },
        { title: '研发部', value: '研发部' },
        { title: '运营部', value: '运营部' },
        { title: '人事部', value: '人事部' }
      ]
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
