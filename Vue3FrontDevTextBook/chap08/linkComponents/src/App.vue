<script setup lang="ts">
import WithModel from './components/WithModel.vue';
</script>

<template>
  <h1>Component Independence</h1>
  <section>
    <h2>V-model Component</h2>
      <WithModel />
      <WithModel />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
