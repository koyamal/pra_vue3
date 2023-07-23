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
    <button @click="() => count += 'T'"></button>
  </div>
</template>