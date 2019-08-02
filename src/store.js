import Vue from "vue";
import Vuex from "vuex";
import vuexLocalPlugin from "@/plugins/vuexLocal";
import localForage from "localforage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    creating: false,
    mode: "today",
    hideNavs: false
  },
  mutations: {
    UPDATE_TODOS: (state, todos) => {
      state.todos = todos;
    },
    CREATE: () => ({}),
    UPDATE: () => ({}),
    DELETE: () => ({}),
    SYNC: () => ({}),
    CHANGE_CREATING: state => {
      state.creating = !state.creating;
    },
    CHANGE_MODE: (state, payload) => {
      state.mode = payload;
    },
    HIDE_NAVS: state => {
      state.hideNavs = !state.hideNavs;
    }
  },
  actions: {
    async getTodos({ commit }) {
      const todos = (await localForage.getItem("APP_DATA")) || [];
      commit("UPDATE_TODOS", todos);
    }
  },
  plugins: [vuexLocalPlugin]
});
