<script setup lang="ts">
interface Props {
  rand: number;
}

interface Emits {
  (event: "createNewRand"): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const onNewRandButtonClick = (): void => {
  emit("createNewRand");
}
</script>

<template>
  <section class="box">
    <p>Random Value in Child Component: {{ rand }}</p>
    <button v-on:click="onNewRandButtonClick">Generate</button>
  </section>
</template>

<style scoped>
.box{
  border: green 1px solid;
  margin: 10px;
}
</style>
