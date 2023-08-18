<script>
export default {
  data() {
    return {
      count: "Text",
      useData: 3,
      highPreasure: "Goal",
    }
  },
  methods: {
    callCenter() {
      console.log("Call Center");
    },
    getInfo() {
      const data = {
        a: { userName: '', updateDate: ''},
        b: { userName: '', updateDate: ''},
      }
      return data;
    },
    useApuluplus() {
      let a = 1;
      console.log(a++);
      console.log(a);
    },
    usepuluplusA() {
      let a = 1;
      console.log(++a);
      console.log(a);
    }
  }
}
</script>

<template>
  <div>
    <p>{{ count }} : {{ useDate }} = {{ highPreasure }}</p>
    <button @click="() => count += 'E'">Add E</button>
    <button @click="useApuluplus">useApuluplus</button>
    <button @click="usepuluplusA">usepuluplusA</button>
  </div>
</template>
