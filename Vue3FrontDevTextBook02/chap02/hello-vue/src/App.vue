<script setup lang="ts">
import {ref} from "vue";

const randValue = ref("まだです");
const randValue2 = ref("まだです");
const onButtonClick = (): void => {
  const rand = Math.round(Math.random() * 10);
  randValue.value = String(rand);
};
const onButtonFocusout = (): void => {
  const rand = Math.round(Math.random() * 10);
  randValue2.value = String(rand);

}
</script>

<template>
  <section>
    <button v-on:click="onButtonClick" v-on:focusout="onButtonFocusout">クリック</button>
    <p>onClick：{{randValue}}</p>
    <p>focusout：{{randValue2}}</p>
  </section>
</template>

<style scoped>
</style>
