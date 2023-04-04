<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  },
  props: ['msg']
}
</script>

<template>
  <div>
    <h2>{{ greeting }}</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
