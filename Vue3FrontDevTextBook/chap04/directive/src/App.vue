<script setup lang="ts">
import {ref} from "vue";

const msg = ref("No Send");
const onFormSubmit = (): void => {
  msg.value = "Send!!";
}
</script>

<template>
  <form action="#" v-on:submit.prevent="onFormSubmit">
    <input type="text" required>
    <button type="submit">Go.</button>
  </form>
  <p>{{ msg }}</p>
</template>
