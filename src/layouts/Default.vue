<template>
  <div>
    <slot />
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";
export default {
  components: {Footer}
}
</script>
<style type="scss">
body {
  @apply bg-background text-white;
}
</style>
