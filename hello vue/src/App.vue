<!--여기가 메인 격의 장소임-->
<!--컴포넌트 안에 js, html, css가 모두 들어감-->

<script setup>
// 셋업이 있어야 컴포지션의 기능을 사용할 수 있음 = 없으면 문법이 달라짐
// 셋업: 유무에 따라 의미가 다름 -----------js----------------------------
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import TestComp from "./components/TestComponent.vue";
</script>

<template>
  <!---------------------html---------------------------->
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TestComp />
    <hr />
    <TestComp />
    <TheWelcome />
  </main>
</template>

<style scoped>
/*스코프는 현재의 컴포넌트만 설정하게 함 - 각각 독립적인 스타일을 줄 때 사용함*/
/*-----------------------css-------------------*/
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
