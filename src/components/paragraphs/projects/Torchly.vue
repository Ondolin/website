<template>
    <div class="xl:w-5/6 mx-auto">
        <div class="flex justify-center">
            <span class="text-3xl">{{ $t('projects.torchly.title') }}</span>
        </div>

        <div class="mt-4 text-center">
            <div v-for="(line, i) in $t('projects.torchly.description')" :key="i" class="mb-4">
                    {{ line }}
            </div>
        </div>

    </div>
</template>