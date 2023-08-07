<script>
export default {
  data() {
    return {
      contentBox: [],
    }
  },
  methods: {
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
    }
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
</template>
