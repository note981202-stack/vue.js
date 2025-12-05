<!-- views/RefVSReactive.vue-->
<script setup>
import { ref, reactive } from "vue";
const hong = ref({
  //반응형이 살아 있음
  name: "Hong",
  age: 25,
  city: "Seoul",
});
let msg = `${hong.value.name} : ${hong.value.age}`;
console.log(msg);

let kang = reactive({
  //리엑티브는 처음부터 객체를 가지는 경우만 가능하고, 대체가 불가능함(=반응형이 작동이 안됨)
  name: "kang",
  age: 30,
  city: "Deagu",
});
msg = `${kang.name} : ${kang.age}`;
console.log(msg);

const newObj = {
  name: "Lee",
  age: 32,
  city: "Jeju",
};
hong.value = newObj;
kang = newObj;
</script>

<template></template>
