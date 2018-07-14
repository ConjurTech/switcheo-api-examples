const { signTransaction } = require('../../utils')
const { API_URL } = require('../../config')
const api = require('../../api')

function executeDeposit ({ deposit, privateKey }) {
  const signature = signTransaction(deposit.transaction, privateKey)
  const url = `${API_URL}/deposits/${deposit.id}/broadcast`
  return api.post(url, { signature })
}

module.exports = { executeDeposit }
