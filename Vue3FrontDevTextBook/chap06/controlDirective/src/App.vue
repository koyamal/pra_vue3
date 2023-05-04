<script setup lang="ts">
import {ref, computed} from "vue";

const cocktailListInit: string[] = ["WhiteLady", "BlueHawaii", "NewYork"];
const cocktailList = ref(cocktailListInit);
const changeCocktailList = (): void => {
  cocktailList.value = ["Balalaika", "XYZ", "Manhattan"];
};
const addCocktailList = (): void => {
  cocktailList.value.push("BlueMoon");
};
const deleteFromCocktailList = (): void => {
  cocktailList.value.pop();
}
</script>

<template>
  <ul>
    <li
      v-for="(cocktailName, index) in cocktailList"
      v-bind:key="cocktailName"
    >
      {{ cocktailName }}(No.{{ index }})
    </li>
  </ul>
  <p><button v-on:click="changeCocktailList">Change</button></p>
  <p><button v-on:click="addCocktailList">Add</button></p>
  <p><button v-on:click="deleteFromCocktailList">Delete</button></p>
</template>

<style scoped>

</style>
