<script setup lang="ts">
import {ref} from "vue";

const memberTypeSelect = ref(1);
</script>

<template>
  <select v-model="memberTypeSelect">
    <option value="1">Regular Member</option>
    <option value="2">Special Member</option>
    <option value="3">VIP Member</option>
  </select>
  <br>
  <p>Selected Value: {{ memberTypeSelect }}</p>
</template>
