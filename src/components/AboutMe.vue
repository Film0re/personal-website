<template>

<Card>
    <template #header>
        <h1>About Me</h1>
    </template>

    <template #content>
        <Image src="/assets/RiotSign.jpg" alt="Daniel Dowdle" class="img" width="650" />
        <p>
            Hi my name is Daniel and I am currently a student at the University of Minnesota studying Computer Science.
            I will be a junior this fall, I'm excited to continue learning and growing as a developer.

            Currently I am working as a Software Engineer Intern at <a href="https://hydraflexinc.com/">HydraFlex</a> where I am refactoring a quoting tool for the company.

            <br>
            <br>
            In my free time I like to play video games, watch anime and hang out with friends. Oh and I also like League of Legends. 😎
        </p>
    </template>

    <template #footer>
        <div class="footer">
        <a href="https://github.com/Film0re ">
            <i class="pi pi-github footer-icons" />
        </a>
        <a href="https://www.linkedin.com/in/daniel-dowdle-86bb63261/">
            <i class="pi pi-linkedin footer-icons" />
        </a>
    </div>
        
    </template>
</Card>

</template>

<script setup>
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Image from 'primevue/image';

</script>

<style scoped>
.footer-icons{
    font-size: 1.5rem;
    margin: 0 .2rem;
}

.footer{
    border-top: 1px solid #d9d9d9;
    padding-top: 1rem;
}

.img{
    width: 50%;
    height: auto;
}

</style>
