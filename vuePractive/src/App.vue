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
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
    }
  },

  computed: {
    checkAuthorInfo() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    now() {
      return Date.now();
    },
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
    DeleteAuthorInfo() {
      this.author.books = [];
    },
    ResetAuthorInfo() {
      this.author.books = [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ];
    },
    nowInMethods() {
      return Date.now();
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
  <div>
    <p>Has published books: {{ checkAuthorInfo }}</p>
    <button @click="DeleteAuthorInfo">Delete</button>
    <button @click="ResetAuthorInfo">Reset</button>
  </div>
  <div>Computed: {{ now }}</div>
  <div>Method: {{ nowInMethods() }}</div>
</template>
