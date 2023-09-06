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
        return a;
      },
      async execPromiseAll() {
        const a = await Promise.all([
          this.execFunctions(1000 ,'Hello', 'World'),
          this.execFunctions(2000 ,'Hello2', 'World2'),
          this.execFunctions(3000 ,'Hello3', 'World3'),
        ]);
        console.log(a);
      },
      async execPromiseAll2() {
        const a = await Promise.all([
          this.execFunctions(1000 ,'Hello', 'World'),
          this.execFunctions(2000 ,'Hello2', 'World2'),
          this.execFunctions(3000 ,'Hello3', 'World3'),
        ]);
      }

  },
}
</script>
<template>
  <button @click="execPromiseAll">Do</button>
</template>
