<template>
  <div id="app">
    <the-header />
    <the-date-display />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheDateDisplay from "@/components/TheDateDisplay";

export default {
  name: "app",
  components: {
    TheHeader,
    TheDateDisplay
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
</style>
