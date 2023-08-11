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
      const copyNumberList = this.numberList;
      const spreadNumberList = [...this.numberList];
      copyNumberList[1] = 2;
      console.log(copyNumberList);
      console.log(this.numberList);
    }
  }
  }
</script>
<template>
  <div>This is C</div>
  <button @click="editAndShowNumberList">List</button>
</template>
