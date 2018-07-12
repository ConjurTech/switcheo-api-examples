const unirest = require('unirest')
const { stringifyParams, convertHashToUrlParams } = require('./utils')

function handleResponse(response, resolve) {
  if (response.error) { console.log(response.error) }
  resolve(response)
}

function get(url, params) {
  return new Promise((resolve) => {
    const paramsString = convertHashToUrlParams(params)
    unirest.get(url + '?' + paramsString)
           .end(response => handleResponse(response, resolve))
  })
}

function post(url, params) {
  return new Promise((resolve) => {
    unirest.post(url)
           .headers({ 'Content-Type': 'application/json' })
           .send(stringifyParams(params))
           .end(response => handleResponse(response, resolve))
  })
}

module.exports = { get, post }
