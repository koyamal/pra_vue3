<script setup lang="ts">
import {computed} from "vue";

const showOrNot = computed(
  (): boolean => {
    let showOrNot = false;
    const rand = Math.round(Math.random() * 100);
    if(rand >= 50) {
      showOrNot = true;
    }
    return showOrNot;
  }
);
</script>

<template>
  <section>
    v-if:
    <p v-if="showOrNot">Trueeee</p>
  </section>
  <section>
    v-show:
    <p v-show="showOrNot">Trueeee</p>
  </section>
</template>

<style scoped>

</style>
