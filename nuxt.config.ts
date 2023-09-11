// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
    // '@nuxtjs/supabase'
  ],

})
