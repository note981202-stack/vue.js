<!--views/ ComputedReactive.vue -->
<script setup>
// 2.reactive : CRUD가 가능한 반응형 객체를 만드는 함수 중 하나
//            1)데이터 중 객체, 배열만 가능 : 단일값을 처리 못 함
//            2)재할당이 불가능
import { reactive, computed } from "vue";
const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10), // 반응형 객체 = 값 이기 때문에 value라는 속성을 사용할 필요가 없다.
});

const area = computed(() => {
  return data.radius * data.radius * data.PI;
});
</script>

<template>
  <h2>원의 면적</h2>
  <p>반지름이 {{ data.radius }} 이고</p>
  <p>원주율 {{ data.PI }} 인 원의 면적은 {{ area }}</p>
</template>
