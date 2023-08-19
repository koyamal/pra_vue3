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
      }
    }
  }
</script>
<template>
  <button @click="funcA">funcA</button>
</template>
