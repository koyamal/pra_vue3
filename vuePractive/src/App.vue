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
      isActive: false,
      hasError: false,
      items: [
        {message: "Hello", time: "AM"},
        {message: "Bye", time: "PM"},
      ],
      itemsObject: {
        name: "Taro",
        age: 21,
        countory: "USA",
      },
      name: "taro",
      text: "",
      checked: false,
      picked: "",
      dynamicTrueValue: "OK",
      dynamicFalseValue: "No",
      toggle: "",
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
    greet(event) {
      console.log(`Hello ${this.name}!`)
      if (event) {
        console.log(event.target.tagName)
      }
    },
    sayText(message) {
      console.log(message);
    },
    warn(message, event) {
      if (event) {
        console.log(event.clientX);
        event.preventDefault();
      }
      alert(message);
    },
  },

  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
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
  <div class="static" :class="{active: isActive, textDanger: hasError}">Hello</div>
  <div>
    <li v-for="item in items">
      {{ item.time }} : {{ item.message }}
    </li>
  </div>
  <div>
    <li v-for="({time, message}, index) in items">
      {{ index }} {{ time }} : {{ message }}
    </li>
  </div>
  <div>
    <li v-for="(value, key) in itemsObject" :key="value">
      {{ key }} : {{ value }}
    </li>
  </div>
  <div>
    <button @click="greet">Greet</button>
    <button @click="sayText('Hello, Bob')">Message</button>
    <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">Arrow</button>
  </div>
  <div>
    <p>{{ text }}</p>
    <input :value="text" @input="event => text = event.target.value">
    <input v-model="text">
  </div>
  <div>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  </div>
  <div>
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
  </div>
  <div>
    <input
      type="checkbox"
      v-model="toggle"
      :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue" />
      <p>{{ toggle }}</p>
  </div>
</template>
