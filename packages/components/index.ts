import { App } from 'vue'
import autoScroll from './autoScroll'


const components = [autoScroll]

const install = (app: App) => {
  
  components.map(item => {
    
    app.component(item.name, item)
  })
}

export default {
  install,
  ... components
}