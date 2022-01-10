<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="elformRef">
      <el-form-item label="账号:" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus/lib'
import { useStore } from 'vuex'
import LocalCache from '@/utils/cache'
// import ddRequest from '@/service/index'
export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const elformRef = ref<InstanceType<typeof ElForm>>()
    const accountLoginAction = (IsRemember: boolean) => {
      elformRef.value?.validate((isValid) => {
        if (isValid) {
          console.log('account 正在真正登录')
          //1.用户保存到localstorage
          if (IsRemember) {
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }

          //2.开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      elformRef,
      accountLoginAction
    }
  }
})
</script>

<style scoped></style>
