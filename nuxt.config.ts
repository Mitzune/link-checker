import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    imports: { dirs: ['./composables/*/*.{ts,js}'] },
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/icon', '@pinia/nuxt'],
    devtools: { enabled: true },

    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**'],
    },

    runtimeConfig: {
        //env: process.env.NODE_ENV,
    },
})
