const { signTransaction } = require('../../utils')
const { API_URL } = require('../../config')
const api = require('../../api')

function signArray(array, privateKey) {
  return array.reduce((map, item) => {
    map[item.id] = signTransaction(item.txn, privateKey)
    return map
  }, {})
}

function broadcastOrder({ order, privateKey }) {
  const signatures = {
    fills: signArray(order.fills, privateKey),
    makes: signArray(order.makes, privateKey)
  }
  const url = `${API_URL}/orders/${order.id}/broadcast`
  return api.post(url, { signatures })
}

module.exports = { broadcastOrder }
