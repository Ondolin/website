<template>
    <span class="block w-full text-center text-3xl whoAmI pt-6">{{ t("title") }}</span>

    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-3 px-10 py-6 justify-center">

        <div class="col-span-2 mt-3 flex justify-center">
            <div class="text-lg text-left max-w-xl xl:max-w-2xl h-full mt-5">
                <span class="block leading-relaxed">{{ t("content_1", {age: calculateAge()}) }}</span>
                <span class="block mt-4 leading-relaxed">{{ t("content_2") }}</span>
                <span class="block mt-4 leading-relaxed">{{ t("content_3") }}</span>
                <span class="block mt-4 leading-relaxed">{{ t("content_4") }}</span>
            </div>
        </div>

        <div class="xl:col-span-2 flex flex-col items-center w-full px-5 mt-10 md:mt-0">
            <img class="rounded-full w-72 aspect-square shadow-lg" src="/ProfilePicture.jpeg"/>
            <span class="text-2xl font-bold mt-4">Marie Kaiser</span>
            <span class="mt-4 w-2/3 text-center">{{ t("contact") }}</span>
            <div class="flex flex-col items-center mt-2 md:text-sm lg:text-base">
                <a class="text-blue-500 hover:text-blue-400" href="https://t.me/ondolin" target="_blank">
                    <Icon class="inline" icon="bxl:telegram"/>
                    Telegram</a>
                <a class="text-blue-500 hover:text-blue-400" href="mailto:contact@marie-kaiser.eu" target="_blank">
                    <Icon class="inline" icon="fe:mail"/>
                    contact@marie-kaiser-eu</a>
            </div>
        </div>
    </div>
</template>
<script setup>

import {useI18n} from 'vue-i18n';

const {_, t} = useI18n({
    inheritLocale: true
});

function calculateAge() {
    let birthDate = new Date("09/05/2001");
    let otherDate = new Date();

    let years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() ||
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}

</script>

<i18n>
{
    "en": {
        "title": "Who am I?",
        "content_1": "Hi, my name is Marie. I am {age} years old. Currently I am studying Computer science at the RWTH Aachen University.",
        "content_2": "In 2019 I have started my study directly after graduating from High School. Currently I am working on my bachelor's degree.",
        "content_3": "My main interest within my studies is directed towards the theoretical computer science. Accordingly, I focus my studies as much as possible on this area. Furthermore I am planning to do my bachelor thesis on a theoretical topic.",
        "content_4": "Since the beginning of 2022 I am working as a tutor at the University.",
        "contact": "Feel free to contact me if you have any questions."
    },
    "de": {
        "title": "Wer bin ich?",
        "content_1": "Hi, ich bin Marie. Ich bin {age} Jahre alt und studiere Informatik an der RWTH Aachen University.",
        "content_2": "Im Jahr 2019 habe ich mein Studium direkt nach dem Abitur begonnen, und arbeite derzeitig auf meinen Bachelor Abschluss hin.",
        "content_3": "Hauptsächlich interessiere ich mich in meinem Studium für die Theoretische Informatik. Entsprechend fokussiere ich meine studien so weit wie möglich auf diesen Bereich, und plane auch meine Bachelor Arbeit in einem theoretischen Thema.",
        "content_4": "Seit anfang 2022 arbeite ich nebenbei als Tutorin an der Uni.",
        "contact": "Solltest du irgendwelche fragen haben, kontaktiere mich gerne."
    }
}
</i18n>