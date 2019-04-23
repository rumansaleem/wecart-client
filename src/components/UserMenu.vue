<template>
  <div class="inline-flex flex-col">
    <button class="px-2" @click.prevent="toggle">
      <img :src="gravatar" :alt="user.name" class="rounded-full w-8" />
    </button>
    <div class="relative">
      <ul
        v-if="isOpen"
        class="absolute mt-2 min-w-32 right-0 py-4 bg-white border shadow-lg rounded"
      >
        <li class="px-5 py-1 hover:bg-teal-500 hover:text-white">Link 1</li>
        <li class="px-5 py-1 hover:bg-teal-500 hover:text-white">Link 1</li>
        <li class="px-5 py-1 hover:bg-teal-500 hover:text-white">Link 1</li>
        <li class="px-5 py-1 hover:bg-teal-500 hover:text-white">
          <Logout>Logout</Logout>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Logout from './Logout'
import { mapState } from 'vuex'
import md5 from 'js-md5'
export default {
  components: { Logout },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    ...mapState({ user: state => state.auth.user }),
    gravatar() {
      let hash = md5(this.user.email.toLowerCase().trim())
      return `https://gravatar.com/avatar/${hash}?s=50&d=monster`
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
