<script>
  import asyncFunctions from './functions';
  import {asyncFunctionsTwice} from './functions';
  export default {
    data() {
      return {
        isStatus: 'progress',
        resultPromise: [],
        finFlag: false,
      }
    },
    computed: {
    },
    watch: {
      resultPromise(newVal, oldVal) {
        if(newVal.length > 0) {
          this.finFlag = true;
        } else {
          this.finFlag = false;
        }
      }
    },
    methods: {
      async useasyncFunctionsTwice() {
        asyncFunctionsTwice([
          {waitTime: 1000, logMsg: 'First', rsvMsg: '01'},
          {waitTime: 1000, logMsg: 'Second', rsvMsg: '02'},
          {waitTime: 1000, logMsg: 'Third', rsvMsg: '03'}
        ]);
      },
      async execFunctions(waitTime, logMsg, rsvMsg) {
        const a = await asyncFunctions(waitTime, logMsg, rsvMsg);
        const b = await asyncFunctions(waitTime, logMsg, rsvMsg);
        return b;
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
          this.execFunctions(2000 ,'Hello3-2', 'World3-2'),
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
        console.log(a);
        return a;
      },
      async getResult() {
        const a = await this.manyPromiseAll();
        this.resultPromise = a;
      },
      reset() {
        this.resultPromise = [];
      }
  },
}
</script>
<template>
  <button @click="execPromiseAll">Do</button>
  <button @click="manyPromiseAll">3 Promise All</button>
  <button @click="getResult">getResult</button>
  <button @click="reset">Reset</button>
  <p>{{ finFlag }}</p>
  <div v-show="finFlag">
    finFlag is true
    <div v-for="data in resultPromise">
       <p>{{data}}</p>
    </div>
  </div>
</template>
