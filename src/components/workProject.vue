<template>
    <div>
        <Card
        class="card"

        >
            <template #title>
                <h3>AquaLab Quoting Tool</h3>
            </template>

            

            <template #content>
                <p>
                This is a project I have been working on for the past 3 months. It is a quoting tool for a company called HydraFlex.
                The tool is used by sales reps to generate quotes for customers. 
                </p>

                <img src="../../public/assets/AQLT_homepage.png" class="img" alt="AquaLab Quoting Tool">
            <p>
                Technology I have used in this project include:
            </p>
            <div
            class="columns"
            >
            <div>
                <h3> Old Stack</h3>
                <ul class="tech-list">
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
            </div>

            <div>
                <h3> New Stack </h3>
                <ul class="tech-list">
                    <li>PostgreSQL</li>
                    <li>Microsoft Azure</li>
                    <li>Vue</li>
                    <li>Node</li>
                </ul>
            </div>
            </div>

            <p>
                Before I started this project I knew basically nothing about any of the technologies that I would be using. A little React(Native) here and a little SQL there but that was about it. 
                Thankfully, my mentor was very helpful and created a couple of crash courses for me to get up to speed. I have learned a lot about the technologies I am using 
                and I am excited to continue learning more about them.
            </p>

            </template>
        </Card>

    </div>
</template>

<script setup>
import Card from 'primevue/card';

</script>


<style scoped>
.img{
    width: 80%;
}

.card{
    max-width: 800px;
}

.columns{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.tech-list{
    text-align: left;
}

</style>