import { createApp } from "vue";
import App from "./App.vue";
import VueTheMask from "vue-the-mask";

import "./style.css";
import router from "./routes";

const app = createApp(App);

app.use(VueTheMask);

app.use(router).mount("#app");
