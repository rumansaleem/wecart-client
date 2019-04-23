<template>
  <Layout>
    <div class="h-full flex-1 flex flex-col justify-center">
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <div class="font-bold text-5xl">
        <span class="p-1 pl-2 bg-teal-500 text-white border border-teal-500"
          >We</span
        >
        <span class="p-1 pr-2 bg-white text-teal-500 border border-teal-500"
          >Cart</span
        >
      </div>

      <h3 class="font-bold text-2xl my-4">Top Products</h3>

      <ul class="flex flex-wrap -m-4">
        <li
          v-for="product in products"
          :key="product.id"
          class="p-4 w-full md:w-1/3 lg:w-1/4"
        >
          <div
            class="bg-white shadow border rounded p-6 flex flex-row items-start md:flex-col md:items-stretch h-full"
          >
            <img
              :src="product.thumbnail"
              :alt="product.title"
              class="max-w-1/3 mr-3 md:mx-auto md:max-w-full block shadow-md"
            />
            <div class="product-details flex-1 md:flex-0">
              <h4
                class="font-bold text-sm md:text-xl my-3"
                v-text="product.title"
              ></h4>
              <div class="w-full flex mt-4 items-baseline justify-between">
                <p>
                  <span class="text-lg font-bold mr-1"
                    >{{ product.price }}&#x20B9;</span
                  >
                  <del class="text-sm text-gray-600 italic"
                    >{{ product.price * 1.4 }}&#x20B9;</del
                  >
                </p>
                <button
                  class="px-2 py-1 bg-teal-500 text-white font-bold text-sm rounded"
                  @click="addToCart(product)"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  computed: {
    ...mapState({
      products: state => state.products.all,
    }),
  },
  methods: {
    ...mapActions(['addToCart']),
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
