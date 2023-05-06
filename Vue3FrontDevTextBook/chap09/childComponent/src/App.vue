<script setup lang="ts">
import {ref} from "vue";
import OneSection from "./components/OneSection.vue";

const taro = ref("Taro");
</script>

<template>
  <section>
    <h2>Use of Slot</h2>
    <OneSection v-bind:name="taro">
      <p>Cannot Reach.</p>
    </OneSection>
  </section>
</template>

<style>
</style>
