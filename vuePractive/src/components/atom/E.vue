<script>
export default {
  data() {
    return {
      count: "Text",
      useData: 3,
      highPreasure: "Goal",
    }
  }
}
</script>

<template>
  <div>
    <p>{{ count }} : {{ useDate }} = {{ highPreasure }}</p>
    <button @click="() => count += 'E'">Add E</button>
  </div>
</template>