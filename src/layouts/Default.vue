<template>
  <div class="container mx-auto">
    <header class="w-full flex justify-end my-10 mr-4">
      <nav class="flex justify-between item-center">
        <g-link class="ml-4 mt-1 hover:underline" to="/">{{ $t("nav.home") }}</g-link>
        <g-link class="ml-4 mt-1 hover:underline" to="/about/">{{ $t("nav.impressum") }}</g-link>
        <LocaleSwitcher class="ml-4" />
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

<script>
import LocaleSwitcher from '../components/LocaleSwitcher.vue';
export default {
  components: {LocaleSwitcher},
}
</script>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  @apply bg-primary text-white;
}

</style>
