<template>
  <header>
    <div class="branding">
      <h3><v-icon id="branding-icon" icon="check-square" /></h3>
      <h3 class="branding-text">CHEKT</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: "the-header"
};
</script>

<style scoped>
header {
  width: 100%;
  height: 52px;
  background-color: #fff;
}

.branding {
  display: flex;
  align-items: center;
  justify-content: center;
}

#branding-icon {
  color: #3941ff;
}

.branding-text {
  font-style: italic;
  margin-left: 5px;
}
</style>
