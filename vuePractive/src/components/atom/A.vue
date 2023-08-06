<script>
export default {
  data() {
    return {
      dataA: "This is A",
      listData: ["A", "B", "C", "D"],
      counter: 0,
    }
  },
  methods: {
    sayHello() {
      console.log("Say hello");
    },
    sayBye() {
      console.log("Say bye");
      alert("Bye");
    },
    countUp() {
      this.counter = this.counter + 1;
    }
  }
}
</script>
<template>
  <div>This is A</div>
  <p>{{ dataA }}</p>
  <button @click="() => dataA = dataA + 'A'">Add A</button>
  <div v-for="data in listData">{{ data }}</div>
  <button @click="sayBye">Bye</button>
  <button @click="countUp">Up!</button>
  <p>{{ counter }}</p>
  <button @click="() => counter = 0">Zero</button>
</template>
