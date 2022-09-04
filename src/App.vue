<script setup>
import MainLogo from './components/MainLogo.vue';
import WhoAmI from './components/WhoAmI.vue';
import LocaleSwitch from './components/LocaleSwitch.vue';
import Footer from './components/Footer.vue';
import MyInterests from './components/MyInterests.vue';
import Insta from './components/Insta.vue';
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <LocaleSwitch class="absolute top-10 right-2 lg:right-10" />
    <MainLogo class="bg-primary" />

    <div class="bg-white py-10">
        <WhoAmI />
        <MyInterests />

        <Suspense>
            <Insta />
        </Suspense>
    </div>

    <Footer />
</template>