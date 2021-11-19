<template>
    <div class="grid grid-cols-1 lg:grid-cols-1-3 ml-4 gap-2 w-100">

        <div class="lg:ml-auto mr-4 lg:mr-32 lg:w-2/3 text-left lg:text-right leading-relaxed">

            <div v-for="(line, i) in $t('whatDoIDo.text')" :key="i">

                {{ line }}

            </div>

        </div>


        <div class="flex items-center order-first lg:order-none lg:ml-auto lg:mr-24">

            <div>

                <span class="block text-5xl mt-2">{{ $t('whatDoIDo.title') }}</span>

                <hr class="w-32 border-accent my-2 lg:float-right">

            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
@responsive {
    .grid-cols-1-3 {
        grid-template-columns: 66% 1fr;
    }
}
</style>