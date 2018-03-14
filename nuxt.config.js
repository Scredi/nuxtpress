module.exports = {
  env: {
    wordpressApiBaseUrl: 'https://css-tricks.com/wp-json/wp/v2',
    proxyApiBaseUrl: process.env.NODE_ENV === 'production' ? 'https://nuxtpress.now.sh/api' : 'http://localhost:3000/api'
  },
  serverMiddleware: ['~/api/proxy'],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://nuxtpress.now.sh' : 'http://localhost:3000',
    proxy: true
  },
  proxy: {
    '/api': process.env.NODE_ENV === 'production' ? 'https://nuxtpress.now.sh' : 'http://localhost:3000'
  },
  router: {
    base: '/',
    middleware: [
      'ssr-cookie'
    ]
  },
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: { lang: 'en', prefix: 'og: http://ogp.me/ns#' },
    titleTemplate: 'NuxtPress - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js front-end pour wordpress' },
      { name: 'application-name', content: 'NuxtPress' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    '~/assets/css/main.css'
  ],
  build: {
    maxChunkSize: 300000,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  postcss: [require('autoprefixer')({browsers: ['last 3 versions']})]
}
