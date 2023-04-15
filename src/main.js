import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGtag from "vue-gtag"; 
import { createHead } from "@vueuse/head"


import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const head = createHead()

app.use(head)

app.use(createPinia());
app.use(router);
app.use(VueGtag, {
    config: { id: "G-D2F2LGNEDM" }
})

app.mount("#app");
