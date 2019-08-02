<template>
  <main class="home">
    <section class="todo-container">
      <draggable
        :list="mockArray"
        :disabled="!enabled"
        class="list-group"
        ghost-class="ghost"
        handle=".drag-handle"
        @start="dragging = true"
        @end="dragging = false"
      >
        <transition-group>
          <the-todo
            v-for="todo in mockArray"
            :title="todo.title"
            :key="todo.id"
          />
        </transition-group>
      </draggable>
    </section>
  </main>
</template>

<script>
import TheTodo from "@/components/TheTodo";
import draggable from "vuedraggable";

export default {
  name: "home",
  components: {
    TheTodo,
    draggable
  },
  data: () => ({
    mockArray: [
      { id: 1, title: "hello1", status: "incomplete" },
      { id: 2, title: "hello2", status: "incomplete" },
      { id: 3, title: "hello3", status: "incomplete" },
      { id: 4, title: "hello1", status: "incomplete" },
      { id: 5, title: "hello2", status: "incomplete" },
      { id: 6, title: "hello3", status: "incomplete" },
      { id: 7, title: "hello1", status: "incomplete" },
      { id: 8, title: "hello2", status: "incomplete" },
      { id: 9, title: "hello3", status: "incomplete" }
    ],
    enabled: true,
    dragging: false
  })
};
</script>

<style>
.todo-container {
  min-height: calc((100vh - (112px + 51px)) / 5);
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>

