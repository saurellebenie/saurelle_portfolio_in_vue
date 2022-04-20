import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import style from './style.css';
import animateCss from 'animate.css'
import WOW from 'wowjs';


createApp(App).use(style).use(WOW).use(router).use(animateCss.default).mount('#app')
