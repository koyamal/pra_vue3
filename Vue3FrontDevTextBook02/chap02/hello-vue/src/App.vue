<script setup lang="ts">
import {ref} from "vue";
import CountUpButton from "./components/CountUpButton.vue";
import CountDownButton from "./components/CountDownButton.vue";

const memberType = ref(1);
const memberTypeSelect = ref(1);
const userName = ref("taro");
const htmlStr = ref(`<a href="https://vuejs.org//">Vue.jsのTOPページ</a>`);
const counter = ref(0);
const userId = ref(0);
const dataName = ref("userName");

const onClickCountUp = () => {
  counter.value++;
}
const useSetTimeout = async() => {
  const data = await fetch("./src/main.ts");
  console.log(data.ok);
  return data;
}

const onClickCountDown = () => {
  counter.value--;
}

const onClickZeroReset = () => {
  counter.value = 0;
}

const useSubstring = () => {
  const field = "userName";
  dataName.value = `${field[0].toUpperCase()}${field.substring(1)}`;
}
</script>

<template>
  <section>{{ htmlStr }}</section><br>
  <section v-html="htmlStr"></section>
  <section>
    <label><input type="radio" name="memberType" value="1" v-model="memberType">通常会員</label>
    <label><input type="radio" name="memberType" value="2" v-model="memberType">特別会員</label>
    <label><input type="radio" name="memberType" value="3" v-model="memberType">優良会員</label>
    <br>
    <p>選択されたラジオボタン：{{ memberType }}</p>
  </section>
  <br>
  <section>
    <select v-model="memberTypeSelect">
      <option value="1">通常会員</option>
      <option value="2">特別会員</option>
      <option value="3">優良会員</option>
      <option value="4">VIP</option>
    </select>
    <p>選択されたリスト：{{ memberTypeSelect }}</p>
  </section>
  <section>
    <input type="text" v-model="userName">
    <p>user name: {{ userName }}</p>
  </section>
  <section>
    <p>Hello, New Branch</p>
    <p>Hello, New Branch 02</p>
    <p>Hello, New Branch 03!</p>
    <p>Hello, New Branch 04</p>
    <p>Hello, New Branch 05</p>
    <p>Hello, New Branch 06</p>
    <p>Hello, New Branch 07</p>
    <p>Hello, New Branch 08</p>
    <p>Hello, New Branch 09!!!???</p>
    <p>Hello, New Branch 10-02-02-02</p>
    <p>Hello, New Branch 11-03-03-03</p>
    <p>Hello, New Branch 12</p>
    <p>Hello, New Branch 13</p>
    <p>Hello, New Branch 14-03</p>
    <p>Hello, New Branch 15</p>
    <p>Hello, New Branch 16</p>
    <p>Hello, New Branch 17</p>
    <p>Hello, New Branch 18-02</p>
    <p>Hello, New Branch 19-02</p>
    <a>Hello, New Branch 20</a>
    <a>Hello, New Branch 21</a>
    <a>Hello, New Branch 22-02-2</a>
    <a>Hello, New Branch 23-02-2</a>
    <a>Hello, New Branch 24-02-2</a>
    <a>Hello, New Branch 25-02-2</a>
    <p>#6512</p>
    <p>#6512-02</p>
    <p>{{ userId }}</p>
  </section>
  <section>
    <p>Count: {{ counter }}</p>
    <button v-on:click="onClickCountUp">Count Up!</button>
    <button v-on:click="onClickCountDown">Count Down!</button>
    <button v-on:click="onClickZeroReset">Zero!!</button>
  </section>
  <section>
    <p>{{ dataName }}</p>
    <button v-on:click="useSubstring">useSubstring</button>
  </section>
  <section>
    <button v-on:click="async()  => {
      console.log('Strat');
      await useSetTimeout();
      console.log('Bye');
    }">Hello</button>
  </section>
  <CountUpButton></CountUpButton>
  <CountUpButton></CountUpButton>
  <CountDownButton></CountDownButton>
  <CountDownButton></CountDownButton>
</template>

<style scoped>
</style>
