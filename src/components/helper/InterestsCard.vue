<template>
    <div class="bg-gray-100 text-lg border-accent border rounded-md p-4 shadow-xl relative">
        <div :class="left ? '-left-[57px]' : '-right-[57px]'" class="hidden md:block absolute w-8 h-8 top-1/2 -mt-4 rounded-full bottom-1/2 border-4 bg-white border-accent" />
        <div>
            <span class="block text-xl tracking-wide mx-10 mb-1 text-gray-900 font-bold">{{ title }}</span>
            <slot />
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: String,
    left: Boolean
});
</script>