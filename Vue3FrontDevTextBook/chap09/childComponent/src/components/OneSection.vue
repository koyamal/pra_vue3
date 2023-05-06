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
      <p>{{name}} is No Problem</p>
    </slot>
  </section>
</template>

<style>
.box{
  border: green 1px solid;
  margin: 10px;
}
</style>
