<script>
export default {
  data() {
    return {
      viewData: "2023:04:05 13:23:53",
      useData: 3,
      highPreasure: "Goal",
      textData: "Hello",
    }
  }
}
</script>

<template>
  <div>This is D</div>
  <div>
    <p>{{ viewData }}</p>
    <p>Hello D component</p>
    <p>{{ textData }}</p>
    <button @click="() => textData = 'ConCon'">Click</button>
  </div>
</template>
