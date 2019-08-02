<template>
  <section class="current-date">
    <p>{{ new Date().toLocaleDateString("en-US", options) }}</p>
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
  })
};
</script>

<style>
.current-date {
  text-align: center;
}

.current-date p {
  font-size: 1.1em;
  font-weight: bold;
  margin: 24.5px 0;
}
</style>
