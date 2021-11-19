<template>
    <div class="grid grid-cols-1 lg:grid-cols-1-3 ml-4 gap-2">

        <div class="flex items-center">

            <div>

                <span class="block text-5xl mt-2">{{ $t('whoAmI.title') }}</span>

                <hr class="w-32 border-accent my-2">

            </div>
        </div>

        <div class="mr-32">

            <div v-for="(line, i) in $t('whoAmI.text')" :key="i">

                {{ line }}

            </div>

        </div>
    </div>
</template>
<style scoped lang="scss">
@responsive {
    .grid-cols-1-3 {
        grid-template-columns: 33% 1fr;
    }
}
</style>