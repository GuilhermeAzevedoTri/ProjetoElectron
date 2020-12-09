import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name : 'Usuario Mock',
      email: 'mock@cod3r.com.br',
      admin: true
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
