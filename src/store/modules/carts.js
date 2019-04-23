const state = {
  all: [
    {
      id: 1,
      name: 'Personal Cart',
      owners: [
        {
          id: 1,
        },
      ],
      products: [
        {
          id: 1,
          title: 'Some Product',
          thumbnail: 'http://lorempixel.com/400/300',
          price: 400,
        },
      ],
    },
    {
      id: 2,
      name: 'Other Cart',
      owners: [
        {
          id: 4,
        },
      ],
      products: [
        {
          id: 1,
          title: 'Other Product',
          thumbnail: 'http://lorempixel.com/400/300',
          price: 300,
        },
      ],
    },
  ],
}

const getters = {
  owned(state, _, root) {
    return state.all.filter(cart =>
      cart.owners.findIndex(owner => owner.id == root.auth.user.id)
    )
  },
  isDefault(_, __, root) {
    return cart => cart.id == root.auth.user.defaultCartId
  },
  defaultCart(state, __, root) {
    return state.all.find(cart => cart.id == root.auth.user.defaultCartId)
  },
}

const mutations = {
  addCartProduct(state, { cart, product }) {
    cart.products.push(product)
  },
  removeCartProduct(state, { cart, product }) {
    const index = cart.products.findIndex(item => product.id == item.id)
    console.log(index)
    if (index >= 0) {
      cart.products.splice(index, 1)
    }
  },
  clearCartItems(state, { cart }) {
    cart.products.splice(0, cart.products.length)
  },
}

const actions = {
  addToCart({ commit, getters }, product) {
    const cart = getters.defaultCart
    commit('addCartProduct', { cart, product })
  },
  removeFromCart({ commit, getters }, product) {
    const cart = getters.defaultCart
    commit('removeCartProduct', { cart, product })
  },
  clearCart({ commit, getters }) {
    const cart = getters.defaultCart
    commit('clearCartItems', { cart })
  },
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
}
