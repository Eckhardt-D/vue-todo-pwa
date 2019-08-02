import Vue from "vue";
import Vuex from "vuex";
import vuexLocalPlugin from "@/plugins/vuexLocal";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    UPDATE_TODOS: (state, todos) => {
      state.todos = todos;
    },
    CREATE: () => ({}),
    UPDATE: () => ({}),
    DELETE: () => ({})
  },
  actions: {},
  plugins: [vuexLocalPlugin]
});
