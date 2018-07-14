const { getTimestamp, signParams } = require('../../utils')
const { API_URL, CONTRACT_HASH } = require('../../config')
const api = require('../../api')

function createOrder({ pair, blockchain, side, price,
                       wantAmount, useNativeTokens, orderType,
                       privateKey, address }) {
  const signableParams = { pair, blockchain, side, price, wantAmount,
                           useNativeTokens, orderType, timestamp: getTimestamp(),
                           contractHash: CONTRACT_HASH }

  const signature = signParams(signableParams, privateKey)
  const apiParams = { ...signableParams, address, signature }
  return api.post(API_URL + '/orders', apiParams)
}

module.exports = { createOrder }
