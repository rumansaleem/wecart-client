<template>
  <div class="inline-flex flex-col">
    <button class="p-2 rounded-full border" @click.prevent="toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-4 h-4"
      >
        <path
          d="M17 16a3 3 0 1 1-2.83 2H9.83a3 3 0 1 1-5.62-.1A3 3 0 0 1 5 12V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H5a1 1 0 0 0 0 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
      </svg>
    </button>
    <div class="relative">
      <div
        v-if="isOpen"
        class="absolute w-64 mt-2 right-0 py-4 bg-white border shadow-lg rounded truncate"
      >
        <div class="px-4 pb-3 border-b mb-3">
          <h5 class="text-gray-900 font-bold uppercase text-xs mb-1">
            Selected Cart
          </h5>
          <select
            name="currentCart"
            class="w-full bg-white border px-2 py-1"
            @input="onCartChange"
          >
            <option
              v-for="cart in carts"
              :key="cart.id"
              :value="cart.id"
              v-text="cart.name"
            ></option>
          </select>
        </div>
        <div class="flex items-center justify-between px-4 mb-1">
          <label class="text-gray-900 font-bold uppercase">Cart Products</label>
          <button class="text-red-600" title="Clear Cart" @click="clearCart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="text-lg h-current fill-current"
            >
              <path
                d="M6 18.7V21a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7.1A7 7 0 0 0 19 12a1 1 0 1 1 2 0 9 9 0 0 1-15 6.7zM18 5.3V3a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.9A7 7 0 0 0 5 12a1 1 0 1 1-2 0 9 9 0 0 1 15-6.7z"
              />
            </svg>
          </button>
        </div>
        <ul class="w-auto max-h-half-screen overflow-y-auto">
          <li
            v-for="product in defaultCart.products"
            :key="product.id"
            class="pl-4 pr-6 border-b py-3 flex w-auto hover:bg-gray-300 relative"
          >
            <button
              class="absolute right-0 top-0 mt-2 mr-2 p-1 text-gray-900 hover:text-red-600 font-bold"
              @click="removeFromCart(product)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-current fill-current"
              >
                <path
                  d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"
                />
              </svg>
            </button>
            <img :src="product.thumbnail" class="w-8 mr-2 flex-no-shrink" />
            <div class="">
              <h4 v-text="product.title"></h4>
              <p>{{ product.price }}&#x20B9;</p>
            </div>
          </li>
        </ul>
        <div class="flex justify-between items-center px-4 pt-3">
          <span>Cart Total: {{ cartTotal }}&#x20B9;</span>
          <button
            class="bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-700 font-bold"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      isOpen: false,
      selectedCartId: 1,
    }
  },
  computed: {
    ...mapState({ carts: state => state.carts.all }),
    ...mapGetters(['defaultCart']),
    cartTotal() {
      return this.defaultCart.products.reduce(
        (sum, item) => sum + item.price,
        0
      )
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    onCartChange({ target: { value } }) {
      this.setDefaultCartId(value)
    },
    ...mapActions(['clearCart', 'removeFromCart']),
    ...mapMutations(['setDefaultCartId']),
    ...mapGetters({
      isDefaultCart: 'isDefault',
    }),
  },
}
</script>
