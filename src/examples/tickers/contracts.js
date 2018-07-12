const api = require('../../api')
const { API_URL } = require('../../config')

function contracts() {
  return api.get(API_URL + '/tickers/contracts')
}

module.exports = { contracts }
