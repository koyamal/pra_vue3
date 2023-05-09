<script setup lang="ts">
import {computed} from "vue";
import {RouterLink} from "vue-router";
import { useWeatherStore } from "@/stores/weather";
import type { City } from "@/stores/weather";

const weatherStore = useWeatherStore();
weatherStore.prepareCityList();

const cityList = computed(
  (): Map<string, City> => {
    return weatherStore.cityList;
  }
);
</script>

<template>
  <section>
    <h2>City List</h2>
    <ul>
      <li
        v-for="[id, city] in cityList"
        v-bind:key="id"
      >
        <RouterLink v-bind:to="{name: 'WeatherInfo', params: {id}}">
          Weather in {{ city.name }}
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
