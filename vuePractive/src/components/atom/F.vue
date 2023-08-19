<script>
  export default {
    data() {
      return {}
    },
    methods: {
      funcA() {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('hello');
            resolve('end');
          }, 500);
        });
      }
    }
  }
</script>
<template>
  <button @click="funcA">funcA</button>
</template>
