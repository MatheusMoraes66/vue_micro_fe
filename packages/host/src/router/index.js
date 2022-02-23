import * as VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Action from "../pages/Action.vue";
import About from "remote/About"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/action",
    name: "action",
    component: Action,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createMemoryHistory(),
  routes,
});
export default router;
