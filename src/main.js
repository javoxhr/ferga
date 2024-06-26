import "../src/assets/scss/main.scss"

import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import router from './router'
import i18n from "./i18n"
// import {Swiper, SwiperSlide} from "swiper/vue"

// app.component("Swiper", Swiper)
// app.component("SwiperSlide", SwiperSlide)

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')