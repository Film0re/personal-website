<template>
<InputSwitch v-model="darkMode" @change="toggleTheme" />

</template>

<script setup>
import InputSwitch from 'primevue/inputswitch'; 

import { usePrimeVue } from 'primevue/config';
const primevue = usePrimeVue();

import { ref } from 'vue';

const darkMode = ref(false);

const props = defineProps({
    currentTheme: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['updated-theme']);

const currentTheme = ref(props.currentTheme);

const toggleTheme = () => {
    let nextTheme = 'mdc-light-deeppurple';

    if (currentTheme.value === 'mdc-light-deeppurple') {
        nextTheme = 'mdc-dark-deeppurple';
    }   

    primevue.changeTheme(currentTheme.value, nextTheme, 'id-to-link', () => {});

    currentTheme.value = nextTheme;

    emit('updated-theme', currentTheme.value);
}

</script>

<style scoped>

</style>