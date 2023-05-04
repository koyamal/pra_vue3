<script setup lang="ts">
import {ref} from "vue";

const cocktailDataListInit: Cocktail[] = [
  {id: 2345, name: "WhiteLady", price: 1200},
  {id: 4412, name: "BlueHawaii", price: 1200},
  {id: 6792, name: "NewYork", price: 1200},
  {id: 8429, name: "Matani", price: 1200},
];
const cocktailDataList = ref(cocktailDataListInit);

interface Cocktail {
  id: number;
  name: string;
  price: number;
}
</script>

<template>
  <ul>
    <li
      v-for="cocktailItem in cocktailDataList"
      v-bind:key="cocktailItem.id"
    >
      {{ cocktailItem.name }}: ¥{{ cocktailItem.price }}
    </li>
  </ul>
</template>

<style scoped>

</style>
