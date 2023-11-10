<script>
  export default {
    data() {
      return {
        isWriter: false,
        isGetAllData: true,
        adminFlag: false,
        userInfo: {
          name: '',
          auth: '',
        },
        thValue: 0.3,
        dataInt: 12,
      }
    },
    computed: {
      isAdmin() {
        if (this.adminFlag) return true;
        dataInt+=10;
        dataInt-= 10;
        return (dataInt === 1) ? true: false;
      },
      showMessage() {
        const a = 20;
        const b = a >19 ? 20: 19;
        return this.isWriter? 'Writer': 'No writer';
      },
      setData() {
        const a = 0;
        if (a > 0) {
          this.isAdmin = false;
          return;
        }
        this.isAdmin = true;
      }
      getAllDoc() {
        if(this.isGetAllData) {
          return 'Get All Data';
        } else if(isAdmin) {
          return 'Get Limit Data';
        } else {
          console.log("hello");
          if(this.isAdmin) return 'Is Admin'
          return 'Check Limit Data';
        }
      },
      getOneDoc() {
        return ['Doc', 'Id'];
      }
    },
    methods: {
      setIsAdmin() {
        if(this.userInfo.auth === 'admin') {
          this.adminFlag = true;
        } else {
          this.adminFlag = false;
        }
      },
      sunOrMoon(){
        const nowDate = new Date();
        console.log(nowDate.getSeconds());
        console.log(nowDate.getHours());
        const sunMoon = (nowDate.getHours < 3 || nowDate.getHours > 18) ? 'moon': 'sun';
        console.log(sunMoon);
        return sunMoon;
      },
      judgeSunMoon() {
        const judgeFlag = this.sunOrMoon();
        if(judgeFlag === 'sun'){
          console.log('This is sun');
        }else if(judgeFlag === 'moon') {
          console.log('This is moon');
        } else {
          console.log('This is not sun/moon');
          console.log('This is not sun/moon');
          console.log('This is not sun/moon');
        }

        return judgeFlag? 'Hello': 'Bye';
      },
      setUserAuth() {
        const numRand = Math.random();
        if (numRand > this.thValue) {
          this.userInfo.auth = 'admin';
        } else {
          this.userInfo.auth = 'user';
        }
        this.setIsAdmin();
      },
      funcA() {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log('funcA');
            resolve('end funcA.');
          }, 300);
        });
      },
      funcB() {
        return new Promise((resolve) => {
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
        return new Promise((resolve) => {
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
  <div>
    <p v-if="isAdmin">Admin !!</p>
    <button @click="setIsAdmin">Admin?</button>
    <button @click="setUserAuth">setUserAuth</button>
  </div>
  <div>
    <button @click="sunOrMoon">sunOrMoon</button>
  </div>
</template>
