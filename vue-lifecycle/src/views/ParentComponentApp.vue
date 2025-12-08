<!-- views/OneComponentApp.vue-->
<template>
  <h1>컴포넌트 기초</h1>
  <p>{{ startName }}/별점 : {{ startPoint }}</p>
  <button v-on:click="createStartpoint('부모')">임의값 생성</button>
  <section>
    <h2>컴포넌트 1개</h2>
    <!-- <OneSection title="홍길동" content="반갑습니다." /> -->
    <OneSection v-on:call-start-point="createStartpoint" />
  </section>
  <section>
    <h2>컴포넌트 여러개</h2>
    <OneSection
      v-for="post in postList"
      v-bind:title="post.name"
      v-bind:content="post.message"
      v-on:call-start-point="createStartpoint"
    />
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
//import만 하면 자동으로 하위요소 등록이 됨.
import OneSection from "@/components/OneSection.vue";

const postList = reactive([
  { name: "김민교", message: "Hello" },
  { name: "김상우", message: "Good Mormning" },
  { name: "이한나", message: "Today is ..." },
]);

const startName = ref("초기값");
const point = Math.ceil(Math.random() * 5);
const startPoint = ref(point);
const createStartpoint = (name) => {
  //emit의 이벤트를 처리하는 핸들러 : 매개변수가 자식이 전달하는 값
  startPoint.value = Math.ceil(Math.random() * 5);
  startName.value = name;
};
</script>

<style>
section {
  border: green 3px dashed;
  margin: 10px;
}
</style>
