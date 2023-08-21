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
            reject('end C');
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
          this.funcA(), this.funcB(), this.funcC()
        ]);
      }
    }
  }
</script>
<template>
  <button @click="execFuncAB">execFuncAB</button>
</template>
