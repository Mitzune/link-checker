import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/icon', '@pinia/nuxt', '@nuxt/fonts'],
    css: ['~/assets/css/main.css'],

    imports: { dirs: ['./composables/*/*.{ts,js}'] },
    devtools: { enabled: true },
    pinia: {
        storesDirs: ['./stores/**'],
    },

    runtimeConfig: {
        public: {
            GOOGLE_API: import.meta.env.GOOGLE_API_KEY,
            VIRUS_TOTAL_API: import.meta.env.VIRUS_TOTAL_KEY,
            URL_SCAN_API: import.meta.env.URL_SCAN_KEY,
        },
    },
})
