import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'
let firstMenu: any = null
export function mapMenusToRoutes(usermenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // console.log(allRoutes)

  //2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (usermenus: any[]) => {
    for (const menu of usermenus) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url)
        if (!firstMenu) {
          firstMenu = menu
        }
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(usermenus)

  return routes
}

export function mapMenuToBread(menus: any[], path: string) {
  const breadcrumbs: IBreadcrumb[] = []
  mapMenuToPath(menus, path, breadcrumbs)
  return breadcrumbs
}

export function mapMenuToPath(
  menus: any[],
  path: string,
  breadcrumbs?: IBreadcrumb[]
) {
  for (const menu of menus) {
    if (menu.type === 1) {
      const findMenu: any = mapMenuToPath(menu.children ?? [], path)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu
    }
  }
}

// export function mapMenuToBread(menus: any[], path: string) {
//   const breadcrumbs: IBreadcrumb[] = []
//   for (const menu of menus) {
//     if (menu.type === 1) {
//       const findMenu: any = mapMenuToPath(menu.children ?? [], path)
//       if (findMenu) {
//         breadcrumbs.push({ name: menu.name, path: menu.url })
//         breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === path) {
//       return menu
//     }
//   }
//   return breadcrumbs
// }

// export function mapMenuToPath(menus: any[], path: string) {
//   for (const menu of menus) {
//     if (menu.type === 1) {
//       const findMenu: any = mapMenuToPath(menu.children ?? [], path)
//       if (findMenu) {
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === path) {
//       return menu
//     }
//   }
// }

export function mapMenusToPermissions(menus: any[]) {
  const permissions: string[] = []
  const _recurseUsePermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseUsePermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseUsePermission(menus)

  return permissions
}

export function mapMenuToLeafNodes(menus: any) {
  const leafnodes: number[] = []

  const _recuseMenu = (menuList: any) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recuseMenu(menu.children)
      } else {
        leafnodes.push(menu.id)
      }
    }
  }

  _recuseMenu(menus)

  return leafnodes
}

export { firstMenu }
