<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="foldMenuChange">
      <expand v-if="isFold" />
      <fold v-else />
    </el-icon>
    <div class="content">
      <div>
        <dm-breadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div><user-info /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import DmBreadcrumb from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { mapMenuToBread } from '@/utils/map-menus'
export default defineComponent({
  components: {
    UserInfo,
    DmBreadcrumb
  },
  emits: ['handleFoldChange'],
  setup(props, { emit }) {
    const breadcrumbs = computed(() => {
      const store = useStore()
      const route = useRoute()
      const menus = store.state.login.usermenus
      return mapMenuToBread(menus, route.path)
    })
    const isFold = ref(false)
    const foldMenuChange = () => {
      isFold.value = !isFold.value
      emit('handleFoldChange', isFold.value)
    }
    return {
      isFold,
      breadcrumbs,
      foldMenuChange
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  height: 100%;
  width: 100%;
  display: flex;
  .fold-menu {
    font-size: 30px;
    line-height: 48px;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
