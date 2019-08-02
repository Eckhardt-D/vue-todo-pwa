<template>
  <section v-if="open" class="create-overlay">
    <div class="create-modal">
      <p class="modal-title">Create a todo</p>
      <input v-model="todoTitle" placeholder="Title" type="text" />
      <p v-if="isError" class="err-msg"><small>Cannot be empty!</small></p>
      <div class="modal-actions">
        <button @click="createTodo">Save</button>
        <button @click="closeModal">Cancel</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "the-add-modal",
  props: ["open"],
  data: () => ({
    todoTitle: "",
    isError: false
  }),
  methods: {
    createTodo() {
      if (this.todoTitle == "") {
        this.isError = true;
      } else {
        this.$store.commit("CREATE", { title: this.todoTitle });
        this.closeModal();
        this.$router.push("/");
      }
    },
    closeModal() {
      this.isError = false;
      this.todoTitle = "";
      this.$store.commit("CHANGE_CREATING");
    }
  },
  watch: {
    open(changed) {
      if (changed) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }
  },
  mounted() {
    if (this.open) {
      document.body.classList.add("no-scroll");
    }
  }
};
</script>

<style>
.create-overlay {
  position: fixed;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  /* pointer-events: none; */
}

.create-modal {
  background: white;
  margin: 0 auto;
  padding: 1.5em 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.create-modal input {
  font-size: 1.1em;
  margin: 16px 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0.5em;
  border-radius: 5px;
}

.modal-title {
  margin: 0;
  font-weight: bold;
}

.err-msg {
  margin-bottom: 5px;
  color: #ff6666;
  margin-top: -10px;
}

.no-scroll {
  overflow: hidden;
  position: fixed;
}

.modal-actions button {
  text-align: center;
  text-transform: uppercase;
  padding: 9px 12px;
  font-size: 0.9em;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  background: #fff;
  border-radius: 5px;
  margin-right: 5px;
  color: white;
  font-weight: bold;
}

.modal-actions button:first-of-type {
  background: #73d16a;
}

.modal-actions button:last-of-type {
  background: #ff6666;
}
</style>
