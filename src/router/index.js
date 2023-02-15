import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import Create from "../views/AddProduct.vue";
import Edit from "../views/EditProduct.vue";
import Index from "../views/ProductList.vue";
import UploadFile from "../views/AddFiles.vue";
import ViewFiles from "../views/ViewFiles.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/upload",
    name: "upload",
    component: UploadFile,
  },
  {
    path: "/viewFiles",
    name: "viewFiles",
    component: ViewFiles,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
