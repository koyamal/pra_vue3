import {defineStore} from "pinia";
import type {Member} from "@/interface";

interface State {
  memberList: Map<number, Member>;
  isLoaing: boolean;
}

let _database: IDBDatabase;
async function getDatabase(): Promise<IDBDatabase> {
  const promise = new Promise<IDBDatabase>(
    (resolve, reject): void => {
      if(_database != undefined){
        resolve(_database)
      }else{
        const request = window.indexedDB.open("asyncdb", 1);
        request.onupgradeneeded = (event) => {
          const target = event.target as IDBRequest;
          const database = target.result as IDBDatabase;
          database.createObjectStore("members", {keyPath: "id"});
        }
        request.onsuccess = (event) => {
          const target = event.target as IDBRequest;
          _database = target.result as IDBDatabase;
          resolve(_database);
        };
        request.onerror = (event) => {
          console.log("ERROR: DB cannot Open", event);
          reject(new Error("ERROR: DB cannot Open"));
        };
      }
    }
  );
  return promise;
}

export const useMembersStore = defineStore({
  id: "members",
  state: (): State => {
    return {
      memberList: new Map<number, Member>(),
      isLoaing: true
    };
  },
  getters: {
    getById: (state) => {
      return (id: number): Member => {
        const member = state.memberList.get(id) as Member;
        return member;
      }
    },
    isMemberListEmpty: (state): boolean => {
      return state.memberList.size === 0;
    },
  },
  actions: {
    async prepareMemberList(): Promise<boolean> {
      const database = await getDatabase();
      const promise = new Promise<boolean>(
        (resolve, reject) => {
          const transaction = database.transaction("members", "readonly");
          const objectStoer = transaction.objectStore("members");
          const memberList = new Map<number, Member>();
          const request = objectStoer.openCursor();
          request.onsuccess = (event) => {
            const target = event.target as IDBRequest;
            const cursor = target.result as IDBCursorWithValue;
            if(cursor){
              const id = cursor.key as number;
              const member = cursor.value as Member;
              memberList.set(id, member);
              cursor.continue();
            }
          };
          transaction.oncomplete = () => {
            this.memberList = memberList;
            this.isLoaing = false;
            resolve(true);
          };
          transaction.onerror = (event) => {
            console.log("ERROR: Fail to Get Data", event);
            reject(new Error("ERROR: Fail to Get Data"));
          };
        }
      );
      return promise;
    },
    async insertMember(member: Member): Promise<boolean> {
      const memberAdd: Member = {
        ...member
      };
      const database = await getDatabase();
      const promise = new Promise<boolean>(
        (resolve, reject) => {
          const transaction = database.transaction("members", "readwrite");
          const objectStore = transaction.objectStore("members");
          objectStore.put(memberAdd);
          transaction.oncomplete = () => {
            resolve(true);
          };
          transaction.onerror = (event)  => {
            console.log("ERROR: Data registration failed");
            reject(new Error("ERROR: Data registration failed"));
          };
        }
      );
      return promise;
    }
  },
});
