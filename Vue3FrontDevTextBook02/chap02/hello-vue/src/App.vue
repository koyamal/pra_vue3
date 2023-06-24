<script setup lang="ts">
import {ref} from "vue";

const url = ref("https://vuejs.org/");
</script>

<template>
  <div>
    <p><a v-bind:href="url" target="_blank">Vue.jsのサイト</a></p>
  </div>
  <div>
    <p><a :href="url" target="_blank">Vue.jsのサイト(省略形)</a></p>
  </div>
  <div>
    <p><a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.jsのサイト(イントロ)</a></p>
  </div>
</template>

<style scoped>
</style>
