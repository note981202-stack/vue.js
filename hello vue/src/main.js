// Vue객체 중 Root 객체를 실행하는 파일 - html과 root가 대면하는 대표의 개념임

import "./assets/main.css";

import { createApp } from "vue"; // 객체를 만들려면 createApp라는 함수를 호출 해야함
import App from "./App.vue";

createApp(App).mount("#app");
