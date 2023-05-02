<script setup lang="ts">
import {ref} from "vue";

const trimedText = ref("");
</script>

<template>
  <section>
    <input type="text" v-model.trim="trimedText">
    <p>Text: {{ trimedText }}</p>
  </section>
</template>

<style scoped>
</style>
