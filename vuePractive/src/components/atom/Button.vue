<script>
export default {
  data() {
    return {
      count: 0,
      isButtonDisabled: true,
    }
  }
}
</script>

<template>
  <button :disabled="isButtonDisabled" @click="count++">You clicked me {{ count }} times.</button>
</template>
