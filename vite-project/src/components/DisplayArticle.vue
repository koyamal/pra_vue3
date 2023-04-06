<script>
export default {
  data() {
    return {
      msg: 'This is DisplayArticle',
      isShowContent: false
    }
  },
  props:['art'],
  methods: {
    onClick: function(){
      this.$emit("deleteArticleEvnet", this.art.id)
    },
    toggleShowContent: function(){
      this.isShowContent = !this.isShowContent
    }
  }
}
</script>

<template>
    <div class="article">
      <div class="titleBox">
        <h2 class="artTitle">{{ art.title }}<span style="font-size: smaller;">  (id:{{art.id}})</span></h2>
        <button class="showButton" v-on:click="toggleShowContent">{{ isShowContent? "-": "+" }}</button>
      </div>
      <div v-show="isShowContent">
        <p>{{ art.content }}</p>
        <p>by {{ art.author }}</p>
        <button class="deleteButton" v-on:click="onClick">Delete</button>
      </div>
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
  border-radius: 100px;
  position: absolute;
  right: 0;
  padding: 0.1em 0.5em;
  margin-top: 0.4em;
  margin-right: 0.4em;
}

.test{
  background-color: white;
  color: green
}
</style>