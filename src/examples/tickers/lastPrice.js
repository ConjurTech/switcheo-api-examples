const api = require('../../api')
const { API_URL } = require('../../config')

function lastPrice() {
  return api.get(API_URL + '/tickers/last_price')
}

module.exports = { lastPrice }
