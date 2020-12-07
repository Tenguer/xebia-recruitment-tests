import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import CartView from "@/views/CartView.vue";
import BooksView from "@/views/BooksView.vue";
import Page404 from "@/views/Page404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/panier",
    name: "cart",
    component: CartView,
    props: true
  },
  {
    path: "/books/:id",
    name: "books",
    component: BooksView,
    props: true
  },
  {
    path: "/404",
    name: "page-404",
    component: Page404
  },
  {
    path: "/*",
    redirect: { name: "page-404" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
