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
      async execFunctions() {
        const a = await asyncFunctions(1000, 'hello', 'world');
        console.log(a);
      }
  },
}
</script>
<template>
  <button @click="execFunctions">Do</button>
</template>
