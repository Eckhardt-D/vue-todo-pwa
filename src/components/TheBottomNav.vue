<template>
  <section class="footer-nav">
    <div class="completed-items-container">
      <v-touch :flex="false">
        <v-icon class="bottom-icon" icon="check"></v-icon>
        <p>Completed</p>
      </v-touch>
    </div>
    <div class="new-item-container">
      <v-icon icon="plus"></v-icon>
    </div>
    <div class="previous-items-container">
      <v-touch :flex="false">
        <v-icon class="bottom-icon" icon="clock"></v-icon>
        <p>Previous</p>
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
  }
};
</script>

<style>
.footer-nav {
  display: flex;
  justify-content: space-between;
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
