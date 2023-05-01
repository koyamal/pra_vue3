<script setup lang="ts">
import {ref, computed} from "vue";

const radiusInit = Math.round(Math.random() * 10);
const PI = ref(3.14);
const radius = ref(radiusInit);
const area = computed(() :number => {
  return radius.value * radius.value * PI.value;
});

setInterval(():void => {
  radius.value = Math.round(Math.random() * 10);
}, 1000)
</script>

<template>
  <p>Calculating the area of a circle with radius {{ radius }} by {{ PI }} is {{ area }}</p>
</template>
