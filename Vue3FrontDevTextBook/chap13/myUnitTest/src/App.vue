<script setup lang="ts">
import {ref, computed} from "vue";
import OneMember from "./components/OneMember.vue";
const memberListInit = new Map<number, Member>();
memberListInit.set(33456, {id: 33456, name: "Taro", email: "taro@exmaple.com", points: 35, note:"VIP"});
memberListInit.set(47783, {id: 47783, name: "Jiro", email: "jiro@exmaple.com", points: 53});
const memberList = ref(memberListInit);
const totalPoints = computed(
  (): number => {
    let total = 0;
    for(const member of memberList.value.values()){
      total += member.points;
    }
    return total;
  }
);
const onIncrementPoint = (id: number): void => {
  const member = memberList.value.get(id);
  if(member != undefined){
    member.points = member.points + 2;
  }
}
interface Member{
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
};
</script>

<template>
  <section>
    <h1>Member's List</h1>
    <p>Sum of Points: {{ totalPoints }}</p>
    <OneMember
      v-for="[id, member] in memberList"
      v-bind:key="id"
      v-bind:id="id"
      v-bind:name="member.name"
      v-bind:email="member.email"
      v-bind:points="member.points"
      v-bind:note="member.note"
      v-on:incrementPoint="onIncrementPoint"
    />
  </section>
</template>
