<template>

    <span class="block w-full text-center text-3xl mt-10 mb-5">{{ t("title") }}</span>

    <div class="grid w-full">
        <div class="onTop mx-auto h-auto hidden md:block">
            <div class="w-2 h-2 -mx-1 bg-accent rounded-full" />

            <div class="w-1 -ml-0.5 -mt-1 h-full -mx-px bg-accent" />

            <div class="w-2 h-2 -mx-1 -mt-1 bg-accent rounded-full" />
        </div>

        <div class="onTop py-5 md:px-20 lg:px-16">


            <div data-aos="fade-right" class="w-full flex justify-center">
                <InterestsCard :left="false" :title="t('programming_title')" class="md:w-1/2 md:max-w-xl mx-4 md:mr-20 md:ml-0 md:-translate-x-1/2">
                    {{ t('programming_content_1') }}
                    <div class="inline text-blue-700 hover:text-accent hover:border-b border-accent whitespace-nowrap">
                        <Icon class="inline -mt-1" icon="akar-icons:link-chain" height="16" />
                        <a  href="https://www.rust-lang.org/learn/get-started" target="_blank">Rust</a>
                    </div>.
                    {{ t('programming_content_2') }}
                    <div class="inline text-blue-700 hover:text-accent hover:border-b border-accent whitespace-nowrap">
                        <Icon class="inline -mt-1" icon="akar-icons:link-chain" height="16" />
                        <a  href="https://github.com/ondolin" target="_blank">Github</a>
                    </div>.
                </InterestsCard>
            </div>

            <div data-aos="fade-left" class="hidden w-full md:flex justify-center mt-12">
                <InterestsCard :left="true" :title="t('backing_title')" class="md:w-1/2 md:max-w-xl mx-4 md:ml-20 md:mr-0 md:translate-x-1/2">
                    {{ t('backing_content') }}
                </InterestsCard>
            </div>
            <div data-aos="fade-right" class="md:hidden w-full flex justify-center mt-12">
                <InterestsCard :left="true" :title="t('backing_title')" class="md:w-1/2 md:max-w-xl mx-4 md:ml-20 md:mr-0 md:translate-x-1/2">
                    {{ t('backing_content') }}
                </InterestsCard>
            </div>

            <div data-aos="fade-right" class="w-full flex justify-center mt-12">
                <InterestsCard :left="false" :title="t('rpg_title')" class="md:w-1/2 md:max-w-xl mx-4 md:mr-20 md:ml-0 md:-translate-x-1/2">
                    <span class="italic">{{ t('you_shall_not_pass') }}</span>
                    {{ t("rpg_content") }}
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

            "programming_title": "Programming",
            "programming_content_1": "One of my main interests is programming. In my free time I write small applications to simplify tasks in my life. My favorite programming language is ",
            "programming_content_2": "Most projects I work on are made Open Source and are available at my ",

            "backing_title": "Backing",
            "you_shall_not_pass": "You shall not pass!!!",
            "backing_content": "Backing is one of my favorite activities. It does not matter if it's Cake, Cookies or Muffins. I especially love backing for family and friends. My goal is to one day be able to bake decorative cakes. It will take some time to be able to do so, but I will not surrender.",

            "rpg_title": "Dungeons & Dragons",
            "rpg_content": "Well, that should be enough to prove that I am a nerd... So yea, obviously I play DnD in my free time. I've been player and GM, and love both of it. I also love high fantasy storys like LOTR or Eragon."
        },
        "de": {
            "title": "Was sind meine interessen?"
        ,
            "programming_title": "Programmieren",
            "programming_content_1": "Eins meiner Hauptinteressen ist das Programmieren. In meiner Freizeit schreibe ich gerne kleine Anwendungen, um mein Leben zu vereinfachen. Meine Lieblings-Programmiersprache ist ",
            "programming_content_2": "Die meisten meiner Projekte sind Open Source und einsehbar auf meinem ",

            "backing_title": "Backen",
            "backing_content": "Backen ist eine meiner Lieblingsaktivitäten. Egal ob es Kuchen, Kekse oder Muffins sind. Besonders für Familie und Freunde liebe ich es, etwas zu backen. Mein Ziel ist es, eines Tages dekorative Torten backen zu können. Auch wenn das noch etwas dauern wird, werde ich nicht aufgeben.",

            "rpg_title": "Dungeons & Dragons",
            "you_shall_not_pass": "You shall not pass!!!",
            "rpg_content": "Jaaa... Das sollte reichen, um zu beweisen, dass ich ein Nerd bin. Also spiele ich natürlich auch DnD in meiner Freizeit. Ich habe sowohl die Rolle des Spielers als auch die des DMs übernommen und liebe Beides. Meine Lieblings-Fantasy Universen sind derzeit LOTR und Eragon."
        }
    }
    </i18n>