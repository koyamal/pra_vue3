<script setup lang="ts">
import {ref} from "vue";

const isVisible = ref(false);
const onShowButtonClick = (): void => {
  isVisible.value = true;
}
</script>

<template>
  <p>
    <button
      data-testid="showButton"
      v-on:click="onShowButtonClick"
    >
      Show
    </button>
    hidden areas
  </p>
  <p v-if="isVisible" data-testid="invisible">Displayed</p>
</template>
