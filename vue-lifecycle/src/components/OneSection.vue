<!--components/OneSection.vue-->
<!--각 개별의 컴포넌트를 분리하면 이렇게 저장함-->
<template>
  <section class="box">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <p><button v-on:click="randomVal">임의값 생성</button></p>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"; // 자식이 부모로 부터 받은것을 속성 정의 함,// 부모에게 알림
//props : ReadOnly의 값임 - 수정이 안된다.
// defineProps(["title", "content"]); // 받을 값을 정의 함
defineProps({
  title: {
    type: String, //문자열 타입
    required: true, //필수 값
  },
  content: {
    type: [String, Object], //문자열이나 오브젝트 타입
    default: "No Content", //기본 값 지정
  },
});

const emit = defineEmits(["callStartPoint"]); //동작하고자 하는 것을 가지고 함수를 만들어냄 선언을 해야함
const randomVal = () => {
  emit("callStartPoint", "자식"); // 이벤트를 넘기면서,  어떤 결과 값을 남기고 싶은경우 순서대로 적으면 됨
};
</script>
<style scoped>
section {
  border: blue 3px solid;
  margin: 10px;
}
</style>
