<script>
  export default {
    data() {
      return {
        isWriter: false,
        isGetAllData: true,
      }
    },
    computed: {
      showMessage() {
        return this.isWriter? 'Writer': 'No writer';
      },
      getAllDoc() {
        if(this.isGetAllData) {
          return 'Get All Data';
        } else if(false) {
          return 'Get Limit Data';
        } else {
          return 'Check Limit Data';
        }
      },
      getOneDoc() {
        return ['Doc', 'Id'];
      }
    },
    methods: {
      funcA() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('funcA');
            resolve('end funcA.');
          }, 300);
        });
      },
      funcB() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('funcB');
            resolve('end funcB.');
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
  <div>
    <p>{{ showMessage }}</p>
    <button @click="() => isWriter = !isWriter">Toggle</button>
  </div>
  <p>
    {{ getAllDoc }}
    {{ getOneDoc.forEach(doc => {
      return doc;
    }) }}
    {{ getOneDoc }}
    <p v-for="doc in getOneDoc">
      cats: {{ doc }} dog:
    </p>
    <button @click="() => isGetAllData = !isGetAllData">GET?</button>
  </p>
</template>
