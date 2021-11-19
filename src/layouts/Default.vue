<template>
  <div class="container mx-auto">
    <header class="w-full flex justify-end my-10 pr-4">
      <nav class="hidden lg:flex justify-between item-center">
        <g-link class="ml-4 mt-1 border-accent border-0 hover:border-b-2" :to="$tp('/')">{{ $t("nav.home") }}</g-link>
        <g-link class="ml-4 mt-1 border-accent border-0 hover:border-b-2" :to="$tp('/about/')">{{ $t("nav.about") }}</g-link>
        <LocaleSwitcher class="ml-8" />
      </nav>
      <div class="lg:hidden flex flex-col justify-end ml-4 w-full">
        <div @click="toggleMenu" class="flex justify-end">
          <font-awesome-icon size="2x" :icon="['fas', 'bars']" class="mr-2"/>
        </div>

        <div class="bg-primary-light p-4 pl-8 w-full mt-3 rounded-lg" v-if="menuOpen">
          <g-link class="block" :to="$tp('/')">{{ $t("nav.home") }}</g-link>
          <g-link class="block mt-3" :to="$tp('/about/')">{{ $t("nav.about") }}</g-link>
          <LocaleSwitcher class="w-28 mt-3" />
        </div>
      </div>
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
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
}
</script>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  @apply bg-primary text-white leading-relaxed;
}

</style>
