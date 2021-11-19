<template>
  <Layout>

    <div class="w-full md:w-2/3 lg:w-1/2 mx-auto flex flex-col -mt-24 lg:mt-0" style="height: calc(100vh - 6.5rem);">
      <Logo class="h-20 flex-grow flex-1" />
      <div class="text-center text-7xl md:text-8xl lg: xl: 2xl:text-9xl -mt-16 lg:mt-12 mb-8 select-none">ONDOLIN</div>
    </div>

    <who-am-i class="mt-32"/>

    <Footer />

  </Layout>
</template>

<script>
import Logo from '../components/Logo.vue';
import WhoAmI from '../components/WhoAmI.vue';
import Footer from '../components/Footer.vue';

export default {
  components: { Logo, WhoAmI, Footer },
}
</script>
