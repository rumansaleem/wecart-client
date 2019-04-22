const state = {
  user: null,
  token: null,
}

const getters = {
  isLoggedIn(state) {
    return !!state.user
  },
  loggedInUser(state) {
    return state.user
  },
}

const mutations = {
  setAuthUser(state, { user, token }) {
    state.user = user
    state.token = token
    localStorage.setItem('authToken', token)
  },
  removeAuthUser(state) {
    state.user = null
    state.token = null
    localStorage.removeItem('authToken')
  },
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
}
