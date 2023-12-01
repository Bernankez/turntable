import { createApp } from "vue";
import "./style.css";
import VueLuckyCanvas from "@lucky-canvas/vue";
import App from "./App.vue";

createApp(App).use(VueLuckyCanvas).mount("#app");
