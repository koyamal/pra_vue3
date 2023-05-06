<script setup lang="ts">
import OneSection from "./components/OneSection.vue";
</script>

<template>
  <section>
    <OneSection>
      <template v-slot:default="slotProps">
        <dl>
          <dt>Name</dt>
          <dd>{{ slotProps.memberInfo.name }}</dd>
          <dt>Condition</dt>
          <dd>{{ slotProps.memberInfo.state }}</dd>
        </dl>
      </template>
    </OneSection>
  </section>
</template>

<style>
</style>
