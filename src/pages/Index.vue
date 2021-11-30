<template>
  <Layout class="overflow-hidden">

    <div class="w-full md:w-2/3 lg:w-1/2 mx-auto flex flex-col pointer-events-none" style="height: calc(100vh - 6.5rem);">
      <Logo class="h-20 flex-grow flex-1 -mt-16" />
      <div class="text-center font-logo text-8xl lg: xl: 2xl:text-9xl-mt-40 lg:mt-12 mb-24 lg:mb-12 select-none">Ondolin</div>
    </div>

  </Layout>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  metaInfo: {
    title: 'Ondolin'
  },
  components: { Logo }
}
</script>