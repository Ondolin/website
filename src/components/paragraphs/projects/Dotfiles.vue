<template>
    <div class="xl:w-5/6 mx-auto">
        <div class="flex justify-center">
            <a class="text-3xl" href="https://github.com/Ondolin/dotfiles/" target="_blank">{{ $t('projects.dotfiles.title') }}</a>
        </div>

        <div class="mt-4 text-center">
            <div v-for="(line, i) in $t('projects.dotfiles.description')" :key="i" class="mb-4">
                    {{ line }}
            </div>
        </div>

    </div>
</template>