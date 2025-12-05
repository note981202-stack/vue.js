<script setup>
import { ref } from "vue";

const message = ref("메세지를 입력해주세요!"); // ref 객체를 생성하는 함수 p.64
</script>

<template>
  <!-- 필수 요소 -->
  <div>
    <h1>{{ message }}</h1>
    <!-- '{{' 머스테시라고 부르고 h1, div같은 태그에서 실시간으로 반영이 됨   -->
    <input type="text" v-model="message" />
    <!--데이터 바인딩, v-으로 시작하는 것은 뷰의 문법임  -->
  </div>
</template>

<style></style>
