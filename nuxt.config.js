module.exports = {
  env: {
    wordpressApiBaseUrl: 'https://css-tricks.com/wp-json/wp/v2',
    proxyApiBaseUrl: process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:3000/api' : 'http://localhost:3000/api'
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
  /*
  ** Add axios globally
  */
  build: {
    vendor: [
      'axios'
    ],
    maxChunkSize: 300000,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      // disable uglify, does not support ES6
      // config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')

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
  postcss: [require('autoprefixer')]
}
