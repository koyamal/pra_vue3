<script setup lang="ts">
import OneInfo from './components/OneInfo.vue';
</script>

<template>
  <h1>Props Basics</h1>
  <section>
    <h2>Direct to Attribute</h2>
    <OneInfo
      title="Use Props"
      content="Use Props for Pass Data for Child Component"
    />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
