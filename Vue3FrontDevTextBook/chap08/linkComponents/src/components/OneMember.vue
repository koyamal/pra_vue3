<script setup lang="ts">
import {computed, inject} from "vue";
import type {Member} from "../interfaces";

interface Props{
  id: number;
}
const props = defineProps<Props>();

const memberList = inject("memberList") as Map<number, Member>;

const member = computed(
  (): Member => {
    return memberList.get(props.id) as Member;
  }
);
const localNote = computed(
  (): string => {
    return member.value.note || "--";
  }
);
</script>

<template>
  <section class="box">
    <h4>{{ member.name }}'s Info</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>E-mail</dt>
      <dd>{{ member.email }}</dd>
      <dt>Point</dt>
      <dd>
        <input type="number" v-model.number="member.points">
      </dd>
      <dt>Other</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>

<style scoped>
.box{
  border: green 1px solid;
  margin: 10px;
}
</style>
