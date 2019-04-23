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
        <h5 class="px-4 mb-1 text-gray-900 font-bold uppercase">
          Cart Products
        </h5>
        <ul class="w-auto">
          <li
            v-for="product in defaultCart.products"
            :key="product.id"
            class="px-4 border-b py-3 flex w-auto hover:bg-gray-300"
          >
            <img :src="product.thumbnail" class="w-8 mr-2 flex-no-shrink" />
            <div class="">
              <h4 v-text="product.title"></h4>
              <p>{{ product.price }}&#x20B9;</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
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
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    onCartChange({ target: { value } }) {
      this.setDefaultCartId(value)
    },
    ...mapMutations(['setDefaultCartId']),
    ...mapGetters({
      isDefaultCart: 'isDefault',
    }),
  },
}
</script>
