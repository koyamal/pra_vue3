<script setup lang="ts">
import {ref, computed} from "vue";

const cocktailDataListInit: Cocktail[] = [
  {id: 2345, name: "WhiteLady", price: 1200},
  {id: 4412, name: "BlueHawaii", price: 1500},
  {id: 6792, name: "NewYork", price: 1200},
  {id: 8429, name: "Matani", price: 1500},
];
const cocktailDataList = ref(cocktailDataListInit);
interface Cocktail {
  id: number;
  name: string;
  price: number;
};
const cocktail1500 = computed(
  (): Cocktail[] => {
    const newList = cocktailDataList.value.filter(
      (cocktailItem: Cocktail): boolean => {
        return cocktailItem.price == 1500;
      }
    );
    return newList
  }
);

</script>

<template>
  <section>
    All List
    <ul>
      <li
        v-for="cocktailItem in cocktailDataList"
        v-bind:key="cocktailItem.id"
      >
        {{ cocktailItem.name }}: ¥{{ cocktailItem.price }}
      </li>
    </ul>
  </section>
  <section>
    ¥1500 Menu:
    <ul>
      <li
        v-for="cocktailItem in cocktail1500"
        v-bind:key="'1500' + cocktailItem.id"
      >
        {{ cocktailItem.name }}: ¥{{ cocktailItem.price }}
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
