<script setup lang="ts">
import {reactive, provide} from "vue";
import {RouterView} from "vue-router";
import type {Member} from "@/interface";

const memberList = new Map<number, Member>();
memberList.set(33456, {id: 33456, name: "Taro", email: "taro@example.com", points: 35, note: "VIP"});
memberList.set(47783, {id: 47783, name: "Jiro", email: "jiro@example.com", points: 45});
provide("memberList", reactive(memberList));
</script>

<template>
  <header>
    <h1>Vue Router Sample</h1>
  </header>
  <main>
    <RouterView />
  </main>
  <section id="sub">
    <RouterView name="sub" />
  </section>
</template>

<style>
main {
  border: blue 1px solid;
  padding: 10px;
}
#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}
#breadcrumbs {
  margin-left: 0px;
}
#breadcrumbs ul {
  padding-left: 0px;
}
#breadcrumbs ul .current {
  color: red;
}
#breadcrumbs ul li:before {
  content: " > ";
}
#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>
