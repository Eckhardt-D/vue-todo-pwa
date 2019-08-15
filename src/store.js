import Vue from "vue";
import Vuex from "vuex";
import vuexLocalPlugin from "@/plugins/vuexLocal";
import localForage from "localforage";
import sendNotification from "@/plugins/notification";

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
    },
    async notify(_, todo) {
      const at_date = new Date(todo.at).getTime();
      const now = new Date().getTime();
      let ms = at_date - now;

      if (ms < 0) {
        ms = 0;
      }

      await sendNotification({ ...todo, ms }).catch(e => console.error(e));

      return true;
    }
  },
  plugins: [vuexLocalPlugin]
});
