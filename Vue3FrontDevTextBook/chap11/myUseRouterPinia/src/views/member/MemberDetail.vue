<script setup lang="ts">
import {inject, computed} from "vue";
import {RouterLink} from "vue-router";
import type {Member} from "@/interface";

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
    let localNote = "--";
    if(member.value.note != undefined){
      localNote = member.value.note;
    }
    return localNote
  }
);
</script>

<template>
  <h1>Member Management</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{name: 'AppTop'}">
          TOP
        </RouterLink>
      </li>
      <li>
        <RouterLink v-bind:to="{name: 'MemberList'}">
          MemberList
        </RouterLink>
      </li>
      <li>Member Detail</li>
    </ul>
  </nav>
  <section>
    <h2>Detail</h2>
    <dl>
      <dt>ID</dt>
      <dd>{{ member.id }}</dd>
      <dt>Name</dt>
      <dd>{{ member.name }}</dd>
      <dt>Email</dt>
      <dd>{{ member.email }}</dd>
      <dt>Point</dt>
      <dd>{{ member.points }}</dd>
      <dt>Note</dt>
      <dd>{{ member.note }}</dd>
    </dl>
  </section>
</template>
