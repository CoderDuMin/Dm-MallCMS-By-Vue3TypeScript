export const ContentConfig = {
  propList: [
    { prop: 'name', label: '用户名', 'min-width': '60px', slotName: 'name' },
    {
      prop: 'realname',
      label: '真实姓名',
      'min-width': '60px',
      slotName: 'realname'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      'min-width': '60px',
      slotName: 'cellphone'
    },
    {
      prop: 'enable',
      label: '状态',
      width: '100px',
      slotName: 'enable'
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
  title: '用户列表',
  isShowSelection: true,
  isShowIndex: true
}
