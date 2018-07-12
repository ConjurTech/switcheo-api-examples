const { signTransaction } = require('../../utils')
const { API_URL } = require('../../config')
const api = require('../../api')

function broadcastDeposit ({ deposit, privateKey }) {
    // deposit = JSON.parse(deposit);
    const { id, transaction: depositTxn } = deposit;
    console.log(depositTxn)
    const signature = signTransaction(depositTxn, privateKey);
    const url = `${API_URL}/deposits/${id}/broadcast`
    return api.post(url, { signature })
};

module.exports = { broadcastDeposit }