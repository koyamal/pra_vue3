<script setup lang="ts">
import {ref} from "vue";

const inputTextarea = ref("Input Text Area \n 2Lines");
const memberType = ref(1);
const memberTypeSelect = ref(1);
const isAgreed = ref(false);
const isAgreed01 = ref(0);
const selectedOS = ref([]);
const selectedOSSelect = ref([]);
</script>

<template>
  <textarea v-model="inputTextarea"></textarea>
  <br>
  <section>
    <label><input type="radio" name="memberType" value="1" v-model="memberType">Nomal</label>
    <label><input type="radio" name="memberType" value="2" v-model="memberType">Special</label>
    <label><input type="radio" name="memberType" value="3" v-model="memberType">VIP</label>
    <br>
    <p>Selected: {{ memberType }}</p>
  </section>
  <br>
  <section>
    <select v-model="memberTypeSelect">
      <option value="1">Nomal</option>
      <option value="2">Special</option>
      <option value="3">VIP</option>
    </select>
    <p>Selected: {{ memberTypeSelect }}</p>
  </section>
  <br>
  <section>
    <label><input type="checkbox" v-model="isAgreed">Agree</label>
    <p>Result: {{ isAgreed }}</p>
  </section>
  <section>
    <label><input type="checkbox" v-model="isAgreed01" true-value="1" false-value="0">Agree</label>
    <p>Result: {{ isAgreed01 }}</p>
  </section>
</template>

<style scoped>
</style>
