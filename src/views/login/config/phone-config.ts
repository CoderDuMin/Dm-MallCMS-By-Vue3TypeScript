export const rules = {
  num: [
    {
      required: true,
      message: '手机号不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^1[0-9]{10}$/,
      message: '请输入正确的手机号格式',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '密码必须是6位数字',
      trigger: 'blur'
    }
  ]
}
