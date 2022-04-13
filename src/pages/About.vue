<template>
  <Layout>
    <div class="mx-auto xl:w-5/6">
      <who-am-i class="mt-16 lg:mt-32" />
      <what-do-i-do class="mt-8 lg:mt-48" />
    </div>

    <div class="text-4xl lg:text-5xl mt-12 lg:mt-48 flex lg:justify-center">
      <span class="ml-4 lg:ml-0 lg:p-2 pb-2 border-accent border-b">{{ $t("projects.title") }}</span>
    </div>

    <gotify-matrix-bot class="mt-12 lg:mt-20" />

    <torchly class="mt-12 lg:mt-16" />

    <dotfiles class="mt-12 lg:mt-16 mb-12" />

    <Footer />

  </Layout>
</template>

<script>
import Footer from "../components/Footer.vue";
import WhoAmI from "../components/paragraphs/WhoAmI.vue";
import WhatDoIDo from "../components/paragraphs/WhatDoIDo.vue";
import GotifyMatrixBot from "../components/paragraphs/projects/GotifyMatrixBot.vue";
import Torchly from "../components/paragraphs/projects/Torchly.vue";
import Dotfiles from "../components/paragraphs/projects/Dotfiles.vue";

export default {
  components: { Footer, WhoAmI, WhatDoIDo, GotifyMatrixBot, Torchly, Dotfiles },
  metaInfo: {
    title: 'Ondolin | Who am I?',
    meta: [
      { name: 'description', content: 'Hi. My name is Marie. I am a computer science student, and this is my personal website.' }
    ]
  }
};
</script>
