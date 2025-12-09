import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPlugin from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPlugin);

import App from "./App.vue";
import router from "./router/routes.js"; //폴더 전체를 읽어들임

const app = createApp(App);

app.use(pinia); //처음에 만들때 라우터랑 피니아를 설정해서 만들면 이 두 줄은 자동 생성이됨
app.use(router); //근데 추후에 설정하려고 하면 나중에 여기서 입력 추가하면 됨

app.mount("#app");
