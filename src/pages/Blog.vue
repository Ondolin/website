<template>
  <BlogLayout>

    <h2 class="text-3xl">Blog</h2>

    <div class="h-full"></div>

    <div v-if="loading">Loading...</div>

    <div v-else-if="error">{{error}}</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="post in posts" class="m-4 bg-gray-50 w-64 h-64 text-gray-900 rounded-md shadow-xl">
        <g-image class="h-1/2 w-full object-cover rounded-t-md" :src="calculateCoverURL(post)" />

        <div class="h-1/2 flex flex-col justify-between">
          <div class="p-3">
            <h3 class="text-lg">{{post.title}}</h3>
            <p class="text-sm text-gray-700 mt-1 truncate">{{post.description}}</p>
          </div>

          <div class="border-t border-gray-300 px-2 text-gray-500">
            <div class="flex justify-between">

              <div>
                <font-awesome-icon icon="calendar-day" />
                <span class="text-xs ml-1">{{dayjs(post.created_at).locale($i18n.locale.toString()).format('MMM DD, YYYY')}}</span>
              </div>

              <div>
                <g-link class="text-xs" :to="'/blog/' + post.id">Read</g-link>
                <font-awesome-icon class="ml-1" size="xs" icon="arrow-right" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

  </BlogLayout>
</template>
<script>
import BlogLayout from "../layouts/Blog";
import dayjs from "dayjs";

import axios from 'axios';

export default {
  components: {BlogLayout},
  data() {
    return {
      posts: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    calculateCoverURL(post) {
      if (post.cover) {
        console.log(post.cover);
        return `https://strapi.ondolin.de${post.cover.formats.medium.url}`;
      }

      return "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F55%2FQuestion_Mark.svg%2F1200px-Question_Mark.svg.png&f=1&nofb=1"

    },
    dayjs
  },
  mounted() {
    axios.get('https://strapi.ondolin.de/blogs').then(response => {
      this.posts = response.data;
      this.loading = false;
    }).catch(error => {
      this.error = error;
      this.loading = false;
    });
  }
}

</script>
