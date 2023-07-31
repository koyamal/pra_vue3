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
        id: Math.random(),
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
  <p>{{ contentBox }}</p>
</template>
