<script>
  export default {
    data() {
      return {}
    },
    methods: {
      funcA() {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('funcA');
            resolve('end A');
          }, 500);
        });
      },
      funcB() {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('funcB');
            resolve('end B');
          }, 500);
        });
      },
      funcC() {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('funcC');
            resolve('end C');
          }, 500);
        });
      },
      funcD() {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('funcD');
            resolve('end D');
          }, 500);
        });
      },
      async execFuncAB() {
        const a = await Promise.all([
          this.funcA(), this.funcB(), this.funcC(), this.funcD()
        ]).then(() => console.log('Done'));
        console.log(a);
        console.log('Done!');
      },
      async sleep30ms() {
        await setTimeout(3000, () => {console.log("hello")});
        console.log('sleep 30ms');
        return '30s Done';
      },
      async sleep60ms() {
        await setTimeout(60);
        console.log('sleep 60ms');
        return '60s Done';
      },
      async sleep90ms() {
        await setTimeout(90);
        console.log('sleep 90ms');
        return '90s Done';
      },
    }
  }
</script>
<template>
  <button @click="execFuncAB">execFuncAB</button>
  <button @click="funcC">funcC</button>
  <button @click="funcD">funcD</button>
  <button @click="sleep30ms">30ms</button>
</template>
