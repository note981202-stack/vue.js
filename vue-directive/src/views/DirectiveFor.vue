<!--Views/DirectiveFor.vue-->
<script setup>
import { ref } from "vue";

const aray = ["마우스", "키보드", "USB", "마우스패드", "게임기"];
const itemList = ref(aray);

const friends = ref(["홍길동", "김명선"]);
let newFriend = ref("박우석");
const addNewFriend = () => {
  friends.value.push(newFriend.value.trim());
  newFriend.value = "";
};
</script>

<template>
  <h2>전자기기 목록</h2>
  <ul>
    <li v-for="item in itemList">
      {{ item }}
    </li>

    <br />

    <li v-for="item in itemList" v-bind:key="item">
      <!--키는 주민등록 번호라고 생각하면 됨 / 포문을 출력하게 될때 새로운 정보가 있으면 그 정보만 새로 출력하게 하기 위해서 각각의 키 값을 부여하게 됨-->
      {{ item }}
    </li>
  </ul>

  <h2>친구 목록</h2>
  새로운 친구:
  <input type="text" v-model="newFriend" v-on:change="addNewFriend" />
  <ul>
    <li v-for="(name, idx) in friends" v-bind:key="name">
      {{ `${idx} : ${name}` }}
    </li>
  </ul>
</template>
