const { Nuxt, Builder } = require('nuxt')
const app = require('express')()

const proxy = require('./api/proxy.js')
const isProd = (process.env.NODE_ENV === 'production')
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)
app.use('/api', proxy)

// We instantiate nuxt.js
const config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

app.use(nuxt.render)

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt).build()
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

// Listen the server
app.listen(port, host)

const currentEnv = isProd ? 'production' : 'developpement'
console.log(`Server listening on ${host} ${port} in ${currentEnv} mode`)
