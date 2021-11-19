<template>
  <Layout>

    <div class="w-full md:w-2/3 lg:w-1/2 mx-auto flex flex-col -mt-24 lg:mt-0 pointer-events-none" style="height: calc(100vh - 6.5rem);">
      <Logo class="h-20 flex-grow flex-1" />
      <div class="text-center font-logo text-7xl md:text-8xl lg: xl: 2xl:text-9xl -mt-16 lg:mt-12 mb-12 select-none">Ondolin</div>
    </div>

  </Layout>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  components: { Logo },
}
</script>
