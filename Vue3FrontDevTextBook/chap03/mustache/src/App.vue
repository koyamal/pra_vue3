<script setup lang="ts">
import {computed, reactive} from "vue";

const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10)
});
const area = computed(() :number => {
  return data.radius * data.radius * data.PI;
});

setInterval(():void => {
  data.radius = Math.round(Math.random() * 10);
}, 1000)
</script>

<template>
  <p>Calculating the area of a circle with radius {{ data.radius }} by {{ data.PI }} is {{ area }}</p>
</template>
