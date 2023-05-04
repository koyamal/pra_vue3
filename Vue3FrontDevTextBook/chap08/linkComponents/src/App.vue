<script setup lang="ts">
import OneSection from './components/OneSection.vue';
</script>

<template>
  <h1>Basic Component</h1>
  <section>
    <h2>One Component</h2>
    <OneSection />
  </section>
  <section>
    <h2>Multiple Components</h2>
    <OneSection />
    <OneSection />
    <OneSection />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px
}
</style>
