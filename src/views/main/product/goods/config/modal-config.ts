import { IForm } from '@/base-ui/form/types/type'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价',
      placeholder: '请输入原价'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '现价',
      placeholder: '请输入现价'
    },
    {
      field: 'desc',
      type: 'input',
      label: '商品描述',
      placeholder: '请输入商品描述'
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { title: '在售', value: 1 },
        { title: '下架', value: 0 }
      ]
    },
    {
      field: 'imgUrl',
      type: 'input',
      label: '图片url',
      placeholder: '请输入商品图片Url'
    },
    {
      field: 'inventoryCount',
      type: 'input',
      label: '库存',
      placeholder: '请输入商品库存'
    },
    {
      field: 'saleCount',
      type: 'input',
      label: '销量',
      placeholder: '请输入商品销量'
    },
    {
      field: 'favorCount',
      type: 'input',
      label: '收藏数',
      placeholder: '请输入商品收藏数'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入商品地址'
    }
  ],
  colLayout: {
    span: 24
  },
  labWidth: '80px',
  itemStyle: { padding: '0 2px', paddingTop: '12px' }
}
