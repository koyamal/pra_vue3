<script setup lang="ts">
import {inject, reactive} from "vue";
import {RouterLink, useRouter} from "vue-router";
import type {Member} from "@/interface";

const router = useRouter();
const memberList = inject("memberList") as Map<number, Member>;
const member: Member = reactive(
  {
    id: 0,
    name: "",
    email: "",
    points: 0,
    note: ""
  }
);
const onAdd = (): void => {
  console.log(member);
  memberList.set(member.id, member);
  router.push({name: "MemberDetail", params: {id: member.id}});
}
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
      <li>Member Add</li>
    </ul>
  </nav>
  <section>
    <h2>Member Add</h2>
    <p>Input Member Info, Click Add button.</p>
    <form v-on:submit.prevent="onAdd">
      <dl>
        <dt>
          <label for="addId">ID&nbsp;</label>
        </dt>
        <dd>
          <input type="number" id="addId" v-model.number="member.id" required>
        </dd>
        <dt>
          <label for="addName">Name&nbsp;</label>
        </dt>
        <dd>
          <input type="text" id="addName" v-model="member.name" required>
        </dd>
        <dt>
          <label for="addEmail">Email&nbsp;</label>
        </dt>
        <dd>
          <input type="email" id="addEmail" v-model="member.email" required>
        </dd>
        <dt>
          <label for="addPoints">Points&nbsp;</label>
        </dt>
        <dd>
          <input type="number" id="addPoints" v-model="member.points" required>
        </dd>
        <dt>
          <label for="addName">Note</label>
        </dt>
        <dd>
          <textarea id="addNote" v-model="member.note"></textarea>
        </dd>
      </dl>
      <button type="submit">Add</button>
    </form>
  </section>
</template>
