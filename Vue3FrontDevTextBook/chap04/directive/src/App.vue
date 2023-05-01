<script setup lang="ts">
import {ref} from "vue";

// const widthOrHeight = ref("height");
const widthOrHeight = ref("width");
const widthOrHeightValue = ref(1000);
</script>

<template>
  <p><img alt="VueLog" src="./assets/logo.svg" v-bind:[widthOrHeight]="widthOrHeightValue"></p>
</template>
