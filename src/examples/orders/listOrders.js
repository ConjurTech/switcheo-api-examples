const api = require('../../api')
const { API_URL, CONTRACT_HASH } = require('../../config')

function listOrders({ address, pair }) {
  const params = { address, pair, contract_hash: CONTRACT_HASH }
  return api.get(API_URL + '/orders', params)
}

module.exports = { listOrders }
