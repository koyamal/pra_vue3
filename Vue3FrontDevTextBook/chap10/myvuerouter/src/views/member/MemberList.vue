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
    </ul>
  </nav>
  <section>
    <h2>MemberList</h2>
  </section>
</template>
