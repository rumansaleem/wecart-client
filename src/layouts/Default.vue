<template>
  <div
    class="bg-gray-200 text-black font-sans flex flex-col min-h-screen antialiased"
  >
    <header class="sticky top-0 bg-white shadow py-1">
      <div class="container flex items-baseline">
        <h1 class="text-xl font-bold">
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </h1>
        <nav
          class="flex-1 text-left text-xs uppercase font-semibold tracking-wide mx-2"
        >
          <g-link class="mx-2" to="/">Home</g-link>
          <g-link class="mx-2" to="/users">Users</g-link>
        </nav>
        <div class="text-xs uppercase font-semibold tracking-wide -mx-2">
          <Logout v-if="isLoggedIn" class="mx-2">Logout</Logout>
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
import Logout from "./../components/Logout.vue";
import { mapGetters } from "vuex";
export default {
  components: { Logout },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
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
