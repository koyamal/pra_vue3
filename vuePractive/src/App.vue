<script>
import { nextTick } from "vue";

import MyButton from "./components/atom/Button.vue";
export default {
  components: {
    MyButton
  },

  data() {
    return {
      count: 0,
      ok: false,
      seen: true,
    }
  },

  methods: {
    switchSeen() {
      this.seen = !this.seen;
    },
    async increment() {
      this.count++
      await nextTick()
      console.log("fin");
    },
  }
}
</script>

<template>
  <MyButton></MyButton>
  <MyButton></MyButton>
  <p>{{ ok? "Yes": "No" }}</p>
  <div>
    <p v-if="seen">Hello</p>
    <button @click="switchSeen">Switch</button>
  </div>
  <div>
    <button @click="increment">{{ count }}</button>
  </div>
</template>
