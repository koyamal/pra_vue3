<script setup lang="ts">
import {inject} from "vue";
import {RouterLink} from "vue-router";
import type {Member} from "@/interface";

const memberList = inject("memberList") as Map<number, Member>;
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
        MemberList
      </li>
    </ul>
  </nav>
  <section>
    <h2>MemberList</h2>
    <section>
      <ul>
        <li
          v-for="[id, member] in memberList"
          v-bind:key="id"
        >
          <RouterLink v-bind:to="{name: 'MemberDetail', params: {id: id}}">
            ID-{{ id }}: {{ member.name }}
          </RouterLink>
        </li>
      </ul>
    </section>
  </section>
</template>
