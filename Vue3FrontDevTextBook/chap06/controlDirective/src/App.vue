<script setup lang="ts">
import {ref} from "vue";

const cocktailListInit = new Map<number, string>();
cocktailListInit.set(2345, "WhiteLady");
cocktailListInit.set(4412, "BlueHawaii");
cocktailListInit.set(6792, "NewYork");
const cocktailList = ref(cocktailListInit);
</script>

<template>
  <ul>
    <li
      v-for="[id, cocktailName] in cocktailList"
      v-bind:key="id"
    >
      ID:{{ id }}. {{ cocktailName }}
    </li>
  </ul>
</template>

<style scoped>

</style>
