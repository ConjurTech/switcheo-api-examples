const { getTimestamp, signParams } = require('../../utils')
const { API_URL, CONTRACT_HASH } = require('../../config')
const api = require('../../api')

function createOrder({ pair, blockchain, address, side, price,
                       wantAmount, useNativeTokens, orderType,
                       privateKey }) {
  const timestamp = getTimestamp()
  const contractHash = CONTRACT_HASH
  const signableParams = { pair, blockchain, contractHash: CONTRACT_HASH,
                           side, price, wantAmount, useNativeTokens, orderType }

  const signature = signParams({ ...signableParams, timestamp }, privateKey)
  const apiParams = { ...signableParams, signature, address, timestamp }
  return api.post(API_URL + '/orders', apiParams)
}

module.exports = { createOrder }
