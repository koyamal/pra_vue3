<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  props: ['title', 'content'],
}
</script>

<template>
  <div>
    ================
  </div>
  <div>
    <p>title</p>
    <p>{{ title }}</p>
  </div>
  <div>
    <p>content</p>
    <p>{{ content }}</p>
    <button @click="$emit('enlarge-text')">Large</button>
  </div>

</template>