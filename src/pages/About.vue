<template>
  <Layout>
    <div class="mx-auto xl:w-5/6">
      <who-am-i class="mt-16 lg:mt-32 mb-48" />
      <what-do-i-do class="mt-16 lg:mt-32 mb-48" />
    </div>

    <div class="text-5xl mt-16 flex justify-center mb-20">
      <span class="p-2 border-accent border-b">{{ $t("projects.title") }}</span>
    </div>

    <gotify-matrix-bot class="mt-6 mb-12" />

    <Footer />

  </Layout>
</template>

<script>
import Footer from "../components/Footer.vue";
import WhoAmI from "../components/paragraphs/WhoAmI.vue";
import WhatDoIDo from "../components/paragraphs/WhatDoIDo.vue";
import GotifyMatrixBot from "../components/paragraphs/projects/GotifyMatrixBot.vue";

export default {
  components: { Footer, WhoAmI, WhatDoIDo, GotifyMatrixBot },
};
</script>
