<script>
  export default {
  data() {
    return {
      numberList: [
        1, 3, 3, 4, 5
      ],
      checkHistories: [
        {
          draft: { userName: '', updateDate: '' },
          checked: { userName: '', updateDate: '' },
          approved: { userName: '', updateDate: '' },
        },
      ],
    }
  },
  methods: {
    reset() {
      this.numberList = [
        1, 3, 3, 4, 5
      ];
      this.checkHistories = [
        {
          draft: { userName: '', updateDate: '' },
          checked: { userName: '', updateDate: '' },
          approved: { userName: '', updateDate: '' },
        },
      ]
    },
    editAndShowNumberList() {
      const copyNumberList = this.numberList;
      copyNumberList[1] = 2;
      console.log(copyNumberList);
      console.log(this.numberList);
    },
    editSpreadNumberList() {
      const spreadNumberList = [...this.numberList];
      spreadNumberList[1] = 2;
      console.log(spreadNumberList);
      console.log(this.numberList);
    },
    editSliceNumberList() {
      const sliceNumberList = this.numberList.slice();
      sliceNumberList[1] = 2;
      console.log(sliceNumberList);
      console.log(this.numberList);
    },
    editNomal() {
      const copyCheckHistoriesDraft = this.checkHistories[0].draft;
      copyCheckHistoriesDraft.userName = 'Bob';
      console.log(copyCheckHistoriesDraft.userName);
      console.log(this.checkHistories[0].draft.userName);
    },
    editSpreadNomal() {
      const copyCheckHistoriesDraft = {...this.checkHistories[0].draft};
      copyCheckHistoriesDraft.userName = 'Bob';
      console.log(copyCheckHistoriesDraft.userName);
      console.log(this.checkHistories[0].draft.userName);
    },
    editSplitNomal() {
      const copyCheckHistoriesDraft = this.checkHistories[0].draft.split();
      copyCheckHistoriesDraft.userName = 'Bob';
      console.log(copyCheckHistoriesDraft.userName);
      console.log(this.checkHistories[0].draft.userName);
    },
  }
  }
</script>
<template>
  <div>This is C</div>
  <button @click="editAndShowNumberList">List</button>
  <button @click="editSpreadNumberList">SpreadList</button>
  <button @click="editSliceNumberList">SliceList</button>
  <button @click="reset">Reset</button>
  <p>
    <button @click="editNomal">Normal</button>
    <button @click="editSpreadNomal">Spread</button>
    <button @click="editSplitNomal">Split</button>
    <button @click="reset">Reset</button>
  </p>
</template>
