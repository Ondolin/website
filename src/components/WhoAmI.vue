<template>
    <span class="block w-full text-center text-3xl whoAmI pt-6">{{ t("title") }}</span>

    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-3 px-10 py-6 justify-center">

        <div class="col-span-2 mt-3 flex justify-center">
            <div class="text-lg text-left max-w-xl xl:max-w-2xl h-full mt-5">
                <span class="block leading-relaxed">{{ t("content", {age: calculateAge()}) }}</span>
                <span class="block mt-4 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus amet animi cumque deleniti dolor eius eum ipsum labore magni odit quaerat qui ratione reprehenderit, similique tempore vel velit vero.</span>
                <span class="block mt-4 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem deleniti dicta dolor ea expedita fugiat fugit hic iste nam natus necessitatibus nostrum officia omnis perspiciatis porro quibusdam repudiandae, voluptas.</span>
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
        "content": "Hi, my name is Marie. I am {age} years old. Currently I am studying Computer science at the RWTH Aachen University.",
        "contact": "Feel free to contact me if you have any questions."
    },
    "de": {
        "title": "Wer bin ich?",
        "content": "Hi, ich bin Marie. Ich bin derzeitig {age} Jahre alt. Derzeitig studiere ich Informatik an der RWTH Aachen University.",
        "contact": "Solltest du irgendwelche fragen haben, kontaktiere mich gerne."
    }
}
</i18n>