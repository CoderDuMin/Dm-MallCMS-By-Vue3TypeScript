import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'
export default function registerGlobalProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo: () => {
      console.log('foo')
    },
    timeFormat(timeValue: string) {
      return formatUtcString(timeValue)
    }
  }
}
