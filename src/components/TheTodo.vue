<template>
  <section class="todo-tab">
    <v-touch :flex="true" class="drag-handle" @triggered="startDrag">
      <v-icon class="todo-sort" icon="bars" />
    </v-touch>
    <p class="todo-text">
      {{ title }}
    </p>
    <v-touch :flex="true" @triggered="openMenu">
      <v-icon class="todo-more" icon="ellipsis-h"></v-icon>
    </v-touch>
  </section>
</template>

<script>
import VTouch from "@/components/VTouch";
export default {
  name: "the-todo",
  components: {
    VTouch
  },
  props: ["title", "status", "id"],
  methods: {
    openMenu() {
      console.log("clicked");
    },
    startDrag() {
      console.log("dragging");
    }
  }
};
</script>

<style>
.todo-tab {
  height: calc((100vh - (112px + 51px)) / 6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  padding: 0 30px;
}

.todo-text {
  text-align: left;
  overflow: hidden;
}

.todo-sort {
  font-size: 18px;
}

.todo-more {
  font-size: 20px;
}
</style>
