<template>
  <div
    class="bg-gray-200 text-black font-sans flex flex-col min-h-screen antialiased"
  >
    <header class="sticky top-0 bg-white shadow py-2">
      <div class="container flex items-center">
        <h1 class="text-xl font-bold p-2">
          <g-link to="/">
            <span class="p-1 pl-2 bg-teal-500 text-white border border-teal-500"
              >We</span
            >
            <span class="p-1 pr-2 bg-white text-teal-500 border border-teal-500"
              >Cart</span
            >
          </g-link>
        </h1>
        <nav
          class="flex-1 text-left text-xs uppercase font-semibold tracking-wide mx-2"
        >
          <g-link class="mx-2" to="/">Home</g-link>
          <g-link class="mx-2" to="/users">Users</g-link>
        </nav>
        <div class="text-xs uppercase font-semibold tracking-wide -mx-2">
          <UserMenu v-if="isLoggedIn"></UserMenu>
          <g-link v-if="!isLoggedIn" class="mx-2" to="/login">Login</g-link>
          <g-link v-if="!isLoggedIn" class="mx-2" to="/register"
            >Register</g-link
          >
        </div>
      </div>
    </header>
    <div class="container py-4 flex-1 flex flex-col h-full">
      <slot />
    </div>
  </div>
</template>
<script>
import UserMenu from './../components/UserMenu.vue'
import { mapGetters } from 'vuex'
export default {
  components: { UserMenu },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  created() {},
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
