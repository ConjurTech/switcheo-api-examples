const { getTimestamp, signParams } = require('../../utils')
const { API_URL } = require('../../config')
const api = require('../../api')

function executeWithdrawal ({ withdrawal, privateKey }) {
    const signableParams = { id: withdrawal.id, timestamp: getTimestamp() }
    const signature = signParams(signableParams, privateKey)
    const url = `${API_URL}/withdrawals/${withdrawal.id}/broadcast`
    return api.post(url, {...signableParams, signature })
}

module.exports = { executeWithdrawal }
