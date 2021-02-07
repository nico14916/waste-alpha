import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    status: localStorage.getItem('status') || null,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    removeToken(state) {
      state.token = null;
    },
    setStatus(state, payload) {
      state.status = payload;
    },
    removeStatus(state) {
      state.status = null;
    },
  },
  actions: {
    loadToken({ state }) {
      if (state.token) {
        axios.defaults.headers.common['Authorization'] = "Bearer " + state.token;
      }
    },
  },
  getters: {
    token: state => state.token,
    status: state => state.status,
  }
})
