const { Nuxt, Builder } = require('nuxt')

const app = require('express')()
const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || 3000

app.use('/api', require('./api/proxy.js'))

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
app.listen(port, '0.0.0.0')

const currentEnv = isProd ? 'production' : 'developpement'
console.log(`Server listening on localhost ${port} in ${currentEnv} mode`)
