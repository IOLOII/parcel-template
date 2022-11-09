import 'normalize.css'

import { createApp } from "vue"
import App from "@/App.vue"

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@/theme/echarts/theme_RGYB'
import ECharts from 'vue-echarts'

import service from '@/lib/request'
import eventBus from '@/lib/eventBus'


window.$axios = service
window.$message = ElMessage
window.$messageBox = ElMessageBox
window.$eventBus = eventBus

let app = createApp(App)
app.use(ElementPlus,
  {
    // size: 'small',
    // zIndex: 3000
  }
)
// app.use(vueEcharts)
app.component('v-chart', ECharts)

app.config.globalProperties.$eventBus = eventBus
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$messageBox = ElMessageBox

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount("#app")