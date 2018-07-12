const { getTimestamp, signParams } = require('../../utils')
const { API_URL } = require('../../config')
const api = require('../../api')

function createCancellation({ order, address, privateKey }) {
  const signableParams = { orderId: order.id, timestamp: getTimestamp() }
  const signature = signParams(signableParams, privateKey)
  const apiParams = { ...signableParams, signature, address }
  return api.post(API_URL + '/cancellations', apiParams)
}

module.exports = { createCancellation }
