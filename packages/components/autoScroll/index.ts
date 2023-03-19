import { App } from "vue";
import autoScroll from "./src/autoScroll";
autoScroll.install = (app: App) => {
  app.component(autoScroll.name, autoScroll);
};

export default autoScroll;
