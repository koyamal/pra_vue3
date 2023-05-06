<script setup lang="ts">
import {ref} from "vue";

const memberType = ref(1);
</script>

<template>
  <label>
    <input type="radio" name="memberType" value="1" v-model="memberType">
    Regular Member
  </label>
  <label>
    <input type="radio" name="memberType" value="2" v-model="memberType">
    Special Member
  </label>
  <label>
    <input type="radio" name="memberType" value="3" v-model="memberType">
    VIP Member
  </label>
  <br>
  <p>Selected Value: {{ memberType }}</p>
</template>
