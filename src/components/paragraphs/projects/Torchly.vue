<template>
    <div class="xl:w-5/6 mx-4 lg:mx-auto">
        <div class="flex lg:justify-center">
            <a class="text-3xl" href="https://github.com/torch-ly/torch-ly-frontend" target="_blank">{{ $t('projects.torchly.title') }}</a>
        </div>

        <div class="mt-4 lg:text-center">
            <div v-for="(line, i) in $t('projects.torchly.description')" :key="i" class="mb-4">
                    {{ line }}
            </div>
        </div>

    </div>
</template>