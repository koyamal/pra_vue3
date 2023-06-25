<script setup lang="ts">
import {ref} from "vue";

const whiteOrRed = ref("white");

setInterval(() => {
  if (whiteOrRed.value === "white") {
    whiteOrRed.value = "red";
  } else {
    whiteOrRed.value = "white";
  }
}, 1000);
</script>

<template>
  <p v-bind:style="{color: whiteOrRed}">White? or Red?</p>
</template>

<style scoped>
</style>
