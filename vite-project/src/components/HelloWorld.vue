<script>
import DisplayArticle from './DisplayArticle.vue'
import AddArticle from './AddArticle.vue'
let id = 1
export default {
  data() {
    return {
      articleId: null,
      pageTitle: 'Hello World Blog',
      isDisplayAddArticle: false,
      articles: [
        {
          id: id++,
          title: 'First article',
          content: 'This is first article',
          author: 'John',
          upDateTime: '2023-02-04 19:02'
        },
        {
          id: id++,
          title: 'Second article',
          content: 'This is second article',
          author: 'Tom',
          upDateTime: '2023-02-05 21:31'
        },
        {
          id: id++,
          title: 'Third article',
          content: 'This is third article',
          author: 'John',
          upDateTime: '2023-02-06 08:22'
        }
      ]
    }
  },
  props: ['msg'],
  components: {
    DisplayArticle,
    AddArticle
  },
  methods: {
    getArticle: function(art){
      this.articles.push(art)
    },
    displayAddArticle: function(){
      this.isDisplayAddArticle = !this.isDisplayAddArticle
    },
    deleteArticle: function(artId){
      this.articles = this.articles.filter((art) => art.id !== artId)
    }
  },
  // beforeCreate: function(){
  //   console.log('beforeCreate', this.articleId)
  // },
  // created: function(){
  //   console.log('created', this.articleId)
  // },
  beforeMount: function(){
    // console.log('beforeMount', this.articleId)
    this.articleId = id
  },
  // mounted: function(){
  //   this.articleId = id
  // }
}
</script>

<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <p>{{ msg }}</p>
    <div v-for="article in articles" :key="article.id">
      <DisplayArticle :art="article" @deleteArticleEvnet="deleteArticle"/>
    </div>
    <button class="dispAddArt" v-on:click="displayAddArticle">{{ isDisplayAddArticle? "x": "Create Article" }}</button>
    <AddArticle v-show="isDisplayAddArticle" :articleId="articleId" @serveArticle="getArticle"/>
  </div>
</template>

<style scoped>
.dispAddArt{
  margin-bottom: 1em;
}
</style>
