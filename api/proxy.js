const express = require('express')
const cachios = require('cachios')
const bodyParser = require('body-parser')

// const config = require('../nuxt.config.js')
// const endpoint = config.env.wordpressApiBaseUrl

const app = express()

/* app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}) */
app.use(bodyParser.json())

cachios.getResponseCopy = response => {
  return {
    status: response.status,
    headers: response.headers,
    data: response.data
  }
}

app.get('/cache', (req, res) => {
  res.send(JSON.stringify(cachios.cache.getStats()))
})

app.get('/cache/flush', (req, res) => {
  cachios.cache.flushAll()
  res.send('caches vidés')
})

// by default, just pass the request to Wordpress api and cache it with cachios
app.get('*', async (req, res) => {
  console.log(req.originalUrl)
  const url = req.originalUrl
  cachios.get(url, {
    ttl: 86400 // one day, in seconds
  }).then(r => {
    res.set('x-wp-total', r.headers['x-wp-total'])
    res.set('x-wp-totalpages', r.headers['x-wp-totalpages'])
    res.json(r.data)
  }).catch(e => res.send(url + ' ' + e.message))
})

module.exports = {
  path: '/api',
  handler: app
}
