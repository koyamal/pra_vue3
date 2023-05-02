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
    Score: {{ randomNumber }}
    <template v-if="randomNumber >= 80">
      Good.
      <span style="color: red">Nice!</span>
    </template>
  </p>
</template>

<style scoped>

</style>
