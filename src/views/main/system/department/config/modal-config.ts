import { IForm } from '@/base-ui/form/types/type'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '类型',
      placeholder: '请选择上级部门'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    }
  ],
  colLayout: {
    span: 24
  },
  labWidth: '80px',
  itemStyle: { padding: '0 2px', paddingTop: '12px' }
}
