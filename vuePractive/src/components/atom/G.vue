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
        return a;
      },
      async execPromiseAll2() {
        const a = await Promise.all([
          this.execFunctions(1000 ,'Hello2-1', 'World2-1'),
          this.execFunctions(2000 ,'Hello2-2', 'World2-2'),
          this.execFunctions(3000 ,'Hello2-3', 'World2-3'),
        ]);
        return a;
      },
      async execPromiseAll3() {
        const a = await Promise.all([
          this.execFunctions(1000 ,'Hello3-1', 'World3-1'),
          this.execFunctions(2000 ,'Hello3-2', 'World2-2'),
          this.execFunctions(3000 ,'Hello3-3', 'World3-3'),
        ]);
        return a;
      },
      async manyPromiseAll() {
        const a = await Promise.all([
          this.execPromiseAll(),
          this.execPromiseAll2(),
          this.execPromiseAll3(),
        ]);
      }
  },
}
</script>
<template>
  <button @click="execPromiseAll">Do</button>
</template>
