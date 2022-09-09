<template>
    <div class="w-screen h-screen flex items-center justify-center">
        <div class="text-white">

            <span class="relative block text-center text-9xl mt-10 font-sans">
                404
                <Logo class="absolute w-60 -top-64" />
            </span>



            <span class="block text-center text-2xl mt-1">Not Found</span>

            <a @click="$router.push('/')" class="block text-center text-xl mt-5 text-accent underline underline-offset-2">Main page</a>

        </div>
    </div>
</template>
<script setup>
import Logo from "../components/helper/Logo.vue";
</script>