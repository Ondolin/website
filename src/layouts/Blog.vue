<template>
  <div class="container mx-auto">

    <nav-bar />

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

<script>
import NavBar from '../components/NavBar.vue'
export default {
  components: { NavBar }
}
</script>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  @apply text-white leading-relaxed bg-primary;
  background-image: none;
}

</style>
