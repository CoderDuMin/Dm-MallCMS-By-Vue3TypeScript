import { IForm } from '@/base-ui/form/types/type'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '菜单名称',
      placeholder: '请输入菜单名称'
    },
    {
      field: 'type',
      type: 'select',
      label: '类型',
      placeholder: '请选择菜单类型',
      options: [
        { title: '一级菜单', value: 1 },
        { title: '二级菜单', value: 2 },
        { title: '按钮权限', value: 3 }
      ]
    },
    {
      field: 'url',
      type: 'input',
      label: '菜单url',
      placeholder: '请输入菜单url'
    },
    {
      field: 'permission',
      type: 'input',
      label: '按钮权限',
      placeholder: '请输入按钮权限'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '父级菜单',
      placeholder: '请选择父级菜单',
      options: []
    },
    {
      field: 'sort',
      type: 'input',
      label: '序号',
      placeholder: '请输入序号'
    }
  ],
  colLayout: {
    span: 24
  },
  labWidth: '80px',
  itemStyle: { padding: '0 2px', paddingTop: '12px' }
}
