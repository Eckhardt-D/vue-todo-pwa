<template>
  <div id="app">
    <the-header class="fixed-header" />
    <the-date-display class="fixed-date" />
    <router-view class="space-top" />
    <the-bottom-nav class="fixed-bottom"></the-bottom-nav>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheDateDisplay from "@/components/TheDateDisplay";
import TheBottomNav from "@/components/TheBottomNav";

export default {
  name: "app",
  components: {
    TheHeader,
    TheDateDisplay,
    TheBottomNav
  },
  beforeCreate() {
    this.$store.dispatch("getTodos").catch(e => console.error(e));
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500i&display=swap");
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.space-top {
  margin-top: 112px;
}
.fixed-header,
.fixed-date {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.fixed-bottom {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}

.fixed-date {
  top: 52px;
}
</style>
