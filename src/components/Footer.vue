<template>
    <div class="h-64 w-full bg-primary-dark flex items-center justify-center text-white">
        <div>
            <span class="block text-center mb-1">Made by Ondolin</span>
            <a href="/impressum" @click.prevent="$router.push('/impressum')" class="text-sm text-gray-300 hover:text-accent">{{ t("imprint") }}</a>
            <Icon class="inline" icon="bi:dot" />
            <a href="/datenschutz" @click.prevent="$router.push('/datenschutz')" class="text-sm text-gray-300 hover:text-accent">{{ t("privacy") }}</a>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

const { _, t } = useI18n({
    inheritLocale: true
});
</script>
<i18n>
{
    "en": {
        "imprint": "Imprint",
        "privacy": "Privacy policy"
    },
    "de": {
        "imprint": "Impressum",
        "privacy": "Datenschutz"
    }
}
</i18n>