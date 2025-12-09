import { createRouter, createWebHistory } from "vue-router";
import homeView from "..//views/HomeView.vue";

const router = createRouter({
  //히스토리 모드 설정
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", //라우트 경로 - 필수
      name: "home", // 라우트 이름 - 선택
      component: homeView, // 라우트의 컴포넌트 (필수)
    },
    {
      path: "/user/list",
      name: "userList",
      //동적 컴포넌트 호출
      component: () => import("../views/UserListView.vue"),
    },
    {
      path: "/user/detail/:id", //콜론으로 주소 변경 가능/ Id 해당값은 필수 값
      name: "userInfo",
      component: () => import("../views/UserInfoView.vue"),
    },
    {
      path: "/user/add",
      name: "userForm",
      component: () => import("../views/UserFormView.vue"),
    },
  ],
});

// export default router;
