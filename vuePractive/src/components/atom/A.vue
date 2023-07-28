<script>
export default {
  data() {
    return {
      dataA: "This is A"
    }
  }
}
</script>
<template>
  <div>This is A</div>
  <p>{{ dataA }}</p>
  <button @click="() => dataA = dataA + 'A'">Add A</button>
</template>
