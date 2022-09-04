<template>
    hh
    {{ t("language") }}
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
    "language": "Languagell",
    "hello": "hello, world!"
    },
    "de": {
    "language": "bb",
    "hello": "こんにちは、世界！"
    }
}
</i18n>