<template>
  <Layout>

    <h1 class="text-4xl">{{ $t("contactPage.title") }}</h1>

    <span class="block mt-3">{{ $t("contactPage.subtitle") }}</span>

    <h2 class="text-2xl underline mt-10">Email</h2>

    <a class="mt-2" href="mailto:developer@ondolin.de">developer@ondolin.de</a>

    <h2 class="text-2xl underline mt-5">Matrix</h2>
    <span class="mt-2">{{ $t("contactPage.matrix") }}</span>
    <div class="mt-2">
      <span>{{ $t("contactPage.matrixLink") }}</span>
      <a href="https://matrix.to/#/@ondolin:matrix.ondolin.de" target="_blank">https://matrix.to/#/@ondolin:matrix.ondolin.de</a>
    </div>

    <h2 class="text-2xl underline mt-5">GPG-Key</h2>
    <span v-for="line in $t('contactPage.gpg')" class="block mt-2">{{ line }}</span>

    <div class="flex justify-start items-center mt-2">
      <span>Fingerprint:</span>
      <CopyToClipboard :text="fingerprint"></CopyToClipboard>
    </div>

    <h2 class="text-2xl underline mt-5">GitHub</h2>
    <span class="block mt-2">{{ $t("contactPage.github[0]") }}</span>
    <span class="mt-2">{{ $t("contactPage.github[1]") }} </span>

    <a class="inline-block" href="https://github.com/ondolin" target="_blank">https://github.com/ondolin</a>

    <Footer class="mt-40" />

  </Layout>
</template>
<script>
import Footer from '../components/Footer.vue';
import CopyToClipboard from '../components/CopyToClipbord.vue';
export default {
  components: { Footer, CopyToClipboard },
  data() {
    return {
      fingerprint: "4326 D52F FDBB E82A BDC3  50EF ED01 D044 AA9C D79A",
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  @apply font-bold hover:text-gray-300 hover:underline;
}
</style>
