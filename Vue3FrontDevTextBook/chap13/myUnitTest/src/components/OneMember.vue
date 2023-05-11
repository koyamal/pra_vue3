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
  (event: "incrementPoint", id: number): void;
}
const props = withDefaults(
  defineProps<Props>(),
  {note: "--"}
);
const emit = defineEmits<Emits>();
const pointUp = (): void => {
  emit("incrementPoint", props.id);
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
      <dd>{{ points }}</dd>
      <dt>Other</dt>
      <dd>{{ note }}</dd>
    </dl>
    <button v-on:click="pointUp">Point Up</button>
  </section>
</template>
<style scoped>
.box{
  border: green 1px solid;
  margin: 10px;
}
</style>
