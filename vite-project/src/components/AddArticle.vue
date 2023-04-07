<script>
export default {
  data() {
    return {
      article: {
        id: null,
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
      <div class="articleInfo">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="article.title">
        </div>
        <div>
          <label class="vertical-align-top" for="content">Content: </label>
          <textarea id="content" type="text" v-model="article.content"></textarea>
        </div>
        <div>
          <label for="author">Author: </label>
          <input id="author" type="text" v-model="article.author">
        </div>
        <button v-on:click="addArticle">Add</button>
      </div>

    </div>
</template>

<style scoped>
.articleInfo label{
  display: inline-block;
  text-align: right;
  width: 4em;
  margin-right: 1em
}
.articleInfo input{
  display: inline-block;
  /* text-align: right; */
  width: 20em;
}
.articleInfo textarea{
  display: inline-block;
  /* text-align: right; */
  width: 20em;
  margin-top: 1em;
  margin-bottom: 0.5em
}

.articleInfo button{
  margin-top: 1em;
  float: right;
}
.text-danger{
  color: red;
  font-size: large;
}
.vertical-align-top{
  margin-top: 0.6em;
  vertical-align: top;
}
</style>