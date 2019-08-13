<template>
  <button
    :style="{ 'flex-direction': flex ? 'row' : 'column' }"
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
  props: ["flex"],
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
  display: flex;
  text-align: center;
  background: none;
  border: none;
  outline: none;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 100%;
}
</style>
