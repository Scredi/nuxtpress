/**
 * Proxy to request wordpress.
 * all internal /api/xxx requests are handled by this file,
 * which pass requests then to Wordpress API.
 * This let us a chance to implement custom cache of our own.
 */
const cachios = require('cachios')
const express = require('express')
const config = require('../nuxt.config.js')

const router = express.Router()
const endpoint = config.env.wordpressApiBaseUrl

cachios.getResponseCopy = response => {
  return {
    status: response.status,
    headers: response.headers,
    data: response.data
  }
}

router.get('/cache', (req, res) => {
  res.send(JSON.stringify(cachios.cache.getStats()))
})

router.get('/cache/flush', (req, res) => {
  cachios.cache.flushAll()
  res.send('caches vidés')
})

// by default, just pass the request to Wordpress api and cache it with cachios
router.get('*', async (req, res) => {
  const url = endpoint + req.originalUrl.replace('/api', '')
  cachios.get(url, {
    ttl: 86400 // one day, in seconds
  }).then(r => {
    res.set('x-wp-total', r.headers['x-wp-total'])
    res.set('x-wp-totalpages', r.headers['x-wp-totalpages'])
    res.json(r.data)
  }).catch(e => res.send(url + ' ' + e.message))
})

module.exports = router
