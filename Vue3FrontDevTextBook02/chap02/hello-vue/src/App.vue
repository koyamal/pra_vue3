<script setup lang="ts">
import {ref, computed} from "vue";

const whiteOrRed = ref("white");

const textSize = computed(
  (): string => {
    const size = Math.round(Math.random() * 25) + 10;
    return `${size}pt`;
  }
);

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
  <p v-bind:style="{color: whiteOrRed, fontSize:textSize}">White? or Red?</p>
</template>

<style scoped>
</style>
