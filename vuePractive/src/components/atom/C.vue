<script>
  export default {
  data() {
    return {
      numberList: [
        1, 3, 3, 4, 5, 6, 7, 8
      ],
      checkHistories: [
        {
          draft: { userName: 'tom', updateDate: '20230815 20:00' },
          checked: { userName: '', updateDate: '' },
          approved: { userName: '', updateDate: '' },
          allOK: { userName: '', updateDate: '' },
        },
      ],
      changeText: '',
      vIfFlag: true,
      isAdmin: false,
      userStatus: 'nomal',
      penColor: 'Blue',
    }
  },
  watch: {
    userStatus: (newStatus, oldStatus) => {
      if(oldStatus === 'nomal' && newStatus === 'admin') {
        console.log('Change admin');
      } else if (newStatus === 'admin') {
        console.log('new is Admin');
      } else if (oldStatus === 'nomal') {
        console.log('old is nomal');
      } else {
        console.log('Normal');
      }
    }
  },
  methods: {
    processCheck() {
      // const processValue = 'dev';
      const processValue = 'prod';
      const backupName = processValue === 'dev' ? '_fromDev': '';
      console.log(backupName);
      if(processValue === 'dev') return 0;
      if(processValue === 'prod') return 0;
      if('a' === 'b') return 1;
    },
    penInfoOutput() {
      console.log(this.penColor);
      const b = 0;
      if(b > 1) return 1;
      if(b < 1) return 1;
    },
    reset() {
      this.numberList = [
        1, 3, 3, 4, 5, 6
      ];
      for(num of this.numberList) {
        console.log(num);
      }
      this.checkHistories = [
        {
          draft: { userName: 'tom', updateDate: '20230815 20:00' },
          checked: { userName: '', updateDate: '' },
          approved: { userName: '', updateDate: '' },
        },
      ];
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
      const sliceNumberList = this.numberList.slice(0, 3);
      sliceNumberList[1] = 2;
      console.log(sliceNumberList);
      console.log(this.numberList);
    },
    editNomal() {
      const copyCheckHistoriesDraft = this.checkHistories[0].draft;
      copyCheckHistoriesDraft.userName = 'Bob';
      copyCheckHistoriesDraft.updateDate = '20330821 23:59';
      console.log(copyCheckHistoriesDraft.userName);
      console.log(this.checkHistories[0].draft.userName);
      console.log(copyCheckHistoriesDraft.updateDate);
      console.log(this.checkHistories[0].draft.updateDate);
    },
    editSpreadNomal() {
      const copyCheckHistoriesDraft = {...this.checkHistories[0].draft};
      copyCheckHistoriesDraft.userName = 'Bob';
      console.log(copyCheckHistoriesDraft.userName);
      console.log(this.checkHistories[0].draft.userName);
    },
    editSliceNomal() {
      const copyCheckHistoriesDraft = this.checkHistories.slice();
      copyCheckHistoriesDraft[0].draft.userName = 'Bob';
      console.log(copyCheckHistoriesDraft[0].draft.userName);
      console.log(this.checkHistories[0].draft.userName);
    },
    editSpreadText(text) {
      const copyCheckHistoriesDraft = {...this.checkHistories[0].draft};
      copyCheckHistoriesDraft.userName = text;
      console.log(copyCheckHistoriesDraft.userName);
      console.log(this.checkHistories[0].draft.userName);
    }
  }
  }
</script>
<template>
  <button @click="processCheck">processCheck</button>
  <div>This is C</div>
  <button @click="editAndShowNumberList">List</button>
  <button @click="editSpreadNumberList">SpreadList</button>
  <button @click="editSliceNumberList">SliceList</button>
  <button @click="reset">Reset</button>
  <p>
    <div>
      <p v-if="vIfFlag">Hello, World!!!</p>
      <button @click="() => vIfFlag = !vIfFlag">{{ vIfFlag ? "Close": "Open" }}</button>
    </div>
    <button @click="editNomal">Normal</button>
    <button @click="editSpreadNomal">Spread</button>
    <button @click="editSliceNomal">Slice</button>
    <button @click="reset">Reset</button>
  </p>
  <p>
    <input type="text" v-model="changeText">
    <button @click="() => editSpreadText(changeText)">SpreadText</button>
    <button @click="reset">Reset</button>
  </p>
  <p>
    <button @click="() => this.userStatus = 'admin'">Admin</button>
  </p>
</template>
