const api = require('../../api')
const { API_URL, CONTRACT_HASH } = require('../../config')

function listTrades(blockchain, pair, limit) {
  const params = { blockchain, pair, limit, contract_hash: CONTRACT_HASH }
  api.get(API_URL + '/trades', params).then(function(response) {
    console.log('listTrades')
    console.log(response.body)
  })
}

listTrades('neo', 'SWTH_NEO', 3)
