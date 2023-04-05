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
      nowId: this.articleId,
      isInputError: false
    }
  },
  methods:{
    addArticle: function(){
      if(this.article.title !== "" && this.article.content !== ""){
        this.article.id = this.nowId
        this.article.author = this.article.author || "Anonymous"
        this.$emit("serveArticle", {...this.article})
        this.nowId ++
        this.article.title = ""
        this.article.author = ""
        this.article.content = ""
        this.isInputError = false
      }else{
        this.isInputError = true
      }
    }
  },
  props: ['articleId']
}
</script>

<template>
    <div>
      <p class="text-danger" v-show="isInputError">Input Title and Content</p>
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
      <button v-on:click="addArticle">Add</button>
    </div>
</template>

<style scoped>
.text-danger{
  color: red;
  font-size: large;
}
</style>