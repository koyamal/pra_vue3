<script setup lang="ts">
import {ref} from "vue";
import OneSection from "./components/OneSection.vue";

const taroProblemsInit: string[] = ["The telephone doesn't work", "Is Away"]
const taro = ref("Taro");
const taroProblems = ref(taroProblemsInit);
const jiro = ref("Jiro");
</script>

<template>
  <section>
    <OneSection v-bind:name="taro">
      <ul>
        <li
          v-for="problem in taroProblems"
          v-bind:key="problem"
        >
          {{ problem }}
        </li>
      </ul>
      <p>{{taro}} Cannot Reach.</p>
    </OneSection>
    <OneSection v-bind:name="jiro" />
  </section>
</template>

<style>
</style>
