<script setup lang="ts">
import {ref} from "vue";

const url = ref("https://vuejs.org/");
</script>

<template>
  <p><a v-bind:href="url" target="_blank">Vue.js</a></p>
  <p><a :href="url" target="_blank">Vue.js(abbreviation)</a></p>
  <p><a :href="url + 'guide/introduction.html'" target="_blank">Vue.js(guide)</a></p>
</template>
