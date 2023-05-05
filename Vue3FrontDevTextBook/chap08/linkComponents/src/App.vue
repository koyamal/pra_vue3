<script setup lang="ts">
import {ref, computed} from "vue";
import ChildToParent from "./components/ChildToParent.vue";

const randInit = Math.round(Math.random() * 10);
const rand = ref(randInit);
const onCreateNewRand = (): void => {
  rand.value = Math.round(Math.random() * 10);
}
</script>

<template>
  <section>
    <p>Random Value in Parent Component: {{ rand }}</p>
    <ChildToParent
      v-bind:rand="rand"
      v-on:createNewRand="onCreateNewRand"
    />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
