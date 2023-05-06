import DefaultTheme from "vitepress/theme"; //引入默认主题
import demo from "./demo.vue";
import "./code.scss";
import 'unocss';
import "./style.css";
import lzooyue from "lzooxyue";
import "lzooxyue/style";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(lzooyue);

    app.component("demo", demo);
  },
};
