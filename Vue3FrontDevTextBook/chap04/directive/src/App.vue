<script setup lang="ts">
import {ref} from "vue";

const randValue = ref("Not yet");
const onButtonClick = (): void => {
  const rand = Math.round(Math.random() * 10);
  randValue.value = String(rand);
}
</script>

<template>
  <section>
    <button v-on:click="onButtonClick">Click!</button>
    <p>Result: {{ randValue }}</p>
  </section>
</template>
