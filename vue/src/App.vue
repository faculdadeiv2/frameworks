<template>
  <h1>TodoList com vue</h1>
  <TodoList />
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
* {
  font-family: sans-serif;
  margin: 0;
}
</style>
