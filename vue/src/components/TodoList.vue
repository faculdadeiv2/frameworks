<template>
  <div class="app">
    <div class="inputs">
      <input placeholder="Digite uma tarefa" v-model="text" ref="todo" />
      <div class="buttons">
        <button @click="addTodo(text)">Adicionar Tarefa</button>
      </div>
    </div>
    <List :todos="todos" />
  </div>
</template>

<script>
import List from "./List.vue";
export default {
  name: "TodoList",
  components: {
    List,
  },
  data() {
    return {
      todos: ["Aprender VueJs"],
      text: "",
    };
  },
  methods: {
    addTodo(text) {
      if (text) {
        this.todos.push(text);
        this.clearInput();
      }
    },
    clearInput() {
      this.text = "";
      this.$refs.todo.focus();
    },
  },
};
</script>