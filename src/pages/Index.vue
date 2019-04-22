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
        <li v-for="product in products" :key="product.id" class="p-4 w-1/3">
          <div class="bg-white shadow border rounded p-6">
            <h4 class="font-bold text-xl mb-3" v-text="product.title"></h4>
            <img
              :src="product.thumbnail"
              :alt="product.title"
              class="w-5/6 mx-auto my-4 block shadow-md"
            />
            <p v-text="product.description"></p>
            <p class="flex font-bold mt-4 items-baseline">
              <span class="text-2xl">{{ product.price }}&#x20B9;</span>
              <del class="text-gray-600">{{ product.price * 1.4 }}&#x20B9;</del>
              <button
                class="ml-auto px-3 py-1 bg-teal-500 text-white font-bold text-lg rounded"
              >
                Add to Cart
              </button>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  computed: {
    ...mapState({
      products: state => state.products.all,
    }),
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
