import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import lzx from "../packages/components"
import "lzooxyue/style"

let app = createApp(App);
app.use(lzx)

app.mount("#app");