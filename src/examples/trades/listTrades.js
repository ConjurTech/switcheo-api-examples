const api = require('../../api')
const { API_URL, CONTRACT_HASH } = require('../../config')

function listTrades(blockchain, pair, limit) {
  const params = { blockchain, pair, limit, contract_hash: CONTRACT_HASH }
  return api.get(API_URL + '/trades', params)
}

module.exports = { listTrades }
