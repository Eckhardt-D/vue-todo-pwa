<template>
  <the-overlay v-if="open">
    <div class="create-modal">
      <p class="modal-title">Create a todo</p>
      <input v-model="todoTitle" placeholder="Title" type="text" />
      <div>
        <input v-model="setReminder" type="checkbox" name="set-reminder" id="set-reminder" />
        <label style="margin-left: 5px;" for="set-reminder">Set reminder?</label>
      </div>
      <div v-if="setReminder" style="width: 100%;">
        <input
          v-model="remindOn"
          style="width: 93%;"
          type="datetime-local"
          name="notification-date"
          id="notification-date"
        />
      </div>
      <p v-if="isError" class="err-msg">
        <small>Cannot be empty!</small>
      </p>
      <div class="modal-actions">
        <button @click="createTodo">Save</button>
        <button @click="closeModal">Cancel</button>
      </div>
    </div>
  </the-overlay>
</template>

<script>
import TheOverlay from "@/components/TheOverlay";

export default {
  name: "the-add-modal",
  props: ["open"],
  components: {
    TheOverlay
  },
  data: () => ({
    todoTitle: "",
    isError: false,
    setReminder: false,
    remindOn: ""
  }),
  methods: {
    createTodo() {
      if (this.setReminder == true && this.remindOn == "") {
        this.isError = true;
        return false;
      }

      if (this.todoTitle == "") {
        this.isError = true;
        return false;
      }

      if (this.setReminder && this.remindOn) {
        this.$store.commit("CREATE", {
          title: this.todoTitle,
          at: new Date(this.remindOn)
        });
      } else {
        this.$store.commit("CREATE", { title: this.todoTitle });
      }

      this.closeModal();
      this.$router.push("/");
    },
    closeModal() {
      this.isError = false;
      this.todoTitle = "";
      this.setReminder = false;
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
    },
    todoTitle(changed) {
      this.isError = false;
    },
    remindOn(changed) {
      this.isError = false;
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
.create-modal {
  background: white;
  margin: 0 auto;
  padding: 1.5em 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.create-modal input {
  font-size: 1.1em;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0.5em;
  border-radius: 5px;
}

.create-modal input[type="text"] {
  margin: 16px 0;
}

.create-modal input[type="checkbox"],
.create-modal input[type="datetime-local"] {
  margin: 0px 0px 16px 0px;
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
