<script setup>
import LandingView from './components/LandingView.vue';
import workProject from './components/workProject.vue';
import AboutMe from './components/AboutMe.vue';

import { ref } from 'vue';
import { usePrimeVue } from 'primevue/config';
import ToggleTheme from './components/header/toggleTheme.vue';
const primevue = usePrimeVue(); 

const currentTheme = ref('mdc-dark-deeppurple');



        
</script>

<template>
  <div id="navbar">
  <ToggleTheme 
    :currentTheme="currentTheme"
    @updated-theme="currentTheme = $event"
    id="theme-switcher"
  />
</div>
  <LandingView />

</template>

<style scoped>
#navbar{
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

</style>
