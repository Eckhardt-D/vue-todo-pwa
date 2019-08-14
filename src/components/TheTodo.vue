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
    <v-touch :flex="true" @triggered="toggleActions">
      <v-icon class="todo-more" icon="ellipsis-h"></v-icon>
    </v-touch>
    <the-overlay @toggleActions="toggleActions" v-show="showOverlay">
      <transition name="fade">
        <the-actions-popup
          :complete="todo.complete"
          @complete="completeTodo"
          @reset="resetTodo"
          @delete="deleteTodo"
          :state="showActions"
          v-if="showActions"
          class="popup"
        />
      </transition>
    </the-overlay>
  </section>
</template>

<script>
import VTouch from "@/components/VTouch";
import TheActionsPopup from "@/components/TheActionsPopup";
import TheOverlay from "@/components/TheOverlay";

export default {
  name: "the-todo",
  components: {
    VTouch,
    TheActionsPopup,
    TheOverlay
  },
  props: ["todo"],
  data: function() {
    return {
      showActions: false,
      showOverlay: false,
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
      this.showActions = false;

      setTimeout(() => {
        this.showOverlay = false;
      }, 300);
    },
    resetTodo() {
      const updated = { ...this.todo, complete: false };
      this.$store.commit("UPDATE", updated);
      setTimeout(() => {
        this.showOverlay = false;
      }, 300);
      this.showActions = false;
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
    },
    toggleActions() {
      this.showOverlay = !this.showOverlay;
      this.showActions = !this.showActions;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(250px);
}

.fade-leave-active {
  transform: translateY(250px);
}

.todo-tab {
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
