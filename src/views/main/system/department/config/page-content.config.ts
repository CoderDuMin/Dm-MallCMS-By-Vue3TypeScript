export const ContentConfig = {
  propList: [
    { prop: 'name', label: '部门名称', minWidth: '100' },
    {
      prop: 'leader',
      label: '部门领导',
      minWidth: '80',
      slotName: 'realname'
    },
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
  title: '部门列表',
  isShowSelection: true,
  isShowIndex: true
}
