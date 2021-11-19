<template>
    <router-view />
</template>
<script>
export default {
    created() {
        if (process.isClient) {
            this.fetchBrowserLocale();
        }
    },
    methods: {
        fetchBrowserLocale() {
            let fetchedLocale = navigator.language.split("-")[0];
            let newLocale =
                this.$i18n.availableLocales.find((lang) =>
                lang.startsWith(fetchedLocale)
            ) || this.$i18n.availableLocales[0];

            if (newLocale !== this.$i18n.locale) {
                this.$router.push({
                    path: this.$tp(this.$route.path, newLocale, true),
                });
            }
        },
    },
};
</script>