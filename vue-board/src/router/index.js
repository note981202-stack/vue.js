import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import PostDetail from "../views/PostDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 글 목록.
      path: "/",
      name: "List",
      component: PostList,
    },
    {
      // 상세 화면.
      path: "/post/:id",
      name: "Detail",
      component: PostDetail,
      props: true,
    },
    {
      // 글 등록.
      path: "/post/New",
      name: "New",
      component: PostDetail,
    },
  ],
});

export default router;
