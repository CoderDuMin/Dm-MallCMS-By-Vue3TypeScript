<template>
  <el-dropdown>
    <div class="el-dropdown-link">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <span class="user-name">{{ name }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu
        ><el-dropdown-item :icon="Plus" @click="handleLogOut">
          退出登录
        </el-dropdown-item>
        <el-dropdown-item :icon="CirclePlusFilled"> 关于我们 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import router from '@/router'
export default defineComponent({
  setup() {
    const handleLogOut = () => {
      window.localStorage.removeItem('token')
      router.push('dashboard')
    }
    const store = useStore()
    const name = computed(() => store.state.login.userinfo.name)
    return {
      name,
      handleLogOut
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  .user-name {
    padding: 0 10px;
  }
}
</style>
