<script setup>
//맨 처음에 보여지는 페이지
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1>vue 라우터 샘플</h1>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  border: 2px black solid;
}
</style>
