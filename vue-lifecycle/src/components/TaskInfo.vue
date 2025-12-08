<!-- components/TaskInfo.vue-->
<script setup>
import { defineProps, defineEmits } from "vue";
// todo가 필요
const props = defineProps({
  //
  todo: Object,
});

const emit = defineEmits(["taskChecked", "delTask"]);

const todoComplete = () => {
  //체크를 선택했다 어떤걸? 프롭스에 투두에 넘버를
  emit("taskChecked", props.todo.no);
};

const delTodo = () => {
  emit("delTask", props.todo.no);
};
</script>

<template>
  <!--자식 컴포넌트로 만들예정-->
  <li v-bind:class="{ checked: todo.complete }" v-on:click="todoComplete">
    {{ todo.task }}
    <span v-on:click.stop="delTodo" class="close">X</span>
  </li>
</template>

<style></style>
