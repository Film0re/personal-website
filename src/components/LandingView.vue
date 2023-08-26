<template>

<div class="centered">
    <div>
        <AboutMe />
    </div>

</div>

</template>

<script setup>
import AboutMe from './AboutMe.vue';
import workProject from './workProject.vue';

import { ref } from 'vue';

import { usePrimeVue } from 'primevue/config';
const primevue = usePrimeVue(); 

const currentTheme = ref('mdc-dark-deeppurple');

const toggleTheme = () => {
    let nextTheme = 'mdc-light-deeppurple';

    if (currentTheme.value === 'mdc-light-deeppurple') {
        nextTheme = 'mdc-dark-deeppurple';
    }   

    primevue.changeTheme(currentTheme.value, nextTheme, 'id-to-link', () => {});

    currentTheme.value = nextTheme;
}

// toggleTheme();


</script>

<style scoped>
.centered{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>