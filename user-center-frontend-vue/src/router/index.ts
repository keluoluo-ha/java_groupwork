import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../pages/HomePage.vue";
import UserLoginPage from "@/pages/user/UserLoginPage.vue";
import UserRegisterPage from "@/pages/user/UserRegisterPage.vue";
import UserMangePage from "@/pages/admin/UserMangePage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user/login",
    name: "login",
    component: UserLoginPage,
  },
  {
    path: "/user/register",
    name: "register",
    component: UserRegisterPage,
  },
  {
    path: "/admin/userManage",
    name: "adminUserMange",
    component: UserMangePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
