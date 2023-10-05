<script>
export default {
  data() {
    return {
      contentBox: [],
      checkStatus: '',
      checkFlag: false,
      numCheck: 0,
      checkHistries: {},
      showCheckhello: '---',
      showCheckworld: '---',
      penLenght: 18,
      penWeight: 12,
      dryRowCondition: 'Good',
      goHomeAway: 'Twodays',
    }
  },
  mounted() {
    this.checkHistries = {
      [this.numCheck]: {
          hello: "this",
          world: "that",
          second: 'gear',
          third: 'top',
        }
    }
  },
  methods: {
    checkgoHomeAway() {
      console.log(this.goHomeAway);
    },
    changeCondition() {
      const randVal = Math.random();
      if(randVal < 0.5) {
        this.dryRowCondition = 'Best';
      } else {
        this.dryRowCondition = 'Good';
      }
    },
    pickUpCheck() {
      this.showCheckhello = this.checkHistries[this.numCheck].hello;
      this.showCheckworld = this.checkHistries[this.numCheck].world;
    },
    doneCheck() {
      this.checkHistries[this.numCheck] = {
        hello: "this",
        world: "that",
      }
    },
    contUpnumCheck() {
      this.numCheck += 1;
      const helloValue = "this".repeat(this.numCheck);
      const worldValue = "that".repeat(this.numCheck);
      if(this.numCheck > 1 && helloValue === 'thisthis') {
        this.addContent();
      }
      this.checkHistries[this.numCheck] = {
        hello: helloValue,
        world: worldValue,
      }
    },
    addContent() {
      const content = {
        id: String(Math.random()).split('.')[1],
        title: 'XYZ'.repeat(this.contentBox.length + 1),
      }
      this.contentBox.push(content);
      const a = 0;
      const b = 1;
      if(a > 1) {
        return a;
      } else if (b > 1) {
        return a === b;
      } else {
        return a > b;
      }
    },
    consoleLog(msg) {
      console.log("=========");
      console.log(msg);
      console.log("=========");
    },
    setData() {
      this.checkStatus = this.checkFlag? "hello": "bye";
    },
    toggleFlag() {
      this.checkFlag = !this.checkFlag;
    },
  },
}
</script>
<template>
  <div>This is B</div>
  <button @click="addContent">Add!!!</button>
  <button @click="() => contentBox = []">Delete!!!</button>
  <p v-for="content in contentBox">
    <h3>Title: {{ content.title }}</h3>
    <h5>ID: {{ content.id }}</h5>
    <h6>Hello</h6>
  </p>
  <button @click="consoleLog">Log</button>
  <p>
    <button @click="toggleFlag">toggle</button>
    <button @click="setData">set</button>
    <p>{{ checkStatus }}</p>
  </p>
  <p>{{ checkHistries }}</p>
  <p>
    PickUp:
    <p>{{ showCheckhello }}</p>
    <p>{{ showCheckworld }}</p>
  </p>
  <button @click="contUpnumCheck">contUpnumCheck</button>
  <input type="number" v-model="numCheck">
  <button @click="doneCheck">Done</button>
  <button @click="pickUpCheck">PickUp</button>
  <div>
    <p>{{ dryRowCondition }}</p>
    <button @click="changeCondition">Change</button>
    <button @click="() => console.log('hello')">hello</button>
  </div>
</template>
