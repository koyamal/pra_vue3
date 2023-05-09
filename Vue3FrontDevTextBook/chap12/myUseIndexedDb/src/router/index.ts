import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import AppTop from "@/views/AppTop.vue";
import Sub from "@/views/Sub.vue";

const routeSettings: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AppTop",
    components: {
      default: AppTop,
      sub: Sub,
    }
  },
  {
    path: "/member/memberList",
    name: "MemberList",
    component: () => {
      return import("@/views/member/MemberList.vue");
    }
  },
  {
    path: "/member/detail/:id",
    name: "MemberDetail",
    component: () => {
      return import("@/views/member/MemberDetail.vue");
    },
    props: (routes) => {
      const idNum = Number(routes.params.id);
      return {
        id: idNum
      };
    }
  },
  {
    path: "/member/add",
    name: "MemberAdd",
    component: () => {
      return import("@/views/member/MemberAdd.vue");
    }
  },
  {
    path: "/member/go",
    name: "Go",
    redirect: {
      name: "MemberList",
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => {
      return import("@/views/NotFound.vue");
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings,
});

export default router;
