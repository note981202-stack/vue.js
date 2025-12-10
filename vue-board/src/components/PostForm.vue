<!--components/PostForm.vue-->
<!--디테일 부분을 자동화 하려고 함-->

<template>
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="title">제목</label>
      <input id="title" type="text" v-model="form.title" />
    </div>
    <div>
      <label for="author">작성자</label>
      <input type="text" id="author" v-model="form.author" />
    </div>
    <div>
      <label for="content">내용</label>
      <textarea name="" id="content" v-model="form.content"></textarea>
    </div>
    <div>
      <button type="submit">{{ isNew ? "등록" : "수정" }}</button>
      <!--상황에 따라 등록인지 수정인지 버튼이 바뀜-->
    </div>
  </form>
</template>

<script setup>
import { defineEmits, defineProps, reactive, watch } from "vue";

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({
      title: "",
      content: "",
      author: "",
    }),
  },
  isNew: {
    type: Boolean,
    dafault: false,
  },
});

const emit = defineEmits(["submitted", "canceled"]);

const form = reactive({
  //가져온 값을 넣어두기 위함
  title: "",
  content: "",
  author: "",
});

//단건조회 기능
watch(
  () => props.initialData, //(감시할 대상. 실행할 함수)
  (newVal) => {
    if (newVal) {
      form.title = newVal.title || "";
      form.content = newVal.content || "";
      form.author = newVal.author || "";
    }
  },
  { immediate: true },
);

//form 이벤트.
const submitForm = () => {
  if (!form.title || !form.content || !form.author) {
    alert("값을 입력해주세요");
    return;
  }
  emit("submitted", { title: form.title, content: form.content, author: form.author });
};
</script>
