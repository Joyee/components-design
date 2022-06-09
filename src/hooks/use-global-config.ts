import { getCurrentInstance, ComponentInternalInstance } from 'vue'

export function useGlobalConfig() {
  const instance: ComponentInternalInstance|null = getCurrentInstance()
  if (!instance) {
    return
  }
  return instance.appContext.config.globalProperties.$AILEMENTE || {}
}