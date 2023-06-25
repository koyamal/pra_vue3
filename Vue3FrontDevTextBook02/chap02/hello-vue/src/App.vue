<script setup lang="ts">
import {ref, computed} from "vue";

const whiteOrRed = ref("white");

const textSizeRef = ref(`${Math.round(Math.random() * 25) + 10}pt`);

const textSize = computed(
  (): string => {
    const size = Math.round(Math.random() * 25) + 10;
    return `${size}pt`;
  }
);

setInterval(() => {
  textSizeRef.value = `${Math.round(Math.random() * 25) + 10}pt`;
  if (whiteOrRed.value === "white") {
    whiteOrRed.value = "red";
  } else {
    whiteOrRed.value = "white";
  }
}, 1000);
</script>

<template>
  <!-- <p v-bind:style="{color: whiteOrRed}">White? or Red?</p>
  <p v-bind:style="{color: whiteOrRed, fontSize:textSize}">White? or Red?</p> -->
  <p v-bind:style="{color: whiteOrRed, fontSize:textSizeRef}">White? or Red?</p>
</template>

<style scoped>
</style>
