<script setup lang="ts">
import {ref, computed} from "vue";

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(1, {id: 1, name: "WhiteLady", price: 1200});
cocktailDataListInit.set(2, {id: 2, name: "BlueHawaii", price: 1500});
cocktailDataListInit.set(3, {id: 3, name: "NewYork", price: 1100});
cocktailDataListInit.set(4, {id: 4, name: "Matani", price: 1500});

const cocktailNo = ref(1);

const priceMsg = computed(
  (): string => {
    const cocktail = cocktailDataListInit.get(cocktailNo.value);
    let msg = `No Cocktail No.${cocktailNo.value}`
    if(cocktail != undefined){
      msg = `No.${cocktailNo.value} is ${cocktail.name}. Price: ${cocktail.price}`;
    }
    return msg;
  }
);

setInterval(
  (): void => {
    cocktailNo.value = Math.round(Math.random() * 3) + 1;
  },
  1000
);

interface Cocktail {
  id: number;
  name: string;
  price: number;
};
</script>

<template>
  <p>Cocktail No. {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>

<style scoped>
</style>
