<template>
    <div class="h-screen w-screen text-white">
        <div class="flex flex-col justify-center items-center h-full">
            <!--img class="h-3/4" src="/Logo.svg"-->
            <Logo class="h-3/4 w-full" />
            <span class="-mt-10 lg:mt-0 w-full text-center text-7xl md:text-9xl font-logo select-none">Ondolin</span>
            
            <div class="flex-grow" />

            <div class="group p-5" @click="doc.querySelector('.whoAmI').scrollIntoView({ behavior: 'smooth' });">
                <Icon class="group-hover:animate-bounce" icon="akar-icons:arrow-down" width="40" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from "./helper/Logo.vue";

const doc = document;

</script>