import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/icon', '@pinia/nuxt', '@nuxt/fonts'],
    css: ['~/assets/css/main.css'],

    imports: { dirs: ['./composables/*/*.{ts,js}'] },
    devtools: { enabled: true },
    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**'],
    },

    runtimeConfig: {
        public: {
            GOOGLE_API: import.meta.env.GOOGLE_API_KEY,
        },
    },
})
