<script>
export default {
  data() {
    return {
      contentBox: [],
      checkStatus: '',
      checkFlag: false,
      numCheck: 1,
      checkHistries: {},
      showCheckhello: '',
      showCheckworld: '',
    }
  },
  mounted() {
    this.checkHistries = {
      [this.numCheck]: {
          hello: "this",
          world: "that",
        }
    }
  },
  methods: {
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
</template>
