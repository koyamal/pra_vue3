<script setup lang="ts">
import {computed} from "vue";

const randomNumber = computed(
  ():number => {
    return Math.round(Math.random() * 100);
  }
)
</script>

<template>
  <p>
    Score is {{ randomNumber }}:
    <span v-if="randomNumber >= 80">Excellent</span>
    <span v-else-if="randomNumber >= 70">Good</span>
    <span v-else-if="randomNumber >= 60">Passable</span>
    <span v-else>Bad</span>
  </p>
</template>

<style scoped>

</style>
