<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="tabName">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handlerLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    //定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const tabName = ref('account')
    //定义方法
    const handlerLogin = () => {
      console.log('立即登录')
      if (tabName.value === 'account') {
        accountRef.value?.accountLoginAction(isKeepPassword.value)
      } else if (tabName.value === 'phone') {
        console.log('phone 登录!!')
      }
    }
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      tabName,
      handlerLogin
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 160px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
  }
  .login-btn {
    width: 100%;
    margin-top: 3px;
  }
}
</style>
