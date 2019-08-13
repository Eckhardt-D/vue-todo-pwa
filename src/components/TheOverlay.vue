<template>
  <section @touchstart="closeOverlayIfAbove" class="the-overlay">
    <slot></slot>
  </section>
</template>

<script>
export default {
  methods: {
    closeOverlayIfAbove(e) {
      const touch = e.touches[0];
      const xPos = touch.clientX;
      const yPos = touch.clientY;
      const bottom = window.innerHeight - window.innerHeight * 0.05;
      const top = bottom - 73;
      const left = window.innerWidth / 2 - 75;
      const right = window.innerWidth / 2 + 75;
      let onButton = false;

      if (xPos > left && xPos < right) {
        if (yPos > top && yPos < bottom) {
          onButton = true;
        }
      }

      if (!onButton) {
        this.$emit("toggleActions");
      }
    }
  }
};
</script>

<style>
.the-overlay {
  position: fixed;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  /* pointer-events: none; */
}
</style>