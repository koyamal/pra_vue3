<script setup lang="ts">
import {ref} from "vue";

const msg = ref("Not yet");
const onEnterKey = (): void => {
  msg.value = 'Enter Key is pushed.'
};
const onRightButtonClick = (): void => {
  msg.value = 'Right Button is pushed.'
};
const onShiftClick = (): void => {
  msg.value = 'Shift is pushed.'
};
</script>

<template>
  <p>{{ msg }}</p>
  <input type="text" v-on:keydown.enter="onEnterKey"><br>
  <button v-on:click.right="onRightButtonClick">Right</button>
  <button v-on:click.shift="onShiftClick">Shift</button>
</template>
