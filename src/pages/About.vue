<template>
  <Layout>
    <div class="mx-auto xl:w-5/6">
      <who-am-i class="mt-16 lg:mt-32" />
      <what-do-i-do class="mt-16 lg:mt-32" />
    </div>

    <div class="text-5xl mt-10 flex justify-center">
      <span class="p-2 border-accent border-b">{{ $t("projects.title") }}</span>
    </div>

    <!--Footer /--->
  </Layout>
</template>

<script>
import Footer from "../components/Footer.vue";
import WhoAmI from "../components/paragraphs/WhoAmI.vue";
import WhatDoIDo from "../components/paragraphs/WhatDoIDo.vue";

export default {
  components: { Footer, WhoAmI, WhatDoIDo },
};
</script>
