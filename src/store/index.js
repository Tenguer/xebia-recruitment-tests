import Vue from "vue";
import Vuex from "vuex";
import * as home from "@/store/modules/home.js";
import * as cart from "@/store/modules/cart.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    cart
  }
});
