<script setup lang="ts">
import {ref} from "vue";

const imgAttributes = ref({
  src: "/images/logo.svg",
  alt: "VueLogo",
  width: 75,
  height: 75,
});
</script>

<template>
  <p><img v-bind="imgAttributes"></p>
  <p><img v-bind="imgAttributes" title="VueLogo!"></p>
  <p><img v-bind="imgAttributes" alt="VueLogoooo!"></p>
</template>
