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
    sayHelloAndBye() {
      const nowDate = new Date();
      if(nowDate.getHours() > 12) {
        this.sayHello();
      } else {
        this.sayBye();
      }
    },
    countUp() {
      this.counter = this.counter + 1;
      if(this.counter > 20) {
        this.counter = 0;
      } else {
        console.log('count up');
      }
    }
  }
}
</script>
<template>
  <div>This is A</div>
  <p>{{ dataA }}</p>
  <button @click="() => dataA = dataA + 'AAA'">Add A</button>
  <div v-for="data in listData">{{ data }}</div>
  <button @click="sayBye">Bye</button>
  <button @click="countUp">Up!</button>
  <p>{{ counter }}</p>
  <button @click="() => counter = 0">Zero</button>
  <button @click="sayHelloAndBye">Hello</button>
</template>
