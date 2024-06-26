import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: localStorage.getItem("lang") ? localStorage.getItem("lang") : 'Uzbekcha',
  fallbackLocale: "uz",
  messages: {
    uz: {
        hello: "Tilni tanlang"
    },
    en: {
        hello: "Choose language"
    },
    ru: {
        hello: "Выберите язык"
    }
  }  
})

export default i18n