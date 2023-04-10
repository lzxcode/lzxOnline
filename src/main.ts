import { createApp } from "vue";
import router from "./route";
import "./style.css";
import App from "./App.vue";
import "lzooxyue/style";
import "./utils/system/injectCss";
import "./assets/iconfont/style.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


let app = createApp(App);
app.use(ElementPlus)
app.use(router);

app.mount("#app");
