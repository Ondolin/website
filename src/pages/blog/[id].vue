<template>
  <BlogLayout>

    <div v-if="loading">Loading...</div>

    <div v-else-if="error">{{error}}</div>

    <div v-else class="bg-gray-50 rounded-md text-gray-900 p-6">
      <h1 class="text-2xl font-bold">{{blog.title}}</h1>

      <div class="flex justify-between items-center mt-4 text-gray-700">
        <div class="text-xs">
          <span class="block">published</span>
          <span class="block">{{dayjs(blog.created_at).locale($i18n.locale.toString()).format('MMM DD, YYYY')}}</span>
        </div>

        <font-awesome-icon @click="share" icon="share"></font-awesome-icon>

      </div>

      <vue-markdown class="prose mt-4">{{ blog.content.replace("/uploads/", "https://strapi.ondolin.de/uploads/") }}</vue-markdown>

    </div>
  </BlogLayout>
</template>
<script>
import axios from "axios";
import dayjs from "dayjs";
import BlogLayout from "../../layouts/Blog";

export default {
  components: {BlogLayout},
  data() {
    return {
      blog: null,
      loading: true,
      error: null
    }
  },
  mounted() {

    const { id } = this.$route.params

    axios.get('https://strapi.ondolin.de/blogs/' + id).then(response => {
      this.blog = response.data;
      this.loading = false;
    }).catch(error => {
      this.error = error;
      this.loading = false;
    });
  },
  methods: {
    dayjs,
    async share() {
      const { title, created_at, description } = this.blog;

      const share = {
        title,
        url: "https://" + window.location.hostname + this.$route.fullPath,
        text: description
      }

      console.log(share);

      try {
        await navigator.share(share);
      } catch (error) {
        console.log(error);
        navigator.clipboard.writeText(share.url);
      }

    }
  }
}
</script>
