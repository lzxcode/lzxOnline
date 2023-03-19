import { App } from "vue";

import components from "./components";

const install = (app: App) => {
  app.use(components);
};

export default {
  install
};
