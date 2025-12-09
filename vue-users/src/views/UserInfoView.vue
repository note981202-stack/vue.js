<!-- 회원 상세 정보 화면 -->
<script setup>
import { RouterLink, useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue"; 
import axios from "axios";    //서버랑 통신해야하기 때문

const route = useRoute(); //호출당한 정보
const userId = route.params.id;

const info = ref({});
const fakeServer = "https://jsonplaceholder.typicode.com";
const getUserInfo = async (id) => {
  const res = await axios
  .get(`${fakeServer}/users/${id}`)
  .catch((err) => console.log(err));
  info.value = res.data;
};

onBeforeMount(() => {
  getUserInfo(userId);
});
</script>

<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink :to="{ name: 'home'}" > TOP  > </RouterLink>
    <RouterLink :to="{ name: 'userList'}"> 회원리스트 > </RouterLink>
     회원 상세 정보

    <h3>회원 상세 정보</h3>

  </p>
  <div>
    <div><span>ID</span>{{ info.id }}</div>
    <div><span>이름</span>{{ info.name }}</div>
    <div><span>이메일</span>{{ info.email }}</div>
    <div><span>연락처</span>{{ info.phone }}</div>
  </div>
</template>

<style>
span {
  font-weight: bold;
}
</style>
