import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
    const baseURL = "https://evr.bjst.uz";
    const lang = ref(localStorage.getItem("lang")) ? localStorage.getItem("lang") : 'uzb'
    const loader = ref(true)
    return {
        loader,
        baseURL,
        lang,
    }
})