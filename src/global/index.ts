import { App } from 'vue'
import registerElementplus from './registerElementplus'
import 'element-plus/dist/index.css'
import registerGlobalProperties from './registerGlobalProperties'

export function registerApp(app: App): void {
  app.use(registerElementplus)
  app.use(registerGlobalProperties)
}
