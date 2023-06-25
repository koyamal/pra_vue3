<script setup lang="ts">
import {ref} from "vue";

const pBgColor = ref("white");
const pMsg = ref("No");
const onPClick = (bgColor: string, event: MouseEvent): void => {
  pBgColor.value = bgColor;
  pMsg.value = event.timeStamp.toString();
};
</script>

<template>
  <p v-on:click="onPClick('red', $event)" v-bind:style="{backgroundColor: pBgColor, color:'green'}">
    ここをクリックすると背景色が変わります。
  </p>
  <p>{{ pMsg }}</p>
</template>

<style scoped>
</style>
