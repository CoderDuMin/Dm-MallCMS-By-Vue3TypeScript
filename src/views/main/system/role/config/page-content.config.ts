export const ContentConfig = {
  propList: [
    { prop: 'name', label: '角色名', 'min-width': '60px', slotName: 'name' },
    {
      prop: 'intro',
      label: '角色介绍',
      'min-width': '100px',
      slotName: 'intro'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      'min-width': '100px',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      'min-width': '100px',
      slotName: 'updateAt'
    },

    {
      label: '操作',
      width: '160px',
      slotName: 'handle'
    }
  ],
  title: '角色列表',
  isShowSelection: true,
  isShowIndex: true
}
