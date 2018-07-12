const api = require('../../api')
const { API_URL } = require('../../config')

function last24Hours() {
  return api.get(API_URL + '/tickers/last_24_hours')
}

module.exports = { last24Hours }
