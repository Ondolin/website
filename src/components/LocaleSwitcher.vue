<template>
  <div>
    <div class="grid grid-cols-2 gap-2 group" @click="localSwitch">
      <font-awesome-icon size="2x" :icon="['fas', 'language']" />
      <div class="mt-1 group-hover:underline">{{ currentLocale.toUpperCase().substring(0,2) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data: function () {
    return {
      availableLocales: this.$i18n.availableLocales
    }
  },
  methods: {
    localSwitch () {

      let newLocale = this.availableLocales.find(locale => locale != this.currentLocale);

      console.log(newLocale);

      this.$router.push({
        path: this.$tp(this.$route.path, newLocale, true)
      })
    }
  },
  computed: {
    currentLocale: {
      get: function () {
        return this.$i18n.locale.toString();
      },
      set: function (newLocale) {
        this.$i18n.locale = newLocale;
      }
    }
  }
}
</script>