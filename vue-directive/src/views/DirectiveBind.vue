<!--views/DirectiveBind.vue-->
<script setup>
//Directive(디렉티브) : HTML Tag를 제어하는 명령어
// v-bind : HTML Tag의 속성에 데이터를 바인드하는 디렉티브
//        단방향 바인딩만 가능함(변수 => HTML) - 변수가 넘어가는 건 가능하지만 반대의 기능은 안됨

import { ref, reactive, computed } from "vue";
const url = ref("http://vuejs.org");
const isDisabled = ref(true);
const imgAttributes = reactive({
  //필드명 => 속성이름
  src: "./src/assets/logo.svg",
  alt: "vue 기본 로고",
  width: "150px",
});

// style 속성 : css 기반 항목도 값도 이미 정해져 있음. css에서쓰는 항목만 써야함
const txtColor = ref("pink");
const backColor = ref("green");
const styleAttributes = reactive({
  color: "pink",
  backgroundColor: "green", //background-color은 작동이 안됨 그래서 뷰에서 자동으로 바꿔줌
});

//--------------------------------------------------------------------------------
// class 속성
const msg = ref("Hello, world");
const isTxtColorRed = ref(true);
const isBgColorBlue = ref(true);
const classStyles = reactive({
  txtColorRed: true,
  BgColorBlue: false,
  txtSize24: true,
});
const classInfo = ref("txtColorRed txtSize24");
</script>

<template>
  <h2>특수 속성의 경우</h2>
  <p v-html="url"></p>
  <p v-text="url"></p>
  <p>vuejs 공식사이트 : {{ url }}</p>
  <hr />
  <h2>일반속성</h2>
  <p><a href="http://vuejs.org">Vue.js 사이트</a></p>
  <p>
    <a
      v-bind:href="url"
      v-bind:style="{ color: txtColor, backgroundColor: backColor }"
      >Vue.js 사이트</a
    >
  </p>
  <!--단방향 변수 바인딩 선언-->
  <p>
    <a
      v-bind:href="url + '/guide/introduction.html'"
      v-bind:style="styleAttributes"
      >Vue.js 가이드 페이지</a
    >
  </p>
  <p><button v-bind:disabled="isDisabled">동의합니다.</button></p>
  <p><img alt="vue 로고" v-bind="imgAttributes" /></p>
  <h2>Class 속성</h2>
  <p id="cp" v-bind:class="classInfo">{{ msg }}</p>
  <p
    v-bind:class="{
      txtColorRed: isTxtColorRed,
      bgColorBlue: isBgColorBlue,
    }"
  >
    {{ msg }}
  </p>
  <p v-bind:class="classStyles">{{ msg }}</p>

  <!--객체로 해야함-->
</template>

<style scoped>
.txtColorRed {
  color: red;
}
.txt-color-pink {
  color: pink;
}
.bgColorBlue {
  background-color: blue;
}
.txtSize24 {
  font-size: 24px;
}
</style>
