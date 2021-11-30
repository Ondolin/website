<template>
    <div class="xl:w-5/6 mx-4 lg:mx-auto">
        <div class="flex lg:justify-center">
            <a class="text-3xl" href="https://github.com/Ondolin/gotify-matrix-bot/" target="_blank">{{ $t('projects.gotifyMatrixBot.title') }}</a>
        </div>

        <div class="mt-4 lg:text-center">
            <div v-for="(line, i) in $t('projects.gotifyMatrixBot.description')" :key="i" class="mb-4">
                    {{ line }}
            </div>
        </div>

    </div>
</template>