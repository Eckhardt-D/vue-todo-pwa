<template>
  <section class="footer-nav">
    <div class="new-item-container" @click="openModal">
      <v-icon icon="plus"></v-icon>
    </div>
    <div @click="changeMode()" class="previous-items-container">
      <v-touch :flex="false">
        <v-icon class="bottom-icon" icon="clock"></v-icon>
        <p v-if="mode == 'today'">Previous</p>
        <p v-else>Today</p>
      </v-touch>
    </div>
  </section>
</template>

<script>
import VTouch from "@/components/VTouch";
export default {
  name: "the-bottom-nav",
  components: {
    VTouch
  },
  computed: {
    mode() {
      return this.$store.state.mode;
    }
  },
  methods: {
    openModal() {
      this.$store.commit("CHANGE_CREATING");
    },
    changeMode() {
      if (this.mode == "previous") {
        this.$store.commit("CHANGE_MODE", "today");
      } else {
        this.$store.commit("CHANGE_MODE", "previous");
      }
      this.$router.push("/");
    }
  }
};
</script>

<style>
.footer-nav {
  display: flex;
  justify-content: flex-end;
  padding: 0px 10%;
  border-top: 1px solid black;
  align-items: center;
  z-index: 2;
  background: #fff;
}

.new-item-container {
  width: 50px;
  height: 50px;
  background: #73d16a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 1.2em;
  position: absolute;
  left: calc(50% - 25px);
  bottom: 25px;
}

.completed-items-container,
.previous-items-container {
  text-align: center;
}

.bottom-icon {
  font-size: 1.6em;
}

.completed-items-container p,
.previous-items-container p {
  font-size: 0.6em;
  margin: 0;
  margin-top: 3px;
}
</style>
