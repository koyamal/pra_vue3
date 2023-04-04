<script>
export default {
  data() {
    return {
      msg: 'This is DisplayArticle'
    }
  },
  props:['art']
}
</script>

<template>
    <div>
        <h2>{{ art.title }}</h2>
        <p>{{ art.content }}</p>
        <p>by {{ art.author }}</p>
    </div>
</template>

<style scoped>
</style>