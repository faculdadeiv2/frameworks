<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todos.indexOf(todo)">
      <p>{{ todo }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    todos: Array,
  },
};
</script>
