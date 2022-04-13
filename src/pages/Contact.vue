<template>
  <Layout class="pl-4 pr-4">

    <h1 class="text-4xl">{{ $t("contactPage.title") }}</h1>

    <span class="block mt-3">{{ $t("contactPage.subtitle") }}</span>

    <h2 class="text-2xl underline mt-10">Email</h2>

    <a class="mt-2" href="mailto:developer@ondolin.de">developer@ondolin.de</a>

    <h2 class="text-2xl underline mt-5">Matrix</h2>
    <span class="mt-2">{{ $t("contactPage.matrix") }}</span>
    <div class="mt-2">
      <span>{{ $t("contactPage.matrixLink") }}</span>
      <a href="https://matrix.to/#/@ondolin:matrix.ondolin.de" target="_blank">Matrix Ondolin</a>
    </div>

    <h2 class="text-2xl underline mt-5">GPG-Key</h2>
    <span v-for="line in $t('contactPage.gpg')" class="block mt-2">{{ line }}</span>

    <div class="flex justify-start items-center mt-2">
      <span>Fingerprint:</span>
      <CopyToClipboard :text="fingerprint"></CopyToClipboard>
    </div>

    <a class="mt-2" href="https://keys.openpgp.org/vks/v1/by-fingerprint/4326D52FFDBBE82ABDC350EFED01D044AA9CD79A">{{ $t("contactPage.keyFile") }}</a>

    <h2 class="text-2xl underline mt-5">GitHub</h2>
    <span class="block mt-2">{{ $t("contactPage.github[0]") }}</span>
    <span class="mt-2">{{ $t("contactPage.github[1]") }} </span>

    <a class="inline-block" href="https://github.com/ondolin" target="_blank">https://github.com/ondolin</a>

    <div class="h-60" />

    <Footer />

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
  },
  metaInfo: {
    title: 'Ondolin | Contact',
    meta: [
      { name: 'description', content: 'Hi. My name is Marie. This is how you can contact me.' }
    ]
  }
}
</script>

<style lang="scss" scoped>
a {
  @apply font-bold hover:text-gray-300 hover:underline;
}
</style>
