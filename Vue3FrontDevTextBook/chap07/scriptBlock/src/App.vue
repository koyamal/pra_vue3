<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "App",
  data() {
    return {
      height: Math.round(Math.random() * 10),
      width: Math.round(Math.random() * 10),
    }
  },
  computed: {
    area(): number{
      return this.height * this.width;
    }
  },
  methods: {
    change(): void {
      this.height = Math.round(Math.random() * 10);
      this.width = Math.round(Math.random() * 10);
    }
  },
  updated(): void {
    console.log(`updated called: ${this.height} * ${this.width}`);
  },
  watch: {
    height(newVal: number, oldVal: number|undefined): void{
      console.log(`New: ${newVal}, Old: ${oldVal}`);
    }
  }
});
</script>

<template>
  <p>Height: {{ height }}, Width: {{ width }} ==> Area: {{ area }}</p>
  <button v-on:click="change">Change</button>
</template>

<style scoped>
</style>
