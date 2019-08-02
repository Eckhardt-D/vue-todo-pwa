<template>
  <button
    @focus="handleClick"
    @touchstart="handleClick"
    @touchend="removeBg"
    @blur="removeBg"
    class="touch-minimizer"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "v-touch",
  methods: {
    handleClick() {
      this.$el.style.background = "rgba(0,0,0,0.2)";
      this.$emit("triggered");
    },
    removeBg() {
      this.$el.style.background = "none";
    }
  }
};
</script>

<style>
.touch-minimizer {
  background: none;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  /* background-color: rgba(0, 0, 0, 0.2); */
  border-radius: 100%;
}
</style>
