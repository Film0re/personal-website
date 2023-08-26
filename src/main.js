import { createApp, ref } from 'vue'
// import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
//theme
// import "primevue/resources/themes/lara-light-indigo/theme.css";
//import "primevue/resources/themes/md-dark-deeppurple/theme.css"
import 'primeicons/primeicons.css';

const app = createApp(App)
app.use(PrimeVue);



app.mount('#app')
