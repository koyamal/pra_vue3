<script setup lang="ts">
import {ref} from "vue";

const name = ref("No name");
</script>

<template>
  <section>
    <p>{{ name }}!</p>
    <input type="text" v-model="name">
  </section>
</template>

<style>
section{
  border: orange 1px dashed;
  margin: 10px;
}
</style>
