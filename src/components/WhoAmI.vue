<template>
    {{ t("content", { age: calculateAge() }) }}
</template>
<script setup>

import { useI18n } from 'vue-i18n';

const { _, t } = useI18n({
    inheritLocale: true
});

function calculateAge () {
    let birthDate = new Date("09/05/2001");
    let otherDate = new Date();

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

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
        "content": "Hi, my name is Marie. I am {age} years old. Currently I am studying Computer Scrience at the RWTH Aachen University."
    },
    "de": {
        "title": "Wer bin ich?",
        "content": "Hi, ich bin Marie. Ich bin derzeitig {age} Jahre alt. Derzeitig studiere ich Informatik an der RWTH Aachen University."
    }
}
</i18n>