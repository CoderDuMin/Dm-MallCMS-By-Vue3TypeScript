export const ContentConfig = {
  propList: [
    { prop: 'name', label: '商品名', minWidth: '80', slotName: 'name' },
    { prop: 'oldPrice', label: '原价', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价', minWidth: '80', slotName: 'cellphone' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'imgUrl' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '160', slotName: 'handle' }
  ],
  title: '商品列表',
  isShowSelection: true,
  isShowIndex: true
}
