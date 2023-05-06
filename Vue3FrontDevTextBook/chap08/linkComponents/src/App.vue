<script setup lang="ts">
import {reactive, provide} from "vue";
import BaseSection from "./components/BaseSection.vue";
import type {Member} from "./interfaces";

const memberList = new Map<number, Member>();
memberList.set(33456, {id: 33456, name: "Taro", email: "taro@exmaple.com", points: 35, note:"VIP"});
memberList.set(47783, {id: 47783, name: "Jiro", email: "jiro@exmaple.com", points: 53});
provide("memberList", reactive(memberList));
</script>

<template>
  <BaseSection />
</template>
