<script setup lang="ts">
import {ref} from "vue";
import OneInfo from './components/OneInfo.vue';

const weatherListInit = new Map<number, Weather>();
weatherListInit.set(1, {id: 1, title: "Today's Weather", content: "Sunny"});
weatherListInit.set(2, {id: 2, title: "Tomorrow's Weather", content: "Cloudy"});
weatherListInit.set(3, {id: 3, title: "Day After Tomorrow's Weather", content: "Rainy"});

const weatherList = ref(weatherListInit);

interface Weather {
  id: number;
  title: string;
  content: string;
}
</script>

<template>
  <h1>Props Basics</h1>
  <section>
    <h2>Display Components with Loop</h2>
    <OneInfo
     v-for="[id, weather] in weatherList"
     v-bind:key="id"
     v-bind:title="weather.title"
     v-bind:content="weather.content"
    />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
