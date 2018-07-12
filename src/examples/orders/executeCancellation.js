const { signTransaction } = require('../../utils')
const { API_URL } = require('../../config')
const api = require('../../api')

function executeCancellation({ cancellation, privateKey }) {
  const signature = signTransaction(cancellation.transaction, privateKey)
  const url = `${API_URL}/cancellations/${cancellation.id}/broadcast`
  return api.post(url, { signature })
}

module.exports = { executeCancellation }
