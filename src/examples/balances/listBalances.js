const api = require('../../api')
const { API_URL, CONTRACT_HASH } = require('../../config')

function listBalances({ addresses }) {
  const params = { addresses, contractHashes: [CONTRACT_HASH] }
  return api.get(API_URL + '/balances', params)
}

module.exports = { listBalances }
