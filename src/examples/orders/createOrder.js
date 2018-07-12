const { getTimestamp, signParams } = require('../../utils')
const { API_URL, CONTRACT_HASH } = require('../../config')
const api = require('../../api')

function createOrder({ pair, blockchain, address, side, price,
                       wantAmount, useNativeTokens, orderType,
                       privateKey }) {
  const contractHash = CONTRACT_HASH
  const signableParams = { pair, blockchain, contractHash: CONTRACT_HASH,
                           side, price, wantAmount, useNativeTokens,
                           orderType, timestamp: getTimestamp() }

  const signature = signParams(signableParams, privateKey)
  const apiParams = { ...signableParams, signature, address }
  return api.post(API_URL + '/orders', apiParams)
}

module.exports = { createOrder }
