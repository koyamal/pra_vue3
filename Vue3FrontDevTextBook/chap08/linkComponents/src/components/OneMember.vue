<script setup lang="ts">
import {ref, computed} from "vue";

interface Props{
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}

const props = defineProps<Props>();

const localPoints = ref(props.points);
const localNote = computed(
  (): string => {
    let localNote = props.note;
    if(localNote == undefined){
      localNote = "--";
    }
    return localNote;
  }
);
const pointUp = (): void => {
  localPoints.value++;
}
</script>

<template>
  <section class="box">
    <h4>Info: {{ name }}</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>E-mail</dt>
      <dd>{{ email }}</dd>
      <dt>Point</dt>
      <dd>{{ localPoints }}</dd>
      <dt>Other</dt>
      <dd>{{ localNote }}</dd>
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
