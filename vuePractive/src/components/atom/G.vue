<script>
  import asyncFunctions from './functions';
  import {asyncFunctionsTwice} from './functions';
  import {makeFunc} from './functions';
  export default {
    data() {
      return {
        isStatus: 'progress',
        resultPromise: [],
        finFlag: false,
        penColor: 'black',
        penWidth: 32,
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
      async useForEach() {
        console.log("Start");
        const functions = [
          makeFunc(1000 ,'Hello', 'World'),
          makeFunc(2000 ,'Hello2', 'World2'),
          makeFunc(3000 ,'Hello3', 'World3'),
          makeFunc(4000 ,'Hello4', 'World4'),
        ];
        functions.forEach(async (fn) => {
          await fn();
        });
        console.log('Success');
      },
      async useForOf() {
        console.log("Start");
        const functions = [
          makeFunc(1000 ,'Hello', 'World'),
          makeFunc(2000 ,'Hello2', 'World2'),
          makeFunc(3000 ,'Hello3', 'World3'),
          makeFunc(4000 ,'Hello4', 'World4'),
          makeFunc(5000 ,'Hello5', 'World5'),
        ];
        for(const fn of functions) {
          await fn();
          console.log('fn()');
        };
        console.log('Success');
        for(const fn of functions) {
          await fn();
        };
        for(const fn of functions) {
          console.log('start');
          await fn();
          console.log('end');
        }
      },
      async judgelength() {
        const nonRead = [1, 3, 5, 6, 12, 15];
        if(nonRead.length === 0) return;
        const a = 0;
        nonRead.forEach((non) => {
          if(a === non) return;
          console.log(non);
        });
        return a;
      },
      async useMapPromiseAll() {
        console.log("Start");
        const functions = [
          makeFunc(1000 ,'Hello', 'World'),
          makeFunc(2000 ,'Hello2', 'World2'),
          makeFunc(3000 ,'Hello3', 'World3'),
          makeFunc(4000 ,'Hello4', 'World4'),
          makeFunc(5000 ,'Hello5', 'World5'),
          makeFunc(6000 ,'Hello6', 'World6'),
        ];
        await Promise.all(functions.map(fn => {
          return fn();
        }));
        console.log('Success');
        for(let i = 0; i > 10; i++) {
          console.log(i);
          let bumbBox = [];
          if(i % 2 === 1) {
            bumbBox = [1, 3, 5];
            console.log(ans);
          } else {
            bumbBox = [2, 4, 6];
          }
          let ans = 0;
          bumbBox.forEach((bumb) => {
            ans += bumb;
          });
          bumbBox.map((bumb) => {
            return bumb * 2;
          })
        }
      },
      catchError() {
        console.log("hello");
        try {
          console.log("try");
        } catch (error) {
          const a = "error";
          console.log(error);
        } finally {
          const a = true;
          const b = false;
          const c = a && b;
          console.log("fin.");
          console.log("");
        }
      }
      useMap() {
        const docs = ["a", "b", "c"];
        docs.forEach((data) => {
          console.log(data);
        });
      },
      outputPenInfo() {
        console.log(this.penColor);
      },
      async useasyncFunctionsTwice() {
        const a = await asyncFunctionsTwice([
          {waitTime: 1000, logMsg: 'First', rsvMsg: '01'},
          {waitTime: 1000, logMsg: 'Second', rsvMsg: '02'},
          {waitTime: 1000, logMsg: 'Third', rsvMsg: '03'},
          {waitTime: 1100, logMsg: '4th', rsvMsg: '04'},
        ]);
        console.log(a);
        for(let i = 0; i > 100; i++) {
          console.log(i);
        }
        return a;
      },
      async execFunctions(waitTime, logMsg, rsvMsg) {
        console.log('Start execFunctions');
        const a = await asyncFunctions(waitTime, logMsg, rsvMsg);
        console.log('After A');
        const b = await asyncFunctions(waitTime, logMsg, rsvMsg);
        if(b === 0) {
          console.log('b is zero');
        } else {
          console.log('b is not zero');
        }
        console.log('before return');
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
  <button @click="useForOf">useForOf</button>
  <button @click="useForEach">useForEach</button>
  <button @click="useMapPromiseAll">useMapPromiseAll</button>
  <button @click="useMap">useMap</button>
  <button @click="execPromiseAll">Do</button>
  <button @click="manyPromiseAll">3 Promise All</button>
  <button @click="getResult">getResult</button>
  <button @click="reset">Reset</button>
  <p class="redcolor">{{ finFlag }}</p>
  <div v-show="finFlag">
    finFlag is true
    <div class="forGoodText" v-for="data in resultPromise">
       <p>{{data}}</p>
    </div>
  </div>
  <button class="redcolor" @click="useasyncFunctionsTwice">SuseasyncFunctionsTwice</button>
</template>
<style scoped>
.redcolor {
  color: 'red';
  width: 48;
  font-size: 52;
  padding: 8;
};
.forGoodText {
  font-weght: 32;
  font-size: 18;
  line-height: 19;
}
</style>
