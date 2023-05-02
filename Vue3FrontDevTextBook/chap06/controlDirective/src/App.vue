<script setup lang="ts">
import {ref} from "vue";

const cocktailListInit: string[] = ["WhiteLady", "BlueHawaii", "NewYork"];
const cocktailList = ref(cocktailListInit);
</script>

<template>
  <ul>
    <li
      v-for="cocktailName in cocktailList"
      v-bind:key="cocktailName">
      {{ cocktailName }}
    </li>
  </ul>
  <ul>
    <li
      v-for="(cocketailName, index) in cocktailList"
      v-bind:key="cocketailName">
      {{ cocketailName }}(No.{{ index }})
    </li>
  </ul>
</template>

<style scoped>

</style>
