<script>
export default {
  data() {
    return {
      msg: 'This is DisplayArticle'
    }
  },
  props:['art'],
  methods: {
    onClick: function(event){
      this.$emit("deleteArticleEvnet", this.art.id)
    }
  }
}
</script>

<template>
    <div class="article">
      <div class="titleBox">
        <h2 class="artTitle">{{ art.title }}<span style="font-size: smaller;">  (id:{{art.id}})</span></h2>
        <button class="showButton">{{ false? "open": "close" }}</button>
      </div>
        <p>{{ art.content }}</p>
        <p>by {{ art.author }}</p>
        <button class="deleteButton" v-on:click="onClick">Delete</button>
    </div>
</template>

<style scoped>
.article{
  color: white;
  background-color: blue;
  width: 500px;
  margin-bottom: 1%;
}
.deleteButton{
  margin-bottom: 1%;
}
.titleBox{
  display: flex;
  justify-content: center;
  position: relative;
}
.artTitle{
  margin: 0;
}
.showButton{
  position: absolute;
  right: 0;
}

.test{
  background-color: white;
  color: green
}
</style>