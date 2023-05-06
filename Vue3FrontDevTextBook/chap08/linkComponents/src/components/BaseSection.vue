<script setup lang="ts">
import {computed, inject} from "vue";
import OneMember from "./OneMember.vue";
import type {Member} from "../interfaces";

const memberList = inject("memberList") as Map<number, Member>;

const totalPoints = computed(
  (): number => {
    let total = 0;
    for(const member of memberList.values()){
      total += member.points;
    }
    return total;
  }
)
</script>

<template>
  <section>
    <h1>Member's List</h1>
    <p>Sum of Points: {{ totalPoints }}</p>
    <OneMember
      v-for="id in memberList.keys()"
      v-bind:key="id"
      v-bind:id="id"
    />
  </section>
</template>

<style scoped>
section {
  border: orange 1px dashed;
  margin: 10px;
}
</style>
