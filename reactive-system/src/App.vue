<script setup>
import { ref, reactive, computed, watch } from "vue"; //본인이 필요한 함수들을 불러옴
// 1.ref       : CRUD가 가능한 반응형 객체를 만드는 함수 중 하나
//            1)데이터의 타입과 무관함
//            2)재할당이 가능함 = 값을 변경 할 수 있다
// 2.reactive : CRUD가 가능한 반응형 객체를 만드는 함수 중 하나
//            1)데이터 중 객체, 배열만 가능
//            2)재할당이 불가능
//CRUD = 선언된 객체가 변경이 가능함
// 3.computed : ReadOnly만 가능한 반응형 객체를 만드는 함수
let msg = "Hello world";

const now = new Date(); // 현재 일시
const nowStr = now.toLocaleTimeString(); //시간을 문자열로 가지고 옴

let timeStr = nowStr; //일반 변수
const timeStrRef = ref(nowStr); // 반응형 객체 : 값을 감싸는 형태

function chageTime() {
  const newTime = new Date(); //실행시점 일시
  const newTimeStr = newTime.toLocaleTimeString();
  //각 변수에 변경된 일시를 업데이트
  timeStr = newTimeStr;
  timeStrRef.value = newTimeStr; //반응형 객체에 벨류값으로 반응을 한다?
}

setInterval(chageTime, 1000);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>현재시간 : {{ timeStr }}</p>
  <p>현재시간(ref) : {{ timeStrRef }}</p>
  <!--머스테시는 벨류값이 기본적으로 들어 있어서 벨류를 따로 적어주지 않아도 됨-->
</template>

<style scoped></style>
