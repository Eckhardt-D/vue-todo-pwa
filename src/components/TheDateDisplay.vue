<template>
  <section class="current-date">
    <p v-if="!previous">
      {{ new Date().toLocaleDateString("en-US", options) }}
    </p>
    <p v-else>Previously added</p>
  </section>
</template>

<script>
export default {
  name: "the-date-display",
  data: () => ({
    options: {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  }),
  computed: {
    previous() {
      return this.$store.state.mode != "today";
    }
  }
};
</script>

<style>
.current-date {
  text-align: center;
  background-color: #f4f4f4;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.current-date p {
  font-size: 1.1em;
  font-weight: bold;
  margin: 19.5px 0;
}
</style>
