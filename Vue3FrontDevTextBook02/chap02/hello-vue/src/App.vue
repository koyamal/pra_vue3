<script setup lang="ts">
import {ref} from "vue";

const memberType = ref(1);
const memberTypeSelect = ref(1);
const userName = ref("taro");
const htmlStr = ref(`<a href="https://vuejs.org//">Vue.jsのTOPページ</a>`);
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
  </section>
</template>

<style scoped>
</style>
