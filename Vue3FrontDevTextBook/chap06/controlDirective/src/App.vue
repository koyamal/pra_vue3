<script setup lang="ts">
import {ref} from "vue";

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, {id: 2345, name: "WhiteLady", price: 1200});
cocktailDataListInit.set(4412, {id: 4412, name: "BlueHawaii", price: 1200});
cocktailDataListInit.set(6792, {id: 6792, name: "NewYork", price: 1200});
cocktailDataListInit.set(8429, {id: 8429, name: "Matani", price: 1200});

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
      v-for="[id, cocktailItem] in cocktailDataList"
      v-bind:key="id"
    >
      {{ cocktailItem.name }}: ¥{{ cocktailItem.price }}
    </li>
  </ul>
</template>

<style scoped>

</style>
