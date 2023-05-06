<script setup lang="ts">
import {reactive} from "vue";

const memberInfo = reactive({
  name: "Taro",
  state: "No Problem"
});
</script>

<template>
  <section>
    <slot v-bind:memberInfo="memberInfo">
      <h1>{{ memberInfo.name }}'s Condition</h1>
      <p>{{ memberInfo.state }}</p>
    </slot>
  </section>
</template>

<style>
.box{
  border: green 1px solid;
  margin: 10px;
}
</style>
