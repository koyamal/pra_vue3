<script>
import { nextTick } from "vue";

import MyButton from "./components/atom/Button.vue";
import ButtonCounter from "./components/atom/ButtonCounter.vue";
import DisplayData from "./components/atom/DisplayData.vue";
import AlertBox from "./components/atom/AlertBox.vue";
import A from "./components/atom/A.vue";
import B from "./components/atom/B.vue";
import C from "./components/atom/C.vue";

export default {
  components: {
    MyButton,
    ButtonCounter,
    DisplayData,
    AlertBox,
    A,
    B,
    C,
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
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      refValue: "hello!!!!???!!!!!",
      articles: [
        {title: "No.1", content: "This is No.1"},
        {title: "No.2", content: "This is No.2"},
        {title: "No.3", content: "This is No.3"}
      ],
      articleFontSize: 1
    }
  },
  watch: {
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
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
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    },
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
    this.$refs.input.focus()
  },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log("updated");
  // }
}
</script>

<template>
  <component is="C"></component>
  <AlertBox>Hello</AlertBox>
  <DisplayData
    v-for="article in articles"
    :title="article.title"
    :content="article.content"
  />
  <div :style="{ fontSize: articleFontSize + 'em' }">
    <DisplayData title="Hello World!!!!" content="This is Hello world class" @enlarge-text="articleFontSize += 0.1"/>
  </div>

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
  <div>
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
  <div>
    <input ref="input" v-model="refValue" />
    <p>{{ refValue }}</p>
  </div>
  <div>
    <h1>Here is a child component!</h1>
    <ButtonCounter />
  </div>
</template>
