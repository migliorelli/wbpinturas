import { createApp } from "vue";
import App from "./App.vue";
import animateOnView from "./directives/animate-on-view";
import router from "./router";
import "./style.css";

const app = createApp(App);

app.use(router);
app.directive("animate-on-view", animateOnView);

app.mount("#app");
