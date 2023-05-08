import {defineStore} from "pinia";
import type {Member} from "@/interface";

interface State {
  memberList: Map<number, Member>;
}

export const useMembersStore = defineStore({
  id: "members",
  state: (): State => {
    return {
      memberList: new Map<number, Member>()
    };
  },
  getters: {
  },
  actions: {
    initList(): void {
      this.memberList.set(33456, {id: 33456, name: "Taro", email: "taro@example.com", points: 35, note: "VIP"});
      this.memberList.set(47783, {id: 47783, name: "Jiro", email: "jiro@example.com", points: 42});
    },
  },
});
