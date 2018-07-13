const { getTimestamp, signParams } = require('../../utils')
const { API_URL, CONTRACT_HASH } = require('../../config')
const api = require('../../api')

function createWithdrawal ({ blockchain, address, assetID, amount, privateKey }) {
  const signableParams = { blockchain, contractHash: CONTRACT_HASH, assetID, amount, timestamp: getTimestamp() }
  const signature = signParams(signableParams, privateKey,)
  const apiParams = { ...signableParams, address, signature }
  return api.post(API_URL + '/withdrawals', apiParams)
}

module.exports = { createWithdrawal }
