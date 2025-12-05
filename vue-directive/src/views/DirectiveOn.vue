<!--views/DirectiveOn.vue-->

<script setup>
import { ref, computed } from "vue";
//Data
const randValue = ref("시작 전");

//이벤트 핸들러
const onClickFnc = () => {
  const rand = Math.random(Math.random() * 100);
  randValue.value = rand;
};
/*
const selectTag = (event) => {
  let selectedTag = event.currentTarget.tagName;
  if (selectedTag == 'A') event.preventDefault(); //A태그의 핸들러를 무력화 시킴
  alert(`Tag : ${selectedTag}`);
};
*/

const selectTag = (selectedTag) => {
  alert(`Tag : ${selectedTag}`);
};
</script>

<template>
  <div>
    <!--멀티 이벤트가 가능 함-->
    <button v-on:mouseover="randValue" "v-on:click="onClickFnc"">클릭</button>
    <p>결과 : {{ randValue }}</p>
  </div>
  <div v-on:click="selectTag('div')"> div
    <form v-on:click.stop.self="selectTag('form')"> form
      <a href="https://www.naver.com" v-on:click.prevent="selectTag()">
        <p v-on:click.once="selectTag('p')">네이버</p>
      </a>
    </form>
  </div>
  <br/>
  <input v-on:keyup.ctrl.enter="selectTag('input')"></input>
</template>
