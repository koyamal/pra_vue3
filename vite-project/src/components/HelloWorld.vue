<script>
import DisplayArticle from './DisplayArticle.vue'
import AddArticle from './AddArticle.vue'
let id = 1
export default {
  data() {
    return {
      articleId: null,
      pageTitle: 'Hello World Blog',
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
    }
  },
  beforeMount: function(){
    this.articleId = id
  }
}
</script>

<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <p>{{ msg }}</p>
    <div v-for="article in articles" :key="article.id">
      <DisplayArticle :art="article"/>
    </div>
    <AddArticle :articleId="articleId" @serveArticle="getArticle"/>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
