<template>

    <span class="block w-full text-center text-3xl mt-10 mb-5">{{ t("title") }}</span>

    <div class="grid w-full">
        <div class="onTop mx-auto h-auto hidden md:block">
            <div class="w-2 h-2 -mx-1 bg-accent rounded-full" />

            <div class="w-1 -ml-0.5 -mt-1 h-full -mx-px bg-accent" />

            <div class="w-2 h-2 -mx-1 -mt-1 bg-accent rounded-full" />
        </div>

        <div class="onTop py-5 md:px-20 lg:px-16">


            <div class="w-full flex justify-center">
                <InterestsCard :left="false" title="Test" class="md:w-1/2 md:max-w-xl mx-4 md:mr-20 md:ml-0 md:-translate-x-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi similique blanditiis ipsam quis soluta odit quasi eum dolores enim saepe hic rem consectetur in molestias nihil consequatur cum, architecto reiciendis!
                </InterestsCard>
            </div>

            <div class="w-full flex justify-center mt-12">
                <InterestsCard :left="true" title="Test" class="md:w-1/2 md:max-w-xl mx-4 md:ml-20 md:mr-0 md:translate-x-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi similique blanditiis ipsam quis soluta odit quasi eum dolores enim saepe hic rem consectetur in molestias nihil consequatur cum, architecto reiciendis!
                </InterestsCard>
            </div>

            <div class="w-full flex justify-center mt-12">
                <InterestsCard :left="false" title="Test" class="md:w-1/2 md:max-w-xl mx-4 md:mr-20 md:ml-0 md:-translate-x-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi similique blanditiis ipsam quis soluta odit quasi eum dolores enim saepe hic rem consectetur in molestias nihil consequatur cum, architecto reiciendis!
                </InterestsCard>
            </div>

        </div>
    </div>

</template>

<script setup>
import InterestsCard from './helper/InterestsCard.vue';
import { useI18n } from 'vue-i18n';

const { _, t } = useI18n({
    inheritLocale: true
});

</script>
<style scoped>
.onTop {
    grid-area: 1 / 1 / 2 / 2;
}
</style>

<i18n>
    {
        "en": {
            "title": "What are my interests?",
        },
        "de": {
            "title": "Was sind meien interessen?",
        }
    }
    </i18n>