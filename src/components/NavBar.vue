<template>
    <header class="w-full flex justify-end my-10 pr-4">
      <nav class="hidden lg:flex justify-between item-center">
        <g-link class="ml-4 mt-1 border-accent border-0 hover:border-b-2" :to="$tp('/')">{{ $t("nav.home") }}</g-link>
        <g-link class="ml-4 mt-1 border-accent border-0 hover:border-b-2" :to="$tp('/about/')">{{ $t("nav.about") }}</g-link>
        <LocaleSwitcher class="ml-8" />
      </nav>
      <div class="lg:hidden flex flex-col justify-end ml-4 w-full relative">
        <div @click="toggleMenu" class="flex justify-end">
          <font-awesome-icon size="2x" :icon="['fas', 'bars']" class="mr-2"/>
        </div>

        <div :class="menuOpen ? 'animate__fadeInRightBig' : 'animate__fadeOutRightBig'" class="bg-primary-light bg-opacity-90 p-4 pl-8 w-full mt-3 rounded-lg top-10 absolute text-lg select-none animate__animated">
          <g-link class="block" :to="$tp('/')">{{ $t("nav.home") }}</g-link>
          <g-link class="block mt-3" :to="$tp('/about/')">{{ $t("nav.about") }}</g-link>
          <LocaleSwitcher class="w-32 mt-3" />
        </div>
      </div>
    </header>
</template>

<script>
import LocaleSwitcher from './LocaleSwitcher.vue';
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