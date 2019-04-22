import auth from './modules/auth'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
  },
  strict: process.env.NODE_ENV !== 'production',
})

export default store
