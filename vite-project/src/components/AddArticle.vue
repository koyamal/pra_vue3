<script>
export default {
  data() {
    return {
      article: {
        id: 1000,
        title: '',
        content: '',
        author: '',
        upDateTime: '2023-02-04 19:02'
      },
      flag: false,
      nowId: this.articleId
    }
  },
  methods:{
    onClick: function(){
      this.flag = true
      this.article.id = this.nowId
      this.$emit("serveArticle", {id: this.article.id, title: this.article.title, content: this.article.content, author: this.article.author, upDateTime: this.article.upDateTime})
      this.nowId ++
    }
  },
  props: ['articleId']
}
</script>

<template>
    <div>
      <label for="title">Title: </label>
      <input id="title" type="text" v-model="article.title">
      <br>
      <br>
      <label for="content">Content: </label>
      <textarea id="content" type="text" v-model="article.content"></textarea>
      <br>
      <br>
      <label for="author">Author: </label>
      <input id="author" type="text" v-model="article.author">
      <button v-on:click="onClick">Add</button>
      <p v-if="flag">{{ article }}</p>
    </div>
</template>

<style scoped>
</style>