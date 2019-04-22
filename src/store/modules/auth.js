const state = {
  user: JSON.parse(localStorage.getItem('authUser')),
  token: localStorage.getItem('authToken'),
}

const getters = {
  isLoggedIn(state) {
    return !!(state.token && state.user)
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
    localStorage.setItem('authUser', JSON.stringify(user))
  },
  removeAuthUser(state) {
    state.user = null
    state.token = null
    localStorage.removeItem('authToken')
    localStorage.removeItem('authUser')
  },
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
}
