<!-- components/Childcomp.vue-->

<script setup>
import { inject } from "vue"; //인젝트를 이용하여 키를 불러옴

const message = inject("message");
</script>

<template>
  <p>{{ message }}</p>
</template>
