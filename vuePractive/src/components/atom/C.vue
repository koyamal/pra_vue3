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
      copyNumberList[1] = 2;
      console.log(copyNumberList);
      console.log(numberList);
    }
  }
  }
</script>
<template>
  <div>This is C</div>
</template>
