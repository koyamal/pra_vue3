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
      execFunctions() {
        asyncFunctions(100, 'hello', 'world');
      }
  },
}
</script>
<template>
  <button @click="execFunctions">Do</button>
</template>
