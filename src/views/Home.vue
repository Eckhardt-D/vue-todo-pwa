<template>
  <main class="home">
    <section class="todo-container">
      <draggable
        :list="localTodos"
        :disabled="!enabled"
        class="list-group"
        ghost-class="ghost"
        handle=".drag-handle"
        @start="dragging = true"
        @end="updateDatabase"
      >
        <transition-group>
          <the-todo
            v-for="todo in localTodos"
            v-if="mode == 'today' && isTodayAndIncomplete(todo)"
            :todo="todo"
            :key="todo.id"
          />
          <the-todo
            v-for="todo in localTodos"
            v-if="mode == 'previous' && !isTodayAndIncomplete(todo)"
            :todo="todo"
            :key="todo.id"
          />
        </transition-group>
      </draggable>
    </section>
    <the-add-modal :open="modal" />
  </main>
</template>

<script>
import TheTodo from "@/components/TheTodo";
import TheAddModal from "@/components/TheAddModal";
import draggable from "vuedraggable";

export default {
  name: "home",
  components: {
    TheTodo,
    draggable,
    TheAddModal
  },
  data: () => ({
    enabled: true,
    dragging: false
  }),
  computed: {
    modal() {
      return this.$store.state.creating;
    },
    localTodos() {
      return this.$store.state.todos;
    },
    mode() {
      return this.$store.state.mode;
    }
  },
  methods: {
    updateDatabase() {
      const currentOrder = this.localTodos;
      this.$store.commit("SYNC", currentOrder);
    },
    isTodayAndIncomplete(todo) {
      const todayArr = new Date().toLocaleDateString("en-US").split("/");
      const tomArr = todo.created.toLocaleDateString("en-US").split("/");

      const sameYear = todayArr[2] == tomArr[2];
      const sameMonth = todayArr[0] == tomArr[0];
      const sameDay = todayArr[1] == tomArr[1];

      if (sameYear && sameMonth && sameDay) {
        return true;
      }
    }
  }
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

