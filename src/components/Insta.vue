<template>

    <div class="flex justify-center items-center w-full text-center text-3xl mt-10 mb-5">
        {{ t("my") }}
        <div class="hover:text-accent hover:underline cursor-pointer">
            <a href="https://www.instagram.com/__ondolin__/" target="_blank" class="mx-2">Instagram</a> 
            <Icon class="inline" icon="akar-icons:instagram-fill" />
        </div>
    </div>

    <div class="flex flex-col w-full lg:flex-row justify-center items-center lg:items-start">
        <div class="mx-4 mt-5 lg:mt-0" v-for="(post, i) in instaCache.data.data.slice(0, 3)">
                <img class="object-cover w-72 h-72 rounded" :src="post.media_url"/>
            <div class="w-72 text-center px-3 mt-3 text-sm text-gray-600">{{post.caption}}</div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { useI18n } from 'vue-i18n';

const { _, t } = useI18n({
    inheritLocale: true
});

let cacheTime = localStorage.getItem('insta_cache_time');
let instaCache = JSON.parse(localStorage.getItem('insta_cache'));

if (!cacheTime || !instaCache || (Date.now() - cacheTime) > 1000 * 60 * 60) {
    instaCache = await axios(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${import.meta.env.VITE_INSTA_API_KEY}`);

    localStorage.setItem('insta_cache_time', Date.now());
    localStorage.setItem('insta_cache', JSON.stringify(instaCache));

    console.log(11, instaCache);
}
</script>

<i18n>
{
    "en": {
        "my": "My",
    },
    "de": {
        "my": "Mein",
    }
}
</i18n>