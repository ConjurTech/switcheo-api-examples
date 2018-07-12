const api = require('../../api')
const { API_URL, CONTRACT_HASH } = require('../../config')

function listOffers(blockchain, pair) {
  const params = { blockchain, pair, contract_hash: CONTRACT_HASH }
  return api.get(API_URL + '/offers', params)
}

module.exports = { listOffers }
