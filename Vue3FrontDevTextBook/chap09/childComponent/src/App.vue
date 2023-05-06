<script setup lang="ts">
import {ref} from "vue";
import OneSection from "./components/OneSection.vue";

const taro = ref("Taro");
const jiro = ref("Jiro");
</script>

<template>
  <section>
    <h2>Use of Slot</h2>
    <OneSection v-bind:name="taro">
      <p>{{taro}} Cannot Reach.</p>
    </OneSection>
    <OneSection v-bind:name="jiro" />
  </section>
</template>

<style>
</style>
