export const ContentConfig = {
  propList: [
    { prop: 'name', label: '商品类别', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '120',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '120px',
      slotName: 'updateAt'
    },

    {
      label: '操作',
      minWidth: '160px',
      slotName: 'handle'
    }
  ],
  title: '商品类别',
  isShowSelection: false,
  isShowIndex: true
}
