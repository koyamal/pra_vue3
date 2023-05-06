<script setup lang="ts">
import {computed} from "vue";

interface Props{
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}

interface Emits {
  (event: "update:points", points: number): void;
}


const props = withDefaults(
  defineProps<Props>(),
  {note: "--"}
);
const emit = defineEmits<Emits>();

const onInput = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  const inputPoints = Number(element.value);
  emit("update:points", inputPoints);
}
</script>

<template>
  <section class="box">
    <h4>{{ name }}'s Info</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>E-mail</dt>
      <dd>{{ email }}</dd>
      <dt>Point</dt>
      <dd>
        <input type="number" v-bind:value="points" v-on:input="onInput">
      </dd>
      <dt>Other</dt>
      <dd>{{ note }}</dd>
    </dl>
  </section>
</template>

<style scoped>
.box{
  border: green 1px solid;
  margin: 10px;
}
</style>
