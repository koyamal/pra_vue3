<script setup lang="ts">
import {computed} from "vue";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
// const count = computed(
//   (): number => {
//     return counterStore.counter;
//   }
// );
// const count = counterStore.counter;

// const doubleCount = computed(
//   (): number => {
//     return counterStore.doubleCount;
//   }
// );
// const doubleCount = counterStore.doubleCount;

const onIncrementClick = () => {
  counterStore.incrementCount();
}
</script>

<template>
  <p>Now Point: {{ counterStore.counter }}</p>
  <p>Double Point: {{ counterStore.doubleCount }}</p>
  <button v-on:click="onIncrementClick">Add</button>
</template>
