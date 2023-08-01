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
  },
}
</script>
<template>
  <div>This is B</div>
  <button @click="addContent">Add</button>
  <button @click="() => contentBox = []">Delete</button>
  <p v-for="content in contentBox">ID: {{content.id}} Title: {{ content.title }}</p>
</template>
