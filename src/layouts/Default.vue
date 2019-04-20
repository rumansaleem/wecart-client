<template>
  <div class="bg-gray-200 text-black font-sans flex flex-col min-h-screen antialiased">
    <header class="sticky top-0 bg-white shadow py-1">
      <div class="container flex justify-between items-baseline">
        <h1 class="text-xl font-bold">
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </h1>
        <nav class="text-xs uppercase font-semibold tracking-wide -mx-2">
          <g-link class="mx-2" to="/">Home</g-link>
          <g-link class="mx-2" to="/users">Users</g-link>
        </nav>
      </div>
    </header> 
    <div class="container py-4 flex-1 flex flex-col h-full">
      <slot/>
    </div>
  </div>
</template>

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
