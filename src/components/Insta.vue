<template>

    <div class="flex justify-center items-center w-full text-center text-3xl mt-10 mb-5">
        {{ t("my") }}
        <div class="hover:text-accent hover:underline cursor-pointer underline-offset-4">
            <a href="https://www.instagram.com/__ondolin__/" target="_blank" class="mx-2">Instagram</a> 
            <Icon class="inline" icon="akar-icons:instagram-fill" />
        </div>
    </div>

    <div class="flex flex-col w-full lg:flex-row justify-center items-center lg:items-start">
        <div class="mx-4 mt-5 lg:mt-0" v-if="insta" v-for="(post, i) in insta.slice(0, 3)">
                <img class="object-cover w-72 h-72 rounded" :src="post.media_url"/>
            <div class="w-72 text-center px-3 mt-3 text-sm text-gray-600">{{post.caption}}</div>
        </div>
        <div v-else>
            <span class="block">If you see this, something went wrong...</span>
            <span class="block text-center">Sorry for that...</span>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { useI18n } from 'vue-i18n';

const { _, t } = useI18n({
    inheritLocale: true
});

let insta;

try {
    insta = await (await axios(`/api/insta`)).data;
} catch {}
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