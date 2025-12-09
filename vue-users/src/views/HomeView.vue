<!--TOP 화면(메인화면)-->
<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const CounterStore = useCounterStore();
// action 을 제외하고 state, getters를 저장소에 반환
const { count, doubleCount } = storeToRefs(CounterStore);
// action은 바로 구조분해 할당
const { increment } = CounterStore;
</script>
<template>
  <h1>TOP</h1>
  <p>TOP</p>
  <h3>총 회원수 : {{ count }} 명</h3>
  <p><RouterLink to="/user/list">회원 관리는 여기서</RouterLink></p>
</template>
