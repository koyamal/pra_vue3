<script setup lang="ts">
import {ref} from "vue";

const mousePointerX = ref(0);
const mousePointerY = ref(0);
const onImgMousemove = (event: MouseEvent): void => {
  mousePointerX.value = event.offsetX;
  mousePointerY.value = event.offsetY;
}
</script>

<template>
  <section>
    <img src="./assets/logo.svg" alt="VueLogo" width="200" v-on:mousemove="onImgMousemove" />
    <p>Position of Pointer: X={{ mousePointerX }}, Y={{ mousePointerY }}</p>
  </section>
</template>
