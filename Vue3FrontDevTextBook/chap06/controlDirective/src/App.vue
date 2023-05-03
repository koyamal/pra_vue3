<script setup lang="ts">
import {ref} from "vue";

const cocktailListInit: {[key: number]: string} = {
  2345: "WhiteLady",
  4412: "BlueHawaii",
  6792: "NewYork",
};
const cocktailList = ref(cocktailListInit);
console.log(cocktailListInit);
</script>

<template>
  <ul>
    <li
      v-for="(cocktailName, id) in cocktailList"
      v-bine:key="'cocktailList' + id"
    >
      ID-{{ id }}: {{ cocktailName }}
    </li>
  </ul>
  <ul>
    <li
      v-for="(cocktailName, id, index) in cocktailList"
      v-bine:key="'cocktailListwith' + id"
    >
      {{ index + 1 }}. ID-{{ id }}: {{ cocktailName }}
    </li>
  </ul>
</template>

<style scoped>

</style>
