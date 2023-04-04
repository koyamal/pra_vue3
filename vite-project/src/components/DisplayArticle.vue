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
    <div class="article">
        <h2>{{ art.title }}<span style="font-size: smaller;">  (id:{{art.id}})</span></h2>
        <p>{{ art.content }}</p>
        <p>by {{ art.author }}</p>
    </div>
</template>

<style scoped>
.article{
  color: white;
  background-color: blue;
  width: 500px;
}
</style>