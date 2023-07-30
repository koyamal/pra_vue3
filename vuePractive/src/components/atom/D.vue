<script>
export default {
  data() {
    return {
      viewData: "2023:04:05 13:23:53",
      useData: 3,
      highPreasure: "Goal",
      textData: "Hello",
      inputData: "Input Area",
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
  <div>
    <input type="text" v-model="inputData">
    <p>{{ inputData }}</p>
    <button @click="() => inputData = ''">Clear</button>
    <button @click="() => inputData = 'Done'">Done</button>
    <button @click="() => inputData = 'Hello'">Hello</button>
  </div>
</template>
