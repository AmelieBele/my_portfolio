import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BookiPage from "../views/BookiPage.vue";
import OhMyFoodPage from "../views/OhMyFoodPage.vue";
import KanapPage from "../views/KanapPage.vue";
import HotTakesPage from "../views/HotTakesPage.vue";
import GroupomaniaPage from "../views/GroupomaniaPage.vue";
import SkfamilyPage from "../views/SkfamilyPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/Booki",
    name:"Booki",
    component: BookiPage
  },
  {
    path: "/OhMyFood",
    name:"OhMyFood",
    component: OhMyFoodPage
  },
  {
    path:"/Kanap",
    name:"Kanap",
    component: KanapPage
  },
  {
    path:"/HotTakes",
    name:"HotTakes",
    component: HotTakesPage
  },
  {
    path:"/Groupomania",
    name:"Groupomania",
    component: GroupomaniaPage
  },
  {
    path:"/SKFamily",
    name:"SKFamily",
    component: SkfamilyPage
  }



];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
