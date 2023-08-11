<script>
  export default {
  data() {
    return {
      numberList: [
        1, 3, 3, 4, 5
      ]
    }
  },
  methods: {
    editAndShowNumberList() {
      const copyNumberList = numberList;
      const spreadNumberList = [...numberList];
    }
  }
  }
</script>
<template>
  <div>This is C</div>
</template>
