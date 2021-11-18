<template>
  <Layout>

    <div class="w-full md:w-1/2 mx-auto flex flex-col" style="height: calc(100vh - 6.5rem);">
      <Logo class="h-32 flex-grow flex-1" />
      <div class="text-center sm:text-7xl md:text-9xl lg: xl: 2xl:text-9xl mt-12 mb-8">ONDOLIN</div>
    </div>

  </Layout>
</template>

<script>
import Logo from '../components/Logo.vue';
export default {
  components: { Logo },
}
</script>
