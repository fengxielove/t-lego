import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";

// 配置 UnoCss
import "virtual:uno.css";

import router from "./routes";

const app = createApp(App);
app.use(createPinia()).use(router).mount("#app");
