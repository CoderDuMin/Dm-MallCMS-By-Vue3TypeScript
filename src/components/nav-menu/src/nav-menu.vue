<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="" />
      <span v-if="!Collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      :default-active="currentId"
      class="el-menu-vertical el-menu"
      :collapse="Collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="(menu, index) in userMenus" :key="menu.id">
        <!-- 二级菜单 -->
        <template v-if="menu.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="menu.id + ''">
            <template #title>
              <el-icon v-if="menu.icon" :class="menu.icon">
                <box v-if="index === 0" />
                <document v-else-if="index == 1" />
                <credit-card v-else-if="index == 2" />
                <cpu v-else-if="index == 3" />
                <grid v-else-if="index == 4" />
                <monitor v-else />
              </el-icon>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="subitem in menu.children" :key="subitem.id">
              <!-- 遍历里面的item -->
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon" />
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="menu.type === 2">
          <el-menu-item :index="menu.id + ''">
            <i v-if="menu.icon" :class="menu.icon" />
            <span>{{ menu.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import router from '@/router'
import { mapMenuToPath } from '@/utils/map-menus'
export default defineComponent({
  props: {
    Collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.usermenus)
    const route = useRoute()

    //data
    const currentId = ref('2')
    currentId.value = mapMenuToPath(userMenus.value, route.path).id + ''
    const handleMenuClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return {
      userMenus,
      currentId,
      handleMenuClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }
  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
