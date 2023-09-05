<script>
  import asyncFunctions from './functions';
  export default {
    data() {
      return {
      }
    },
    computed: {
    },
    methods: {
      async execFunctions(waitTime, logMsg, rsvMsg) {
        const a = await asyncFunctions(waitTime, logMsg, rsvMsg);
        console.log(a);
      },
      async execPromiseAll() {
        const a = Promise.all([
          this.execFunctions(1000 ,'Hello', 'World'),
          this.execFunctions(2000 ,'Hello2', 'World2'),
          this.execFunctions(3000 ,'Hello3', 'World3'),
        ]);
        console.log(a);
      }
  },
}
</script>
<template>
  <button @click="execFunctions">Do</button>
</template>
