<!-- views/UserListView.vue-->
<!--회원 리스트 화면-->
<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
const router = useRouter();
const goToDetail = (seletedId) => {
  //params : 반드시 path에 : 으로 선언되어야 하고 필수값을 요구함 - 페이지가 안열릴수도 있음
  //query : path에 표기 안 함, 선택값을 처리할 때 사용 - 애매하면 쿼리를 사용함
  router.push({ name: "userInfo", params: { id: seletedId } });
  // router.push({ name: "userList", query: { id: "33456" } });
};

import { useCounterStore } from "@/stores/counter"; // 피니아 저장소를 불러옴
const CounterStore = useCounterStore;
import { onBeforeMount, ref } from "vue"; //훅
import axios from "axios"; //아작스
const fakeServer = "https://jsonplaceholder.typicode.com";
const users = ref([]); // 데이터를 받을 공간
const getUserList = async () => {
  const res = await axios
    .get(`${fakeServer}/users`)
    .catch((err) => console.log(err));
  users.value = res.data;

  CounterStore.count = users.value.length;
};

onBeforeMount(() => {
  //해당 훅에서 어떤 작업을 할 건지 정의하므로 함수 형태
  //=> 서버에 데이터 요청
  getUserList();
});
</script>

<template>
  <h1>회원 관리</h1>
  <p><RouterLink :to="{ name: 'home' }"> TOP > </RouterLink> 회원리스트</p>
  <h3>회원리스트</h3>
  <p>
    신규 등록은
    <RouterLink :to="{ path: '/user/add' }">여기</RouterLink>서 클릭
  </p>
  <!--괄호 안에 주소를 괄호 없이 직접 넣으면 오류남-->
  <ul>
    <li v-for="user in users" :key="user.id" @click="goToDetail(user.id)">
      ID가 {{ user.id }}인 {{ user.name }}님
    </li>
  </ul>
  <RouterView v-bind:key="$route.fullPath" />
</template>
