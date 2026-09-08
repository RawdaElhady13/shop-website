import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
const description = "Seamlessly connecting shippers with carriers. SND is your go-to platform for direct, commission-free logistics. Whether you're a shipper, carrier, or shipping agent, we streamline your operations with efficiency and transparency.";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app:{
    head:{
      title:"shop",
        htmlAttrs: { lang: "en", dir: 'ltr', translate: 'no' },
      meta: [{ name: "description", content: description }],
    }
  },
  modules:[
    '@pinia/nuxt'
  
  ],
  css:['./assets/css/main.css'],
  pinia:{
    storesDirs: [`./stores/**`]
  },
  vite:{
    plugins:[
      tailwindcss(),
    ],
  }




})