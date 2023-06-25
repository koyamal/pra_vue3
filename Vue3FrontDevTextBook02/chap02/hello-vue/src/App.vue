<script setup lang="ts">
import {ref} from "vue";

const randValue = ref("まだです");
const randValue2 = ref("まだです");
const randValue3 = ref("まだです");
const onButtonClick = (): void => {
  const rand = Math.round(Math.random() * 10);
  randValue.value = String(rand);
};
const onButtonFocusout = (): void => {
  const rand = Math.round(Math.random() * 10);
  randValue2.value = String(rand);
}
const onButtonMouseout = (): void => {
  const rand = Math.round(Math.random() * 10);
  randValue3.value = String(rand);
}
</script>

<template>
  <section>
    <button
      v-on:click="onButtonClick"
      v-on:focusout="onButtonFocusout"
      v-on:mouseout="onButtonMouseout"
    >
      クリック
    </button>
    <p>onClick：{{randValue}}</p>
    <p>focusout：{{randValue2}}</p>
    <p>mouseout：{{randValue3}}</p>
  </section>
</template>

<style scoped>
</style>
