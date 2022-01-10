import { useStore } from '@/store'

export function usePermisson(pageName: any, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const targetName = `system:${pageName}:${handleName}`
  return !!permissions.find((item) => item === targetName)
}
