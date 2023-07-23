<script>
export default {
  data() {
    return {
      count: "Text"
    }
  }
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="() => count += 'E'">Add E</button>
  </div>
</template>