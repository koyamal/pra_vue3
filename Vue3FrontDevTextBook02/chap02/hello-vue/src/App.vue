<script setup lang="ts">
import {ref} from "vue";

const imgAttributes = ref({
  src: "/images/logo.svg",
  alt: "Vueのロゴ",
  width: 75,
  height: 75,
});
</script>

<template>
  <p><img v-bind="imgAttributes"></p>
  <p><img v-bind="imgAttributes" title="ロゴです" alt="ロゴです"></p>
</template>

<style scoped>
</style>
