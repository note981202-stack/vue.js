<script setup>
import Modalinfo from "./components/Modalinfo.vue";
</script>

<template>
  <RouterLink to="/computed">Computed</RouterLink> ||
  <RouterLink to="/watch">Watch</RouterLink> ||
  <RouterLink to="/hook">hook</RouterLink> ||
  <RouterLink to="/OneComp">OneComponentApp</RouterLink> ||
  <RouterLink to="/ParentComp">ParentComponentApp</RouterLink> ||
  <RouterLink to="/RootComp">RootComp</RouterLink> ||
  <RouterLink to="/ModatInfo">ModatInfo</RouterLink> ||
  <RouterLink to="/todoList">TodoList</RouterLink>
  <br />

  <RouterView />
  <Modalinfo />
</template>

<style scoped></style>
