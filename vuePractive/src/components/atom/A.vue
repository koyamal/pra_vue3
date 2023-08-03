<script>
export default {
  data() {
    return {
      dataA: "This is A",
      listData: ["A", "B", "C", "D"],
    }
  },
  methods: {
    sayHello: () => {
      console.log("Say hello");
    },
    sayBye: () => {
      console.log("Say bye");
    }
  }
}
</script>
<template>
  <div>This is A</div>
  <p>{{ dataA }}</p>
  <button @click="() => dataA = dataA + 'A'">Add A</button>
  <div v-for="data in listData">{{ data }}</div>
</template>
