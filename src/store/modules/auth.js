const state = {
  user: {
    id: 1,
    name: 'Ruman Saleem',
    email: 'ruman63@gmail.com',
    isAdmin: false,
    defaultCartId: 1,
  },
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
  setDefaultCartId(state, cartId) {
    state.user = { ...state.user, defaultCartId: cartId }
  },
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
}
