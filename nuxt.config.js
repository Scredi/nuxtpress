module.exports = {
  env: {
    wordpressApiBaseUrl: 'https://public-api.wordpress.com/wp/v2/sites/yannboisselier.wordpress.com',
    proxyApiBaseUrl: process.env.NODE_ENV === 'production' ? 'https://test.fr/api' : 'http://localhost:3000/api'
  },
  router: {
    middleware: [
      'ssr-cookie'
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'NuxtPress - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
      'axios',
      '~/api/api'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      // disable uglify, does not support ES6
      config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
