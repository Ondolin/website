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
  //background-image: linear-gradient(to right bottom, #473e75, #4a407a, #4d437f, #504584, #534889, #564b8e, #5a4d92, #5d5097, #61549c, #6558a2, #6a5da7, #6e61ad);
  background-image: linear-gradient(to right bottom, #574b90, #5d4d98, #634fa0, #6951a8, #7053b0);
}

</style>
