export const rules = {
  name: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须由三位以上的数字或字母组成',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,8}$/,
      message: '密码必须是6-8位的数字或字母组成',
      trigger: 'blur'
    }
  ]
}
