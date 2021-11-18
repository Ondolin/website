<template>
  <div class="container mx-auto">
    <header class="w-full flex justify-end my-10 mr-4">
      <nav class="nav">
        <g-link class="ml-4" to="/">Home</g-link>
        <g-link class="ml-4" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  @apply bg-primary text-white;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

</style>
