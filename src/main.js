import { createApp } from "vue";
import { createPinia } from "pinia";
import store from "./stores/index.js";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import BaseCard from "./components/UI/BaseCard.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("base-card", BaseCard);

app.mount("#app");
