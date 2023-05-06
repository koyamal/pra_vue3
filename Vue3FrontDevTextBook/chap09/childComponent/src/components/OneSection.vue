<script setup lang="ts">
interface Props {
  name: string;
}
defineProps<Props>();
</script>

<template>
  <section class="box">
    <h1>{{ name }}'s Condition</h1>
    <slot>
      <p>No Problem</p>
    </slot>
    <h4>Details</h4>
    <slot name="detail">
      <p>Nothing</p>
    </slot>
  </section>
</template>

<style>
.box{
  border: green 1px solid;
  margin: 10px;
}
</style>
