<template>
    <div class="flex items-center select-none">
        <Icon icon="fontisto:language" width="30" />
        <button :class="$i18n.locale == 'de' ? 'underline' : ''" @click="$i18n.locale = 'de'">DE</button>
        <span>/</span>
        <button :class="$i18n.locale == 'en' ? 'underline' : ''" @click="$i18n.locale = 'en'">EN</button>
    </div>
</template>

<style scoped>
button {
    @apply underline-offset-4 mx-2 decoration-accent decoration-2;
}
</style>