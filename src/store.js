// store.js (VueX 4)
import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
  },
});
