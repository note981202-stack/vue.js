<!--회원 정보 추가 화면-->
<!--/user/add-->

<script setup>
import { RouterLink, useRouter } from "vue-router";
import axios from "axios";
const router = useRouter(); // vue-router 자체

import { reactive } from "vue";
const info = reactive({
  //서버와 통신을 할때에는 서버에서 쓰는 값을 넣어야 함
  id: "",
  name: "",
  email: "",
  phone: "",
});

import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();
const { increment } = counterStore;

const fakeServer = "https://jsonplaceholder.typicode.com";
const addUser = async () => {
  // 서버에 등록하는 함수
  let res = await axios
    .post(`${fakeServer}/users`, info)
    .catch((err) => console.log(err));
  info.id = res.data.id;

  increment();
  // router.push({ name: "userList" }); //to 속성과 같은 값을 여기에 넣으면 됨
};
</script>

<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink :to="{ name: 'home' }">TOP</RouterLink> >
    <RouterLink :to="{ path: '/user/list' }">회원리스트</RouterLink> > 회원 정보
    추가
  </p>

  <h3>회원 정보 추가</h3>
  <div>
    <h4>정보를 입력하고 등록 버튼을 클릭해주세요</h4>
    <div><span>ID</span><input type="text" v-model="info.id" readonly /></div>
    <div><span>이름</span><input type="text" v-model="info.name" /></div>
    <div><span>이메일</span><input type="email" v-model="info.email" /></div>
    <div><span>연락처</span><input type="text" v-model="info.phone" /></div>
    <button type="button" @click="addUser">등록</button>
    <!--on은 @를 써서 단축해서 사용 가능-->
  </div>
</template>

<style>
span {
  font-weight: bold;
}
</style>
