<template>
  <div id="app">
    <the-header v-if="!hideNavs" class="fixed-header" />
    <the-date-display v-if="!hideNavs" class="fixed-date" />
    <router-view class="space-top" />
    <the-bottom-nav v-if="!hideNavs" class="fixed-bottom"></the-bottom-nav>
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
  computed: {
    hideNavs() {
      return this.$store.state.hideNavs;
    }
  },
  beforeCreate() {
    this.$store.dispatch("getTodos").catch(e => console.error(e));

    if (
      !navigator.userAgent.match(/Android/i) &&
      !navigator.userAgent.match(/webOS/i) &&
      !navigator.userAgent.match(/iPhone/i) &&
      !navigator.userAgent.match(/iPad/i) &&
      !navigator.userAgent.match(/iPod/i) &&
      !navigator.userAgent.match(/BlackBerry/i) &&
      !navigator.userAgent.match(/Windows Phone/i)
    ) {
      this.$store.commit("HIDE_NAVS");
      this.$router.push("/device");
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500i&display=swap");
body {
  margin: 0;
  padding: 0;
  min-width: 100%;
  /* position: relative; */
  min-height: calc(100vh - 112px - 50px);
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.space-top {
  margin-top: calc(112px + 1em);
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
  height: 50px;
}

.fixed-date {
  top: 52px;
}
</style>
