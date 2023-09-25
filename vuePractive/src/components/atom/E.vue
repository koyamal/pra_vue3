<script>
export default {
  data() {
    return {
      count: "Text",
      useData: 3,
      highPreasure: "Goal",
      statusLevel: 3100,
    }
  },
  methods: {
    callCenter() {
      console.log(this.statusLevel);
      console.log("Call Center");
      let a = 0;
      for(let i = 0; i < 5; i ++) {
        a += i;
        console.log(i + 2);
      }
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
    },
    useDelete() {
      const data = {
        userName: 'Bob',
        updateDate: '20230818',
        checkFlag: false,
      };
      console.log(data);
      delete data.updateDate;
      console.log(data);
    },
    useVoid() {
      const output = void 100;
      console.log(output);
      console.log(void(0));
      console.log(void(100));

      if(!void(0)) {
        console.log('False');
      }
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
    <button @click="useDelete">useDelete</button>
    <button @click="useVoid">useVoid</button>
  </div>
</template>
