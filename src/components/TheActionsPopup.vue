<template>
  <div class="action-box">
    <button v-if="!complete" @click="$emit('complete')" class="complete">
      Complete
    </button>
    <button v-else @click="$emit('reset')" class="complete">
      Reset
    </button>
    <hr style="width: 98%; color: rgba(0,0,0,0.2); margin: 0;" />
    <button @click="$emit('delete')" class="delete">Delete</button>
  </div>
</template>

<script>
export default {
  name: "the-action-popup",
  props: ["complete"]
};
</script>

<style>
.action-box {
  width: 122px;
  height: 72px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.action-box button {
  border: none;
  flex-basis: 50%;
  width: 100%;
  text-align: center;
  background: #fff;
}

.action-box button:first-of-type,
.action-box button:first-of-type:active,
.action-box button:first-of-type:focus {
  outline: none;
  /* border-bottom: 0.5px solid rgba(0, 0, 0, 0.2); */
  border-radius: 10px 10px 0 0;
  color: #73d16a;
  font-weight: bold;
}

.action-box button:last-of-type,
.action-box button:last-of-type:active,
.action-box button:last-of-type:focus {
  outline: none;
  border-radius: 0 0 10px 10px;
  /* border-top: 0.5px solid rgba(0, 0, 0, 0.2); */
  color: #ff6666;
  font-weight: bold;
}
</style>
