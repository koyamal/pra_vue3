<script>
  export default {
    data() {
      return {
        isWriter: false,
      }
    },
    computed: {
      showMessage() {
        return this.isWriter? 'Writer': 'No writer';
      },
    },
    methods: {
      funcA() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('funcA');
            resolve('end A');
          }, 300);
        });
      },
      funcB() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('funcB');
            resolve('end B');
          }, 400);
        });
      },
      funcC() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('funcC');
            reject('error: C');
          }, 500);
        });
      },
      funcD() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('funcD');
            resolve('end D');
          }, 600);
        });
      },
      async execFuncAB() {
        const a = await Promise.all([
          this.funcA(), this.funcB(), this.funcC(), this.funcD()
        ]);
        console.log(a);
        console.log('Done!');
      },
    }
  }
</script>
<template>
  <button @click="execFuncAB">execFuncAB</button>
  <button @click="funcC">funcC</button>
  <button @click="funcD">funcD</button>
</template>
