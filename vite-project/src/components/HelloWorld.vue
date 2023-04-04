<script>
import DisplayArticle from './DisplayArticle.vue'
let id = 1
export default {
  data() {
    return {
      greeting: 'Hello World!',
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
    DisplayArticle
  }
}
</script>

<template>
  <div>
    <h2>{{ greeting }}</h2>
    <p>{{ msg }}</p>
    <div v-for="article in articles" :key="article.id">
      <DisplayArticle :art="article"/>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
