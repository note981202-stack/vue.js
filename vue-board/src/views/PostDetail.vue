<!--views/PostDetail.vue-->
<!--상세페이지-->

<template>
  <div>
    <h3 v-if="isNew">게시글 등록</h3>
    <h3 v-else-if="isEditMode">게시글 수정</h3>
    <h3 v-else>글상세</h3>
    <PostForm
      v-if="isNew || isEditMode"
      v-bind:initial-data="isNew ? {} : store.currentPost"
      v-bind:is-new="isNew"
      @submitted="handleSave"
    ></PostForm>
    <div v-else>
      <!--조회 결과-->
      <h3><span style="font-size: small">제목: </span>{{ store.currentPost.title }}</h3>
      <p>작성자: {{ store.currentPost.author }} |</p>
      <p>작성일 {{ store.currentPost.create_date }}</p>
      <p>{{ store.currentPost.content }}</p>

      <div class="action">
        <button @click="isEditMode = true">수정</button>
        <button @click="handleDelete">삭제</button>
      </div>
    </div>

    <button @click="router.push({ name: 'List' })">목록으로</button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";

import PostForm from "@/components/PostForm.vue"; //포스트 폼에다가 데이터를 전달할 것임
import { useBoardStore } from "@/stores/board";

const route = useRoute(); //param정보.
const router = useRouter();
const store = useBoardStore();

//글등록, 수정
const isEditMode = ref(false);
const isNew = computed(() => route.name == "New"); //이름이 뉴이면 9번째 라인에 트루 값을 줌

onMounted(() => {
  //실행 할 함수
  store.fetchPostDetail(route.params.id);
  // isEditMode.value = true;
});

// 이벤트 핸들러 (저장)
const handleSave = async (postData) => {
  const board_id = route.params.id;
  await store.savePost(postData, board_id);

  // 수정/등록
  if (isNew.value) {
    alert("등록되었습니다!");
    router.push({ name: "List" }); // 글목록으로 이동.
  } else {
    alert("수정되었습니다!");
    isEditMode.value = false;
    store.fetchPostDetail(route.params.id);
  }
};

// //삭제
const handleDelete = async () => {
  const board_id = route.params.id;
  await store.deletePost(board_id);

  alert("삭제되었습니다!");
  router.push({ name: "List" });
};

// console.log(route.params.id);
</script>
