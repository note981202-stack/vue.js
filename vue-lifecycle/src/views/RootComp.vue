<!--views/RootComp.vue-->
<script setup>
import { ref, provide } from "vue";
import MiddleComp from "@/components/MiddleComp.vue";
const content = ref("여기에 입력하세요");
//      key      , value
provide("message", content); // 벨류가 아니라 반응형 객체 그자체를 전달
</script>
<template>
  <label>자식에게 전달할 값 : <input v-model="content" /> </label>
  <middle-comp />
</template>
