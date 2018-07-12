const api = require('../../api')
const { API_URL } = require('../../config')

function pairs() {
  return api.get(API_URL + '/tickers/pairs')
}

module.exports = { pairs }
