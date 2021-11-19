<template>
  <div>
    <div class="grid grid-cols-2 gap-0 group select-none" @click="localSwitch">
      <font-awesome-icon size="2x" :icon="['fas', 'language']" />
      <div class="-ml-1 border-accent border-0 group-hover:border-b-2">
        <div 
          class="inline-block mt-1" 
          :class="(availableLocales[0] != currentLocale) && 'text-gray-400'">
            {{ availableLocales[0].toUpperCase().substring(0,2) }}
        </div>
        <span> / </span>
        <div 
          class="inline-block" 
          :class="(availableLocales[1] != currentLocale) && 'text-gray-400'">
            {{ availableLocales[1].toUpperCase().substring(0, 2) }}
        </div>
      </div>
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
      this.$router.push({
        path: this.$tp(this.$route.path, this.otherLocale, true)
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
    },
    otherLocale: {
      get: function () {
        return this.availableLocales.find(locale => locale != this.currentLocale);
      }
    }
  }
}
</script>