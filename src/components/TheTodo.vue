<template>
  <section class="todo-tab">
    <v-touch v-if="mode == 'today'" :flex="true" class="drag-handle">
      <v-icon class="todo-sort" icon="bars" />
    </v-touch>
    <p
      v-if="!editMode"
      :style="{ 'text-decoration': todo.complete ? 'line-through' : 'none' }"
      @touchstart="startEdit"
      @click="startEdit"
      class="todo-text"
    >
      {{ todo.title }}
    </p>
    <input
      @blur="stopEdit"
      class="edit-input"
      v-model="newTitle"
      v-if="!todo.complete && editMode"
      type="text"
    />
    <v-touch :flex="true" @triggered="showActions = !showActions">
      <v-icon class="todo-more" icon="ellipsis-h"></v-icon>
    </v-touch>
    <the-actions-popup
      :complete="todo.complete"
      @complete="completeTodo"
      @reset="resetTodo"
      @delete="deleteTodo"
      v-if="showActions"
      class="popup"
    />
  </section>
</template>

<script>
import VTouch from "@/components/VTouch";
import TheActionsPopup from "@/components/TheActionsPopup";

export default {
  name: "the-todo",
  components: {
    VTouch,
    TheActionsPopup
  },
  props: ["todo"],
  data: function() {
    return {
      showActions: false,
      editMode: false,
      newTitle: this.todo.title
    };
  },
  computed: {
    mode() {
      return this.$store.state.mode;
    }
  },
  methods: {
    completeTodo() {
      const updated = { ...this.todo, complete: true };
      this.$store.commit("UPDATE", updated);
    },
    resetTodo() {
      const updated = { ...this.todo, complete: false };
      this.$store.commit("UPDATE", updated);
    },
    deleteTodo() {
      this.$store.commit("DELETE", this.todo);
    },
    startEdit() {
      this.editMode = true;
    },
    stopEdit() {
      const editedTodo = { ...this.todo, title: this.newTitle };
      this.$store.commit("UPDATE", editedTodo);
      this.editMode = false;
    }
  }
};
</script>

<style>
.todo-tab {
  position: relative;
  height: calc((100vh - (112px + 51px)) / 6);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);
  padding: 0 10px;
  margin: 1em;
  border-radius: 5px;
  box-shadow: 1.5px 1.5px 5px #a2bdc354;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
}

.popup {
  position: absolute;
  z-index: 2;
  right: 40px;
  top: 75%;
}

.todo-text {
  text-align: left;
  overflow: hidden;
}

.todo-sort {
  font-size: 16px;
  color: #394c50;
}

.todo-more {
  font-size: 18px;
  color: #394c50;
}

.edit-input {
  font-size: 1.1em;
  text-align: center;
}
</style>
