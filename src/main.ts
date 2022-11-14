import { createApp } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "./router";
import store, { key } from "./store";

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);

const app = createApp(App);

app.use(store, key);
app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
