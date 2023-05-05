<script setup lang="ts">
import {ref} from "vue";
import OneInfo from './components/OneInfo.vue';

const propsTitle = ref("Generated random number");
const rand = Math.round(Math.random() * 100);
const propsContent = ref(rand);

setInterval(():void => {
  propsContent.value = Math.round(Math.random() * 100);
}, 1000);
</script>

<template>
  <h1>Props Basics</h1>
  <section>
    <h2>Use Template Variables</h2>
    <OneInfo
      v-bind:title="propsTitle"
      v-bind:content="propsContent"
    />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
